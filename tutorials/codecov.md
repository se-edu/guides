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
1. **Install the Codecov integration on GitHub:**:
   * Go to [this page](https://github.com/apps/codecov) and click on the green <button type="button" class="btn btn-success btn-sm">Install</button> button.{{ abcd_numbers }}
   * In the next page, select your GitHub organization
   * In the next page, choose the `Only select repositories` and choose your repo (you can also use the `All repositories` option instead). After that, click the <button type="button" class="btn btn-success btn-sm">Install</button>.<br>
      <pic src="images/codecov/select-repo.png" width="400" />
1. **Sync your repo list in Codecov:** Login to [Codecov](https://app.codecov.io) using your GitHub account. Ensure your organization is listed in the dropdown in the home page. If not, use the `re-syncing` link to sync Codecov data with GitHub (and refresh the page afterward).<br>
  If the organization still fails to show up in the dropdown, proceed to the next step anyway (it's likely the syncing is done but the UI is not showing it).
1. **Configure Codecov for the specific fork:**
   * Go to `https://app.codecov.io/gh/{YOUR_ORG}` (e.g., `https://app.codecov.io/gh/my-team-org`).
   * Click the <button type="button" class="btn btn-primary btn-sm">Configure</button> option for your fork, and follow the instructions for GitHub Actions.
     * You can skip the `Step 1: Output a Coverage report file in your CI`, as it is already set up in your repo. {{ abcd_numbers }}
     * But you still need to do `Step 2: Select an upload token to add as a secret on GitHub`. In that step, choose the `Repository Token` option
     * Proceed to `Step 3: add token as repository secret`, and configure the `CODECOV_TOKEN` secret as instructed there.
     * You can skip steps 4 and 5.
1. **Check for coverage status:** Go to your repo and re-run the most recent CI run. If you set up Codecov correctly, this CI run should upload the coverage data to Codecov. Go back to [your Codecov home page](https://app.codecov.io/gh), choose the org from the dropdown and ==click on the repo name== (ignore the `no data` label, if any). In the next page, you should see the code coverage details. Here is an example:
   <pic src="images/codecov/coverage-example.png"/>
1. **Display the Codecov badge:** If your fork has a badge showing the Codecov status (e.g, ![codecov](https://codecov.io/gh/se-edu/addressbook-level3/branch/master/graph/badge.svg)), get the Markdown code for the Codecov badge provided in `https://app.codecov.io/gh/{YOUR_ORG}/{YOUR_FORK}/settings/badge` (e.g., `https://app.codecov.io/gh/se-edu/addressbook-level3/settings/badge`) and update the appropriate page in your fork.

<box type="tip" seamless>

**You can control if CI still passes even if Codecov task fails** using the line<br> `fail_ci_if_error: true` or `fail_ci_if_error: false` in `.github/workflows/gradle.yml`, under the section related to Codecov.
</box>
