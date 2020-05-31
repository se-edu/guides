<frontmatter>
  title: "Guides for Software Engineering Students"
  pageNav: 2
</frontmatter>

{% from 'scripts/macros.njk' import thumbnail with context %}

<div class="lead">

This website contains a collection of tutorials, standards, guides, best practices etc. useful for SE student.
</div>

## {{ thumbnail(":fas-chalkboard-teacher:") }} Tutorials

* [Automated testing of text UIs](tutorials/textUiTestingTutorial.html)
* [**Checkstyle**](tutorials/checkstyleTutorial.html)
* **JavaFX**:
  * [Part 1: Introduction](tutorials/javaFxTutorialPart1.html)
  * [Part 2: Creating a GUI for Duke](tutorials/javaFxTutorialPart2.html)
  * [Part 3: Interacting with the user](tutorials/javaFxTutorialPart3.html)
  * [Part 4: Using FXML](tutorials/javaFxTutorialPart4.html)
* [**JUnit**](tutorials/junitTutorial.html)
* [**Gradle**](tutorials/gradleTutorial.html)
* [**Netlify**](tutorials/netlifyTutorial.html)
* [**PlantUML**](tutorials/plantUmlTutorial.html)

## {{ thumbnail(":fas-file-code:") }} Conventions

Coding standards, format conventions, style guides, ...

* [**C#** Coding Standard](conventions/csharp.html)
* [**CSS** Coding Standard](conventions/css.html)
* [**Files/Folders** naming](conventions/files.html)
* [**HTML** Coding Standard](conventions/html.html)
* [**Git** conventions](conventions/git.html)
* [**GitHub** conventions](conventions/github.html)
* [**Markdown** Coding Standard](conventions/markdown.html)
* **Java** Coding Standards: [Basic](conventions/java/basic.html) | [Basic + Intermediate](conventions/java/intermediate.html) | [All](conventions/java/index.html)

## {{ thumbnail(":fas-map-signs:") }} Guidelines

* [Git commits](guidelines/commits.html)
* [Working with PRs](guidelines/PRs.html)
