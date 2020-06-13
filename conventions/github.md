<frontmatter>
  title: "GitHub conventions"
  pageNav: 3
</frontmatter>

{% from 'scripts/macros.njk' import step, embed with context %}

# GitHub conventions

<box type="warning" seamless>

**Follow the principle of local consistency**

Some of the conventions given below have multiple options. In those cases, or if in doubt, aim to be consistent locally e.g., when naming PRs, follow the convention most other PRs (especially, those done by senior developers) in the repo seem to follow.
</box>


<!-- ==================================================================================================== -->

## PRs

<!-- ------------------------------------------------------------------------------------------------------ -->

### PR name

**Situation 1: The PR _fully_ fixes an existing issue in the issue tracker** (i.e., the issue can be closed when the PR is merged):
* **Option 1: Just copy-paste the issue title (including issue number) as the PR title.**<br>
  Format: `IssueTitle #IssueNumber`<br>
  e.g. `Error alert email has very long subject #5958`
* **Option 2: Copy-paste the issue title as the PR title, but tweak into the following format.**<br>
  Format: `[#IssueNumber] IssueTitle `<br>
  e.g. `[#5958] Error alert email has very long subject`
* **Option 3: Name the PR based on what it does.** This is suitable when the issue titles are not expected to be good enough to be reused as PR titles.<br>
  e.g. `Shorten the error alert email subject`

<box type="info" seamless>

Rationale: Duplicating issue title in PR title is for easy tracing between PRs and issues, to compensate for GitHub’s lack of strong linking between the two. Assume there is an invisible prefix in front of the PR title `Fix issue: …​`

</box>

**Situation 2: All other cases** (i.e., the issue is only a partial fix to an existing issue or it does not correspond to an existing issue):<br>
→ **Name the PR as if it is the subject line of a commit that contains the entire PR code.**

{{ embed("Conventions » Git » **Commit message subject**", "git.md#commit-message-subject-format") }}

<p/>

<!-- ------------------------------------------------------------------------------------------------------ -->

### PR description

* **Follow <tooltip content="when you submit a PR, GitHub will present you with some boilerplate content to tell you what details to include">the PR template</tooltip>** ([example](https://github.com/TEAMMATES/teammates/edit/master/.github/PULL_REQUEST_TEMPLATE.md)), if any.

* **Use the [`Fixes` keyword annotations](https://help.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue) in the PR description** so that the related issue can auto-closed when the PR is merged.
  e.g., `Fixes #1234`<br>
 If the PR is a partial fix, use `Fixes part of #1234`.

* **Give before-and-after screenshots** if applicable. If yor change results in UI changes that are not readily apparent from the code, give _before_ and _after_ screenshots to help the reviewer.

* **Give the proposed merge commit message** if applicable. If the PR has more than one commit and the PR is non-trivial, propose a commit message for the merge commit.

{{ embed("Conventions » Git » **Commit message subject**", "git.md#commit-message-body-format") }}
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

<!-- ------------------------------------------------------------------------------------------------------ -->

### PR merge commit

**When merging a PR branch to the main branch**, use one of these formats for the subject line of the merge commit.

* Option 1: `Issue Title #IssueNumber (#PrNumber)`<br>
  e.g. `Error alert email has very long subject #5958 (#6580)`

* Option 2: `[#IssueNumber] Issue Title (#PrNumber)`<br>
  e.g. `[#5958] Error alert email has very long subject (#6580)`

* Option 3: `PR Title (#PrNumber)` (i.e., based on PR only, issue info omitted)<br>
  e.g. `Error alert email has very long subject (#6580)`

Pick one option and use it consistently in the entire code base.

<box type="info" seamless>

Rationale: This format allows easy traceability among a merge commit, the issue it fixes, and the PR that fixed it. Having the issue name tells us what the commit is about without having to look it up in GitHub issue tracker.
</box>

<!-- ==================================================================================================== -->

## Issues

* **Issue title should be concise yet descriptive.** For example, instead of `Newbie question, please help`, use `How do I set up git to ignore test files?`

* **Follow <tooltip content="when you submit an issue, GitHub will present you with some boilerplate content to tell you what details to include">the issue template</tooltip>** ([example](https://github.com/MarkBind/markbind/edit/master/.github/ISSUE_TEMPLATE/bug-report.md)), if any.
