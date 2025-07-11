{% set title="AI Coding Tools: Using Copilot in Terminal" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="vscode.md#wip-warning" />

# {{ title }}

GitHub Copilot can be incredibly helpful in the terminal, especially when you're working with Git or project-specific commands that are hard to remember.

## Pre-requisites
  * GitHub account  
  * Access to GitHub Copilot (via subscription or educational benefits)
  * Visual Studio Code with the GitHub Copilot extension installed

Check out our [GitHub Copilot Sign Up guide](vscCopilot.html#signing-up-for-github-copilot) and [Installing GitHub Copilot in Visual Studio Code](vscCopilot.html#installing-github-copilot-in-visual-studio-code) for detailed instructions on how to sign up and set up GitHub Copilot.

## Prompting Copilot in the Terminal
1. Open a terminal in Visual Studio Code.
1. Press `Ctrl+I` to bring up Copilot’s terminal prompt input.<br>
    <pic src="images/copilotTerminal/copilotTerminal.png" width="600" />
1. Some common project-related prompts you might find useful.
    * Run the checkstyle  
    * Compile and run the Java program  
    * Run JUnit tests
1. Some common Git related prompts you might find useful.
    * Add all changes to Git  
    * Git commit with message `First commit!`  
    * Push current branch to `origin`  
    * Create and checkout a new branch named `feature/login`  
    * Pull the latest changes from `origin/main`
1. Made a mistake? Here are some fix and recovery prompts.
    * Undo last Git commit (keep changes in working directory)  
    * Revert a specific file to the last committed version  
    * Discard all uncommitted changes  
    * Abort an in-progress Git merge
1. Clean up prompts.
    * Delete local branch `<branch-name>`  
    * Delete remote branch `feature/old-ui`
1. Here are some advanced Git prompts.
    * Rebase current branch onto `origin/main`  
    * Steps to resolve Git rebase conflicts  
    * Squash the last 3 commits into one
1. After typing your prompt, Copilot will generate a suggested command.<br>
    <pic src="images/copilotTerminal/copilotSuggestion.png" width="600" />
1. If the suggestion looks correct, click `Run` to execute the command in your terminal.
  