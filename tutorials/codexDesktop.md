{% set title="Using the Codex Desktop App" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

Codex is an AI coding agent that can inspect a project, edit files, run commands, review diffs, and help you iterate on a task while you stay in control of the final code. The Codex desktop app provides a standalone interface for working with Codex on local projects.

Unlike IDE plugins such as Copilot or Windsurf, the Codex desktop app works as a standalone app. The IDE you use does not matter; what matters is that Codex can access the project folder and the project can be built and tested locally.

For more details, refer to the official [Codex app guide](https://developers.openai.com/codex/app).

## Installing Codex

1. Go to the official [Codex app page](https://developers.openai.com/codex/app).
1. Download the installer for your operating system.
1. After downloading, open the installer and follow the installation instructions for your operating system.

## Signing in to Codex

1. **Open the Codex app**
1. **Sign in to Codex**
   * `Sign in with ChatGPT` if you are using a school-provided or subscription-based plan.<br>
     `Sign in with another way` only if you are using an API key. {{ abcd_numbers }}
   * Follow the sign-in flow shown in the app.
   * Codex will now be ready to use on your computer.

## Getting Started with Codex

### Importing a Project

* **Open the project picker**
  * In the Codex app, start from the empty workspace screen and click `Choose project`.
  * Choose `+ New project`, then select `Use an existing folder` to open a project that already exists on your computer.
    <pic src="images/codex/codexNewProjectMenu.png" width="850" />
  * Select the folder that contains your project.
    <box type="tip" seamless>
      For a project using Git, it is important to select the repository root and not inner folders such as `src`.
    </box>

----------

### Basic Usage Examples

**Use Codex for small, reviewable tasks**, such as tweaking a UI component or refactoring a code fragment.

* Start with a small change that you can easily verify.
* For example, you can ask something like `add green borders for each contact card`
* Codex will summarize the files it changed. Click **Review** to inspect the diff before accepting the change.
    <pic src="images/codex/codexAb3SmallCssChange.png" width="850" />
* In the review panel, check the file name and the red/green lines to understand exactly what Codex changed (shown below). Alternatively, you can use your IDE or Git tool to inspect the diff.
    <pic src="images/codex/codexAb3ReviewDiff.png" width="900" />

### Where to Go Next

After you are comfortable with the basic workflow, feel free to explore the Codex app guides:

* **[Codex app overview](https://developers.openai.com/codex/app)**: Start here for the official desktop app guide.
* **[Features](https://developers.openai.com/codex/app/features)**: Learn about Local, Worktree, Git tools, the integrated terminal, approvals, and sandboxing.
* **[Commands](https://developers.openai.com/codex/app/commands)**: Learn app shortcuts and slash commands such as `/plan`, `/goal`, `/review`, and `/status`.
* **[Review](https://developers.openai.com/codex/app/review)**: Learn how to inspect code changes before accepting or committing them.
* **[Worktrees](https://developers.openai.com/codex/app/worktrees)**: Learn how to try changes in an isolated Git worktree instead of your main project folder.
* **[Automations](https://developers.openai.com/codex/app/automations)**: Learn how Codex can run recurring checks or follow-up tasks.

----------

**Contributors**: Hwang Jihun ([@hwangjihun](https://github.com/hwangjihun))
