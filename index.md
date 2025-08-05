<frontmatter>
  title: "Guides for Software Engineering Students"
  pageNav: 2
</frontmatter>

{% from 'scripts/macros.njk' import thumbnail with context %}

<div class="lead">

This website contains a collection of tutorials, standards, guides, best practices etc. useful for SE students.
</div>

## {{ thumbnail(":fas-chalkboard-teacher:") }} Tutorials

Tutorials, how-to guides, getting-started guides, ...

* [**AddressBook Level-3 (AB3)**](tutorials/ab3.html)
* **AI Coding Tools**:
  * [**Copilot in GitHub**](tutorials/githubCopilot.html) | [**Gemini CLI**](tutorials/geminiCli.md)
* [**Checkstyle**](tutorials/checkstyle.html)
* [**Codecov**](tutorials/codecov.html)
* **Git and GitHub**:
  * [Authentication](tutorials/githubAuthentication.html)
  * [GitHub Actions](tutorials/githubActions.html)
  * [Sourcetree](tutorials/sourcetree.html)
* [**Gradle**](tutorials/gradle.html)
* **Java**:
  * **[Installation](tutorials/javaInstallation.html)**: [:fab-apple: Mac](tutorials/javaInstallationMac.html) | [:fab-windows: Windows](tutorials/javaInstallationWindows.html) | [:fab-linux: Linux](tutorials/javaInstallationLinux.html)
  * [**JAR files**](tutorials/jar.html)
  * [**JavaFX**](tutorials/javaFx.html):
    * [Part 1: Getting started](tutorials/javaFxPart1.html)
    * [Part 2: Creating a GUI for Duke](tutorials/javaFxPart2.html)
    * [Part 3: Interacting with the user](tutorials/javaFxPart3.html)
    * [Part 4: Using FXML](tutorials/javaFxPart4.html)
    * [Part 5: Tweaking the GUI](tutorials/javaFxPart5.html)
* **IDE: Intellij IDEA**:
  * [Setting up your first project](tutorials/intellijProjectSetup.html)
  * [Importing a Gradle project](tutorials/intellijImportGradleProject.html)
  * [Configuring the code style](tutorials/intellijCodeStyle.html)
  * [Code Navigation](tutorials/intellijCodeNavigation.html)
  * [Refactoring](tutorials/intellijRefactoring.html)
  * [Productivity shortcuts](tutorials/intellijProductivityShortcuts.html)
  * [Using the debugger](tutorials/intellijDebugger.html)
  * [Useful Settings](tutorials/intellijUsefulSettings.html)
  * [Useful Plugins](tutorials/intellijUsefulPlugins.html)
  * AI Tool Integrations: [Windsurf](tutorials/intellijWindsurf.html)
* [**IDE: Visual Studio Code**](tutorials/vscode.html)
  <include src="tutorials/vscode.md#vscode-sub-topics" />
* **Testing**
  * [Automated testing of text UIs](tutorials/textUiTesting.html)
  * [**JUnit**](tutorials/junit.html)
* **Project documentation**:
  * [**Jekyll**](tutorials/jekyll.html)
  * [**MarkBind**](tutorials/markbind.html)
    * [Working with forked MarkBind sites](tutorials/markbind-forked-sites.html)
  * [**Netlify**](tutorials/netlify.html)
  * [**PlantUML**](tutorials/plantUml.html)
  * [**Saving** web documents as PDF files](tutorials/savingPdf.html)


## {{ thumbnail(":fas-file-code:") }} Conventions

Coding standards, format conventions, style guides, ...

* [**C#** coding standard](conventions/csharp.html)
* [**CSS** coding standard](conventions/css.html)
* [**Files/Folders** naming](conventions/files.html)
* [**Git** conventions](conventions/git.html)
* [**GitHub** conventions](conventions/github.html)
* [**HTML** coding standard](conventions/html.html)
* **Java**
  * **coding standards**: [basic](conventions/java/basic.html) | [basic + intermediate](conventions/java/intermediate.html) | [all](conventions/java/index.html)
  * [**logging** conventions](conventions/java/logging.html)
* [**JavaScript** coding standard](conventions/javascript.html)
* [**Markdown** coding standard](conventions/markdown.html)

## {{ thumbnail(":fas-map-signs:") }} Guidelines

Best practices, processes, workflows, ...

* [**Code of conduct**](guidelines/codeOfConduct.html)<br>
* [**Working with Git**](guidelines/commits.html)
* **GitHub:**
  * [Working with **PRs**](guidelines/PRs.html)
    * [Best practices for **reviewing PRs**](guidelines/PRs-reviewing.html)
  * [Working with **labels**](guidelines/labels.html)
