# The Arranger Track

> 📝 **Note:** The Arranger Track is available in **Waveform Pro 11 and later**. It is not included in
> Waveform Free or OEM editions.

The Arranger Track gives you a bird's-eye view of your song's structure. You divide the project into
named, coloured **sections** — Intro, Verse, Chorus, Bridge, Outro, and so on — and then rearrange
the whole song by dragging those sections instead of carefully moving clips on every individual track.

When you move or copy a section, Waveform moves the underlying audio and MIDI clips *plus* any tempo,
time-signature, and pitch events in that range, all in lock-step across every track. The Arranger
Track itself makes no sound and cannot host plugins; it is purely a structural tool.


![](images/PLACEHOLDER_arranger_1.png)

*The Arranger Track showing Intro, Verse, Chorus, and Bridge sections*


## Showing and Hiding the Arranger Track

Click the **Arranger** button in the global-tracks strip at the top of the Edit tab to show or hide
the track. The button tooltip reads *"Show/Hide arranger track"*. You can also use the keyboard
command **"Show or hide Arranger track"** or the *View > Show Arranger track* menu item. Arranger
Track visibility is saved with the edit and as part of View Presets.

> 💡 **Tip:** If you use View Presets to switch between different working layouts, you can include or
> exclude the Arranger Track in each preset — useful for keeping the screen tidy when you are focused
> on mixing rather than arrangement.


## Creating Sections

To draw a new section, **hold a modifier key and drag** across the Arranger Track. The cursor changes
to a pencil while you drag, and the section snaps to the current snap grid.

> 💡 **Tip:** A plain drag on the Arranger Track does *not* draw a section. You must hold a modifier
> key first.

Once a section exists, click it to select it. You can rename and recolour it from the Actions panel
(see [Section Properties](#section-properties) below).


## Rearranging Sections

Drag a section and drop it to rearrange your song. A popup menu appears when you release the mouse:

| Drop target | Popup options |
|---|---|
| Empty space on the track | **Copy section** / **Move section** |
| Another section | **Replace** / **Swap** |
| Left or right edge of another section | Inserts just before or just after that section |

**Move section** shifts the source content to the destination position. **Copy section** duplicates
it. **Swap** exchanges the two sections' content; **Replace** overwrites the target with the source.

> 📝 **Note:** **Swap** and **Replace** silently abort if the two sections overlap. No error message
> is shown. Make sure the sections do not overlap before using these operations.

When you have tracks selected, a Copy or Move operation affects only those tracks. With no tracks
selected, it affects all tracks (the Arranger Track itself is always included). This lets you make
partial rearrangements — for example, moving a vocal part independently of the rest of the
arrangement.


## Inserting Space

To add blank time at a specific point, right-click a section and choose **Insert time at selected
clips**, or use the **Insert Space** dialog. The dialog has fields for *Bars/Beats* and *Time* and an
**Insert** button. The keyboard command *"Insert time at cursor"* does the same thing from the
current cursor position.


## Section Properties

Select a section and its actions appear in the [Actions panel](actions-panel.md). The following
controls are available:

| Control | Purpose |
|---|---|
| **Name** | Label the section ("Verse 1", "Chorus") |
| **Start / Length / End** | Position and duration in timecode (Length is shown locked) |
| **Colour** | Set the section's display colour using the hue picker |
| **Select related** | Select other clips linked to this section |
| **Auto tempo** | Derive the edit's BPM from this section's length |
| **Split** | Split the section at the current playhead position |
| **Move clip** | Options for moving the section relative to its neighbours |
| **Delete** | Remove the selected section(s) |

The Arranger Track header itself shows only the standard **Shrink** / **Grow** track-height buttons —
there are no arranger-specific track options.


## Section Right-Click Menu

Right-clicking a section gives you:

- Colour
- Cut / Copy / Duplicate
- Delete
- Split at cursor
- **Delete time of selected clips** — removes that time range from the entire edit
- **Insert time at selected clips** — inserts blank time at the section's position
- Delete time gap before / after / both


## Related Features

- **[Using Markers](using-markers.md)** — the Marker track, Tempo track, and Chord track are sibling
  global tracks that work alongside the Arranger Track.
- **View Presets** — Arranger Track visibility can be saved and recalled as part of any View Preset.
