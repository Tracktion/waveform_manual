# Quick Start

This chapter is the fast path from a fresh install to your first recording
and a finished audio file. It is deliberately brief: each step gives you
just enough to get going, then links to the full chapter when you want the
detail. If you are brand new to Waveform, read it top to bottom. If you are
returning, skim the headings and jump to whatever you need.

Waveform runs as a 64-bit application on macOS, Windows, and Linux, and is
available in Free, OEM, and Pro editions.

> 💡 **Tip:** You can view and customise every keyboard shortcut on the
> *Settings > Keyboard Shortcuts* page. If your shortcuts have been changed
> and you want Waveform's standard set back, click *Reset to Defaults* there
> and choose *Restore default Waveform key mappings*. See
> [Keyboard Shortcuts](keyboard-shortcuts.md) for the full list.

## 1. Install and Unlock

1. Download Waveform from [tracktion.com](https://www.tracktion.com) and run
   the installer.
2. Launch Waveform. Until it is unlocked it runs in demo mode.
3. To unlock, go to the **Settings** tab, choose **Licensing**, and click
   **Refresh Licenses**. Log in with your tracktion.com account and Waveform
   pulls down and applies any licenses you own.

→ For status badges, expansions, and per-computer licensing, see
[Reference: Settings > Licensing](reference-settings-licensing.md).

## 2. First-Run Setup

The first time you launch Waveform, the **First Run Setup** panel appears on
the left. Work through its steps in order — it takes you straight to each
setting you need to configure. If you close it, you can reopen it any time
from **Help > Show First Run Setup**.

→ See [Audio Device Setup](audio-device-setup.md).

## 3. Set Up Your Audio Device

Open **Settings > Audio Devices** and choose how Waveform talks to your
hardware:

- **Windows:** ASIO (recommended) or Windows Audio
- **macOS:** Core Audio
- **Linux:** JACK (recommended) or ALSA

Set your **sample rate** (44100 or 48000 Hz is a fine default) and an
**audio buffer size** — start around 256 samples and raise it if you hear
clicks or dropouts.

> ⚠️ **Warning:** If you plan to overdub (record while listening to existing
> tracks), you **must** run **Auto-Detect** with a hardware loopback so your
> recordings line up in time. Repeat it whenever you change the sample rate
> or buffer size. This is the single most important setup step for accurate
> recording.

→ Full walk-through, including the Auto-Detect loopback procedure, is in
[Audio Device Setup](audio-device-setup.md) and
[Reference: Settings > Audio Devices](reference-settings-audio-devices.md).

## 4. Connect MIDI (Optional)

If you have a MIDI keyboard or controller, connect it and check it appears
under **Settings > MIDI Devices**.

→ See [MIDI Setup](midi-setup.md).

## 5. Hear Something — Open a Demo

The quickest way to confirm everything works is to play a demo song:

1. Go to the **Projects** tab.
2. Click **Get Demo Songs** in the menu at the lower left and download a song.
3. Double-click its Edit to open it, then press the **Spacebar** to play.

→ See [Installing the Demo Projects](installing-the-demo-projects.md) and
[Basic Navigation](basic-navigation.md).

## 6. The Edit Window at a Glance

An Edit is where you record, arrange, and mix. The window has four main areas:

- The **menu bar** along the top.
- The **Browser** down the left side, which also hosts the **Actions panel**.
- The **arrangement** (and the optional **Mixer**) in the centre.
- The **transport bar** along the bottom, with playback controls, cursor
  position, tempo, and the master controls.

The **Actions panel** is central to Waveform: select anything — a clip, a
track, a plugin — and it shows the settings and actions for that selection.

→ See [The Edit Tab](edit-tab.md), [Basic Navigation](basic-navigation.md),
and [The Actions Panel](actions-panel.md).

## 7. Start a Project

On the **Projects** tab, click **New Project**, give it a name and location,
and click **Create Project**. Waveform opens a new Edit ready to work in.

→ See [Basic Navigation](basic-navigation.md).

## 8. Record Audio

1. Click the **input** arrow beneath a track name and choose an audio input.
2. Click the **record-arm** button (the red dot) on that input.
3. Check your levels, then press **Record** in the transport bar.

→ See [Recording Audio](recording-audio.md).

## 9. Record MIDI / Use an Instrument

1. Drag the **Plugin object** onto a track's mixer area and choose a virtual
   instrument from the menu. Double-click the instrument to open its
   interface.
2. Set the track's **input** to your MIDI device and record-arm it.
3. Press **Record** and play.

→ See [MIDI Recording](midi-recording.md) and [Using Plugins](using-plugins.md).

## 10. Add Effects and Mix

Waveform's mixer is inline with each track and fully modular. Every track
starts with a **Volume & Pan** and a **Level Meter** plugin. To add an effect,
drag the **Plugin object** into the track's mixer area and pick a plugin —
you can drop it anywhere in the signal chain and reorder it later by dragging.

→ See [The Edit Tab](edit-tab.md), [Using Plugins](using-plugins.md), and
[Built-in Effects Plugins](built-in-effects-plugins.md).

## 11. Export Your Song

1. Set the **In-marker** at the start of the song and the **Out-marker** at
   the end to define the export range.
2. Choose **Export > Render to a file** from the menu bar.
3. Pick a format (WAV or MP3), make sure **Only render the marked region** is
   on, and click **Render**.

→ See [Mixing Down](mixing-down.md).

## 12. Where to Go Next

You now have the essentials. Waveform has much more to explore — here are some
highlights, each covered in its own chapter:

- [The AI Assistant](ai-assistant.md) — a Claude-powered assistant that can
  carry out actions in your project.
- [Clip Launcher](clip-launcher.md) — trigger clips and scenes live.
- [Comping](comping.md) — build one perfect take from several passes.
- [Warp Time](warp-time.md) — bend and stretch audio in time.
- [Clip Layer Effects](clip-layer-effects.md) — non-destructive, layered
  audio manipulation.
- [Modifiers](modifiers.md) — modulate parameters without drawing automation.
- [MIDI Effects](midi-effects.md) — real-time MIDI processing.
- [Stem Separation](stem-separation.md) — split a mix into its parts.
- [Macros](macros.md) — script and automate Waveform actions.
- [Plugin Racks](racks.md) — group and wire up plugins freely.

For everything that has changed recently, see [What's New](whats-new.md).
