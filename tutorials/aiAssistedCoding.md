{% set title="AI-Assisted Coding" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

## A: Tools and Resources

**Resources we have created to help with the AI-assisted coding** are given below:
<div id="ai-assisted-coding-sub-topics">

* **Copilot:** [Signing up]({{ baseUrl }}/tutorials/copilotSignup.html) | [Use with GitHub]({{ baseUrl }}/tutorials/copilotGithub.html) | [Use in Intellij]({{ baseUrl }}/tutorials/intellijCopilot.html) | [Use in VS Code]({{ baseUrl }}/tutorials/vscCopilot.html)
* **Windsurf:** [Signing up]({{ baseUrl }}/tutorials/windsurfSignup.html) | [Use in Intellij]({{ baseUrl }}/tutorials/intellijWindsurf.html) | [Use in VS Code]({{ baseUrl }}/tutorials/vscWindsurf.html)
* [**Gemini CLI**]({{ baseUrl }}/tutorials/geminiCli.md)
* [**CodeRabbit**]({{ baseUrl }}/tutorials/codeRabbit.md)

</div>


## B: Ideas for Using AI Tools in Coding

### B1: Asking an LLM

Examples: Ask an LLM such as ChatGPT,

* Here is a piece of code that I wrote. How can I improve it?
* Take this code and tweak it so that the output is sorted alphabetically.
* This method is supposed to sort the output in ascending order but the actual output is in descending order. Why? How do I fix it?


### B2: Use IDE-Integrations an Auto-Completion Tool

AI Tools that has IDE integrations can work as an 'auto-complete on steroids', suggesting snippets of code that you can insert at the current cursor position. Some can go further in this direction. Examples:
  * when you write a header comment for a method, the tool generates the method
  * write header comments for a method you have implemented
  * generate test cases for a method/class

Example: GitHub Copilot plugins for Intellij and VSCode


### B3: Collaborate with an AI Coding Agent

It is possible to make your codebase visible to an AI tool, and get it to act like a team member who can perform coding tasks

Examples:

* GitHub has a [Copilot code review](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review) feature that gets Copilot to review PRs
* GitHub has a [Copilot coding agent](https://docs.github.com/en/copilot/concepts/coding-agent/coding-agent) that can create a pull request based on a natural language prompt


### B4: Generate Whole Apps

AI tools can create an entire application (e.g., Web apps, mobile apps) based on prompts -- the so called 'vibe coding' tools.

Examples: Google AI Studio, Repl.it




