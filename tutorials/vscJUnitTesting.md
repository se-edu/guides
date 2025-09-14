{% set title="VS Code - Testing with JUnit" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

This tutorial covers the basics of using VS Code’s JUnit.

<!-- ======================================================== -->

## Prerequisites

<include src="vscCreatingNewJavaProject.md#vsc-java-prereq" />

## Setting Up JUnit with Gradle

#### Add Gradle Support

If your project doesn’t yet use Gradle, follow the [Gradle Tutorial](https://se-education.org/guides/tutorials/gradle.html) to set it up.

#### Add JUnit as a Dependency

This tutorial assumes you are using Gradle to manage JUnit.


Follow the instructions [here](https://se-education.org/guides/tutorials/junit.html#configuring-gradle-for-junit) to add the JUnit dependency.

<box type="tip" seamless>

Restart VSCode after updating the `build.gradle` file, to ensure the changes take effect.
</box>


## Writing Tests

You can create test classes in two ways:

1. **Manually**  
   Follow the [conventions](https://se-education.org/guides/tutorials/vscJUnitTesting.html#conventions-to-follow) and use the [sample test file](https://se-education.org/guides/tutorials/junit.html#writing-the-first-junit-test) as a reference.

2. **Using VS Code’s Java extension to generate test skeletons**  
   - **Right-click** in your Java file, select **`Source Action…`**, then choose **`Generate Tests…`**.  
   - **If triggered from a main class file**: VS Code prompts you to select the methods to test, then generates skeleton test methods for you to complete.  
   - **If triggered from an existing test file**: VS Code offers options to add various types of test methods, including lifecycle methods and standard test methods.



## Running Tests

* Use the **green play button** next to the class or method to run tests.
  ![VS Code Run Tests](images/vscJUnit/vscRunTest.png)
* The Testing Explorer is a tree view to show all the test cases in your workspace.
   Open the Testing Explorer by clicking the beaker icon in the left Activity Bar. You can run/debug tests and view their results from there as well.
   ![VS Code Testing Explorer](images/vscJUnit/vscTestingExplorer.png)

<!-- ======================================================== -->

## Checking Test Coverage

* **Right-click** on the test and choose `Run with Coverage`.
* After the test runs, **covered code** is highlighted in **light blue** in the source files.

<!-- ======================================================== -->

<include src="junit.md#useful-test-cases" />

<!-- ======================================================== -->

<include src="junit.md#troubleshooting-junit" />

<!-- ======================================================== -->

---

**Contributors**: Song Yuexi ([@YosieSYX](https://github.com/YosieSYX))
