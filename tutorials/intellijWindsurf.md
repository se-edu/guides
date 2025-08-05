{% set title="Intellij IDEA: Using Windsurf" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

<include src="./windsurfContent.md#title-id" var-ide="IntelliJ IDEA"/>
<br/>

<include src="./windsurfContent.md#setting-up-id" />

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

<include src="./windsurfContent.md#basic-code-completion-id" var-imgurl="images/intellijWindsurf/windsurfCodeCompletion.png" />

### Windsurf Chat

* Open the Windsurf chat by clicking the Windsurf icon.<br>
  <pic src="images/intellijWindsurf/windsurfChat.png" width="400" />
* Ask something like: `Write a main method that calculates the factorial of N`.
* Windsurf will respond in the chat and suggest the changes in the current active file. You can accept or decline the changes with the buttons below.<br>
    <pic src="images/intellijWindsurf/windsurfChatSuggestion.png" width="800" />
  <box type="warning" seamless>
    Free Windsurf Chat has a limited prompt rate.
    </box>

<include src="./windsurfContent.md#windsurf-inline-chat-id" var-imgurl="images/intellijWindsurf/windsurfInline.png" />

<include src="./windsurfContent.md#windsurf-default-commands-id" var-commandsimgurl="images/intellijWindsurf/windsurfCommands.png"
var-refactorimgurl="images/intellijWindsurf/windsurfRefactor.png" />
</include>

---

**Contributors**: Norbert Loh ([@NorbertLoh ](https://github.com/NorbertLoh ))
