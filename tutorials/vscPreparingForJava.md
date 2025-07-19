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

<box type="tip" seamless>

If VS Code does not detect your JDK after installation, try restarting VS Code or manually setting the `JAVA_HOME` environment variable.
</box>

## Install VS Code

1. **Visit the official VS Code website**: [https://code.visualstudio.com/](https://code.visualstudio.com/)
1. **Click the "Download" button** - The website will automatically detect your operating system
1. Refer to the [official VS Code Setup Overview](https://code.visualstudio.com/docs/setup/setup-overview) for system-specific installation instructions.
    * [**:fab-apple: Mac**](https://code.visualstudio.com/docs/setup/mac#_install-vs-code-on-macos)
    * [**:fab-windows: Windows**](https://code.visualstudio.com/docs/setup/windows#_install-vs-code-on-windows)
    * [**:fab-linux: Linux**](https://code.visualstudio.com/docs/setup/linux#_install-vs-code-on-linux)

<box type="tip" seamless>

**Launch VS Code from the command line**

You can quickly open a file or folder in VS Code by typing `code <path>` in your terminal or command prompt. For example, `code .` opens the folder you are currently in, inside VS Code.

* **macOS** users must first run the command `Shell Command: Install 'code' command in PATH` from the Command Palette {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P` and restart the terminal to enable this feature. See the [macOS setup guide](https://code.visualstudio.com/docs/setup/mac#_launch-vs-code-from-the-command-line) for details.
* **Windows and Linux** installations should add the `code` command to your system path automatically.

For more command line options and tips, see the [official VS Code Command Line Interface guide](https://code.visualstudio.com/docs/configure/command-line).
</box>

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
1. **Search for** `Extension Pack for Java`
1. **Click** `Install` on the extension by Microsoft

<box type="warning" seamless>

Ensure that the publisher is **Microsoft**. Other similarly named extensions and extension packs may appear but they may not include all the required extensions.
</box>

![VS Code Extension Pack for Java](images/vscodeJavaSetup/VSCodeExtensionPackForJava.png)

### Verify installation

To verify that the [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) was installed correctly, open the Command Palette: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P` and type `Java:` to see available commands.

<box type="tip" seamless>

If you do not see any Java commands, make sure the Extension Pack was installed correctly and try reloading VS Code (Open the Command Palette: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`, then type and select `Developer: Reload Window`)
</box>

![VS Code Command Palette Java commands](images/vscodeJavaSetup/VSCodeCommandPaletteJava.png)

<box type="info" seamless>

After installation, VS Code Command Palette: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P` also offers a `Java: Install New JDK` command to install and configure JDK versions through its integrated tools. However, we recommend following our [Java Installation guide](javaInstallation.html) to install the JDK separately.
</box>

<box type="tip" seamless>

After installation, open the Command Palette: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`, type `Java: Tips for Beginners` and open it for helpful information to get started.

![VS Code Command Palette "Java: Tips for Beginners"](images/vscodeJavaSetup/VSCodeCommandPaletteJavaTipsForBeginners.png)

![VS Code Java: Tips for Beginners](images/vscodeJavaSetup/VSCodeJavaTipsForBeginners.png)
</box>

---

**Contributors**: John Wong ([@Johnwz123](https://github.com/Johnwz123))
