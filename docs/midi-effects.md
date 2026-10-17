# MIDI Effects

Waveform includes several MIDI effects. They make no sound of their
own: they change the MIDI data coming from the MIDI clips on a track or
from your MIDI controller, so they only take effect when you insert them before a
virtual instrument.

## Waveform Effects

These plugins are under *Waveform > Effects* in the plugin menu.

### MIDI Arpeggiator <span class="pro">PRO</span> { #midi-arpeggiator }

> 📝 **Edition:** Waveform Pro, or with the MIDI Producer Expansion.

The MIDI Arpeggiator turns held notes or chords into rhythmic patterns:
play a chord and the Arpeggiator cycles through its notes in time with
the Edit. It goes on a track's plugin chain before the instrument (it
can't be added to a clip).

![](images/MIDI%20Utilities/MIDI%20Arpeggiator@2x.png)

*The MIDI Arpeggiator*

**Arp section:**

-   **Direction**: The order the held notes are played in: Up, Down,
    Cascade, Alt 1, Alt 2, Random, Chord 1 Octave, or Chord All
    Octaves. The Chord modes replay the whole chord rhythmically
    instead of one note at a time. (Default: Up)
-   **Latch**: Keeps the pattern running after you release the keys.
    (Default: off)
-   **Clock**: The musical rate of the pattern, from 4 Bars down to
    1/64, including dotted and triplet values. (Default: 1/4)
-   **Octaves**: Spreads the pattern over 1 to 10 octaves.
    (Default: 1)
-   **Freeze**: Locks the current input chord so the pattern keeps
    playing it regardless of what you play next.

**Timing section:**

-   **Length**: Gate length of each generated note, 25% to 400%.
    (Default: 100%)
-   **Swing**: Delays alternate steps for a shuffle feel, 0% to 100%.
    (Default: 0%)
-   **Rand Pos / Rand Len / Rand Vel**: Randomise each note's
    position, length, and velocity, 0% to 100%. (Defaults: 0%)

**Input section:**

-   **Input Fix**: Forces all input notes to a fixed velocity.
-   **Velocity**: The fixed velocity used when **Input Fix** is on, 0
    to 127. (Default: 64)
-   **Input**: How input velocities map to the pattern: As Played,
    Note, or Inverse Note. (Default: Note)
-   **Max**: The maximum number of held notes used, 1 to 16.
    (Default: 16)
-   **Key Limits**: Constrains the output note range: Off, Fix, Clip,
    Fold Octave, or Fold Range. (Default: Off)

**Pattern section:**

Switch the **Pattern** toggle on to replace the straight cycle with a
step pattern of your own. The piano-roll style editor covers -12 to
+12 semitones relative to the arpeggiated notes. Use **Pattern** to load a
preset pattern, **Save** and **Clear** to manage your own, **Import**
to import a pattern from a MIDI file, **Steps** to set the pattern
length (1 to 32 steps), and **Grid** to set the step size (1 bar, 1/2,
1/4, 1/8, or 1/16).

> 🎥 [MIDI Arpeggiator Tutorial Video](https://youtu.be/GKbKwc5bT88)
>
> 🎥 [MIDI Arpeggiator Soloing Technique](https://youtu.be/Osve5gfWQlg)

### MIDI Chord Companion <span class="pro">PRO</span> { #midi-chord-companion }

> 📝 **Edition:** Waveform Pro, or with the MIDI Producer Expansion.

Chord Companion is a pad-based chord launcher. You assign a chord to
each of up to 64 pads (four banks, A to D, of 16), and a single
trigger note then fires the whole chord. It also includes a
built-in arpeggiator, a chord repeater, and a randomise section.
Chord Companion goes on a track's plugin chain before the instrument
(it can't be added to a clip).

![](images/MIDI%20Utilities/MIDI%20Chord%20Companion@2x.png)

*The MIDI Chord Companion*

The editor is a single page with several areas: the **Chord List** on
the left (drag chords from here onto pads), the **Scale Selector**
(root note and scale type) and **Chord Pads** grid in the centre, the
**Arp**, **Repeat**, and **Random** columns on the right, and a
keyboard visualiser along the bottom showing the trigger keys and the
notes being produced.

Each pad has a trigger note plus two settings of its own: **Octave**
(-2 to +2, default 0) and **Inversion** (0 to 3, default 0).

The footer holds the **Bank A-D** selector, **Learn** (press keys on
your controller to assign trigger notes to the pads in sequence),
**Presets** (save and load complete pad layouts), and **Follow host
key** (when enabled, the pads follow the Edit's key signature).
(Default: on)

**Arp**: Switch it on to arpeggiate the triggered chords. Controls
match the MIDI Arpeggiator: **Direction** (Up, Down, Cascade, Alt 1,
Alt 2, Random, Chord 1 Octave, Chord All Octaves), **Clock** (default
1/4), **Octaves** (1 to 10), plus an optional step **Pattern**.
(Default: off)

**Repeat**: Switch it on to retrigger the chords rhythmically, with
its own **Clock** and step **Pattern**. (Default: off)

**Random**: Available when the Arp or Repeat is on. **Dest** chooses
what the timing controls affect (Both, Arp, or Repeat; default Arp),
followed by **Length** (25% to 400%, default 100%), **Swing** (0% to
100%, default 0%), and **Rand Pos / Rand Len / Rand Vel** (0% to 100%,
defaults 0%).

> 🎥 [MIDI Chord Companion Tutorial Video](https://youtu.be/hJ-zvvK7Sk8)

### MIDI Chord Player

The MIDI Chord Player is a live single-note harmoniser: play one note
and hear a full chord. Modifier keys let you switch chord types as you
play. It's in every edition of Waveform, and goes on a
track's plugin chain before the instrument (it can't be added to a
clip).

![](images/MIDI%20Utilities/MIDI%20Chord%20Player@2x.png)

*The MIDI Chord Player*

**Mode**: Chooses the type of chords to play. (Default: All Chords)

-   **All Chords**: Every playing key produces a major chord by
    default. Twelve modifier keys select other chord types: minor,
    diminished, augmented, major 7th, minor 7th, dominant 7th,
    half-diminished 7th, minor-major 7th, augmented 7th, major 6th,
    minor 6th, and suspended 4th.
-   **Chords in key only**: Follows the Edit's key and only produces
    diatonic chords. Two modifier keys add 6th and
    7th variations.

The modifier keys are shown coloured on the plugin's on-screen
keyboard, starting just above the playing range. Drag the marker on
the keyboard to move where the modifier keys begin. (Default: MIDI
note 72)

**Render Clips**: Bakes the harmonised chords into the MIDI clips on
the track as ordinary notes, then removes the Chord Player from the
track.

> 🎥 [MIDI Chord Player Video Tutorial](https://youtu.be/FEvS2vy7wl0)

### MIDI Modifier

MIDI Modifier is a transposer for MIDI data. It shifts every note
passing through it by a fixed number of semitones.

**Semitones**: The transposition, from -36 to +36 semitones. At 0 the
value reads "(Original pitch)". (Default: 0)

**Pitch**: Opens a menu of common intervals: up one or two octaves,
+11 to -11 semitones, original pitch, and down one or two octaves.
Picking one sets **Semitones** for you.

![](images/MIDI%20Utilities/MIDI%20Modifier@2x.png)

*The MIDI Modifier*

### MIDI Note Repeater <span class="pro">PRO</span> { #midi-note-repeater }

> 📝 **Edition:** Waveform Pro, or with the MIDI Producer Expansion.

The Note Repeater fires a rhythmic pattern while notes are held:
hold a chord and it retriggers in time with the Edit. It shares its
engine and much of its design with the MIDI Arpeggiator, but it is
purely rhythmic: the held notes always play together as a chord, with
no note ordering or octave spread. It goes on a track's plugin chain
before the instrument (it can't be added to a clip).

![](images/MIDI%20Utilities/MIDI%20Note%20Repeater@2x.png)

*The MIDI Note Repeater*

**Pattern section:**

-   **Clock**: The musical rate, from 4 Bars down to 1/64, including
    dotted and triplet values. (Default: 1/4)
-   A single-row step editor, the **Sequencer** grid, sets the
    rhythm. Click cells to draw steps on or off, and use the velocity
    lane beneath the grid to set how hard each step hits. Use
    **Pattern** to load a preset, **Save** and **Clear** to manage your
    own, **Steps** to set the pattern length (1 to 32 steps), and
    **Grid** to set the step size (1 bar, 1/2, 1/4, 1/8, or 1/16).

**Timing section:**

-   **Length**: Gate length of each repeated note, 1% to 100%, a
    smaller range than the Arpeggiator's 25-400%. (Default: 100%)
-   **Swing**: 0% to 100%. (Default: 0%)
-   **Rand Pos / Rand Len / Rand Vel**: Randomise position, length,
    and velocity, 0% to 100%. (Defaults: 0%)

## Waveform Utilities

These plugins are under *Waveform > Utility* in the plugin menu.

### MIDI Filter <span class="pro">PRO</span> { #midi-filter }

> 📝 **Edition:** Waveform Pro, or with the MIDI Producer Expansion.

MIDI Filter lets through only the notes inside the range you set. To
see the range and create a zone, drag the arrows from the left and
right sides of the on-screen keyboard. Use two or more of these within
a Plugin rack to create zones that play different virtual instruments:
for example, bass on the left side of your controller and piano on the
right.

> 🎥 [Video Explaining the MIDI Filter](https://youtu.be/RsxbP4Gys3U)

### MIDI Monitor <span class="pro">PRO</span> { #midi-monitor }

> 📝 **Edition:** Waveform Pro, or with the MIDI Producer Expansion.

MIDI Monitor shows the stream of MIDI data passing through it, so you
can debug your setup or see exactly what your controller or keyboard
sends. It doesn't change the data, so you won't hear any effect while
it is on the chain.

The window lists each event on its own line: a running count, the
time, the message type (controllers show as "CC"), the channel and the
raw bytes. Above the list, **Active Notes** shows the notes currently
held. Drag the window's corner to make it bigger.

**Reset**: Clears the held-note state, which is useful if a note-off
went missing and **Active Notes** shows a stuck note.

**Clear**: Empties the event list.

**Copy**: Copies the whole list to the clipboard as text, one event
per line.

### MIDI Patch Bay

MIDI Patch Bay remaps MIDI channels. Its window shows one dropdown for
each of the 16 incoming channels. Pick the channel you want that input
sent out on, or choose **Block channel** to stop it passing through.

**Reset All**: Resets every mapping so no channels are changed.

**Block All**: Blocks all 16 channels.

### MIDI Note Names

MIDI Note Names lets you give any of the 128 MIDI notes a custom name,
and switch individual notes on or off. It's most useful in front of a
drum instrument: name note 36 *Kick*, note 38 *Snare*, and so on, and
those names then appear in the piano roll so you're editing *Kick* and
*Snare* instead of *C1* and *D1*. The plugin doesn't change the audio;
it only relabels the notes.

The plugin's window and its Actions panel show the same controls. Each
note has a row with a tick to switch the note on or off, the note
number and pitch, a name field (click it to type), and a speaker button
that plays the note while you hold it down.

**Import Names**: Loads names from a text file. Each line starts with
a note number followed by the name, for example `36 Kick`. Importing
replaces all the current names.

**Show MIDI Note Name Maps Folder**: Opens the folder of name files.
Waveform puts its own drum and note maps there for you to import or
copy.

**Clear All Note Names**: Removes every name and switches all notes
back on.

### MIDI CC

MIDI CC sends MIDI continuous-controller (CC) messages. It has six
knobs, **CC 1** to **CC 6** (0 to 127, default 0), each with a
**Dest** button below it (**Dest 1** to **Dest 6**). Click it to choose
the channel and CC number that knob sends to; it shows "---" (sending
nothing) until you pick one, then the CC number. Each knob is an automatable parameter, so
you can draw or record CC automation (modulation, expression, filter cutoff) and send
it on to a virtual instrument or external gear downstream.

### ReWire Device

ReWire Device runs any ReWire-compatible DAW as a plugin within
Waveform. It's available on Windows and Intel Macs only.
