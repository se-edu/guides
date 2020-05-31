<frontmatter>
  title: "GitHub conventions"
  pageNav: 3
</frontmatter>

# GitHub conventions


<!-- --------------------------------------------------------------------------------------------------------- -->

## PRs

### PR name

**Situation 1: The PR _fully_ fixes an existing issue in the issue tracker** (i.e., the issue can be closed when the PR is merged):<br>
→ **Just copy-paste the issue title (including issue number) as the PR title.**

Format: `IssueTitle #IssueNumber`
e.g. `Error alert email has very long subject #5958`

<box type="info" seamless>

Rationale: Duplicating issue title in PR title is for easy tracing between PRs and issues, to compensate for GitHub’s lack of strong linking between the two. Assume there is an invisible prefix in front of the PR title `Fix issue: …​`

</box>

**Situation 2: All other cases** (i.e., the issue is only a partial fix to an existing issue or it does not correspond to an existing issue):<br>
→ **Name the PR as if it is the subject line of a commit that contains the entire PR code.**

<panel header="{{ icon_embedding }} Conventions » Git » **Commit message subject**" minimized class="ml-4">

<include src="git.md#commit-message-subject-format" />
</panel>
<p/>

### PR description

* **Follow <tooltip content="when you submit a PR, GitHub will present you with some boilerplate content to tell you what details to include">the PR template</tooltip>** ([example](https://github.com/TEAMMATES/teammates/edit/master/.github/PULL_REQUEST_TEMPLATE.md)), if any.

* **Use the [`Fixes` keyword annotations](https://help.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue) in the PR description** so that the related issue can auto-closed when the PR is merged.
  e.g., `Fixes #1234`<br>
 If the PR is a partial fix, use `Fixes part of #1234`.

* **Give before-and-after screenshots** if applicable. If yor change results in UI changes that are not readily apparent from the code, give _before_ and _after_ screenshots to help the reviewer.

* **Give the proposed merge commit message** if applicable. If the PR has more than one commit and the PR is non-trivial, propose a commit message for the merge commit.

<panel header="{{ icon_embedding }} Conventions » Git » **Commit message subject**" minimized add-class="ml-5">

<include src="git.md#commit-message-body-format" />
</panel>
<p/>

**Example:**
<blockquote class="ml-4">

Fixes [#1234]()

_[Details of the PR...]_

Before:<br>
&nbsp;&nbsp;_[screenshot]_

After:<br>
&nbsp;&nbsp;_[screenshot]_

Proposed commit message:
```{.no-line-numbers}
commit message goes here

more ...

```

</blockquote>

### PR merge commit

**When merging a PR branch to the main branch**, use one of these formats for the subject line of the merge commit.

* Option 1: `Issue Title #IssueNumber (#PrNumber)`<br>
  e.g. `Error alert email has very long subject #5958 (#6580)`

* Option 2: `[#IssueNumber] Issue Title (#PrNumber)`<br>
  e.g. `[#5958] Error alert email has very long subject (#6580)`

Pick one option and use it consistently in the entire code base.

<box type="tip" seamless>

Option 1 is more convenient as you can simply copy-paste the PR title as the merge commit subject.
</box>

<box type="info" seamless>

Rationale: This format allows easy traceability among a merge commit, the issue it fixes, and the PR that fixed it. Having the issue name tells us what the commit is about without having to look it up in GitHub issue tracker.
</box>

<!-- --------------------------------------------------------------------------------------------------------- -->

## Issues

* **Issue title should be concise yet descriptive.** For example, instead of `Newbie question, please help`, use `How do I set up git to ignore test files?`

* **Follow <tooltip content="when you submit an issue, GitHub will present you with some boilerplate content to tell you what details to include">the issue template</tooltip>** ([example](https://github.com/MarkBind/markbind/edit/master/.github/ISSUE_TEMPLATE/bug-report.md)), if any.