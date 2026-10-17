# Built-in Effects Plugins

The Waveform built-in effects are really quite simple. They act as
plugins that you can combine to build up more complex effects chains in
the mixer, or within plugin racks. While we won't touch on every single
effect here, we will go over the essential ones. Let's get started.

## Waveform Effects

Drag the plugin object to the mixer to open the plugin picker, then choose
*Waveform > Effects*. You'll see the list of built-in effects. The *Waveform*
folder also has *Instruments* and *Utility* subfolders.


![](images/30----01.png)

*Built-in Plugin Effects in Waveform*

This chapter covers the Volume & Pan and Level Meter plugins, the
equalisers, reverbs, Delay, Chorus, Phaser, the dynamics plugins,
Distortion, Pitch Shifter, DJ EQ and DJ Filter, the DJ Tools, the Text
plugin, Guitar IR, the Artisan Collection and Master Mix. The MIDI effects
and the utility plugins have chapters of their own: see
[MIDI Effects](midi-effects.md) and [Utility Plugins](utility-plugins.md).

> 📝 **Note:** The older versions of several effects are in a *Legacy*
folder, which is hidden until you turn it on: go to *Settings > Plugins*,
click **Enable internal plugins** and choose *Enable Legacy Plugins*, then
restart Waveform. See [Legacy Plugins](legacy-plugins.md).

> 📝 **Note:** Delay, Chorus, Phaser, Distortion, DJ Filter and the three
reverbs have a **Mix Lock** button on their **Mix** control. Turn it on to keep
your **Mix** setting when you load a preset, so you can try presets on a send or
an insert without the wet/dry balance jumping about. (Default: off)

## Volume & Pan Plugin

Whenever you create a track, you will see a *Volume & Pan* plugin at the
right in the inline mixer. This gives you basic level and pan controls
like you'd expect to find on any mixer channel. Since the Waveform mixer
is made up of plugins, the *Volume & Pan* plugin can be moved before
other plugins or deleted entirely. You can even add another *Volume &
Pan* and use it as a trim control for gain staging.

### Adjusting Volume

To control volume, click and drag the volume slider up and down. A large
volume slider appears as you drag, with readable dB markings for fine level
adjustment. The numeric value of the **Volume** setting appears in the
Actions panel.


![](images/30----02.png)

*Volume & Pan Plugin, Adjusting Volume*

### Adjusting Panning

The pan adjustment works similarly. Click the panner graphic, then drag left
or right to adjust the stereo position.


![](images/30----03.png)

*Volume & Pan Plugin, Adjusting Panning*

### Resetting Controls

To reset either **Volume** or **Pan** to its default position, hold down
Opt / Alt as you click the control.

### In the Actions Panel

With a *Volume & Pan* plugin selected, its values and actions appear in the
Actions panel.


![](images/30----04.png)

*Volume & Pan plugin in the Actions panel*

The **Volume** slider is repeated in the Actions panel along with
**Reset Volume to 0 dB** and **Mute/Unmute** buttons. **Pan** is repeated
there along with a **Centre Panning** button that resets panning. Below
them are **Invert Polarity**, which flips the polarity of the signal, and,
on a track inside a folder, **Ignore VCA**, which makes the plugin ignore a
VCA plugin on the parent folder track.

**Pan Law** (Choices: (Use Default), Linear, -2.5 dB Center, -3.0 dB Center,
-4.5 dB Center, -6.0 dB Center): How the level changes as you pan.
*(Use Default)* follows the **Default pan law** in *Settings > General*, which
is *Linear* unless you change it. For example, many DAWs use a -3 dB pan law
so that as you pan to the centre it lowers the volume slightly, which makes it
easier to keep a track in balance as you adjust panning. (Default: Linear)

> 💡 **Tip:** To apply a velocity offset to notes going into a virtual
instrument, insert a *Volume & Pan* plugin before it and enable **Apply
to MIDI Velocities**. Adjust the fader to offset MIDI velocity to
increase or reduce the velocity. This is a quick way to make your MIDI
drums hit harder - much easier than going back to editing the MIDI data.
This only works if you insert *Volume & Pan* ahead (to the left) of the
virtual instrument.

## Level Meter

The *Level Meter* plugin is also at the right end of the mixer for every
track by default. *Level Meter* is stereo and shows what the left and
right levels are doing. To add another one, find it in *Waveform >
Utility* in the plugin picker.


![](images/30----05.png)

*Level Meter Plugin*

When you select a *Level Meter*, the Actions panel displays a large
horizontal version of the meter, that also includes dB markings.


![](images/30----07.png)

*Large Meter in the Actions panel*

The meter indicates signal overload with a red indicator at the top of
the meter. You can reset the meter by clicking the red overload
indicator.

> 💡 **Tip:** To clear all overload indicators in the Edit, right-click any
level meter and choose *Reset all overload indicators* ( Backslash ).

By default the *Level Meter* is set to peak mode. This is typical of the
metering in most DAWs. You may change the meter mode in the Actions panel
or from the right-click menu. Here is an explanation of each of the modes:


![](images/30----06.png)

*Meter Modes for the Level Meter Plugin*

**Peak**: Shows the digital peak. This is the normal mode for Waveform and
most other DAWs. From a technical point of view, you want to keep this out of
the red to prevent digital clipping.

**RMS**: Gives a sense of the overall perceived volume of your signal. It
emulates the response of legacy VU meters and gives you a better indication of
how loud one track is perceived, compared to others.

**Sum & difference**: A specialised mode that gives you a visual
representation of both the level and the stereo spread. The left part of the
meter shows the level of the sum of left plus right. This represents the
combined level of the stereo signal.

The right side of the meter shows the difference between left and right.
The more difference you see the wider the stereo spread between the two
channels. This gives you a visual indication of stereo spread. If both
channels are playing exactly the same thing, then left minus right will
cancel to zero and the right side of the meter will show no activity: a
mono signal.

> 💡 **Tip:** The level meter will also indicate MIDI activity if you enable
**Show MIDI activity** in the Actions panel. This can be a very useful diagnostic
if you ever wonder why a virtual instrument is not triggering.


![](images/30----08.png)

*Level Meter, Show MIDI Activity*

## Equalisers

Waveform's equalisers come in three sizes (*1-Band*, *3-Band*, and
*8-Band*), so you can reach for exactly as much EQ as the job needs. Each
one has a graphical frequency-response display in the plugin window where you
drag nodes to shape the sound: drag a node up or down for **Gain**, left or
right for **Frequency**, and around the node to set its **Q** (width).

*1-Band Equaliser* is the smallest: a single band you can set to a bell
or a shelf. It's perfect for a quick surgical cut or a gentle tone tweak
without the clutter of a full EQ.

![](images/Audio%20FX/1-Band%20EQ@2x.png)

*The 1-Band Equaliser*

*3-Band Equaliser* gives you a low shelf, a sweepable mid bell, and a
high shelf, the classic three-band tone stack. Set the **Frequency** and
**Gain** of each band by dragging its node.

![](images/Audio%20FX/3-Band%20EQ@2x.png)

*The 3-Band Equaliser*

*8-Band Equaliser* is the full parametric EQ. It has eight bands (a low
shelf, six peaking bands, and a high shelf), each with its own
**Frequency**, **Gain** and **Q**, and each able to be switched on or off
individually. It also offers a *Stereo* or *Mid/Side* mode: in *Mid/Side*
mode you equalise the centre (mono) and the sides (stereo) of the signal
independently, which is handy for mastering and stereo-width work.

![](images/Audio%20FX/8-Band%20EQ@2x.png)

*The 8-Band Equaliser*

> 📝 **Note:** The older *4-Band Equaliser* from earlier versions now lives
in the *Legacy* folder. See [Legacy Plugins](legacy-plugins.md) if you need it
to open an old project.

## Reverbs

Waveform includes three algorithmic reverbs, each tuned for a different
kind of space: *Natural Reverb*, *Plate Reverb*, and *Non-linear Reverb*.
They share the same set of controls, so once you learn one you know them
all.

- *Natural Reverb* models real rooms and halls, the go-to for adding
  believable depth and ambience to a track.
- *Plate Reverb* recreates the bright, dense sound of a classic studio
  plate, a long-time favourite on vocals and snares.
- *Non-linear Reverb* is a gated/non-linear effect whose tail cuts off
  abruptly rather than fading away: the big drum sound of the '80s.

![](images/Audio%20FX/Natural%20Reverb@2x.png)

*The Natural Reverb*

![](images/Audio%20FX/Plate%20Reverb@2x.png)

*The Plate Reverb*

![](images/Audio%20FX/Non-linear%20Reverb@2x.png)

*The Non-linear Reverb*

The controls are:

- **Pre Delay**: a short gap before the reverb starts, which helps keep the
  dry signal clear and present.
- **Size**: the dimensions of the simulated space, from a small room to a
  large hall.
- **Decay**: how long the tail takes to fade out.
- **Density** and **Diffusion**: the thickness and smoothness of the reverb
  tail.
- **Low Cut** / **High Cut**: filters that trim the bottom and top off the
  reverb.
- **Low Damp** / **High Damp**: how quickly low and high frequencies die away
  in the tail, for a warmer or brighter sound.
- **Slope**: (*Natural* and *Plate*) tilts the overall tonal balance of the
  tail.
- **Pan**: positions the reverb in the stereo field.
- **Mix**: blends the wet reverb against the dry signal.

> 💡 **Tip:** Assign **Mix** as the quick control parameter so you can dial
reverb in and out while mixing. More reverb pushes a track further back;
less brings it forward. Combine that with left and right panning for more
spacious mixes.

## Delay

The *Delay* is a full stereo, ping-pong-capable delay with completely
independent left and right channels. Each side has its own delay time,
feedback, cross-feedback, pan, and trim, so you can build everything from
a simple slapback to wide bouncing stereo echoes.

![](images/Audio%20FX/Delay@2x.png)

*The Delay*

For each channel (*L* and *R*):

- **Delay**: the delay time in milliseconds, or, with **Sync** on, locked to
  a musical note value at the project tempo.
- **Feedback**: how much of the delayed signal is fed back into itself to
  create repeats.
- **Cross FB**: cross-feedback, which sends each channel's echoes into the
  other side. This is what creates the classic ping-pong bounce.
- **Pan** and **Trim**: the position and level of that channel's output.

The shared controls are:

- **Sync**: switches the delay times between free milliseconds and
  tempo-locked note values.
- **Low Cut** / **High Cut**: filters in the feedback path, so the repeats get
  progressively darker (or brighter) as they fade.
- **Mix**: the balance of wet delay against the dry signal.

> 📝 **Note:** The original simple mono *Delay* now lives in the *Legacy*
folder.

## Chorus

The *Chorus* plugin gives you that classic shimmering, doubling effect,
great on guitars, pads, electric pianos, bass, and vocals. It works by
modulating a short delay so the pitch drifts gently up and down.

![](images/Audio%20FX/Chorus@2x.png)

*The Chorus*

- **Mode**: *Normal*, *Wide*, or *Wider*, setting how far the effect spreads
  across the stereo field.
- **Delay**: the base delay time the modulation works around.
- **Depth**: how far the delay is modulated; more depth means a stronger,
  more obvious warble.
- **Rate**: the speed of the modulation, or, with **Sync** on, a **Note** value
  locked to the tempo.
- **Sync**: switches **Rate** between free Hz and tempo-locked note values.
- **Mix**: the blend of dry and chorused signal.

> 📝 **Note:** The older *Chorus* lives in the *Legacy* folder. The two share
a name, but the new one (in the *Effects* folder) is the default.

## Phaser

A phaser gives you that instantly recognisable swirling, sweeping motion,
popular on guitars, synths, and electric pianos, or any track that needs
some movement. It works by sweeping a set of notches up and down through
the frequency spectrum.

![](images/Audio%20FX/Phaser@2x.png)

*The Phaser*

- **Stages**: the number of filter stages (4 to 12); more stages give a
  richer, more pronounced sweep.
- **Floor** and **Ceiling**: the lowest and highest frequencies the sweep
  travels between.
- **Rate**: the speed of the sweep, or a tempo-locked **Note** value with
  **Sync** on.
- **Sync**: switches **Rate** between free Hz and tempo-locked note values.
- **Feedback**: feeds the output back to intensify the resonant peaks for a
  more dramatic effect.
- **Mix**: the blend of dry and phased signal.

> 📝 **Note:** The older *Phaser* lives in the *Legacy* folder.

> 💡 **Tip:** As you work with effects you can easily change the order of
effects on any track by grabbing the plugin and dragging it left or
right. As you drag, a red drop target will glow in the spot where the
effect will be inserted when you drop it.

## Dynamics: Compressor, Gate, and Limiter

Waveform's dynamics processing is split into three focused plugins, each
doing one job well.

**Compressor** evens out the level of a signal by turning down anything
that rises above a threshold.

![](images/Audio%20FX/Compressor@2x.png)

*The Compressor*

- **Threshold**: the level above which compression starts, from -60 to
  0 dB. (Default: -30 dB)
- **Ratio**: how hard the signal is turned down once it crosses the
  threshold, from 1:1 to 100:1. (Default: 2:1)
- **Attack** and **Release**: how quickly the compressor reacts, and then
  recovers once the signal falls back below the threshold. Attack runs from
  1 to 100 ms and Release from 1 to 1000 ms. (Default: 50 ms and 500 ms)
- **Knee**: softens the transition around the threshold for a gentler, more
  transparent action, from 0 to 18 dB. (Default: 0 dB)
- **Output gain**: make-up gain to bring the level back up after
  compression, from -20 to +20 dB. (Default: 0 dB)
- **Sidechain gain**: trims the level of an external sidechain, from -20 to
  +20 dB. (Default: 0 dB) Route another track into the *Compressor*'s
  sidechain input to make it duck, for example a kick drum pumping a bass
  line.

**Gate** does the opposite: it turns the signal *down* when it falls
*below* the threshold, silencing quiet passages, bleed, or hiss between
notes.

![](images/Audio%20FX/Gate@2x.png)

*The Gate*

- **Threshold**: the level below which the gate closes, from -60 to 0 dB.
  (Default: -40 dB)
- **Attack**: how fast the gate opens when the signal returns, from 0.1 to
  100 ms. (Default: 1 ms)
- **Hold**: how long it stays open after the signal drops, from 0 to
  1000 ms. (Default: 2 ms)
- **Release**: how fast it closes again, from 1 to 1000 ms. (Default: 100 ms)

**Limiter** is a brick-wall limiter that stops the signal from ever
exceeding a set ceiling, ideal on the master bus to catch peaks and
maximise loudness.

![](images/Audio%20FX/Limiter@2x.png)

*The Limiter*

- **Gain**: drives the signal into the limiter; more gain means more
  limiting and a louder result. From -20 to +20 dB. (Default: 0 dB)
- **Release**: how quickly the limiter recovers after catching a peak, from
  1 to 300 ms. (Default: 300 ms)
- **Ceiling**: the absolute maximum output level; nothing passes above it.
  From -60 to 0 dB. (Default: -0.3 dB)

> 📝 **Note:** The classic combined *Compressor/Limiter* from earlier
versions is now in the *Legacy* folder.

## Distortion

*Distortion* adds harmonic grit and saturation, from gentle warmth to
full-on fuzz.

![](images/Audio%20FX/Distortion@2x.png)

*The Distortion*

- **Type**: the flavour of distortion (*Light*, *Medium*, *Hard*, *Clip*,
  *Tube*, or *Fuzz*). (Default: Light)
- **Drive**: how hard the signal is pushed into the distortion.
- **Post Gain**: output level, to compensate for the volume change the
  distortion adds.
- **Tone**: shapes the brightness of the distorted sound.
- **Emphasis**: sharpens the character of the distortion by emphasising
  certain frequencies before the waveshaping.
- **Mix**: blends the distorted signal with the dry input. (Default: fully
  wet)

## Pitch Shifter

The *Pitch Shifter* plugin uses DSP processing to change the pitch of
the signal in real time. For audio tracks, this uses the *Elastique Pro*
algorithm, or whichever algorithm you select in the **Type** parameter.

**Type**: The pitch-shifting algorithm, chosen from Waveform's time-stretch
algorithms: the Elastique modes and the two Signalsmith modes. *Elastique
(Pro)* gives the best quality; the *Efficient* and *Mobile* modes and
*Signalsmith (Cheaper)* use less CPU, and *Elastique (Monophonic)* suits
single-note sources such as vocals or bass. With
*Elastique (Pro)* chosen, a **Settings** button below it opens the algorithm's
options. The row is only shown when there's more than one algorithm to choose
from. (Default: Elastique (Pro))


![](images/Audio%20FX/Pitch%20Shifter@2x.png)

*The Waveform Pitch Shifter Plugin*

*Pitch Shifter* is set in semitones; if you want to go up an octave,
set **Pitch** to 12. If you want to go down one octave set it to -12. To
reset back to the original pitch, select **Pitch** and type in zero.


![](images/30----21.png)

*Pitch Shifter, Set Pitch*

> 💡 **Tip:** It's usually easier to control the **Pitch** value by typing
in the digits than by using the slider.

> 📝 **Note:** If you insert *Pitch Shifter* ahead of a MIDI instrument, it
works on the MIDI data stream to transpose notes up or down by the value
you set in the **Pitch** parameter.

## DJ EQ and DJ Filter

*DJ EQ* and *DJ Filter* are two performance-oriented effects built for
quick, hands-on tone sweeps.

*DJ EQ* is a three-band EQ with **Low**, **Mid** and **High** faders that boost
or fully cut each band. Turn a band all the way down to kill it
completely, the way a DJ drops the bass out of a track. Two crossover
controls, **Freq 1** and **Freq 2**, set the frequencies where the bands
divide.

![](images/Audio%20FX/DJ%20EQ@2x.png)

*The DJ EQ*

*DJ Filter* is the classic single-knob DJ filter. The **Freq** control sits
at *Off* in the centre: turn it left and a low-pass filter sweeps the
highs away; turn it right and a high-pass filter sweeps the lows away. **Q**
sets the resonance at the filter's edge, and **Mix** blends the result with
the dry signal.

> 📝 **Note:** The simple *Low/High-Pass Filter* from earlier versions now
lives in the *Legacy* folder. For everyday filtering reach for the *1-Band
Equaliser*, or, for sweeps, the *DJ Filter*.

## DJ Tools <span class="pro">PRO</span> { #dj-tools }

> 📝 **Edition:** Waveform Pro, or with the DJ Mix Tools Expansion.

The *DJ Tools* (*Fader* and *Crossfader*) turn Waveform's tracks into a
DJ-style mixer. The DJ Mix Tools Expansion that includes them also unlocks
[Stem Separation](stem-separation.md).

*Fader* is an automatable volume fader with a **Position** control and an
adjustable response **Curve**, so you can ride or program smooth level
changes.

![](images/Audio%20FX/Fader@2x.png)

*The Fader*

*Crossfader* blends between two stereo sources, *A* and *B*. It takes two
stereo inputs and produces one stereo output; the **Position** control fades
from full A on the left, through the centre, to full B on the right.
**Curve** shapes the blend, from a smooth equal-power fade to a sharp cut,
and **Centre Gain** sets the level at the midpoint.

![](images/Audio%20FX/Crossfader@2x.png)

*The Crossfader*

## Text Plugin

The text plugin is a convenient tool to keep your Edit organised as you
record, edit, and mix. Drag *Text* from *Waveform > Utility* in the plugin
picker to a track, give it a **Name** and then type in a **Description**.


![](images/30----09.png)

*Text Plugin Example*

You can type in as much text as you'd like describing how the recording
was made, the kind of microphones used, the artist name, and really
anything you'd like to make a note of. The *Text* plugin's **Name** appears
right in the mixer on the thumbnail. While *Text* doesn't do anything to
your audio path it can help you remember what you were doing when you
come back to a project later on.

> 💡 **Tip:** You can enable or disable several plugins at once by
selecting all of them and using the keyboard shortcut F.

## Guitar IR <span class="pro">PRO</span> { #guitar-ir }

> 📝 **Edition:** Waveform Pro, or with the Recording Engineer Expansion. This
> covers both *Guitar IR* and *Dual Guitar IR*.

*Guitar IR* is a convolution plugin that loads an impulse response (IR), a
short WAV recording that captures the sound of a guitar cabinet, speaker, or
room, and stamps that character onto whatever passes through it. It pairs
naturally with an amp-simulation plugin: run your DI guitar into the amp sim,
then into *Guitar IR* to model the cabinet and miking.

![](images/Audio%20FX/Guitar%20IR@2x.png)

*The Guitar IR*

Load a WAV file using the IR field, then shape the result with the controls:

- **Gain**: output level, from −12 dB to +6 dB.
- **Low Cut** and **High Cut**: high-pass and low-pass filters that trim the
  response, each adjustable from 10 Hz to 20,000 Hz.
- **Filter Q**: the resonance of the cut filters (0.1 to 14).
- **Mix**: blends the convolved (wet) signal against the dry input, from 0 to
  1.0. It defaults to fully wet (1.0).
- **Normalise**: evens out the loudness of the loaded IR so swapping impulses
  doesn't change your level. On by default.
- **Trim Silence**: removes leading silence from the IR. Off by default.

### Dual Guitar IR

![](images/Audio%20FX/Dual%20Guitar%20IR@2x.png)

*The Dual Guitar IR*

*Dual Guitar IR* works the same way but hosts **two** impulse responses (A and
B) at once, so you can blend two cabinets or mic positions for a wider, more
complex tone. In addition to the controls above it adds:

- **Width**: spreads the two IRs across the stereo field (defaults to 0.5).
- **Delay**: offsets one IR against the other by up to 200 ms (defaults to 0),
  useful for subtle thickening or comb-filter effects.

## Artisan Collection <span class="pro">PRO</span> { #artisan-collection }

> 📝 **Edition:** Waveform Pro.

The *Artisan Collection* is a large built-in library of over 180
effects based on the AirWindows plugins by Chris Johnson. They're grouped into
categories in the plugin picker: *Delay*, *Dither*, *Distortion*, *Dynamics*,
*Emulation*, *EQ*, *Filter*, *Imaging*, *Modulation*, *Reverb*, and *Utility*.

Rather than document each plugin individually, it's enough to know that every
*Artisan Collection* effect shares two common controls (a **Dry** level and a
**Wet** level) alongside its own specific parameters, so you can always dial in
how much of the processed signal is blended with the original.

To use them, go to *Settings > Plugins*, click **Enable internal plugins** and
make sure *Enable Artisan Collection Plugins* is ticked (it is on by default).
After changing it you'll need to restart Waveform. Once enabled, the effects
appear under the *Artisan Collection* folder in the plugin picker.

## Master Mix <span class="pro">PRO</span> { #master-mix }

> 📝 **Edition:** Waveform Pro and Waveform OEM.

*Master Mix* is an integrated mastering plugin designed to sit at the end of
your signal chain (typically on the master or output bus) to polish a
finished mix. Add it from *Waveform > Effects* in the plugin picker, then
double-click it to open its window. It combines several mastering stages in a
single plugin.

- **Pre EQ** and **Post EQ**: parametric equalisers before and after the dynamics
  processing, for corrective and final tonal shaping.
- **Crossover compression**: a 3-band crossover splits the signal into low, mid,
  and high bands, each feeding its own compressor with a graphical transfer
  curve you can edit by dragging nodes.
- **Dynamics**: a final stage offering soft clipping and a noise gate.
- **Input and Output gain**: independent left/right input and output levels, each
  with metering.
- **DC filter**: removes any DC offset from the signal.

You can store up to 100 presets, and use the **Mem A** / **Mem B** A/B buttons to
compare two settings instantly while you fine-tune the master.

## Saving Presets

Most of the built-in plugins allow you to load, save, and delete
presets. Once you have your favourite presets saved, you can find them in
the Search tab of the Browser: choose **Presets** in the category list to
show only presets (see [Categories](browser.md#categories)).


![](images/30----22.png)

*Load, Save, or Delete Presets*

As you create presets you can also add tags to make it quick to filter
to exactly what you are looking for; Vocal EQ, Guitar Focus, Bass Boost
for example.

## Moving On

[Legacy Plugins](legacy-plugins.md) covers the older versions of these
effects that now live in the *Legacy* folder.
