{% set title="VS Code - Useful Plugins" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="vscode.md#wip-warning" />

# {{ title }}

## Markdown All in One

****Markdown All in One**** **plugin can be used to preview `.md` files in real-time while editing them in VS Code.** This is useful for editing README files, documentation, and tutorial content.

![VS Code Plugins: Side-by-side Preview](images/vscUsefulPlugins/vscMarkdownPreview/markdown-preview.png)

**The plugin helps mainly by,**

1.  **stylising the Markdown text in-place** (e.g., bold text is shown as bold) so that you get some sense of the formatting you are using, as is shown on the left side of the screenshot above.
1. **showing a preview of how the page will be rendered** in HTML, as shown on the right side of the screenshot above.

### Installing the plugin

1. Open the **Extensions sidebar** in VS Code.
2. Search for **‘Markdown All in One’ by Yu Zhang**.
3. Click `Install`.

You should now see a new preview option when working with Markdown files.

![VS Code Plugins: Preview Icon](images/vscUsefulPlugins/vscMarkdownPreview/preview-icon.png)

### Previewing Markdown

To preview the Markdown side-by-side with your `.md` file:

1. Open a `.md` file (e.g. README.md)
2. To see the rendered Markdown in a split view beside your code, select the **Preview icon** in the editor bar (see screenshot in the previous section)<br>

### Additional Features

* Useful shortcuts including autocomplete, keyboard shortcuts, pasting links.
* Supports LaTeX equations, diagrams, footnotes and math blocks.
* Toggle code blocks, section numbers, table of contents, lists.
* Can print documents to HTML.
* GitHub Flavoured Markdown is supported.


For more information, view the **_Markdown All in One_ documentation [here](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one&ssr=false#user-content-keyboard-shortcuts-1)**.

## PlantUML

**[PlantUML](http://plantuml.com/) is a tool for specifying various diagrams in a textual form.** It is particularly useful in software projects where you want to update the diagrams incrementally, as the project evolves over time.

The sections below explain how to install PlantUML. For more tips on **using PlantUML in a project**, click **[here](plantUml.html)**

<!-- --------------------------------------------------------------------------------------------------------- -->

### Setting up PlantUML


1. Go to `Extentions` \> Search `PlantUML` \> Install the **PlantUML plugin by jebbs**

    * Alternatively Launch VS Code Quick Open {{ icon_windows }}/{{ icon_linux}} `Ctrl+P` | {{ icon_apple }} `Cmd+P`, paste the following command, and press enter:
<br>`ext install plantuml`

1. Install Graphviz (for best compatibility to render diagrams)
   * **Windows:** download from [Graphviz](https://graphviz.org/download/) and add it to `PATH`
   * **MacOS:** `brew install graphviz`
   * **Linux:** `sudo apt install graphviz`

2. Configure PlantUML in VS Code
   * Open VSCode Settings
   * Search for "PlantUML"
   * Set the path to `java` (if not auto-detected):
      * **Windows** `plantuml.java: "C:\\Program Files\\Java\\jdk-11\\bin\\java.exe"` 
      * **Linux/MacOS** `plantuml.java: "/usr/bin/java"` 
   * (Optional) Set PlantUML Server (if not using local rendering):
`Add plantuml.server: "https://www.plantuml.com/plantuml"`

<!-- --------------------------------------------------------------------------------------------------------- -->

### Creating/editing/exporting diagrams


After installing the `PlantUML integration` plugin, simply create or open any `.puml` file to start editing it.

![Editing `DeleteSequenceDiagram.puml`](images/plantuml/EditingDeleteSequenceDiagram.png)

Any changes you make in editor pane on the left will be reflected in the preview pane on the right. However, do take note that these changes *will not* be reflected in your actual documentation until you export the diagram.

****Saving the Diagram as an image****

* **When using MarkBind** as the site generation tool:
  * MarkBind has built-in support for PlantUML. The diagram will be generated and saved as an image automatically. No additional work needed from you. Refer to [this section of the MarkBind User Guide](https://markbind.org/userGuide/components/imagesAndDiagrams.html#plantuml-diagrams) for more details.
* **When Using Other Tools (e.g. Jekyll, Static Site Generators, or Docs):**

  * **Export Individual Diagrams:**
    1. Open the PlantUML preview ({{ icon_windows }}/{{ icon_linux }}`Alt+D`| {{ icon_apple }}`option+D` or right-click → Preview Current Diagram)
    2. Right-click the preview and select  "Export Current Diagram"
    3. Choose the format (PNG/SVG/PDF) and save to your desired location (e.g. `/docs/images/`).
  * **Export All Diagrams in a File:**
    * Use the Command Palette ({{ icon_windows }}/{{ icon_linux }}`Ctrl+Shift+P`| {{ icon_apple }}`Cmd+Shift+P`) → PlantUML: Export All Diagrams.
  * **Git Tracking:**
    * Remember to `git add` newly exported image files if they’re part of your repo.

---

**Contributors**: Sulaksha Muthukrishnan ([@crmlatte](https://github.com/crmlatte))
