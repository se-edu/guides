{% set title="VS Code: Using Windsurf" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

# { title }

Windsurf is an AI assistant that integrates smoothly with Visual Studio Code and serves as a practical alternative to GitHub Copilot, especially for users seeking a free, non-Microsoft solution.

## Signing Up for Windsurf
* **Creating a Windsurf account** {{ step_numbers }}
  * Go to the [Windsurf registration page](https://windsurf.com/account/register).
  * Sign up using your email, Google account, or GitHub account.
  * Verify your account through the email sent to your inbox.

## Set Up Windsurf in Visual Studio Code
* **Install the [Extension Pack for Windsurf](https://marketplace.visualstudio.com/items?itemName=Codeium.codeium)** {{ step_numbers }}
  * Click on the extension link above.
  * Click the Install button on the page that opens.
  * It should prompt you with `Open Visual Studio Code?` and click `Open Visual Studio Code`.
  * You will be redirected to the extension page in Visual Studio Code.
  * Click on `Install` to install the extension.
* **Signing in to Windsurf**
  * Click on the pop-up to log in to Windsurf. If there is no pop-up, click the Windsurf icon on the sidebar and then click `Login`.<br>
    <pic src="images/vscWindsurf/login.png" width="200" />
  * A browser pop-up will appear asking you to sign in. Click `Allow` → `Open`.
  * Log in to your Windsurf account if needed.
  * It should prompt you with `Open Visual Studio Code?` and click `Open Visual Studio Code`.
  * You will be redirected to VS Code. When asked "Allow 'Windsurf Plugin (formerly Codeium): AI Coding Autocomplete and Chat for Python, JavaScript, TypeScript, and more' extension to open this URI?", click `Open`.
  * If you see the pop-up "Welcome back to Windsurf, ...", you have successfully logged in.
  
## Using Windsurf in Visual Studio Code

### Basic Code Completion
* In a Java file, type a comment like `// print Hello World!` inside the main method.<br>
    <pic src="images/vscWindsurf/windsurfSuggestion.png" width="400" />
* Press `Tab` to autocomplete the suggestion.
  <box type="tip" seamless>
    The more descriptive your method name or comment, the better Windsurf’s suggestion will be.
    </box>

### Windsurf Chat
  * Open the Windsurf chat by clicking the Windsurf icon.<br>
    <pic src="images/vscWindsurf/windsurfChat.png" width="200" />
  * Ask something like: `Write a main method that calculates the factorial of N`.
  * Windsurf will respond in the Windsurf chat. Click the copy icon in the top right corner to copy any code that might be relevant.
  <box type="warning" seamless>
    Free Windsurf Chat has a limited prompt rate.
    </box>

### Windsurf Inline Chat
  * Go to the line or section where you want to ask Windsurf for assistance.
  * Use the inline chat feature using the shortcut {{ icon_windows }}/{{ icon_linux}} `Ctrl+I` | {{ icon_apple }} `Cmd+I`.
  * Type your request such as "Add a print log here" and press `Enter`.
  * The generated lines of code will be highlighted in yellow, and you can insert them by clicking on `accept`.<br>
    <pic src="images/vscWindsurf/windsurfInline.png" width="600" />

### Windsurf Default Commands
  * Windsurf comes with built-in commands that can help you. Above each code block, you’ll see available shortcuts.<br>
    <pic src="images/vscWindsurf/windsurfCommands.png" width="400" />
  * Refactor command
    * Click `Windsurf: Refactor` to open a menu with refactoring options.<br>
    <pic src="images/vscWindsurf/windsurfrefactor.png" width="400" />
    * Choose a command, then click `Accept` ({{ icon_windows }}/{{ icon_linux}}/{{ icon_apple }} `Alt+A`) or `Reject` ({{ icon_windows }}/{{ icon_linux}}/{{ icon_apple }} `Alt+R`) to confirm or dismiss the generated code.
  * Explain command
    * Click the `Explain` button above a code block to have Windsurf explain it.
    * Windsurf will explain the related code chunk through the chat.
