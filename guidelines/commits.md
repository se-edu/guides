<frontmatter>
  title: "Working with Git"
  pageNav: 3
</frontmatter>

{% from 'scripts/macros.njk' import step, embed with context %}

# Working with Git

<!-- ==================================================================================================== -->
<span id="section-organizing-commits">

## Organizing commits

Commits in a branch or a PR is said to be _well-organized_ if they have the following qualities:

* **Each commit contains a single logical change, and this change must stand on its own.** i.e. each commit has a single responsibility, and that responsibility must be fully carried out.<br>
  For example, if the commit message says `Move delete() from Person class to Address class`, the commit cannot contain the addition of `delete()` to `Address` class only; it should also contain the deletion of `delete()` from the `Person` class for it to be a _complete_ implementation what is stated in the commit message.

* **Each commit has a _well-written_ commit message** i.e., it follows [these guidelines](../conventions/git.html).

* **Commits are ordered in a bottom-up fashion**, each commit building on top of the previous one towards the end goal of the PR.

  <box type="info" seamless>

  Rationale: Reviewers should be able to review one commit at a time.
  </box>

* **Ideally, a commit does not modify more than 100 lines of code.**

   <box type="info" seamless>

   Rationale: Bigger commits are harder to review.

   :fas-quote-left: "Ask a programmer to review 10 lines of code, he'll find 10 issues. Ask him to do 500 lines and he'll say it
looks good." --[[source](https://twitter.com/girayozil/status/306836785739210752)]
   </box>

   Commits containing _*mechanical changes*_ (e.g. automated refactorings, cut-paste type code movements, file renames, etc.),
   * should include only one _mechanical change_  per commit e.g., rename a single variable across the code base.
   * should not contain other non-mechanical changes, unless unavoidable.
   * can exceed 100 LoC.
   * should have the description of the change in the commit message (so that the results can be reproduced).

* **Every commit pass CI.** when you merge a series of commits (without squashing), every commit in your push (not just the last commit) should pass CI.

  <box type="info" seamless>

  Rationale: Build-breaking commits in the version history hinder the ability to use `git bisect` for locating bugs.
  </box>

<box type="info">

[Here](https://github.com/se-edu/addressbook-level4/pull/237) is an example PR of commits that are organized as described above.
</box>

**Refactor commits before pushing.** It is unlikely that you can produce a series of commits that meet all the above criteria in the first try. In such cases, refactor commits until they meet the criteria. [This S/O post](http://stackoverflow.com/a/1186549) describes how to refactor commits (even easier to do with visual tools such as SourceTree -- see [this video](https://www.youtube.com/watch?v=mBCJCuU3p7I)).

</span>

<!-- ==================================================================================================== -->

<span id="section-merging-branches">

## Merging branches

<box type="info" seamless>

When merging branch, the aim is to keep the version history neat so that it is easy to do things such as the following:
* Find which commit introduced a bug using `git bisect`.
* Undo a specific change by reverting a commit in the history without breaking anything else.

</box>

* **The default strategy is to do a _squash-merge_.** This is suitable when the branch tackles one task but multiple commits that are not well-organized (as per the definition of 'well-organized' in the panel below).

{{ embed("Guidelines » Working with git » **Organizing commits**", "commits.md#section-organizing-commits") }}

* **Use a _merge commit_** if the commits are well-organized, and the branch tackles only one task. In this case the commit message of the merge commit should explain the full task.

* **Use a _rebase-merge_** if the commits are well-organized and each commit is an independent task (as opposed to steps or a bigger tasks).

* **In other cases**, consider reorganizing/splitting the branch to match one of the above.
</span>
