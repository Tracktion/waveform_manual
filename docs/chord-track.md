# The Chord Track

The Chord Track is a global track that maps out your project's harmony
over time. It holds Chord clips, and each Chord clip contains a chord
progression. The Chord Track makes no sound of its own and hosts no
plugins — think of it as a harmonic reference for the rest of the edit.
MIDI pattern generators can follow it to stay in harmony, and audio
clips can automatically pitch-shift to match it.

The Chord Track is available in Waveform Pro.
<!-- code: waveform/common/Source/licensing/Features.cpp:226 -->

![](images/PLACEHOLDER_chord-track_1.png)

*The Chord Track with two Chord clips*

## Showing the Chord Track

The Chord Track is hidden by default. There is one Chord Track per
edit, and it appears with the other global tracks below the timeline.
To show or hide it:

-   Choose *Show Chord track* from the Global tracks section of the
    View menu.
-   Or right-click the header of any global track (Tempo, Marker, or
    Arranger) and choose *Show Chord track*.
-   Or use the keyboard shortcut Ctrl+Alt+F11 (Windows) /
    Option+Cmd+F11 (Mac).

<!-- code: waveform/common/Source/ui/mainwindow/EditTab.cpp:1261; SelectableTrackComponent.cpp:109; DefaultKeysMAC.tracktionkeys:222 -->

## Inserting Chords

To add a chord to the Chord Track, position the playhead where you
want the chord to begin, then do one of the following:

-   Use the *Insert chord* command — Alt+C (Windows) / Option+C (Mac).
-   Or select the Chord Track header and click the **New Chord**
    button in the Actions panel.

A new Chord clip one bar long is inserted at the playhead.
<!-- code: modules/tracktion_engine/.../tracktion_AppFunctions.cpp:550-565; ChordTrackPropertyPanel.h:16,43 -->

With the Chord Track selected, the Actions panel also offers
**Shrink** and **Grow** buttons to change the height of the track.

> ⚠️ **Warning:** Chord clips on the track should not overlap. If they
> do, Waveform shows the message *"This track contains overlapping
> chords. Portions of some chord are ignored."*
> <!-- code: modules/tracktion_engine/.../tracktion_ChordTrack.cpp:33 -->

## Chord Clip Properties

Select a Chord clip to see its settings in the Actions panel:

Key
- Sets the key used to spell the clip's chords. The default, **Follow
    Global Track**, uses the edit's global key signature. Choose any of
    the twelve chromatic roots to give this clip its own key.

Scale
- Shown only when the Key is set to something other than Follow
    Global Track. Choose from Major, Minor, Ionian, Dorian, Phrygian,
    Lydian, Mixolydian, Aeolian, Locrian, Melodic Minor, and Harmonic
    Minor.
    <!-- code: ChordClipPropertyPanel.h:80-81; tracktion_Musicality.h:76-89 -->

Update global track key
- The small arrow button next to the Key control writes the clip's
    key back to the edit's global key signature.

Start / Length / End
- Position and duration of the clip on the timeline.

Colour
- Changes the clip's strip colour.

## Building a Chord Progression

The **Progression** section of the Actions panel is where you define
the chords in the clip. A progression can hold up to 64 chords.
<!-- code: modules/tracktion_engine/.../tracktion_Musicality.h:282 -->

![](images/PLACEHOLDER_chord-track_2.png)

*The Progression builder and Suggestion panel*

Add
- Appends a chord. The menu offers the diatonic triads, sixths,
    sevenths, and ninths for the current key, plus any custom chords
    you have defined in Settings > Chords.
    <!-- code: MidiClipPropertyPanel.h:724-766 -->

Menu
- Opens a menu with **Presets** (and *Save as Preset*), progressions
    copied from other clips in the edit, **Popular 3 chord
    progressions**, **Popular 4 chord progressions**, and **Clear**.

Previous / Next
- Step through the popular chord progressions one at a time.

Each chord in the progression has its own small controls:

-   **Prev / Next** — select the previous or next chord type.
    Shift+click changes the root note instead.
-   **Up / Down** — move the chord up or down an octave. Shift+click
    changes the chord inversion instead.
    <!-- code: MidiClipPropertyPanel.h:662-668 -->

You can also type chords in from the computer keyboard while the
Progression section has focus: keys `1`–`7` append the diatonic triads
of the current key, Shift+`1`–`7` append the corresponding seventh
chords, letters `a`–`g` append absolute major chords (with Shift for
the sharpened root, e.g. Shift+`c` for C#), and Delete removes the
last chord.
<!-- code: MidiClipPropertyPanel.h:429-525 -->

> 💡 **Tip:** The **Suggestion** panel next to the Progression builder
> shows a *Chord Progression Prediction* — a bar chart of the most
> likely next chords given what you have so far. Click a suggestion to
> append it.

## Following the Chord Track

The Chord Track only becomes audible through the features that follow
it:

-   **MIDI pattern generators** can generate basslines, arpeggios, and
    chord parts that track the progression.
-   **Audio clips** can automatically pitch-shift to follow the Chord
    Track (Waveform Pro 11 and later).
    <!-- code: waveform/common/Source/licensing/Features.cpp:192 -->

The chord types offered throughout Waveform — including the Chord
Track — can be customized in [Settings >
Chords](reference-settings-chords.md), where you can disable chords
you never use and define your own.
