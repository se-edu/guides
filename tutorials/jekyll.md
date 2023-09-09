<frontmatter>
  title: "Using Jekyll for project documentation"
  pageNav: 2
</frontmatter>

{% from "scripts/macros.njk" import show_as_rounded_tab, show_as_button, show_as_tab with context %}

# Using Jekyll for project documentation

<div class="lead">

**[Jekyll](https://jekyllrb.com/) is a popular tool for generating static websites from markdown-like text**.
</div>

Given below are some information useful for when you want to update documentation in a project that uses Jekyll.

<!-- ==================================================================================================== -->

## Setting up GitHub Pages for Jekyll

As GitHub has native support for Jekyll, it can convert your documentation into HTML and deploy it on the `github.io` URL of your project.

Do the following to set up the GitHub Pages website of your project:
1. Go to your repo's {{ show_as_rounded_tab("settings :fas-cog:") }} tab.
1. Click {{ show_as_tab("Pages") }} on the menu on the left edge of page.
1. Set the `Source` as: {{ show_as_button('Deploy from a branch :octicon-triangle-down:') }} branch{{ show_as_button('master :octicon-triangle-down:') }} branch and {{ show_as_button(':octicon-file-directory: /docs :octicon-triangle-down:') }} folder (assuming project documentation is in that folder) and click {{ show_as_button('Save') }}.

The project website will be available at `https://{your_org}.github.io/{your_repo}` the next time the `master` branch is updated. Example: `https://myorg.github.io/myrepo`

<!-- ==================================================================================================== -->

## Updating documents

Jekyll uses [**kramdown**](https://kramdown.gettalong.org/syntax.html) (a superset of Markdown) for writing content. You can use Intellij (or any other text editor) to update the relevant `.md` files.

<box type="tip" seamless>

**Recommendation:** Limit your content to Markdown and GFMD syntax only i.e., avoid kramdown-specific syntax that are not compatible with Markdown/GFMD
</box>

* **Previewing changes locally**: There are several ways to preview changes locally.
  * **Option 1 -- Intellij preview**: Intellij supports previewing Markdown files, as explained [here](https://www.jetbrains.com/help/idea/markdown.html). While the preview shown by Intellij is somewhat rudimentary, it is good enough for most cases.
  * **Option 2 -- Run Jekyll locally**: You can [set up Jekyll locally and run it](https://help.github.com/en/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll) to see the exact way the update affects the final outcome.
* **Previewing changes on GitHub**:
  * **Option 1 -- GitHub preview**: You can see a basic preview of the page by navigating to the corresponding `.md` source file in GitHub.
  * **Option 2 -- Use Netlify PR preview**: You can set up Netlify to show previews of PRs (to learn how, read the [_Using Netlify_](netlify.html) guide). This method shows a preview of the exact way the update affects the final outcome.

<!-- ==================================================================================================== -->

## Site-wide settings

* Typically, the `_config.yml` file specifies project-specific site-wide settings.<br>
  An example is the `title` property, which defines the title of your site, usually the name of your project.

* The files in `docs/_include` and `docs/_layouts` control the template of the pages; the files in `docs/_sass` control the style of the pages.

  <box type="warning" seamless>

  **Caution**: Modifying these files requires some knowledge and experience with Jekyll. You should only modify them (at your own risk) if you need greater control over the site’s layout.
  </box>
