{% set title="Introduction to AI Tools" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

## A: Overview of Popular AI Tools

**Here are some widely used AI tools**, along with their unique features, availability, and resources:  
<div id="ai-tools-overview">

* **ChatGPT (OpenAI):**  
  * **Features:** Conversational AI, coding assistance, reasoning tasks, multimodal input (images + text).  
  * **Availability:** Free and paid tiers (e.g. GPT-4, GPT-5). Web UI and API.  
  * **Resources:** [OpenAI API Docs](https://platform.openai.com/docs)

* **Claude (Anthropic):**  
  * **Features:** Long context windows, alignment and safety focus, strong reasoning.  
  * **Availability:** Free and paid tiers, web and API.  
  * **Resources:** [Anthropic Docs](https://docs.anthropic.com/)

* **Gemini (Google DeepMind):**  
  * **Features:** Integrated with Google ecosystem, multimodal (text, images, audio), strong for research and coding.  
  * **Availability:** Accessible via Google AI platforms and some Google apps.  
  * **Resources:** Google AI developer docs.

* **GitHub Copilot (GitHub + OpenAI):**  
  * **Features:** IDE integration for real-time code completion, Copilot Chat (inside IDEs & GitHub), next-edit suggestions, and code review support.  
  * **Availability:** Subscription (Free, Pro, Team, Enterprise). Works in VS Code, JetBrains, Neovim, GitHub Web.  
  * **Resources:** [Copilot Docs](https://docs.github.com/en/copilot)

* **Windsurf:**  
  * **Features:** AI coding assistant with IDE plugin support, project-level context.  
  * **Availability:** Signup required; works in VS Code, IntelliJ.  
  * **Resources:** Official site/docs.

* **Perplexity AI:**  
  * **Features:** Combines search with conversational AI, always cites sources—useful for fact-checking and research.  
  * **Availability:** Free and Pro plans; web and mobile apps.  
  * **Resources:** [Perplexity.ai](https://www.perplexity.ai)

</div>

---

## B: Comparing the Tools

### B1: Conversational & Reasoning Models  
Best for brainstorming, Q&A, explanations, and reasoning-heavy tasks.  
**Examples:** ChatGPT, Claude, Gemini, Copilot Chat  

### B2: IDE-Integrated Coding Assistants  
Provide in-line completions, edits, and context-aware suggestions directly in your coding environment.  
**Examples:** GitHub Copilot, Windsurf  

### B3: Search-Integrated Models  
Blend web search with AI reasoning, grounding answers with sources.  
**Example:** Perplexity AI  

### B4: Model Choice by Task

| Task Type | Recommended Model Type | Why |
|-----------|-------------------------|-----|
| **General coding & writing** | Balanced models (GPT-4.1, GPT-5 Codex) | Strong across tasks, stable performance |
| **Quick/simple edits** | Low-latency models (o4-mini, Claude Sonnet 3.5) | Faster turnaround |
| **Deep reasoning / debugging** | High-capacity models (GPT-5, o3, Claude Opus, Gemini Pro) | Handle complex logic & large contexts |
| **Multimodal tasks** | Image+text models (GPT-4.1 Vision, Gemini 2.0) | Useful for diagrams, screenshots, UI input |

---

**Contributors**: Song Yuexi ([@YosieSYX](https://github.com/YosieSYX))
