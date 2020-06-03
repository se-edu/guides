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

* [**Checkstyle**](tutorials/checkstyle.html)
* **JavaFX**:
  * [Part 1: Introduction](tutorials/javaFxPart1.html)
  * [Part 2: Creating a GUI for Duke](tutorials/javaFxPart2.html)
  * [Part 3: Interacting with the user](tutorials/javaFxPart3.html)
  * [Part 4: Using FXML](tutorials/javaFxPart4.html)
* **Intellij IDEA**:
  * [Configuring the JDK](tutorials/intellijJdk.html)
  * [Importing a Gradle project](tutorials/intellijImportGradleProject.html)
  * [Configuring the code style](tutorials/intellijCodeStyle.html)
* **Testing**
  * [Automated testing of text UIs](tutorials/textUiTesting.html)
  * [**JUnit**](tutorials/junit.html)
* [**Gradle**](tutorials/gradle.html)
* **Project documentation tools**:
  * [**MarkBind**](tutorials/markbind.html)
  * [**Netlify**](tutorials/netlify.html)
  * [**PlantUML**](tutorials/plantUml.html)

## {{ thumbnail(":fas-file-code:") }} Conventions

Coding standards, format conventions, style guides, ...

* [**C#** coding standard](conventions/csharp.html)
* [**CSS** coding standard](conventions/css.html)
* [**Files/Folders** naming](conventions/files.html)
* [**HTML** coding standard](conventions/html.html)
* [**JavaScript** coding standard](conventions/javascript.html)
* [**Git** conventions](conventions/git.html)
* [**GitHub** conventions](conventions/github.html)
* [**Markdown** coding standard](conventions/markdown.html)
* **Java** coding standards: [basic](conventions/java/basic.html) | [basic + intermediate](conventions/java/intermediate.html) | [all](conventions/java/index.html)

## {{ thumbnail(":fas-map-signs:") }} Guidelines

Best practices, processes, workflows, ...

* [Git commits](guidelines/commits.html)
* [Working with PRs](guidelines/PRs.html)
