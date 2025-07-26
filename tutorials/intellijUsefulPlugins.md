{% set title="Intellij IDEA: Useful Plugins" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 3
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

## PlantUML

**[PlantUML](http://plantuml.com/) is a tool for specifying various diagrams in a textual form.** It is particularly useful in software projects where you want to update the diagrams incrementally, as the project evolves over time.

The sections below explain how to install PlantUML. For more tips on **using PlantUML in a project**, click **[here](plantUml.html)**

<!-- --------------------------------------------------------------------------------------------------------- -->
<div id="plantuml-setting-up">

### Setting up PlantUML in IntelliJ IDEA

1. Go to `File` \> `Settings` to access the `Settings` page.

2. Go to `Settings` \> `Plugins` \> `Marketplace` and install the plugin `PlantUML integration`.

3. Then go to `Settings` \> `Languages & Frameworks` \> `PlantUML` or search for PlantUML. You can also use a specific version of PlantUML from the [releases page](https://github.com/plantuml/plantuml/releases).
    ![Settings - Other Settings - PlantUML: location of PlantUML.jar](images/plantuml/ConfiguringSettings.png)
</div>
<!-- --------------------------------------------------------------------------------------------------------- -->
<div id="plantuml-usage">

### Working with PlantUML in IntelliJ IDEA


After installing the `PlantUML integration` plugin, simply create or open any `.puml` file to start editing it.

![Editing `DeleteSequenceDiagram.puml`](images/plantuml/EditingDeleteSequenceDiagram.png)

Any changes you make in editor pane on the left will be reflected in the preview pane on the right. However, do take note that these changes *will not* be reflected in your actual documentation until you export the diagram.

****Saving the Diagram as an image****

* **When using MarkBind** as the site generation tool:
  * MarkBind has built-in support for PlantUML. The diagram will be generated and saved as an image automatically. No additional work needed from you. Refer to [this section of the MarkBind User Guide](https://markbind.org/userGuide/components/imagesAndDiagrams.html#plantuml-diagrams) for more details.
* **When using Jekyll** as the site generation tool:
  * The `PlantUML integration` plugin allows you to export individual diagrams to a location of your choosing. Click the `Save Current Diagram Only` button and choose the location to export the image file.
  * You will have to `git add` any new diagrams generated!

</div>
<!-- --------------------------------------------------------------------------------------------------------- -->

### PlantUML Tips and Tricks

You can refer to [this se-edu guide](plantUml.html#tips-and-tricks) to learn some tips and tricks useful for getting the diagrams to fit your needs.

--------------------------------------------------------------------------------
**Authors:**
* Initial Version: Jeffry Lum
* Contributors:
  * MUHAMMAD FIKRI BIN ABDUL KALAM (@mfjkri): added the part on SD reference frames
