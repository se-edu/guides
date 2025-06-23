{% set title="VS Code: Setting up GitHub Copilot" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

# Setting up GitHub Copilot in Visual Studio Code

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

* **Verify prerequisies** {{ step_numbers }}
  * Ensure you followed the section [Installing GitHub Copilot in Visual Studio Code](#installing-github-copilot-in-visual-studio-code) above.
* **Sign in to GitHub Copilot**
  * Open Visual Studio Code.
  * Click on the GitHub Copilot icon at the top.<br>
    <pic src="images\vscCopilotSetup\copilotLogin.png" width="500" />
  * Click on `Sign in` in the pop up.
  * You will be redirected to GitHub login page, where you can login or select the account linked to GitHub Education.
  * It should prompt you with `Open Visual Studio Code?` and click `Open Visual Studio Code`.
  * Once signed in, the GitHub Copilot icon will now say "Toggle Chat" when hovered over.
  * Clicking on the GitHub Copilot icon will open the Copilot chat window.
* **Verifying the installation of GitHub Copilot**
  * Open a new text file using `File` → `New File` or {{ icon_windows }}/{{ icon_linux}} `Ctrl+N` | {{ icon_apple }} `Cmd+N`.
  * You should see an automatic suggestion appear in the empty text file.<br>
    <pic src="images\vscCopilotSetup\copilotSuggestion.png" width="500" />