# The AI Assistant

Waveform includes an AI Assistant: a chat panel that lives in the Edit sidebar where you can talk to an AI in plain language and ask it to help with your project. You can ask it questions about how Waveform works, have it generate MIDI, get production tips, and even let it carry out actions for you, such as creating macros or assigning keyboard shortcuts. It keeps a memory between sessions, so over time it can remember things about how you like to work.

The assistant doesn't include an AI of its own; you tell it which AI service to talk to. That choice is called a **profile**, and Waveform comes with three ready-made ones — **OpenAI API**, **Anthropic API** and **ChatGPT (Codex)** — as well as the ability to add your own, including one that points at an AI model running on your own computer.

Which profile you use matters for more than just the quality of the answers, because it decides where your messages go and who pays for them. The two cloud profiles that use an API key send your messages to that company and bill you for them; a local model keeps everything on your machine and costs nothing per message. Both are covered in *Privacy and cost* further down, and it's worth reading that section before you rely on the assistant.

> 📝 **Note:** The AI Assistant is a Waveform 14 feature. It also has to be switched on, and it needs a profile that can actually connect before it can respond. See *Getting set up* below.

## Getting set up

Before the assistant can do anything, two things have to be in place:

1. **The assistant has to be enabled.** Open the **Settings** tab, choose **AI** from the list on the left, and turn on **Enable AI Assistant**. This is what makes the **Assistant** panel appear in the Edit sidebar.
2. **You have to pick a profile and give it what it needs.** On the same Settings > AI page, choose an **Active Profile**. What appears underneath depends on which one you picked.

The three built-in profiles need different things from you:

- **OpenAI API** — paste in an OpenAI API key. You get the key from your OpenAI account, and OpenAI bills you for what you use.
- **Anthropic API** — the same, using a key from your Anthropic account.
- **ChatGPT (Codex)** — no key at all. This one borrows the sign-in you already have from the Codex CLI or the ChatGPT desktop app, so if you're signed in to either of those on this computer, the assistant can use it. The **Codex Sign-in** row on the settings page tells you whether a sign-in was found.

You can also add your own profile pointing at any OpenAI-compatible server, which is how you run the assistant against a model on your own computer. See *Using a local model* below.

The full details of the AI settings page — every profile setting, the connection test, and the buttons that open the assistant's files — are covered in *Reference: Settings > AI*. This chapter is about using the assistant once it's set up.

> 💡 **Tip:** Of the three built-in profiles, **ChatGPT (Codex)** is the quickest to get going with if you already have a ChatGPT subscription, because there's no key to create or paste. Be aware that it works by reusing another application's sign-in rather than through a published interface, so it can stop working without warning if that changes. The API key profiles are the more predictable choice if you'd rather not think about it.

If you open the Assistant panel before everything is ready, the panel tells you what's missing rather than leaving you guessing. With an API key profile you'll see one of:

- *"API key missing, please enter on the settings page"* — you haven't entered a key yet.
- *"Validating API Key"* — Waveform is checking the key you entered.
- *"Invalid API key, please check on the settings page"* — the key was rejected; double-check it on the settings page.

With the **ChatGPT (Codex)** profile the equivalent messages talk about the sign-in instead, telling you that no Codex sign-in was found, that Waveform is checking for one, or that the one it found can't be used at the moment.

## Opening the panel

Once it's enabled, the assistant appears as an **Assistant** tab in the Edit sidebar. Click it to open the chat panel. There's no keyboard shortcut for it; you open it from the sidebar like the other side panels.

## Chatting with the assistant

The panel works like any chat: type a request into the message box at the bottom and send it. The assistant replies in the conversation above, streaming its answer as it goes.

- **Send a message** — type your request and send it. You can ask questions ("how do I freeze a track?") or ask for actions ("create a four-bar drum pattern").
- **Cancel a response** — if the assistant is in the middle of a long reply and you've seen enough, you can cancel it mid-stream rather than waiting for it to finish.
- **Start a new thread** — begin a fresh conversation when you want to change topic and not carry the previous context along. (The `/clear` slash command does the same thing.)
- **Saved conversations** — your chats are saved automatically, and you can reopen earlier ones from the conversations list to pick up where you left off or look back at something the assistant told you.

You can also choose which AI model answers you. The model selector lists the active profile's models by name, and then, underneath, the models from any other profile that's currently working, written as *profile: model*. Picking one of those routes just this conversation elsewhere without changing your active profile — handy for asking one hard question of a cloud model while everything else stays local.

The selector also includes an **auto** option, which lets Waveform pick a suitable model for each message automatically, along with controls for things like temperature and reasoning effort if you want to tune how the assistant responds.

### Auto mode routing

Left alone, **auto** simply picks a sensible model from your active profile for each message. But you can also tell it exactly which profile and model to use, by sorting requests into three sizes on the Settings > AI page: **Fast Requests**, **Standard Requests** and **Heavy Requests**. Each can be pinned to a specific model on a specific profile, or left on *(Automatic)*.

This is what makes a mixed setup worthwhile. Pin the fast and standard tiers to a model running on your own computer and the heavy tier to a cloud model, and everyday chat costs you nothing and never leaves your machine, while the genuinely hard requests still go somewhere capable. Any tier you leave on *(Automatic)* falls back to your active profile as before.

## Using a local model

Instead of a cloud service, the assistant can talk to an AI model running on your own computer. Nothing you type leaves the machine, and there's nothing to pay per message. The trade-off is that you have to run the model yourself, and a model small enough to run comfortably on a laptop won't be as capable as the large cloud ones.

You need two things: a program that serves a model over an OpenAI-compatible interface, and a profile in Waveform pointing at it.

1. **Install and start a local server.** [LM Studio](https://lmstudio.ai) is the friendliest starting point; [Ollama](https://ollama.com), llama.cpp and vLLM all work too. Whichever you use, load a model and start its local server, then note the address it's listening on — typically something like `http://localhost:1234/v1`.
2. **Give the model enough context.** This matters more than it sounds. The assistant sends the model a substantial system prompt plus information about your project, so a model loaded with a small context window will fail as soon as a conversation gets going. Load it with **at least 16k tokens of context; 32k or more is better**. In LM Studio this is a setting on the model itself, not on the server.
3. **Add a profile in Waveform.** On the Settings > AI page, click **Add Profile**, give it a name, and paste the server's address into **Server URL**. Leave **API Dialect** on *OpenAI-compatible (Chat Completions)* unless your server specifically supports the newer Responses API.
4. **Test it.** Click **Test Connection**. The **Connection Status** row will tell you whether Waveform can reach the server and list the models it found — and will warn you if a loaded model's context window is too small to be usable, which is the most common thing to get wrong.

Once it's connected, select the profile as your **Active Profile** to use it for new chats, or leave a cloud profile active and route individual conversations or auto-mode tiers to the local one.

> 📝 **Note:** How well this works depends almost entirely on the model you load. The assistant asks a lot of whatever it's talking to — following instructions carefully and calling Waveform's own functions correctly — and small models can struggle with that even when the connection is perfect. If the assistant behaves oddly on a local model but fine on a cloud one, try a larger model before assuming something is broken.

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

If you're using one of the cloud profiles, this context is part of what gets sent to the provider along with your message — see *Privacy and cost* below.

## Persistent memory

The assistant keeps a memory file on disk where it stores notes it has decided are worth remembering between conversations. This is how it can carry context from one session to the next. You can open the memory file yourself from Settings > AI (the **Show Memory** button) to see, edit, or clear what it has remembered.

## Privacy and cost

Both of these depend entirely on which profile you're using, so it's worth being clear about which one you have selected.

> ⚠️ **Privacy:** With a cloud profile — **OpenAI API**, **Anthropic API** or **ChatGPT (Codex)** — each message you send, along with the project context described above (which can include notes on the selected clip, information about plugins, and the contents of the assistant's memory), is sent over the internet to that company. This data leaves your computer. Don't put anything in the chat, or in places the assistant can read, that you wouldn't be comfortable sending to them. With a profile pointing at a server on your own machine, none of this leaves your computer.

> ⚠️ **Cost:** The **OpenAI API** and **Anthropic API** profiles use your own API key, and those companies bill you directly for what you use, typically per amount of text processed. **ChatGPT (Codex)** draws on your existing ChatGPT subscription and its limits rather than a separate bill. A local model costs nothing per message. In none of these cases does Waveform run an AI service of its own or absorb the cost — whatever you use is between you and whoever provides it.

## ⚡ Things to Watch Out For

- **The assistant won't respond until it's both enabled and able to connect.** Switching on **Enable AI Assistant** is only half of it; the profile you've selected on the Settings > AI page also has to be working — a valid key, a usable Codex sign-in, or a reachable local server. The panel will tell you which piece is missing.

- **It's a Waveform 14 feature.** The Assistant panel only appears in Waveform 14.

- **With a cloud profile, your messages and project context leave your machine.** Treat the chat as something you're sending to a third party, and be mindful of sensitive material. Only a profile pointing at your own computer avoids this.

- **With an API key profile, you pay for what you use.** Usage is billed against your own key, so heavy use has a real cost. **ChatGPT (Codex)** spends your ChatGPT subscription's allowance instead, and a local model costs nothing.

- **Local models need a big context window.** A model loaded with less than 16k tokens of context will fail once a conversation gets going, and the failure won't obviously point at the cause. **Test Connection** on the settings page warns you about this before you hit it.

- **ChatGPT (Codex) relies on another application's sign-in.** It works by reusing the Codex CLI or ChatGPT desktop app's sign-in on this computer, which isn't something either of those promises to keep available. If it stops working, switch to an API key profile.

- **Memory persists across sessions.** The assistant remembers things in a file on disk. If you'd rather it forgot something, you can open and edit that file from Settings > AI.
