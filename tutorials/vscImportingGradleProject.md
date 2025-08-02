{% set title="VS Code - Importing a Gradle project" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

<box type="info" seamless>

This tutorial is adapted from the [official VS Code Java tutorial for Gradle build tool](https://code.visualstudio.com/docs/java/java-build#_gradle).
</box>

This guide will help you import and work with existing Gradle projects in VS Code.

<span class="fas fa-lightbulb"></span> > [!TIP]  
> For general Gradle setup guidance, see [our Gradle tutorial](https://se-education.org/guides/tutorials/gradle.html).


**If you are new to working with Gradle in VS Code**, we recommend watching the video below for an introduction to the features of VS Code Gradle extension.

<panel header=":fab-youtube: Get started with VS Code Gradle extension" peek >

@[youtube](dfiaqZX-504)

</panel>

**To recall how to use a specific feature**, you can refer to the sections below.

## Prerequisites

<include src="vscCreatingNewJavaProject.md#vsc-java-prereq" />

The [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) includes the [Gradle for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle) extension, which provides Gradle support in VS Code.

💡 Gradle support is included by default in the Java Extension Pack, so no separate Gradle installation is usually required.

<box type="important" seamless>

### 🗂 Typical Gradle Project Structure

A typical Gradle project includes:
- `build.gradle` or `build.gradle.kts`
- `settings.gradle`
- `src/main/java`
- `src/test/java`


Verify the project has support for Gradle. If it does, there should be a `build.gradle` file in your project root.
</box>

## Importing an existing Gradle project

### ### Step 1: Open the Project Folder

1. **Open VS Code**
1. **Select** `File` → `Open Folder...`
1. **Navigate to your existing Gradle project** folder
1. **Click "Select Folder"** to open it as a workspace

💡 When prompted, click `Yes` to trust the workspace so that Gradle tasks and extensions can run correctly.

### Step 2: Let VS Code detect the project

1. **VS Code will automatically detect** the Java and Gradle files and set up the workspace
1. **Wait for the Java Language Server and Gradle Build Server** to initialize (progress shown in status bar)
1. **Check the status bar** at the bottom for any initialization messages

### Step 3: Configure your JDK

<include src="vscCreatingNewJavaProject.md#vsc-java-configure-jdk" />

<box type="important" seamless>

Check that the JDK version matches the one required for your project, as specified in the `build.gradle` file. If you have not yet installed the required JDK, check out our [Java Installation guide](javaInstallation.html) for detailed installation and setup instructions for Windows, macOS, and Linux.
</box>

❗ If Gradle is not detected or build fails, open a terminal and run `gradle -version` to verify your Gradle setup.  
Ensure `JAVA_HOME` is correctly configured and restart VS Code if needed.

You may also need to verify and configure the Gradle Build Server to use the correct JVM.

1. Open the project's `.vscode/settings.json` file. Create the file if it does not exists yet.
    * To configure the following settings globally, open VS Code's `settings.json` file instead. You can find it by opening the Command Palette ({{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`), then typing `Preferences: Open User Settings (JSON)`.
1. Add or modify the following settings to configure the JVM for Gradle. Here's an example for Mac (Replace the JDK name and path as necessary):
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

### Step 4: Verify project configuration

<include src="vscImportingJavaProject.md#vsc-java-verify-project-configuration" />

**Confirm you can access the Gradle tool window**. After the importing of the project is complete (which could take a few minutes), you will see the Gradle Tab in the VS Code interface (Look for the elephant icon on the left and click it).

You can access Gradle tasks in the sidebar via the **Gradle Tasks Panel** (elephant icon).  
[Learn more here](https://code.visualstudio.com/docs/java/java-build#_gradle-support)

<box type="tip" seamless>

If the Gradle icon doesn't appear after restarting VS Code, add `"gradle.nestedProjects": true` to your `settings.json` file.
</box>

<pic src="images/vscode/vscode_gradle_icon.jpg" width="400" />

## Troubleshooting

❌ **Error**: "Could not determine Java version" or "No JVM found"  
✅ **Fix**:
- Ensure a JDK is installed  
- Set the `JAVA_HOME` environment variable correctly  
- Restart VS Code after changing environment variables

❌ **Gradle not detected or build fails**  
✅ **Fix**:
- Run `gradle -version` in your terminal to confirm setup  
- Ensure `java.import.gradle.java.home` in `settings.json` points to a valid JDK

## Gradle Tasks

You can access useful Gradle views from the Gradle side bar. The Gradle Projects view lists all detected Gradle projects in your workspace, allowing you to view, run, or debug any Gradle task.
<panel header="Gradle Tasks" peek>
<video src="https://code.visualstudio.com/assets/docs/java/java-build/gradle-tasks.mp4" controls width="100%">Your browser does not support the video tag.</video>
</panel>

If your workspace contains many Gradle tasks, you can **pin tasks** to easily find your frequently used tasks. You can also check the **Recent Tasks** view to quickly find and rerun tasks you've recently executed.

<panel header="Gradle Pinned and Recent Tasks" peek>
<video src="https://code.visualstudio.com/assets/docs/java/java-build/gradle-pinned-recent-tasks.mp4" controls width="100%">Your browser does not support the video tag.</video>
</panel>

## Testing

<box type="info" seamless>

You need to have installed the [Test Runner for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test) extension for this feature. It should have been installed with the [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack).
</box>

You can run your tests using Gradle directly from VS Code. In the Testing Explorer, you can select which test profile to use and configure tests to be executed through Gradle.

<panel header="Delegate Test to Gradle" peek>
<video src="https://code.visualstudio.com/assets/docs/java/java-build/delegate-test-to-gradle.mp4" controls width="100%">Your browser does not support the video tag.</video>
</panel>

## Editing build files

The Gradle extension provides useful features for editing your Gradle build files in VS Code.

### Syntax Highlighting

The Gradle extension analyzes the opened Gradle file and provides enhanced **syntax highlighting**.
  
![Gradle highlighting](https://code.visualstudio.com/assets/docs/java/java-build/gradle-highlighting.png)

### Outline view

The **Outline** view displays document symbols for the opened Gradle file, making it easy to navigate to different sections.

![Gradle Outline view](https://code.visualstudio.com/assets/docs/java/java-build/gradle-outline.png)

### Problems view

The **Problems** view shows any syntax errors in the opened Gradle file for quick troubleshooting.

![Gradle Problems view](https://code.visualstudio.com/assets/docs/java/java-build/gradle-problems.png)

### Autocompletion

The Gradle extension supports basic **autocompletion**.

As you type Gradle closures or properties, the extension will suggest available options.

<panel header="Gradle autocompletion" peek>
<video src="https://code.visualstudio.com/assets/docs/java/java-build/gradle-auto-completion.mp4" controls width="100%">Your browser does not support the video tag.</video>
</panel>

When adding a new dependency, the Gradle extension provides a list of suggested dependencies to choose from.

<panel header="Gradle Dependency Completion" peek>
<video src="https://code.visualstudio.com/assets/docs/java/java-build/gradle-dependency-completion.mp4" controls width="100%">Your browser does not support the video tag.</video>
</panel>

---

**Contributors**: Rui Shan ([@ruishanteo](https://github.com/ruishanteo)), John Wong ([@Johnwz123](https://github.com/Johnwz123))
