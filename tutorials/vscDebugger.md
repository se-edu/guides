{% set title="VS Code: Using the Debugger" %}
---
title: "{{ title }}"
pageNav: 
---

{% macro show_video(start_m, start_s, end_m, end_s, heading="") %}
{% set start_in_seconds = (start_m | int)*60 + (start_s | int) %}
{% set end_in_seconds = (end_m | int)*60 + (end_s | int) %}
<box type="important" icon=":fab-youtube:" seamless>

Video segment %%--{{ start_m }}.{{ start_s }} - {{ end_m }}.{{ end_s }}--%% : {{ heading }}  
<panel header="click here" minimized><iframe width="560" height="315" src="https://www.youtube.com/embed/3HiLLByBWkg?start={{ start_in_seconds }}&end={{ end_in_seconds }}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></panel>
</box>
{% endmacro %}

{% macro show_screenshot(src, credit="VS Code Docs") %}
<div class="indented">
<pic src="{{ src }}" width="600" /><br>
----%%[image credit: {{ credit }}]%%----
</div>
{% endmacro %}

{% macro show_vscode_page(src) %}
<box type="info" icon=":fas-book:" seamless>

More info from VS Code Docs is <a href="{{ src }}" target="_blank">here</a>.
</box>
{% endmacro %}

<!-- ========================================================================== -->


# {{ title }}

This tutorial covers the basics of using VS Code’s debugger for Java features. 

* **If you are new to using an IDE-based debugger**, we recommend watching the video below for an introduction to the features of VS Code Java debugger. 

<panel header=":fab-youtube: Debugging in VS Code" peek >

  @[youtube](3HiLLByBWkg)

  </panel> 

* **To recall how to use a specific feature**, you can refer to the sections below.

## Getting Started:

For debugging in Java, you will need to download an extension from Visual Studio Marketplace. 
* Install the Debugger for Java extension which you will use to debug your code through VS Code. 
* To get the complete Java language support in Visual Studio Code, you can install the Extension Pack for Java, which includes the Debugger for Java extension.

<!-- ========================================================================== -->
<div id="vscode-debugger-adding-breakpoints">

## Adding breakpoints

**Purpose:** A breakpoint is a line in the code at which the debugger will pause the execution.

**How:** Click in the left margin next to the line of code where you want to set the breakpoint. A red dot will appear in the margin.

{{ show_screenshot("images/vscodeDebugger/vsc_adding_breakpoint.png") }}
<p/>

<box type="tip" seamless>
To remove the breakpoint, click the red dot again.
</box>

* The Debugger for Java supports various breakpoints, including line breakpoints, conditional breakpoints, data breakpoints, and logpoints.
* Different types of breakpoints can be added by **right-clicking in the left margin** and selecting which type of breakpoint you want to add (line breakpoints, conditional breakpoints, and logpoints).

{{ show_video("0", "30", "0", "50") }}

{{ show_vscode_page("https://code.visualstudio.com/docs/java/java-debugging#_breakpoints") }}

</div>
<!-- ========================================================================== -->

<div id="vscode-debugger-mode">

## Running the code in Debug mode

**Purpose:** To get VS Code to run the code in the debugger mode, so that the debugger can direct the execution flow as needed by the debugging.

**How:** There are multiple ways to run and debug your Java application using the extension. One way is to click on the drop down arrow beside the play icon (top editor title bar) and select `Debug Java`
* Alternatively, you can press F5
* By default, the debugger will run out-of-box by automatically finding the main class and generating a default launch configuration in memory to launch your application.

{{ show_screenshot("images/vscodeDebugger/vsc_debug_mode.png") }}

{{ show_video("0", "44", "1", "10") }}

{{ show_vscode_page("https://code.visualstudio.com/docs/java/java-debugging#_run-and-debug") }}

</div>
<!-- ========================================================================== -->
<div id="vscode-programe-state">

## Examining the state of the suspended programme:

**Purpose:** To examine values of variables at different steps of the execution

**How:** Use the Debug Console panel at the bottom of the window. 
At each breakpoint, you can see:
* Variables: All local variables and their current values.
* Watch: You can add specific expressions to observe.
* Call Stack: Shows the current stack of method calls.
* Breakpoints: Lists all active breakpoints.

{{ show_screenshot("images/vscodeDebugger/vsc_prog_state.png") }}

{{ show_video("1", "10", "1", "48") }}

{{ show_vscode_page("https://code.visualstudio.com/docs/debugtest/debugging#_data-inspection") }}

</div>
<!-- ========================================================================== -->

<div id="vscode-stepping-through-code">

## Stepping through code

**Purpose:** To move through code line by line and observe how it is executed

**How:** Click the Step Over button (curved arrow) in the debug toolbar, or press `F10`

{{ show_screenshot("images/vscodeDebugger/vsc_stepthrough.png") }}

{{ show_video("1", "54", "2", "09") }}

{{ show_vscode_page("https://code.visualstudio.com/docs/java/java-debugging#_step-filtering") }}
</div>
<!-- ========================================================================== -->
<div id="vscode-stepping-into-code">

## Stepping into a method: 

**Purpose:** To enter a method being called on the current line to see how it behaves

**How:** Click the Step into button (down arrow), or press `F11`

{{ show_screenshot("images/vscodeDebugger/vsc_stepthrough.png") }}

{{ show_video("2", "09", "2", "13") }}

{{ show_vscode_page("https://code.visualstudio.com/docs/java/java-debugging#_step-filtering") }}

</div>
<!-- ========================================================================== -->
<div id="vscode-stepping-out-of-code">

## Stepping out of a method: 

**Purpose:** To finish executing the current method and return to its caller, without stepping through the rest of it. 

**How:** Click the Step out button (up arrow), or press `Shift+F11`

{{ show_screenshot("images/vscodeDebugger/vsc_stepthrough.png") }}

{{ show_video("2", "13", "2", "22") }}

{{ show_vscode_page("https://code.visualstudio.com/docs/java/java-debugging#_step-filtering") }}

</div>
<!-- ========================================================================== -->
<div id="vscode-conditional-breakpoint">

## Setting a Conditional Breakpoint: 

**Purpose:** To pause the execution at a certain breakpoint only when a certain condition is met (E.g. when i == 100)

**How:** 
* Right-click in the editor margin and select Add Conditional Breakpoint
* Choose the type of condition you want to set (expression, hit count, or wait for breakpoint)

{{ show_screenshot("images/vscodeDebugger/vsc_cond_breakpoint.png") }}

{{ show_vscode_page("https://code.visualstudio.com/docs/debugtest/debugging#_conditional-breakpoints") }}

</div>
<!-- ========================================================================== -->
<div id="vscode-evaluate-expression">

## Evaluate Expression: 

**Purpose:** Allows you to compute the value of an expression at a specific point during execution, enabling dynamic inspection of variables and data structures.

**How:** Enter through the WATCH window, or the Debug Console

{{ show_vscode_page("https://code.visualstudio.com/docs/java/java-debugging#_expression-evaluation") }}

</div>
<!-- ========================================================================== -->