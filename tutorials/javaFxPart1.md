<frontmatter>
  title: "JavaFX tutorial part 1 – Introduction"
  pageNav: 2
</frontmatter>

# JavaFX tutorial part 1 – Introduction

## Lifecycle of a JavaFX  application

Imagine yourself as a director of a play. First you provision the props that you will feature in your play. These can be hand props for your actors to interact with or even set dressings just to liven up the background. You then decide where to layout the props for every scene. With a proper script in hand, you can finally approach a theatre and request for a stage. There on, it’s just a matter of pulling the curtains on your masterpiece.

<puml src="images/javafx/JavaFxHierarchy.puml" />

A JavaFX application is like a play you are directing. Instead of creating props, you create `Nodes` (`Nodes` are the fundamental building blocks of a JavaFX application), and place them onto a `Scene` (a scene is a graph of `Node`s). Then, you set your `Scene` on a `Stage` provided by JavaFX. When you call `Stage#show()` method, JavaFX renders a window with your `Stage` on it.

## Setting up Java FX

Note: this tutorial assumes you will be using [Gradle](gradle.md) to manage dependencies of your project.

<div id="javafx-gradle">


Update your `build.gradle` to include the following lines:
```groovy
repositories {
    mavenCentral()
}

dependencies {
    String javaFxVersion = '17.0.7'

    implementation group: 'org.openjfx', name: 'javafx-base', version: javaFxVersion, classifier: 'win'
    implementation group: 'org.openjfx', name: 'javafx-base', version: javaFxVersion, classifier: 'mac'
    implementation group: 'org.openjfx', name: 'javafx-base', version: javaFxVersion, classifier: 'linux'
    implementation group: 'org.openjfx', name: 'javafx-controls', version: javaFxVersion, classifier: 'win'
    implementation group: 'org.openjfx', name: 'javafx-controls', version: javaFxVersion, classifier: 'mac'
    implementation group: 'org.openjfx', name: 'javafx-controls', version: javaFxVersion, classifier: 'linux'
    implementation group: 'org.openjfx', name: 'javafx-fxml', version: javaFxVersion, classifier: 'win'
    implementation group: 'org.openjfx', name: 'javafx-fxml', version: javaFxVersion, classifier: 'mac'
    implementation group: 'org.openjfx', name: 'javafx-fxml', version: javaFxVersion, classifier: 'linux'
    implementation group: 'org.openjfx', name: 'javafx-graphics', version: javaFxVersion, classifier: 'win'
    implementation group: 'org.openjfx', name: 'javafx-graphics', version: javaFxVersion, classifier: 'mac'
    implementation group: 'org.openjfx', name: 'javafx-graphics', version: javaFxVersion, classifier: 'linux'
}
```

</div>

<box type="tip" seamless>

After updating the `build.gradle` file, remember to reload the Gradle dependencies using your IDE UI, or by running the command `./gradlew clean build`. If using an IDE, you can restart the IDE for good measure.
</box>

## Writing your first program

As customary, let’s start off with a simple “Hello World” program. Let's say you have a class named `Duke` that you want make a GUI. First, modify the `Duke` class to extend `javafx.application.Application`. This requires you to override the `Application#start()` method and provide a concrete implementation. Notice that the method signature for `Application#start()` has a parameter `Stage`. This is the _primary stage_ that JavaFX provides.

```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.stage.Stage;

public class Duke extends Application {

    // ...

    @Override
    public void start(Stage stage) {
        Label helloWorld = new Label("Hello World!"); // Creating a new Label control
        Scene scene = new Scene(helloWorld); // Setting the scene to be our Label

        stage.setScene(scene); // Setting the stage to show our screen
        stage.show(); // Render the stage.
    }
}
```

Note how we have created a `Label` to contain the text that we want to show. We then create the `Scene` and set its content. Finally, we set the stage and show it.

Next, we create another Java class, `Launcher`, as an entry point to our application.
The `Launcher` class is reproduced below in its entirety.

```java
import javafx.application.Application;

/**
 * A launcher class to workaround classpath issues.
 */
public class Launcher {
    public static void main(String[] args) {
        Application.launch(Duke.class, args);
    }
}
```

JavaFX creates the `Application` instance by calling the no-argument constructor. So, you need to define a no-argument constructor in the `Duke` class (i.e., the `Application` subclass you use) if you don't have one already e.g.,

```java{highlight-lines="5-7"}
//...

public class Duke extends Application {

    public Duke() {
        // ...
    }

    // ...
}
```

However, if you do already have an existing constructor which takes arguments, you can proceed by creating an overloaded constructor with no arguments, passing the arguments to the existing constructor e.g.,

```java{highlight-lines="11-14"}
//...
private static final String DEFAULT_FILE_PATH = "duke/example.txt";

public class Duke extends Application {

    // Existing constructor
    public Duke(String filePath) {
        // ...
    }

    // Overloaded constructor
    public Duke() {
        this(DEFAULT_FILE_PATH);
    }

    // ...
}
```

This approach enables JavaFX to create the `Application` instance using the newly defined 
no-argument constructor, while preserving the functionality of the existing constructor.
Now, run `Launcher` and you should see something like this:

![Hello World](images/javafx/HelloWorld.png)

<box type="info" seamless>

The following warning issued by Java runtime can be ignored. This warning appears when you use a later JavaFX version (e.g., 17) with a JDK version that doesn't support the _modules_ feature yet (e.g., Java 11).

>WARNING: Unsupported JavaFX configuration: classes were loaded from 'unnamed module @...
</box>

Congratulations! You have created your first GUI application!

## Exercises

1. We mentioned that `Node`s are the fundamental building blocks of JavaFX and used a `Label` as our root node in the HelloWorld application.
   1. What are some of the other types of `Node`s?
   1. How does JavaFX group them?

1. `Node`s can be interacted with like Plain Old Java Objects (POJO).
   1. What properties of a `Label` can you change programmatically?
   1. Try changing the `Label` to have a font of Arial at size 50.

1. You’ve learnt that a `Stage` can be thought of as a window.
   1. Can you have more than one `Stage` an application?
   1. Try creating another stage and showing it! What happens?

[:fas-arrow-up: **ToC**](javaFx.md) | <span class="badge rounded-pill bg-primary">**++What's next?++**</span> [:fas-arrow-right: JavaFX tutorial part 2 - **Creating a GUI for Duke**](javaFxPart2.md)

--------------------------------------------------------------------------------
**Authors:**
* Initial Version: Jeffry Lum
