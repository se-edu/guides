{% set title="VS Code - Importing Existing Java Projects" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="vscode.md#wip-warning" />

# {{ title }}

This guide will help you import and work with existing Java projects in VS Code.

## Prerequisites

<include src="vscCreatingNewJavaProject.md#vsc-java-prereq" />

## Importing an existing Java project

### Step 1: Open the project folder

1. **Open VS Code**
1. **Select** `File` → `Open Folder...`
1. **Navigate to your existing Java project** folder
1. **Click "Select Folder"** to open it as a workspace

### Step 2: Let VS Code detect the project

1. **VS Code will automatically detect** the Java files and set up the workspace
1. **Wait for the Java Language Server** to initialize (progress shown in status bar)
1. **Check the status bar** at the bottom for any initialization messages

### Step 3: Verify project configuration

<div id="vsc-java-verify-project-configuration">

After the project loads:

1. **Check syntax highlighting** - Java files should have proper syntax highlighting
1. **Test IntelliSense** - Try typing in a Java file to see if code completion works
1. **Look for error indicators** - VS Code will underline syntax errors in red

<box type="info" seamless>

If Java features like syntax highlighting or IntelliSense are not working, ensure the Java Extension Pack is installed and VS Code has fully initialized.
</box>

</div>

## Configure your JDK

<include src="vscCreatingNewJavaProject.md#vsc-java-configure-jdk" />

## Configure project settings

<include src="vscCreatingNewJavaProject.md#vsc-java-configure-project-settings" />

## Running imported projects

<include src="vscCreatingNewJavaProject.md#vsc-java-run-project" />

## Best practices

### Version control

Add the following to your `.gitignore` if not already present:

```gitignore
# Compiled class files
*.class

# VS Code workspace settings
.vscode/
```

---

**Contributors**: John Wong ([@Johnwz123](https://github.com/Johnwz123))
