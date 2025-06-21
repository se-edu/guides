{% set title="VS Code - Setting up Checkstyle" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

# {{ title }}

This guide will help you set up a Checkstyle plugin in VS Code so that VS Code can alert you about code style problems as you write code.

## Prerequisites

* Ensure you followed the [Setting up a Java project](vscodeJavaSetup.html) guide.
* The two Checkstyle config files (`checkstyle.xml` and `suppressions.xml`) should be in the `./config/checkstyle` directory, as mentioned [here](checkstyle.md).

## Installing the Checkstyle extension

1. **Open VS Code**
2. **Download the Checkstyle for Java extension** by author ShengChen using `Extensions` → Search `Checkstyle for Java` → Install (the first entry).

![install checkstyle extension in VS Code](images/vscode/checkstyle-extension-install.png)

3. **Open the project directory** in VS Code using `File` → `Open Folder...`.

## Configuring Checkstyle

1. **Check if the `./.vscode/settings.json` file exists**. If not, create a folder `.vscode` in the project root directory and add a file `settings.json` within the `.vscode` folder. This file contains configuration settings for projects in VS Code.
2. **Add these configuration settings** to the `settings.json` file. These settings ensure that the Checkstyle extension uses the correct configuration files in the `./config/checkstyle` directory:

```json
{
  "java.checkstyle.configuration": "${workspaceFolder}/config/checkstyle/checkstyle.xml",
  "java.checkstyle.properties": {
    "config_loc": "${workspaceFolder}/config/checkstyle"
  }
}
```

3. **Add `.vscode` to your `.gitignore`** if you haven't done so by adding these few lines to the end of `.gitignore`:

```sh
# VS Code
/.vscode/
```

## Verifying Checkstyle is working

Now you should be able to edit your code with Checkstyle violations being detected as you edit them in the `Problems` tab in VS Code. For example, after changing the code to add a wildcard import, you can see that the wildcard import on line 11 has been detected by the Checkstyle extension:

<pic src="images/vscode/checkstyle-vscode-example.png" width="600" />
