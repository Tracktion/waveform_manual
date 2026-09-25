# What's New

This chapter lists what has changed in recent versions of Waveform, with links to the chapters that cover each feature in full.

## Waveform 14.1

### Rendering

- **One Render dialog in every edition**: The Render dialog replaces the old exporter in Free, Pro and every other edition. Simple mode covers everything the old exporter did: the whole mix, a file per track, selected tracks or clips, remove silence, render at 1x, ACID and tag metadata, and adding the result to your library. See [Rendering and Stems](rendering-and-stems.md).
- **Advanced mode** <span class="pro">PRO</span>: A **Mode** switch at the top of the dialog adds stems by submix, group, tag or output, a file for each marker region, arranger section or selected clip range, render presets, **Wrap Remainder Into Loop** and **Measure Loudness of Rendered Files**. See [Rendering and Stems](rendering-and-stems.md).
- **Include Tails**: A new option, on by default, lets reverb and delay tails ring out for up to 10 seconds past the end of a render. It stops once the output is silent and never runs into the next clip. Turn it off when you need files of an exact length, such as loops.
- **Render Track and clip rendering**: The track panel's **Render Track** button and the clip panel's Render menu now open the Render dialog, set up for the job. Render Track can make a **New Track** or **Replace Source Tracks**, and clip renders can go to **This Track** or **Replace Clips**. Render Track remembers its own settings between renders.
- **MIDI files**: The dialog can write a MIDI file, taken either from the clips themselves or from the output of MIDI plugins (**MIDI Source**).
- **File name tokens**: The **Insert** button beside the file name adds tokens such as `$edit`, `$track` and `$date`, in both modes. `%edit%`, `%track%` and `%date%` work too.
- **Recent folders**: A **Recent** button beside the folder lists the last 10 folders you rendered to, from any Edit.
- **Tags**: **Add Tags** writes the Edit's title, artist, album and other tags into WAV, OGG and MP3 files. Edit them with the **Edit Tags** action in the Edit's Actions panel.
- **Warnings for silent renders**: The dialog warns when a track you're rendering is muted or not soloed, since it would render as silence.
- Rendered files show up in the project again, as they did with the old exporter.

### Mixing and metering

- **Loudness Meter** <span class="pro">PRO</span>: A new plugin showing momentary, short-term and integrated LUFS, loudness range and true peak against a target level you set. It also shows the stereo field: a goniometer, phase correlation, balance, width, mono compatibility and the timing offset and polarity between the channels. See [Utility Plugins](utility-plugins.md).

### AI assistant

- **Mix measurement**: The assistant can render the whole mix, individual tracks or a time range in the background and report loudness, true peak, dynamics, spectral balance and stereo/mono compatibility. When it changes something to fix a problem, it measures again so you can compare the numbers. See [The AI Assistant](ai-assistant.md).
- **/mixcheck**: A new slash command that measures the mix and checks it against your release platform's loudness target, for example `/mixcheck Apple Music`.
- **Building Cmajor plugins** <span class="pro">PRO</span>: The assistant can build Cmajor audio effects and instruments for you. It creates the patch in your project, writes and compiles the DSP (and an optional custom UI), fixes its own compile errors and loads the result on a track. Available on macOS (Apple Silicon) and Windows. See [The AI Assistant](ai-assistant.md) and [Cmajor Patches](using-plugins.md#cmajor-patches).

### Detail editor

- **Plugins tab**: A new tab in the Detail editor lays out the selected track's plugins and modifiers side by side as panels you can open individually. Drag a modifier onto a plugin to assign it, and right-click a panel for the same menu as in the mixer. See [The Plugins Detail Editor](plugins-detail-editor.md).
- **Pattern Generator in the Clip tab**: With a MIDI clip selected, the Clip tab has a **Pattern Generator** view alongside the piano roll. It applies to every selected MIDI clip. See [Pattern Generator](pattern-generator.md).

### MIDI

- **MIDI Producer Expansion**: The Arpeggiator, Chord Companion, Note Repeat, MIDI Filter and MIDI Monitor plugins are now included in the MIDI Producer Expansion, as well as in Waveform Pro. See [MIDI Effects](midi-effects.md).
- **Resizable MIDI Monitor**: The MIDI Monitor window can be resized, and its message column uses the spare width so long descriptions are no longer cut off. Control changes are shown as "CC". See [MIDI Effects](midi-effects.md).

### Controllers

- **Clip colours on pads**: Launchpad X, Launchpad Mini MK3 and Launchpad Pro MK3 pads show the exact clip colour. Other Launchpad, Launchkey and APC controllers pick the closest pad colour, and pads update when a track's colour changes. See [Control Surfaces](reference-settings.md#control-surfaces).

### Languages

- **Korean and Italian**: Waveform's interface is now available in Korean and Italian. See [Language](reference-settings.md#language).

### Interface

- **Sortable plugin list**: The plugin list in Settings can be sorted by any column, including Version, Alias, Tags, Description and the tick columns. See [The Plugin List](reference-settings.md#the-plugin-list).
- **Welcome screen**: Recent Edits are ordered by when you last opened them, and News and Training items show more of their description, with the full text on hover.

Plus many fixes across the clip launcher, freezing, projects and plugins.

## Waveform 14.0

### Multi-channel audio <span class="pro">PRO</span>

Also available with the Surround Expansion.

Waveform's audio engine now works beyond stereo from end to end. Tracks,
clips, racks, and plugins can carry any channel count (mono, stereo,
5.1, 7.1, or custom), so you can build surround and immersive mixes
natively. You can choose a track's channel layout, pick which channels a
multi-channel file uses, set a track's output to *none* to use it as a
bus, and render to Mono, Stereo, 5.1, 7.1, or your edit's own format.
Level meters scale to the channel count.

### AI assistant

An AI assistant is built into Waveform, in a side panel. Ask it about
Waveform or your project and it can carry out actions for you
(creating tracks, adding and configuring plugins, setting up routing,
assigning keyboard shortcuts, and more) by driving Waveform through
its scripting API. It is aware of what you have selected and your
project info, and an *auto* mode picks the right model for each request.
You choose which AI service it talks to: OpenAI or Anthropic using your
own API key, ChatGPT through the sign-in from the Codex CLI or ChatGPT
desktop app, or a model running locally on your own computer. It is
entirely optional. See [The AI Assistant](ai-assistant.md).

### A new interface layout

The old bottom Properties panel has been replaced. Menus now live in a
standard menu bar at the top of the window, playback and master controls
sit in a transport bar along the bottom, and the settings and actions for
whatever you select appear in an improved **Actions panel** at the side
(and in the Browser) as a flat, context-sensitive list. See
[The Actions Panel](actions-panel.md), [Basic Navigation](basic-navigation.md),
[The Edit Tab](edit-tab.md), and [The Detail Editor](detail-editor.md).

### Interface

- **Detail editor Clip tab**: The Detail editor gained a Clip tab for working closely on the selected clip, including loop settings and warp-time editing. See [The Detail Editor](detail-editor.md).
- **Plugin side panel**: Host a single plugin live on the main output from a side-panel tab. See [The Plugin Side Panel](plugin-side-panel.md).
- **Colours**: A new colour palette and track colour order, and all 18 colour swatches can be edited.

### Projects

- **DAWproject**: Import and export projects in the DAWproject format. See [Importing and Exchanging Projects](importing-and-exchanging-projects.md).
- **Folder-based projects**: Projects no longer need a `.tracktion` project file. Older projects show a yellow icon on the Projects page and are converted when you open them.

### Controllers

- **New surfaces**: Support for the AKAI APC64, Native Instruments Maschine Jam, Novation Launch Control XL 3, Novation Launchkey MK4 and Novation Launchkey Mini MK4. See [Control Surfaces](reference-settings.md#control-surfaces).

### Languages

- **French and Chinese**: Waveform's interface is available in French and Chinese. See [Language](reference-settings.md#language).
