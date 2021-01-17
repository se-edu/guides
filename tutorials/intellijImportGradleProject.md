<frontmatter>
  title: "Intellij IDEA: Importing a Gradle project"
</frontmatter>

# Intellij IDEA: Importing a Gradle project

<div class="ml-3">

{{ icon_tip }} If there is a `build.gradle` file in the project root, Intellij treats it as a Gradle project by default.
</div>

1. IntelliJ IDEA has the Gradle plugin installed by default.  If you have disabled it, go to `File` → `Settings` → `Plugins` to re-enable them.<br>
  If your project involves GUI programming, similarly ensure the JavaFX plugin has not been disabled.
1. Open Intellij (if you are not in the welcome screen, click `File` > `Close Project` to close the existing project first)
1. Open the project into Intellij as follows:
   1. Click `Open`.
   1. Select the project directory, and click `OK`.
   1. If there are any further prompts, accept the defaults.
1. Click `OK` to accept the default settings but do ensure that the selected version of `Gradle JVM` matches the JDK being used for the project.
1. Wait for the importing process to finish (could take a few minutes).
