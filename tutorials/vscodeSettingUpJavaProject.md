<frontmatter>
  title: "VS Code: Setting up a Java project"
  pageNav: 2
</frontmatter>

# Setting up a Java project

This tutorial will guide you through creating and managing Java projects in VS Code.

<box type="info" seamless>

This tutorial is adapted from the [official VS Code Java Tutorial](https://code.visualstudio.com/docs/java/java-tutorial).
</box>

## Install the Extension Pack for Java

1. **Open the Extensions View**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+X` | {{ icon_apple }} `Cmd+Shift+X`
2. **Search for** `Extension Pack for Java`
3. **Click** `Install` on the extension by Microsoft

The [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) includes essential tools for Java development:
- Language Support for Java
- Debugger for Java
- Test Runner for Java
- Maven for Java
- Project Manager for Java
- IntelliCode

<box type="tip" seamless>

**Quick tip:** After installation, open the Command Palette: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`, type `Java: Tips for Beginners` and open it for helpful information to get started.
</box>

## Setting up Java Development Kit (JDK)

### Install JDK

VS Code can help you install and configure a JDK automatically:

1. **Open the Command Palette**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`
2. **Type** `Java: Install New JDK` and select it
3. **Choose a JDK version** (Java 17 or later recommended)
4. **Follow the installation prompts**

<box type="tip" seamless>

**Need help with Java installation?** Check out our [Java Installation guide](javaInstallation.html) for detailed setup instructions.
</box>

### Configure your JDK

After installation, verify your JDK configuration:

1. **Open the Command Palette**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`
2. **Type** `Java: Configure Java Runtime` and select it
3. **Verify your JDK** appears in the dropdown list and is selected

<box type="tip" seamless>

If you already have Java installed, VS Code should automatically detect it.
</box>

## Creating a new Java project

### Method 1: Use VS Code's project wizard

For a quick setup:

1. **Open the Command Palette**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`
2. **Type** `Java: Create Java Project` and select it
3. **Select** the desired build tool (e.g. `No build tool` for simple projects)
4. **Choose the location** and **enter the project name** as prompted
5. **VS Code will create** the basic project structure for you

### Method 2: Create project manually

#### Step 1: Create a workspace folder

1. **Create a project folder** on your computer (e.g., `MyJavaProject`)
2. **Open VS Code** and select `File` → `Open Folder...`
3. **Navigate to and select** your project folder
4. **Click "Select Folder"** to open it as a workspace

#### Step 2: Set up the project structure

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

#### Step 3: Create your first Java class

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

## Working with existing Java projects

If you have an existing Java project:

1. **Open the project folder** in VS Code (`File` → `Open Folder...`)
2. **VS Code will automatically detect** the Java files and set up the workspace
3. **Wait for the Java Language Server** to initialize (progress shown in status bar)

## Managing project settings

To view and modify project settings:

1. **Open the Command Palette**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`
2. **Type** `Java: Project Settings` and select it
3. **Configure** source paths, output paths, and referenced libraries as needed

## Running your project

1. **Open your Java file** with a `main` method
2. **Click the "Run" button** that appears above the `main` method or at the top right corner of the editor, or
3. **Press** `F5` to run in debug mode

## Best practices

### Version control

Add the following to your `.gitignore` file:

```gitignore
# Compiled class files
*.class

# VS Code workspace settings
.vscode/
```
