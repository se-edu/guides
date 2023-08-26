<frontmatter>
  title: "Git conventions"
  pageNav: 3
</frontmatter>

{% from 'scripts/macros.njk' import step, embed with context %}

# Git conventions

**Legend**: {{ icon_level_basic }} basic rule | {{ icon_level_intermediate }} intermediate rule | {{ icon_level_advanced }} advanced rule


<!-- ==================================================================================================== -->

## Commit message: Subject

<div id="commit-message-subject-format">

{{ icon_level_basic }} **Every commit must have a well-written commit message _subject line_.**
* **Try to limit the subject line to 50 characters (hard limit: 72 chars)**

<box type="info" seamless add-class="ml-5">

Rationale: Some tools show only a limited number of characters from the commit message.
</box>

{{ icon_level_basic }} **==Use the imperative mood in the subject line.==**
* {{ good }}: `Add README.md`
* {{ bad }}: `Added README.md`
* {{ bad }}: `Adding README.md`

{{ icon_level_basic }} **Capitalize the first letter of the subject line.**
* {{ good }}: `Move index.html file to root`
* {{ bad }}: `move index.html file to root`

{{ icon_level_basic }} **Do not end the subject line with a period.**
* {{ good }}: `Update sample data`
* {{ bad }}: `Update sample data.`

<box type="tip" seamless>

You can use `scope: change` format or `category: change` (when applicable).
* e.g. `Person class: remove static imports`<br>
  `Main.java: Remove blank lines`<br>
  `bug fix: Add space after name`

</box>

<box type="info" seamless>

There are other commit subject conventions such as the [_Conventional Commits_ Format](https://www.conventionalcommits.org/) which are more elaborate but have additional benefits.

</box>
</div>


<!-- ==================================================================================================== -->

## Commit message: Body

<div id="commit-message-body-format">

{{ icon_level_basic }} **Commit messages for non-trivial commits should have a _body_ giving details of the commit.**
* **Separate subject from body with a blank line.**
* **Wrap the body at 72 characters.**
* **Use blank lines to separate paragraphs.**

Example: A commit message for a commit that is part of a multi-commit PR:

```
Unify variations of toSet() methods

There are several methods that convert a collection to a set. In some
cases the conversion is in-lined as a code block in another method.

Unifying all those duplicated code improves the code quality.

As a step towards such unification, let's extract those duplicated code
blocks into separate methods in their respective classes. Doing so will
make the subsequent unification easier.
```

<box type="tip" seamless>

Tips for SourceTree users:

* **Enable the column guide option** to help you keep the commit message width to a 72 characters:
  1. Choose `Tools` -> `Options`.
  1. Click on the `General` tab, scroll down to the `Commit settings` section.
  1. Tick the `Display a column guide at commit message at [72] characters` option (if this option is disabled, first tick the option `used fixed-width fonts for commit messages` %%-- reason: a column guide makes sense only if a fixed-width font is used%%).
* **Enable the `spell check commit messages` option** (found in the same place as above) too.
</box>

{{ icon_level_basic }} **Use bullet points as necessary.** Instead of relying entirely on paragraphs of text, use other constructs such as bullet lists when it helps.

Example: A commit message for a bug fix:

```
Find command: make matching case insensitive

Find command is case sensitive.

A case insensitive find is more user-friendly because users cannot be
expected to remember the exact case of the keywords.

Let's,
* update the search algorithm to use case-insensitive matching
* add a script to migrate stress tests to the new format
```

{{ icon_level_intermediate }} **Explain WHAT, WHY, not HOW**.

* Use the body to explain WHAT the commit is about and WHY it was done that way. The reader can refer to the diff to understand HOW the change was done.

* Give an explanation for the change(s) that is detailed enough so that the reader can judge if it is a good thing to do, without reading the actual diff to determine how well the code does what the explanation promises to do.<br>
  If your description starts to get too long, that's a sign that you probably need to split up your commit to finer grained pieces. [adapted from: [git project](https://github.com/git/git/blob/e05806da9ec4aff8adfed142ab2a2b3b02e33c8c/Documentation/SubmittingPatches#L37-L132)]
* Minimize repeating information that are given in code comments of the same commit.


{{ icon_level_advanced }} **Structure the body as follows**:

  ```
  {current situation} -- use present tense

  {why it needs to change}

  {what is being done about it} -- use imperative mood

  {why it is done that way}

  {any other relevant info}
  ```

* Avoid terms such as 'currently', 'originally' when describing the current situation. They are implied.
* The word `Let's` can be used to indicate the beginning of the section that describes the change done in the commit.

Example: A commit message for a code quality refactoring:

```
Person attributes classes: extract a parent class PersonAttribute

Person attribute classes (e.g. Name, Address, Age etc.) have some common
behaviors (e.g. isValid()).

The common behaviors across person attribute classes cause code duplication.

Extracting the common behavior into a super class allows us to use
polymorphism when dealing with person attributes. For example, validity
checking can be done for all attributes of a person in one loop.

Let's pull up behaviors common to all person attribute classes into a new
parent class named PersonAttribute.

Using inheritance is preferable over composition in this situation
because the common behaviors are not composable.

Refer to this S/O discussion on dealing with attributes
http://stackoverflow.com/some/question
```

<box type="info">

Refer to the article _[How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/)_ for more advice on writing good commit messages.
</box>

</div>

<!-- ==================================================================================================== -->

## Branch names

<div id="branch-names-format">

Follow these rules to improve consistency:
* Use a meaningful name consisting of some relevant keywords, in the _kebab case_ format e.g., `refactor-ui-tests`.
* If the branch is related to an issue, use the format `issueNumber-some-keywords-from-issue-title` e.g., `1234-ui-freeze-error`
</div>
