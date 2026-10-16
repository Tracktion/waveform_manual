# Selecting and Snapping

In this chapter, we start working with clips. The examples focus on
Audio Clips and MIDI Clips. Keep in mind that most of these techniques
also apply to Step clips, Edit clips, and markers.

First, you'll learn how to select clips and groups of clips. Then, you
will learn about the snap-to-grid functions. Snap-to-grid makes it easy
to align clips to the bars and beats of your song. Let's get started
with selecting clips.

## Selecting a Clip

To select a clip, simply click on the clip. The clip is highlighted and
its properties appear in the Actions panel.


![](images/11----01.png)

*A Selected Clip*

## Auditioning a Clip

To audition a clip, double-click and you will hear it play back,
starting at the spot where you have double-clicked. Click within the
clip to jump to a new spot as playback continues. Click anywhere outside
the clip and the auditioning will stop. Moving pointers above and below
the clip indicate the playback position.


![](images/11----02.png)

*Audio Clip Being Auditioned*

Auditioning essentially solos the clip; everything else within the Edit
is muted in this mode.

## Selecting Multiple Clips

To select more than one clip, hold down Cmd / Ctrl then click on each
clip that you want to add to the selection.


![](images/11----03.png)

*Multiple Clips Selection*

Once you have multiple clips selected, you can perform operations on
them as a group, such as moving them by dragging, duplicating, or
deleting them. We'll cover more about clip editing operations in
[Audio Clips and Editing Audio](audio-clips-and-editing-audio.md). To clear a multiple
selection, simply press the Esc key.

Another way to make a multiple selection is to use the lasso tool.
Here's how that works:


![](images/11----04.png)

*Multiple Selection with Lasso*

1.  Hold down Opt / Alt until you see a **plus** cursor.
2.  Now as you drag, the cursor draws a yellow box.
3.  Anything the yellow box touches gets selected.

> 💡 **Tip:** You can further customize a multiple selection by holding down
Cmd / Ctrl then click any clip you want to de-select.

## Shift Selecting Clips

Waveform also supports Shift-select. This is a quick way to select a
contiguous range of clips. Here's how:

1.  Select the first clip.
2.  Hold down Shift and select the last clip. This will select the first
    clip, the last clip, and all the clips in between.

Shift-select works for clips on a single track, and even across multiple
tracks.

> 💡 **Tip:** Shift-select also works for many other kinds of Waveform
objects including Browser lists and tracks.

## Deselecting Clips

You can always press Esc to deselect everything.

> 💡 **Tip:** Pressing Esc also works to clear selections of other objects in
Waveform like plugins and tracks.

## Working With a Marked Region

A marked region is a time range drawn across one or more tracks. By default,
dragging across an empty part of the tracks area draws one over the tracks you
drag across. If you've set the tracks area to select clips instead (see
[Mouse settings](reference-settings.md#mouse)), hold Shift + Opt / Shift + Alt
while you drag. Shift + Opt / Shift + Alt dragging in the Timeline marks every
visible track. Drag either edge of the region to resize it, and Cmd-click /
Ctrl-click a track within its time span to add or remove that track.

Right-click inside the region to open its menu. Most commands act only on the
clips that overlap the region on the tracks it covers. Delete Time and Insert
Time change the whole Edit. Launcher clips are always left alone.

- **Cut** (Cmd + X / Ctrl + X): Copies the parts of clips inside the region to
  the clipboard and removes them, leaving a gap.
- **Copy** (Cmd + C / Ctrl + C): Copies the parts of clips inside the region to
  the clipboard.
- **Crop**: Trims each overlapping clip so only the part inside the region is
  left.
- **Ripple delete** (Cmd + Backspace / Ctrl + Backspace): Deletes everything
  inside the region on its tracks, automation included, and moves later clips
  on those tracks left to close the gap.
- **Split**: Splits the overlapping clips at both edges of the region.
- **Insert MIDI Clip** (G) and **Insert Step Clip**: Add a new clip that fills
  the region on each of its tracks. If a track is selected, the clip goes on
  the selected track instead. Only shown when you right-click a track that can
  hold MIDI.
- **Heal**: Renders the audio clips that overlap the region on each track into
  one audio clip, running from the start of the first to the end of the last.
- **Consolidate**: Renders the audio inside the region on each track into one
  audio clip exactly the length of the region.
- **Duplicate** (D): Copies the parts of clips inside the region and pastes
  them straight away, in the place Paste would put them (usually the
  playhead), not directly after the region.
- **Reverse**: Reverses the part of each audio clip inside the region, splitting
  the clip at the region's edges first.
- **Silence**: Mutes the part of each clip inside the region, splitting the clip
  at the region's edges first.
- **Delete Time**: Removes the region's time from the whole Edit (every track,
  automation, and tempo and pitch changes), so everything after it moves
  earlier.
- **Insert Time**: Inserts empty time the length of the region at its start,
  across the whole Edit, pushing everything after it later.
- **Set loop to marked region** (A): Sets the loop range to match the region.
- **Insert automation shape**: Draws a repeating Sin, Square, Triangle, Ramp
  Up or Ramp Down shape into the region on the automation curve the track is
  showing. Only shown when you right-click a track with an automation curve
  visible. See [Editing Automation](automation.md#editing-automation).

> 📝 **Note:** Heal, Consolidate and Reverse only work on audio clips. MIDI and
Step clips in the region are skipped.

## Using Snap-to-Grid

Snap-to-grid makes aligning clips and notes to musical time accurate and
efficient. Working with this feature is crucial to using
Waveform for editing audio and MIDI.

## Enable/Disable Snap-to-Grid

To toggle snap-to-grid on or off, click on the *Snap* button (Q) in the
transport bar. When snap-to-grid is enabled the *Snap* button appears
highlighted. Right-click the *Snap* button to open the Snap menu, with
*Snap-to-grid*, *Snap clips to other clips* and *Snap cursor movement*.


![](images/11----10.png)

*Snap button in the transport bar*

Pressing Q also toggles *Snap* on and off. You can also control the
snapping state from the menu section: *Snap > Snap-to-grid*.

> 💡 **Tip:** Remember the keyboard shortcut Q is short for quantize.
Snap-to-grid is a form of quantizing. If you don't like that shortcut,
you can always remap it to another key.

## About Snap Resolution

The snap resolution is dependent on the zoom level. If you're zoomed way
out, the snap resolution might be one bar. The more you zoom in, the
snap resolution gets finer and finer.


![](images/11----05.png)

*Hover Over Timeline to See Snap Resolution*

> 💡 **Tip:** You can always see what your current snap resolution is by
hovering the mouse pointer over the Timeline. A label appears showing,
for example, *Snap resolution: Bar*, *Snap resolution: Beat*, or
*Snap resolution: 1/2 beat*.

## Snapping Clips to the Grid

As you drag a clip, it snaps to the grid increments. If you want to see
exactly where it's snapping, look at the *Start* value in the
Actions panel. Snap-to-grid makes it easy to align a clip to a bar or beat
of the music.


![](images/11----06.png)

*The clip's Start value in the Actions panel*

> 📝 **Note:** Snap-to-grid is an alignment of the beginning of a clip to a
grid line. Notice that snapping also applies to editing functions like
trimming.

## Snapping the Cursor to the Grid

Snapping may affect how the cursor is positioned depending on another
setting. Turn on *Snap > Snap cursor movement* and the cursor
position will snap to the grid. Remember that the snap resolution is
determined by the zoom level.


![](images/11----07.png)

*caption*

To test this, zoom out so that the snap resolution is "Beat." Now move
the cursor around and it will obviously snap to the nearest beat.

> 💡 **Tip:** To get clear indication of exactly where the cursor is, look at
the time display in the transport bar.

## Snapping Clips to Other Clips

Another snap behavior is to *Snap clips to other clips*. With *Snap clips
to other clips* off, clips snap to the grid normally. However, with
*Snap > Snap clips to other clips* turned on, clips snap to other
clips. It seems as if they are magnetically attracted to each other.
This is useful for any editing where you want to arrange clips
end-to-end, for example when editing voiceover tracks.


![](images/11----08.png)

*Snap Clips to Other Clips Option*

> 💡 **Tip:** *Snap clips to other clips* only works while snap-to-grid is
on. To snap clips to other clips with snap-to-grid off, hold Opt / Alt
while you drag the clip. Press it once the drag has started: holding it
as you start the drag makes a copy of the clip. With snap-to-grid on, holding Opt / Alt or
Shift during the drag does the opposite: the clip snaps to the grid but
not to other clips. Here you hold the key while dragging a clip, unlike
the Opt / Alt lasso, which starts on an empty part of a track.

## Overriding Snap-to-Grid

Temporarily override snap-to-grid by holding down Cmd / Ctrl. Using this
modifier, you can freely position clips without first turning off
*Snap*.

## Nudging Clips

To move clips using the keyboard, select a clip then press *Shift +
Right Arrow* or *Shift + Left Arrow.* The nudge action moves the clip by
one grid increment. You can also move clips track to track using nudge.
To nudge clips track to track, use *Shift + Up Arrow* and *Shift + Down
Arrow.*

You can use nudging when moving large selections of clips over, to add a
song section or make room for an intro.

> 📝 **Note:** Nudging works the same whether snapping is on or off. The
nudge move is by the grid increment.

## Nudging Notes

Snapping is useful when working with Audio clips, but even more so when
working with MIDI notes. We cover MIDI editing in [MIDI editing](midi-editing.md) However, here is a preview while we are on the topic of
nudging.


![](images/11----09.png)

*The Waveform MIDI Editor*

Double-click on the header of a MIDI clip. It goes into the large view
so you can see the MIDI editor. MIDI notes work much like clips, in that
they respect the snap resolution. You can drag a note to snap by the
current grid increment: bar, for example. You can nudge notes forward or
backward in time by the grid increment as well. To do so, hold Shift
while pressing the Left Arrow or Right Arrow.

> 💡 **Tip:** Remember the keyboard shortcut Q to toggle *Snap* on and off.

## Moving On

Now that you've learned how to get around in Waveform, it's time to
start having fun manipulating audio. We'll jump into that in the next
chapter.






