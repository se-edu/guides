{% set title="Intellij IDEA: Useful settings" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

# {{ title }}

<!-- ==================================================================================================== -->

## Enabling assertions

<box type="warning" seamless>

This tweak does not apply if you use Gradle to run code even within Intellij. In that case, refer to 'Enabling assertions' sections of the [_Gradle tutorial_](gradle.html#enabling-assertions).
</box>

1. Choose `Run` → `Edit Configurations...`.
1. Select the run configuration of interest.
1. Click on `Modify options` link and choose `Add VM options`<br>
   <img src="images/intellij/addVmOptions.png" width="800"/>
1. Add `-ea` to the `VM options` box.
   <img src="images/intellij/enableAssertions.png" width="800"/>

<!-- ==================================================================================================== -->

## Enabling soft wrapping

While it is common to enforce a maximum line length for code written in some languages (typically, for code made up of _statements_ such as Java), it is also common not to enforce such a limit for source content that contain paragraph-like structures (e.g., Markdown, HTML). In such cases, you'll need to scroll the editor window horizontally to read the content, which can be a frustrating experience. Here's an example (notice how the text continues beyond the visible area of the editor window and you need to use the horizontal scrolling to see the hidden part):

<pic src="images/intellij/softWraps-before.png"></pic>

Luckily, **you can use the 'soft wrap' feature of Intellij to get the editor window to put <tooltip content="they are called 'soft' because the line break is for displaying purposes only -- it will not appear in the saved code">_soft_</tooltip> line breaks in the content so that horizontal scrolling is no longer required**. Here is how the same code from the above example looks after enabling the soft-wraps feature (notice how the whole text is visible now, due to the soft line breaks added by the editor):

<pic src="images/intellij/softWraps-after.png"></pic>

Read [this](https://www.jetbrains.com/idea/guide/tips/enable-soft-wrap/) to find how to enable soft wraps.

