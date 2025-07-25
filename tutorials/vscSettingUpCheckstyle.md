{% set title="VS Code - Setting up Checkstyle" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>


<include src="vscode.md#wip-warning" />

# {{ title }}

<box type="info" seamless>
    Checkstyle is a development tool that helps you write clean, consistent, and readable Java code by automatically checking your source code against a set of predefined coding standards.
</box>

Given below are the steps to set up a Checkstyle plugin in VS Code so that VS Code can alert you about code style problems as you write code.

* **Verify prerequisites:** {{ step_numbers }}
  * Ensure you followed the section [Preparing VS Code for Java projects](vscPreparingForJava.md) above. In particular, please ensure that you have installed the [Java Extension Pack](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack).
  * The two Checkstyle config files (`checkstyle.xml` and `suppressions.xml`) should be in the `./config/checkstyle` directory, as mentioned [here](checkstyle.md). The files can be copied from `addressbook-level3`: [checkstyle.xml](https://github.com/nus-cs2103-AY2122S1/addressbook-level3/blob/master/config/checkstyle/checkstyle.xml) and [suppressions.xml](https://github.com/nus-cs2103-AY2122S1/addressbook-level3/blob/master/config/checkstyle/suppressions.xml)
* Open VS Code.
* Download the [Checkstyle for Java](https://marketplace.visualstudio.com/items?itemName=shengchen.vscode-checkstyle) extension by author ShengChen using `Extensions` -> Search `Checkstyle for Java` -> Install (the first entry).<br>
   ![install checkstyle extension in VS Code](images/vscode/checkstyle-extension-install.png)
* Open the project directory in VS Code using `File -> Open Folder...`.
* Set up the extension to use the project's Checkstyle files as follows:
  * Check if the `./.vscode/settings.json` file exists. If not, create a folder `.vscode` in the project root directory and add a file `settings.json` within the `.vscode` folder. This file contains configuration settings for projects in VS Code. {{ abcd_numbers }}
   * Add these configuration settings to the `settings.json` file. These settings ensure that the Checkstyle extension uses the correct configuration files in the `./config/checkstyle` directory.:
     ```json { heading="settings.json" }
      {
        "java.checkstyle.configuration": "${workspaceFolder}/config/checkstyle/checkstyle.xml",
        "java.checkstyle.properties": {
          "config_loc": "${workspaceFolder}/config/checkstyle"
        }
      }
      ```
      <box type="tip" seamless>

      `workspaceFolder` refers to the root folder of the project (i.e., the folder you selected when you used File → Open Folder...)
      </box>
* Add `.vscode` to your `.gitignore` if you haven't done so by adding these few lines to the end of `gitignore`:
  ```sh { heading=".gitignore" }
  # VS Code
  /.vscode/
  ```
* Now you should be able to edit your code with Checkstyle violations being detected as you edit them in the `Problems` tab in VS Code. For example, after changing the code to add a wildcard import, you can see that the wildcard import on line 11 has been detected by the Checkstyle extension:<br>
  <pic src="images/vscode/checkstyle-vscode-example.png" width="600" />

<box type="tip" seamless>

**Troubleshooting tips**

Sometimes, there may be errors in your set up although the Problems tab does not display any issues.

Here are some steps you can take if you encounter this issue:
* Restart VS Code
* Ensure the extension is installed
* Double-check file paths and casing (especially on macOS/Linux)
* Use View → Problems to see errors
* Ensure your workspace is the **root folder** of the project (i.e., not a subfolder)
* Make sure your `settings.json` syntax is valid (e.g., no trailing commas)

If you are using macOS and it does not seem to work, it may be due to macOS permissions or sandboxing. VS Code might not have access to all folders by default. To resolve this, go to System Settings → Privacy & Security → Full Disk Access and ensure that Visual Studio Code has full disk access.
</box>

---

**Contributors**: Brendon Koh ([@brein62](https://github.com/brein62))