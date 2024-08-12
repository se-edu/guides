<frontmatter>
  title: "JavaFX tutorial part 3 – Interacting with the user"
  pageNav: 2
</frontmatter>

# JavaFX tutorial part 3 – Interacting with the user

Picking up from where we left off last tutorial, we have successfully achieved the desired layout. Now let’s make the application respond to user input. Rather than doing everything in one try, let’s iterate and build up towards our final goal.

But first, here's some useful background info on how JavaFX works:
<box seamless>

JavaFX works in an _event-driven_ style -- that is, we programmatically define _handler_ methods to execute as a response to certain _events_.

"Events" are represented as objects of the [Event class](https://openjfx.io/javadoc/17/javafx.base/javafx/event/Event.html). Two of the most commonly used subclasses are [ActionEvent](https://openjfx.io/javadoc/17/javafx.base/javafx/event/ActionEvent.html) (e.g., a button press) and [InputEvent](https://openjfx.io/javadoc/17/javafx.graphics/javafx/scene/input/InputEvent.html) (e.g., a mouse click).

All UI components have a set of _set-handler-for-event_ methods to define handlers with respect to different events, which takes a handler method as the argument. Some of these methods are unique to the component, but most are inherited from the parent classes `Node`, `Control`, etc.
For example, the [Button](https://openjfx.io/javadoc/17/javafx.controls/javafx/scene/control/Button.html) class inherits <tooltip content="sets the response when the button is fired">`setOnAction`</tooltip> from parent [ButtonBase](https://openjfx.io/javadoc/17/javafx.controls/javafx/scene/control/ButtonBase.html#setOnAction(javafx.event.EventHandler)) and <tooltip content = "sets the response when a mouse click on the component is detected ">`setOnMouseClicked`</tooltip> from [Node](https://openjfx.io/javadoc/17/javafx.graphics/javafx/scene/Node.html).

When an event is detected, JavaFX will call the respective handlers that was previously 'set' for that event.

</box>


## Iteration 1 – Echoing the user

For Duke, there are two events that we want to respond to, namely the user pressing `Enter` in the `TextField` and left-clicking the `Button`. These are the `onAction` event for the `TextField` and the `onMouseClicked` event for the `Button`.

For now, let’s have the application add a new `DialogBox` with the text from the `TextField`, so the user can see the message they have sent. Update the `Duke` class as follows.
```java
@Override
public void start(Stage stage) {
    //Step 1 code here

    //Step 2 code here
    //////Delete the following section//////
    //Label text = new Label("Hello!");
    //ImageView displayPicture = new ImageView(user);
    //DialogBox dialogBox = new DialogBox(text, displayPicture);
    //dialogContainer.getChildren().addAll(dialogBox);

    //Step 3. Add functionality to handle user input.
    sendButton.setOnMouseClicked((event) -> {
        handleUserInput();
    });

    userInput.setOnAction((event) -> {
        handleUserInput();
    });
}

/**
 * Iteration 1:
 * Creates a dialog box containing user input, and appends it to
 * the dialog container. Clears the user input after processing.
 */
private void handleUserInput() {
        Label userText = new Label(userInput.getText());
        dialogContainer.getChildren().addAll(
            new DialogBox(userText, new ImageView(user))
        );
        userInput.clear();
}
```

Run the program and give it a whirl!

![Echo not scrolling as intended](images/javafx/EchoNotScrolling.png)

At first glance everything appears to work perfectly. However, when the `VBox` stretches beyond the confines of the `ScrollPane`, the `ScrollPane` does not scroll down automatically as expected. We can remedy this by attaching a handler on the `VBox` to react to its own size changing and scrolling the `ScrollPane` down.

Update the `Duke.start` method as shown below.

```java
public void start(Stage stage) {
    // current code ...

    //Scroll down to the end every time dialogContainer's height changes.
    dialogContainer.heightProperty().addListener((observable) -> scrollPane.setVvalue(1.0));
}
```

Verify that the `ScrollPane` scrolls as intended. Feel free to use the following long message to test your program:
```java
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet dictum diam, eget venenatis ligula blandit sed. Pellentesque gravida, mauris ut consectetur porta, tellus odio porttitor purus, dignissim vehicula dui neque sit amet tellus. Donec ullamcorper odio eu urna hendrerit, et pharetra nisi vehicula. Vestibulum mattis faucibus nunc.amcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Maecenas gravida ante non erat iaculis, nec bibendum ligula porta. Donec sagittis ultrices justo, sed sollicitudin eros volutpat sit amet. Etiam hendrerit enim sed nibh volutpat, vel tincidunt augue vehicula. Suspendisse quis imperdiet felis, ut scelerisque nunc.
```

## Iteration 2 – Adding dialog boxes for Duke's response
The next step is to enable Duke to respond to sent messages. On top of showing what the user sent, we need to take the response generated my the program and pass it to the UI components.
Add a new method in `Duke` to handle user input:
```java
/**
 * Iteration 2:
 * Creates two dialog boxes, one echoing user input and the other containing Duke's reply and then appends them to
 * the dialog container. Clears the user input after processing.
 */
private void handleUserInput() {
    String userText = userInput.getText();
    String dukeText = getResponse(userInput.getText());
    dialogContainer.getChildren().addAll(
            new DialogBox(userText, userImage),
            new DialogBox(dukeText, dukeImage)
    );
    userInput.clear();
}

/**
 * You should have your own function to generate a response to user input.
 * Replace this stub with your completed method.
 */
private String getResponse(String input) {
    return "Duke heard: " + input;
}
```

Run the program and see how it works.

![DialogBoxes Iteration 2](images/javafx/DialogBoxesIteration2.png)

## Iteration 3 – Adding custom behavior to DialogBox

One additional benefit of defining a custom control is that we can add behavior specific to our `DialogBox`. Let’s add a method to flip a dialog box such that the image on the left to differentiate between user input and Duke’s output.

```java
/**
 * Flips the dialog box such that the ImageView is on the left and text on the right.
 */
private void flip() {
    this.setAlignment(Pos.TOP_LEFT);
    ObservableList<Node> tmp = FXCollections.observableArrayList(this.getChildren());
    FXCollections.reverse(tmp);
    this.getChildren().setAll(tmp);
}

public static DialogBox getUserDialog(Label l, ImageView iv) {
    return new DialogBox(l, iv);
}

public static DialogBox getDukeDialog(Label l, ImageView iv) {
    var db = new DialogBox(l, iv);
    db.flip();
    return db;
}
```

You'll need to update the imports as follows:
```java
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.geometry.Pos;
import javafx.scene.Node;
import javafx.scene.control.Label;
import javafx.scene.image.ImageView;
import javafx.scene.layout.HBox;
```

Now, we can go back to the `Duke` class and change the event handler to use our new `DialogBox`.

```java
private void handleUserInput() {
    Label userText = new Label(userInput.getText());
    Label dukeText = new Label(getResponse(userInput.getText()));
    dialogContainer.getChildren().addAll(
            DialogBox.getUserDialog(userText, new ImageView(user)),
            DialogBox.getDukeDialog(dukeText, new ImageView(duke))
    );
    userInput.clear();
}
```

Run the application and play around with it.

![DialogBoxes Iteration 3](images/javafx/DialogBoxesIteration3.png)

Congratulations!
You have successfully implemented a fully functional GUI for Duke!

## Exercises

1. While the GUI looks similar to the mockup, there are still parts that need to be refined. Try your hand at some of these tasks:
   * Add padding between each DialogBox
   * Add padding between each ImageView and its Label
   * Clip the ImageView into a circle
   * Add background color to each dialog box

1. After attempting the changes, reflect critically on the following:
   * What was the development workflow like?
   * Is the code base well-organized?

[:fas-arrow-left: Previous](javaFxPart2.md) | [:fas-arrow-up: **ToC**](javaFx.md) | <span class="badge rounded-pill bg-primary">**++What's next?++**</span> [:fas-arrow-right: JavaFX tutorial part 4 - **Using FXML**](javaFxPart4.md)

--------------------------------------------------------------------------------
**Authors:**
* Initial Version: Jeffry Lum
