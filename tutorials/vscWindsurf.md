{% set title="VS Code - Using Windsurf" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

<include src="./windsurfContent.md#title-id" var-ide="Visual Studio Code"/>
<br/>

<include src="windsurfContent.md#prereq" />

## Setting Up

* **Install the [Extension Pack for Windsurf](https://marketplace.visualstudio.com/items?itemName=Codeium.codeium)** {{ step_numbers }}
  * Click on the extension link above.
  * Click the `Install` button on the page that opens.
  * It should prompt you with `Open Visual Studio Code?` and click `Open Visual Studio Code`.
  * You will be redirected to the extension page in Visual Studio Code.
  * Click on `Install` to install the extension.
* **Sign in to Windsurf**
  * Click on the pop-up to log in to Windsurf. If there is no pop-up, click the Windsurf icon on the sidebar and then click `Login`.<br>
    <pic src="images/vscWindsurf/login.png" width="400" />
  * A browser pop-up will appear asking you to sign in. Click `Allow` → `Open`.
  * Log in to your Windsurf account if needed.
  * It should prompt you with `Open Visual Studio Code?` and click `Open Visual Studio Code`.
  * You will be redirected to VS Code. When asked "Allow 'Windsurf Plugin (formerly Codeium): AI Coding Autocomplete and Chat for Python, JavaScript, TypeScript, and more' extension to open this URI?", click `Open`.
  * If you see the pop-up "Welcome back to Windsurf, ...", you have successfully logged in.
  
## Using Windsurf in VS Code

<include src="./windsurfContent.md#basic-code-completion-id" var-imgurl="images/vscWindsurf/windsurfSuggestion.png" />

### Windsurf Chat
  * Open the Windsurf chat by clicking the Windsurf icon.<br>
    <pic src="images/vscWindsurf/windsurfChat.png" width="400" />
  * Ask something like: `Write a main method that calculates the factorial of N`.
  * Windsurf will respond in the Windsurf chat. Click the copy icon in the top right corner to copy any code that might be relevant.
  <box type="warning" seamless>
    Free Windsurf Chat has a limited prompt rate.
    </box>

<include src="./windsurfContent.md#windsurf-inline-chat-id" var-imgurl="images/vscWindsurf/windsurfInline.png" />

<include src="./windsurfContent.md#windsurf-default-commands-id" 
var-commandsimgurl="images/vscWindsurf/windsurfCommands.png"
var-refactorimgurl="images/vscWindsurf/windsurfRefactor.png" >
</include>

---

**Contributors**: Norbert Loh ([@NorbertLoh ](https://github.com/NorbertLoh ))
