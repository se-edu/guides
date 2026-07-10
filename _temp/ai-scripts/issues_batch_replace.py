#!/usr/bin/env python3
"""
Apply spelling replacements across Markdown one word pair at a time.

After each word pair, the script pauses so you can inspect changes,
optionally stage files, and optionally create a commit before continuing.

Workflow:
1. Edit the CONFIG block below.
2. Run the script.
3. Review and optionally edit files manually.
4. Stage files manually if desired.
5. Let the script create a commit, or skip the commit.
6. Continue to the next word pair.
"""

from __future__ import annotations

import re
import subprocess
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Iterable, Sequence

from issues_found import ISSUES_FOUND


@dataclass
class Config:
    root_dir: Path | None = None
    include_extensions: tuple[str, ...] = (".md", ".njk")
    omit_dirs: tuple[str, ...] = (
        ".git",
        ".idea",
        "_site",
        "_markbind",
        "node_modules",
    )
    is_auto_commit: bool = True
    is_stage_only: bool = False
    issues_found: list[tuple[str, ...]] = field(default_factory=lambda: ISSUES_FOUND)
    excluded_literals: tuple[str, ...] = (
        # "Color Theme",
    )


@dataclass(frozen=True)
class ReplacementIssue:
    current: str
    replacement: str
    file: str | None = None
    message: str | None = None


CONFIG = Config()
PROTECTED_SPAN_PATTERNS: tuple[re.Pattern[str], ...] = ()


def iter_target_files(
    root_dir: Path,
    extensions: Iterable[str],
    omit_dirs: set[str],
) -> Iterable[Path]:
    normalized_exts = {ext if ext.startswith(".") else f".{ext}" for ext in extensions}

    if root_dir.is_file():
        if root_dir.suffix in normalized_exts:
            yield root_dir
        return

    for path in sorted(root_dir.rglob("*")):
        if not path.is_file():
            continue
        if path.suffix not in normalized_exts:
            continue
        if any(part in omit_dirs for part in path.parts):
            continue
        yield path


def build_protected_spans(text: str) -> list[tuple[int, int]]:
    spans: list[tuple[int, int]] = []

    for regex in PROTECTED_SPAN_PATTERNS:
        for match in regex.finditer(text):
            spans.append(match.span())

    return merge_spans(spans)


def merge_spans(spans: list[tuple[int, int]]) -> list[tuple[int, int]]:
    if not spans:
        return []
    spans.sort()
    merged = [spans[0]]
    for start, end in spans[1:]:
        last_start, last_end = merged[-1]
        if start <= last_end:
            merged[-1] = (last_start, max(last_end, end))
        else:
            merged.append((start, end))
    return merged


def apply_pair(
    text: str,
    current: str,
    replacement: str,
    excluded_literals: tuple[str, ...],
) -> tuple[str, int]:
    spans = build_protected_spans(text)
    pattern = re.compile(rf"(?<!\w){re.escape(current)}(?!\w)")

    out_parts: list[str] = []
    replacements = 0
    cursor = 0

    for start, end in spans:
        editable = text[cursor:start]
        updated, count = replace_in_editable_text(
            editable,
            pattern,
            replacement,
            excluded_literals,
        )
        out_parts.append(updated)
        out_parts.append(text[start:end])
        replacements += count
        cursor = end

    tail, count = replace_in_editable_text(
        text[cursor:],
        pattern,
        replacement,
        excluded_literals,
    )
    out_parts.append(tail)
    replacements += count

    return "".join(out_parts), replacements


def replace_in_editable_text(
    text: str,
    pattern: re.Pattern[str],
    replacement: str,
    excluded_literals: tuple[str, ...],
) -> tuple[str, int]:
    pieces: list[str] = []
    cursor = 0
    count = 0

    for match in pattern.finditer(text):
        start, end = match.span()
        line_start = text.rfind("\n", 0, start) + 1
        line_end = text.find("\n", end)
        if line_end == -1:
            line_end = len(text)
        line = text[line_start:line_end]

        if any(literal in line for literal in excluded_literals):
            continue

        pieces.append(text[cursor:start])
        pieces.append(replacement)
        cursor = end
        count += 1

    pieces.append(text[cursor:])
    return "".join(pieces), count


def prompt_for_commit(message: str) -> bool:
    print()
    print(f"Create a commit for staged files with message: {message} ?")
    print("Enter 'y' to commit, or press Enter to skip.")
    try:
        return input("> ").strip().lower() in {"y", "yes"}
    except EOFError:
        return False


def git_working_dir(root_dir: Path) -> Path:
    if root_dir.is_file():
        return root_dir.parent
    return root_dir


def stage_changes(root_dir: Path) -> bool:
    working_dir = git_working_dir(root_dir)
    pathspec = str(root_dir) if root_dir.is_file() else "."
    command = ["git", "-C", str(working_dir), "add", pathspec]
    result = subprocess.run(command, check=False)
    return result.returncode == 0


def run_commit(root_dir: Path, message: str) -> bool:
    command = ["git", "-C", str(git_working_dir(root_dir)), "commit", "-m", message]
    result = subprocess.run(command, check=False)
    return result.returncode == 0


def parse_issue(issue: Sequence[str]) -> ReplacementIssue:
    return ReplacementIssue(
        current=issue[0],
        replacement=issue[1],
        file=issue[2] if len(issue) > 2 else None,
        message=issue[3] if len(issue) > 3 else None,
    )


def print_scan_summary(root_dir: Path, target_files: list[Path], omit_dirs: set[str]) -> None:
    if root_dir.is_file():
        print(f"Scanning file: {root_dir}")
    else:
        print(f"Scanning {len(target_files)} files under {root_dir}")
        print(f"Omitting directories: {', '.join(sorted(omit_dirs))}")
    print()


def print_issue_header(issue: ReplacementIssue, index: int, total_issues: int) -> None:
    print("=" * 80)
    if issue.message:
        print(f"Issue {index}/{total_issues} in {issue.file}")
        print(f"   '{issue.current}'")
        print(f"-> '{issue.replacement}'")
        print(f"Commit message: {issue.message}")
    else:
        print(f"Issue {index}/{total_issues}: '{issue.current}' -> '{issue.replacement}'")


def apply_issue_to_files(
    issue: ReplacementIssue,
    target_files: list[Path],
    excluded_literals: tuple[str, ...],
) -> tuple[int, list[Path]]:
    changed_files: list[Path] = []
    total_replacements = 0

    for path in target_files:
        # Re-read from disk for every pair so manual edits made during the
        # pause are preserved and become the new baseline for the next pair.
        original = path.read_text(encoding="utf-8")
        updated, replacements = apply_pair(
            original,
            issue.current,
            issue.replacement,
            excluded_literals,
        )
        if replacements == 0:
            continue

        total_replacements += replacements
        changed_files.append(path)
        path.write_text(updated, encoding="utf-8")

    return total_replacements, changed_files


def commit_message_for(issue: ReplacementIssue) -> str:
    if issue.message:
        return issue.message
    return f"Change spelling: {issue.current} -> {issue.replacement}"


def process_issue(
    issue: ReplacementIssue,
    target_files: list[Path],
    root_dir: Path,
    config: Config,
    index: int,
    total_issues: int,
) -> None:
    print_issue_header(issue, index, total_issues)

    total_replacements, changed_files = apply_issue_to_files(
        issue,
        target_files,
        config.excluded_literals,
    )

    print(f"Replacements: {total_replacements}")
    print(f"Files changed: {len(changed_files)}")

    if total_replacements == 0:
        print("WARNING: No changes done, skipping commit.")
        return

    message = commit_message_for(issue)
    stage_changes(root_dir)
    if config.is_stage_only:
        return

    if config.is_auto_commit or prompt_for_commit(message):
        if run_commit(root_dir, message):
            print("Commit created.")
        else:
            print("WARNING: Commit was not created. Check git status/staging and try again next round.")
            if config.is_auto_commit:
                input("Press Enter to continue to the next pair...")


def main(root_dir: str) -> int:
    CONFIG.root_dir = Path(root_dir)
    root_dir = CONFIG.root_dir.resolve()
    omit_dirs = set(CONFIG.omit_dirs)
    issues = [parse_issue(issue) for issue in CONFIG.issues_found]

    if not root_dir.exists():
        print(f"Root directory does not exist: {root_dir}", file=sys.stderr)
        return 1

    target_files = list(iter_target_files(root_dir, CONFIG.include_extensions, omit_dirs))
    if not target_files:
        print("No matching files found.")
        return 0

    print_scan_summary(root_dir, target_files, omit_dirs)

    for index, issue in enumerate(issues, start=1):
        process_issue(
            issue,
            target_files,
            root_dir,
            CONFIG,
            index,
            len(issues),
        )

    print()
    print("All configured word pairs have been processed.")
    return 0


if __name__ == "__main__":
    target = "/Users/damithch/Repos/git-mastery/git-mastery.github.io-refine-tour1/"
    raise SystemExit(main(target))
