{% set title="VS Code - Using the Debugger" %}
<frontmatter>
title: "{{ title }}"
pageNav: 2
</frontmatter>


{% from 'scripts/macros.njk' import show_docs_page_link, show_screenshot, show_youtube_video_segment with context %}
{% set video_id = "R1F5ihQKL4U" %}
{% set credit = "VS Code Docs" %}

<!-- ========================================================================== -->

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

This tutorial covers the basics of using VS Code’s debugger for Java features. 

* **If you are new to using an IDE-based debugger**, we recommend watching the video below for an introduction to the features of VS Code Java debugger. 

  <panel header=":fab-youtube: Debugging Java in VS Code" peek >

  @[youtube](R1F5ihQKL4U)

  </panel>

* **To recall how to use a specific feature**, you can refer to the sections below.

## Prerequisites

<include src="vscCreatingNewJavaProject.md#vsc-java-prereq" />

<!-- ========================================================================== -->
<div id="vscode-debugger-adding-breakpoints">

## Adding breakpoints

**Purpose:** A breakpoint is a line in the code at which the debugger will pause the execution.

**How:** Click in the left margin next to the line of code where you want to set the breakpoint. A red dot will appear in the margin.

{{ show_screenshot("images/vscodeDebugger/vsc_adding_breakpoint.png", credit, width="500") }}
<p/>

<box type="tip" seamless>
To remove the breakpoint, click the red dot again. Remember to remove breakpoints after you are done debugging that section, so they do not interfere when debugging other parts of the code later.
</box>

* The Debugger for Java supports various breakpoints, including line breakpoints, conditional breakpoints, data breakpoints, and logpoints.
* Different types of breakpoints can be added by **right-clicking in the left margin** and selecting which type of breakpoint you want to add (line breakpoints, conditional breakpoints, and logpoints).

{{ show_youtube_video_segment(video_id, "4", "57", "6", "04") }}
{{ show_docs_page_link("https://code.visualstudio.com/docs/java/java-debugging#_breakpoints", credit) }}
</div>
<!-- ========================================================================== -->

<div id="vscode-debugger-mode">

## Running the code in Debug mode

**Purpose:** To get VS Code to run the code in the debugger mode, so that the debugger can direct the execution flow as needed by the debugging.

**How:** There are multiple ways to run and debug your Java application using the extension. One way is to click on the dropdown arrow beside the play icon (top editor title bar) and select `Debug Java`
* Alternatively, you can press F5
* By default, the debugger will run out-of-box by automatically finding the main class and generating a default launch configuration in memory to launch your application.

{{ show_screenshot("images/vscodeDebugger/vsc_debug_mode.png", credit) }}
{{ show_youtube_video_segment(video_id, "4", "34", "5", "05") }}
{{ show_docs_page_link("https://code.visualstudio.com/docs/java/java-debugging#_run-and-debug", credit) }}
</div>
<!-- ========================================================================== -->
<div id="vscode-programe-state">

## Examining the state of the suspended programme

**Purpose:** To examine values of variables at different steps of the execution

**How:** Use the Debug Console panel at the bottom of the window. 
At each breakpoint, you can see:
* Variables: All local variables and their current values.
* Watch: You can add specific expressions to observe.
* Call Stack: Shows the current stack of method calls.
* Breakpoints: Lists all active breakpoints.

{{ show_screenshot("images/vscodeDebugger/vsc_prog_state.png", credit) }}
{{ show_youtube_video_segment(video_id, "8", "19", "8", "47") }}
{{ show_docs_page_link("https://code.visualstudio.com/docs/debugtest/debugging#_data-inspection", credit) }}
</div>
<!-- ========================================================================== -->
<div id="vscode-stepping-through-code">

## Stepping through code

**Purpose:** To move through code line by line and observe how it is executed

**How:** Click the Step Over button (curved arrow) in the debug toolbar, or press `F10`

{{ show_screenshot("images/vscodeDebugger/vsc_stepthrough.png", credit, width="250") }}
{{ show_youtube_video_segment(video_id, "8", "00", "8", "19") }}
{{ show_docs_page_link("https://code.visualstudio.com/docs/java/java-debugging#_step-filtering", credit) }}
</div>
<!-- ========================================================================== -->
<div id="vscode-stepping-into-code">

## Stepping into a method

**Purpose:** To enter a method being called on the current line to see how it behaves

**How:** Click the Step Into button (down arrow), or press `F11`

{{ show_screenshot("images/vscodeDebugger/vsc_stepthrough.png", credit, width="250") }}
{{ show_docs_page_link("https://code.visualstudio.com/docs/java/java-debugging#_step-filtering", credit) }}
</div>
<!-- ========================================================================== -->
<div id="vscode-stepping-out-of-code">

## Stepping out of a method

**Purpose:** To finish executing the current method and return to its caller, without stepping through the rest of it. 

**How:** Click the Step Out button (up arrow), or press `Shift+F11`

{{ show_screenshot("images/vscodeDebugger/vsc_stepthrough.png", credit, width="250") }}
{{ show_docs_page_link("https://code.visualstudio.com/docs/java/java-debugging#_step-filtering", credit) }}
</div>
<!-- ========================================================================== -->
<div id="vscode-conditional-breakpoint">

## Setting a Conditional Breakpoint

**Purpose:** To pause the execution at a certain breakpoint only when a certain condition is met (E.g. when i == 100)

**How:** 
* Right-click in the editor margin and select "Edit Breakpoint"
* Choose the type of condition you want to set (expression, hit count, or wait for breakpoint)

{{ show_screenshot("images/vscodeDebugger/vsc_cond_breakpoint.png", credit) }}
{{ show_docs_page_link("https://code.visualstudio.com/docs/debugtest/debugging#_conditional-breakpoints", credit) }}
</div>
<!-- ========================================================================== -->
<div id="vscode-data-breakpoint">

## Setting a Data Breakpoint

**Purpose:** To pause the execution at a certain breakpoint when a variable changes its value

**How:** 
* First, run the application and break on a normal breakpoint
* Then pick a field in the VARIABLES view and set a data breakpoint

{{ show_screenshot("images/vscodeDebugger/vsc_data_breakpoint.png", credit) }}
{{ show_docs_page_link("https://code.visualstudio.com/docs/java/java-debugging#_breakpoint-data-breakpoint", credit) }}
</div>
<!-- ========================================================================== -->
<div id="vscode-logpoint">

## Setting a Logpoint

**Purpose:** To send output to the Debug Console without editing code, and without stopping execution flow

**How:** 
* Right click in the editor margin and select "Add Logpoint" 
* Enter the value that you want to be output in the Debug Console (e.g. the value of results.size() in a loop)

{{ show_screenshot("images/vscodeDebugger/vsc_logpoint.png", credit) }}
{{ show_docs_page_link("https://code.visualstudio.com/docs/java/java-debugging#_breakpoint-logpoints", credit) }}
</div>
<!-- ========================================================================== -->
<div id="vscode-evaluate-expression">

## Evaluating Expressions

**Purpose:** Allows you to compute the value of an expression at a specific point during execution, enabling dynamic inspection of variables and data structures.

**How:** Enter through the WATCH window, or the Debug Console

{{ show_docs_page_link("https://code.visualstudio.com/docs/java/java-debugging#_expression-evaluation", credit) }}
</div>
<!-- ========================================================================== -->
<div id="vscode-advanced-features">

## Advanced Debugging Features

### Hot-Code Replace

**Purpose:** Allows you to change and recompile code without restarting the debugging session, while paused at a breakpoint

{{ show_docs_page_link("https://code.visualstudio.com/docs/java/java-debugging#_hot-code-replace", credit) }}

### Configuration Options

**Purpose:** You can configure the debugger using the options and settings. JVM arguments and environment variables is easily done with launch options.

{{ show_docs_page_link("https://code.visualstudio.com/docs/java/java-debugging#_configuration-options", credit) }}

<!-- ========================================================================== -->

## Troubleshooting

If you encounter issues when using the VS Code debugger, refer to the detailed troubleshooting guide given [here](https://github.com/microsoft/vscode-java-debug/blob/main/Troubleshooting.md).


</div>
<!-- ========================================================================== -->

---

**Contributors**: Sulaksha Muthukrishnan ([@crmlatte](https://github.com/crmlatte))
