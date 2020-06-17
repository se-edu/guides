<variable name="title">Intellij IDEA: Useful settings</variable>
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
1. Add `-ea` to the `VM options` box.

   ![](https://i.stack.imgur.com/d1ZoO.png)

   <small>[Credits: adapted from [this s/o thread](https://stackoverflow.com/questions/18168257/where-to-add-compiler-options-like-ea-in-intellij-idea)]</small>
