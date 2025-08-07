{% set title="VS Code - Code Navigation" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

This guide covers the essential features in VS Code for navigating Java source code efficiently.

## Prerequisites

<include src="vscCreatingNewJavaProject.md#vsc-java-prereq" />

## Code Navigation

The Explorer view ({{ icon_windows }}/{{ icon_linux}} `Ctrl+Shift+E` | {{ icon_apple }} `Cmd+Shift+E`) is the main panel for navigating files and folders in your project. It also contains the Outline view for quick symbol navigation and the Java Projects view for managing your project's structure and dependencies.

### Outline view

The Outline view appears at the bottom of the Explorer view and displays the symbol tree of the currently open file. You can sort the Outline and enable/disable cursor tracking. Errors and warnings are also shown, making it easy to locate issues in the file.

![Outline view](https://code.visualstudio.com/assets/docs/getstarted/userinterface/outline-view.png)

### Projects view

The Java Projects view gives you an overview of your Java projects and their dependencies, and provides quick access to common project management tasks.

<box type="info" seamless>

The Java Projects view should appear at the bottom of the Explorer view by default. If you do not see it, try clicking the `...` (Views and More Actions...) button at the top right in the EXPLORER title bar and select **Projects**.
</box>

<box type="tip" seamless>
If the Java Projects or Outline view does not appear, ensure that:
- A Java file is currently open
- The Java Extension Pack is installed from the Extensions Marketplace
- Your project follows a recognized structure (e.g., `src/main/java`)
</box>

![Projects view](https://code.visualstudio.com/assets/docs/java/java-project/projectmanager-overview.png)

## Search for Symbols
Symbol search helps you quickly locate and jump to methods, classes, and variables across your codebase.

You can search for symbols in the current file or workspace to navigate your code more quickly.

To search for a symbol **in the current workspace**, press `Ctrl+T` (`Cmd+T` on Mac) and enter the name of the symbol, then select from the list of matches to navigate to its location.

<box type="info" seamless>

You can also use **Quick Open** (`Ctrl+P` / `Cmd+P` on Mac), then enter `#` to search the current workspace. `Ctrl+T` is simply the shortcut.
</box>

<video src="https://code.visualstudio.com/assets/docs/java/java-editing/search-in-workspace.mp4" controls width="700px">Your browser does not support the video tag.</video>

To search for a symbol **in the current file**, **Quick Open** (`Ctrl+P` / `Cmd+P` on Mac) and enter `@` before entering the name of the symbol, then select from the list of matches to navigate to its location.

<video src="https://code.visualstudio.com/assets/docs/java/java-editing/search-in-file.mp4" controls width="700px">Your browser does not support the video tag.</video>

<box type="tip" seamless>
You can enhance your use of **Quick Open** (`Ctrl+P` / `Cmd+P`) by using these special prefixes:
- `@` — Search symbols in the current file  
- `#` — Search symbols in the entire workspace  
- `:` — Go to a specific line number  
</box>

## Go to Definition

You can quickly view or navigate to the definition of a class, method, or variable in your code to understand and trace how different parts of your project are connected.

To view a symbol's definition without leaving your current location, place your cursor on the symbol and press `Alt+F12` (`Option+F12` on Mac). Alternatively, right-click on the symbol and select **Peek > Peek Definition** from the context menu.

To navigate to a symbol's definition, place your cursor on the symbol and press `F12`. Alternatively, right-click on the symbol and select **Go to Definition** from the context menu. If there are multiple definitions, you will be prompted to select the definition that you wish to navigate to.

## Go to Super Implementation

You can trace class implementations and overriding methods by hovering over the class or method and click **Go to Super Implementation** to navigate to its parent class or overridden method.

![Go to Super Implementation](https://code.visualstudio.com/assets/docs/java/java-editing/goto-super.png)

<video src="https://code.visualstudio.com/assets/docs/java/java-editing/goto-super-implementation.mp4" controls width="700px">Your browser does not support the video tag.</video>

## Call Hierarchy

You can view all calls from or to a function to understand the flow of your code and dependencies between functions. This is useful for understanding how your functions are connected and which parts of the code may affect each other.



To view the call hierarchy of a function, right-click on the function and select **Peek > Peek Call Hierarchy** to open in an inline panel, or select **Show Call Hierarchy** to open in the sidebar.

![Peek Call Hierarchy](https://code.visualstudio.com/assets/docs/java/java-editing/call-hierarchy.png)

![Show Call Hierarchy](https://code.visualstudio.com/assets/docs/java/java-editing/call-hierarchy.gif)

## Type Hierarchy

You can explore the inheritance relationships between classes and interfaces in your code to understand and navigate complex type hierarchies between Java Objects. Use this to visualize how your classes relate through inheritance, especially when working with abstract classes or interfaces.


To view the call hierarchy of a class or interface, right-click on the class or interface and select **Show Type Hierarchy** to open in the sidebar.

<video src="https://code.visualstudio.com/assets/docs/java/java-editing/type-hierarchy.mp4" controls width="700px">Your browser does not support the video tag.</video>

## Folding Regions

You can collapse or expand code blocks to focus on relevant sections of your code by clicking the folding icons in the gutter next to the line numbers or by using keyboard shortcuts:

* **Fold** (`Ctrl+Shift+[`) folds the innermost uncollapsed region at the cursor.
* **Unfold** (`Ctrl+Shift+]`) unfolds the collapsed region at the cursor.
* **Toggle Fold** (`Ctrl+K Ctrl+L`) folds or unfolds the region at the cursor.
* **Fold Recursively** (`Ctrl+K Ctrl+[`) folds the innermost uncollapsed region at the cursor and all regions inside that region.
* **Unfold Recursively** (`Ctrl+K Ctrl+]`) unfolds the region at the cursor and all regions inside that region.
* **Fold All** (`Ctrl+K Ctrl+0`) folds all regions in the editor.
* **Unfold All** (`Ctrl+K Ctrl+J`) unfolds all regions in the editor.

<video src="https://code.visualstudio.com/assets/docs/java/java-editing/folding-range.mp4" controls width="700px">Your browser does not support the video tag.</video>

---

**Contributors**: John Wong ([@Johnwz123](https://github.com/Johnwz123))
