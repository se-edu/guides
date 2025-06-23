{% set title="VS Code: Using GitHub Copilot" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

# Using GitHub Copilot in Visual Studio Code

## Basic Code Completion
  * In a Java file, type a comment like `// print Hello World` inside the main method.
    ```java
    public class Main {
        public static void main(String[] args) {
            // print Hello World
        }
    }
    ```
  * GitHub Copilot will automatically suggest code to complete or implement the comment.<br>
    <pic src="images\vscCopilotUsage\basicCodeCompletion.png" width="400" />
  * Press `Tab` to accept the suggestion, or continue typing to refine it.
  <box type="tip" seamless>
    The more descriptive your comment or method signatures, the better Copilot can understand what you want to implement.
    </box>

## Copilot Chat
  * Open the Copilot Chat using {{ icon_windows }}/{{ icon_linux}} `Ctrl+Alt+I` | {{ icon_apple }} `Cmd+Alt+I` or using the Copilot icon.
  * Ask something like: "Write a main method that calculates the factorial of N".
  * Copilot will generate a response in the chat window.<br>
    <pic src="images\vscCopilotUsage\copilotChat.png" width="200" />
  * You can directly insert or copy code chunks using the buttons in the top right corner.
  * From left to right: Insert automatically into the current file, Insert at cursor, Copy to clipboard.<br>
    <pic src="images\vscCopilotUsage\copilotChatButtons.png" width="100" />

## Copilot Inline Chat
  * Go to the line or section where you want to ask Copilot for assistance.
  * Use the inline chat feature using the shortcut {{ icon_windows }}/{{ icon_linux}} `Ctrl+I` | {{ icon_apple }} `Cmd+I`.
  * Type your request such as "Add a print log here" and press `Enter`.
  * The generated lines of code will be highlighted in yellow, and you can insert them by clicking on `accept`.<br>
    <pic src="images\vscCopilotUsage\copilotInline.png" width="400" />
