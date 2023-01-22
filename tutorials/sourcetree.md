<frontmatter>
  title: "Sourcetree Tips"
  pageNav: 3
</frontmatter>

{% from "scripts/macros.njk" import embed with context %}

# Sourcetree Tips

<!-- ==================================================================================================== -->

## Connecting Sourcetree to Your GitHub Account

[SourceTree](https://www.sourcetreeapp.com/) is a free GUI client for Git.
One hurdle you might face while using Sourcetree is getting it to work with your GitHub account using GitHub's PAT (Personal Access Token).
Given below are some things you can try if you encounter that problem.

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
   If a Browser Window pops up and asks you to login to GitHub and to authorize SourceTree accessing your GitHub account, do so.
1. Now, your Sourcetree should be able to push code to a GitHub repo that you have write permission to.

**Option 2:**

1. In the SourceTree, choose `Tools` -> `Options` -> `Authentication`
1. If any GitHub authentication methods are shown in that dialog, delete them.
1. Click on `Add`, to add an authentication method.
1. In the next dialog, choose:
   * Hosting Service: `GitHub`
   * Preferred Protocol: `HTTPS`
   * Authentication: `Basic` ==(different from option 1 above)==
1. Click on the `Refresh Password` button. When prompted, enter your usual GitHub username but give the PAT (the one you created in step 1) instead of the regular password.
1. Now, your Sourcetree should be able to push code to a GitHub repo that you have write permission to.

**Option 3:**

1. [Open the Windows Credential Manager](https://support.microsoft.com/en-gb/windows/accessing-credential-manager-1b5c916a-6a16-889f-8581-fc16e8165ac0).
2. For each credentials related to GitHub (if the name mentions GitHub) in `Web Credentials` or `Windows Credentials` categories,<br>
   (a) edit it and replace the password field with a GitHub PAT.<br>
   (b) If the above didn't work, delete those credential altogether and try Option 1 or 2 again.

### On a Mac

Try this guide from Medium: [Connecting Mac SourceTree with your GitHub account](https://eekayonline.medium.com/connecting-mac-sourcetree-with-your-github-account-b6b3bb3c5a66).

If the above doesn't work, try this guide (also from Medium): [Using Sourcetree to connect to Github without password](https://medium.com/geekculture/using-personal-access-token-in-sourcetree-to-connect-to-github-3702a29554d3).<br>
It gives two methods. Recommended to try method 2 first.

<!-- ==================================================================================================== -->

