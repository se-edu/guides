<frontmatter>
  title: "Working with a forked MarkBind site"
  pageNav: 2
</frontmatter>

{% from "scripts/macros.njk" import show_as_rounded_tab, show_as_button, show_as_tab, step with context %}

# Working with a forked MarkBind site

<div class="lead">

This guide explains how to work with a MarkBind site that has been forked on GitHub, taking [addressbook-level3 (AB-3)](https://github.com/se-edu/addressbook-level3) as an example).
</div>

**Assumptions** (these are true for AB-3):

1. Documentation source files are in the `[project root]/docs` folder.
1. The project comes with a `package.json` file, specifying the dependencies.
1. The site is to be deployed on GitHub Pages, using GitHub Actions CI.

<!-- --------------------------------------------------------------------------------------------------- -->

## Initiating the site

Once you have forked the repo into your own GitHub org, you need to adapt the site to your project (e.g., change project name) and publish the MarkBind site on GitHub. Given below are the steps for doing that.

{{ step('1') }} **Give ==org level== write permissions to GitHub Actions** as GitHub actions will needs write permissions to push your MarkBind site onto the `gh-pages` branch of your repo, as follows:

1. Go to the {{ show_as_rounded_tab(":octicon-gear: Settings ") }} &nbsp;tab of your GitHub org that contains the fork (not the `settings` tab of your fork).
1. On the navigation menu on the left, expand on the {{ show_as_tab(":octicon-play: Actions") }} menu and click on the {{ show_as_tab("General") }} option.
1. Scroll to the `Workflow permissions` section at the bottom of the page.
1. Choose `Read and write permissions` option.

{{ step('2') }} **Enable GitHub Pages of your fork**

1. Go to the {{ show_as_rounded_tab(":octicon-gear: Settings ") }} &nbsp;tab of your fork (not the org, as you did in step 1).
1. Click {{ show_as_tab("Pages") }} on the menu on the left edge of page.
1. Set the `Source` as: {{ show_as_button('Deploy from a branch :octicon-triangle-down:') }} branch{{ show_as_button(':octicon-git-branch: gh-pages :octicon-triangle-down:') }} branch and {{ show_as_button(':octicon-file-directory: /root :octicon-triangle-down:') }} folder (assuming project documentation is in that folder) and click {{ show_as_button('Save') }}.

{{ step('3') }} **Update the site configs to match your fork**

When adapting the documentation to a new fork that evolves/morphs the upstream project into a different project/product, in addition to updating content files, you need to update config files to match your own project. In AB-3, these are the config files you need to update:

<tree>
:far-folder: [project root]
  :far-folder: .github
    :far-folder: workflows
      ==:fas-file: docs.yml== (<span class="text-danger">change repo name in this file!</span> e.g., `baseUrl: '/tp'`)
  :far-folder: docs
    :far-folder: _markbind
      :far-folder: layouts
        ==:fas-file: default.md==
    ==:fas-file: site.json==
</tree>


<box type="info" seamless>

The [_markbind/tweaking the page structure_](https://markbind.org/userGuide/tweakingThePageStructure.html) and [_markbind/site.json_](https://markbind.org/userGuide/siteJsonFile.html) pages have information on how to update site-wide elements such as the top navigation bar.
</box>

{{ step('4') }} **Commit the config changes and push to your fork**. After the CI has run, your MarkBind site will be available at `https://github.io/ORG/REPO` e.g., `https://se-education.org/addressbook-level3`

{{ step('...', "Next") }} **Update content, commit, and push**. For future updates to the site, all you need to do is update content (usually, in `*.md` files), commit the changes, and push to your fork. The published MarkBind site will be updated automatically after the CI has run.

<box type="tip" seamless>

Read the two sections below to find how to install MarkBind in your computer and use it to live-preview changes as you edit source files.
</box>


<!-- --------------------------------------------------------------------------------------------------- -->

## Installing MarkBind

For any non-trivial site updates, you would want to edit the source files locally, and preview the generated site first (to ensure the edits produces the intended outcome), before publishing the changes. For that, you need to install MarkBind in your computer. Given below are the steps.

1. Ensure you have Java 8 or higher installed
1. Install [Node.js](https://nodejs.org) 16 or higher
1. Install [Graphviz](https://graphviz.org/download/) (for generating diagrams)
    * Windows: Graphviz not required. There will be warning about missing Graphviz, which you can ignore.{icon="fab-windows"}
    * Mac: you can use [Homebrew](https://brew.sh/) to install Graphviz: `brew install graphviz` {icon="fab-apple"}
    * For Linux, you can use your package manager to install Graphviz: `sudo apt install graphviz` {icon="fab-linux"}
1. Open a terminal and navigate to the `[project root]/docs` folder
1. To install MarkBind (and other dependencies), run the command `npm ci`


<box type="info" seamless>

To update MarkBind to a newer version (at a later time), run the following command from the `docs` folder:

```
npm install markbind-cli@latest --save-dev
```
</box>

<!-- --------------------------------------------------------------------------------------------------- -->

## Updating documents

MarkBind is a superset of Markdown. Refer the [MarkBind UG: Authoring Contents](https://markbind.org/userGuide/authoringContents.html) for more details on the syntax. Given below is the recommended workflow for any non-trivial changes to this docs site.

1. Open a terminal and navigate to the `[project root]/docs` folder.
1. Run the `npm run serve` command. That will open the generated website in your default browser in a ==_live preview_ mode==.
1. In the browser, navigate to the page you want to preview.
1. Edit the source files (usually, `*.md` files). When you save the file, the live preview will update to reflect the new contents (after a few seconds).

<box type="warning" seamless>

While _live preview_ can pick up most changes, it may not be able to pick up certain changes (e.g., changes to files in the `_markbind` folder or changes to nunjucks macros). Furthermore, some syntax errors in your code can cause the live preview to crash. In those cases, just stop the server (e.g., <kbd>Ctrl</kbd>+<kbd>C</kbd> on Windows) and start it again.
</box>

<box type="tip" seamless>

If you are using Intellij for editing documentation files, you can consider enabling 'soft wrapping' for `*.md` files, as explained in our [**Intellij IDEA: Useful settings**](intellijUsefulSettings.html#enabling-soft-wrapping) guide.
</box>

<!-- --------------------------------------------------------------------------------------------------- -->

## Working with UML diagrams

MarkBind had built-in support for PlantUML diagrams. See the [this page of the MarkBind User Guide](https://markbind.org/userGuide/components/imagesAndDiagrams.html#diagrams) to find how to use PlantUML with MarkBind.

Also see [_se-edu/guides **Using PlantUML**_](https://se-education.org/guides/tutorials/plantUml.html) for useful info on using PlantUML in a project such as AB-3.

<!-- --------------------------------------------------------------------------------------------------- -->

