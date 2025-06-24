{% set title="VS Code - Creating a New Java Project" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

# {{ title }}

This guide will walk you through creating a new Java project in VS Code from scratch.

## Prerequisites

* VS Code with the Extension Pack for Java installed
* Java Development Kit (JDK) installed

<box type="tip" seamless>

**Need help with setup?** Check out our [Preparing VS Code for Java](vscodeJavaPrep.html) guide first.
</box>

## Method 1: Use VS Code's project wizard

The easiest way to create a new Java project is using VS Code's built-in project wizard.

1. **Open the Command Palette**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`
2. **Type** `Java: Create Java Project` and select it
3. **Select** the desired build tool:
   * **No build tool** - For simple projects
   * **Gradle** - For projects that will use Gradle build system
   * **Maven** - For projects that will use Maven build system
4. **Choose the location** and **enter the project name** as prompted
5. **VS Code will create** the basic project structure for you

## Method 2: Create project manually

If you prefer more control over the project setup, you can create a project manually.

### Step 1: Create a workspace folder

1. **Create a project folder** on your computer (e.g., `MyJavaProject`)
2. **Open VS Code** and select `File` → `Open Folder...`
3. **Navigate to and select** your project folder
4. **Click "Select Folder"** to open it as a workspace

### Step 2: Set up the project structure

Let's start with a simple structure:

```text
MyJavaProject/
└── src/
    └── (your Java source files will go here)
```

**To create the source folder:**

1. **Right-click in the Explorer panel** and select `New Folder`
2. **Name it** `src`

<box type="info" seamless>

VS Code automatically handles compilation, so you don't need separate folders for compiled `.class` files.
</box>

### Step 3: Create your first Java class

1. **Right-click** on the `src` folder
2. **Select** `New File`
3. **Name it** `HelloWorld.java`
4. **Add the following code:**

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

5. **Save the file**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+S` | {{ icon_apple }} `Cmd+S`

VS Code will automatically compile the Java file when you save it.

## Running your project

1. **Open your Java file** with a `main` method
2. **Click the "Run" button** that appears above the `main` method or at the top right corner of the editor, or
3. **Press** `F5` to run in debug mode
4. **Check the terminal output** to see your program's output

## Managing project settings

To view and modify project settings:

1. **Open the Command Palette**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`
2. **Type** `Java: Open Project Settings` and select it
3. **Configure** source paths, output paths, and referenced libraries as needed

## Best practices

### Version control

Add the following to your `.gitignore` file:

```gitignore
# Compiled class files
*.class

# VS Code workspace settings
.vscode/
```

## Next steps

Once you have your project created, you might want to:

* [Configure code formatting](vscodeCodeStyle.html)
