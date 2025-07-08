{% set title="VS Code - Testing with JUnit" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="vscode.md#wip-warning" />

# {{ title }}

This tutorial covers the basics of using VS Code’s JUnit. 

## Prerequisites

<div id="vsc-java-prereq">

<box type="tip" seamless>

**Need help with following prerequisites?** Check out our [Preparing VS Code for Java](vscPreparingForJava.html) guide first.
</box>

* VS Code with the Extension Pack for Java installed
* Java Development Kit (JDK) installed (Version 1.8 or later)
</div>

## Setting up JUnit with Gradle

As JUnit is a third-party library, you need to explicitly add support for it in your project.

> **Tip:** If your project isn’t using Gradle yet, follow our [Gradle Tutorial](gradle.html) first. While it is possible to add JUnit to your project without Gradle, we recommend using Gradle as it can make things easier in the long run.

### Step 1: Add the Java plugin

In your `build.gradle` file, include the Java plugin:

```groovy
plugins {
    id 'java'
}
```

### Step 2: Add JUnit dependencies

Still in your `build.gradle`, add the following to the `dependencies` block:

```groovy
dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter-api:5.10.0'
    testRuntimeOnly 'org.junit.jupiter:junit-jupiter-engine:5.10.0'
}
```

### Step 3: Configure the test task

Also in `build.gradle`, configure the `test` block to use JUnit and display test logs:

```groovy
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

---

## Writing a JUnit Test

Create your test class inside the `src/test/java` directory. For example:

```java
package seedu.duke;  // same package as the class being tested

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class DukeTest {
    @Test
    public void dummyTest() {
        assertEquals(2, 2);
    }

    @Test
    public void anotherDummyTest() {
        assertEquals(4, 4);
    }
}
```

> 💡 **Tip:** VS Code Java extension helps generate test methods.  
> Right-click in your Java file and click on `Source Action...`, then choose `Generate Tests...`.
> If triggered from a main class file, VS Code prompts you to choose methods to test. It generates skeleton test methods which you can fill in.  
> If triggered from a test file, it offers options to choose the types of test methods to add, including lifecycle methods and standard test methods.


---

## Running JUnit Tests

- Use the **green play button** next to the class or method to run tests.
![VS Code Run Tests](images/vscJUnit/vscRunTest.png)
- The Testing Explorer is a tree view to show all the test cases in your workspace.
Open the Testing Explorer by clicking the beaker icon in the left Activity Bar. You can run/debug tests and view their results from there as well.
![VS Code Testing Explorer](images/vscJUnit/vscTestingExplorer.png)
---

## Checking Test Coverage

- **Right-click** on the test and choose `Run with Coverage`.
- After the test runs, **covered code** is highlighted in **light blue** in the source files.

---