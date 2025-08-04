{% set title="Intellij IDEA: Using Windsurf" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

Windsurf is an AI assistant that integrates smoothly with Intellij IDEA and serves as a practical alternative to GitHub Copilot, especially for users seeking a free, non-Microsoft solution.

## Setting Up
* **Create a Windsurf account**, if you don't have one yet. {{ step_numbers }}
  * Go to the [Windsurf registration page](https://windsurf.com/account/register).
  * Sign up using your email, Google account, or GitHub account.
  * Verify your account through the email sent to your inbox.
* **Install the [Extension Pack for Windsurf](https://plugins.jetbrains.com/plugin/20540-windsurf-plugin-formerly-codeium-for-python-js-java-go--)**
  * Open IntelliJ.
  * Go to `File` → `Settings` → `Plugins` → `Marketplace`.
  * Search for Windsurf.
  * Click `Install` on the plugin developed by **Windsurf**.<br>
    <pic src="images/intellijWindsurf/windsurfPlugin.png" width="400" />
  * Restart IntelliJ by clicking `Restart IDE` → `Restart`.
* **Sign in to Windsurf**
  * Click on the pop-up to log in to Windsurf. If there is no pop-up, click the Windsurf icon on the right sidebar and then click Login.<br>
    <pic src="images/intellijWindsurf/windsurfIcon.png" width="400" />
  * A browser pop-up will appear asking you to sign in.
  * Log in to your Windsurf account if needed.
  * You can close the web page and proceed back to IntelliJ IDEA.
  * Windsurf will now be signed in within IntelliJ IDEA.

## Using Windsurf in Intellij IDEA

### Basic Code Completion
* In a Java file, type a comment like `// print Hello World!` inside the main method.<br>
    <pic src="images/intellijWindsurf/windsurfCodeCompletion.png" width="400" />
* Press `Tab` to autocomplete the suggestion.
  <box type="tip" seamless>
    The more descriptive your method name or comment, the better Windsurf’s suggestion will be.
    </box>

### Windsurf Chat
* Open the Windsurf chat by clicking the Windsurf icon.<br>
    <pic src="images/intellijWindsurf/windsurfChat.png" width="400" />
* Ask something like: `Write a main method that calculates the factorial of N`.
* Windsurf will respond in the chat and suggest the changes in the current active file. You can accept or decline the changes with the buttons below.<br>
    <pic src="images/intellijWindsurf/windsurfChatSuggestion.png" width="800" />
  <box type="warning" seamless>
    Free Windsurf Chat has a limited prompt rate.
    </box>

### Windsurf Inline Chat
* Go to the line or section where you want to ask Windsurf for assistance.
* Use the inline chat feature using the shortcut {{ icon_windows }}/{{ icon_linux}} `Ctrl+I` | {{ icon_apple }} `Cmd+I`.
* Type your request such as "Add a print log here" and press `Enter`.
* The generated lines of code will be highlighted in yellow, and you can insert them by clicking on `Accept`.<br>
    <pic src="images/intellijWindsurf/windsurfInline.png" width="600" />

### Windsurf Default Commands
* Windsurf comes with built-in commands that can help you. Above each code block, you’ll see available shortcuts.<br>
    <pic src="images/intellijWindsurf/windsurfCommands.png" width="500" />
* Refactor command
  * Click `Windsurf: Refactor` to open a menu with refactoring options.<br>
    <pic src="images/intellijWindsurf/windsurfRefactor.png" width="500" />
  * Choose a command, then click `Accept` ({{ icon_windows }}/{{ icon_linux}}/{{ icon_apple }} `Alt+A`) or `Reject` ({{ icon_windows }}/{{ icon_linux}}/{{ icon_apple }} `Alt+R`) to confirm or dismiss the generated code.
* Explain command
  * Click the `Explain` button above a code block to have Windsurf explain it.
  * Windsurf will explain the related code chunk through the chat.
