{% set title="VS Code - Using GitHub Copilot" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

GitHub Copilot is an AI Tool that is well-integrated with VS Code, because both tools are from the same parent company (Microsoft).

<include src="copilotGithub.md#prereq" />

## Installing GitHub Copilot in Visual Studio Code

* **Updating Visual Studio Code** {{ step_numbers }}
  * Open Visual Studio Code.
  * Go to `Help` → `Check for Updates`.
  * If updates are available, it should now say "Installing update…".
  * Once it finishes installing, go to `Help` → `Restart to Update`.
* **Install the [Extension Pack for GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) and the [Extension Pack for GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) extension**, to enable support for AI autocompletion.
  * Click on both of the extension links above.
  * Click on the `Install` button on the page that opens.
  * It should prompt you with `Open Visual Studio Code?` and click `Open Visual Studio Code`.
  * You will be redirected to the extension page in Visual Studio Code.
  * Click on `Install` to install the extension.
  * Make sure to install the [Extension Pack for GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) as well with the same steps above.

## Signing in to GitHub Copilot

* **Verify Prerequisites** {{ step_numbers }}
  * Ensure you followed the section [Installing GitHub Copilot in Visual Studio Code](#installing-github-copilot-in-visual-studio-code) above.
* **Sign in to GitHub Copilot**
  * Open Visual Studio Code.
  * Click on the GitHub Copilot icon at the top.<br>
    <pic src="images/vscCopilotSetup/copilotLogin.png" width="800" />
  * Click on `Sign in` in the pop up.
  * You will be redirected to GitHub login page, where you can login or select the account linked to GitHub Education.
  * It should prompt you with `Open Visual Studio Code?` and click `Open Visual Studio Code`.
  * Once signed in, the GitHub Copilot icon will now say "Toggle Chat" when hovered over.
  * Clicking on the GitHub Copilot icon will open the Copilot chat window.
* **Verifying the installation of GitHub Copilot**
  * Open a new text file using `File` → `New File` or {{ icon_windows }}/{{ icon_linux}} `Ctrl+N` | {{ icon_apple }} `Cmd+N`.
  * You should see an automatic suggestion appear in the empty text file.<br>
    <pic src="images/vscCopilotSetup/copilotSuggestion.png" width="800" />

## Using GitHub Copilot in Visual Studio Code

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
    <pic src="images/vscCopilotUsage/basicCodeCompletion.png" width="400" />
  * Press `Tab` to accept the suggestion, or continue typing to refine it.
  <box type="tip" seamless>
    The more descriptive your comment or method signatures, the better Copilot can understand what you want to implement.
    </box>

### Copilot Chat

  * Open the Copilot Chat using {{ icon_windows }}/{{ icon_linux}} `Ctrl+Alt+I` | {{ icon_apple }} `Cmd+Alt+I` or using the Copilot icon.
  * Ask something like: "Write a main method that calculates the factorial of N".
  * Copilot will generate a response in the chat window.<br>
    <pic src="images/vscCopilotUsage/copilotChat.png" width="400" />
  * You can directly insert or copy code chunks using the buttons in the top right corner.
  * From left to right: Insert automatically into the current file, Insert at cursor, Copy to clipboard.<br>
    <pic src="images/vscCopilotUsage/copilotChatButtons.png" width="100" />

### Copilot Inline Chat

  * Go to the line or section where you want to ask Copilot for assistance.
  * Use the inline chat feature using the shortcut {{ icon_windows }}/{{ icon_linux}} `Ctrl+I` | {{ icon_apple }} `Cmd+I`.
  * Type your request such as "Add a print log here" and press `Enter`.
  * The generated lines of code will be highlighted in yellow, and you can insert them by clicking on `accept`.<br>
    <pic src="images/vscCopilotUsage/copilotInline.png" width="600" />

### Prompting Copilot in the Terminal

1. Open a terminal in Visual Studio Code.
1. Press `Ctrl+I` to bring up Copilot’s terminal prompt input.<br>
    <pic src="images/vscCopilotUsage/copilotTerminal.png" width="600" />

Some common project-related prompts you might find useful:

* Run the checkstyle
* Compile and run the Java program
* Run JUnit tests
* ~~Perform Git operations~~ (possible but #r#not recommended##; if you are new to Git, we discourage using Git inside the IDE -- it is better for beginners to learn Git independent of other tools)

---

**Contributors**: Norbert Loh ([@NorbertLoh ](https://github.com/NorbertLoh ))
