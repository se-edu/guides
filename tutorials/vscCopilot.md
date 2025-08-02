{% set title="VS Code - Using GitHub Copilot" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

GitHub Copilot is an AI Tool that is well-integrated with VS Code, because both tools are from the same parent company (Microsoft).

<box type="info" seamless>
To use GitHub Copilot for free as a student, you'll need to (1) sign up for GitHub, (2) enable two-factor authentication (2FA), and (3) verify your student status. This guide walks you through those steps.
</box>

## Signing Up for GitHub Copilot

* **Filling in your billing information** {{ step_numbers }}
  * Go to the [billing information for your GitHub account](https://github.com/settings/billing/payment_information).
  * Fill in only your billing information (Payment method and other details are not required).<br>
    <pic src="images/copilotSignUp/billingInformation.png" width="400" />
  * Click on `Save billing information` to save.
* **Enabling Two-Factor Authentication (2FA)**. You can skip this step if you have already done so.
  * Go to the [Two-factor authentication page](https://github.com/settings/security) for your GitHub account.
  * Click on `Enable two-factor authentication`.
  * Open the [Microsoft Authenticator App](https://www.microsoft.com/en-us/security/mobile-authenticator-app) on your phone.
  * Tap the scan QR code button at the bottom right.<br>
    <pic src="images/copilotSignUp/scanQrCode.png" width="400" />
  * Scan the QR code displayed on the GitHub page.
  * Complete the remaining setup steps.
  * You should see the following page when 2FA is enabled.<br>
    <pic src="images/copilotSignUp/2faEnabled.png" width="400" />
* **Linking your university email to GitHub** (for Education benefits).
  * Go to the [emails settings page](https://github.com/settings/emails) in GitHub account.
  * Add your university-issued email under the `Add email address` field.
  * Verify your email using the link sent to your inbox.
  * Once verified, you will see your school email in the list of emails.
* **Applying for GitHub Education benefits**
  * Go to the [GitHub Education page](https://github.com/settings/education/benefits).
  * Click on `Start an application`.
  * Select your role as `Student`.
  * Choose university as your school %%(e.g., National University of Singapore)%%.
  * Follow the instructions and complete the application form.
  * Once your application is approved, it will show that you have a current student coupon applied.

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

The Copilot extension offers multiple ways to interact with AI assistance in VS Code:

- **Copilot Chat** – for general-purpose questions or help
- **Inline Chat** – for editing or explaining specific code blocks
- **Terminal Prompts** – for quick commands like `/explain`, `/fix` from the terminal

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

<box type="tip" seamless>
**Troubleshooting Tips**
- Copilot not showing up? → Ensure you are in a Java file and that the extension is installed and enabled.
- Copilot panel missing? → Try restarting VS Code or reinstalling the extension.
</box>

---

**Contributors**: Norbert Loh ([@NorbertLoh ](https://github.com/NorbertLoh ))
