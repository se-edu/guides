{% set title="AI Coding Tools: Using Copilot in GitHub" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="vscode.md#wip-warning" />

# {{ title }}

This section shows how to use GitHub Copilot directly within GitHub to help draft issues, review pull requests, and streamline your development workflow.

## Pre-requisites

* GitHub account
* Access to GitHub Copilot (via subscription or educational benefits)

Check out our [GitHub Copilot Sign Up guide](vscCopilot.html#signing-up-for-github-copilot) for detailed instructions on how to sign up for GitHub Copilot.

## Issue Creation

1. Go to your GitHub repository and create a new issue.
1. Click on `Write with Copilot`.<br>
   <pic src="images/githubCopilot/writeWithCopilot.png" width="400" />
1. You'll be redirected to Copilot Chat within GitHub, where you can describe your issue.
1. Use the Attach button to link the relevant repository and provide more context to Copilot.
1. Describe your issue and ask Copilot to generate a checklist. For example: `Fix the bug where the UI overflows when the number is too long, and include a checklist to ensure the bug is resolved.`<br>
   <pic src="images/githubCopilot/issueChat.png" width="400" />
1. Copilot will generate a structured issue, including a description, steps to reproduce, expected behaviour, and a checklist.<br>
   <pic src="images/githubCopilot/generatedIssue.png" width="400" />
1. Click on `Create` to submit the issue.
   <box type="tip" seamless>
   Define a standard issue format for your team to ensure consistency across all issues.
   </box>

## Pull Request Creation Summary

1. Go to your GitHub repository and create a new pull request.
1. Click on the Copilot icon, then select `Summary`.<br>
   <pic src="images/githubCopilot/prSummary.png" width="400" />
1. Copilot will generate a summary of the changes included in the pull request.
1. You can edit or add more details to the summary before submitting, if needed.

## Pull Request Review

1. Open the pull request you want to review.
1. Hover over the specific line of code where you need assistance, then click on the Copilot icon.<br>
   <pic src="images/githubCopilot/prReview.png" width="600" />
1. A Copilot chat window will appear, allowing you to ask questions such as: `How can I improve this line of code?`
1. Use Copilot's suggestions to enhance your code review comments or make direct improvements.

<box type="tip" seamless>

Copilot is a helpful assistant, but not a full replacement for human code reviews. You will still need to identify potential issues before asking Copilot for suggestions.
</box>


---

**Contributors**: Norbert Loh ([@NorbertLoh ](https://github.com/NorbertLoh ))

