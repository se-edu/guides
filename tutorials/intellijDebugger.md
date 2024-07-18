{% set title="Intellij IDEA: Using the debugger" %}
---
title: "{{ title }}"
pageNav: 3
---

# {{ title }}

Before diving into tracing code with IntelliJ IDEA’s debugger, it’s essential to understand key debugger features and their purpose.

This video (from LaunchCode) gives a pretty good explanation of how to use the IntelliJ IDEA debugger.

@[youtube](1bCgzjatcr4)

## Starting A Debugging Session

To utilise the debugger, we need to make sure that the code is running in debug mode.

### Run Debug Mode

<box type="info" seamless>

**Video reference:** [3.53 - 4.00](https://youtu.be/1bCgzjatcr4?si=fIEvUVhXHwKQeOlc&t=233): Run your program in debug mode to use debugging features.
</box>

Go to `Run` > `Debug 'Main'` or click on the bug icon in the top-right corner of the IntelliJ IDEA window.

### Setting Breakpoints

<box type="info" seamless>

**Video reference:** [3.09 - 3.30](https://youtu.be/1bCgzjatcr4?si=KkJw2Cri-ERmqgAJ&t=189): Set a breakpoint by clicking on the line number in the left gutter like this!
</box>

To set a breakpoint in IntelliJ IDEA:

- Click on the line number in the left gutter.

Breakpoints are useful for:

- Pausing execution at method entry points
- Examining the program state before complex operations

## Basic Debugger Features

Debugger features help you step through code systematically, inspect variable values, and understand program flow during execution. Here are the primary features you'll use:

### Showing Execution Point

<box type="info" seamless>

**Video reference:** [4.41 - 6.06](https://youtu.be/1bCgzjatcr4?si=RnzjFNpiqbBNpavA&t=281): You can see the values of each variable up to the execution point selected.
</box>

Use the values of each variable to ascertain if the logic of your code is correct.

### Stepping Over Code

<box type="info" seamless>

**Video reference:** [7.30 - 7.55](https://youtu.be/1bCgzjatcr4?si=SPlDTO7p7udhXBCC&t=450): Step over the current line of code to go to the next line with this button. Alternatively, you can use `F8`.
</box>

Purpose: Executes the current line of code without stepping into method calls.

Usage:

- Skip over lines of code that are not critical for understanding the current flow.
- Execute the current line of code and move on to the next.

### Stepping Into a Method Call

<box type="info" seamless>

**Video reference:** [13.05 - 13.35](https://youtu.be/1bCgzjatcr4?si=Vk1oOOivroWrIQ2a&t=785): Step into a method call with this button. Alternatively, you can use `F7`.
</box>

Purpose: Steps into the implementation of a method called at the current execution point.

Usage:

- Delving into how specific methods work, especially when you want to understand detailed functionality.
- Example: The current execution point calls a method, `addCommand.execute()` and you want to see how `execute()` works.

### Stepping Out of a Method

<box type="info" seamless>

**Video reference:** [13.45 - 13.55](https://youtu.be/1bCgzjatcr4?si=IgOKAmIhwMjKHilN&t=825): Exit the method call with this button. Alternatively, you can use `Shift + F8`.
</box>

Purpose: Executes the remaining lines of code in the current method and returns to the caller.

Usage:

- When you've stepped into a method and want to quickly return to the higher-level context without stepping through every line.
- Example: After looking at `execute()`, return to `addCommand.execute()` to continue tracing the code.

### Setting a Conditional Breakpoint

<box type="info" seamless>

**Video reference:** [15.20 - 16.45](https://youtu.be/1bCgzjatcr4?si=7-NJpfpqo5pWtkyW&t=920): Right click on the breakpoint and enter condition as a boolean.
</box>

Purpose: Executes the lines of code and pauses execution only when the condition is met.

Usage:

- Useful when you want the execution to pause only at a certain iteration of a loop.
- Example: Right-click on a breakpoint and enter a condition like `i == 5` to pause execution when the loop variable `i` equals 5.

## Additional Information

The debugger offers more features than those mentioned above. You might find this video useful.

@[youtube](IeUZZoZE3sU)

### Evaluate Expression

<box type="info" seamless>

**Video reference:** [8.17 - 9.14](https://youtu.be/IeUZZoZE3sU?si=61EqDEKO2Fs8ASdJ&t=495): Learn how to evaluate expressions on the fly while debugging.
</box>

Purpose: Allows you to compute the value of an expression at a specific point during execution, enabling dynamic inspection of variables and data structures.

Usage:

- Use the Evaluate Expression feature to test out snippets of code or check the current state of variables without modifying the codebase.
- Example: while debugging, you can enter expressions like myVariable \* 2 to see its current value multiplied by 2, or call functions directly to inspect their return values.

### Exception Breakpoint

<box type="info" seamless>

**Video reference:** [14.52 - 16.21](https://youtu.be/IeUZZoZE3sU?si=wSxsUQqAMKnfWYzN&t=892): Learn how to set exception breakpoints to catch errors in your code.
</box>

Purpose: An Exception Breakpoint allows you to pause execution whenever a specified exception is thrown, regardless of where it occurs in your code, making it easier to identify and diagnose issues.

Usage:

- Error Tracking: Set breakpoints for specific exceptions (e.g., NullReferenceException) to immediately investigate the state of your application when the error occurs.
- Debugging Flow: Helps in understanding the flow of your program and the conditions leading to exceptions.
