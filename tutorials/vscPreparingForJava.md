{% set title="VS Code - Preparing for Java Projects" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="vscode.md#wip-warning" />

# {{ title }}

<box type="info" seamless>

This tutorial is adapted from the [official VS Code Java Tutorial](https://code.visualstudio.com/docs/java/java-tutorial).
</box>

This guide will help you set up VS Code for Java development by installing the Java Development Kit (JDK), VS Code and the necessary extensions.

## Install Java Development Kit (JDK)

Before you can develop Java applications, you need to have a Java Development Kit (JDK) installed.

Check out our [Java Installation guide](javaInstallation.html) for detailed installation and setup instructions for Windows, macOS, and Linux.

<box type="info" seamless>

**Note:** After [installing the Extension Pack for Java](#install-the-extension-pack-for-java), VS Code Command Palette: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P` also offers a `Java: Install New JDK` command to install and configure JDK versions through its integrated tools. However, we recommend following our [Java Installation guide](javaInstallation.html) to install the JDK separately.
</box>

## Install VS Code

1. **Visit the official VS Code website**: [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. **Click the "Download" button** - The website will automatically detect your operating system
3. Refer to the [official VS Code Setup Overview](https://code.visualstudio.com/docs/setup/setup-overview) for system-specific installation instructions.
    * [**:fab-apple: Mac**](https://code.visualstudio.com/docs/setup/mac#_install-vs-code-on-macos)
    * [**:fab-windows: Windows**](https://code.visualstudio.com/docs/setup/windows#_install-vs-code-on-windows)
    * [**:fab-linux: Linux**](https://code.visualstudio.com/docs/setup/linux#_install-vs-code-on-linux)

<box type="tip" seamless>

**First time using VS Code?**

Take a few minutes to explore the interface and try the built-in tutorials by opening the Command Palette: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P` and typing `Welcome: Open Walkthrough`.

![VS Code Command Palette "Welcome: Open Walkthrough"](images/vscodeJavaSetup/VSCodeOpenWalkthrough.png)

You can also refer to the [official VS Code Getting Started guide](https://code.visualstudio.com/docs/getstarted/getting-started) for a comprehensive tutorial.
</box>

## Install the Extension Pack for Java

VS Code uses **extensions** to add programming language support and development tools. An **extension pack** is a bundle that contains multiple related extensions, making it easy to install everything you need for a specific programming language with just one click.

The [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) is Microsoft's official bundle that includes all the essential extensions for Java development. Instead of installing each extension individually, you can simply install this pack to get everything you need for Java development in VS Code.

### Installation steps

1. **Open the Extensions View**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+X` | {{ icon_apple }} `Cmd+Shift+X`
2. **Search for** `Extension Pack for Java`
3. **Click** `Install` on the extension by Microsoft

![VS Code Extension Pack for Java](images/vscodeJavaSetup/VSCodeExtensionPackForJava.png)

### Verify installation

To verify that the [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) was installed correctly, open the Command Palette: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P` and type `Java:` to see available commands

![VS Code Command Palette Java commands](images/vscodeJavaSetup/VSCodeCommandPaletteJava.png)

<box type="tip" seamless>

**Quick tip:** After installation, open the Command Palette: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`, type `Java: Tips for Beginners` and open it for helpful information to get started.

![VS Code Command Palette "Java: Tips for Beginners"](images/vscodeJavaSetup/VSCodeCommandPaletteJavaTipsForBeginners.png)

![VS Code Java: Tips for Beginners](images/vscodeJavaSetup/VSCodeJavaTipsForBeginners.png)
</box>

## Next steps

Once you have VS Code prepared for Java development, you can:

* [Create a new Java project](vscCreatingNewJavaProject.html)
* [Import an existing Java project](vscImportingJavaProject.html)
* [Import a Gradle project](vscImportingGradleProject.html)
* [Set up Checkstyle](vscSettingUpCheckstyle.html)
