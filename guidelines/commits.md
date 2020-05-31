<frontmatter>
  title: "Guidelines for commit organization"
  pageNav: 3
</frontmatter>

# Guidelines for commit organization

* This guide **does not cover guidelines for commit messages**, as they are covered [here](../conventions/git.html).
* This guide **applies to commits that will appear in the final version history**. More specifically,
  * If the commits are meant to be _squashed_ before merging, the guidelines apply to the squashed version.
  * If your project merges PRs/branches without squashing, the guidelines apply to each individual commit.

<!-- --------------------------------------------------------------------------------------------------------- -->

<box type="secondary" icon=":fas-quote-left:" seamless>

> "Ask a programmer to review 10 lines of code, he'll find 10 issues. Ask him to do 500 lines and he'll say it
looks good." -- [[source](https://twitter.com/girayozil/status/306836785739210752)]
</box>

* **Each commit should contains a single logical change, and this change must stand on its own.** i.e. each commit has a single responsibility, and that responsibility must be fully carried out.<br>
  For example, if the commit message says `Move delete() from Person class to Address class`, the commit cannot contain the addition of `delete()` to `Address` class only; it should also contain the deletion of `delete()` from the `Person` class for it to be a _complete_ implementation what is stated in the commit message.

* **Commits should be ordered in a bottom-up fashion**, each commit building on top of the previous one towards the end goal of the PR.

  <box type="info" seamless>

  Rationale: Reviewers should be able to review one commit at a time.
  </box>

* **Ideally, a commit should not modify more than 100 lines of code.**

   <box type="info" seamless>

   Rationale: Bigger commits make reviewing harder.
   </box>

   Commits containing _*mechanical changes*_ (e.g. automated refactorings, cut-paste type code movements, file renames, etc.),
   * should include only one _mechanical change_  per commit e.g., rename a single variable across the code base.
   * should not contain other non-mechanical changes, unless unavoidable.
   * can exceed 100 LoC.
   * should have the description of the change in the commit message (so that the results can be reproduced).

* **Every commit should pass CI.** when you merge a series of commits (without squashing), every commit in your push (not just the last commit) should pass CI.

  <box type="info" seamless>

  Rationale: Build-breaking commits in the version history hinder the ability to use `git bisect` for locating bugs.
  </box>

* **Refactor commits before pushing.** It is unlikely that you can produce a series of commits that meet all the above criteria in the first try. In such cases, refactor commits until they meet the criteria. [This S/O post](http://stackoverflow.com/a/1186549) describes how to refactor commits (even easier to do with visual tools such as SourceTree -- see [this video](https://www.youtube.com/watch?v=mBCJCuU3p7I)).

<box type="info">

[Here](https://github.com/se-edu/addressbook-level4/pull/237) is an example of a PR that is organized as described above.
</box>
