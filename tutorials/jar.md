<variable name="title">Working with JAR files</variable>
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

{% from "scripts/macros.njk" import embed with context %}

# {{ title }}

<div class="lead">

Java applications are typically delivered as JAR (short for _Java Archive_) files.
</div>

<!-- ==================================================================================================== -->

## Running JAR files

Not all JAR files are _executable_. Some may be just a library that you you reuse in your own application.

While some executable JAR files can be launched simply by double-clicking, the fool-proof way to run a jar file is to
use the `java -jar` command e.g., `java -jar foo.jar` launches the `foo.jar` file.

You can download the Collate-TUI.jar from [https://se-edu.github.io/collate/](https://se-edu.github.io/collate/) and run it using the command`java -jar Collate-TUI.jar` command. It's usage is given [here](https://se-education.org/collate/docs/User-Guide.html#using-the-text-ui).

<!-- ==================================================================================================== -->

## Fat JAR files

<include src="jar-fatJar.mbdf" />

<!-- ==================================================================================================== -->

## Creating JAR files with Intellij IDEA

**{{ icon_video }} Creating a JAR file in Intellij** - A video by Artur Spirin:

@[youtube](3Xo6zSBgdgk)

**If your app uses third-party libraries**, you are recommended to create a fat jar file (see the [_Fat JAR files_ section](#fat-jar-files)) using Gradle instead, as explained [_Creating JAR files with Gradle_ section](#creating-jar-files-with-gradle).

<box type="info" seamless>

Although JUnit is a third-party library, you need not package it into a fat JAR file because JUnit is used only in the test code, not in the application code.

But if you use JavaFX, you need to create package it into a fat JAR.
</box>

<!-- ==================================================================================================== -->

## Creating JAR files with Gradle

If you are using [Gradle](gradle.html) in your project, you can use it to create a JAR file as given in the panel below.


(Although JUnit as test classes are not pacakged into the JAR file).
{{ embed("Tutorials → Gradle → **Creating JAR files**", "gradle.md#section-creating-jar-files") }}


<!-- ==================================================================================================== -->
## Resources

* [Oracle's tutorial on JAR files](https://docs.oracle.com/javase/tutorial/deployment/jar/basicsindex.html)
