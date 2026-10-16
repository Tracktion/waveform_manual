# Samplers and Instruments

Waveform includes a family of built-in samplers, from the Micro Drum Sampler, available in every edition, to a full multi-layer keyboard sampler. Alongside them are the **Subtractive** and **Bass Osc** synthesizers and **Attracktive**, a free player for Tracktion's sound packs. All of these are in the *Waveform > Instruments* folder of the plugin picker.

## The Sampler Family at a Glance

There are five built-in samplers. Here's which is which:

| Plugin | What it is | Available in |
|---|---|---|
| **Micro Drum Sampler** | Pad-based, one-shot only, 64 pads | All editions (Free, OEM, Pro) |
| **Micro Sampler** | Keyboard sampler, note zones, WAV/AIFF | All editions |
| **Rompler** | Factory preset playback, keyboard-style | All editions |
| **Drum Sampler** | Full pad sampler with velocity layers and note repeat | Waveform Pro, or the MIDI Producer or Synth Pack Expansion |
| **Multi Sampler** | Full keyboard sampler, up to 32 layers, SFZ/SF2 | Waveform Pro, or the MIDI Producer or Synth Pack Expansion |

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

The **Drum Sampler** <span class="pro">PRO</span> adds:

- **Velocity layers**: assign different samples to play at different velocity ranges on the same pad, for more expressive drum sounds
- **Note Repeat**: holds down a pad and automatically re-triggers it at a tempo-synced rate (see below)

On both drum samplers, the **Toggle MIDI learn** button in the pad header assigns a pad to an incoming MIDI note. Right-clicking a pad opens its menu instead: **Drum Icon**, **Colour** and **Clear**. On the Micro Drum Sampler, the menu button on the pad's sound row has **Drum Icon**, **Colour**, **Choke group** and **Delete**.

### Note Repeat <span class="pro">PRO</span> { #note-repeat }

The **Note Repeat** feature is available on the Drum Sampler. When enabled, holding a pad triggers it repeatedly at a tempo-synced rate while the note is held. Use the **Repeat Rate** control to set the subdivision (e.g. 1/8, 1/16). This is useful for rolls and fills.

> 💡 **Tip:** Note Repeat is great for building fills on the fly during live performance. Hold a snare pad, enable Note Repeat, and sweep the rate to create a build-up effect.

### Pad Layouts and Pad Settings

The **Load / Save pad layout preset** button, next to **Toggle MIDI learn**, opens a menu:

- **Load Pad Layout...**: loads a saved `.padpreset` file onto the pads.
- **Save Pad Layout...**: saves the current pads. Choose what to store: **MIDI Note** (ticked by default), **Name**, **Icon** and **Colour**.
- **Default Pad Layout**: picks a saved layout to apply whenever the sampler sets up its default pads, or **None**.

On the Drum Sampler and the Multi Sampler's PADS page, the top row of the list to the right of the pads holds the selected pad's sound settings, plus:

**Spread Zones**: Divides the velocity range evenly between the pad's sound layers, so each layer plays for its own slice of velocities.

**Choke**: Puts the pad in a choke group (Group 1 to Group 16, or **None**). Triggering a pad silences the other pads in the same group, for example a closed hi-hat cutting off an open one.

**Stereo Out**: Sends the pad to one of the sampler's 16 stereo outputs, so you can process it on its own.

The Multi Sampler also has a **PADS** page. Whenever you open it with no pads set up, Waveform offers to set up default pads (**Setup Pads**).

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

You can have **up to 32 layers** in the Multi Sampler. Layers can overlap. By default, if multiple layers match a played note, all of them sound. The play mode in the Options menu (below) can change that to Round Robin or Random.

To add a layer, drag an audio file directly onto the zone grid. Waveform creates a new layer at the position you drop it.

### Layer and Zone Tools

Right-click a sound layer, in the zone grid or the layer list, for these options:

- **Remove**, **Rename** and **Duplicate**.
- **Duplicate: Pitch shifted up** / **Duplicate: Pitch shifted down**: for a layer mapped to a single note, makes 1x to 12x copies on the notes above or below, each pitched to its note.
- **Quick Zones**: maps the layer to a single drum note: **Kick**, **Snare**, **Hi Hat Closed**, **Hi Hat Open**, **Clap**, **Low Tom**, **Hi Tom** or **Ride**.

The menu button in the sampler's title bar opens the Options menu:

**MPE**: Turns on MPE (MIDI Polyphonic Expression) input, for MPE controllers.

**Voice Stealing**: Lets a new note take over a playing voice when every voice is in use.

**Mono**: Plays one note at a time.

**Select sound layer on note on**: Selects the layer you play, so its settings show as you play.

**All** / **Round Robin** / **Random**: What happens when several layers match a note. *All* plays every one of them, *Round Robin* takes turns, and *Random* picks one at random. (Default: All; Round Robin on the Drum Sampler)

**Panic**: Stops every sounding note.

The Micro Drum Sampler's Options menu only has **Voice Stealing** and **Panic**.

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

**Loop** (Choices: Loop: None, Loop: Until Release, Loop: Until End): turns looping on. *Until Release* loops while the note is held, then plays on to the end. *Until End* keeps looping until the note's release has finished.

**Key tracking mode** (Choices: Fixed Pitch, Resample, Pitch Shift): how the layer follows the notes you play. *Fixed Pitch* plays the sample at its own pitch on every note, which suits drums. *Resample* speeds the sample up or slows it down, like a tape machine. *Pitch Shift* changes the pitch without changing the length.

**Reverse**: plays the sample backwards.

**Offline pitch shift** and **Offline timestretch**: process the sample itself, shifting its pitch in semitones or changing its length. The Micro Sampler doesn't have these two.

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

### LFOs (Per Layer, Multi Sampler) <span class="pro">PRO</span> { #lfos-per-layer-multi-sampler }

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

### Recording a Sample <span class="pro">PRO</span> { #recording-a-sample }

The Multi Sampler's **RECORD** page records audio straight into the sampler. You can also drag an audio file onto the page to edit it the same way.

1. Choose what to record with the **Input source** menu: **System Input (Mono)** or **System Input (Stereo)** (pick the channels from **Channels**), **Sampler Input** (the audio coming into the plugin on its track), **Sampler Output** (the sampler itself) or **System Output** (everything your computer plays). Turn on **Live Input Monitoring** in the same menu to hear an input while you record.
2. Click **Record** to start, and again to stop.
3. Drag the in and out flags to the part you want, and click **Play** to audition it. **Trim** cuts the recording down to the flags.
4. Use the **Load / save** menu to keep it: **Create New Sound Layer...** adds it to the sampler, **Save to Scratchpad...** stores it on the Scratchpad, and **Save As...** saves a WAV file. **Load...** opens an audio file instead.

**Retrospective Record** grabs the audio Waveform has been buffering from your inputs, even if you weren't recording. Every captured file is saved to the Scratchpad, which opens, and the first one also opens on the page.

> 📝 **Note:** On macOS, recording the System Output needs the Tracktion Virtual Device audio driver. If it isn't installed, Waveform offers to install it when you choose System Output. System Output isn't offered on Linux.

### Slicing a Sample <span class="pro">PRO</span> { #slicing-a-sample }

On the RECORD page, drag across the waveform to mark a slice. The slice button (its tooltip reads *Crop*) opens a menu with more options:

- **Automatically create slices on beat**: finds the hits in the sample and marks a slice on each. The unlabelled Beat Sensitivity slider in the same menu sets how many hits it finds, and re-marks the slices as you move it.
- **Clear all slices**.
- **Save each slice to scratchpad...**: saves every slice as its own file.
- **Create sound layer with each slice...**: asks for a name, then makes one layer per slice, each on its own note starting from the bottom of the note range, with Fixed Pitch key tracking.

To slice a drum loop from the arrangement, select its audio clip and use **Slice drum loop and open in sampler** in the Actions panel. Choose **Slice drum loop** to put each hit on its own note, or **Beat replace drum loop** to play one sound in the loop's rhythm. Waveform adds a Multi Sampler to the track and marks the slices. Adjust them, then click **Create MIDI** to replace the audio clip with a MIDI clip that plays the slices.

### The Scratchpad

The Scratchpad is temporary storage for samples, shared by the samplers. Click the Scratchpad button in the sampler's toolbar to show it down the right-hand side. Drag audio files onto it, or save recordings and slices to it, then drag them onto pads or the zone grid. Each row has play and edit buttons; right-click a row to **Delete** it (it moves to the Trash or Recycle Bin) or, on macOS and Windows, **Show in Finder** / **Show in Explorer**. The Rompler and Micro Drum Sampler have no Scratchpad.

### Presets

The preset name in the sampler's title bar opens the preset menu: pick a preset, or use **Save**, **Save as...**, **Delete**, **Copy samples into Edit** (when any layer uses a sample file that isn't stored in the Edit) or **Reset to default**.

**Save as...** opens **Create Sampler Preset**, with a name, an optional description, tags and **Save audio preview** (on by default). With the preview option on, a **Preset Preview** window then asks you to *Play one or more notes to record a preset preview*. Click **Use As Preview** to keep it, or **Discard**. The Multi Sampler, Drum Sampler and Rompler also have a **PRESETS** page for browsing them.

### Micro Sampler vs Multi Sampler

![](images/Instruments/Micro%20Sampler@2x.png)
*The Micro Sampler, a simpler keyboard sampler with SOUND and ZONES pages.*

The **Micro Sampler** is a simpler keyboard sampler available in all editions. It has SOUND and ZONES pages and can hold several sound layers, each mapped to a note range, but you can't set velocity ranges. It only loads WAV and AIFF files (no SFZ or SF2) and has no PRESETS or effects pages, though the preset menu in the title bar still works. It's a good choice if you just need to load a few samples and play them across the keyboard without the overhead of the full Multi Sampler.

### Rompler

![](images/Instruments/Rompler@2x.png)
*The Rompler, a preset-based keyboard instrument.*

The **Rompler** is a preset-based instrument: it plays back factory sample banks without letting you edit the zone grid directly. Think of it as a read-only Multi Sampler, designed for quickly loading and playing pre-built instruments. It has the same keyboard layout view as the other samplers, but you can't drag new samples onto it. Just pick a preset and play.

---

## Subtractive Synthesizer <span class="pro">PRO</span> { #subtractive-synthesizer }

![](images/Instruments/Subtractive@2x.png)
*The Subtractive synthesizer showing the Oscillators page and the LFOs.*

**Subtractive** is Waveform's built-in multi-oscillator synthesizer. It's a traditional subtractive/hybrid design: oscillators generate a raw waveform, filters shape the tone, and envelopes and LFOs add movement.

> 📝 **Edition:** Waveform Pro, or with the MIDI Producer or Synth Pack Expansion.

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

## Bass Osc <span class="pro">PRO</span> { #bass-osc }

![](images/Instruments/Bass%20Osc@2x.png)
*The Bass Osc, a compact single-oscillator bass synthesizer.*

> 📝 **Edition:** Waveform Pro, or with the MIDI Producer or Synth Pack Expansion.

**Bass Osc** is a small single-oscillator synth built for bass sounds. A single **Wave** control morphs the oscillator shape, while **Tune** and **Detune** set its pitch. The signal passes through one resonant filter with **Cutoff**, **Res**, and **Drive** controls, and decay-based amp and filter envelopes (each with a velocity amount) shape the sound over time. A **Glide** control gives smooth pitch slides between notes for classic bass lines, and it ships with a set of factory presets.

## Attracktive

**Attracktive** is a free instrument, in every edition, that plays Tracktion's Attracktive, BioTek, BioTek 2 and BioTek 3 sound packs. Each sound brings its own set of controls, background and colours, so the main panel changes with what you load. The bar along the top and the keyboard stay the same.

### Installing the Sounds

Attracktive doesn't include its sounds. Install the factory content from the Download Manager: open *Settings > Downloads*, click **Launch Download Manager** and install the Attracktive content (see [Downloads](reference-settings.md#downloads)). Attracktive installs and lists new packs while its window is open and Waveform is in the foreground, showing an *Installing Content Pack* overlay while it works. Click the **Refresh** button in the Browser if a pack doesn't appear.

Until content is installed, the Browser shows a **Missing Content** page. It lists the **Preset Instruments** and **Preset Samples** folders it looks in, with **Select**, clear (x) and **Reveal** buttons, and an **Install Content Pack** button for a pack you have downloaded from the website.

### Loading and Saving Sounds

- Click the arrows beside the instrument name to step through the instruments.
- Click the Browse button (a list with a magnifying glass) for the **Browser**. Filter by author, pack, category, style or character, or search by name or tag, then double-click an instrument to load it. Click the star on the selected instrument to make it a favourite, and tick **Show only favourites** to list just those.
- Click the Save button, beside the instrument name, to store your changes. It opens a **Save Instrument** dialog in your User Instruments folder.

### Common Controls

**Voices**: The most notes Attracktive plays at once. Lower it to save CPU. (Range: 1 to 256, Default: 40)

**Tune**: The tuning reference for A, in Hz. (Range: 400 to 500 Hz, Default: 440 Hz)

**Effect Mix** and **Volume**: Every sound has these two in the top-right of the main panel. Effect Mix balances the dry sound against the effects.

**External**, **Tempo**, **Arp** and **Latch**: Beside the keyboard. External syncs the arpeggiator and other timed parameters to the Edit's tempo. With External off, they follow **Tempo** instead (Range: 30 to 300 BPM, Default: 120 BPM). Arp and Latch are greyed out unless the sound uses the arpeggiator (and, for Latch, arpeggiator latching).

The settings button at the right of the top bar opens the **Global** panel, with **Author**, **Zoom** (75%, 100% or 150%), **Control Behaviour**, **MPE** and **Multiple Cores**, **Sample Streaming** (**Prefer Streaming** and **Streaming Buffer Size**), **Install Content Pack** and the content **Locations** (**Preset Instruments**, **Preset Samples** and **User Instruments**).

---

## ⚡ Things to Watch Out For

- **Edition gating.** The Drum Sampler and Multi Sampler need Waveform Pro, or the MIDI Producer or Synth Pack Expansion. If you open a project that uses them in a Free or OEM edition, the plugins will be present in the chain but won't produce sound. Check the plugin's status indicator if a sampler seems silent.

- **Zone overlaps are intentional.** The zone grid allows layers to overlap. If you're hearing two samples at once when you expected one, check whether two layers cover the same note/velocity area. Overlapping is by design for crossfades and round-robin setups, but it can be surprising the first time.

- **SFZ/SF2 imports may be large.** Loading a full SFZ or SF2 instrument bank can bring in a large number of audio files at once. On older or slower drives, the initial load may take a moment.

- **The legacy "Sampler" plugin is different.** There's still an older plugin named simply "Sampler" in the Legacy category. It's a different plugin with a different interface. If you're looking for the new family described in this chapter, choose from the **Instruments** category in the plugin picker.

## Moving On

For step-sequenced drum patterns, see [Step Clips](step-clips.md). It has tips on combining step clips with the Drum Sampler for beat programming. For the synthesizer side, the [4OSC Synthesizer](4osc.md) and [Wavetable Synthesizer](wavetable.md) chapters cover the other built-in synths.
