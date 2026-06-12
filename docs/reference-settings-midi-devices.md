# Reference: Settings > MIDI Devices

This is where you tell Waveform about every piece of MIDI gear you want to play, record, or sync with: keyboards, drum pads, control surfaces, synths, sound modules, and drum machines. If a device shows up here but isn't enabled, Waveform ignores it. If it's enabled, it's available to your tracks.

The page is split into three areas. On the left you enable and configure your input and output devices. On the right, a properties pane shows detailed settings for whichever device you've clicked on. Across the top sit a few global options that affect how Waveform discovers MIDI hardware.

![](images/settings_midi_devices.png)
*Settings > MIDI Devices*

To open this page, go to the **Settings** tab and choose **MIDI Devices** from the list on the left.

## MIDI Options

These settings sit at the top of the page and apply to all MIDI hardware, not to any one device.

**Auto-scan for new MIDI devices** (Choices: Never, Every 2 seconds, Every 5 seconds, Every 10 seconds, Every 30 seconds) — how often Waveform automatically looks for MIDI gear you've plugged in or switched on. More frequent scanning means newly connected devices appear faster, at the cost of a small amount of background work. (Default: Never)

> 💡 **Tip:** If you often hot-plug USB MIDI controllers mid-session, set this to one of the timed intervals so they show up without you having to do anything. If your rig stays the same, leaving it on Never is perfectly fine.

**Scan for new MIDI devices now** — forces an immediate one-time rescan. Use this when you've just connected something and don't want to wait for the next auto-scan (or you've turned auto-scan off entirely).

**Use computer keyboard for MIDI input** — lets your computer's typing keyboard act as a MIDI input so you can play notes without any hardware attached. (Default: on)

> 📝 **Note:** This option only appears if the feature is available in your edition of Waveform. When it's on, the typing keyboard is treated as a MIDI input source. See the separate Virtual Keyboard section further down for how to actually trigger notes.

## MIDI Input Devices

This list shows every MIDI input Waveform can see: your physical keyboards and pads, any virtual inputs you've created, and special entries like "All MIDI Ins". Each row has the same set of controls.

**Enabled / Disabled** — the toggle on the left of each row. A green tick and "Enabled" means the device is active and can send MIDI into Waveform; a red cross and "Disabled" means it's ignored. Click it to flip the state. (Default: depends on the device)

**(Make default) / Default** — sets this input as the default MIDI input. The default is the one Waveform reaches for when it needs an input without you having picked one. The current default reads "Default"; every other row offers "(Make default)" to promote it. Clicking it also selects the device so its settings appear on the right.

**Virtual** — a small tag shown next to virtual inputs you've created. Physical hardware doesn't show this tag.

**Activity meter** — the small meter at the right edge of each enabled row. It flickers when MIDI is arriving, which is a quick way to confirm a device is actually sending data.

Click anywhere on a row to select it and load its settings into the properties pane on the right.

**Create New Virtual MIDI Input...** — creates a virtual input device that merges incoming MIDI from one or more of your real devices into a single source. You'll be asked to type a name for it. This is handy when you want several controllers to feed one track as if they were one instrument. Virtual inputs you create can be deleted again from their properties pane (see below).

> 💡 **Tip:** The "All MIDI Ins" entry is a built-in virtual input that combines every connected MIDI device. Enable it when you just want anything you play, on any controller, to reach the focused track.

## MIDI Output Devices

This list shows the MIDI outputs Waveform can send to: hardware synths, sound modules, drum machines, and similar. Each row uses the same **Enabled / Disabled** toggle and **(Make default) / Default** control as the input list, so enable the outputs you want to drive and pick a default if you like.

Click a row to load its settings into the properties pane on the right.

## Device Settings (the right-hand pane)

When you select a device, its settings appear in the pane on the right. The list changes depending on whether you clicked an input or an output.

### Settings for a MIDI input

**Device Alias** — a friendly on-screen name for this device. Type whatever you like (for example "Studio Keys" instead of a cryptic driver name) and that's what you'll see throughout Waveform.

**Select MIDI Inputs** — only appears for a virtual input you created. Opens a menu of your physical inputs so you can tick which ones feed into this virtual device.

**Active MIDI Channels** — chooses which of the 16 MIDI channels are allowed through. Opens a menu where you can allow all, block all, or toggle individual channels. The current state is summarised as a range (for example "1-4, 8") or as "All channels enabled". (Default: all channels enabled)

**Active MIDI Note Range** — limits which notes pass through. Opens a menu where you can allow all notes or drag sliders to set a start and end note. Useful for splitting a keyboard or ignoring stray low/high keys. (Default: all notes allowed)

**Input Monitoring Mode** (Choices: On, Auto, Off) — whether MIDI from this device is passed through into the plugins on its track so you can hear it live. On always monitors, Off never does, and Auto monitors only when it makes sense (for example when the track is armed). (Default: Auto)

**Action** (Choices: Merge newly recorded MIDI into any existing clips; Overlay new clips, containing newly recorded MIDI; Replace existing clips with newly recorded MIDI clips; Monitor live input from this device, but don't actually record) — what happens to MIDI you record from this device. The last option lets you play through the device live without ever creating a clip. (Default: Merge newly recorded MIDI into any existing clips)

**Apply Channel** — forces recorded MIDI onto a specific channel (1-16), or leave it as "None" to keep the channels as played. Opens a menu to choose. (Default: None)

**Apply Program** — sends a program (patch) change so the destination instrument switches sound. Opens a menu of banks and programs; you can also set how many banks to show. (Default: None)

**Record MPE to Note Expression** — when on, incoming MIDI is treated as MPE and its controller movements are recorded as per-note expression instead of plain controller data in the clip. Turn this on for expressive MPE controllers like the ROLI Seaboard. (Default: off)

> 📝 **Note:** If Waveform already recognises the device as an MPE controller, this row simply reads "MPE will be recorded to note expression" and there's nothing to toggle.

**Quantise** — applies timing correction to notes as they come in, snapping them to a musical grid. The list of grid values comes from the current project. Choose a value to quantise on the way in, or pick none to record exactly as played.

**Set All Incoming Note Velocities to Full** — when on, every note you play is recorded at maximum velocity (127), ignoring how hard you actually hit the keys or pads. Handy for drum programming where you want every hit at full strength. (Default: off)

**Time Adjust** — nudges recorded MIDI earlier or later in time, in milliseconds (range -100 to 100). Negative values are labelled "(Early)" and positive "(Late)". Use this to compensate for a controller that consistently feels ahead of or behind the beat. (Default: 0.00 ms)

**Minimum note length** — sets the shortest allowed gap between a note-on and its note-off, in milliseconds (range 0 to 100). This is mainly for drum controllers that fire note-on and note-off at the same instant, which would otherwise record as zero-length notes. (Default: 0.00 ms)

**Allow MIDI Controller Remapping** — when on, controller (CC) messages from this device become available to map onto plugin parameters. Turn it on if you want this device's knobs and faders to control plugins. (Default: off)

**Delete Virtual Device** — only appears for a virtual input you created. Removes it. This button is red because it's destructive; there's no undo for it.

**Virtual Keyboard** — a pop-out on-screen piano keyboard for this input. Click the keys to send notes as if they were coming from the real device, which is great for testing or for playing when no hardware is to hand.

### Settings for a MIDI output

**Device Alias** — a friendly on-screen name for this output, exactly like the input alias above.

**Send MIDI Timecode** — when on, Waveform sends MIDI Timecode (MTC) out of this port so external gear can chase Waveform's position. Turn this on to sync a hardware recorder or other timecode-aware device to your transport. (Default: off)

**Send MIDI Clock** — when on, Waveform sends MIDI Clock out of this port so external gear (drum machines, arpeggiators, tempo-synced effects) stays locked to your project tempo. (Default: off)

**Pre-Delay** — shifts the timing of MIDI notes sent to this device, in milliseconds (range -250 to 250). Negative is labelled "(Early)", positive "(Late)". Use it to line up a hardware synth that responds slightly late, or to push notes early to cover its own latency. (Default: 0 ms)

**Program Names** — chooses the program (patch) name set used for this device, so the names you see match the sounds in your actual instrument. Alongside it you'll find buttons to add a new name set, edit the current one, or delete it (delete and edit only appear when they apply to the selected set).

> 💡 **Tip:** Send MIDI Clock and Send MIDI Timecode do different jobs. Clock keeps external gear in tempo and is what most drum machines and synced effects expect. Timecode carries an actual position and is for transport sync. Many setups only need one of the two.

## ⚡ Things to Watch Out For

- **Disabled means invisible.** A device that's listed but not enabled won't appear as an option anywhere else in Waveform. If a controller "isn't working", check that its row shows green "Enabled" first.
- **The default isn't automatic.** Enabling a device doesn't make it the default. If you want Waveform to pick a particular input or output by default, click "(Make default)" on that row.
- **Auto-scan is off out of the box.** With **Auto-scan for new MIDI devices** set to Never, gear you plug in mid-session won't appear until you press **Scan for new MIDI devices now** or change the auto-scan interval.
- **Channel and note filters silently drop MIDI.** If notes or whole channels seem to be missing, check **Active MIDI Channels** and **Active MIDI Note Range** for that input — a filter set earlier may be quietly blocking them.
- **Deleting a virtual input can't be undone.** The red **Delete Virtual Device** button removes it immediately. Built-in virtual inputs like "All MIDI Ins" can't be deleted, only disabled.
- **Sending Clock or Timecode to the wrong port does nothing useful.** These settings live on each output individually, so make sure you've enabled and configured them on the port that's actually wired to your external gear.
