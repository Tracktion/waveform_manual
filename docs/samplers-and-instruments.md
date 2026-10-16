# Samplers and Instruments

Waveform includes a family of built-in samplers, from a simple free-tier drum pad to a full multi-layer keyboard sampler, plus a multi-oscillator subtractive synthesizer called **Subtractive**. All of these live in the **Instruments** category of the plugin picker. This chapter walks through each one and explains when you'd reach for it.

## The Sampler Family at a Glance

There are five built-in samplers. Here's which is which:

| Plugin | What it is | Available in |
|---|---|---|
| **Micro Drum Sampler** | Pad-based, one-shot only, 64 pads | All editions (Free, OEM, Pro) |
| **Micro Sampler** | Keyboard sampler, note zones, WAV/AIFF | All editions |
| **Rompler** | Factory preset playback, keyboard-style | All editions |
| **Drum Sampler** | Full pad sampler with velocity layers and note repeat | Pro (or MIDI Producer / Synth Pack expansions) |
| **Multi Sampler** | Full keyboard sampler, up to 32 layers, SFZ/SF2 | Pro (or MIDI Producer / Synth Pack expansions) |

The **legacy Sampler** (the original simple sampler) is a separate, older plugin. It's described in [Legacy Plugins](legacy-plugins.md).

---

## Pad-Based Samplers: Drum Sampler and Micro Drum Sampler

![](images/Instruments/Drum%20Sampler@2x.png)
*The Drum Sampler showing the 4×4 pad grid with bank selector and per-pad controls.*

The **Drum Sampler** and **Micro Drum Sampler** are built around a 4×4 pad grid. They work like a hardware drum machine: each pad holds a sample, and you trigger pads via MIDI notes or by clicking them.

### Pads and Banks

Each sampler has **four banks** (A, B, C, D), each containing 16 pads (64 pads total). Switch banks using the bank selector buttons. Pads in different banks map to different MIDI notes, so you can spread a full kit across all four banks if you need more than 16 sounds.

To load a sample onto a pad, drag an audio file from the Browser directly onto the pad. You can also click a pad to select it, then use the file browser to choose a sample.

Each pad has a **Solo** and **Mute** button for quick auditioning.

### Micro Drum Sampler vs Drum Sampler

![](images/Instruments/Micro%20Drum%20Sampler@2x.png)
*The Micro Drum Sampler, a cut-down one-shot version of the Drum Sampler.*

The **Micro Drum Sampler** is a cut-down version and is available in all editions of Waveform. It supports one-shot playback only: the sample plays through to the end whenever the pad is triggered, regardless of how long you hold the note.

The **Drum Sampler** (Pro only) adds:

- **Velocity layers**: assign different samples to play at different velocity ranges on the same pad, for more expressive drum sounds
- **Note Repeat**: holds down a pad and automatically re-triggers it at a tempo-synced rate (see below)

On both drum samplers, the **Toggle MIDI learn** button in the pad header assigns a pad to an incoming MIDI note. Right-clicking a pad opens its menu instead: **Drum Icon**, **Colour**, **Choke group** and **Delete** or **Clear**.

### Note Repeat

The **Note Repeat** feature is available on the Drum Sampler. When enabled, holding a pad triggers it repeatedly at a tempo-synced rate while the note is held. Use the **Repeat Rate** control to set the subdivision (e.g. 1/8, 1/16). This is useful for rolls and fills.

> 💡 **Tip:** Note Repeat is great for building fills on the fly during live performance. Hold a snare pad, enable Note Repeat, and sweep the rate to create a build-up effect.

---

## Keyboard Samplers: Multi Sampler, Micro Sampler, and Rompler

![](images/Instruments/Multi%20Sampler@2x.png)
*The Multi Sampler zone grid showing multiple layers mapped to note and velocity ranges.*

The keyboard-style samplers let you map samples across the note and velocity range of your keyboard. Each sample assignment is called a **layer**, and each layer covers a note range and a velocity range.

### The Zone Grid

The zone grid is the central view in the Multi Sampler and Micro Sampler. It shows a grid with:

- **Horizontal axis**: note range (low to high pitch)
- **Vertical axis**: velocity range (soft to hard)

Each layer appears as a rectangle on the grid. You define the rectangle by setting a **low note**, **high note**, **low velocity**, and **high velocity** for that layer. If a played note falls inside a layer's rectangle, that layer's sample plays. In the Micro Sampler, layers only have a note range.

You can have **up to 32 layers** in the Multi Sampler. Layers can overlap. If multiple layers match a played note, all of them sound, which is how round-robin and velocity crossfade works.

To add a layer, drag an audio file directly onto the zone grid. Waveform creates a new layer at the position you drop it.

### Supported Sample Formats

In addition to standard audio files (WAV, AIFF), the Multi Sampler supports loading complete multi-sample instruments:

- **SFZ**: open-format text-based sample maps
- **SF2** (SoundFont 2): widely used bank format
- **ZIP**: a packaged collection of samples with a map

Drag any of these formats onto the sampler to load the full instrument in one step.

### Per-Layer Controls

Once you've selected a layer, you can fine-tune how it plays:

**Root Note**: the pitch at which the sample plays at its original pitch. Notes above or below this will pitch the sample up or down accordingly.

**Gain**: volume of this layer. (Default: 0 dB)

**Pan**: stereo position. (Default: center)

**Fine Tune**: pitch offset in cents. Use this to correct slightly out-of-tune samples. (Default: 0)

**Sample In / Out**: sets the start and end point within the audio file. Drag the waveform display's handles to trim the sample. (Default: full file)

**Loop In / Out**: sets the loop region within the sample. Requires looping to be enabled.

**Choke Group**: assign a choke group number so that triggering one layer silences others in the same group (e.g. open hi-hat choked by closed hi-hat). (Default: none)

### Filter (Per Layer)

Each layer has an optional filter, off by default. Enable it with the filter toggle, then set:

**Filter Mode**: choose between lowpass, highpass, bandpass, and other types.

**Cutoff**: the filter's cutoff frequency. (Default: 20 kHz)

**Q**: resonance. Higher values create a sharper peak at the cutoff. (Default: 0.001)

### Envelope (Per Layer)

Each layer has an amplitude envelope with adjustable curve shapes:

**Attack**: time to reach full volume. (Default: 1 ms)

**Attack Shape**: curve shape of the attack ramp (linear to logarithmic).

**Decay**: time to fall from peak to sustain. (Default: 285 ms)

**Decay Shape**: curve shape of the decay.

**Sustain**: volume level held while the note is held. (Default: 100%)

**Release**: time to fall to silence after the note is released. (Default: 1 ms)

**Release Shape**: curve shape of the release.

### LFOs (Per Layer, Multi Sampler)

The **Multi Sampler** gives each layer **two LFOs** for modulation. Each LFO has:

**Shape**: waveform type (sine, triangle, saw, square, etc.)

**Sync**: switches the rate between a free rate in Hz and a tempo-synced rate.

**Rate**: speed of the LFO, in Hz or as a tempo division depending on Sync. (Default: 1 Hz)

**Depth**: depth of the modulation, from -1 to +1. (Default: 1.0)

**Phase**: starting phase. (Default: 0)

**Symmetry**: skews the shape of the waveform within each cycle. (Default: 50%)

**Delay**: time before the LFO kicks in after note-on. Useful for delayed vibrato. (Default: 0)

**Fade**: time for the LFO to fade in after its delay. (Default: 0)

Each layer also has two modulation envelopes, **ENV1** and **ENV2**, with the same controls as the amplitude envelope.

### Effects (INSERT, FX1, FX2, MASTER)

Every sampler except the Micro Sampler has built-in effects, on these pages:

- **INSERT**: an effects chain on the selected layer.
- **FX1** and **FX2**: two send buses. Each layer has **Dry**, **FX1** and **FX2** knobs that set how much of it goes to each.
- **MASTER**: an effects chain on the sampler's whole output.

The Rompler has the FX1, FX2 and MASTER pages, but no INSERT page.

Each chain can hold these effects:

- **Reverb**: Natural, Non-linear, or Plate types. Controls: pre-delay, size, decay, diffusion, low/high cut, low/high damping, pan, mix.
- **Distortion**: Drive, post gain, tone, emphasis, mix.
- **Chorus**: Delay, depth, rate, mix.
- **Compressor**: Threshold, ratio, attack, release, knee, output.
- **Delay**: Low cut, high cut, feedback, delay time, mix.
- **EQ**: Three-band (low/mid/high) with per-band frequency and gain.
- **Filter**: Shape, slope, frequency, gain, Q.
- **Gain**: Level.

> 💡 **Tip:** Insert effects let you put reverb on your pads and a compressor on your kick simultaneously, all inside a single plugin instance. It also helps keep template tracks tidy.

### Micro Sampler vs Multi Sampler

![](images/Instruments/Micro%20Sampler@2x.png)
*The Micro Sampler, a simpler keyboard sampler with SOUND and ZONES pages.*

The **Micro Sampler** is a simpler keyboard sampler available in all editions. It has SOUND and ZONES pages and can hold several sound layers, each mapped to a note range, but you can't set velocity ranges. It only loads WAV and AIFF files (no SFZ or SF2) and has no presets or effects pages. It's a good choice if you just need to load a few samples and play them across the keyboard without the overhead of the full Multi Sampler.

### Rompler

![](images/Instruments/Rompler@2x.png)
*The Rompler, a preset-based keyboard instrument.*

The **Rompler** is a preset-based instrument: it plays back factory sample banks without letting you edit the zone grid directly. Think of it as a read-only Multi Sampler, designed for quickly loading and playing pre-built instruments. It has the same keyboard layout view as the other samplers, but you can't drag new samples onto it. Just pick a preset and play.

---

## Subtractive Synthesizer

![](images/Instruments/Subtractive@2x.png)
*The Subtractive synthesizer showing the Oscillators page and the LFOs.*

**Subtractive** is Waveform's built-in multi-oscillator synthesizer. It's a traditional subtractive/hybrid design: oscillators generate a raw waveform, filters shape the tone, and envelopes and LFOs add movement. It's a Pro-only instrument (or available with the MIDI Producer or Synth Pack expansions).

> 📝 **Note:** **Collective**, which is a related instrument, ships with its own dedicated manual and is not covered here.

### Oscillators

Subtractive has **four oscillators**. Each oscillator has a type selector: choose from the available waveforms (saw, square, triangle, and others). The sine and granular waveform types are not available in Subtractive (they're used in the companion Collective instrument).

Each oscillator has pitch, level, and pan controls, and you can route each oscillator independently through the filter and amp section.

### Filters

The synth has **two filters** that can run in parallel or series. Each filter has the standard controls: cutoff, resonance, and envelope amount. Use the two filters together to create complex, multi-layered tone-shaping, for example a lowpass on one and a bandpass on the other.

### Envelopes and LFOs

Subtractive provides **four envelopes** (on the Env 1-2 and Env 3-4 tabs) and **four LFOs** as modulation sources. Envelopes follow standard ADSR shapes. LFOs offer multiple waveform shapes, rate control (free or tempo-synced), phase offset, delay, and fade.

### Arpeggiator

The built-in **arpeggiator** takes the notes you hold and re-plays them in a pattern. Toggle it with the Arp enable button. Key controls:

**Mode**: pattern direction (up, down, alternate, random, chord).

**Rate**: tempo-synced speed.

**Latch**: when enabled, the arpeggio keeps playing after you release the keys.

### FX Page

Subtractive includes a dedicated **Effects** page with built-in effects, the equivalent of the effects chains found in the Wavetable synthesizer. Switch to it with the Effects tab at the top of the plugin.

### Drive and EQ

A **Drive** section adds harmonic saturation to the output before the effects chain. A global **EQ** gives you final tonal shaping.

### Preset Browser

Subtractive ships with a library of factory presets. Use the preset browser at the top of the plugin to navigate categories (basses, leads, pads, arps, keys) and audition sounds. You can save your own patches alongside the factory library.

### Unison

**Unison** stacks multiple voices per note for a thicker, wider sound. You can set the number of unison voices and the detune spread per voice. More voices means more CPU, so dial it back if you're running many instances.

### Bass Osc

![](images/Instruments/Bass%20Osc@2x.png)
*The Bass Osc, a compact single-oscillator bass synthesizer.*

**Bass Osc** is a small single-oscillator synth built for bass sounds. A single **Wave** control morphs the oscillator shape, while **Tune** and **Detune** set its pitch. The signal passes through one resonant filter with **Cutoff**, **Res**, and **Drive** controls, and decay-based amp and filter envelopes (each with a velocity amount) shape the sound over time. A **Glide** control gives smooth pitch slides between notes for classic bass lines, and it ships with a set of factory presets.

---

## ⚡ Things to Watch Out For

- **Edition gating.** The Drum Sampler and Multi Sampler are Pro-only. If you open a project that uses them in a Free or OEM edition, the plugins will be present in the chain but won't produce sound. Check the plugin's status indicator if a sampler seems silent.

- **Zone overlaps are intentional.** The zone grid allows layers to overlap. If you're hearing two samples at once when you expected one, check whether two layers cover the same note/velocity area. Overlapping is by design for crossfades and round-robin setups, but it can be surprising the first time.

- **SFZ/SF2 imports may be large.** Loading a full SFZ or SF2 instrument bank can bring in a large number of audio files at once. On older or slower drives, the initial load may take a moment.

- **The legacy "Sampler" plugin is different.** There's still an older plugin named simply "Sampler" in the Legacy category. It's a different plugin with a different interface. If you're looking for the new family described in this chapter, choose from the **Instruments** category in the plugin picker.

## Moving On

For step-sequenced drum patterns, see [Step Clips](step-clips.md). It has tips on combining step clips with the Drum Sampler for beat programming. For the synthesizer side, the [4OSC Synthesizer](4osc.md) and [Wavetable Synthesizer](wavetable.md) chapters cover the other built-in synths.
