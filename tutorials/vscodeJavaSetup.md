{% set title="VS Code - Preparing VS Code for Java" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

# {{ title }}

This guide will help you set up VS Code for Java development by installing the necessary extensions and configuring the Java Development Kit (JDK).

<box type="info" seamless>

This tutorial is adapted from the [official VS Code Java Tutorial](https://code.visualstudio.com/docs/java/java-tutorial).
</box>

## Install the Extension Pack for Java

To develop Java applications in VS Code, you need to install the appropriate extensions that provide language support, debugging, and other essential features. The easiest way to get started with Java development in VS Code is to install the [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack), which includes all the essential extensions you need.

### Installation steps

1. **Open the Extensions View**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+X` | {{ icon_apple }} `Cmd+Shift+X`
2. **Search for** `Extension Pack for Java`
3. **Click** `Install` on the extension by Microsoft

<box type="tip" seamless>

**Quick tip:** After installation, open the Command Palette: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`, type `Java: Tips for Beginners` and open it for helpful information to get started.
</box>

### Verify installation

After installing the extensions, you should see:

1. **Java language support** - `.java` files will have syntax highlighting
2. **Java commands** in the Command Palette - Open the Command Palette: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P` and type `Java:` to see available commands
3. **Status bar indicators** - Java information in the bottom status bar

## Setting up Java Development Kit (JDK)

Before you can develop Java applications in VS Code, you need to have a Java Development Kit (JDK) installed and properly configured.

### Install JDK

VS Code can help you install and configure a JDK automatically through its integrated tools.

1. **Open the Command Palette**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`
2. **Type** `Java: Install New JDK` and select it
3. **Choose a JDK version** (Java 17 or later recommended)
4. **Follow the installation prompts**
5. **Wait for the download and installation** to complete

<box type="tip" seamless>

**Need help with Java installation?** Check out our [Java Installation guide](javaInstallation.html) for detailed setup instructions for Windows, macOS, and Linux.
</box>

### Configure your JDK

After installation, you need to verify and configure VS Code to use the correct JDK.

1. **Open the Command Palette**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`
2. **Type** `Java: Configure Java Runtime` and select it
3. **Verify your JDK** appears in the dropdown list and is selected

<box type="tip" seamless>

If you already have Java installed, VS Code should automatically detect it.
</box>

## Next steps

Once you have VS Code prepared for Java development, you can:

* [Create a new Java project](vscodeNewJavaProject.html)
* [Import an existing Java project](vscodeImportJavaProject.html)
* [Import a Gradle project](vscodeGradleImport.html)
* [Set up Checkstyle](vscodeCheckstyle.html)
