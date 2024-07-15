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

Purpose: Breakpoints pause program execution at specific lines of code.

Usage: Place breakpoints at critical points where you want to examine the program state, such as method entry points or before complex operations.

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

Usage: Used to skip over lines of code that are not critical for understanding the current flow, such as logging or simple getter/setter methods.

### Stepping Into a Method Call

<box type="info" seamless>

**Video reference:** [13.05 - 13.35](https://youtu.be/1bCgzjatcr4?si=Vk1oOOivroWrIQ2a&t=785): Step into a method call with this button. Alternatively, you can use `F7`.
</box>

Purpose: Steps into the implementation of a method called at the current execution point.

Usage: Useful for delving into how specific methods work, especially when you want to understand detailed functionality.

### Stepping Out of a Method

<box type="info" seamless>

**Video reference:** [13.45 - 13.55](https://youtu.be/1bCgzjatcr4?si=IgOKAmIhwMjKHilN&t=825): Exit the method call with this button. Alternatively, you can use `Shift + F8`.
</box>

Purpose: Executes the remaining lines of code in the current method and returns to the caller.

Usage: Useful when you've stepped into a method and want to quickly return to the higher-level context without stepping through every line.

### Setting a Conditional Breakpoint

<box type="info" seamless>

**Video reference:** [15.20 - 16.45](https://youtu.be/1bCgzjatcr4?si=7-NJpfpqo5pWtkyW&t=920): Right click on the breakpoint and enter condition as a boolean.
</box>

Purpose: Executes the lines of code and pauses execution only when the condition is met.

Usage: Useful when you want the execution to pause only at a certain iteration of a loop.
