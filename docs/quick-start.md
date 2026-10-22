# Quick Start

This chapter takes you from a fresh install to your first recording and a
finished audio file. Each step gives you just enough to get going, then
links to the full chapter for the detail. If you're new to Waveform, read
it top to bottom; if you're returning, skim the headings and jump to what
you need.

Waveform runs as a 64-bit application on macOS, Windows, and Linux, and is
available in Free, OEM, and Pro editions.

> 💡 **Tip:** You can view and customise every keyboard shortcut on the
> *Settings > Keyboard Shortcuts* page. If your shortcuts have been changed
> and you want Waveform's standard set back, click **Reset to Defaults** there
> and choose **Restore default Waveform key mappings**. See
> [Keyboard Shortcuts](keyboard-shortcuts.md) for the full list.

## 1. Install and Unlock

1. Download Waveform from [tracktion.com](https://www.tracktion.com) and run
   the installer.
2. Launch Waveform. Until it is unlocked it runs in demo mode.
3. To unlock, go to the **Settings** tab, choose **Licensing**, and click
   **Refresh Licenses**. Log in with your tracktion.com account and Waveform
   pulls down and applies any licences you own.

→ For status badges, expansions, and per-computer licensing, see
[Reference: Settings > Licensing](reference-settings.md#licensing).

## 2. First-Run Setup

The first time you launch Waveform, the **First Run Setup** panel appears on
the left. Work through its steps in order: it takes you straight to each
setting you need to configure. If you close it, you can reopen it any time
from *Help > Show the First Run Setup panel*.

→ See [Audio Device Setup](audio-device-setup.md).

## 3. Set Up Your Audio Device

Open *Settings > Audio Devices* and choose how Waveform talks to your
hardware:

- **Windows:** ASIO (recommended) or Windows Audio
- **macOS:** Core Audio
- **Linux:** JACK (recommended) or ALSA

Set your **sample rate** (44100 or 48000 Hz is a fine default) and an
**audio buffer size**. Start around 256 samples and raise it if you hear
clicks or dropouts.

> ⚠️ **Warning:** If you plan to overdub (record while listening to existing
> tracks), you **must** run **Auto-Detect** with a hardware loopback so your
> recordings line up in time. Repeat it whenever you change the sample rate
> or buffer size. This is the single most important setup step for accurate
> recording.

→ The full walk-through, including the Auto-Detect loopback procedure, is in
[Audio Device Setup](audio-device-setup.md) and
[Reference: Settings > Audio Devices](reference-settings.md#audio-devices).

## 4. Connect MIDI (Optional)

If you have a MIDI keyboard or controller, connect it and check it appears
under *Settings > MIDI Devices*.

→ See [MIDI Setup](midi-setup.md).

## 5. Hear Something: Open a Template

The quickest way to confirm everything works is to open a template and play it:

1. Open the **Welcome** tab.
2. Pick a song from the **Project Templates** list to open it as a new Edit.
3. Press the **Space bar** to play.

→ See [Demo Projects and Templates](installing-the-demo-projects.md) and
[Basic Navigation](basic-navigation.md).

## 6. The Edit Window at a Glance

An Edit is where you record, arrange, and mix. The window has four main areas:

- The main menu along the top.
- The Browser down one side (the right by default), which also hosts the Actions panel.
- The arrangement (and the optional Mixer) in the centre.
- The transport bar along the bottom, with playback controls, cursor
  position, tempo, and the master controls.

The Actions panel is central to Waveform: select anything (a clip, a
track, a plugin) and it shows the settings and actions for that selection.

→ See [The Edit Tab](edit-tab.md), [Basic Navigation](basic-navigation.md),
and [The Actions Panel](actions-panel.md).

## 7. Start a Project

On the **Projects** tab, click **New Project**, give it a name and location,
and click **Create Project**. Waveform opens a new Edit ready to work in.

→ See [Basic Navigation](basic-navigation.md).

## 8. Record Audio

1. Click the input arrow beneath a track name and choose an audio input.
2. Click the record-arm button (the red dot) on that input.
3. Check your levels, then press **Record** in the transport bar.

→ See [Recording Audio](recording-audio.md).

## 9. Record MIDI / Use an Instrument

1. Drag the plugin object onto a track's inline mixer and choose a virtual
   instrument from the menu. Double-click the instrument to open its
   interface.
2. Set the track's input to your MIDI device and record-arm it.
3. Press **Record** and play.

→ See [MIDI Recording](midi-recording.md) and [Using Plugins](using-plugins.md).

## 10. Add Effects and Mix

Waveform's mixer is inline with each track and fully modular. Every track
starts with a Volume & Pan and a Level Meter plugin. To add an effect,
drag the plugin object into the track's inline mixer and pick a plugin.
You can drop it anywhere in the signal chain and reorder it later by dragging.

→ See [The Edit Tab](edit-tab.md), [Using Plugins](using-plugins.md), and
[Built-in Effects Plugins](built-in-effects-plugins.md).

## 11. Export Your Song

1. Set the In marker at the start of the song and the Out marker at
   the end to define the export range.
2. Choose *File > Export: Render to a file...*.
3. Set **Range** to **Marked Region**, pick a **Format** (such as WAV) and
   click **Render**.

→ See [Mixing Down](mixing-down.md) and
[Rendering and Stems](rendering-and-stems.md).

## 12. Where to Go Next

Here are some highlights, each covered in its own chapter. Items marked
<span class="pro">PRO</span> need Waveform Pro or an expansion; each chapter
says which.

- [The AI Assistant](ai-assistant.md): an assistant (cloud or local
  model) that can carry out actions in your Edit.
- [Clip Launcher](clip-launcher.md) <span class="pro">PRO</span>: trigger clips and scenes live.
- [Comping](comping.md): build one take from the best parts of several passes.
- [Warp Time](warp-time.md): bend and stretch audio in time.
- [Clip Layer Effects](clip-layer-effects.md): non-destructive, layered
  audio manipulation.
- [Modifiers](modifiers.md): modulate parameters without drawing automation.
  The LFO is in every edition; the others need Waveform Pro or the MIDI
  Producer Expansion.
- [MIDI Effects](midi-effects.md): real-time MIDI processing.
- [Stem Separation](stem-separation.md) <span class="pro">PRO</span>: split a mix into its parts.
- [Macros](macros.md): script and automate Waveform actions.
- [Plugin Racks](racks.md): group and wire up plugins freely.

For everything that has changed recently, see [What's New](whats-new.md).
