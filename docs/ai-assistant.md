# The AI Assistant

Waveform includes an AI Assistant: a chat panel that lives in the Edit sidebar where you can talk to an AI in plain language and ask it to help with your project. You can ask it questions about how Waveform works, have it generate MIDI, get production tips, and even let it carry out actions for you, such as creating macros or assigning keyboard shortcuts. It keeps a memory between sessions, so over time it can remember things about how you like to work.

The assistant is powered by a cloud AI service (OpenAI or Anthropic) rather than running on your own computer. That has two important consequences you should understand before you start, and they're covered in full further down: the assistant sends your messages and information about your project to that service over the internet, and it bills against your own API key. Neither is hidden, but both are worth reading about before you rely on it.

> 📝 **Note:** The AI Assistant is a Waveform 14 feature. It also has to be switched on, and it needs an API key before it can respond. See *Getting set up* below.

## Getting set up

Before the assistant can do anything, two things have to be in place:

1. **The assistant has to be enabled.** Open the **Settings** tab, choose **AI** from the list on the left, and turn on **Enable AI Assistant**. This is what makes the **Assistant** panel appear in the Edit sidebar.
2. **You have to provide an API key.** On the same Settings > AI page, choose an **AI Provider** (OpenAI or Anthropic) and paste in that provider's API key. The key is what lets the assistant talk to the service, and it's what the provider uses to bill you.

The full details of the AI settings page — choosing a provider, where to get a key, and the buttons that open the assistant's files — are covered in *Reference: Settings > AI*. This chapter is about using the assistant once it's set up.

If you open the Assistant panel before everything is ready, the panel tells you what's missing rather than leaving you guessing:

- *"API key missing, please enter on the settings page"* — you haven't entered a key yet.
- *"Validating API Key"* — Waveform is checking the key you entered.
- *"Invalid API key, please check on the settings page"* — the key was rejected; double-check it on the settings page.

## Opening the panel

Once it's enabled, the assistant appears as an **Assistant** tab in the Edit sidebar. Click it to open the chat panel. There's no keyboard shortcut for it; you open it from the sidebar like the other side panels.

## Chatting with the assistant

The panel works like any chat: type a request into the message box at the bottom and send it. The assistant replies in the conversation above, streaming its answer as it goes.

- **Send a message** — type your request and send it. You can ask questions ("how do I freeze a track?") or ask for actions ("create a four-bar drum pattern").
- **Cancel a response** — if the assistant is in the middle of a long reply and you've seen enough, you can cancel it mid-stream rather than waiting for it to finish.
- **Start a new thread** — begin a fresh conversation when you want to change topic and not carry the previous context along. (The `/clear` slash command does the same thing.)
- **Saved conversations** — your chats are saved automatically, and you can reopen earlier ones from the conversations list to pick up where you left off or look back at something the assistant told you.

You can also choose which AI model answers you. The model selector includes an **auto** option, which lets Waveform pick a suitable model for each message automatically, along with controls for things like temperature and reasoning effort if you want to tune how the assistant responds.

## Slash commands

Typing a `/` at the start of your message brings up slash commands — shortcuts for common requests. The built-in commands are:

- **`/help`** — asks the assistant to describe the kinds of things it can help you with.
- **`/info <topic>`** — get detailed information about a specific topic.
- **`/clear`** — start a new conversation.
- **`/generate_midi <description>`** — generate a MIDI sequence from a description you give it.
- **`/production_tips <topic>`** — get production tips on a topic.

You can also add your own commands. Anything you put in your custom commands folder (reachable from Settings > AI) becomes a slash command the assistant recognises, alongside the built-in ones.

## Working with the results

When the assistant produces something you can use in your project — a MIDI sequence, a plugin preset, or a loop or sample — it appears as a draggable result chip in the conversation. You drag the chip straight out of the chat and drop it onto a track, just as you would drag an item out of the browser. For example, a generated MIDI sequence drops onto a track as a new MIDI clip.

If the assistant produces a script, the chip gives you the choice of running it straight away or saving it to your library to keep for later.

## What the assistant can do

Beyond answering questions, the assistant can act on Waveform and your project for you. Among the things it can do:

- Search the user manual to answer "how do I…" questions.
- Generate MIDI sequences from a description.
- Offer production tips.
- Create and run macros (the same JavaScript macros described in the *Macros* chapter).
- Assign and remove keyboard shortcuts.
- Search your library for presets, loops, and samples.
- Manage its own slash commands and Skills (reusable abilities you can give it).
- Read and write a persistent memory file so it can remember things across sessions.

## What the assistant can see

So that its help is relevant to what you're actually doing, the assistant is given context about your project with each message. This typically includes things like the tempo and time signature, the key and scale, the chord track's progression, arranger sections, whatever clip or plugin you currently have selected, and the contents of the Project Info field. This is why it can answer questions like "what key is this in?" or act on "the selected clip" without you having to spell everything out.

It's worth being aware that this same context is part of what gets sent to the cloud provider — see *Privacy and cost* below.

## Persistent memory

The assistant keeps a memory file on disk where it stores notes it has decided are worth remembering between conversations. This is how it can carry context from one session to the next. You can open the memory file yourself from Settings > AI (the **Show Memory** button) to see, edit, or clear what it has remembered.

## Privacy and cost

Because the assistant is powered by a third-party cloud service rather than running locally, two things are always true and worth keeping in mind:

> ⚠️ **Privacy:** Each time you send a message, your message and the project context described above — which can include notes on the selected clip, information about plugins, and the contents of the assistant's memory — are sent over the internet to the AI provider you chose (OpenAI or Anthropic). This data leaves your computer. Don't put anything in the chat, or in places the assistant can read, that you wouldn't be comfortable sending to that provider.

> ⚠️ **Cost:** The assistant uses your own OpenAI or Anthropic API key, and those providers bill you directly for what you use, typically per amount of text processed. Waveform doesn't run a shared AI service of its own and doesn't absorb this cost — usage is billed to your account by your provider.

## ⚡ Things to Watch Out For

- **The assistant won't respond until it's both enabled and has a valid key.** Switching on **Enable AI Assistant** is only half of it; you also need a provider and a working API key on the Settings > AI page. The panel will tell you which piece is missing.

- **It's a Waveform 14 feature.** The Assistant panel only appears in Waveform 14.

- **Your messages and project context leave your machine.** The assistant is a cloud service. Treat the chat as something you're sending to a third party, and be mindful of sensitive material.

- **You pay for what you use.** Usage is billed against your own API key by your provider, so heavy use has a real cost.

- **Memory persists across sessions.** The assistant remembers things in a file on disk. If you'd rather it forgot something, you can open and edit that file from Settings > AI.
