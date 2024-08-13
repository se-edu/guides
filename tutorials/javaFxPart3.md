<frontmatter>
  title: "JavaFX tutorial part 3 – Interacting with the user"
  pageNav: 2
</frontmatter>

# JavaFX tutorial part 3 – Interacting with the user

In part 3, we achieved the desired layout. Now let’s make the application respond to user input. Rather than doing everything in one try, let’s iterate and build up towards our final goal.

But first, here's some useful background info on how JavaFX deals with user interactions (e.g., a button click):
<box seamless>

JavaFX works in an _event-driven_ style -- that is, we programmatically define _handler_ methods to execute as a response to certain _events_.

"Events" are represented as objects of the [Event class](https://openjfx.io/javadoc/17/javafx.base/javafx/event/Event.html). Two of the most commonly used subclasses are [ActionEvent](https://openjfx.io/javadoc/17/javafx.base/javafx/event/ActionEvent.html) (e.g., a button press) and [InputEvent](https://openjfx.io/javadoc/17/javafx.graphics/javafx/scene/input/InputEvent.html) (e.g., a mouse click).

All UI components have a set of _set-handler-for-event_ methods to define handlers with respect to different events, which takes a handler method as the argument. Some of these methods are unique to the component, but most are inherited from the parent classes `Node`, `Control`, etc.
For example, the [Button](https://openjfx.io/javadoc/17/javafx.controls/javafx/scene/control/Button.html) class inherits <tooltip content="sets the response when the button is fired">`setOnAction`</tooltip> from parent [ButtonBase](https://openjfx.io/javadoc/17/javafx.controls/javafx/scene/control/ButtonBase.html#setOnAction(javafx.event.EventHandler)) and <tooltip content = "sets the response when a mouse click on the component is detected ">`setOnMouseClicked`</tooltip> from [Node](https://openjfx.io/javadoc/17/javafx.graphics/javafx/scene/Node.html).

When an event is detected, JavaFX will call the respective handlers that was previously 'set' for that event.

</box>


## Iteration 1 – Echoing the user

For Duke, there are two events that we want to respond to, namely the user pressing <kbd>Enter</kbd> key in the text box  and clicking the `Send` button. These map to the `onAction` event for the `TextField` and the `onMouseClicked` event for the `Button`, respectively.

First, let's #r#delete the following two lines## that show a dialog box by default:

```java{heading="Main.java" highlight-lines="7-8"}

    @Override
    public void start(Stage stage) {
        //Setting up required components
        // ...

        DialogBox dialogBox = new DialogBox("Hello!", userImage);
        dialogContainer.getChildren().addAll(dialogBox);

        // ...

        //Formatting the window to look as expected
        //...

    }

```

Then, add the following code:

```java{highlight-lines="8-16,19-26" heading="Main.java"}
    @Override
    public void start(Stage stage) {
        //Setting up required components
        //...

        //Formatting the window to look as expected
        //...

        //Handling user input

        sendButton.setOnMouseClicked((event) -> {
            handleUserInput();
        });
        userInput.setOnAction((event) -> {
            handleUserInput();
        });
    }

    /**
     * Creates a dialog box containing user input, and appends it to
     * the dialog container. Clears the user input after processing.
     */
    private void handleUserInput() {
        dialogContainer.getChildren().addAll(new DialogBox(userInput.getText(), user));
        userInput.clear();
    }
```

Run the program and give it a whirl! Ensure the GUI responds correctly to both ways of input i.e., hitting <kbd>Enter</kbd> after text entry, and hitting the `Send` button after text entry.

<pic src="images/javafx/EchoNotScrolling.png" width="450" />
<p/>

At first glance everything appears to work perfectly. Keep entering more text entries (or longer text entries) until the visible area fills up. You'll notice that when the chat entries fills up beyond scroll pane's display area, it does not scroll down automatically to show the latest entry, as expected. We can remedy this by attaching a handler on the `VBox` to react to its own size changing and scrolling the `ScrollPane` down.

Update the `Main#start` method as shown below:

```java{highlight-lines="6-7" heading="Main.java"}
    @Override
    public void start(Stage stage) {

        // current code ...

        //Scroll down to the end every time dialogContainer's height changes.
        dialogContainer.heightProperty().addListener((observable) -> scrollPane.setVvalue(1.0));
    }
```

Verify that the scroll pane now scrolls as intended.


## Iteration 2 – Adding dialog boxes for Duke's response

The next step is to enable Duke to respond to sent messages. On top of showing what the user sent, we need to take the response generated my the program and pass it to the UI components.

Now, let's add a method to  `Duke.java`, to generate responses for user messages. For the time being, let's keep the logic simple: Duke simply echos the user input, with the prefix `Duke heard: `.

```java{highlight-lines="6-11" heading="Duke.java"}
public class Duke {
    public static void main(String[] args) {
        System.out.println("Hello!");
    }

    /**
     * Generates a response for the user's chat message.
     */
    public String getResponse(String input) {
        return "Duke heard: " + input;
    }
}
```

Next, let's create an instance of this Duke object in the `Main` class (to be used for generating responses to user input).
```java{highlight-lines="9" heading="Main.java"}
//imports...

public class Main extends Application {

    //other variables

    private Image userImage = new Image(this.getClass().getResourceAsStream("/images/DaUser.png"));
    private Image dukeImage = new Image(this.getClass().getResourceAsStream("/images/DaDuke.png"));
    private Duke duke = new Duke();

    //...
}
````

Now, we can update the `handleUserInput()` as follows, to generate the response using the `duke` object.

```java{heading="Main.java"}
    private void handleUserInput() {
        String userText = userInput.getText();
        String dukeText = duke.getResponse(userInput.getText());
        dialogContainer.getChildren().addAll(
                new DialogBox(userText, userImage),
                new DialogBox(dukeText, dukeImage)
        );
        userInput.clear();
    }
```

Run the program and see how it works.

<pic src="images/javafx/DialogBoxesIteration2.png" width="450" />

## Iteration 3 – Adding custom behavior to DialogBox

One additional benefit of defining a custom control is that we can add behavior specific to our `DialogBox`. Let’s add a method to flip a dialog box such that it appears on the left edge, to differentiate between user input and Duke’s output.

```java{highlight-lines="1-3" heading="DialogBox.java"}
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.scene.Node;
//previous imports

//...

    /**
     * Flips the dialog box such that the ImageView is on the left and text on the right.
     */
    private void flip() {
        this.setAlignment(Pos.TOP_LEFT);
        ObservableList<Node> tmp = FXCollections.observableArrayList(this.getChildren());
        FXCollections.reverse(tmp);
        this.getChildren().setAll(tmp);
    }

    public static DialogBox getUserDialog(String s, Image i) {
        return new DialogBox(s, i);
    }

    public static DialogBox getDukeDialog(String s, Image i) {
        var db = new DialogBox(s, i);
        db.flip();
        return db;
    }
//...
```

Now, we can go back to the `Main` class and change the event handler to use our new ways of creating `DialogBox` instances.

```java{highlight-lines="5-6" heading="Main.java"}
    private void handleUserInput() {
        String userText = userInput.getText();
        String dukeText = getResponse(userInput.getText());
        dialogContainer.getChildren().addAll(
                DialogBox.getUserDialog(userText, userImage),
                DialogBox.getDukeDialog(dukeText, dukeImage)
        );
        userInput.clear();
    }
```

Run the application and play around with it.

<pic src="images/javafx/DialogBoxesIteration3.png" width="450" />

Congratulations!
You have successfully implemented a fully functional GUI for Duke! But there's more. Continue to the next section to find out.

## Exercises

1. While the GUI looks similar to the mockup, there are still parts that need to be refined. Try your hand at some of these tasks:
   * Add padding between each `DialogBox`
   * Add padding between each `ImageView` and its `Label`
   * Clip the `ImageView` into a circle
   * Add background color to each `DialogBox`

1. After attempting the changes, reflect critically on the following:
   * What was the development workflow like?
   * Is the code base well-organized?

[:fas-arrow-left: Previous](javaFxPart2.md) | [:fas-arrow-up: **ToC**](javaFx.md) | <span class="badge rounded-pill bg-primary">**++What's next?++**</span> [:fas-arrow-right: JavaFX tutorial part 4 - **Using FXML**](javaFxPart4.md)

--------------------------------------------------------------------------------
**Authors:**
* Initial Version: Jeffry Lum