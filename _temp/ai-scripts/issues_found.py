ISSUES_FOUND = [
    ('* Keyboard shortcut: {{icon_windows}}/{{icon_linux}} ` Ctrl+` `` | {{icon_apple}} `` Ctrl+` `` (macOS uses `Control`, not `Cmd`, for this one)',
     '* Keyboard shortcut: {{icon_windows}}/{{icon_linux}} `` Ctrl+` `` | {{icon_apple}} `` Ctrl+` `` (macOS uses `Control`, not `Cmd`, for this one)',
     'tutorials/vscProductivityShortcuts.md',
     'Fix terminal shortcut markup'),  # [markup issue] Uses matching double-backtick code spans for the shortcut that contains a backtick.
    ('Select text vertically instead of line by line, especially useful for editing tables, columns, or aligned code.',
     'Select text vertically instead of line by line. This is especially useful for editing tables, columns, or aligned code.',
     'tutorials/vscProductivityShortcuts.md',
     'Clarify column selection description'),  # [grammar issue] Replaces a dangling modifier with a complete sentence.
    ('Comment or uncomment code without retyping, handy for debugging or testing different code paths.',
     'Comment or uncomment code without retyping. This is handy for debugging or testing different code paths.',
     'tutorials/vscProductivityShortcuts.md',
     'Clarify comment toggle description'),  # [grammar issue] Replaces a comma splice-like fragment with a complete sentence.
    ('You can adjust your VS Code layout quickly to maximise focus or view multiple panels at once.',
     'You can adjust your VS Code layout quickly to maximize focus or view multiple panels at once.',
     'tutorials/vscProductivityShortcuts.md',
     'Use US spelling for maximize'),  # [spelling issue] Uses US spelling for consistency with the tutorial style.
    ('Hide panels when you need full screen space, then bring them back when debugging or managing files.',
     'Hide panels when you need more screen space, then bring them back when debugging or managing files.',
     'tutorials/vscProductivityShortcuts.md',
     'Clarify workspace layout tip'),  # [phrasing issue] 'more screen space' is clearer than 'full screen space' here.
    ('All information, GIFs, and images on this page are adapted from the official [Visual Studio Code – Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks) documentation.',
     'All information and images on this page are adapted from the official [Visual Studio Code – Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks) documentation.',
     'tutorials/vscProductivityShortcuts.md',
     'Remove redundant image wording'),  # [verbosity issue] GIFs are images, so the separate mention is redundant.
]
