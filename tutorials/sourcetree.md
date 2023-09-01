<frontmatter>
  title: "Sourcetree Tips"
  pageNav: 3
</frontmatter>

{% from "scripts/macros.njk" import embed with context %}

# Sourcetree

[SourceTree](https://www.sourcetreeapp.com/) is a free GUI client for Git.

<!-- ==================================================================================================== -->

## Installation

1. Download Sourcetree from [their website](https://www.sourcetreeapp.com/) and run it.
1. When prompted to `Login to your Atlassian account`, you can try to skip that step. If the installer doesn't allow skipping, you can create an Atlassian account as directed.
1. In the next step, you will be prompted to `Connect an Account`. Choose to connect to GitHub. In the dialog for connecting to GitHub,
   1. choose `HTTPS` as the protocol
   1. choose `OAuth` as the authentication method
   1. click the `Refresh OAuth Token` button so that SourceTree can obtain youn access token from GitHub. This usually opens up a Browser for you to sign in to GitHub. After you sign in to GitHub successfully, the installation can continue.
1. In the `Pick tools to download and install`, you will be asked to choose whether to install Git and <tooltip content="another revision control software similar to Git">Mercurial</tooltip>. You can unselect Mercurial, as we will be using Git instead.
1. If prompted to set up an SSL key, you can click `No`, but you are free to set of an SSL key if you are familiar with SSL key usage.

<!-- ==================================================================================================== -->

## Connecting Sourcetree to Your GitHub Account

If you did not connect your SourceTree to your GitHub account during the installation, or your current SourceTree-GitHub connection is not working, given below are how you can rectify it.

### On Windows

**Option 1:**

1. Authenticate with your default browser on your GitHub account with your normal GitHub username/password.
1. In the SourceTree, choose `Tools` -> `Options` -> `Authentication`
1. If any GitHub authentication methods are shown in that dialog, delete them.
1. Click on `Add`, to add an authentication method.
1. In the next dialog, choose:
   * Hosting Service: `GitHub`
   * Preferred Protocol: `HTTPS`
   * Authentication: `OAuth`
1. Click on the `Refresh OAuth token` button.<br>
   If a Browser Window pops up and asks you to login to GitHub and to authorize Sourcetree accessing your GitHub account, do so.
1. Now, your Sourcetree should be able to push code to a GitHub repo that you have write permission to.

**Option 2:**

1. Create a _classic_ (not fine-grained) GitHub Personal Access Token (PAT), by following the instructions [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).<br>
   When asked to select the scope of the PAT, you can choose the `repo` option.
1. In the Sourcetree, choose `Tools` -> `Options` -> `Authentication`
1. If any GitHub authentication methods are shown in that dialog, delete them.
1. Click on `Add`, to add an authentication method.
1. In the next dialog, choose:
   * Hosting Service: `GitHub`
   * Preferred Protocol: `HTTPS`
   * Authentication: `Personal Access Token` ==(different from option 1 above)==
1. Click on the `Refresh Personal Access Token` button. When prompted, enter your usual GitHub username but ==give the PAT (the one you created in step 1) instead of the regular password==.
1. Now, your Sourcetree should be able to push code to a GitHub repo that you have write permission to.

**Option 3:**

1. [Open the Windows Credential Manager](https://support.microsoft.com/en-gb/windows/accessing-credential-manager-1b5c916a-6a16-889f-8581-fc16e8165ac0).
2. For each credentials related to GitHub (if the name mentions GitHub) in `Web Credentials` or `Windows Credentials` categories,<br>
   (a) edit it and replace the password field with a GitHub PAT.<br>
   (b) If the above didn't work, delete those credential altogether and try Option 1 or 2 again.

### On a Mac

Try this guide from Medium: [Connecting Mac Sourcetree with your GitHub account](https://eekayonline.medium.com/connecting-mac-sourcetree-with-your-github-account-b6b3bb3c5a66).

If the above doesn't work, try this guide (also from Medium): [Using Sourcetree to connect to Github without password](https://medium.com/geekculture/using-personal-access-token-in-sourcetree-to-connect-to-github-3702a29554d3).<br>
It gives two methods. Recommended to try method 2 first.

<!-- ==================================================================================================== -->

