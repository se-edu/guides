<frontmatter>
  title: "Using Codecov"
  pageNav: 2
</frontmatter>

# Using Codecov

<div class="lead">

**[Codecov](https://about.codecov.io/) is an online service for generating test coverage reports.**
</div>

## Setting up Codecov with GitHub actions

Scenario: You have forked a project that already had support for using Codecov in the GitHub Actions CI pipeline. Now you want to set up your fork to work with Codecov as well.

Given below are the steps for achieving the above, recommended to be done by someone who has admin access to the GitHub organization that contains the fork.

1. [**Sign up for a Codecov account**](https://app.codecov.io/signup/) using your GitHub account.
1. **Authorize Codecov to access your repo**: Go to [this page](https://github.com/settings/connections/applications/c68c81cbfd179a50784a), go to the ++Organization Access++ section, and click the <button type="button" class="btn btn-outline-primary btn-sm">grant</button> button in front of your GitHub org's name.<br>
   If you don't have admin rights to the org in concern, you need to click on the <button type="button" class="btn btn-outline-primary btn-sm">request</button> button instead, and wait for an admin to approve the request.
1. **Sync your repo list in Codecov:** Login to [Codecov](https://app.codecov.io) using your GitHub account. Ensure your `org/fork` is listed in the home page. If not, use the `re-syncing` link to sync Codecov data with GitHub (and refresh the page afterward). Try again if it doesn't work the first time, as syncing might take some time.<br>
  If the organization still fails to show up in the dropdown, you can also try the `Add GitHub organization` link at the bottom of the dropdown list. Doing so will allow you to install the Codecov integration on your GitHub organization, which is same as the next step.
1. **Install the Codecov integration on GitHub:** Go to [this page](https://github.com/apps/codecov) and click on the green <button type="button" class="btn btn-success btn-sm">Install</button> button. In the next steps, choose the org and the fork you want to set up Codecov for (you can also use the `All repositories` option instead).
1. **Configure Codecov for the specific fork:** Go to `https://app.codecov.io/gh/{YOUR_ORG}` (e.g., `https://app.codecov.io/gh/my-team-org`).<br>
   Choose the `Setup repo>` option for your fork, and follow the instructions for GitHub Actions. You will need to set up the `CODECOV_TOKEN` secret as instructed but there is ==no need to update the workflow YAML file== (as the repo you forked already has a YAML file containing the given code).
1. **Check for coverage status:** Go back to [your Codecov home page](https://app.codecov.io/gh). After the next time CI runs in your fork, you should see the code coverage percentage in front of your fork name. Here is an example:
   <pic src="images/codecov/coverage-example.png"/>
1. **Display the Codecov badge:** If your fork has a badge showing the Codecov status (e.g, ![codecov](https://codecov.io/gh/se-edu/addressbook-level3/branch/master/graph/badge.svg)), get the Markdown code for the Codecov badge provided in `https://app.codecov.io/gh/{YOUR_ORG}/{YOUR_FORK}/settings/badge` (e.g., `https://app.codecov.io/gh/se-edu/addressbook-level3/settings/badge`) and update the appropriate page in your fork.

<box type="tip" seamless>

**You can control if CI still passes even if Codecov task fails** using the line<br> `fail_ci_if_error: true` or `fail_ci_if_error: false` in `.github/workflows/gradle.yml`, under the section related to Codecov.
</box>
