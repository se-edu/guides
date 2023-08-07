<frontmatter>
  title: "Gradle tutorial"
  pageNav: 3
</frontmatter>

{% from "scripts/macros.njk" import embed with context %}

# Gradle tutorial

<div class="lead">

Gradle is a _build automation tool_ used to automate build processes, and it can help with managing external dependencies as well (e.g., third-party libraries).
</div>

<!-- ==================================================================================================== -->

## Basics

You use a _build file_ (named `build.gradle`) to describe how Gradle should behave for a project, using the the following three mechanisms.

1. **Plugins** extend the functionality of Gradle. For example, the `java` plugin adds support for `Java` projects.

1. **Tasks** are reusable blocks of logic. For example, the task `clean` simply deletes the project build directory.
Tasks can be composed of, or dependent on, other tasks.

1. **Properties** change the behavior of tasks. For instance, when using the `application` plugin, we should use the `mainClassName` (or `mainClass`) property to tell Gradle which class is the entry point to your application. As Gradle favors [_convention over configuration_](https://en.wikipedia.org/wiki/Convention_over_configuration), there is not much to you need to configure if you follow the recommended directory structure.

**Even if you are not using Intellij, ==a quick watch of the following video is strongly recommended==** before proceeding with the rest of this tutorial, if you are new to Gradle. The video will help you grasp how Gradle fits into the big picture of a project, and how it looks like to be using it.

<panel header="Expand to see screenshot ..." peek no-close no-switch>
<div slot="header"><md><span class="text-danger">:fab-youtube:</span> VIDEO: Working with Grade</md></div>

@[youtube](6V6G3RyxEMk)

</panel>


<p/>

<!-- ==================================================================================================== -->

## Adding Gradle to the project

There are several ways of integrating Gradle into a project. This tutorial uses the _Gradle wrapper_ approach.
Given below are three scenarios of adding the Gradle wrapper to a project. Choose the one that fits your situation best.

****Scenario 1:**** You are setting up a project that already has Gradle wrapper files.

<tabs>
<tab header="Using Intellij">
<div class="ml-3">

<include src="intellijImportGradleProject.md#importing-gradle-project" />

</tab>
<tab header="Not using an IDE">

No action required. You should be able to use Gradle via the command line right away.
</tab>
<p/>

****Scenario 2:**** You are adding Gradle support to an ongoing project. Gradle wrapper files are available but have not been added to the project yet.

First, add the Gradle wrapper files to the project. e.g., if they are in a separate branch, merge that branch.

<tabs>
<tab header="Using Intellij">

1. Close the IDEA project if it is open.
1. Delete the `.idea` folder.
1. Open/import the project again, as explained in scenario 1 above.

</tab>
<tab header="Not using an IDE">

No further actions required. You should be able to use Gradle via the command line now.
</tab>
<p/>

****Scenario 3:**** You are adding Gradle support to an ongoing project from scratch.

* [This](https://docs.gradle.org/current/userguide/gradle_wrapper.html) is a good place to start.

<!-- ==================================================================================================== -->

## Running Gradle tasks

<tabs>
<tab header="Using Intellij">

There are several ways to run a Gradle task in Intellij. Examples:
* Locate the task in the Gradle toolbar, and double-click it.
* Hit `Ctrl` key twice (to bring up the command runner), and type `gradlew` followed by tasks to run e.g., `gradlew clean test`.

See [this video](https://www.youtube.com/watch?v=6V6G3RyxEMk#t=13m44s) for more ways to run Gradle tasks inside Intellij.

Alternatively, you can run Gradle tasks using the command line (even if you are using Intellij). Follow the instructions in the `Using the terminal` tab above.

<box type="tip" seamless>

If the Gradle tasks don't appear in the Gradle window, click the 'refresh' button in the toolbar to reimport the Gradle project.
</box>
<box type="tip" seamless>

Intellij uses Gradle to run your application by default. If you would like to run the project in the normal way, go to `File` > `Settings` and change the following settings:

<panel header="Expand to see screenshot ..." peek no-close no-switch>

![change Intellij settings to not use Gradle](images/gradle/intellijRunUsingGradle.png)
</panel>
</box>

</tab>
<tab header="Using the terminal">

You can open a terminal, navigate to the project root, and type the following command in the terminal.

* On Windows: `gradlew <task1> <task2> …`​ e.g. `gradlew clean test`
* On Mac/Linux: `./gradlew <task1> <task2> …`​ e.g. `./gradlew clean test`
</tab>
<p/>
<!-- ==================================================================================================== -->

## Managing plugins and dependencies

**Gradle functionality can be extended using plugins.** Here are some plugins commonly used in Java projects.

More info on specific plugins:
* [Java](https://docs.gradle.org/current/userguide/java_plugin.html#java_plugin) -- a built-in plugin that adds Java compilation along with testing and bundling capabilities to a project.<br>
  [Application](https://docs.gradle.org/current/userguide/application_plugin.html#application_plugin) -- a built-in plugin for creating an executable JVM application.
* [Checkstyle](https://docs.gradle.org/current/userguide/checkstyle_plugin.html#checkstyle_plugin) -- a built-in plugin for using Checkstyle in a project.
* [Shadow](https://plugins.gradle.org/plugin/com.github.johnrengelman.shadow) -- a third-party plugin for creating <trigger trigger="click" for="modal:gradleTutorial-fatJar">fat/uber JARs</trigger>.

<modal large header="Fat/Uber JAR files" id="modal:gradleTutorial-fatJar">
  <include src="jar-fatJar-fragment.md"/>
</modal>

The relevant lines for adding the above plugins to the `build.gradle` are given below:
```groovy{heading="build.gradle"}
plugins {
    id 'java'
    id 'application'
    id 'checkstyle'
    id 'com.github.johnrengelman.shadow' version '7.1.2'
}
```

You can follow the links in the list above to find what tasks are provided by a plugin and how to configure it. For example, `run` is a task provided by the Application plugin, and you can set the `mainClassName` (`mainClass` in some versions) property, to indicate which class should be used as the as the entry point of the application:

```groovy{heading="build.gradle"}
application {
    mainClass.set("seedu.duke.Main")
}
```

**Gradle can automate the management of dependencies to third-party libraries** too. You just need to add the dependency into the `build.gradle` file and Gradle will do the rest. For example, to add the Natty (a third-party library used for parsing natural language dates e.g., `today`), you simply have to add the following line to the `dependencies` section of the `build.gradle` file.
```groovy{heading="build.gradle"}
compile group: 'com.joestelmach', name: 'natty', version: '0.6'
```

Tip: Most third-party libraries specify how to add it as a Gradle dependency ([example](https://mvnrepository.com/artifact/com.joestelmach/natty/0.6)).

**From where does Gradle download dependencies?** The public servers Gradle will search to find the specified dependencies are listed in the `build.gradle` file. e.g.,
```groovy{heading="build.gradle"}
repositories {
    mavenCentral()
    maven { url 'https://oss.sonatype.org/content/repositories/snapshots/' }
}
```
<!-- ==================================================================================================== -->

## Using Gradle to do some common project activities

<!-- ------------------------------------------------------------------------------------------------------ -->

### Running the application

Run the **`run`** task to launch the main class of the application.<br>
  e.g. `./gradlew run`


<!-- ------------------------------------------------------------------------------------------------------ -->

### Cleaning the project

Run the **`clean`** to delete the files created during the previous build tasks (e.g. files in the `build` folder).<br>
  e.g. `./gradlew clean`

<box type="tip" seamless>

**You can use `clean` to prevent Gradle from skipping tasks**: When running a Gradle task, Gradle will try to figure out if the task needs running at all. If Gradle determines that the output of the task will be same as the previous time, it will not run the task. For example, it will not build the JAR file again if the relevant source files have not changed since the last time the JAR file was built. If you want to force Gradle to run a task, you can combine that task with `clean` (e.g., `./gradlew clean shadowJar`). Once the build files have been `clean` ed, Gradle has no way to determine if the output will be same as before, and it will have no choice but to execute the task.

</box>

<!-- ------------------------------------------------------------------------------------------------------ -->

### Running Checkstyle

tasks `checkstyleMain` and `checkstyleTest` check if the main code and test code complies with the Checkstyle rules, respectively. <br>
e.g., `./gradlew checkstyleMain checkstyleTest`

See our [Checkstyle Tutorial](checkstyle.html) for more details.

<!-- ------------------------------------------------------------------------------------------------------ -->

### Running tests

Run the **`test`** to run all tests and test-related tasks.<br>
  e.g. `./gradlew test`

See our [JUnit tutorial](junit.html) to find how to use JUnit with Gradle.

<!-- ------------------------------------------------------------------------------------------------------ -->

### Creating JAR files

Run the **`shadowJar`** task to create a fat JAR file of the application.<br>
  e.g. `./gradlew clean shadowJar`

See our [JAR tutorial](jar.html) to find more about creating JAR files using Gradle.

<!-- ------------------------------------------------------------------------------------------------------ -->

### Compiling

There is no need to run these Gradle tasks manually as they are called automatically by other relevant Gradle tasks.

* **`compileJava`**: Checks whether the project has the required dependencies to compile and run the main program, and download any missing dependencies before compiling the classes.
* **`compileTestJava`**: Checks whether the project has the required dependencies to perform testing, and download any missing dependencies before compiling the test classes.

<!-- ==================================================================================================== -->

### Enabling assertions

To enable assertions when executing Java code, add the following to the `build.gradle` file.

```groovy
run {
    enableAssertions = true
}
```

<!-- ==================================================================================================== -->

## Resources

* [Official Gradle Documentation](https://docs.gradle.org/current/userguide/userguide.html)

----------------------------------------------------------------------------------------
**Authors:**
* Initial Version: Jeffry Lum
