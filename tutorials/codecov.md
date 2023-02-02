<frontmatter>
  title: "Using Codecov"
  pageNav: 2
</frontmatter>

# Using Codecov

<div class="lead">

**[Codecov](https://about.codecov.io/) is an online service for generating test coverage reports.**
</div>

## Setting up Codecov with GitHub actions

Scenario: You have forked a project that already had support for using Codecov in the Github Actions CI pipeline. Now you want to set up your fork to work with Codecov as well.

Given below are the steps for achieving the above, recommended to be done by someone who has admin access to the Github organization that contains the fork.

1. [**Sign up for a Codecov account**](https://app.codecov.io/signup/) using your Github account.
1. **Authorize Codecov to access your repo**: Go to [this page](https://github.com/settings/connections/applications/c68c81cbfd179a50784a), go to the ++Organization Access++ section, and click the <button type="button" class="btn btn-outline-primary btn-sm">grant</button> button in front of your Github org's name.<br>
   If you don't have admin rights to the org in concern, you need to click on the <button type="button" class="btn btn-outline-primary btn-sm">request</button> button instead, and wait for an admin to approve the request.
1. **Sync your repo list in Codecov:** Login to [Codecov](https://app.codecov.io) using your Github account. Ensure your `org/fork` is listed in the home page. If not, use the `re-syncing` link to sync Codecov data with Github (and refresh the page afterwards). Try again if it doesn't work the first time, as syncing might take some time.
1. **Install the Codecov integration on Github:** Go to [this page](https://github.com/apps/codecov) and click on the green <button type="button" class="btn btn-success btn-sm">Install</button> button. In the next steps, choose the org and the fork you want to set up Codecov for.
1. **Check for coverage status:** Go back to [your Codecov home page](https://app.codecov.io/gh). You might still see `not enabled` in front of your org/repo name. But this should change the next time you run CI in your fork, at which point you should see the code coverage percentage in front of your fork name. An example screenshot can be seen in the step 1 of [this Codecov Quick Start guide](https://docs.codecov.com/docs).
1. **Display the Codecov badge:** If your fork has a badge showing the Codecov status (e.g, ![codecov](https://codecov.io/gh/se-edu/addressbook-level3/branch/master/graph/badge.svg)), get the Markdown code for the Codecov badge provided in `https://app.codecov.io/gh/{YOUR_ORG}/{YOUR_FORK}/settings/badge` (e.g., `https://app.codecov.io/gh/se-edu/addressbook-level3/settings/badge`)and update the appropriate page in your fork.

<box type="tip" seamless>

**You can control if CI still passes even if Codecov task fails** using the line<br> `fail_ci_if_error: true` or `fail_ci_if_error: false` in `.github/workflows/gradle.yml`.
</box>
