{% set title="AI-Assisted Coding" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

## Ideas for Using AI Tools in Coding

### A: Asking an LLM

AI tools such as large language models (LLMs) can act as conversational partners for coding tasks. You can ask them questions, provide code snippets, and request feedback or improvements.

Examples:
  * Ask an LLM such as ChatGPT "Here is a piece of code that I wrote. How can I improve it?"
  * Use an LLM to explain error traces and suggest possible fixes (debugging & error resolution)
  * Translate code between languages or refactor code to improve readability, enforce style guides, or follow course conventions (code translation & refactoring)
  * Ask an LLM to generate or improve documentation, such as docstrings, READMEs, or plain-language code explanations (documentation support)


### B: Use IDE-Integrations an auto-completion tool

AI Tools that has IDE integrations can work as an 'auto-complete on steroids', suggesting snippets of code that you can insert at the current cursor position. Some can go further in this direction.

Examples:
  * When you write a header comment for a method, the tool generates the method
  * Write header comments for a method you have implemented
  * Generate test cases for a method/class

Example: GitHub Copilot plugins for Intellij and VSCode


### C: Collaborate with an AI coding agent

It is possible to make your codebase visible to an AI tool, and get it to act like a team member who can perform coding tasks

Examples:

* GitHub has a [Copilot code review](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review) feature that gets Copilot to review PRs
* GitHub has a [Copilot coding agent](https://docs.github.com/en/copilot/concepts/coding-agent/coding-agent) that can create a pull request based on a natural language prompt


### D: Generate whole apps

AI tools such as [Replit Ghostwriter](https://replit.com/learn/intro-to-ghostwriter) and [v0.dev](https://v0.app/docs/introduction) can create an entire application (e.g., Web apps, mobile apps) based on prompts -- the so called 'vibe coding' tools. These may scaffold entire codebases, generate boilerplate, or connect multiple components together.

Examples:
  * Generate a starter web app with authentication and a database layer from a single prompt
  * Create a mobile app prototype with UI, navigation, and mock data
  * Scaffold an end-to-end system (frontend + backend) for experimentation and prototyping

### E: Ethical Use of AI

It is possible to use AI tools not only as coding assistants, but also as opportunities to practice ethical judgment and critical thinking. Always document when you use AI tools, and critically evaluate outputs before adopting them into your work.

Examples:
  * It is possible to paste in code from another source and ask the AI to rewrite or optimize it, but you should clearly acknowledge the source and reflect on whether you are learning or simply copying.
  *	It is possible to generate a function or algorithm using AI, but you should carefully check for bugs, inefficiencies, and security issues before integrating it, and document AI assistance if required.
  *	It is possible to ask AI to produce unit tests or documentation, but you should ensure the outputs meet course standards and revise them to demonstrate your own understanding.
  *	It is possible to compare AI-generated code with your own solution to learn about trade-offs in readability, maintainability, and performance, but the final submission should represent your own reasoning.
  *	It is possible to rely on AI for productivity, but you should balance this with independent coding practice to avoid over-reliance.



## Resources

**Resources we have created to help with the AI-assisted coding** are given below:
<div id="ai-assisted-coding-sub-topics">

* **Copilot:** [Signing up]({{ baseUrl }}/tutorials/copilotSignup.html) | [Use with GitHub]({{ baseUrl }}/tutorials/copilotGithub.html) | [Use in Intellij]({{ baseUrl }}/tutorials/intellijCopilot.html) | [Use in VS Code]({{ baseUrl }}/tutorials/vscCopilot.html)
* **Windsurf:** [Signing up]({{ baseUrl }}/tutorials/windsurfSignup.html) | [Use in Intellij]({{ baseUrl }}/tutorials/intellijWindsurf.html) | [Use in VS Code]({{ baseUrl }}/tutorials/vscWindsurf.html)
* [**Gemini CLI**]({{ baseUrl }}/tutorials/geminiCli.md)
* [**CodeRabbit**]({{ baseUrl }}/tutorials/codeRabbit.md)

</div>
