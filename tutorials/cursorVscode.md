{% set title="VS Code - Using Cursor" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

Cursor is an AI-powered editor based on **Visual Studio Code**.  
If you already know VS Code, Cursor will feel almost identical — but with AI built directly into your coding workflow.  
Think of it as *ChatGPT inside VS Code*, helping you autocomplete, refactor, and chat about your code.  

---

## Pre-requisites

* Download and install Cursor from [cursor.com](https://cursor.com).  
* Sign in using Google, GitHub, or Email (see [Signing Up for Cursor](cursorSignup.md)).  
* Ensure you have Java 17 SDK installed for CS2103/SE-EDU projects.  

---

## Setting Up Cursor in VS Code

* Open Cursor after installation.  
* Sign in to your Cursor account if prompted.  
* The interface will look almost identical to VS Code, but with extra **Cursor AI icons** in the sidebar and editor toolbar.  

<pic src="images/vscCursor/login.png" width="400" />

---

## Basic Code Completion

Cursor suggests code **inline** as you type.  

* In a Java file, type a comment like:  
  ```java
  // write a method that prints Hello World
Cursor will display a suggestion inline.  
* Press `Tab` to accept, or `Esc` to dismiss.  

<box type="tip" seamless>
The clearer your comment or method name, the better Cursor’s suggestion will be.
</box>

---

## Cursor Chat

Cursor comes with a **Chat panel**, similar to ChatGPT but aware of your codebase.  

* Click on the **Cursor icon** in the sidebar.  
* Ask a coding question, e.g.:  
  > "Generate JUnit tests for the `Person` class"  
  > "Explain what this `parseCommand` method does"  
* Cursor will return explanations or code snippets you can copy directly.  

<box type="warning" seamless>
The free plan has a limited monthly quota of AI requests. Heavy usage requires a Pro plan.
</box>

---

## Inline Chat (Inside the Editor)

You can ask Cursor for help **directly in your code editor**.  

* Highlight or place the cursor where you want help.  
* Use the shortcut: {{ icon_windows }}/{{ icon_linux }} `Ctrl+I` | {{ icon_apple }} `Cmd+I`.  
* Type a request such as:  
  > "Add logging here"  
  > "Refactor this into a helper method"  
* Cursor’s generated code will appear inline — you can accept or reject it.  

---

## Refactoring and Explaining Code

Cursor also supports **refactor** and **explain** commands:  

* Right-click on a code block, select **Cursor: Refactor** or **Cursor: Explain**.  
* Refactor: suggests a cleaner or more efficient version of the code.  
* Explain: generates a natural-language explanation in the chat panel.  

---

## Responsible Usage

Cursor is powerful, but keep in mind:  
* Use it for **boilerplate, testing, and learning** — not for writing entire assignment features.  
* Always verify suggestions with unit tests and Checkstyle (`./gradlew check`).  
* Remember: Cursor is a **helper**, you remain the developer.  

<box type="info" seamless>
Treat Cursor like a coding buddy inside VS Code — fast, helpful, but always double-check its work.
</box>

---

**Contributors**: Arshin Sikka ([@arshinsikka](https://github.com/arshinsikka))  
