{% set title="VS Code - Creating a New Java Project" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

This guide will walk you through creating a new Java project in VS Code from scratch.

## Prerequisites

<div id="vsc-java-prereq">

Ensure you have followed our guide on [Preparing VS Code for Java](vscPreparingForJava.html).
</div>

## Creating a new project

There are two methods you can use to create a new Java project:

* Method 1: Use VS Code's project wizard
* Method 2: Create project manually

### Method 1: Use VS Code's project wizard

The easiest way to create a new Java project is using VS Code's built-in project wizard.

<box type="info" seamless>

VS Code may prompt you to install the Java Development Kit during project creation. You can skip this if you have already installed the JDK.
</box>

1. **Open the Command Palette**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`
1. **Type** `Java: Create Java Project` and select it
![VS Code Command Palette "Java: Create Java Project"](images/vscodeNewJavaProject/VSCodeCommandPaletteJavaCreateJavaProject.png)
1. **Select** the desired build tool:
   * **No build tool** - For simple projects
   * **Gradle** - For projects that will use Gradle build system
   * **Maven** - For projects that will use Maven build system
1. **Choose the location** and **enter the project name** as prompted
1. **VS Code will create** the basic project structure for you

### Method 2: Create project manually

If you prefer more control over the project setup, you can create a project manually.

* ****Step 1: Create a workspace folder**** {{ step_numbers }}
  * **Create a project folder** on your computer (e.g., `MyJavaProject`) {{ abcd_numbers }}
  * **Open VS Code** and select `File` → `Open Folder...`
  * **Navigate to and select** your project folder
  * **Click "Select Folder"** to open it as a workspace

    <box type="info" seamless>

    After opening the project folder, VS Code may ask if you want to open it as a workspace. If prompted, click ‘Yes’ when asked to open the folder as a workspace.
    </box>

* ****Step 2: Set up the project structure****

  Create the following simple folder structure:

  ```text
  MyJavaProject/
  └── src/
      └── (your Java source files will go here)
  ```

  * **Open the Explorer panel**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+E` | {{ icon_apple }} `Cmd+Shift+E` {{ abcd_numbers }}
  * **Right-click in the Explorer panel** (Right-click in the empty area, not on an existing file)
  * **Select** `New Folder`
  * **Name it** `src`

    <box type="info" seamless>

    VS Code automatically handles compilation, so you do not need separate folders for compiled `.class` files.
    </box>

* ****Step 3: Create your first Java class****

  * **Right-click** on the `src` folder {{ abcd_numbers }}
  * **Select** `New File`
  * **Name it** `HelloWorld.java`
  * **Add the following code:**

    ```java
    public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
    }
    ```

  *  **Save the file**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+S` | {{ icon_apple }} `Cmd+S`
     <box type="info" seamless>

     To compile and run your Java program, click the `Run` (:fas-play:) button or use the `Run` menu. You may not see a `.class` file appear in your workspace, as VS Code may compile your code in the background or store the output in a hidden folder. If you see `Hello, World!` (or your program's expected output), your environment is set up correctly!
     </box>

## Configuring your JDK

<div id="vsc-java-configure-jdk">

<box type="tip" seamless>

If you already have Java installed, VS Code should automatically detect and configure it when you create your project.
</box>

After creating your project, you may need to verify and configure VS Code to use the correct JDK version.

1. **Open the Command Palette**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`
1. **Type** `Java: Configure Java Runtime` and select it
1. **Verify your JDK** appears in the dropdown list and is selected
1. **Select the appropriate JDK** if you have multiple versions installed

<box type="info" seamless>

If no JDK options appear, try reloading VS Code (Open the Command Palette: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`, then type and select `Developer: Reload Window`) and ensure your JDK is properly installed and added to your system’s `PATH` or select "Find a local JDK" to locate the installed JDK in your file system.
</box>

![VS Code Java: Configure Java Runtime](images/vscodeNewJavaProject/VSCodeJavaConfigureJavaRuntime.png)

</div>

## Configuring project settings

<div id="vsc-java-configure-project-settings">

### Manual Configuration

To view and modify project settings:

1. **Open the Command Palette**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`
1. **Type** `Java: Open Project Settings` and select it
1. **Configure** as needed:
   * **Source paths** - Directories where your Java source files are located
   * **Output path** - Directory where compiled `.class` files will be stored
   * **Libraries** - External JAR files or libraries your project depends on
   * **JDK version** - The JDK version to use for compilation and runtime

![VS Code Java Project Settings](images/vscodeNewJavaProject/VSCodeJavaProjectSettings.png)

### Using `.vscode/settings.json`

You can also configure project settings by creating a `.vscode/settings.json` file in the root directory, if it does not exist:

1. In the project root directory, create a folder named `.vscode`.
1. Inside the `.vscode` folder, create a file named `settings.json`. This file will store the project's VS Code configuration settings.
1. Add these configuration settings to the `settings.json` file. Update the values to match your project's source folders, output directory, and library paths as needed.

    ```json
    {
        "java.project.sourcePaths": [
            "src"
        ],
        "java.project.outputPath": "bin",
        "java.project.referencedLibraries": [
            "lib/**/*.jar"
        ]
    }
    ```

</div>

## Configuring Git

If you are using Git to version control the project, you may want to add the following to your `.gitignore` file:

```gitignore
# Compiled class files
*.class

# VS Code workspace settings
.vscode/
```

## Running your project

<div id="vsc-java-run-project">

1. **Open your Java file** with a `main` method
1. **To run the code, click the "Run" button** that appears above the `main` method or in the top right corner of the editor
1. **Check the terminal output** to see your program's output

<box type="info" seamless>

If the ‘Run’ button does not appear, try reloading VS Code (Open the Command Palette: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`, then type and select `Developer: Reload Window`) or right-click inside the `main` method of your Java file and select ‘Run Java’ from the context menu.
</box>

</div>

---

**Contributors**: John Wong ([@Johnwz123](https://github.com/Johnwz123))
