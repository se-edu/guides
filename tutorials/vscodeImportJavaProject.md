{% set title="VS Code - Importing Existing Java Projects" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

# {{ title }}

This guide will help you import and work with existing Java projects in VS Code.

## Prerequisites

* VS Code with the Extension Pack for Java installed
* Java Development Kit (JDK) installed

<box type="tip" seamless>

**Need help with setup?** Check out our [Preparing VS Code for Java](vscodeJavaPrep.html) guide first.
</box>

## Importing an existing Java project

### Step 1: Open the project folder

1. **Open VS Code**
2. **Select** `File` → `Open Folder...`
3. **Navigate to your existing Java project** folder
4. **Click "Select Folder"** to open it as a workspace

### Step 2: Let VS Code detect the project

1. **VS Code will automatically detect** the Java files and set up the workspace
2. **Wait for the Java Language Server** to initialize (progress shown in status bar)
3. **Check the status bar** at the bottom for any initialization messages

### Step 3: Verify project configuration

After the project loads:

1. **Check syntax highlighting** - Java files should have proper syntax highlighting
2. **Test IntelliSense** - Try typing in a Java file to see if code completion works
3. **Look for error indicators** - VS Code will underline syntax errors in red

## Troubleshooting common issues

### Java Language Server not starting

If the Java Language Server fails to start:

1. **Check JDK configuration**:
   - Open Command Palette: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`
   - Type `Java: Configure Java Runtime` and verify JDK is detected

2. **Reload the window**:
   - Open Command Palette: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`
   - Type `Developer: Reload Window`

### Missing dependencies

If your project has missing dependencies:

1. **For Gradle projects**: Check the Gradle build file and refresh dependencies
2. **For Maven projects**: Check the `pom.xml` file and refresh dependencies
3. **For plain Java projects**: Manually add JAR files to the project

### Wrong Java version

If VS Code is using the wrong Java version:

1. **Open Command Palette**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`
2. **Type** `Java: Configure Java Runtime`
3. **Select the correct JDK** for your project requirements

## Configuring project settings

### Manual configuration

For projects that need custom configuration:

1. **Open Command Palette**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`
2. **Type** `Java: Project Settings` and select it
3. **Configure**:
   - Source paths
   - Output paths
   - Referenced libraries
   - JDK version

### Using .vscode/settings.json

You can also configure project settings manually by creating a `.vscode/settings.json` file:

```json
{
    "java.project.sourcePaths": [
        "src"
    ],
    "java.project.referencedLibraries": [
        "lib/**/*.jar"
    ]
}
```

## Best practices

### Version control

Add the following to your `.gitignore` if not already present:

```gitignore
# Compiled class files
*.class

# VS Code workspace settings
.vscode/
```

## Running imported projects

1. **Locate the main class** with a `main` method
2. **Click the "Run" button** that appears above the `main` method
3. **Or press** `F5` to run in debug mode
4. **Check build tool commands** if it's a Gradle/Maven project

## Next steps

Once you have successfully imported your project:

* [Configure code formatting](vscodeCodeStyle.html) to match team standards
