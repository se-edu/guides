{% set title="Intellij IDEA: Using GitHub Copilot" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

GitHub Copilot is an AI-powered coding assistant that integrates smoothly with IntelliJ IDEA. While Copilot is developed by GitHub (a Microsoft-owned company) and initially optimized for VS Code, it also offers robust support for JetBrains IDEs through an official plugin, ensuring a seamless coding experience across different development environments.

<include src="copilotSignup.md" />

## Installing GitHub Copilot in IntelliJ IDEA

* **Updating Visual Studio Code** {{ step_numbers }}
  * Open IntelliJ IDEA.
  * Go to `File` → `Settings` → `Appearance & Behavior` → `System Settings` → `Updates` → `Check for Updates…`.
  * If updates are available, click `Update and Restart`.
  * Confirm the update in the pop-up window.
  * After the update is installed, restart IntelliJ IDEA.
* **Install the [Extension Pack for GitHub Copilot](https://plugins.jetbrains.com/plugin/17718-github-copilot)**, to enable support for AI autocompletion.
  * Open IntelliJ IDEA.
  * Go to `File` → `Settings` → `Plugins` → `Marketplace`.
  * Search for "GitHub Copilot".
  * Click `Install` on the plugin developed by **GitHub**.<br>
    <pic src="images/intellijCopilot/copilotPlugin.png" width="400" />
  * Restart IntelliJ by clicking `Restart IDE` → `Restart`.

## Signing in to GitHub Copilot

* **Verify prerequisites** {{ step_numbers }}
  * Ensure you followed the section [Installing GitHub Copilot in IntelliJ IDEA](#installing-github-copilot-in-intellij-idea) above.
* **Sign in to GitHub Copilot**
  * Open IntelliJ IDEA.
  * Click the GitHub Copilot icon in the right-hand sidebar.<br>
    <pic src="images/intellijCopilot/copilotLogin.png" width="400" />
  * Click `Sign in to GitHub`.
  * In the pop-up, click `Copy and Open`.
  * You'll be redirected to the GitHub login page. Log in or select the account linked to GitHub Education.
  * Paste the copied code `Ctrl+V`, click `Continue`, then `Authorize GitHub Copilot Plugin`.
  * GitHub Copilot will now be signed in within IntelliJ.
* **Verifying the installation of GitHub Copilot**
  * Create a scratch file via `File` → `New` → `Scratch File` → `Java`.
  * On line 3, type `/` and a suggestion should appear automatically.<br>
    <pic src="images/intellijCopilot/copilotSuggestion.png" width="600" />

## Using GitHub Copilot in IntelliJ IDEA

### Basic Code Completion

  * In a Java file, type a comment like `// print Hello World` inside the main method.
    ```java
    public class Main {
        public static void main(String[] args) {
            // print Hello World
        }
    }
    ```
  * GitHub Copilot will automatically suggest code to complete or implement the comment.<br>
    <pic src="images/intellijCopilot/copilotBasicCompletion.png" width="400" />
  * Press `Tab` to accept the suggestion, or continue typing to refine it.
  <box type="tip" seamless>
    The more descriptive your comment or method signatures, the better Copilot can understand what you want to implement.
    </box>

### Copilot Chat

  * Click the **Copilot Chat** icon in the right-hand sidebar.
  * Ask something like: "Write a main method that calculates the factorial of N".
  * GitHub Copilot will generate a response in the chat window.<br>
    <pic src="images/intellijCopilot/copilotChat.png" width="400" />
  * You can directly insert or copy code chunks using the buttons in the top right corner.
  * From left to right: Copy to clipboard, Insert at cursor.

### Copilot Inline Chat

  * Go to the line or section where you want to ask Copilot for assistance.
  * * Use the inline chat feature using the shortcut {{ icon_windows }}/{{ icon_linux}} `Shift+Ctrl+I` | {{ icon_apple }} `Shift+Ctrl+G`.
  * Type your request such as "Add a print log here" and press `Enter`.
  * You can insert the generated lines of code by hovering over the code block and clicking on `Insert Code Block at Cursor`.<br>
    <pic src="images/intellijCopilot/copilotInline.png" width="600" />
