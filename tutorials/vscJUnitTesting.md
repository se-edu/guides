{% set title="VS Code - Testing with JUnit" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

<box type="info" seamless>
This tutorial will help you:
- Set up JUnit support in a Gradle project using VS Code
- Write and run your first JUnit test
- Understand test folder structure and naming conventions
- View test results and coverage using VS Code

You should already be familiar with Java and Gradle basics before proceeding.
</box>

<!-- ======================================================== -->

## Prerequisites

<include src="vscCreatingNewJavaProject.md#vsc-java-prereq" />
<box type="tip" seamless>
Ensure you have installed the following extensions in VS Code:
- **Java Extension Pack** (includes Language Support, Debugger, Maven/Gradle tools)
- **Test Runner for Java** (for the Testing Explorer and test UI support)
</box>


<include src="junit.md#junit-use-gradle" />

This tutorial assumes you are using Gradle to manage JUnit.

<!-- ======================================================== -->

<include src="junit.md#add-junit-to-gradle" />

<box type="tip" seamless>

Restart VSCode after updating the build.gradle file, to ensure the changes take effect.
</box>
<box type="info" seamless>
 After restarting, check if the beaker **Testing** icon appears in the left sidebar of VS Code.
This confirms JUnit is correctly configured and detected by the IDE.
</box>

<!-- ======================================================== -->

<include src="junit.md#junit-conventions" />

<!-- ======================================================== -->
<box type="tip" seamless>
Here’s what a typical Gradle Java project folder structure looks like:

```text
your-project/
├── build.gradle
├── settings.gradle
└── src/
    ├── main/
    │   └── java/
    │       └── YourMainClass.java
    └── test/
        └── java/
            └── YourTestClass.java
```

* Place your actual application code in src/main/java/
* Place your JUnit test files in src/test/java/
</box>



<!-- ======================================================== -->

<include src="junit.md#first-unit-test" />

<box type="tip" seamless>

**VS Code Java extension helps generate test method skeletons.** Right-click in your Java file and click on `Source Action...`, then choose `Generate Tests...`.

* If triggered from a main class file, VS Code prompts you to choose methods to test. It generates skeleton test methods which you can fill in.
* If triggered from a test file, it offers options to choose the types of test methods to add, including lifecycle methods and standard test methods.
</box>

<!-- ======================================================== -->

## Running Tests

****Using VS Code:****

Hover your mouse over the test method or class, then click the **green play button** (▶) that appears to run the test.  ![VS Code Run Tests](images/vscJUnit/vscRunTest.png)
* The Testing Explorer is a tree view to show all the test cases in your workspace.
   Open the Testing Explorer by clicking the beaker icon in the left Activity Bar. You can run/debug tests and view their results from there as well.
   ![VS Code Testing Explorer](images/vscJUnit/vscTestingExplorer.png)

<!-- ======================================================== -->

## Checking Test Coverage

* **Right-click** on the test and choose `Run with Coverage`.
* After the test runs, **covered code** is highlighted in **light blue** in the source files.

<!-- ======================================================== -->

<include src="junit.md#useful-test-cases" />
To learn how to write good test cases, refer to [this section of the SE book](https://se-education.org/guides/tutorials/junit.html).


<!-- ======================================================== -->

---

**Contributors**: Song Yuexi ([@YosieSYX](https://github.com/YosieSYX)), Arshin Sikka ([@arshinsikka](https://github.com/arshinsikka))
