<frontmatter>
  title: "Using MarkBind for project documentation"
  pageNav: 2
</frontmatter>

# Using MarkBind for project documentation

<div class="lead">

**[MarkBind](https://markbind.org) is a tool for generating static websites from markdown-like text**, particularly suitable for text-heavy websites such as software project documentation.
</div>

Given below are some information useful for when you want to update documentation in a project that uses MarkBind.

<!-- --------------------------------------------------------------------------------------------------- -->

## Installation

* You can choose one of the three methods described in [this page of the MarkBind User Guide](https://markbind.org/userGuide/gettingStarted.html)

<!-- --------------------------------------------------------------------------------------------------- -->

## Updating documents

<box type="info" seamless>

MarkBind is a superset of Markdown. Refer the [MarkBind user guide](https://markbind.org/userGuide/gettingStarted.html) for more details.
</box>

**First, start the _live preview_**: Unless it is a trivial change, you would want to see how your change to the documentation source files will reflect in the generated website. You can use the MarkBind _live preview_ mode to preview the generated website as you update the source file. To start the live preview mode,
1. Open a command prompt.
1. Navigate to the the _documentation root_ (in most projects, the documentation root is `[project root]/docs` -- if you are not sure, look for the folder containing the `site.json` file).
1. Run the `markbind serve` command. That will open the generated website in your default browser.
1. In the browser, navigate to the page you want to modify.

**Next, edit the files you want**:
1. Edit the source files (usually, `.md` files).
1. When you save the file, the live preview will update to reflect the new contents (after a few seconds).

<box type="warning" seamless>

While _live preview_ can pick up most changes, it may not be able to pick up certain changes (e.g., changes to files in the `_markbind` folder or changes to nunjucks macros). Furthermore, some syntax errors in your code can cause the live preview to crash. In those cases, just stop the server (<kbd>Ctrl</kbd>+<kbd>C</kbd> on Windows) and start it again.
</box>

## Automating PR previews, deployments

Project admins can,
* set up Netlify to give a preview of how a PR can affect the generated website. More info [here](https://markbind.org/userGuide/deployingTheSite.html#deploying-to-netlify).
* set up Travis to automatically generate and deploy the project website when new code is pushed. More info [here](https://markbind.org/userGuide/deployingTheSite.html#deploying-to-github-pages)
