{% set title="Working with JAR files" %}
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

Not all JAR files are _executable_. Some may be just a library that you use in your own application.

While some executable JAR files can be launched simply by double-clicking, the fool-proof way to run a jar file is to
use the `java -jar`. For example, if the `foo.jar` is in `C:\projects` folder, you can do the following:

1. open a terminal.
1. navigate to the `C:\projects` folder using the `cd` command (e.g., `cd C:\projects`)
1. run the command `java -jar foo.jar`.

**Would like to try the above yourself?** Download the Collate-TUI.jar from [https://se-edu.github.io/collate/](https://se-edu.github.io/collate/) and run it using the command`java -jar Collate-TUI.jar` command. The JAR file's usage is given [here](https://se-education.org/collate/docs/User-Guide.html#using-the-text-ui).

<!-- ==================================================================================================== -->

## Fat JAR files

<include src="jar-fatJar-fragment.md" />

<!-- ==================================================================================================== -->

## Creating JAR files

<tabs>
<tab header="With Gradle">

If you are using [Gradle](gradle.html) in your project, you can use the [Shadow](https://imperceptiblethoughts.com/shadow/) Gradle plugin to package an application into an executable JAR file. It is particularly useful if you wish to creat a _fat_ JAR file.

To use the Shadow plugin, first ensure the following plugins are listed in your `build.gralde` file.

```groovy{heading="build.gradle"}
plugins {
  id 'java'
  id 'com.github.johnrengelman.shadow' version '7.1.2'
  // other plugins
}
```
Second, ensure the following property is configured correctly, so that Shadow know which class is the entry point to the application:
```groovy{heading="build.gradle"}
mainClassName = 'seedu.duke.Main'
```

The task **`shadowJar`** (e.g., running the command `gradlew shadowJar` or `gradlew clean shadowJar`) creates a JAR file with the name in the format of `{archiveBaseName}-{archiveVersion}.jar` and puts it in the `builds/libs` folder. This output file name/location can be tweaked further using the properties `destinationDir`, `archiveBaseName`, `archiveVersion` in the `build.gradle` file. e.g.,

```groovy{heading="build.gradle"}
shadowJar {
    archiveFileName = 'duke.jar'
}
```


{{ icon_info }} If you are using JavaFX, see the panel below to find what else you need to add to the `build.gradle` to pack JavaFX libraries into the generated JAR file.

{{ embed("Tutorials → JavaFX Tutorial Part 1 → If you are using Gradle", "javaFxPart1.md#javafx-gradle") }}

</tab>
<tab header="With Intellij IDEA">

**{{ icon_video }} Creating a JAR file in Intellij** - A video by Artur Spirin:

@[youtube](3Xo6zSBgdgk)

**If your app uses third-party libraries**, you are recommended to create a fat JAR file using Gradle instead.

<box type="info" seamless>

Although JUnit is a third-party library, you need not package it into a fat JAR file because JUnit is used only in the test code, not in the application code.

But if you use JavaFX, you need to package the JavaFX libraries into a fat JAR file.
</box>
</tab>
</tabs>

<!-- ==================================================================================================== -->
## Resources

* [Oracle's tutorial on JAR files](https://docs.oracle.com/javase/tutorial/deployment/jar/basicsindex.html)
* [Gradle documentation for the Shadow plugin](https://plugins.gradle.org/plugin/com.github.johnrengelman.shadow)
* [Shadow plugin homepage](https://imperceptiblethoughts.com/shadow/introduction/)
