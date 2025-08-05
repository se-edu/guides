<div id="title-id">
Windsurf is an AI assistant that integrates smoothly with {{ ide }} and serves as a practical alternative to GitHub Copilot, especially for users seeking a free, non-Microsoft solution.

</div>

<div id="setting-up-id">

## Setting Up
* **Create a Windsurf account**, if you don't have one yet.
  * Go to the [Windsurf registration page](https://windsurf.com/account/register).
  * Sign up using your email, Google account, or GitHub account.
  * Verify your account through the email sent to your inbox.
</div>

<div id="basic-code-completion-id">

### Basic Code Completion

* In a Java file, type a comment like `// print Hello World!` inside the main method.<br>
<pic src="{{ imgurl }}" width="400" />
* Press `Tab` to autocomplete the suggestion.
  <box type="tip" seamless>
    The more descriptive your method name or comment, the better Windsurf’s suggestion will be.
    </box>

</div>

<div id="windsurf-inline-chat-id">

### Windsurf Inline Chat

* Go to the line or section where you want to ask Windsurf for assistance.
* Use the inline chat feature using the shortcut {{ icon_windows }}/{{ icon_linux}} `Ctrl+I` | {{ icon_apple }} `Cmd+I`.
* Type your request such as "Add a print log here" and press `Enter`.
* The generated lines of code will be highlighted in yellow, and you can insert them by clicking on `Accept`.<br>
    <pic src="{{ imgurl }}" width="600" />

</div>


<div id="windsurf-default-commands-id">

### Windsurf Default Commands

* Windsurf comes with built-in commands that can help you. Above each code block, you'll see available shortcuts.<br>
    <pic src="{{ commandsimgurl }}" width="500" />
* Refactor command
  * Click `Windsurf: Refactor` to open a menu with refactoring options.<br>
    <pic src="{{ refactorimgurl }}" width="500" />
  * Choose a command, then click `Accept` ({{ icon_windows }}/{{ icon_linux}}/{{ icon_apple }} `Alt+A`) or `Reject` ({{ icon_windows }}/{{ icon_linux}}/{{ icon_apple }} `Alt+R`) to confirm or dismiss the generated code.
* Explain command
  * Click the `Explain` button above a code block to have Windsurf explain it.
  * Windsurf will explain the related code chunk through the chat.
  
</div>