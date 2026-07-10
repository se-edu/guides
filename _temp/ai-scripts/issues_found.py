ISSUES_FOUND = [
    ('Unlike IDE plugins such as Copilot or Windsurf, the Codex desktop app works as a standalone app. The IDE you use does not matter; what matters is that Codex can access the project folder and the project can be built/tested locally.',
     'Unlike IDE plugins such as Copilot or Windsurf, the Codex desktop app works as a standalone app. The IDE you use does not matter; what matters is that Codex can access the project folder and the project can be built and tested locally.',
     'tutorials/codexDesktop.md',
     'Use clearer build-and-test wording'),  # [phrasing issue] Replaces slash wording with clearer prose.
    ('  * Choose `+ New project`, select `Use an existing folder` to open a project that already exists on your computer.',
     '  * Choose `+ New project`, then select `Use an existing folder` to open a project that already exists on your computer.',
     'tutorials/codexDesktop.md',
     'Clarify project import step'),  # [grammar issue] Adds a connector between two actions.
    ('      For a project using Git, it is important to select the repository root and not the inner folders like src.',
     '      For a project using Git, it is important to select the repository root and not inner folders such as `src`.',
     'tutorials/codexDesktop.md',
     'Clarify Git root selection tip'),  # [phrasing issue] Makes the example folder reference clearer and preserves code formatting.
    ('**Using Codex for small, reviewable tasks** such as tweaking a UI component or refactoring a code fragment.',
     '**Use Codex for small, reviewable tasks**, such as tweaking a UI component or refactoring a code fragment.',
     'tutorials/codexDesktop.md',
     'Make usage example sentence grammatical'),  # [grammar issue] Turns a sentence fragment into a complete imperative sentence.
]
