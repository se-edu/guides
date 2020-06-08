<frontmatter>
  title: "Intellij IDEA: Importing a Gradle project"
</frontmatter>

# Intellij IDEA: Importing a Gradle project

1. IntelliJ IDEA by default has the Gradle plugin installed.  If you have disabled it, go to `File` → `Settings` → `Plugins` to re-enable them.<br>
  If your project involves GUI programming, similarly ensure the JavaFX plugin has not been disabled.
1. Click `Import Project` (or `Open or Import` in newer version of Intellij).
1. Locate the `build.gradle` file ==(not the root folder as you would do in a normal importing)== and select it. Click `OK`.<br>
   If asked, choose to `Open as Project` (not `Open as File`).
1. Click `OK` to accept the default settings but do ensure that the selected version of `Gradle JVM` matches the JDK being used for the project.
1. Wait for the importing process to finish (could take a few minutes).
