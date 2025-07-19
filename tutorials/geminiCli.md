{% set title="AI Coding Tools: Using Copilot in GitHub" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="vscode.md#wip-warning" />

## Prerequisites

* Ensure you have [Node.js version 20](https://nodejs.org/en/download) or higher installed.  
* A Google email account.

## Installing Gemini CLI
* Open your command prompt or terminal.  
* Run the following command to install Gemini CLI globally:  
  * `npm install -g @google/gemini-cli`  
* To launch the CLI, type `gemini` in your terminal.  
* When prompted, select a theme.  
* For authentication, choose `Login with Google`.  
* You will be redirected to your browser, and you will select the Google account you wish to use.  
* Once logged in, Gemini CLI will be ready to use in your terminal.

## Using Gemini CLI in your projects
* Open your project in your preferred IDE.  
* Open a new terminal using 
  * VSC: `Ctrl+Shift+\` or go to **Terminal → New Terminal**
  * IntelliJ: `Alt+F12` or go to **View → Tool Windows → Terminal**
* Run `gemini` to start a Gemini CLI session.  
* For more accurate responses, specify context files using `@path/to/file`. Typing `@` allows you to select files using arrow keys and `Enter`.  
* When prompted to allow execution, select `Yes, allow once` or `Yes, allow always`, then press `Enter`.

# Popular Commands
Here are some useful common commands you can use with Gemini CLI:
* **Exploring a new codebase**
  ```
  Describe the main pieces of this project
  ```
* **Understanding a Specific File**  
  ```
  @path/to/file  
  Describe what this file and its methods do  
  ```
* **Code assistance**  
  ```
  @path/to/file  
  Help me write a method to calculate the Fibonacci sequence  
  ```
* **Code debugging**  
  ```
  @path/to/file  
  My Java code throws an error at line 42\. Here is the error...  
  ```
* **Code style and linting**  
  ``` 
  Run Checkstyle on this Java file and fix any warnings  
  ```
* **Code refactoring**  
  ```
  @path/to/file
  Refactor this code to improve readability and performance
  ```
* **Code review**  
  ```
  @path/to/file
  Review this code and suggest improvements
  ```
* **Documentation generation**  
  ```
  @path/to/file
  Generate Javadoc comments for this Java file
  ```
* **Unit testing**  
  ```
  @path/to/file
  Write unit tests for this Java file using JUnit
  ```
* **Code compilation**  
  ```
  @path/to/file
  Compile this Java project and fix any errors
  ```

<box type="warning" seamless>

Gemini CLI is still in its early stages. The gemini-2.5-pro model generally performs well, but due to rate limits, usage with gemini-2.5-flash may vary and lead to reduced reliability.
</box>

## Relevant Resources
* [Gemini CLI Repository](https://github.com/google-gemini/gemini-cli)  
* [Advanced Gemini CLI commands](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/commands.md)
