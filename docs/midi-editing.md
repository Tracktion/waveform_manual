# MIDI Editing

In this chapter you will learn MIDI editing. There are two aspects to
MIDI editing. You can, of course, edit individual MIDI notes, but you
can also edit the MIDI clip. Editing a MIDI clip is similar to editing
an Audio clip, but with a few key differences. We will go over both
approaches in this chapter.

Many of the tools for working with clips work much like they do with
Audio clips. Each MIDI clip header has several drag handles. Let's take
a look at how they work.

## Trimming MIDI Clips

To trim a MIDI clip, drag one of the trim handles left or right. The
trim handles are the hollow arrows at the left and right of the MIDI
clip header.


![](images/25----01.png)

*Trim MIDI Clips by Dragging a Trim Handle*

Hold Opt / Alt while you drag a start or end handle to stretch the clip's
contents to the new length instead.

> 📝 **Note:** One difference between Audio clips and MIDI clips is that the
MIDI clips don't have fade handles.

## Moving MIDI Clips

To move a MIDI clip forward or backward in time, drag from the header
area. Don't drag starting from any of the icons, but instead drag from
the blank space in the header area.


![](images/25----02.png)

*Moving a MIDI Clip*

## Moving a MIDI Clip Track-to-Track

To move a MIDI clip track-to-track, grab the header area and drag it up
or down. To move track-to-track without affecting the timing, hold down
Shift as you drag.

## Slip Editing MIDI Clips

The three solid colour handles are used for slip editing: left arrow,
right arrow, and the box. The essential tool for slip editing is the
solid box in the centre of the header. Grab the solid box and drag, in
order to slip edit the notes within the frame of the window.


![](images/25----03.png)

*MIDI Clip Slip Handles*

Use the left solid arrow to slip the notes later in time, while leaving
the ending of the clip anchored. The right solid arrow works the
opposite way. You can slip the end of the clip, while leaving the
beginning of the clip anchored.

## Reframing a MIDI Clip

The hollow box tool in the centre of a MIDI clip allows you to reframe
the entire window of the clip, leaving the notes in their original
place. This is done by dragging the hollow box left or right.

## Splitting a MIDI Clip

To split a MIDI clip, select it then position the cursor at the time you
want to make the split. Press the slash key (/). This is the exact same
workflow you use for splitting Audio clips.


![](images/25----04.png)

*Split MIDI Clips Using the Slash Key*

You can also split using the **Split Clips** action in the
[Actions panel](actions-panel.md), which offers **Split clips at cursor
position**, **Split clips at mark-in point** and **Split clips at mark-out
point**. Launcher clips can't be split, so the action isn't shown for them.


![](images/25----05.png)

*The Split Clips Action in the Actions panel*

> 📝 **Note:** As you split MIDI clips, any notes that are sustained across
the split area are separated into two notes.

You can even split a mixture of Audio clips and MIDI clips across
multiple tracks, by selecting a combination of them at once.

## The MIDI Note Editor

As you increase the vertical size of a track holding MIDI clips, you'll
see that there's a point at where it switches to the inline MIDI note
editor. This gives you a detailed view of the notes contained
within the MIDI clip. This type of view is commonly called a piano roll
view (PRV).


![](images/25----06.png)

*The MIDI Note Editor*

Another way to see the notes is to double-click the MIDI clip header. By
default this opens the clip in the MIDI editor in the
[Detail Editor](detail-editor.md) at the bottom of the Edit.

> 📝 **Note:** Clip header double-click behaviour depends on a global
setting. Go to *Settings > General*, MIDI section, and find
**Double-click MIDI clip header** (Choices: Expands for in-line editing,
Opens the MIDI editor, Opens the MIDI editor (in-line editing disabled)).
Choose **Expands for in-line editing** to make a double-click toggle the
track height for inline editing instead. (Default: Opens the MIDI editor)

You can also open it with *View > Show Content Editor*. In the Detail
Editor's **Clip** tab, a MIDI clip gets two pills at the top left:
**Piano Roll** shows the note editor, with the same toolbar and tools as
the inline editor, and **Pattern Generator** switches the tab to the
[Pattern Generator](pattern-generator.md). With several MIDI clips
selected the second pill reads **Pattern Generator (N)**, because the
generator works on all of them. See [The Detail Editor](detail-editor.md).

## Setting the Number of Octaves & Note Height

You can adjust how many octaves you see on the MIDI editor with
**Default MIDI editor vertical scale** (Choices: 2 octaves, 4 octaves,
6 octaves, Full scale) in *Settings > General*, MIDI section. By default
it is set to **2 octaves**, a reasonable starting point. You can also
right-click the piano keyboard and choose **Show 1 octave**,
**Show 2 octaves**, **Show 3 octaves**, **Show 4 octaves** or
**Show full scale**.


![](images/25----07.png)

*Default MIDI Editor Vertical Scale Setting*

To fine tune the vertical size of MIDI notes, drag the arrows above and
below the piano graphic.


![](images/25----08.png)

*Use Arrows to Adjust Vertical Size*

## Mouse Wheel Options for MIDI Editing

You can use your mouse wheel to scroll vertically within the MIDI
editor. During mixing you may prefer to disable this function, in order
to prevent scrolling within the MIDI clips unintentionally.


![](images/25----09.png)

*Mouse Wheel MIDI Scrolling Setting*

Having MIDI scrolling on suits MIDI editing. The setting is
**Allow wheel to scroll within MIDI clips** in *Settings > General*,
Mouse section. (Default: on)

## The MIDI Toolbar

The toolbar runs along the top of the MIDI editor. In the inline editor
it appears automatically while **Automatically show MIDI editor
toolbar** is on in *Settings > General*, MIDI section (Default: on).
Opt + Cmd + T / Ctrl + Alt + T turns that on and off. From left to right:

| Control | What it does |
| --- | --- |
| **View** <span class="pro">PRO</span> | **Drum grid** for the selected tracks, and which note rows to show: **Show all notes**, **Show notes in key**, **Show notes in use** or **Show named notes**. |
| **Func** <span class="pro">PRO</span> | **Duplicate MIDI Notes**, **Duplicate MIDI Notes (Last Bar)**, and **Lock CC data to notes**, which moves controller data along with the notes you drag. |
| **Velocity**, **Controllers**, **+** | Show the velocity lane and the controller lanes, and add a controller lane. See [The Velocity Editor](#the-velocity-editor) and [Editing Other Controller Data](#editing-other-controller-data). |
| Tool buttons | The editing tools. See [The Editing Tools](#the-editing-tools). |
| Colour swatches | The note colour. See [Note Colours](#note-colors). |
| **Vel**, **Len** | The velocity and length for new notes. See [Editing the Note Velocity](#editing-the-note-velocity) and [Note Length](#note-length). |
| **Snap** | The note-editing grid. See [Snapping During Note Editing](#snapping-during-note-editing). |
| **Step**, speaker | Step entry, and hearing notes as you edit them. See [Step Entry Mode](#step-entry-mode) and [Hearing Notes While Editing](#hearing-notes-while-editing). |
| **Zoom** | Zooms to fit all notes, or the selected notes. |
| **Transpose**, **Quantise**, **Groove**, **Chords** | Menus that act on the selected notes. See [Quantising MIDI Notes](quantizing-midi-notes.md) and [The Chord Track](chord-track.md). When the editor is narrow the toolbar wraps onto extra rows, and these four are the first to be left out if it still doesn't fit. |

> 📝 **Edition:** **View**, **Func** and the Knife tool need Waveform Pro
> or the MIDI Producer Expansion.

## Basic MIDI Editing - Pitch

Next, let's look at the tools for editing the actual MIDI notes. In
general, editing works by selecting notes and then doing an action.


![](images/25----10.png)

*Select a Note and Drag Up or Down to Change Pitch*

The most basic edit? Click a note to select it. Drag it up or down to
change the pitch.

## Note Expression

Each note can carry its own expression curve, drawn in a lane that
appears above or below the note. There are three types: **Pitchbend**
(+/-48 semitones), **Timbre** (0-100%) and **Pressure** (0-100%). This
gives you detailed control over performance details and articulations.


![](images/25----11.png)

*Drawing Note Expression*

To show the lane, select a single note and turn on
**Show Note Expression** in the Actions panel. The lane appears for the
full length of the note, showing Pressure, or the type you used last.


![](images/25----17.png)

*Show Note Expression and Keep on Selected Note in the Actions panel*

**Keep on Selected Note**: Keeps the lane on the selected note. Turn it
off and the lane follows whichever note the mouse is over. (Default: on)

Select the Pencil or Line tool and click-drag over the lane to draw a
curve. Use the Eraser tool to remove part of it.

> 📝 **Note:** You need the Pencil or Line tool to draw note expression.

The curve is drawn in steps that follow the MIDI editor's snap setting.
With Smart snap the step size follows the zoom level, so zoom in to draw
a more detailed curve.


![](images/25----12.png)

*Choosing the Note Expression Type*

To change the type, click the lane's **Menu** button and choose
**Pitchbend**, **Timbre** or **Pressure**. The lane's **Close** button hides it.

Two more actions in the Actions panel work on the selected notes:
**Scale Pitch Bend** scales their pitch-bend values, and
**Remove Note Expression** deletes all of their note expression. To
record note expression from an MPE controller, turn on
**Record MPE to Note Expression** for that MIDI input device; devices
that Waveform already knows are MPE record to note expression
automatically.

> 📝 **Note:** Only instruments that support MPE respond to note
expression.

## Nudging Notes

Nudging selected notes works like nudging clips: hold Shift and use the
arrow keys. Shift-up and Shift-down change the pitch. Shift-left and
Shift-right change the timing. To move only the start of the notes, use
Opt + Cmd + Left or Right / Ctrl + Alt + Left or Right.

Nudging is particularly helpful when changing the pitch, since there's
no chance of altering the timing of the note.

> 💡 **Tip:** Cmd + Z / Ctrl + Z works as undo for most editing operations.

## Note Length

You can trim the length of a note by grabbing its right edge, or its
left edge, and dragging it left or right. Hold Cmd / Ctrl while you drag
an edge to strum the selected notes instead.


![](images/25----13.png)

*Trimming a MIDI Note*

The **Len** button in the toolbar (it shows the current value) sets the length of new notes. It offers 1 tick,
fractions of a beat from 1/96 to 1/2, and 1 to 12 beats. **Other...**
asks for a length in MIDI ticks.

**Auto update on note resize**: When ticked, resizing a single note sets
**Len** to that note's new length, so the next note you draw matches it.
(Default: on)

## Snapping During Note Editing

Many of these editing operations will snap to the grid as long as you
have **Snap** enabled. To edit freely, disable **Snap**. The keyboard
shortcut Q enables or disables snapping.

The toolbar's **Snap** button sets the grid the MIDI editor snaps to,
and shows it, for example "Snap: smart". **Smart** (the default) follows
the zoom level, so the grid gets finer as you zoom in. You can also pick
a fixed resolution, and turn on **Triplet** for a triplet grid.


![](images/25----14.png)

*Note editing snaps when Snap is on*

## Copying and Duplicating Notes

To copy a note, hold down Cmd / Ctrl and drag the note to create a copy.
Another way to do this is with the **Duplicate** keyboard shortcut. First
select the note that you would like to copy, make sure the cursor is
where you'd like the copy placed and then hit the keyboard shortcut D.


![](images/25----15.png)

*Copying a Note*

## Adjusting Pitch and Velocity

Another way to adjust pitch and velocity is to select the note and then
edit the values directly in the Actions panel. Both **Pitch** and **Velocity** can
easily be edited this way.


![](images/25----16.png)

*Adjust Pitch and Velocity in the Actions panel*

## Note Start, Length, & End

You can also make very precise adjustments to the **Length**, **Start
Time**, and **End Time** by editing the values directly in the Actions
panel for the selected note.


![](images/25----18.png)

*Start, Length, & End Settings in the Actions panel*

## Note Actions in the Actions Panel

With notes selected, the [Actions panel](actions-panel.md) shows more
than their values. **Mute** and **Note-off Velocity** sit with Pitch and
Velocity; Mute notes is also Opt + Cmd + M / Ctrl + Alt + M, and
Opt + V / Alt + V randomises the velocity of the selected notes.

Below the times are menus that change the selected notes: **Transpose**,
**Quantise**, **Apply Groove**, **Equalise** (sets them all to the same
length), **Mirror** (flips them vertically or horizontally), **Insert
Chord** and **Modify Notes**. **Select Notes** picks other notes based on
the current selection. **Create Preset** turns the notes into a bass or
chord preset, and **Add Custom Chord** saves them as a chord for the
[Pattern Generator](pattern-generator.md). Quantise and Groove are
covered in [Quantising MIDI Notes](quantizing-midi-notes.md).

## The Editing Tools

The tool buttons sit in the middle of the toolbar. You can also pick a
tool from the right-click menu in the note area, or with a shortcut.

| Tool | What it does | Shortcut |
| --- | --- | --- |
| **Selection** | Selects multiple notes or controllers. | Opt + Cmd + 1 / Ctrl + Alt + 1 |
| **Pencil** | Draws and moves notes and controllers. | Opt + Cmd + 2 / Ctrl + Alt + 2 |
| **Eraser** | Deletes notes or controllers. | Opt + Cmd + 3 / Ctrl + Alt + 3 |
| **Knife** <span class="pro">PRO</span> | Cuts notes. | Opt + Cmd + 7 / Ctrl + Alt + 7 |
| **Line** | Draws lines of notes or controllers. | Opt + Cmd + 4 / Ctrl + Alt + 4 |
| **Melody Paint** | Toggles notes on and off to create melodies. | Opt + Cmd + 5 / Ctrl + Alt + 5 |
| **Note Preview** | Previews all the notes at the current time. | Opt + Cmd + 6 / Ctrl + Alt + 6 |

## The Pencil Tool

The Pencil tool is used to draw in notes. Select the Pencil tool
and then start painting in notes where you'd like them to appear on the
piano roll.


![](images/25----19.png)

*Draw in New Notes with the Pencil Tool*

## The Eraser Tool

Use the Eraser tool to swipe over any series of notes that you would
like to erase.


![](images/25----20.png)

*The Eraser Tool*

## The Line Tool

There's also a Line tool. It's mainly for drawing in
controllers, but it is also possible to use it for notes as well. Draw a
line to create a stepped series of notes.


![](images/25----21.png)

*Draw a Series of Notes with the Line Tool*

## Note Colours { #note-colors }

The colour selection along the top edge of the MIDI editor allows you to
set a note colour. Select a group of notes, click on a colour and
then it will change those notes to that colour. It doesn't affect
playback, but it gives you a way to visually organise a sequence. For
example, when programming drums you could make snares, hi-hats, and kick
drum all different colours.


![](images/25----22.png)

*Note Colours*

## Selecting Multiple Notes

Selecting multiple notes is easy. Use the Selection tool and drag a
selection around any group of notes that you'd like to select together.


![](images/25----23.png)

*Note Multiple Selection*

You can also add or remove notes from a multiple selection by holding
down Shift (or Cmd / Ctrl) then clicking additional notes you'd like to
toggle in and out of the selection.

To select an entire row of notes that are the same pitch, hold down Cmd
/ Ctrl and click on the PRV keyboard key corresponding to that row of
notes; doing so selects the full row of notes.


![](images/25----24.png)

*Selecting a Row of Notes with Cmd / Ctrl*

Once you have a multiple selection, move all the notes in time or by
pitch by dragging with the Selection tool. Alternatively, you can change
values in the Actions panel that will apply to all notes in the selection.
Nudge also works on well on a multiple selection of notes (Shift plus
the arrow keys).

## Editing the Note Velocity

To quickly change the velocity of a note, select the note and then
choose a value from the **Vel** button in the MIDI editor toolbar (it
shows the current value, for example "Vel: 96"). The menu offers 16 to
112 in steps of 16, plus 127. The value you choose is applied to the
selected notes and is also used for new notes.


![](images/25----30.png)

*Quickly Set Note Velocity*

If you choose **Other...** from the menu, the "Enter Note Velocity..."
dialog lets you type whatever value you want from 0 to 127. Click
**Set Velocity** to apply it.


![](images/25----25.png)

*The Other... Velocity Dialog*

> 💡 **Tip:** You can also adjust velocity by dragging. Select a note,
then hold Shift as you drag up and down over the note. Watch the
**Velocity** value change in the Actions panel as you drag.

## Step Entry Mode

When the **Step** button is on (Opt + Cmd + S / Ctrl + Alt + S), the
MIDI clip goes into step entry mode. Set the length and velocity first
with the toolbar's **Len** and **Vel** buttons. Each note or chord you
play to the track is then entered at the cursor position with that
length and velocity, and the cursor moves to the end of the new note, so
it advances by the **Len** value. The cursor has to be inside the clip.
Press the backtick key (`` ` ``) to insert a rest of the same length.

To use the velocities you actually play instead of the **Vel** value,
turn on **Use incoming velocities for MIDI step entry** in
*Settings > General*, MIDI section.


![](images/25----26.png)

*Step Entry Mode*

## Hearing Notes While Editing

You have the option to trigger notes that are being moved so you can
hear the pitch. Turn this on or off with the speaker button right after
**Step** in the MIDI editor toolbar (Opt + Cmd + E / Ctrl + Alt + E).
This is separate from the Note Preview tool, which also has a speaker
icon.


![](images/25----27.png)

*Enable Speaker Button to Trigger Notes During Editing*

## The Velocity Editor

You can edit MIDI note velocity from the velocity area below the PRV.
Click the **Velocity** button in the MIDI editor toolbar
(Opt + Cmd + V / Ctrl + Alt + V) to show the velocity editor. For the
selected note, grab the stalk which represents the velocity and drag it
up or down. You will notice the **Velocity** value moving in the Actions
panel for that note as you drag.


![](images/25----28.png)

*The Velocity Editor*

You can also edit multiple velocities together by first selecting
several velocities. Say we want to edit the velocity of all the C4s.
Hold down Cmd / Ctrl and select all the C4s, then, just grab one of them
and they will all adjust together.

## Editing Other Controller Data

You can use a view similar to the velocity editor with any kind of
controller. Click **+** next to the **Controllers** button in the MIDI
editor toolbar to choose one: the **Control Changes** submenu lists the
CC numbers, followed by **Program Change**, **Aftertouch**,
**Channel Pressure**, **Pitch Wheel** and **SysEx Events**. Each choice
adds a lane, and you can stack several. The **Controllers** button
(Opt + Cmd + C / Ctrl + Alt + C) shows or hides the lanes. Each lane
header has a **Menu** button to change its type and a **Close** button
to remove it.


![](images/25----29.png)

*Editing Other Controller Data*

Example editing aftertouch: In the MIDI editor click
*+ > Channel Pressure*. Now the channel pressure data will appear in the
same way velocity appears.

## The MIDI Event List <span class="pro">PRO</span> { #the-midi-event-list }

> 📝 **Edition:** Waveform Pro, or with the MIDI Producer Expansion.

For surgical, numbers-first editing, open the **MIDI Event List**. It's
a floating, resizable table of every event in the currently selected
MIDI clip, and it follows your selection: click a different clip and
the list updates to match. The list and the piano roll share a
selection, so a note you highlight in one is highlighted in the other.

Open it with the command **Show or hide the MIDI Event List window**, or
from *View > Show MIDI Event List*.

![](images/event-list_1@2x.png)

*The MIDI Event List window*

Across the top is an **add-event** menu (Add note, Controller, Program
Change, Aftertouch, Pitch Wheel, Channel Pressure, or SysEx) alongside
**Transpose**, **Quantise**, **Groove**, and **Chords** menus that act
on the selected events. Along the bottom are seven filter toggles
(**Notes, Controller, Program Change, Aftertouch, Pitch wheel, Channel
Pressure, SysEx**), all on by default, so you can hide event types you
don't want to wade through.

The columns change with the event type:

- **Notes**: a mute toggle, Time, Type, Pitch (0-127), Velocity
  (0-127), Release velocity (0-127), and Length.
- **Controllers**: Time, Type, Controller type (Program Change,
  Aftertouch, Pitch Wheel, Channel Pressure, or CC 0-127), and Value
  (0-16383).
- **SysEx**: Time, Type, and an editable Data field.

> 💡 **Tip:** The Event List is the place to type exact values. It's handy
> when you need a controller at precisely 64, or a note nudged to an
> exact tick that's awkward to hit by dragging.

## The SysEx Lane

System Exclusive (SysEx) messages are manufacturer-specific MIDI data,
often used to recall a hardware synth patch or send a device-specific
command. Waveform shows them on a dedicated controller lane in the MIDI
editor, where each SysEx event appears as a **diamond** on a timeline.

Open the lane by clicking **+** next to **Controllers** and choosing
**SysEx Events** (or choose it from an existing lane's **Menu**). The
lane header has a **Close** button and a **Menu**.
Use the Selection, Pencil, and Eraser tools to place, move, and delete
events (a pencil click creates a new event with four zero bytes), and
snapping applies just as it does elsewhere in the editor.

> 📝 **Note:** The lane is for placing and timing SysEx events. To edit
> the actual bytes of a message, select it and edit **SysEx Data** in the
> Actions panel, or use the **Data** field in the
> [MIDI Event List](#the-midi-event-list).

## MIDI Controller Mappings

The **MIDI Controller Mappings** window lets you drive plugin parameters
from a hardware MIDI controller's knobs and faders. Each row binds one
incoming MIDI controller (CC) to one parameter in your Edit.

Open it from *Automation > Create MIDI controller mappings...*,
or with the command **Show MIDI controller mappings window**.

![](images/controller-mappings_1@2x.png)

*The MIDI Controller Mappings window*

When you first open it the window looks empty. That is normal. There is
always one blank row waiting at the bottom of the list, and that row is how
you add a mapping. Click either half of it to begin (see below); as soon as
you fill a row in, a fresh blank row appears beneath it, ready for the next
mapping. So the "empty" window already contains everything you need to start.

Each row has two halves:

- **Left half (the controller)**: Click it to enter MIDI-learn (the
  cell reads **(Move a MIDI controller)**); the next CC that arrives
  from your hardware is captured and bound to this row.
- **Right half (the parameter)**: Click **Choose Parameter...** for a
  hierarchical menu of everything you can map: Master Plugins, Plugin
  Racks, and each track's plugins and their parameters, plus an **Add all
  parameters** shortcut. The same menu saves, loads, and deletes
  presets.

> 💡 **Tip:** To set up a controller quickly, click the right half of the
blank row, open a plugin's submenu, and choose **Add all parameters**. A
row is created for every parameter of that plugin in one step. Then
MIDI-learn the hardware controllers you want for each.

Press **Delete** with a row selected to remove that mapping. There's
always a blank row at the bottom ready for the next binding. Mappings
belong to the Edit you set them up in, while presets are global and
available to every Edit.

> 📝 **Note:** The window shows mappings for the focused Edit only, and
> it doesn't switch when you change focus to a different Edit.

## Moving On

Next, [Pattern Generator](pattern-generator.md) builds parts for you,
and [Quantising MIDI Notes](quantizing-midi-notes.md) covers timing
correction.
