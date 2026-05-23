{% set title="AI-Assisted Coding" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 4
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

This page is aimed at students who are beginning to use AI tools in a lightweight manner in coding projects. The examples and advice below are intended to help you use AI in a formative and instructive way: not simply to get the task done with minimal effort, but to understand the AI's suggestions, evaluate them critically, and improve your own software engineering skills.

## A: Tools and Resources

**Resources we have created for AI-assisted coding** are given below:
<div id="ai-assisted-coding-sub-topics">

* **Copilot:** [Signing up]({{ baseUrl }}/tutorials/copilotSignup.html) | [Use with GitHub]({{ baseUrl }}/tutorials/copilotGithub.html) | [Use in IntelliJ]({{ baseUrl }}/tutorials/intellijCopilot.html) | [Use in VS Code]({{ baseUrl }}/tutorials/vscCopilot.html)
* **Windsurf:** [Signing up]({{ baseUrl }}/tutorials/windsurfSignup.html) | [Use in IntelliJ]({{ baseUrl }}/tutorials/intellijWindsurf.html) | [Use in VS Code]({{ baseUrl }}/tutorials/vscWindsurf.html)
* [**Gemini CLI**]({{ baseUrl }}/tutorials/geminiCli.md)
* [**CodeRabbit**]({{ baseUrl }}/tutorials/codeRabbit.md)
* **Using AI in your applications:**
  * [Adding AI Features to a Java App Using a Remote LLM]({{ baseUrl }}/tutorials/addingAiToJavaApp.html)
  * [Adding AI Features to a Java App Using a Local LLM]({{ baseUrl }}/tutorials/addingLocalAiToJavaApp.html)

</div>


## B: Approaches to Using AI Use in Coding

### B1. Gradually Increasing AI's Autonomy

AI tools can be used with different levels of autonomy. As a student, it is usually better to progress gradually: start by using AI to support your learning, then move to more autonomous tools only when you can still understand, review, test, and explain the result.

At every level, treat the AI as a collaborator, not a replacement. It can accelerate your work, but you are ultimately responsible for understanding, validating, testing, and explaining the final result.

#### Level-0: AI as a Helpful Tutor

At this level, AI is used to explain concepts rather than produce task-specific code. The AI does not see your codebase unless you manually describe or paste relevant details, and you still do the implementation yourself.

In practice, you can use the chat interface of an AI tool (e.g., [ChatGPT](https://chatgpt.com/), [Claude](https://claude.ai/), [Gemini](https://gemini.google.com/), or [Microsoft Copilot](https://copilot.microsoft.com/)) to ask AI questions. Some example questions:

* What does this error message mean?
* What is a null pointer exception?
* How do I remove `null` values from a Java list?
* Can you explain this concept using a small example?

This level can be especially useful when you are learning a new concept or tool, because the AI can give explanations, examples, and alternative ways of thinking about the topic without taking over the coding task.

Guidelines:

* Ask for explanations, examples, analogies, and common mistakes.
* Ask the AI to quiz you or check your understanding after it explains a concept.
* Avoid pasting full assignment tasks and asking for complete solutions.
* If the AI gives code, treat it as an example to study, not as code to submit without understanding.


#### Level-1: AI as an Inline Coding Assistant

At this level, AI helps with small, bounded changes based on a selected snippet, current file, terminal output, or pasted context. You choose the context, request the change, and decide whether and how to integrate the result.

In practice, you normally use an IDE extension provided by an AI coding tool (e.g., Claude Code, Codex, Gemini, GitHub Copilot) to communicate with the AI tool more easily about the code. For example, you can select the relevant part of the code in the IDE, and use the interface provided by the IDE extension to ask the AI to make a specific change. Some examples of requests:

* simplify a selected method
* explain a confusing code snippet
* suggest a small refactoring
* generate unit tests for a method
* add comments to code you have already written

Unlike Level 0, the AI now sees part of the actual task context. That means some of the code may be written or rewritten by AI, so you must be able to read, explain, and validate the change before using it.

Guidelines:

* Keep the request small: one method, error, refactoring, test case, or design question at a time.
* Give the relevant code, expected behavior, actual behavior, and the kind of help you want.
* Ask the AI to explain the reasoning behind its suggestion.
* Review the diff carefully before accepting the change.
* Run tests and add relevant new tests, especially for edge cases.

Example prompt patterns:

* **Debug an error:** "I ran `./gradlew test` and got the stack trace below. Explain the most likely cause, point to the relevant line, and suggest a minimal fix. Do not rewrite unrelated code."
* **Generate tests:** "Given this `Parser#parse(String input)` method and its JavaDoc, list important equivalence partitions and boundary cases. Then generate JUnit 5 tests for the three highest-risk cases."
* **Review a change:** "Review this diff for regressions, missing tests, weak error handling, and violations of the existing coding style. Give findings with file and line references."
* **Refactor safely:** "Suggest a refactoring that reduces duplication in these two methods without changing the public API or observable behavior. Explain how I can verify the refactor with tests."
* **Compare design options:** "Compare these two designs using coupling, cohesion, testability, and ease of future extension. Recommend one for a small student project and explain the trade-offs."


#### Level-2: AI as a Supervised Coding Agent

At this level, you work with an AI agent interactively to plan, edit multiple files, run commands, observe results, and iterate toward a specific goal. The AI may do much of the mechanical work, but you supervise it closely at each step.

In practice, you might ask an agent to add a small feature, review its plan, approve or reject edits, run tests through the agent, and ask follow-up questions when the output is unclear. This is similar to supervising a more knowledgeable assistant through a project task. The tools used commonly are either IDE extensions of AI coding tools or AI coding tools that works as standalone apps (CLI version or desktop version).

This level works best when the repository gives the agent clear instructions, such as `AGENTS.md`, `CLAUDE.md`, or tool-specific project guidance. You should still have enough knowledge to perform the task yourself, because careful supervision requires understanding the goal, the code, and the risks.

Guidelines:

1. **Start with a small task:** Ask for help on one bug, feature, refactoring, or design question at a time.
1. **Ask for a plan first:** Before accepting code, ask the AI to explain the intended change and the reasoning behind it.
1. **Work on a branch:** Keep AI-assisted changes separate from your main working version until you have reviewed them.
1. **Review every change:** Read the diff carefully. Make sure you understand what changed, why it changed, and whether it matches the task.
1. **Ask follow-up questions:** If any part of the output is unclear, ask the AI to explain the code, alternatives, trade-offs, or possible edge cases.
1. **Run tests and add tests:** Run the existing tests, add relevant new tests, and check edge cases manually when needed.
1. **Commit only what you understand:** Do not submit or merge AI-generated code that you cannot explain and maintain yourself.

#### Level-3: AI as an Asynchronous Task Agent

At this level, you specify the desired outcome rather than the detailed steps. The agent works in the background, edits code, runs tests, and returns a reviewable artifact such as a pull request or patch.

For example, you might assign a GitHub issue to a coding agent (either running through an AI harness in your computer, or in a remote environment such as GitHub) and later review the pull request (or the diff) it creates. This enables more autonomous and parallel work, but it also increases the review burden.

The student still owns acceptance of the final work. To use this level responsibly, you need strong code review, testing, and integration skills, because you may be approving code that you did not personally write.

Guidelines:

* Give a clear, bounded task and include relevant project constraints.
* Require a reviewable artifact, such as a pull request, patch, or detailed change summary.
* Review the code yourself instead of relying only on the agent's summary.
* Check whether the tests are sufficient, not merely whether they pass.
* Be ready to reject the output or ask for revisions if the implementation is hard to understand, weakly tested, or inconsistent with the project.


### B2: Vibe-Coding Whole Apps

**AI tools (the so-called 'vibe coding tools') can create or prototype an entire application (e.g., web apps, mobile apps) based on prompts.** These tools can be useful for exploring ideas quickly, but students may not always be familiar with the frameworks, libraries, and design choices used in the generated app.

Examples:

* [Replit Agent](https://docs.replit.com/references/agent/overview), which can build and deploy apps from plain-language prompts
* [v0](https://v0.app/docs/quickstart), which can generate web apps from natural-language prompts and iterate on them through conversation
* [Google AI Studio](https://blog.google/innovation-and-ai/technology/developers-tools/google-ai-studio-io-2026/), which can build web apps and, as of Google I/O 2026, native Android apps from prompts

**For students, a safer default is to treat the generated app as a functional prototype rather than as the final implementation.** Use it to explore requirements, UI flows, data models, and edge cases. Then rebuild the application in a more controlled way using tools and design choices you understand, so that the final code remains explainable, maintainable, and useful for learning.

**If you continue from the generated code, do so only when you understand the tool stack well enough** to review, test, maintain, and explain the code.

### B3: Using Spec-Driven Development

**Spec-driven development uses AI tools to turn a clear specification into an implementation plan and then into code.** Instead of prompting the AI to "build the feature" immediately, you first work with it to clarify requirements, acceptance criteria, design decisions, and implementation tasks.

Examples:

* [GitHub Spec Kit](https://github.github.com/spec-kit/), which provides a spec-driven workflow that can be used with AI coding agents such as Copilot, Gemini, Codex, Claude, and others
* [Kiro specs](https://kiro.dev/docs/specs/), which organize development work into requirements, design, and task files before implementation

**For students, this approach can be useful because it slows the work down in a productive way.** Before code is generated, you have a chance to inspect the problem statement, refine ambiguous requirements, think through the design, and identify tests. This can make the AI-assisted work more instructive than simply asking for code directly.

**The specification is not automatically correct.** Review the generated requirements, design notes, and task breakdown carefully. If the spec is vague, over-engineered, or based on a misunderstanding, the resulting code is likely to inherit those problems.

**Use spec-driven development iteratively, not as a waterfall process.** Specify a minimal version of the product or one feature in detail, implement and review that slice, then repeat. Trying to specify an entire product and generate the complete application in one shot can produce a large amount of code that is difficult for a student to understand, test, and maintain.

## C: Using AI Responsibly in Coursework

It is possible to use AI tools not only as coding assistants, but also as opportunities to practice ethical judgment and critical thinking. Always follow the AI-use policy of the course you are taking, document AI assistance when required, and critically evaluate outputs before adopting them into your work.

Keep these points in mind:

* **Respect course policies:** Some courses allow AI for explanation, debugging, or feedback, but restrict generated code in submissions. When in doubt, ask the teaching team before using AI on assessed work.
* **Protect private information:** Do not paste private repository code, assignment solutions, hidden tests, API keys, tokens, credentials, personal data, or confidential project material into external AI tools unless you have permission to do so.
* **Acknowledge sources and assistance:** If you paste in code from another source and ask AI to rewrite or optimize it, clearly acknowledge the original source and the AI assistance if your course requires it.
* **Maintain your own understanding:** It is possible to generate a function, algorithm, unit tests, or documentation using AI, but you should be able to explain and justify the final version yourself.
* **Use AI for learning, not bypassing learning:** It is possible to use AI for productivity, but you should balance this with independent learning to avoid over-reliance on AI. For example, you can write your own code first and compare it with an AI-generated code to learn about alternatives and trade-offs, rather than simply offload the task to AI.

---

**Contributors**: Dillon Tan ([@dillontkh](https://github.com/dillontkh)), Jay Hong ([@hjungwoo01](https://github.com/hjungwoo01))
