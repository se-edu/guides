{% set title="Adding AI Features to a Java App" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

<div id="body">

**Goal:** Learn how to integrate an LLM into a Java project, understand the agentic workflow architecture, and implement an AI-powered Help command.

## Prerequisites

* **Gradle-based Java Project:** A Java project set up with Gradle as the build tool. In this tutorial we assume you have a simple command-line Java application, but the concepts can be applied to any Java app.
* **LLM Access:** Obtain an API key for an LLM service (e.g., Groq).
  * If you don't have an API key for a hosted LLM, you can sign up at [Groq](https://console.groq.com/) (free-tier hosted models) and get your API key.<br>
    If you use a different provider later, only the model wiring changes; the agent flow stays the same.
   * Set the API key as an environment variable named `LLM_API_KEY` on your system, so that it can be accessed in your Java code.
     * :fab-windows: You can set environment variables via the System Properties → Environment Variables menu.
     * :fab-apple:/:fab-linux: You can add `export LLM_API_KEY=your_api_key_here` to your shell profile (e.g., `~/.bashrc`, `~/.zshrc`).
   * After setting the environment variable, restart your IDE or terminal to ensure the environment variable is loaded.

<box type="wrong" seamless icon=":fas-exclamation-triangle:">

**Don't leak your API key!**{.text-danger} To prevent leaking your API key (treat is as a 'password'), avoid hard-coding API keys directly in your source code or putting them inside version control.
</box>

## Step 1: Set up LLM integration

To integrate LLMs to your Java app, we will use [Langchain4j](https://docs.langchain4j.dev), a popular Java library for working with LLMs and building AI applications.

First, add the following dependencies to your Gradle build file (if using an IDE, reload the Gradle settings after updating):

```gradle
implementation 'dev.langchain4j:langchain4j-open-ai:1.10.0'
implementation 'dev.langchain4j:langchain4j:1.10.0'
```

Next, create a small test method (or a quick scratch class) to prove the LLM integration works:

```java
import dev.langchain4j.model.chat.ChatModel;
import dev.langchain4j.model.openai.OpenAiChatModel;

class AiTest {
    public static void main(String[] args) {
        ChatModel model = OpenAiChatModel.builder()
            .apiKey(System.getenv("LLM_API_KEY"))
            .baseUrl("https://api.groq.com/openai/v1")
            .modelName("llama-3.3-70b-versatile") // or another Groq model
            .build();
        String reply = model.chat("Tell me a joke about programming.");
        System.out.println(reply);
    }
}
```

<box type="warning" seamless>

**Intellij IDEA users:** If the above code still cannot load the API key from the environment (reason: Intellij might fail to load environment variables under some circumstances), you can set `LLM_API_KEY` as an environment variable _inside_ the IDE using [this technique](intellijUsefulSettings.html?cv-highlight=setting-env-variables).
</box>

## Step 2: Add a method to send a prompt to the LLM

Now, let's encapsulate the LLM call in a method that takes a prompt string and returns the LLM response.

```java
import java.util.List;

import dev.langchain4j.data.message.SystemMessage;
import dev.langchain4j.data.message.UserMessage;
import dev.langchain4j.model.chat.ChatModel;
import dev.langchain4j.model.chat.request.ChatRequest;
import dev.langchain4j.model.chat.response.ChatResponse;
import dev.langchain4j.model.openai.OpenAiChatModel;

class AiHelper {
    private final ChatModel model;

    public AiHelper() {
        this.model = OpenAiChatModel.builder()
            .apiKey(System.getenv("LLM_API_KEY"))
            .baseUrl("https://api.groq.com/openai/v1") // this varies based on LLM provider
            .modelName("llama-3.3-70b-versatile") // or another Groq model
            .build();
    }

    public ChatResponse getAiResponse(String systemPrompt, String userPrompt) {
        ChatRequest req = ChatRequest.builder()
                .messages(List.of(
                        SystemMessage.from(systemPrompt),
                        UserMessage.from(userPrompt)
                ))
                .build();

        ChatResponse res = model.chat(req);
        return res;
    }
}
```

<box type="info" seamless>

**What's in a Prompt?**{.text-info} A prompt to an LLM typically consists of two parts:

1. **System Prompt**: Instructions that define the LLM's role, behavior, and constraints. This sets the context for how the model should respond (e.g., `You are a helpful assistant for a CLI app`).
2. **User Prompt**: The actual query or request from the user that needs to be answered (e.g., `How do I add a task with a deadline?`).

</box>

## Step 3: Add the Ability to 'Query' the App's AI

Suppose your app is a CLI-centric task management app which already supports the following CLI command (if it doesn't, you can apply this tutorial to another command or a feature your app has):

> `help`: shows a list of commands with a brief description

Such a command is a good starting point since it is a read-only command that does not modify the app state.

Now, let us add a method (to a suitable class) that takes a natural language query (e.g., "is there a command to add priorities to tasks?") and returns an AI-generated natural language reply.

```java
String askAiAboutFeature(String userPrompt, AiHelper aiHelper) {
    String systemPrompt = "You are helping users of a CLI app. Answer the user's query about the features of the app, based on the app's commands given below. Limit your answer to one sentence.\n\n"
        + "1. todo <description> - Adds a todo task.\n"
        + "2. deadline <description> /by <date> - Adds a task with a deadline.\n"
        + "3. event <description> /at <date> - Adds an event task.\n"
        + "4. list - Lists all tasks.\n"
        + "5. done <task_number> - Marks a task as done.\n"
        + "6. delete <task_number> - Deletes a task.\n"
        + "7. help - Shows the help message.";

    return aiHelper.getAiResponse(systemPrompt, userPrompt).aiMessage().text();
}
```

Now, provide a way for users to call this method via the CLI, e.g., by adding a new command `@ai <query>` that invokes the AI helper method. Here's an example interaction:

> User: `@ai is there a command to add priorities to tasks?`
> App: `Currently, there is no in-built command to add priorities to tasks.`

## Step 4: Add the Ability to 'Command' the App via AI

Once you have the 'ask AI about features' command working, you can move to get the AI to perform commands given by the user, for example, `@ai add a task to buy groceries by tomorrow` could result in the app adding a new task `buy groceries` with `tomorrow` as the deadline.

To implement this, you can modify the system prompt to instruct the LLM to generate a valid app command based on the user's natural language request. Then, parse the LLM's response to extract and execute the command.

```java
String commandAiToPerform(String userPrompt, AiHelper aiHelper) {
    String systemPrompt = "You are an assistant for a CLI task management app. Based on the user's request, generate a valid command that the app understands."
        + "Only respond with the command, nothing else.\n\n"
        + "Available commands:\n"
        + "1. todo <description> - Adds a todo task.\n"
        + "2. deadline <description> /by <date> - Adds a task with a deadline.\n"
        + "3. event <description> /at <date> - Adds an event task.\n"
        + "4. list - Lists all tasks.\n"
        + "5. done <task_number> - Marks a task as done.\n"
        + "6. delete <task_number> - Deletes a task.\n"
        + "7. help - Shows the help message.";
    String command = aiHelper.getAiResponse(systemPrompt, userPrompt).aiMessage().text();

    if (isValidCommand(command)) {
        executeCommand(command);
        return "Command executed: " + command;
    } else {
        return "Sorry, I couldn't understand the command.";
    }
}
```

## Step 5: Next steps

With the basic AI integration in place, you can expand the capabilities further, to handle more complex queries/command, provide contextual help, assist with error handling, etc.

Before releasing the feature, you can consider further enhancements along the following directions:

* Guide the user in setting up the API key, in user documentation or as in-app instructions.
* Detect and inform the user if the API key is not configured as expected. Similarly, handle connectivity and AI service availability issues gracefully.
* Test the app with various inputs and fine-tune the system prompts to reduce unexpected or incorrect responses.
* Provide a way to undo AI-initiated commands, in case the AI misinterprets the user's intent. Alternatively, require user confirmation before executing AI-generated commands.
---

**Contributors**:

* Initial version: Aditya Misra ([@MadLamprey](https://github.com/MadLamprey))<br>
* Suggestions/feedback: [@broccoli0616](https://github.com/broccoli0616), [@FisherSkyi](https://github.com/FisherSkyi), [@grenn24](https://github.com/grenn24), [@hongxun03](https://github.com/hongxun03), [@iZUMi-kyouka](https://github.com/iZUMi-kyouka), [@joojaja](https://github.com/joojaja),[@jovnc](https://github.com/jovnc)

</div>
