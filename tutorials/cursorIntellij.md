{% set title="IntelliJ IDEA - Using Cursor" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

Cursor is primarily built on VS Code, but it can also be used to **assist with coding tasks in IntelliJ IDEA** through the Cursor Chat web interface and integration via code snippets.  
Think of it as having *ChatGPT connected to your IntelliJ workflow* — you can generate code, get explanations, and copy results back into your project.  

---

## Pre-requisites

* Install [IntelliJ IDEA](https://www.jetbrains.com/idea/download/).  
* Install the Java 17 SDK (Temurin or Oracle JDK).  
* Sign up and log in to Cursor (see [Signing Up for Cursor](cursorSignup.md)).  

---

## Using Cursor with IntelliJ

### Step 1: Open Cursor Chat in Browser or App
* Open the Cursor desktop app or visit [cursor.com](https://cursor.com).  
* Navigate to the **Chat panel**.  
* Ask questions such as:  
  > "Generate JUnit tests for the `Person` class"  
  > "Explain this method in plain English"  

Cursor will return results that you can copy into IntelliJ.  

<pic src="images/cursor/chat.png" width="500" />

---

### Step 2: Paste and Adapt in IntelliJ
* Copy generated snippets from Cursor.  
* Paste into IntelliJ editor windows.  
* Use IntelliJ’s **code inspections** to verify and adapt suggestions.  

<box type="tip" seamless>
Always run `./gradlew check` after pasting new code to ensure compatibility with Checkstyle and project rules.
</box>

---

### Step 3: Refactor or Explain with Cursor
* Select a block of code in IntelliJ.  
* Copy-paste into Cursor chat.  
* Ask Cursor to **refactor** (e.g., “make this more efficient”) or **explain** (e.g., “what does this method do?”).  
* Cursor will provide updated code or natural-language explanations.  

---

## Responsible Usage

* Use Cursor in IntelliJ mainly for **learning and scaffolding** (e.g., test generation, clarifying errors).  
* Avoid using Cursor to auto-generate entire project features.  
* Always cross-check AI output against IntelliJ inspections, unit tests, and Checkstyle rules.  

<box type="info" seamless>
Cursor complements IntelliJ’s powerful IDE features by acting as an *AI coding buddy*.  
</box>

---

**Contributors**: Arshin Sikka ([@arshinsikka](https://github.com/arshinsikka))  
