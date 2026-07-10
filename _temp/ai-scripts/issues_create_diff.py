#!/usr/bin/env python3
"""
Generate an HTML review page for replacements listed in issues_found.py.

Workflow:
1. Edit issues_found.py as needed.
2. Run this script.
3. Open the generated HTML page in a browser.

The script reads the Python source instead of only importing ISSUES_FOUND so it
can preserve each item's trailing explanatory comment.
"""

from __future__ import annotations

import ast
import difflib
import html
import sys
import tokenize
from dataclasses import dataclass
from datetime import datetime
from io import StringIO
from pathlib import Path


@dataclass(frozen=True)
class Config:
    issues_file: Path = Path("issues_found.py")
    output_file: Path = Path("issues_review.html")
    page_title: str = "Issue Replacement Review"
    show_unchanged_lines: bool = True


@dataclass(frozen=True)
class Issue:
    original: str
    replacement: str
    path: str | None
    title: str | None
    comment: str | None


CONFIG = Config()
OUTPUT_FILE_PREFIX = "changes-for-review"
OUTPUT_FILE_EXTENSION = ".html"


CSS = """
:root {
  color-scheme: light;
  --bg: #f5f6f8;
  --panel: #ffffff;
  --text: #20242a;
  --muted: #68707c;
  --line: #d9dee7;
  --line-soft: #eef1f5;
  --old-bg: #fff0f0;
  --old-text: #8f1d1d;
  --new-bg: #ebf8ef;
  --new-text: #17643a;
  --mark-old: #ffd7d7;
  --mark-new: #bfedcc;
  --accent-bg: #eef4fb;
  --accent-text: #245377;
  --code-bg: #fafbfc;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font: 15px/1.55 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

main {
  max-width: 1180px;
  margin: 0 auto;
  padding: 28px 22px 48px;
}

header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 18px;
}

h1 {
  margin: 0;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0;
}

.summary {
  margin-top: 5px;
  color: var(--muted);
}

.toolbar {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
}

button {
  border: 1px solid var(--line);
  background: #fff;
  color: var(--text);
  border-radius: 6px;
  padding: 7px 10px;
  font: inherit;
  cursor: pointer;
}

button[aria-pressed="true"] {
  border-color: #87acd4;
  background: #edf5ff;
  color: #174b80;
}

.issue-list {
  display: grid;
  gap: 14px;
}

.issue {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel);
  box-shadow: 0 1px 2px rgb(20 25 35 / 5%);
}

.issue-header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 13px 16px;
  border-bottom: 1px solid var(--line-soft);
  background: #fbfcfe;
}

.index {
  min-width: 34px;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 2px 8px;
  color: var(--muted);
  text-align: center;
  font-size: 12px;
  font-weight: 700;
}

.title {
  min-width: 0;
  font-weight: 700;
}

.path {
  margin-top: 2px;
  overflow: hidden;
  color: var(--muted);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.badge {
  border-radius: 999px;
  background: var(--accent-bg);
  color: var(--accent-text);
  padding: 3px 9px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}

.issue-body {
  padding: 16px;
}

.comment {
  display: flex;
  gap: 9px;
  align-items: baseline;
  margin-bottom: 12px;
  color: #343a42;
}

.comment-label {
  flex: 0 0 auto;
  border-radius: 999px;
  background: #f0f2f5;
  color: #515a66;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: 700;
}

.comment-text {
  min-width: 0;
}

.unified {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: var(--code-bg);
}

.diff-line {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  min-height: 24px;
  border-top: 1px solid #f1f3f6;
  font: 13px/1.55 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}

.diff-line:first-child {
  border-top: 0;
}

.diff-line.hidden-unchanged {
  display: none;
}

.sign {
  user-select: none;
  border-right: 1px solid var(--line-soft);
  color: var(--muted);
  text-align: center;
}

.diff-line.minus {
  background: var(--old-bg);
}

.diff-line.minus .sign,
.diff-line.minus .content {
  color: var(--old-text);
}

.diff-line.plus {
  background: var(--new-bg);
}

.diff-line.plus .sign,
.diff-line.plus .content {
  color: var(--new-text);
}

.content {
  min-width: 0;
  padding: 2px 9px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

del,
ins {
  border-radius: 3px;
  padding: 0 1px;
  text-decoration: none;
}

del {
  background: var(--mark-old);
  color: var(--old-text);
}

ins {
  background: var(--mark-new);
  color: var(--new-text);
}

@media (max-width: 760px) {
  header,
  .issue-header {
    grid-template-columns: 1fr;
  }

  header {
    align-items: start;
  }

  .toolbar {
    justify-content: flex-start;
  }
}
"""


SCRIPT = """
const toggleUnchanged = document.getElementById("toggleUnchanged");
const setUnchangedVisibility = () => {
  if (!toggleUnchanged) {
    return;
  }
  const show = toggleUnchanged.getAttribute("aria-pressed") === "true";
  document.querySelectorAll(".diff-line.same").forEach((line) => {
    line.classList.toggle("hidden-unchanged", !show);
  });
};

if (toggleUnchanged) {
  toggleUnchanged.addEventListener("click", () => {
    const pressed = toggleUnchanged.getAttribute("aria-pressed") === "true";
    toggleUnchanged.setAttribute("aria-pressed", String(!pressed));
    toggleUnchanged.textContent = pressed ? "Show Unchanged Lines" : "Hide Unchanged Lines";
    setUnchangedVisibility();
  });
}

document.getElementById("expandAll").addEventListener("click", () => {
  document.querySelectorAll("details").forEach((item) => { item.open = true; });
});

document.getElementById("collapseAll").addEventListener("click", () => {
  document.querySelectorAll("details").forEach((item) => { item.open = false; });
});

setUnchangedVisibility();
"""



def read_issues(path: Path) -> list[Issue]:
    source = path.read_text(encoding="utf-8")
    comments_by_line = collect_comments_by_line(source)
    tree = ast.parse(source, filename=str(path))
    list_node = find_issues_found_list(tree)

    issues: list[Issue] = []
    for item in list_node.elts:
        if not isinstance(item, ast.Tuple):
            continue
        values = ast.literal_eval(item)
        if len(values) < 2:
            continue

        comment = comments_by_line.get(item.end_lineno or item.lineno)
        issues.append(
            Issue(
                original=values[0],
                replacement=values[1],
                path=values[2] if len(values) > 2 else None,
                title=values[3] if len(values) > 3 else None,
                comment=comment,
            )
        )

    return issues


def collect_comments_by_line(source: str) -> dict[int, str]:
    comments: dict[int, str] = {}
    for token in tokenize.generate_tokens(StringIO(source).readline):
        if token.type == tokenize.COMMENT:
            comments[token.start[0]] = token.string.removeprefix("#").strip()
    return comments


def find_issues_found_list(tree: ast.AST) -> ast.List:
    for node in ast.walk(tree):
        value = None
        if isinstance(node, ast.Assign):
            if any(is_issues_found_target(target) for target in node.targets):
                value = node.value
        elif isinstance(node, ast.AnnAssign) and is_issues_found_target(node.target):
            value = node.value

        if isinstance(value, ast.List):
            return value

    raise ValueError("Could not find ISSUES_FOUND list")


def is_issues_found_target(node: ast.AST) -> bool:
    return isinstance(node, ast.Name) and node.id == "ISSUES_FOUND"


def render_page(issues: list[Issue]) -> str:
    issue_cards = "\n".join(render_issue(issue, index) for index, issue in enumerate(issues, start=1))
    title = escape(CONFIG.page_title)
    pressed = "true" if CONFIG.show_unchanged_lines else "false"
    toggle_text = "Hide Unchanged Lines" if CONFIG.show_unchanged_lines else "Show Unchanged Lines"
    toggle_button = ""
    if has_unchanged_rows(issues):
        toggle_button = f'<button type="button" id="toggleUnchanged" aria-pressed="{pressed}">{toggle_text}</button>'

    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title}</title>
  <style>{CSS}</style>
</head>
<body>
  <main>
    <header>
      <div>
        <h1>{title}</h1>
        <div class="summary">{len(issues)} suggested replacements from {escape(str(CONFIG.issues_file))}</div>
      </div>
      <div class="toolbar" aria-label="Display controls">
        {toggle_button}
        <button type="button" id="expandAll">Expand All</button>
        <button type="button" id="collapseAll">Collapse All</button>
      </div>
    </header>

    <section class="issue-list">
{issue_cards}
    </section>
  </main>
  <script>{SCRIPT}</script>
</body>
</html>
"""


def has_unchanged_rows(issues: list[Issue]) -> bool:
    return any(row_type == "same" for issue in issues for row_type, _, _ in diff_rows(issue))


def render_issue(issue: Issue, index: int) -> str:
    line_count = len(issue.original.splitlines()) or 1
    line_label = f"{line_count} line" if line_count == 1 else f"{line_count} lines"
    title = issue.title or f"Issue {index}"
    path = issue.path or "No path specified"
    comment = render_comment(issue.comment)
    rows = "\n".join(render_diff_line(row_type, sign, text) for row_type, sign, text in diff_rows(issue))

    return f"""      <article class="issue">
        <div class="issue-header">
          <div class="index">{index}</div>
          <div class="title">
            {escape(title)}
            <div class="path">{escape(path)}</div>
          </div>
          <div class="badge">{escape(line_label)}</div>
        </div>
        <div class="issue-body">
          {comment}
          <details open>
            <summary>Unified diff</summary>
            <div class="unified">
{rows}
            </div>
          </details>
        </div>
      </article>"""


def render_comment(comment: str | None) -> str:
    if not comment:
        return '<div class="comment"><span class="comment-label">Reason</span><span class="comment-text">No comment provided.</span></div>'

    label = "Reason"
    text = comment
    if comment.startswith("[") and "]" in comment:
        label, text = comment[1:].split("]", 1)
        text = text.strip()

    return (
        '<div class="comment">'
        f'<span class="comment-label">{escape(label)}</span>'
        f'<span class="comment-text">{escape(text)}</span>'
        "</div>"
    )


def render_diff_line(row_type: str, sign: str, text: str) -> str:
    content = text if text else "&nbsp;"
    return f"""              <div class="diff-line {row_type}">
                <div class="sign">{escape(sign)}</div>
                <div class="content">{content}</div>
              </div>"""


def diff_rows(issue: Issue) -> list[tuple[str, str, str]]:
    original_lines = issue.original.splitlines()
    replacement_lines = issue.replacement.splitlines()
    matcher = difflib.SequenceMatcher(a=original_lines, b=replacement_lines)
    rows: list[tuple[str, str, str]] = []

    for tag, old_start, old_end, new_start, new_end in matcher.get_opcodes():
        old_chunk = original_lines[old_start:old_end]
        new_chunk = replacement_lines[new_start:new_end]

        if tag == "equal":
            rows.extend(("same", " ", escape(line)) for line in old_chunk)
        elif tag == "delete":
            rows.extend(("minus", "-", escape(line)) for line in old_chunk)
        elif tag == "insert":
            rows.extend(("plus", "+", escape(line)) for line in new_chunk)
        elif tag == "replace":
            rows.extend(replacement_rows(old_chunk, new_chunk))

    return rows


def replacement_rows(old_chunk: list[str], new_chunk: list[str]) -> list[tuple[str, str, str]]:
    rows: list[tuple[str, str, str]] = []
    paired_count = min(len(old_chunk), len(new_chunk))

    for index in range(paired_count):
        old_line = old_chunk[index]
        new_line = new_chunk[index]
        old_html, new_html = inline_diff_pair(old_line, new_line)
        rows.append(("minus", "-", old_html))
        rows.append(("plus", "+", new_html))

    rows.extend(("minus", "-", escape(line)) for line in old_chunk[paired_count:])
    rows.extend(("plus", "+", escape(line)) for line in new_chunk[paired_count:])
    return rows


def inline_diff_pair(old_text: str, new_text: str) -> tuple[str, str]:
    matcher = difflib.SequenceMatcher(a=old_text, b=new_text)
    old_parts: list[str] = []
    new_parts: list[str] = []

    for tag, old_start, old_end, new_start, new_end in matcher.get_opcodes():
        old_piece = escape(old_text[old_start:old_end])
        new_piece = escape(new_text[new_start:new_end])

        if tag == "equal":
            old_parts.append(old_piece)
            new_parts.append(new_piece)
        elif tag == "delete":
            old_parts.append(f"<del>{old_piece}</del>")
        elif tag == "insert":
            new_parts.append(f"<ins>{new_piece}</ins>")
        elif tag == "replace":
            old_parts.append(f"<del>{old_piece}</del>")
            new_parts.append(f"<ins>{new_piece}</ins>")

    return "".join(old_parts), "".join(new_parts)


def escape(value: object) -> str:
    return html.escape(str(value), quote=True)


def timestamped_output_file(output_folder: str | None = None) -> Path:
    created_at = datetime.now().strftime("%Y-%m-%d-%H-%S")
    file_name = f"{OUTPUT_FILE_PREFIX}-{created_at}{OUTPUT_FILE_EXTENSION}"

    if output_folder:
        return Path(output_folder).expanduser().resolve() / file_name

    return CONFIG.output_file.resolve().with_name(file_name)


def main(output_folder: str | None = None) -> int:
    issues_file = CONFIG.issues_file.resolve()
    output_file = timestamped_output_file(output_folder)

    if not issues_file.exists():
        print(f"Issues file does not exist: {issues_file}", file=sys.stderr)
        return 1

    issues = read_issues(issues_file)
    output_file.parent.mkdir(parents=True, exist_ok=True)
    output_file.write_text(render_page(issues), encoding="utf-8")

    print(f"Generated {output_file}")
    print(f"Issues rendered: {len(issues)}")
    return 0


if __name__ == "__main__":
    output_folder = sys.argv[1] if len(sys.argv) > 1 else None
    raise SystemExit(main(output_folder))
