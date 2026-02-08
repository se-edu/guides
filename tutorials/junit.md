<frontmatter>
  title: "Using JUnit"
  pageNav: 2
</frontmatter>

# Using JUnit

<div class="lead">

[JUnit](https://junit.org/junit5/) is a testing framework for Java.
</div>

<div id="junit-use-gradle">

As JUnit is a third-party library, you need to add support to it specifically in your project. Given below is how you can do that using the <tooltip content="a build tool and a dependency management tool">Gradle</tooltip>. While it is possible to add JUnit to your project without Gradle, **we strongly recommend using Gradle** as it can make things easier in the long run.<br>
If you have not done that yet, follow the [_Gradle Tutorial_](gradle.html) to add Gradle support to the project first.
</div>

This tutorial explains how to use JUnit in a project, _with Gradle_.

<!-- ======================================================== -->


<div id="junit-conventions">

## Conventions to Follow

Here are the conventions to follow, when using JUnit in a Gradle project:

1. Add test code in a folder named `[project root]\src\test\java\` folder.
1. Name the test class to match the class being tested (`Todo.java` can be tested by `TodoTest.java`), and put it in a package to match %%(reason: if packages are matched, the test class can access package-private members of the target class)%%.<br>
   For example,
   * Class being tested `seedu.duke.Todo`: `src\main\java\seedu\duke\Todo.java`
   * Test class `seedu.duke.TodoTest`: `src\test\java\seedu\duke\TodoTest.java`

<div class="indented-level2">

<tree>
:far-folder: [project root] %%e.g., C:\courses\project\\%%
  :far-folder: src\
    :far-folder: ==main==\
      :far-folder: java\
        :far-folder: seedu\
          :far-folder: duke\
            :far-file: ==ToDo==.java
    :far-folder: ==test==\
      :far-folder: java\
        :far-folder: seedu\
          :far-folder: duke\
            :far-file: ==ToDoTest==.java
</tree>
<br>
</div>
</div>

<!-- ======================================================== -->


<div id="add-junit-to-gradle">

## Configuring Gradle for JUnit

Update the `build.gradle` file to include JUnit as a dependency. Here are the relevant lines that needs to be in the `build.gradle` (change the version number as necessary):

**First, ensure the Java plugin is included**:

```groovy {heading="build.gradle"}
plugins {
    id 'java'
}
```

**Next add the following JUnit dependencies** to the `dependencies` block, to tell which JUnit libraries to be used:

```groovy {highlight-lines="2-3", heading="build.gradle"}
dependencies {
    testImplementation group: 'org.junit.jupiter', name: 'junit-jupiter-api', version: '5.10.0'
    testRuntimeOnly group: 'org.junit.jupiter', name: 'junit-jupiter-engine', version: '5.10.0'
}
```

**Finally, tell Gradle that JUnit is to be used as the testing tool** (and to configure a few aspects of how Gradle handles JUnit tests), as follows:

```groovy {heading="build.gradle"}
test {
    useJUnitPlatform()

    testLogging {
        events "passed", "skipped", "failed"

        showExceptions true
        exceptionFormat "full"
        showCauses true
        showStackTraces true
        showStandardStreams = false
    }
}
```

</div>
<box type="tip" seamless>

If using an IDE, restart the IDE after updating the `build.gradle` file.
</box>

<!-- ======================================================== -->

<div id="first-unit-test">

## Writing the First JUnit Test

**Add a test class**, while following [the conventions given earlier in this page](#conventions-to-follow). If you don't follow those conventions, Gradle will not be able to find your test class. For example, if you have a class `src\main\java\seedu\duke\Todo.java`, you can add a test class `src\`==test==`\java\seedu\duke\`==TodoTest.java==. Here's some sample code:

```java{.line-numbers highlight-lines="8,13", heading="src\test\java\seedu\duke\TodoTest.java"}
package seedu.duke;  //same package as the class being tested

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class DukeTest {
    @Test
    public void dummyTest(){
        assertEquals(2, 2);
    }

    @Test
    public void anotherDummyTest(){
        assertEquals(4, 4);
    }
}
```

</div>

**Run tests**, either using the Intellij UI (preferred -- this makes debugging failed test cases easier) or using Gradle itself, as explained in the section below.

<!-- ======================================================== -->

## Running Tests

{% set play_button = '<span class="text-success">:fas-play:</span>' %}

****In Intellij IDEA:****

* To run a specific JUnit test class (e.g., `src/test/java/seedu/DukeTest.java`), right-click on the test class, and choose {{ play_button }} `Run {classname}`.

<box type="tip" seamless>

If the above doesn't work, you may want to go to `File` > `Settings` and change the`Run tests using:` setting to `Intellij IDEA` (instead of `Gradle`), as shown below:

<panel header="Expand to see screenshot ..." peek no-close no-switch>

<annotate src="images/gradle/intellijRunTestsUsingIntellij.png">
<a-point x="59%" y="69%"><md><span style="background-color: white;" class="text-danger p-0 opacity-100"><small><small>&nbsp;&nbsp;&nbsp;Intellij IDEA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small></small></span></md></a-point>
</annotate>

</panel>
</box>

* To run all tests in a folder (e.g., `src/test/java` folder), right-click on the folder, and choose {{ play_button }} `Run Tests in '...'`.
* Other supported IDEs (e.g., Eclipse, NetBeans, VS Code, etc.) have similar mechanisms.

****Using Gradle:****

* To run all tests in the project, run the Gradle task `test` ([more info on running Gradle tasks](gradle.md#running-gradle-tasks))
* [If using Intellij UI to run the `test` task] The location of the `test` task in the Gradle task hierarchy is `Tasks -> verification -> test` (see screenshot below).<br>
    <pic src="images/junit/gradleTaskHierarchy.png" />

<div id="other-ways-of-running-tests">

****Other ways:****

* There is also [a way to run JUnit tests in the console (without Gradle or an IDE)](https://junit.org/junit5/docs/current/user-guide/#running-tests-console-launcher), which is not used as much as the above two methods.

</div>

<!-- ======================================================== -->

<div id="useful-test-cases">

## Writing Useful JUnit Tests

After you are able to run JUnit tests successfully using a dummy test class such as the above, you can add more tests and test classes as necessary.

To learn how to write useful JUnit test cases, refer to [this section](https://se-education.org/se-book/cppToJava/junit/basic/index.html) of our SE book. For a quick overview of more advanced JUnit features, refer to [this section](https://se-education.org/se-book/cppToJava/junit/intermediate/index.html).

</div>

<!-- ======================================================== -->

<div id="troubleshooting-junit">

## Troubleshooting JUnit

* **Problem:** Tests fail with at `ClassNotFoundException` error, although the supposedly-missing class is present.<br>
  **Solution:** Ensure the path of source and test files does not have Unicode characters (e.g., Chinese characters). Gradle sometimes fail to find files in a path that has Unicode characters.

</div>

<!-- ======================================================== -->

## Resources

* [JUnit 5 User Guide](https://junit.org/junit5/docs/current/user-guide/)
* [Gradle documentation for JUnit](https://docs.gradle.org/current/userguide/java_testing.html#using_junit5)
