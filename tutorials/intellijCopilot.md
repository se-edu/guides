{% set title="Intellij IDEA: Using GitHub Copilot" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

GitHub Copilot is an AI-powered code assistant that helps you write, test, and refactor code faster in IntelliJ IDEA.

<!-- Do not duplicate generic setup; link to shared prerequisites instead -->
<include src="copilotGithub.md#prereq" />

---

## 1. Installing GitHub Copilot Plugin in IntelliJ IDEA

1. Open IntelliJ IDEA.  
2. On Mac: **IntelliJ IDEA > Preferences**. On Windows/Linux: **File > Settings**.  
3. Select **Plugins > Marketplace**.  
4. Search for **GitHub Copilot**.  
<img src="images/intellijcopilot/intellij-search-copilot.png" alt="Search GitHub Copilot Plugin" width="60%" />
5. Click **Install**, then **Restart IDE** when prompted.


---

## 2. Signing In to GitHub

1. After restart, open **Settings > Languages & Frameworks > GitHub Copilot**.  
2. Under **Authentication**, click **Manage GitHub Accounts**.  
3. Sign in via your browser and authorize Copilot.  
4. Your GitHub username should appear in the **Preferred GitHub account** dropdown.

<img src="images/intellijcopilot/intellij-copilot-settings.png" alt="Copilot Settings in IntelliJ" width="60%" />


---

## 3. Verifying Copilot in Action

1. Create or open a Java file, e.g., `CopilotTest.java`.  
2. Inside a `main` method, type:

```java
// print Hello World
```

3. Wait 2–3 seconds — a gray suggestion appears (see below).
4. Press **Tab** to accept the suggestion.

<img src="images/intellijcopilot/copilot-suggestion-visible.png" alt="Copilot Suggestion Appears" width="60%" />

<box type="tip" seamless>
Copilot works best with clear, descriptive comments.
</box>

---

## 4. Using Copilot Chat *(if available)*

> Copilot Chat may be in beta or limited in IntelliJ.

1. Go to **View > Tool Windows > Copilot Chat**.  
2. Ask a question, e.g.:

```java
Write a function to reverse a string in Java.
```

3. Review the response and insert code as needed.

<img src="images/intellijcopilot/copilot-chat-window.png" alt="Copilot Chat Window" width="60%" />

---

## 5. Troubleshooting

<box type="tip" seamless>
**Common Issues & Fixes**  

- **No suggestions** → Ensure the plugin is enabled and you’re signed in.  
- **No Copilot panel** → Restart IntelliJ or reinstall the plugin.  
- **Unsupported file type** → Use `.java` or other supported languages.  
- **Authentication errors** → Re-authorize in **Settings > GitHub Copilot**.  
</box>

---

**Contributors**: Arshin Sikka ([@arshinsikka](https://github.com/arshinsikka))