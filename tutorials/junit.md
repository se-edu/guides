<frontmatter>
  title: "Using JUnit"
  pageNav: 2
</frontmatter>

# Using JUnit

<div class="lead">

[JUnit](https://junit.org/junit5/) is a testing framework for Java.
</div>

Sections below explains how to use JUnit in a project.

<!-- --------------------------------------------------------------------------------------------------------- -->

## Conventions to follow

* Add test code in a folder named `[project root]\src\test\java\` folder.
* Name the test class to match the class being tested (`Todo.java` can be tested by `TodoTest.java`), and put it in a package to match. For example, 
  * Class being tested `seedu.duke.Todo`: `src\main\java\seedu\duke\Todo.java`
  * Test class `seedu.duke.TodoTest`: `src\test\java\seedu\duke\TodoTest.java`

<!-- --------------------------------------------------------------------------------------------------------- -->

## Adding JUnit support to your project

As JUnit is a third-party library, you need to add support to it specifically in your project.

<tabs> 
  <tab header="In Intellij, without Gradle">

1. Add a folder named `[project root]\src\test\java\`
1. Go to Intellij and add a new module to the project as follows.
   1. `File` → `New` → `Module From Existing Sources ...`
   1. Choose the `[project root]\src\test\` (not the `java`) folder.
   1. In the next screen, select `Create module from existing sources`
   1. Keep clicking `Next` until the process is complete
1. In the `Project` panel of Intellij, expand the newly-created `test` module, right-click on the `java` folder inside it, and choose `Mark Directory as` → `Test Source Root` (that will make the folder turn to green color).
1. Now, create a class inside the `java` folder and type `@Test` inside it. A code example given below.<br>
   {{ icon_info }} Note: If you are using packages, create this class in a matching package (to test `duke.Duke` class, create a `duke.DukeTest` i.e., in `src\test\java\duke\DukeTest.java`).
   ```java
   public class DukeTest {
       @Test
   }
   ```
1. Note how the `@Test` turn to red because Intellij (not having JUnit support yet) does not understand it. But it will pop up a hint, asking if you want to add support for JUnit. Select `Add JUnit 5.* to classpath`.
  1. In the dialog that pops up, you can optionally tick the `Sources`, `JavaDocs` and `Annotations` boxes. After that, click `OK` to add the JUnit 5 to the project dependencies.
1. To check if JUnit integration is working as expected,
   1. Add a dummy test method to the class e.g.,
      ```java
      import org.junit.jupiter.api.Test;
      
      import static org.junit.jupiter.api.Assertions.assertEquals;
      
      public class DukeTest {
          @Test
          public void dummyTest(){
              assertEquals(2, 2);
          }
      }
      ```
   1. Run the test (right-click on the class and choose `Run DukeTest`.
1. To be able to refer to `Duke` from `DukeTest` class, you need to add `main` module as a dependency of the `test` module you just created.
   * Option 1: When you add a reference to the `Duke` inside the `DukeTest`, Intellij will flag it as an error and will give you an option (i.e., in the bulb icon that pops up) to add the `main` module as a dependency.
   * Option 2: Follow the info [here](https://www.jetbrains.com/help/idea/working-with-module-dependencies.html) to add the dependency yourself.
  </tab>
  <tab header="With Gradle">

If you are new to Gradle, read the [_Gradle Tutorial_](gradle.html) first.

Here are the relevant lines to add to the `build.gradle` (change the version number as necessary):

```groovy {highlight-lines="2, 6-7", heading="buidl.gradle"}
test {
    useJUnitPlatform()
}

dependencies {
    testImplementation group: 'org.junit.jupiter', name: 'junit-jupiter-api', version: '5.4.0'
    testRuntimeOnly group: 'org.junit.jupiter', name: 'junit-jupiter-engine', version: '5.4.0'
}
```

</tab>
</tabs>

<br>

<!-- --------------------------------------------------------------------------------------------------------- -->

## Running tests

* In Injellij IDEA:
  * To run a specific JUnit test class (e.g., `src/test/java/DukeTest.java`), right-click on the test class, and choose `Run {classname}`.
  * To run all tests in a folder (e.g., `src/test/java` folder), right-click on the folder, and choose `Run tests in {folder name}`.
 * Using Gradle:
   * Run the `test` task

<!-- --------------------------------------------------------------------------------------------------------- -->

## Resources

* [JUnit 5 User Guide](https://junit.org/junit5/docs/current/user-guide/)
