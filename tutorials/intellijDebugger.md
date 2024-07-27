{% set title="Intellij IDEA: Using the debugger" %}
---
title: "{{ title }}"
pageNav: 3
---

{% macro show_video(start_m, start_s, end_m, end_s, heading="") %}
{% set start_in_seconds = (start_m | int)*60 + (start_s | int) %}
{% set end_in_seconds = (end_m | int)*60 + (end_s | int) %}
<box type="important" icon=":fab-youtube:" seamless>

Video segment %%--{{ start_m }}.{{ start_s }} - {{ end_m }}.{{ end_s }}--%% : {{ heading }} <panel header="click here" minimized><iframe width="560" height="315" src="https://www.youtube.com/embed/1bCgzjatcr4?si=kQCMnmebYVV1QOwu&amp;start={{ start_in_seconds }}&amp;end={{ end_in_seconds }}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></panel>
</box>
{% endmacro %}

{% macro show_screenshot(src, credit="Intelli") %}
<div class="indented">

<pic src="{{ src }}" width="600" /><br>
----%%[image credit: {{ credit }}]%%----
</div>
{% endmacro %}

{% macro show_intellij_page(src) %}
<box type="info" icon=":fas-book:" seamless>

More info from Intellij is <a href="{{ src }}" target="_blank">here</a>.
</box>
{% endmacro %}

<!-- ========================================================================== -->

# {{ title }}

This tutorial covers basics of the Intellij IDEA's debugging features.

* **If you are new to using an IDE-based debugger**, we recommend that you watch the following video (from LaunchCode) which gives a pretty good explanation of how to use the IntelliJ IDEA debugger.

  <panel header=":fab-youtube: Debugging in IntelliJ" peek >

  @[youtube](1bCgzjatcr4)

  </panel>
* **To recall how to use a specific feature,** you can use the sections below.

<!-- ========================================================================== -->

## Setting breakpoints

**Purpose:** A breakpoint is a line in the code at which the debugger will pause the execution.

**How:** Click on the left gutter of the editor pane, at the line where you want to breakpoint. A red dot will appear to indicate the breakpoint.

{{ show_screenshot("https://resources.jetbrains.com/help/img/idea/2024.1/debug_line_breakpoint.png") }}
<p/>

<box type="tip" seamless>

To remove the breakpoint, click the red dot again.
</box>

{{ show_video("3", "09", "3", "30") }}

{{ show_intellij_page("https://www.jetbrains.com/help/idea/using-breakpoints.html") }}

<!-- ========================================================================== -->

## Running the code in 'debugger mode'

**Purpose:** To get Intellij to run the code in the debugger mode, so that the debugger can direct the execution flow as needed by the debugging.

**How:** There are several ways. One of them is to click the {{ icon_run_green }}  icon in the gutter near the class with the `main()` method and select `Debug`.

{{ show_screenshot("https://resources.jetbrains.com/help/img/idea/2024.1/debug_run_menu.png") }}
{{ show_video("3", "53", "4", "00") }}
{{ show_intellij_page("https://www.jetbrains.com/help/idea/starting-the-debugger-session.html") }}

<!-- ========================================================================== -->

## Examining the state of the suspended program

**Purpose:** To examine variable values at a specific step of the execution.

**How:** Use the Debugger tool window (the bottom part of the screenshot below). Ccurrent value of each variable is listed in the panel on the bottom right.

{{ show_screenshot("images/intellijDebugger/showingExecutionPoint.png", "LaunchCode") }}
{{ show_video("4", "41", "6", "06") }}
{{ show_intellij_page("https://www.jetbrains.com/help/idea/examining-suspended-program.html") }}

<!-- ========================================================================== -->

## Stepping through code

**Purpose:** Executes the current statement, and move to the next statement.

**How:** Click the `Step Over` button in the debugger toolbar, as shown below.

{{ show_screenshot("images/intellijDebugger/stepOverCode.png", "LaunchCode") }}
{{ show_video("7", "30", "7", "55") }}
{{ show_intellij_page("https://www.jetbrains.com/help/idea/stepping-through-the-program.html") }}

<!-- ========================================================================== -->

## Stepping _into_ a method

**Purpose:** Suppose the current statement calls another method, and you are interested to see how the execution goes through _that_ method. Here, you can _step into_ that method.

**How:** Click the `Step Into` button in the debugger toolbar, as shown below.

{{ show_screenshot("images/intellijDebugger/stepIntoCode.png", "LaunchCode") }}
{{ show_video("13", "05", "13", "35") }}
{{ show_intellij_page("https://www.jetbrains.com/help/idea/stepping-through-the-program.html#step-into") }}

<!-- ========================================================================== -->

## Stepping out of a method

**Purpose:** Executes the remaining lines of code in the current method and returns to the caller.<br>
Used when you've stepped into a method, stepped through some of it, and now want to return to the caller method without stepping through the remainder of the current method.

**How:** Click the `Step Out` button in the debugger toolbar, as shown below.

{{ show_screenshot("images/intellijDebugger/stepOutCode.png", "LaunchCode") }}
{{ show_video("13", "45", "13", "55") }}
{{ show_intellij_page("https://www.jetbrains.com/help/idea/stepping-through-the-program.html#step-out") }}

<!-- ========================================================================== -->

## Setting a conditional breakpoint

**Purpose:** To pause the execution at a certain breakpoint _only when a certain condition is met_ %%e.g., to stop at a breakpoint only when the 100th iteration of a loop%%.

**How:** Right-click on a breakpoint and enter a condition %%(e.g., `i == 5`)%%

{{ show_screenshot("images/intellijDebugger/conditionalBreakpoint.png", "LaunchCode") }}
{{ show_video("15", "20", "16", "45") }}

<!-- ========================================================================== -->

## Evaluate expression

**Purpose:** Allows you to compute the value of an expression at a specific point during execution, enabling dynamic inspection of variables and data structures.<br>
 %%e.g., while debugging, you want to find the result of expressions `truncate(myVariable * 2)` based on the current value `myVariable`%%

**How:** Enter it in the `Evaluate expression` field in the Variables pane (shown below) and press <kbd>Enter</kbd>.

{{ show_screenshot("images/intellijDebugger/evaluateExpression.png", "Tom Gregory Tech") }}
{{ show_intellij_page("https://www.jetbrains.com/help/idea/examining-suspended-program.html#evaluating-expressions") }}

<!-- ========================================================================== -->

### Set an exception breakpoint

**Purpose:** To pause execution whenever a specified exception is thrown, regardless of where it occurs in your code, making it easier to identify and diagnose issues.

**How:** Choose `Run` > `View Breakpoints` from the main menu, and use the :fas-plus: icon to add an exception breakpoint, as shown below.

{{ show_screenshot("images/intellijDebugger/exceptionBreakpoint.png", "Tom Gregory Tech") }}
{{ show_intellij_page("https://www.jetbrains.com/help/idea/using-breakpoints.html#exception-breakpoints") }}

--------------------------------------------------------------------------------
**Authors:**
* Initial Version: [@ruishanteo](https://github.com/ruishanteo)
