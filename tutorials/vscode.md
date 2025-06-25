{% set title="VS Code - Community Resources" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>


<box type="warning" light>

**Caution: This page is a work-in-progress, containing content contributed by students.**

* If you notice any bugs or suggestions for improvements, please report at https://github.com/se-edu/guides/issues
* You are welcome to contribute by sending a PRs to https://github.com/se-edu/guides/pulls too.
</box>

# {{ title }}

This guide is for those who prefer to use [Visual Studio Code](https://code.visualstudio.com/) (VS Code) for their Java projects.

## Getting started with VS Code for Java

To effectively use VS Code for Java development, you will need to set up your environment and learn the essential workflows:

* **[Preparing VS Code for Java](vscodeJavaSetup.html)** - Install required extensions and configure your development environment
* **[Creating a new Java project](vscodeNewJavaProject.html)** - Learn how to create Java projects from scratch
* **[Importing existing Java projects](vscodeImportJavaProject.html)** - Import and configure existing Java projects
* **[Importing a Gradle project](vscodeGradleImport.html)** - Learn how to open and configure Gradle-based Java projects
* **[Setting up Checkstyle](vscodeCheckstyle.html)** - Configure code style checking to maintain consistent code quality

## Quick reference

### Essential keyboard shortcuts

* **Command Palette**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P`
* **Extensions View**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+X` | {{ icon_apple }} `Cmd+Shift+X`
* **Run Program**: Click Run button or `F5` (debug mode)
* **Save File**: {{ icon_windows }}/{{ icon_linux}} `Ctrl+S` | {{ icon_apple }} `Cmd+S`

### Key Java commands in VS Code

Open the Command Palette: {{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+P` | {{ icon_apple }} `Cmd+Shift+P` and type:
* `Java: Create Java Project` - Create a new project
* `Java: Configure Java Runtime` - Set up JDK
* `Java: Install New JDK` - Install JDK through VS Code
* `Java: Open Project Settings` - Configure project settings
* `Java: Tips for Beginners` - Get helpful tips
