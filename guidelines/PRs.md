<frontmatter>
  title: "Guidelines for working with PRs"
  pageNav: 3
</frontmatter>

{% from 'scripts/macros.njk' import step, embed with context %}

# Guidelines for working with PRs

<!-- ==================================================================================================== -->

## Selecting what to work on

* **If submitting a PR for an existing issue,**
  * It's best for first time contributors to start by fixing an issue specifically labelled for first timers e.g., `d.FirstTimers`, `good first issue`.
  * It's best to post in the issue to ask if it is OK for you to submit a PR for that issue and wait for approval.
  * Check the issue discussion thread to see if there are <tooltip content="Some activity during last seven days">_active_</tooltip> PRs for that issue. You can offer to PR for an issue that has _stalled_ PRs i.e., there is a PRs submitted for that issue but the PR author seems to have stopped working on it.
* **If the issue list does not contain what you want to work on,** post an issue first and wait for it to be acknowledged. Otherwise you could end up fixing something that does not need fixing.

<!-- ==================================================================================================== -->

## Scoping a PR

<div id="section-scoping-a-pr">

**General rule: try to keep PRs as small as possible** because smaller PRs get merged faster.

**A PR should contain a _single_, _standalone_, and _complete_ change to the code base**, unless in exceptional cases where the PR is part of a bigger change.
* _Single_ means a PR **should not try to fix more than one fix**, unless there are multiple things that _must_ be done together or not at all.

  <box type="wrong" icon=":fas-exclamation-circle:" seamless>

  Refrain from <tooltip content="do minor improvements to the code e.g., fix typos">_housekeeping_</tooltip> in the neighboring code **unless the line in concern is already touched by the PR** (i.e., the housekeeping does not increase the line count of the PR.
  </box>
  <box type="info" seamless>

  Rationale: Imagine we decide to revert the PR for some reason. If a PR contains, unrelated changes or multiple independent changes, we will not be able to revert the offending change without losing the other changes as well.
  </box>
  <box type="tip" seamless>

  If you notice a need for housekeeping in the neighboring code as you do your PR, create an issue for it in the issue tracker.
  </box>

* _Standalone_ means the PR **should contain a meaningful change that moves the code base from one working state to another**.
* _Complete_ means the PR **should contain everything related to the change**, including the following:
  * functional code
  * code comments
  * test cases
  * user docs and developer docs

<box type="wrong" icon=":fas-exclamation-circle:" seamless class="ml-4">

"This PR is just the code fix. I'll update tests and documentation in a separate PR" is not acceptable!

However, it is fine to push the functional code first to get early feedback, as long as the rest is added to the same PR later.
</box>

</div>

<!-- ==================================================================================================== -->

## Submitting a PR

When submitting PRs, follow [the forking workflow](https://se-education.org/se-book/gitAndGithub/index.html#forking-workflow). A summary of the steps is given below.

{{ step(0) }} Do these steps if you haven't done them already:

<div class="indented-level2">

{{ step(0.1, '') }} **Fork the upstream repo**.

{{ step(0.2, '') }} **Clone the fork to your computer.**

{{ step(0.3, '') }} **Set up the dev environment as described in the project docs.** Confirm the set up is correct.
</div>

{{ step(1) }} **Create a branch from the `master` branch**, following the naming convention given.

  {{ embed("coding standards » Git » **Branch naming conventions**", "../conventions/git.md#branch-names-format") }}

{{ step(2) }} **Add your code to the branch** while ensuring you follow these:

* relevant coding standards (the full list is given [here](../index.html))
* Commit message format

  {{ embed("Conventions » Git » **Commit message subject**", "../conventions/git.md#commit-message-subject-format") }}
  {{ embed("Conventions » Git » **Commit message body**", "../conventions/git.md#commit-message-body-format") }}

* guidelines for commit organization

  {{ embed("Guidelines » **Commit organization**", "commits.md") }}

* PR scoping guidelines given above

  {{ embed("This document » **Scoping a PR**", "PRs.md#section-scoping-a-pr") }}


{{ step(3) }} **Sync your branch with the upstream master**, if the `master` branch advances while you work on your code (i.e., pull upstream `master`, merge to your branch).

{{ step(4) }} **Create a PR** when the code is ready, as follows:
   1. Run code style checks (if any) to ensure the code complies with the project standards.
   1. Push the branch to your fork.
   1. Create a [==draft== PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) from your fork to the upstream repo.
   1. Check the draft PR on GitHub to confirm the following:
      * it follows the [PR format conventions](../conventions/github.html)
      * it does not contain any unintended changes.
      * it passes <tooltip content="Continuous Integration (Travis, AppVeyor, GitHub Actions, etc.)">CI</tooltip> checks, if any.
   1. Remove the 'draft' status of the PR. Post a `ready for review` comment for good measure.

{{ step(5) }} **Revise as per reviews** until the PR is merged.
* Feel free to post a reminder comment if you don't get a review within 2-3 days.
* When you receive a review,
  1. Revise the code as per the review.
  1. Push the new code to the branch in your fork.
  1. Post a comment to indicate the PR is ready for a new review.

<!-- ==================================================================================================== -->

## Reviewing a PR


* If you are new to GitHub PRs, see [GitHub help on how to review PRs](https://help.github.com/en/articles/about-pull-request-reviews).

* Follow the best practices in the panel below:

{{ embed("Guidelines » **Best practices for reviewing PRs**", "PRs-reviewing.md") }}

<p/>

* **Check for basic PR hygiene**, and remind the PR author to rectify if necessary.
  - [x] contains a single, stand-alone, complete fix
  - [x] relevant comments, dev/user docs, tests have been updated
  - [x] PR title/description format is expected
  - [x] doesn't contain unrelated changes
<p/>

* **Before approving a PR, ==confirm that all your previous comments have been addressed==.**

<!-- ==================================================================================================== -->

## Merging PRs

Follow the convention for Git branch merging, as given in the panel below.

{{ embed("Guidelines » Working with Git » **Branch merging strategy**", "commits.md#section-merging-branches") }}
