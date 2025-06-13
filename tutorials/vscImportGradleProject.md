<frontmatter>
  title: "Visual Studio Code: Importing a Gradle project"
</frontmatter>

# Visual Studio Code: Importing a Gradle project

## Preparing VS Code for Java projects

1. Install the JDK needed for your project, as given [here](javaInstallation.md).<br>
   IMPORTANT: If you are on a Mac and you anticipate using JavaFX in your projects, you are using the precise JDK specified [here](javaInstallationMac.md).
1. Install the [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) extension to enable support for Java extensions, if you haven't done so already.<br>
   i.e., Go to `Extensions` → Search `Extension Pack for Java` → Install.

## Importing a Gradle project

* **Verify prerequisites:** {{ step_numbers }}
  * Ensure you followed the section [Preparing VS Code for Java projects](#preparing-vs-code-for-java-projects) above.
  * Verify the project has support for Gradle. If it does, you will see a `build.gradle` file in your project root.
* **Open the project in VS Code**, as follows:
  * Open VS Code.{{ abcd_numbers }}
  * If you are in the welcome screen, Click `Open`. Otherwise, click `File` -> `Open`.
  * Select the project directory, and click `Open`.
* **Confirm the correct JDK is set** to the one you are supposed to use for the project, as follows:
  * Open the Command Palette: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P` {{ abcd_numbers }}
  * Type `Java: Configure Java Runtime` and select it.
  * Check that the JDK version matches the one required for your project. If not, you can install the required JDK and configure it. (Java installation guides: [Windows](https://se-education.org/guides/tutorials/javaInstallationMac.html) | [Mac](https://se-education.org/guides/tutorials/javaInstallationWindows.html))
* **Confirm the correct JVM is used for Gradle**, as follows:
  * Install the Gradle Extension: Search for `Gradle` in the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`), and install a Gradle extension if you haven’t already (e.g., [Gradle for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle)). {{ abcd_numbers }}
  * Open `settings.json`: You can find it by opening the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`), then typing `Preferences: Open User Settings (JSON)`.
  * Add or modify the following settings to configure the JVM for Gradle. Here's an example (for Mac):
    ```json { heading="settings.json" }
    {
      "java.configuration.runtimes": [
        {
          "name": "JavaSE-17",
          "path": "/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home"
        }
      ],
      "java.import.gradle.java.home": "/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home"
    }
    ```
  * If the Gradle icon doesn't appear after restarting VS Code, add `"gradle.nestedProjects": true` to your `settings.json` file.
* **Confirm you can access the Gradle tool window**. After the importing of the project is complete (which could take a few minutes), you will see the Gradle Tab in the VSCode interface e.g., look for the elephant icon on the left and click it.<br>
   <pic src="images/vscode/vscode_gradle_icon.jpg" width="400" />
