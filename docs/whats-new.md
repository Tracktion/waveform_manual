# What's New

This chapter lists what has changed in recent versions of Waveform, with links to the chapters that cover each feature in full.

## Waveform 14.1

### Rendering

- **One Render dialog in every edition**: The Render dialog replaces the old exporter in Free, Pro and every other edition. Simple mode covers everything the old exporter did: the whole mix, a file per track, selected tracks or clips, remove silence, render at 1x, ACID and tag metadata, and adding the result to your library. See [Rendering and Stems](rendering-and-stems.md).
- **Advanced mode** <span class="pro">PRO</span>: In Waveform Pro, a **Mode** switch at the top of the dialog adds stems by submix, group, tag or output, a file for each marker region, arranger section or selected clip range, render presets, **Wrap Remainder Into Loop** and **Measure Loudness of Rendered Files**. See [Rendering and Stems](rendering-and-stems.md).
- **Include Tails**: A new option, on by default (off by default for clip renders, so they end where the clips do), lets reverb and delay tails ring out for up to 10 seconds past the end of a render. It stops once the output is silent and never runs into the next clip. Turn it off when you need files of an exact length, such as loops.
- **Render Track and clip rendering**: The **Render Track** button in a track's Actions panel and the Render menu in a clip's Actions panel now open the Render dialog, set up for the job. Render Track can make a **New Track** or **Replace Source Tracks**, and clip renders can go to **This Track** or **Replace Clips**. Render Track remembers its own settings between renders.
- **MIDI files**: The dialog can write a MIDI file, taken either from the clips themselves or from the output of MIDI plugins (**MIDI Source**).
- **File name tokens**: The **Insert** button beside the file name adds tokens such as `$edit`, `$track` and `$date`, in both modes. `%edit%`, `%track%` and `%date%` work too.
- **Recent folders**: A **Recent** button beside the folder lists the last 10 folders you rendered to, from any Edit.
- **Tags**: **Add Tags** writes the Edit's title, artist, album and other tags into WAV, OGG and MP3 files. Edit them with the **Edit Tags** action in the Edit's Actions panel.
- **Warnings for silent renders**: The dialog warns when a track you're rendering is muted or not soloed, since it would render as silence.
- Rendered files show up in the project again, as they did with the old exporter.
- **Clip render names**: A clip render's file name starts as the clip's name, which you can change in the dialog. See [Rendering Clips](rendering-and-stems.md#rendering-clips).
- **Tracks playing the launcher render silent**: A track that is playing its clip launcher renders as silence, and the dialog says so. Switch its playback to the arranger to render its arrangement. Clip renders still include their arrangement clips.
- **Renders from scripts and the assistant**: While a script or the assistant is rendering, its progress and a **Cancel** button cover the Edit, and the Edit can't be changed until the render finishes. Closing the Edit or quitting asks whether to stop the render first. See [Rendering From the AI Assistant](rendering-and-stems.md#rendering-from-the-ai-assistant).

### Mixing and Metering

- **Loudness Meter** <span class="pro">PRO</span>: A new plugin in Waveform Pro showing momentary, short-term and integrated LUFS, loudness range and true peak against a target level you set. It also shows the stereo field: a goniometer, phase correlation, balance, width, mono compatibility and the timing offset and polarity between the channels. See [Utility Plugins](utility-plugins.md).

### AI Assistant

- **Mix measurement**: The assistant can render the whole mix, individual tracks or a time range in the background and report loudness, true peak, dynamics, spectral balance and stereo/mono compatibility. When it changes something to fix a problem, it measures again so you can compare the numbers. See [The AI Assistant](ai-assistant.md).
- **/mixcheck**: A new slash command that measures the mix and checks it against your release platform's loudness target, for example `/mixcheck Apple Music`.
- **Building Cmajor plugins** <span class="pro">PRO</span>: In Waveform Pro, the assistant can build Cmajor audio effects and instruments for you. It creates the patch in your project, writes and compiles the DSP (and an optional custom UI), fixes its own compile errors and loads the result on a track. Large patches are written across several files, a custom UI fills and scales with the plugin window, a UI that fails to load is reported back to the assistant to fix, and the build steps appear in the assistant's live step list. Available on macOS (Apple Silicon) and Windows. See [Building Cmajor plugins](ai-assistant.md#building-cmajor-plugins) and [Cmajor Patches](using-plugins.md#cmajor-patches).
- **Model lists**: The model lists for the OpenAI, Anthropic and ChatGPT profiles show every chat model your account can use, so new models appear as soon as they're released. Auto mode's Fast, Standard and Heavy models move up to the newest version of each model as it becomes available. See [Auto mode routing](ai-assistant.md#auto-mode-routing).
- **Local models stay local**: Chat titles are written by a fast model from the same provider as the conversation, so a conversation with a local model stays on your computer. **Stop** also interrupts a local model that is still working through a long prompt. See [Using a local model](ai-assistant.md#using-a-local-model).

### Detail Editor

- **Plugins tab**: A new tab in the Detail Editor lays out the selected track's plugins and modifiers side by side as panels you can open individually. Drag a modifier onto a plugin to assign it, and right-click a panel for the same menu as in the mixer. See [The Plugins Detail Editor](plugins-detail-editor.md).
- **Pattern Generator in the Clip tab**: With a MIDI clip selected, the Clip tab has a **Pattern Generator** view alongside the **Piano Roll**. It applies to every selected MIDI clip, and the toggle shows how many when more than one is selected. See [Pattern Generator](pattern-generator.md).
- **Audio clip flags**: In the Clip tab, a looping Audio clip shows a start flag for where playback starts within the loop, and the loop and start/end flags can be grabbed anywhere along the flag. An unlooped launcher clip can be made longer than its audio file: the view follows the extra length and the end flag can be dragged past the end of the file. A looping launcher clip no longer shows a Length property, which has no effect on it. See [The Detail Editor](detail-editor.md#audio-clips).

### MIDI

- **MIDI Producer Expansion**: The Arpeggiator, Chord Companion, Note Repeat, MIDI Filter and MIDI Monitor plugins are now included in the MIDI Producer Expansion, as well as in Waveform Pro. See [MIDI Effects](midi-effects.md).
- **Resizable MIDI Monitor**: The MIDI Monitor window can be resized, and its message column uses the spare width so long descriptions are no longer cut off. Control changes are shown as "CC". See [MIDI Effects](midi-effects.md).

### Instruments

- **Attracktive**: A new built-in instrument, free in every edition, under *Waveform > Instruments* in the plugin list. Its factory content installs from the Tracktion Download Manager (see [Downloads](reference-settings.md#downloads)). See [Attracktive](samplers-and-instruments.md#attracktive).

### Clip Launcher <span class="pro">PRO</span> { #clip-launcher }

> 📝 **Edition:** Waveform Pro, or with the Launcher Expansion.

- **Launch timing**: All the clips in a launched scene start together, quantised from the same point, and unquantised launches start from the start of the clip. Launched clips stay in time when the cursor moves, when you stop and play again and when the arrangement loop wraps, carrying on from where they were rather than jumping, and one-shot clips no longer stop when that happens. See [Clip Launcher](clip-launcher.md#playing-and-stopping-clips).
- **Clips that can't launch**: Disabled clips, and clips whose audio file is missing, show a greyed-out play button and can't be launched.
- **Arrangement-only operations**: Split, crop, heal, consolidate, reverse, insert silence, **Convert to Step clip**, **Merge**, **Remove Silence** and fades are no longer offered for launcher clips. Flatten leaves launcher clips alone, and they can't be rendered in place.
- **Return to arrangement**: The **Return to arrangement** follow action returns its track to the arrangement. See [Sequencing (Follow Actions)](clip-launcher.md#sequencing-follow-actions).
- **Quantised marker jumps**: With *Options > Quantise transport position changes* on, jumping to a marker while playing waits for the launch quantisation, as clicking the timeline does. This covers the next and previous marker commands, typed marker numbers, the Browser's **Markers** tab and control surfaces.

### Controllers

- **Clip colours on pads**: Most Launchpad, Launchkey and APC controllers light each clip's pad in the pad colour nearest to the clip's colour, and pads update when a track's colour changes. The Launchpad X, Launchpad Mini MK3, Launchpad Pro MK3 and Launchpad MK2 match clip colours more closely, so, for example, red no longer shows as pink. See [Control Surfaces](reference-settings.md#control-surfaces).

### Languages

- **Korean and Italian**: Waveform's interface is now available in Korean and Italian. See [Language](reference-settings.md#language).

### Interface

- **Sortable plugin list**: The plugin list in Settings can be sorted by any column, including Version, Alias, Tags, Description and the tick columns. See [The Plugin List](reference-settings.md#the-plugin-list).
- **Plugin paths**: The plugin list in Settings has a **Path** column, hidden at first, showing where each plugin file is stored.
- **Welcome screen**: Recent Edits are ordered by when you last opened them, and News and Training items show more of their description, with the full text on hover. See [The Welcome Tab](installing-the-demo-projects.md#the-welcome-tab).
- **Close this Edit**: *File > Close this Edit* closes the Edit you're working on.
- **Automation track colour**: Automation tracks have a **Colour** option in their right-click menu.
- **Insert clip on the Arranger track** <span class="pro">PRO</span>: In Waveform Pro, with the Arranger track selected, the Insert clip key (G) adds an Arranger clip. See [The Arranger Track](arranger-track.md#creating-sections).

Plus many fixes across the clip launcher, freezing, projects and plugins.

## Waveform 14.0

### Multi-channel Audio <span class="pro">PRO</span> { #multi-channel-audio }

> 📝 **Edition:** Waveform Pro, or with the Surround Expansion.

Waveform's audio engine now works beyond stereo from end to end. Tracks,
clips, racks, and plugins can carry any channel count (mono, stereo,
5.1, 7.1, or custom), so you can build surround and immersive mixes
natively. You can choose a track's channel layout, pick which channels a
multi-channel file uses, set a track's output to *none* to use it as a
bus, and render to Mono, Stereo, 5.1, 7.1, or your Edit's own format.
Level meters scale to the channel count.

### AI Assistant

An AI assistant is built into Waveform, in the Browser's **Assistant** tab. Ask it about
Waveform or your project and it can carry out actions for you
(creating tracks, adding and configuring plugins, setting up routing,
assigning keyboard shortcuts, and more) by driving Waveform through
its scripting API. It is aware of what you have selected and of the notes
you write in the Edit's **Info** field, and an **Auto** mode picks the right model for each request.
You choose which AI service it talks to: OpenAI or Anthropic using your
own API key, ChatGPT through the sign-in from the Codex CLI or ChatGPT
desktop app, or a model running locally on your own computer. It is
entirely optional. See [The AI Assistant](ai-assistant.md).

### A New Interface Layout

The old bottom Properties panel has been replaced. Menus now live in a
standard main menu at the top of the window, playback and master controls
sit in a transport bar along the bottom, and the settings and actions for
whatever you select appear in an improved **Actions panel** at the side
(and in the Browser) as a flat, context-sensitive list. See
[The Actions Panel](actions-panel.md), [Basic Navigation](basic-navigation.md),
[The Edit Tab](edit-tab.md), and [The Detail Editor](detail-editor.md).

### Interface

- **Detail Editor Clip tab**: The Detail Editor gained a Clip tab for working closely on the selected clip, including loop settings and warp-time editing. See [The Detail Editor](detail-editor.md).
- **Plugin panel**: Host a single plugin live on the main output from the Browser's **Plugin** tab. See [The Plugin Panel](plugin-side-panel.md).
- **Mixer panel**: The Mixer panel can be docked or floated in its own window. See [The Mixer](edit-tab.md#the-mixer-panel).
- **Actions panel lock**: A lock button keeps the Actions panel showing its current contents while you select other things (Opt + F11 / Alt + F11). See [Locking and Floating](actions-panel.md#locking-and-floating).
- **Colours**: A new colour palette and track colour order.
- **Editable colour swatches** <span class="pro">PRO</span>: In Waveform Pro, all 18 colour swatches can be edited in the Colour Scheme Editor. See [Look and Feel](reference-settings.md#look-and-feel).
- **Simplify user interface**: This Appearance setting is back. It draws the interface with less detail, which can help on slower computers. See [Look and Feel](reference-settings.md#look-and-feel).
- **Default timeline format**: A setting on the General page picks the timeline format new projects start with. See [General settings](reference-settings.md#general-page).

### Audio

- **Channel layout presets**: Save the Audio Devices page's input and output layout as a preset and apply it again later. See [Channel Layout Presets](reference-settings.md#channel-layout-presets).
- **Signalsmith time-stretching**: Signalsmith joins the time-stretch and pitch-shift algorithms you can choose for a clip. See [Time Stretch Algorithm](warp-time.md#time-stretch-algorithm).

### Plugins

- **More plugins per track**: A track can hold up to 25 plugins and a clip up to 10.
- **Preferred plugin format**: **Collapse duplicate formats** in *Settings > Plugins* shows only your preferred format of a plugin installed in more than one format. Edits that use the other formats still load them. See [Plugin View Options](reference-settings.md#plugin-view-options).

### Projects

- **DAWproject**: Import and export projects in the DAWproject format. See [Importing and Exchanging Projects](importing-and-exchanging-projects.md).
- **Folder-based projects**: Projects no longer need a `.tracktion` project file. Older projects show a yellow icon on the Projects tab and are converted when you open them.

### Controllers

- **New surfaces**: Support for the AKAI APC64, Native Instruments Maschine Jam, Novation Launch Control XL 3, Novation Launchkey MK4 and Novation Launchkey Mini MK4. See [Control Surfaces](reference-settings.md#control-surfaces).

### Languages

- **French, Chinese and Japanese**: Waveform's interface is available in French, Chinese and Japanese. See [Language](reference-settings.md#language).
