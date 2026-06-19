# Utility Plugins

Waveform includes three utility plugins available to all editions that handle
routing and CPU management tasks. To add one, drag the *Plugin Object* to a
track (or right-click an existing plugin and choose *Add new plugin*) and pick
it from the **Utility** category of the built-in Waveform plugins. See
[Using Plugins](using-plugins.md) for more on inserting plugins.

## Insert (Hardware Insert)

The **Insert** plugin routes a track's signal out through a physical output,
through an external device, and back in through a physical input — effectively
patching outboard gear inline in your plugin chain. The send and return can be
either audio or MIDI devices, so it works equally well for outboard effects and
external MIDI hardware.

### Setting Up an Insert

After adding the plugin, open its properties to configure the routing:

- **Name** — an optional label shown in the plugin slot.
- **Send Device** — the output that feeds your external device. If no output is
  selected, the slot shows a warning: *"You must select an output device to use
  an insert plugin."*
- **Return Device** — the input that receives the processed signal back from
  your hardware.
- **Time Adjust** — a latency compensation offset (−300 ms to +300 ms,
  default 0). Positive values label the reading *"Late"*; negative values label
  it *"Early"*. Use this to align the returned signal with the rest of your mix.
- **Auto-Detect** — runs a **Device Latency Test** that plays a test signal,
  measures the round-trip delay, and offers to apply the result as the Time
  Adjust value. (Auto-detection requires an audio return signal.)
- **Refresh Devices** — rescans your device list if you've plugged in or
  switched hardware after Waveform started.

### Rendering with an Insert

Because the signal must travel through real hardware in real time, rendering at
faster-than-real-time speed will produce silence or incorrect results on any
track using an Insert. When you render or export, enable the **Render at 1X
Play-Speed** option in the render dialog. See [Mixing Down](mixing-down.md)
for details on that option.

---

## Freeze Point

The **Freeze Point** plugin is a marker you place inside a track's plugin chain.
Everything in the chain *before* the Freeze Point can be rendered (frozen) to
an audio file by Waveform, freeing up the CPU resources those plugins were
consuming. Everything *after* the Freeze Point continues to run live.

### Using a Freeze Point

Once it is in the chain (its slot is labelled **Freeze** and always shows a
snowflake icon, which brightens when the track is frozen):

- The plugin slot shows a **Freeze Track** button. Click it to render everything
  before the Freeze Point and replace it with static audio playback.
- While a track is frozen the button changes to **Unfreeze Track**. Clicking it
  discards the rendered file and restores the original processing.

A Freeze Point cannot be added to clips, plugin racks, or master tracks, and it
cannot be disabled with the plugin's enable/bypass switch — it is always active
when present in a chain.

### Freeze Point Settings

The behaviour of the Freeze Point is influenced by two settings on the
**Settings → General** page, under **Mixing Defaults**:

- **Auto freeze** — controls when freezing happens: either *Manually* (only
  when you click Freeze Track) or *Freeze track when a freeze point is created
  or copied* (automatic).
- **Freeze point** — controls where the Freeze Point is inserted when a track
  is frozen: *Before plugins*, *Pre-fader*, or *Post-fader*.

See [Reference: Settings — General](reference-settings.md#general) for the full
description of those options.

---

## Patch Bay

The **Patch Bay** plugin is a flexible audio routing matrix. Each **wire** in
the matrix routes one source channel to one destination channel at a specific
gain level (in dB). Multiple wires can fan out from the same source and sum
into the same destination.

> The Patch Bay is an *audio* routing matrix. It is different from the
> **MIDI Patch Bay**, which is a MIDI-routing plugin covered in the
> [MIDI Effects](midi-effects.md) chapter.

### Patch Bay Controls

A new Patch Bay defaults to a stereo pass-through: input 1 → output 1 and
input 2 → output 2, both at 0 dB. The plugin slot in the mixer draws a live
mini-diagram — input and output channels as dots, with arrows for each wire — so
you can read the routing at a glance.

Open the Patch Bay's properties to edit the wiring in its graphical editor. The
input channels are listed down one side and the output channels down the other:

- **Make a connection** by dragging from an input connector onto an output
  connector (or vice versa). A new wire starts at 0 dB.
- **Adjust a wire's gain** by selecting it and using the **Gain** slider, which
  reads out in dB.
- Wires can fan out and sum, so a single source can feed several destinations
  and several sources can be mixed into one destination.

Typical uses include folding stereo down to mono, duplicating a channel for
parallel processing, or swapping left and right. Like the Freeze Point, a Patch
Bay cannot be added to clips or plugin racks and cannot be bypassed.

## Aux Send and Aux Return

You will also find the **Aux Send** and **Aux Return** plugins in the Utility
folder. These are the building blocks of an effects bus: an *Aux Send* taps a
portion of a track's signal and routes it to a numbered bus, and an *Aux Return*
receives that bus on another track so a single effect can be shared by many
tracks. Because they are really part of the bus-routing workflow rather than
standalone effects, they are covered in their own chapter — see [Effects Bus
Tracks](effects-bus-tracks.md).

## Spectrum

The **Spectrum** plugin is a real-time spectrum analyser. It doesn't change the
audio at all — it simply shows you a live graph of the signal's frequency
content as it passes through, so you can *see* where the energy sits in a mix.
Insert it anywhere in a chain to check a track's tonal balance, spot a resonant
build-up, or confirm that a high-pass filter is doing what you expect.

## Mid Side

The **Mid Side** plugin converts a stereo signal between standard left/right and
**mid/side** form. It has a single **Mode** control:

- **Encode** turns a left/right signal into mid (the mono centre) and side (the
  stereo difference).
- **Decode** turns a mid/side signal back into normal left/right.

Insert a *Mid Side* in *Encode* mode, then process the centre and sides
separately with other plugins, and finally insert another *Mid Side* in *Decode*
mode to return to a normal stereo signal. It's a classic trick for widening a
mix or for EQ'ing the centre and sides independently.

## AB Switch

The **AB Switch** plugin routes the incoming signal to one of two outputs, **A**
or **B**, chosen with its **Mode** control. By feeding A and B into different
processing chains you can flip between two treatments of the same source and
compare them instantly — useful for A/B'ing effect settings while you work.

## Mono Switch

The **Mono Switch** is a mono-compatibility and stereo-troubleshooting tool. Its
controls let you collapse a stereo signal to mono and check how the mix holds up:

- **Mono** switches mono summing on or off.
- **Mode** sets how the two channels are combined when summing — at **−6 dB**,
  **−3 dB**, or **0 dB**, or listening to the **L Only** or **R Only** channel on
  its own.
- **Swap L/R** exchanges the left and right channels.
- **L Polarity** and **R Polarity** flip the polarity (phase) of each channel
  independently, which helps track down phase-cancellation problems.

It's the quick way to confirm a mix still sounds right when played back in mono —
on a phone speaker, a club PA, or anywhere the stereo image gets folded down.
