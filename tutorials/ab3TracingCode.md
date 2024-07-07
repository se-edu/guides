{% set title="AB3 Tutorial: Tracing Code" %}
---
title: "{{ title }}"
pageNav: 3
---

# {{ title }}

<link rel="stylesheet" href="images/tracing/static/tracing.css">
> Indeed, the ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code. …[Therefore,] making it easy to read makes it easier to write.
>
> —  Robert C. Martin Clean Code: A Handbook of Agile Software Craftsmanship

When trying to understand an unfamiliar code base, one common strategy used is to trace some representative execution path through the code base. One easy way to trace an execution path is to use a debugger to step through the code. In this tutorial, you will be using the IntelliJ IDEA’s debugger to trace the execution path of a specific user command.


<h2 id="before-we-start">Before we start</h2>

Before we jump into the code, it is useful to get an idea of the overall structure and the high-level behavior of the application. This is provided in the 'Architecture' section of the developer guide. In particular, the architecture diagram (reproduced below), tells us that the App consists of several components.

<pic src="https://se-education.org/addressbook-level3/images/ArchitectureDiagram.png" alt="ArchitectureDiagram" />

It also has a sequence diagram (reproduced below)
that tells us how a command propagates through the App.

<pic src="https://se-education.org/addressbook-level3/images/ArchitectureSequenceDiagram.png" width="550" />

Note how the diagram shows only the execution flows _between_ the main components. That is, it does not show details of the execution path *inside* each component. By hiding those details, the diagram aims to inform the reader about the overall execution path of a command without overwhelming the reader with too much details. In this tutorial, you aim to find those omitted details so that you get a more in-depth understanding of how the code works.

{% set dg_ref %}<span class="badge rounded-pill bg-info">:fas-arrow-right-long: DG</span>{% endset %}

Before we proceed, ensure that you have done the following:
1. As we go through this tutorial, we will be referring you to read corresponding sections of the AB3 Developer Guide, so that you can mentally connect the code you encounter with corresponding design descriptions. Given below is the first of such DG cross-references.<br>
   {{ dg_ref }} Read the [**_Architecture_ section** of the DG](https://se-education.org/addressbook-level3/DeveloperGuide.html#architecture).
1. Set up the project in Intellij IDEA.
1. Learn [basic debugging features of Intellij IDEA](intellijDebugger.md):
   * If you are using a different IDE, we'll leave it to you to figure out the equivalent feature to use in your IDE.
   * If you are not using an IDE, we'll let you figure out how to achieve the same using your coding toolchain.

## Setting a breakpoint

As you know, the first step of debugging is to put in a breakpoint where you want the debugger to pause the execution. For example, if you are trying to understand how the App starts up, you would put a breakpoint in the first statement of the `main` method.

In our case, we would want to begin the tracing at the very point where the App start processing user input (i.e., somewhere in the UI component), and then trace through how the execution proceeds through the UI component. However, the execution path through a GUI is often somewhat obscure due to various <popover content="**More on _event-driven mechanisms_**: Unlike command-line programs, GUI applications respond to user actions (like clicks and keystrokes) and other events, triggering various event _listeners_ and _handlers_. This non-linear flow of control can make it difficult to trace and debug the sequence of operations, as the program reacts dynamically to different events, creating an obscure execution path.">*event-driven mechanisms*</popover>  used by GUI frameworks, which happens to be the case here too. Therefore, let us put the breakpoint where the `UI` transfers control to the `Logic` component.

<pic src="https://se-education.org/addressbook-level3/images/ArchitectureSequenceDiagram.png" width="550" />

According to the sequence diagram you saw earlier (and repeated above for reference), the `UI` component yields control to the `Logic` component through a method named `execute`. Searching through the code base for an `execute()` method that belongs to the `Logic` component yields a promising candidate in `seedu.address.logic.Logic`.

<img src="images/tracing/searchResultsForExecuteMethod.png" />

<box type="tip" seamless>

**Intellij Tip:** The ['**Search Everywhere**' feature](https://www.jetbrains.com/help/idea/searching-everywhere.html) can be used here. In particular, the '**Find Symbol**' ('Symbol' here refers to methods, variables, classes etc.) variant of that feature is quite useful here as we are looking for a _method_ named `execute`, not simply the text `execute`.
</box>

A quick look at the `seedu.address.logic.Logic` (an extract given below) confirms that this indeed might be what we’re looking for.

```java
public interface Logic {
    /**
     * Executes the command and returns the result.
     * @param commandText The command as entered by the user.
     * @return the result of the command execution.
     * @throws CommandException If an error occurs during command execution.
     * @throws ParseException If an error occurs during parsing.
     */
    CommandResult execute(String commandText) throws CommandException, ParseException;
...
}
```

But apparently, this is an interface, not a concrete implementation.
That should be fine because the [_Architecture_ section of the Developer Guide](https://se-education.org/addressbook-level3/DeveloperGuide.html#architecture) tells us that components interact through interfaces. Here's the relevant diagram:

<pic src="https://se-education.org/addressbook-level3/images/ComponentManagers.png" />

Next, let's find out which statement(s) in the `UI` code is calling this method, thus transferring control from the `UI` to the `Logic`.

<box type="tip" seamless>

**Intellij Tip:** The ['**Find Usages**' feature](https://www.jetbrains.com/help/idea/find-highlight-usages.html#find-usages) can find from which parts of the code a class/method/variable is being used.
</box>

<pic src="images/tracing/FindUsages.png" />

Bingo\! `MainWindow#executeCommand()` seems to be exactly what we’re looking for\!

Now let’s set the breakpoint. First, double-click the item to reach the corresponding code. Once there, click on the left gutter to set a breakpoint, as shown below.
 ![LeftGutter](images/tracing/LeftGutter.png)


## Tracing the execution path

At this point, you should have appreciated the general sequence diagram **shown** [above](#before-we-start)


For this code tracing,
we will explore the `EditCommand` which is a feature that allows users to edit exising person fields in AB3.

<box type="tip" seamless>
    Recall from the <a href="https://se-education.org/addressbook-level3/UserGuide.html#editing-a-person--edit">User Guide</a> that the <code>edit</code> command has the format: <code>edit INDEX [n/NAME] [p/PHONE] [e/EMAIL] [a/ADDRESS] [t/TAG]…</code>.
</box>

For this tutorial, we will be issuing the command <code>edit 1 n/Alice Yeoh</code>

Specifically,
we trace the following sequence diagram
which explores the `Logic` component in more detail which will be paramount to understanding other commands as well! 

<puml src="images/tracing/LogicSequenceDiagramWithMainWindow.puml" alt="Tracing an `edit` command with specific arguments"></puml>


<box type="tip" seamless>

**Tip:** Over the course of the debugging session, you will encounter every major component in the application. Try to keep track of what happens inside the component and where the execution transfers to another component.
</box>





### 1. MainWindow -> LogicManager

<annotate src="images/tracing/LogicSequenceDiagramWithMainWindow.png" width="900" alt="Sample Image">
  <!-- Set Legend to both -->
  <a-point x="26%" y="20%"  label="1"/>
</annotate>

1. To start the debugging session, simply `Run` \> `Debug Main`

1. When the GUI appears, enter `edit 1 n/Alice Yeoh` into the command box and press `Enter`.

1. The Debugger tool window should show up and show something like this:<br>
   ![DebuggerStep1](images/tracing/DebuggerStep1.png)

1. Use the _Show execution point_ feature to jump to the line of code that we stopped at:<br>
   ![ShowExecutionPoint](images/tracing/ShowExecutionPoint.png)<br>
   `CommandResult commandResult = logic.execute(commandText);` is the line that you end up at (i.e., the place where we put the breakpoint).

1. We are interested in the `logic.execute(commandText)` portion of that line so let’s _Step in_ into that method call:<br>
    ![StepInto](images/tracing/StepInto.png)

### 2. LogicManager -> AddressBookParser

<annotate src="images/tracing/LogicSequenceDiagramWithMainWindow.png" width="900" alt="Sample Image">
  <!-- Set Legend to both -->
  <a-point x="50.7%" y="29%"  label="2"/>
</annotate>


1. After stepping in, we note that `MainWindow` has passed control to the `Logic` component.

1. Specifically, We end up in `LogicManager#execute()` (not `Logic#execute` -- but this is expected because we know the `execute()` method in the `Logic` interface is actually implemented by the `LogicManager` class). Let’s take a look at the body of the method. Given below is the same code, with additional explanatory comments.

   **LogicManager\#execute().**

   ```java
   @Override
   public CommandResult execute(String commandText)
           throws CommandException, ParseException {

        //Logging, safe to ignore
        logger.info("----------------[USER COMMAND][" + commandText + "]");

        CommandResult commandResult;
        //Parse user input from String to a Command
        Command command = addressBookParser.parseCommand(commandText);
        //Executes the Command and stores the result
        commandResult = command.execute(model);

        try {
            //We can deduce that the previous line of code modifies model in some way
            // since it's being stored here.
            storage.saveAddressBook(model.getAddressBook());
        } catch (IOException ioe) {
            throw new CommandException(FILE_OPS_ERROR_MESSAGE + ioe, ioe);
        }

        return commandResult;
    }
   ```

1. `LogicManager#execute()` appears to delegate most of the heavy lifting to other components. Let’s take a closer look at each one.

1. _Step over_ the logging code since it is of no interest to us now.
   ![StepOver](images/tracing/StepOver.png)

1. _Step into_ the line where user input in parsed from a String to a Command, which should bring you to the `AddressBookParser#parseCommand()` method (partial code given below):

   ```java
   public Command parseCommand(String userInput) throws ParseException {
       ...
       final String commandWord = matcher.group("commandWord");
       final String arguments = matcher.group("arguments");
       ...
   ```

<h3 id="flow-3">3. AddressBookParser -> EditCommandParser</h3>


<annotate src="images/tracing/LogicSequenceDiagramWithMainWindow.png" width="900" alt="Sample Image">
  <!-- Set Legend to both -->
  <a-point x="60.7%" y="30%"  label="3"/>
  <a-point x="69%" y="53%"  label="4"/>
</annotate>


1. Now, `LogicManager` has passed control to `AddressBookParser`

1. _Step over_ the statements in that method until you reach the `switch` statement. The 'Variables' window now shows the value of both `commandWord` and `arguments`:<br>
    ![Variables](images/tracing/Variables.png)

1. We see that the value of `commandWord` is now `edit` but `arguments` is still not processed in any meaningful way.

1. Stepping through the `switch` block, we end up at a call to `EditCommandParser().parse()` as expected (because the command we typed is an edit command).

    ```java
    ...
    case EditCommand.COMMAND_WORD:
        return new EditCommandParser().parse(arguments);
    ...
    ```

1. Note that this creates the `EditCommandParser` first.


### 4. AddressBookParser -> EditCommand

1. `AddressBookParser` calling `parse(...)` of the newly created `EditCommandParser`. This is shown in the diagram [earlier when EditCommand was created](#flow-3).

1. Let’s see what `EditCommandParser#parse()` does by stepping into it. You might have to click the 'step into' button multiple times here because there are two method calls in that statement: `EditCommandParser()` and `parse()`.

   <box type="tip" seamless>

   **Intellij Tip:** Sometimes, you might end up stepping into functions that are not of interest. Simply use the `step out` button to get out of them!
   </box>

1. Stepping through the method shows that it calls `ArgumentTokenizer#tokenize()` and `ParserUtil#parseIndex()` to obtain the arguments and index required.

1. The rest of the method seems to exhaustively check for the existence of each possible parameter of the `edit` command and store any possible changes in an `EditPersonDescriptor`. Recall that we can verify the contents of `editPersonDesciptor` through the 'Variables' window.<br>
   ![EditCommand](images/tracing/EditCommand.png)

1. As you just traced through some code involved in parsing a command, you can take a look at this class diagram to see where the various parsing-related classes you encountered fit into the design of the `Logic` component.
   <pic src="https://se-education.org/addressbook-level3/images/ParserClasses.png" width="600"/>

1. Let’s continue stepping through until we return to `LogicManager#execute()`.

    The sequence diagram below shows the details of the execution path through the Logic component. Does the execution path you traced in the code so far match the diagram?<br>
    <puml src="images/tracing/LogicSequenceDiagram.puml" alt="Tracing an `edit` command through the Logic component"/>

1. Now, step over until you read the statement that calls the `execute()` method of the `EditCommand` object received, and step into that `execute()` method (partial code given below):

   **`EditCommand#execute()`:**
   ```java
   @Override
   public CommandResult execute(Model model) throws CommandException {
       ...
       Person personToEdit = lastShownList.get(index.getZeroBased());
       Person editedPerson = createEditedPerson(personToEdit, editPersonDescriptor);
       if (!personToEdit.isSamePerson(editedPerson) && model.hasPerson(editedPerson)) {
           throw new CommandException(MESSAGE_DUPLICATE_PERSON);
       }
       model.setPerson(personToEdit, editedPerson);
       model.updateFilteredPersonList(PREDICATE_SHOW_ALL_PERSONS);
       return new CommandResult(String.format(MESSAGE_EDIT_PERSON_SUCCESS, editedPerson));
   }
   ```

1. As suspected, `command#execute()` does indeed make changes to the `model` object. Specifically,
   * it uses the `setPerson()` method (defined in the interface `Model` and implemented in `ModelManager` as per the usual pattern) to update the person data.
   * it uses the `updateFilteredPersonList` method to ask the `Model` to populate the 'filtered list' with _all_ persons.<br>
     FYI, The 'filtered list' is the list of persons resulting from the most recent operation that will be shown to the user immediately after. For the `edit` command, we populate it with all the persons so that the user can see the edited person along with all other persons. If this was a `find` command, we would be setting that list to contain the search results instead.<br>
     To provide some context, given below is the class diagram of the `Model` component. See if you can figure out where the 'filtered list' of persons is being tracked.<br>
     <pic src="https://se-education.org/addressbook-level3/images/ModelClassDiagram.png" width="450" /><br>
   * {{ dg_ref }} This is a good time to read through the [**_Model component_** section of the DG](https://se-education.org/addressbook-level3/DeveloperGuide.html#model-component)

1. As you step through the rest of the statements in the `EditCommand#execute()` method, you'll see that it creates a `CommandResult` object (containing information about the result of the execution) and returns it.<br>
   Advancing the debugger by one more step should take you back to the middle of the `LogicManager#execute()` method.<br>

1. Given that you have already seen quite a few classes in the `Logic` component in action, see if you can identify in this partial class diagram some of the classes you've encountered so far, and see how they fit into the class structure of the `Logic` component:
    <pic src="https://se-education.org/addressbook-level3/images/LogicClassDiagram.png" width="550"/>

   * {{ dg_ref }} This is a good time to read through the [**_Logic component_** section of the DG](https://se-education.org/addressbook-level3/DeveloperGuide.html#logic-component)

1. Similar to before, you can step over/into statements in the `LogicManager#execute()` method to examine how the control is transferred to the `Storage` component and what happens inside that component.

   <box type="tip" seamless>

   **Intellij Tip:** When trying to step into a statement such as `storage.saveAddressBook(model.getAddressBook())` which contains multiple method calls, Intellij will let you choose (by clicking) which one you want to step into.
   </box>

1. As you step through the code inside the `Storage` component, you will eventually arrive at the `JsonAddressBook#saveAddressBook()` method which calls the `JsonSerializableAddressBook` constructor, to create an object that can be _serialized_ (i.e., stored in storage medium) in JSON format. That constructor is given below (with added line breaks for easier readability):

    **`JsonSerializableAddressBook` constructor:**
    ```java
    /**
     * Converts a given {@code ReadOnlyAddressBook} into this class for Jackson use.
     *
     * @param source future changes to this will not affect the created
     * {@code JsonSerializableAddressBook}.
     */
    public JsonSerializableAddressBook(ReadOnlyAddressBook source) {
        persons.addAll(
            source.getPersonList()
                  .stream()
                  .map(JsonAdaptedPerson::new)
                  .collect(Collectors.toList()));
    }
    ```

1. It appears that a `JsonAdaptedPerson` is created for each `Person` and then added to the `JsonSerializableAddressBook`.
   This is because regular Java objects need to go through an _adaptation_ for them to be suitable to be saved in JSON format.

1. While you are stepping through the classes in the `Storage` component, here is the component's class diagram to help you understand how those classes fit into the structure of the component.<br>
   <pic src="https://se-education.org/addressbook-level3/images/StorageClassDiagram.png" width="550" />

   * {{ dg_ref }} This is a good time to read through the [**_Storage component_** section of the DG](https://se-education.org/addressbook-level3/DeveloperGuide.html#storage-component)

1. We can continue to step through until you reach the end of the `LogicManager#execute()` method and return to the `MainWindow#executeCommand()` method (the place where we put the original breakpoint).

1. Stepping into `resultDisplay.setFeedbackToUser(commandResult.getFeedbackToUser());`, we end up in:

    **`ResultDisplay#setFeedbackToUser()`**
    ```java
    public void setFeedbackToUser(String feedbackToUser) {
        requireNonNull(feedbackToUser);
        resultDisplay.setText(feedbackToUser);
    }
    ```

1. Finally, you can step through until you reach the end of`MainWindow#executeCommand()`.<br>
{{ dg_ref }} This is a good time to read through the [**_UI component_** section of the DG](https://se-education.org/addressbook-level3/DeveloperGuide.html#ui-component)


## Conclusion

In this tutorial, we traced a valid edit command from raw user input to the result being displayed to the user. From this tutorial, you learned more about how the various components work together to produce a response to a user command.

Here are some quick questions you can try to answer based on your execution path tracing. In some cases, you can do further tracing for the given commands to find exactly what happens.

1.  In this tutorial, we traced the "happy path" (i.e., no errors). What
    do you think will happen if we traced the following commands
    instead? What exceptions do you think will be thrown (if any), where
    will the exceptions be thrown and where will they be handled?

    1.  `redit 1 n/Alice Yu`

    2.  `edit 0 n/Alice Yu`

    3.  `edit 1 n/Alex Yeoh`

    4.  `edit 1`

    5.  `edit 1 n/アリス ユー`

    6.  `edit 1 t/one t/two t/three t/one`

2.  What components will you have to modify to perform the following
    enhancements to the application?

    1.  Make command words case-insensitive

    2.  Allow `delete` to remove more than one index at a time

    3.  Save the address book in the CSV format instead

    4.  Add a new command

    5.  Add a new field to `Person`

    6.  Add a new entity to the address book

[:fas-arrow-up: **ToC**](ab3.md) | <span class="badge rounded-pill bg-primary">**++What's next?++**</span> [:fas-arrow-right: **Adding a Command**](ab3AddRemark.md)