# The AI Assistant

Waveform includes an AI Assistant: a chat panel that lives in the Browser where you can talk to an AI in plain language and ask it to help with your project. You can ask it questions about how Waveform works, have it generate MIDI, get production tips, and even let it carry out actions for you, such as creating macros or assigning keyboard shortcuts. It keeps a memory between sessions, so over time it can remember things about how you like to work.

The assistant doesn't include an AI of its own; you tell it which AI service to talk to. That choice is called a **profile**, and Waveform comes with three ready-made ones (**OpenAI API**, **Anthropic API** and **ChatGPT (Codex)**), as well as the ability to add your own, including one that points at an AI model running on your own computer.

Which profile you use matters for more than just the quality of the answers, because it decides where your messages go and who pays for them. The two cloud profiles that use an API key send your messages to that company and bill you for them; a local model keeps everything on your machine and costs nothing per message. Both are covered in [Privacy and Cost](#privacy-and-cost) further down, and it's worth reading that section before you rely on the assistant.

> 📝 **Note:** The AI Assistant is available in all editions. It needs a profile that can actually connect before it can respond. See [Getting Set Up](#getting-set-up) below.

## Getting Set Up

Before the assistant can do anything, two things have to be in place:

1. **The assistant has to be enabled.** It is on by default. The **Enable AI Assistant** switch on the **Settings** tab's **AI** page (choose **AI** from the list on the left) is what makes the **Assistant** tab appear in the Browser, so check it's on if you can't see the tab.
2. **You have to pick a profile and give it what it needs.** On the same *Settings > AI* page, choose an **Active Profile**. What appears underneath depends on which one you picked.

The three built-in profiles need different things from you:

- **OpenAI API**: paste in an OpenAI API key. You get the key from your OpenAI account, and OpenAI bills you for what you use.
- **Anthropic API**: the same, using a key from your Anthropic account.
- **ChatGPT (Codex)**: no key at all. This one borrows the sign-in you already have from the Codex CLI or the ChatGPT desktop app, so if you're signed in to either of those on this computer, the assistant can use it. The **Codex Sign-in** row on the settings page tells you whether a sign-in was found.

You can also add your own profile pointing at any OpenAI-compatible server, which is how you run the assistant against a model on your own computer. See [Using a Local Model](#using-a-local-model) below.

The full details of the AI settings page (every profile setting, the connection test, and the buttons that open the assistant's files) are covered in [Reference: Settings > AI](reference-settings.md#ai). This chapter is about using the assistant once it's set up.

> 💡 **Tip:** Of the three built-in profiles, **ChatGPT (Codex)** is the quickest to get going with if you already have a ChatGPT subscription, because there's no key to create or paste. Be aware that it works by reusing another application's sign-in rather than through a published interface, so it can stop working without warning if that changes. The API key profiles are the more predictable choice if you'd rather not think about it.

If you open the Assistant tab before everything is ready, the panel tells you what's missing rather than leaving you guessing. With an API key profile you'll see one of:

- *"API key missing, please enter on the settings page"*: you haven't entered a key yet.
- *"Validating API Key"*: Waveform is checking the key you entered.
- *"Invalid API key, please check on the settings page"*: the key was rejected; double-check it on the settings page.

With the **ChatGPT (Codex)** profile the equivalent messages talk about the sign-in instead, telling you that no Codex sign-in was found, that Waveform is checking for one, or that the one it found can't be used at the moment.

## Opening the Panel

Once it's enabled, the assistant appears as an **Assistant** tab in the Browser. Click it to open the chat panel. There's no keyboard shortcut for it; you open it from the Browser like its other tabs.

## Chatting with the Assistant

The panel works like any chat: type a request into the message box at the bottom and send it. The assistant replies in the conversation above, streaming its answer as it goes.

- **Send**: sends your request. You can ask questions ("how do I freeze a track?") or ask for actions ("create a four-bar drum pattern").
- **Cancel** (stop icon): takes the place of Send while the assistant is working. Click it to stop a long reply mid-stream rather than waiting for it to finish. It also interrupts a local model that is still reading a long prompt.
- **New chat** (edit icon, top of the panel): begins a fresh conversation when you want to change topic and not carry the previous context along. (The `/clear` slash command does the same thing.)
- **Load** (history icon, top of the panel): your chats are saved automatically. Click the icon and pick an earlier conversation from the list to pick up where you left off or look back at something the assistant told you. Each chat gets a title written by a fast model from the same provider as the conversation, so a conversation with a local model stays local.

While the assistant works, a step list in the conversation shows what it is doing. Its heading reads *Working*, *Choosing a model* or *Thinking*, and any step that takes more than a moment gets its own line with a running time, such as *Searching the manual*, *Running a script* or *Working on a Cmajor patch*. Only the latest five steps stay in view; click *+N earlier steps* to see the rest. When the reply is finished the list folds up into one line showing how long the turn took and how many steps failed, if any. Click it to open the list again.

You can also choose which AI model answers you. The **Model** selector below the message box lists the active profile's models by name, and then, underneath, the models from any other profile that's currently working, written as *profile: model*. For the **OpenAI API**, **Anthropic API** and **ChatGPT (Codex)** profiles the list shows every chat model your account can use, so new models appear as soon as they are released. Picking one of those routes just this conversation elsewhere without changing your active profile. This is handy for asking one hard question of a cloud model while everything else stays local.

The selector also includes an **Auto** option (the default), which lets Waveform pick a suitable model for each message automatically. When you choose a specific model instead, two more controls appear beside it so you can tune how the assistant responds:

**Reasoning** (Choices: Minimal, Low, Medium, High): How much effort the model spends thinking before it answers.

**Temperature** (0-2): How varied the answers are. Lower values give more predictable replies. (Default: 0.7)

Both are hidden while **Model** is set to **Auto**, because Auto decides them for each message.

### Auto Mode Routing

Left alone, **Auto** picks a sensible model from your active profile for each message. But you can also tell it exactly which profile and model to use, by sorting requests into three sizes on the *Settings > AI* page: **Fast Requests**, **Standard Requests** and **Heavy Requests**. Each can be pinned to a specific model on a specific profile, or left on **(Automatic)**. The automatic Fast, Standard and Heavy models move up to the newest version of each model as it becomes available.

This is what makes a mixed setup worthwhile. Pin the fast and standard tiers to a model running on your own computer and the heavy tier to a cloud model, and everyday chat costs you nothing and never leaves your machine, while the genuinely hard requests still go somewhere capable. Any tier you leave on **(Automatic)** falls back to your active profile as before.

## Using a Local Model

Instead of a cloud service, the assistant can talk to an AI model running on your own computer. Nothing you type leaves the machine, and there's nothing to pay per message. The trade-off is that you have to run the model yourself, and a model small enough to run comfortably on a laptop won't be as capable as the large cloud ones.

You need two things: a program that serves a model over an OpenAI-compatible interface, and a profile in Waveform pointing at it.

1. **Install and start a local server.** [LM Studio](https://lmstudio.ai) is the friendliest starting point; [Ollama](https://ollama.com), llama.cpp and vLLM all work too. Whichever you use, load a model and start its local server, then note the address it's listening on, typically something like `http://localhost:1234/v1`.
2. **Give the model enough context.** This matters more than it sounds. The assistant sends the model a substantial system prompt plus information about your Edit, so a model loaded with a small context window will fail as soon as a conversation gets going, and the error won't obviously point at the cause. Load it with **at least 16k tokens of context; 32k or more is better**. In LM Studio this is a setting on the model itself, not on the server.
3. **Add a profile in Waveform.** On the *Settings > AI* page, click **Add Profile**, give it a name, and paste the server's address into **Server URL**. Leave **API Dialect** on **OpenAI-compatible (Chat Completions)** unless your server specifically supports the newer Responses API.
4. **Test it.** Click **Test Connection**. The **Connection Status** row will tell you whether Waveform can reach the server and list the models it found. It will also warn you if a loaded model's context window is too small to be usable, which is the most common thing to get wrong.

Once it's connected, select the profile as your **Active Profile** to use it for new chats, or leave a cloud profile active and route individual conversations or auto-mode tiers to the local one.

> 📝 **Note:** How well this works depends almost entirely on the model you load. The assistant asks a lot of whatever it's talking to (following instructions carefully and calling Waveform's own functions correctly), and small models can struggle with that even when the connection is perfect. If the assistant behaves oddly on a local model but fine on a cloud one, try a larger model before assuming something is broken.

## Slash Commands

Typing a `/` at the start of your message brings up slash commands: shortcuts for common requests. The built-in commands are:

- **`/help`**: asks the assistant to describe the kinds of things it can help you with.
- **`/info <topic>`**: get detailed information about a specific topic.
- **`/clear`**: start a new conversation.
- **`/generate_midi <description>`**: generate a MIDI sequence from a description you give it.
- **`/production_tips <topic>`**: get production tips on a topic.
- **`/mixcheck <platform>`**: measure your mix and check it's ready for release. Name a platform, such as *Spotify*, *Apple Music* or *broadcast*, or leave it out for streaming defaults. See [Checking Your Mix](#checking-your-mix) below.

You can also add your own commands. Anything you put in your custom commands folder becomes a slash command the assistant recognises, alongside the built-in ones. To open the folder, go to *Settings > AI*, and under **Assistant Files** click **Slash commands** on the **Show Commands** row.

## Working with the Results

When the assistant produces something you can use in your Edit (a MIDI sequence, a plugin preset, or a loop or sample), it appears as a draggable result chip in the conversation. You drag the chip straight out of the chat and drop it onto a track, just as you would drag an item out of the Browser. For example, a generated MIDI sequence drops onto a track as a new MIDI clip.

If the assistant produces a script, the chip gives you the choice of running it straight away or saving it to your library to keep for later.

## What the Assistant Can Do

Beyond answering questions, the assistant can act on Waveform and your Edit for you. Among the things it can do:

- Search the user manual to answer "how do I..." questions.
- Generate MIDI sequences from a description.
- Offer production tips.
- Create and run macros (the same JavaScript macros described in the [Macros](macros.md) chapter).
- Assign and remove keyboard shortcuts.
- Search your library for presets, loops, and samples.
- Manage its own slash commands and Skills (reusable abilities you can give it).
- Read and write a persistent memory file so it can remember things across sessions.
- Render your Edit and measure how it sounds. See [Checking Your Mix](#checking-your-mix) below.
- Build Cmajor audio effects and instruments <span class="pro">PRO</span>, in Waveform Pro. See [Building Cmajor Plugins](#building-cmajor-plugins) below.

## Checking Your Mix

The assistant can listen to your Edit in the only way it can: by rendering it and measuring the result. It renders to a temporary file, analyses it and deletes it, so nothing is added to your Edit. While it renders, a "Rendering..." overlay with a **Cancel** button covers the Edit, and you can't change the Edit until the render finishes. If you close the Edit or quit while it's rendering, Waveform asks whether to stop the render first. It can measure:

- **The whole mix**, e.g. "how loud is my mix?"
- **A section**, e.g. "check the chorus from bar 33 to 49".
- **Stems**, e.g. "which track is making the low end muddy?" - it renders each track separately and compares them.
- **One track on its own**, with any sidechains still feeding it.
- **An existing audio file**, such as a reference track you want to compare against.

For each render it reports:

- **Loudness**: integrated LUFS, maximum momentary and short-term loudness, loudness range, true peak, sample peak and clipped samples.
- **Dynamics**: crest factor and peak-to-loudness ratios, which show how compressed the mix is.
- **Spectrum**: the balance of low, mid and high frequencies, plus build-ups over time.
- **Stereo field**: correlation, width, balance, mono loss, and whether the low end is safely mono.

It compares these with the targets for where the music is going. Streaming services mostly aim for around -14 LUFS with true peak below -1 dBTP (Apple Music -16 LUFS), broadcast for -23 or -24 LUFS, and club tracks run much louder. Tell it the destination, or it assumes streaming.

The quickest way in is **`/mixcheck`**. It measures the whole mix and reports loudness, true peak, dynamics, spectral balance and mono compatibility against your release target, leading with the biggest problem. Add a platform to check against a specific target, e.g. `/mixcheck Apple Music`.

You can also ask it to fix what it finds - "bring the mix up to -14 LUFS" or "tame the harshness in the vocal". It makes small, undoable changes, measures again and shows you the numbers before and after, so you can tell whether each change helped. Always listen to the result too - the numbers show whether a mix meets a target, not whether it sounds good.

> 💡 **Tip:** To watch the same readings live while you mix, put a **Loudness Meter** on the Master track. See [Loudness Meter](utility-plugins.md#loudness-meter) in the Utility Plugins chapter.

## Building Cmajor Plugins <span class="pro">PRO</span> { #building-cmajor-plugins }

> 📝 **Edition:** Waveform Pro, on macOS (Apple Silicon) and Windows. It isn't available on Intel Macs or Linux.

The assistant can write audio effects and instruments for you in the Cmajor language and load them into your Edit.

Describe what you want in plain language, for example "Build me a Cmajor tremolo effect and put it on my first audio track". The assistant then:

1. Creates a new patch in the `cmajor-patches` folder inside your Project folder, so the patch stays with the Project when you move or archive it.
2. Writes the DSP code, spreading a large patch across several files, and adds a custom UI if you ask for one.
3. Compiles the patch, reads any errors and fixes them itself.
4. Loads the finished plugin on a track.

A custom UI fills the plugin window and scales with it. If a custom UI can't load, the assistant is told, so it can fix it rather than leaving you with an empty window. In the step list, each build run shows as one *Working on a Cmajor patch* row.

The assistant can look at the plugin views it builds when the model reads images. On a profile you have added yourself, such as a local model, turn on **Model Reads Images** in *Settings > AI* only if the model is a vision model; a model that can't read images rejects them.

Once a patch exists you can open and use it like any other Cmajor patch. See [Cmajor Patches](using-plugins.md#cmajor-patches).

## What the Assistant Can See

So that its help is relevant to what you're actually doing, the assistant is given context about your Edit with each message. This typically includes things like the tempo and time signature, the key and scale, the Chord track's progression, arranger sections, whatever clip or plugin you currently have selected, and the contents of the Edit's **Info** field. This is why it can answer questions like "what key is this in?" or act on "the selected clip" without you having to spell everything out.

The strip at the top of the panel shows the selection being sent: *Selected MIDI clip* or *Selected plugin*, followed by its name and track. When neither is selected it reads *Additional context to use based on selection*.

If you're using one of the cloud profiles, this context is part of what gets sent to the provider along with your message. See [Privacy and Cost](#privacy-and-cost) below.

## Persistent Memory

The assistant keeps a memory file on disk where it stores notes it has decided are worth remembering between conversations. This is how it can carry context from one session to the next. You can open the memory file yourself from *Settings > AI* (the **Persistent memory** button on the **Show Memory** row, under **Assistant Files**) to see, edit, or clear what it has remembered.

## Privacy and Cost

Both of these depend entirely on which profile you're using, so it's worth being clear about which one you have selected.

> ⚠️ **Privacy:** With a cloud profile (**OpenAI API**, **Anthropic API** or **ChatGPT (Codex)**), each message you send, along with the Edit context described above (which can include notes on the selected clip, information about plugins, and the contents of the assistant's memory), is sent over the internet to that company. This data leaves your computer. Don't put anything in the chat, or in places the assistant can read, that you wouldn't be comfortable sending to them. With a profile pointing at a server on your own machine, none of this leaves your computer. The ChatGPT sign-in used by the **ChatGPT (Codex)** profile is only ever sent to ChatGPT, whatever server address a profile names.

> ⚠️ **Cost:** The **OpenAI API** and **Anthropic API** profiles use your own API key, and those companies bill you directly for what you use, typically per amount of text processed. **ChatGPT (Codex)** draws on your existing ChatGPT subscription and its limits rather than a separate bill. A local model costs nothing per message. In none of these cases does Waveform run an AI service of its own or absorb the cost: whatever you use is between you and whoever provides it.
