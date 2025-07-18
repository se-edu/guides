{% set title="Setting up GitHub Authentication" %}
---
title: "{{ title }}"
pageNav: 3
---

# {{ title }}


For tools on your computer to interact with GitHub (e.g., pushing a local repository to GitHub), you need to set up a way for them to authenticate you to GitHub. You can use either **HTTPS** or **SSH** for this. Both methods are acceptable, but we recommend HTTPS (as does GitHub). That said, Mac and Linux users may find SSH slightly more convenient.

<box type="important" light>

When accessing a GitHub repository, the URL format depends on the protocol you use:

* **HTTPS URLs** look like standard web links, starting with `https://github.com/`<br>
  e.g., `https://github.com/johndoe/myrepo.git`
* **SSH URLs** use a different syntax, starting with `git@github.com:`<br>
  e.g., `git@github.com:johndoe/myrepo.git`

Use the matching URL based on the protocol you chose for authentication.
</box>

## Using HTTPS for authentication

****Step 1: Create a Personal Access Token (PAT)****

1. Go to your GitHub account → `Settings` → `Developer settings` → `Personal access tokens` → `Tokens (classic)`.
1. Click the `Generate new token` dropdown, and choose `Generate new token (classic)`.
1. Generate a new token. Specify a suitable description (under `Note`), an expiration date, and scopes (i.e., operations for which this PAT can be used). We recommend selecting the following scopes:<br>
  <pic src="images/githubAuthentication/chooseScopesForPat.png" />
1. Copy the token — you’ll need it shortly.

---

****Step 2: Configure Git to cache your credentials****

To avoid having to enter username/PAT every time, you can ask Git to store it securely on your computer, as follows:

<tabs>
  <tab header=":fab-windows: Windows">

Configure Git to use the built-in **Credential Manager** by running:

```bash{.no-line-numbers}
git config --global credential.helper manager-core
```

  </tab>
  <tab header=":fab-apple: MacOS">

macOS uses the Keychain by default, so your PAT is stored automatically after the first use. No further action needed.
  </tab>
  <tab header=":fab-linux: Linux">

Configure Git to use credential cache by running:

```bash{.no-line-numbers}
git config --global credential.helper cache
```
  </tab>
</tabs>

---

****Step 3: Use the credentials once, to cache it.****

When you perform your first Git operation that contacts GitHub (like pushing or pulling), Git will prompt you for a username and password.
* Enter your **GitHub username** as the username.
* Paste the **PAT** as the password.

<box type="tip" seamless>

To trigger the above step, you can attempt to access a remote private repository:
```bash{.no-line-numbers}
git clone https://github.com/se-edu/samplerepo-private.git
```
The operation will fail, but it will trigger the authentication mechanism which will ask for your credentials, and cache them for future use.
</box>

<!-- ============================================== -->

## Using SSH for authentication


<tabs>
  <tab header=":fab-windows: Windows + Git Bash">

##### 1. Check for Existing SSH Keys

```bash
ls -al ~/.ssh
```

Look for files like `id_ed25519.pub`.

##### 2. Create New SSH Key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

##### 3. Add SSH Key to ssh-agent

In a **PowerShell (Admin)** window:

```powershell
Get-Service -Name ssh-agent | Set-Service -StartupType Manual
Start-Service ssh-agent
ssh-add ~/.ssh/id_ed25519
```

##### 4. Add SSH Key to GitHub

Copy your public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

Then add it to GitHub → Settings → SSH and GPG Keys.

##### 5. Verify SSH Connection

```bash
ssh -T git@github.com
```

Say `yes` when prompted, and you should see a welcome message with your username.

  </tab>
  <tab header=":fab-windows: Windows + WSL">

Perform these steps within your WSL distribution.

##### 1. Check for Existing SSH Keys

```bash
ls -al ~/.ssh
```

Look for `id_ed25519.pub` or similar.

##### 2. Create New SSH Key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Press Enter to accept all defaults.

##### 3. Add SSH Key to ssh-agent

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

##### 4. Add SSH Key to GitHub

```bash
cat ~/.ssh/id_ed25519.pub
```

Paste the output into GitHub → Settings → SSH and GPG Keys.

##### 5. Verify SSH Connection

```bash
ssh -T git@github.com
```
  </tab>
  <tab header=":fab-apple: MacOS">


##### 1. Check for Existing SSH Keys

```bash
ls -al ~/.ssh
```

Look for files named `id_rsa.pub`, `id_ecdsa.pub`, or `id_ed25519.pub`. If you have one, skip to step 4.

##### 2. Create New SSH Key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```
Press Enter to accept all defaults (including empty passphrase).

##### 3. Add SSH Key to ssh-agent

Start the ssh-agent:

```bash
eval "$(ssh-agent -s)"
```

Configure SSH (for macOS Sierra 10.12.2 or later):

```bash
touch ~/.ssh/config
```

Add this to your `~/.ssh/config` file:

```
Host github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
```

Add your SSH key:

```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

##### 4. Add SSH Key to GitHub

Copy your public key to clipboard:

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

1. Go to GitHub → Settings → SSH and GPG keys → New SSH key
2. Give it a name and paste your public key
3. Save

##### 5. Verify SSH Connection

```bash
ssh -T git@github.com
```

Type `yes` when prompted, and you should see a message with your username.

  </tab>
  <tab header=":fab-linux: Linux">

##### 1. Check for Existing SSH Keys

```bash
ls -al ~/.ssh
```

Look for `id_ed25519.pub` or similar.

##### 2. Create New SSH Key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Press Enter to accept all defaults.

##### 3. Add SSH Key to ssh-agent

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

##### 4. Add SSH Key to GitHub

```bash
cat ~/.ssh/id_ed25519.pub
```

Paste the output into GitHub → Settings → SSH and GPG Keys.

##### 5. Verify SSH Connection

```bash
ssh -T git@github.com
```

  </tab>
</tabs>

-----

**Contributors**: Woo Jiahao ([@woojiahao](https://github.com/woojiahao))
