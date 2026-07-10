{% set title="VS Code - Productivity Shortcuts" %}
<frontmatter>
title: "{{ title }}"
pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

This guide introduces several **time-saving shortcuts and features in Visual Studio Code** that help you code, navigate, and manage your projects more efficiently.

## Command Palette 

The **Command Palette** gives quick access to **all commands** in VS Code without needing to navigate menus.
You can use it to run tasks, format code, open settings, manage extensions, and more.

* Open the Command Palette: {{icon_windows}}/{{icon_linux}} `Ctrl+Shift+P` | {{icon_apple}} `Cmd+Shift+P`
* Type the command name (e.g. “Format Document”, “Git: Commit”, “Reload Window”) and press `Enter`.

![Command Palette](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/OpenCommandPalette.gif)

<box type="info" seamless>
The Command Palette also lists keyboard shortcuts for many commands, helping you learn new ones as you go.
</box>

## Multi-cursor Editing

**Multi-cursor editing** allows you to place multiple cursors in different positions to edit text simultaneously.  
This is useful for renaming repeated variables, editing lists, or modifying multiple lines at once.

1. To add another cursor:
    * {{icon_windows}}/{{icon_linux}} `Alt+Click` | {{icon_apple}} `Option+Click`
1. To select the next occurrence of the current word:
    * {{icon_windows}}/{{icon_linux}} `Ctrl+D` | {{icon_apple}} `Cmd+D`
1. To select all occurrences:
    * {{icon_windows}}/{{icon_linux}} `Ctrl+Shift+L` | {{icon_apple}} `Cmd+Shift+L`

## Integrated Terminal

The **Integrated Terminal** lets you run command-line tools directly inside VS Code, avoiding context switching between your IDE and a separate terminal window.

![Integrated terminal](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/integrated_terminal.png)

* Keyboard shortcut: {{icon_windows}}/{{icon_linux}} `` Ctrl+` `` | {{icon_apple}} `` Ctrl+` `` (macOS uses `Control`, not `Cmd`, for this one)
* Alternatively, {{icon_windows}}/{{icon_linux}} `Ctrl+J` | {{icon_apple}} `Cmd+J`
    to open or hide the bottom panel, then select the **Terminal** tab if it isn’t active.

<box type="tip" seamless>
You can open multiple terminal tabs or split terminals to run parallel tasks such as testing and building.
</box>

## Faster Editing and Refactoring

These **editing shortcuts** are especially helpful for quick refactoring, aligning code, and maintaining a clean file layout.

### Rename Symbol
Rename variables, methods, or classes easily across the entire project.
Press `F2`, type the new name, and press `Enter`.
![Rename Symbol](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/rename_symbol.gif)

### Column (Box) Selection
Select text vertically instead of line by line. This is especially useful for editing tables, columns, or aligned code.
Hold {{icon_windows}}/{{icon_linux}} `Shift+Alt` | {{icon_apple}} `Shift+Option`, then **drag** with the mouse to create a rectangular selection.
![Column Box Selection](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/column-select.gif)

### Copy or Move Lines
Move or duplicate code quickly without using copy-paste.
* **Copy Line Up/Down:** {{icon_windows}}/{{icon_linux}} `Shift+Alt+Up/Down` | {{icon_apple}} `Shift+Option+Up/Down`
* **Move Line Up/Down:** {{icon_windows}}/{{icon_linux}} `Alt+Up/Down` | {{icon_apple}} `Option+Up/Down`

### Trim Trailing Whitespace
Remove unnecessary spaces at the end of lines to keep your files tidy.
* Keyboard shortcut: {{icon_windows}}/{{icon_linux}} `Ctrl+K Ctrl+X` | {{icon_apple}} `Cmd+K Cmd+X`
![Trim trailing whitespace](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/trim_whitespace.gif)

### Format Code
Automatically fix indentation and spacing so your code stays consistent and readable.
* **Format Selection:** {{icon_windows}}/{{icon_linux}} `Ctrl+K Ctrl+F` | {{icon_apple}} `Cmd+K Cmd+F`
* **Format Document:** {{icon_windows}}/{{icon_linux}} `Shift+Alt+F` | {{icon_apple}} `Shift+Option+F`

<box type="info" seamless>

To configure formatting rules or format automatically on save, see the [VS Code: Configuring the code style](vscCodeStyle.md) guide.
</box>

### Toggle Comments
Comment or uncomment code without retyping. This is handy for debugging or testing different code paths.
* **Toggle Line Comment:** {{icon_windows}}/{{icon_linux}} `Ctrl+/` | {{icon_apple}} `Cmd+/`
* **Toggle Block Comment:** {{icon_windows}}/{{icon_linux}} `Shift+Alt+A` | {{icon_apple}} `Shift+Option+A`

### Workspace Management
You can adjust your VS Code layout quickly to maximize focus or view multiple panels at once.

* **Toggle Sidebar:** {{icon_windows}}/{{icon_linux}} `Ctrl+B` | {{icon_apple}} `Cmd+B` — Show or hide the Explorer sidebar.
* **Toggle Bottom Panel:** {{icon_windows}}/{{icon_linux}} `Ctrl+J` | {{icon_apple}} `Cmd+J` — Show or hide the bottom panel (Terminal, Output, Problems, Debug Console).

<box type="tip" seamless>
Hide panels when you need more screen space, then bring them back when debugging or managing files.
</box>

## Code Navigation

Jump directly to where a symbol is defined to trace how different parts of a larger codebase connect.

* **Go to Definition:** `F12`, or {{icon_windows}}/{{icon_linux}} `Ctrl+Click` | {{icon_apple}} `Cmd+Click`

<box type="tip" seamless>

For more navigation features such as Peek Definition and Go to Super Implementation, see the [VS Code - Code Navigation](vscCodeNavigation.md) guide.
</box>

## Navigating Errors and Warnings

VS Code highlights syntax or compilation issues directly in the editor and lists them in the **Problems** panel.

* Open Problems panel: {{icon_windows}}/{{icon_linux}} `Ctrl+Shift+M` | {{icon_apple}} `Cmd+Shift+M`
* Click any entry to jump directly to that line of code.
* Hover over red or yellow squiggles in the editor to view issue details inline.

![Problems panel](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/Errors_Warnings.gif)

<box type="tip" seamless>
This helps you debug and clean up issues efficiently before committing or running your program.
</box>

## Markdown Preview

When working on README files or project documentation, VS Code can preview Markdown in real time.

* **Open Markdown Preview:** {{icon_windows}}/{{icon_linux}} `Ctrl+Shift+V` | {{icon_apple}} `Cmd+Shift+V`

![Markdown preview](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/markdown-preview.png)

* **Open Side-by-Side Preview:** {{icon_windows}}/{{icon_linux}} `Ctrl+K V` | {{icon_apple}} `Cmd+K V`

![Markdown preview](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/markdown-preview-side-by-side.png)

---
All information, animated GIFs, and images on this page are adapted from the official [Visual Studio Code – Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks) documentation. For more details and additional productivity tips, visit the official site.

**Contributors**: Jade Cheah ([@JadeCheah](https://github.com/JadeCheah))
