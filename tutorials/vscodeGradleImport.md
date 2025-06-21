{% set title="VS Code - Importing a Gradle project" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

# {{ title }}

This guide will help you import and configure a Gradle project in VS Code.

## Prerequisites

* Ensure you followed the [Setting up a Java project](vscodeJavaSetup.html) guide.
* Verify the project has support for Gradle. If it does, you will see a `build.gradle` file in your project root.

## Steps to import a Gradle project

### Open the project in VS Code

1. **Open VS Code**
2. **If you are in the welcome screen**, Click `Open`. Otherwise, click `File` → `Open`.
3. **Select the project directory** and click `Open`.

### Confirm the correct JDK is set

1. **Open the Command Palette**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`
2. **Type** `Java: Configure Java Runtime` and select it.
3. **Check that the JDK version** matches the one required for your project. If not, you can install the required JDK and configure it.

For Java installation guides, see:
* [Windows installation guide](javaInstallationWindows.html)
* [Mac installation guide](javaInstallationMac.html)

### Configure the JVM for Gradle

1. **Install the Gradle Extension**: Search for `Gradle` in the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`), and install a Gradle extension if you haven't already (e.g., [Gradle for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle)).

2. **Open `settings.json`**: You can find it by opening the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`), then typing `Preferences: Open User Settings (JSON)`.

3. **Add or modify the following settings** to configure the JVM for Gradle. Here's an example (for Mac):

```json
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

4. **If the Gradle icon doesn't appear** after restarting VS Code, add `"gradle.nestedProjects": true` to your `settings.json` file.

### Verify Gradle integration

**Confirm you can access the Gradle tool window**. After the importing of the project is complete (which could take a few minutes), you will see the Gradle Tab in the VSCode interface e.g., look for the elephant icon on the left and click it.

<pic src="images/vscode/vscode_gradle_icon.jpg" width="400" />