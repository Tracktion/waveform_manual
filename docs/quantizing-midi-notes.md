# Quantising MIDI Notes

The idea of quantising is to correct the timing your MIDI performances.
At a basic level, quantising snaps each note to the nearest correct note
on a virtual grid defined by the bars and beats of your song. Waveform
gives you tools to define that grid in musical increments like quarter
note, eighth note, but it does so using divisions of a beat.

Waveform takes quantising further with groove templates. Groove
templates allow you to quantise in a way that's not perfectly aligned to
straight timing. An important use of this is to introduce musical swing
to the timing. You have all the tools needed to impart the desired feel
into your performance.

## How to Quantise

Within a MIDI clip, select all the notes you want to quantise. If you
want to quantise all of them, you can use select all (Cmd + A / Ctrl +
A). The quantise actions are available by clicking **Quantise** in the
Actions panel or in the MIDI editor's toolbar.


![](images/26----01.png)

*MIDI Quantise Actions*

There are five quantise actions: **Quantise note start times**,
**Quantise note lengths**, **Quantise note start and end times**, **Quantise
note starts, leaving ends intact** and **Quantise note ends, leaving
starts intact**. The most common option is the first one, **Quantise note
start times**. To complete the action, you pick which beat division to
use.

The beat division selection can be a little confusing. Musical divisions
in Waveform are represented as fractions of one beat. For example, if
you want to quantise to eighth notes and you're in 4/4 time, then you
select **To nearest 1/2 beat**. One half of one beat would be an eighth note.
If you want to quantise to sixteenth notes, then select **To nearest 1/4
beat** from this menu.


![](images/26----02.png)

*MIDI Notes Before Quantising*


![](images/26----03.png)

*MIDI Notes After Quantising Note Starts to Nearest 1/2 Beat*

You'll notice right away that quantising perfectly tightens up
the performance. It will snap the notes to the nearest increment of the
division that you selected.

> 📝 **Note:** If you're playing was so far off that it actually snaps it to
the wrong note, then you might need to do some MIDI editing to clean
that up!

> 💡 **Tip:** Some styles of music are based on perfectly quantised timing
while other styles aren't. To get a more natural feel but also fix
timing errors, you can always edit timing note-by-note manually with
**Snap** turned off. Groove quantising also gives you other options for
"quantising with feel"; see [Quantising with Groove](#quantising-with-groove).

## Quantising Note Lengths

If you choose the option to quantise the note lengths you'll see that
the notes become the full length of that particular note value.


![](images/26----04.png)

*Note Lengths Quantised to 1/2 beat*

With something like a piano part, this can lead to a choppy, unnatural
feel. You could try quantising the note lengths to 1/4 beat (sixteenth
note) if the playing is that inconsistent.

In most cases, it's not really important to quantise the note lengths.
It can be useful for things like quantising the note lengths on drum
parts, because it helps play out the full attack and decay of a drum
hit.

## Quantising with Groove

Next let's look at how to quantise with groove. This feature can be as
simple a choosing a preset, or as complex as finely programming a groove
template. Groove can be applied to both MIDI clips and Step clips, which
are covered in [Step Clips](step-clips.md).

First lets look at the basics:

Select the notes to quantise and click **Apply Groove** in the Actions
panel, or **Groove** in the MIDI editor's toolbar.


![](images/26----18.png)

*Apply Groove in the Actions panel*

You will then get a menu of groove templates that apply fine
adjustments to the timing. When you choose one, a **Groove strength**
window asks how strongly to apply it (0 to 100). Waveform remembers the
last strength you used. The older templates with a fixed strength in
their name (such as **Swing 1/2 60%**) are in the **Legacy groove
templates** submenu, and apply straight away.


![](images/26----05.png)

*Apply Groove Presets in Options*

The most common scenario is to apply swing: Delaying the eighth notes
that follow the four primary beats in a bar. To locate the groove
template for standard swing, choose **Swing 1/2**. Swing 1/2 as in half
beat. In normal musical terms, that's eighth note swing. To apply a nice
groovy swing, try **Swing 1/2** with a strength of 60.


![](images/26----06.png)

*Groove Presets for Swing*

> 📝 **Note:** In 4/4 music, eighth note timing is counted 1 & 2 & 3 & 4 &.
In swing timing, the "&" beats are delayed. The groove strength sets
how much delay, from subtle (low values) to dramatic (high values).


![](images/26----07.png)

*Before Applying Groove*


![](images/26----08.png)

*After Applying Groove: Swing 1/2 at 60% Strength*

After you apply swing, you'll see it lays back all of the "and" notes to
be a little late; groovy! Waveform will also adjust the note lengths
appropriately as shown above.

## Clip Quantise and Groove

**Quantise** and **Apply Groove** change the selected notes. A MIDI clip can
also quantise and groove its notes as it plays, leaving the notes
themselves untouched. Select the clip and use these settings in the
Actions panel:

**Quantise**: The quantise resolution the clip applies on playback.

**Quantise Amount**: How tightly the notes are pulled to the **Quantise**
grid. (Range: 0-100)

**Groove**: The groove template the clip applies on playback.

**Groove Amount**: How strongly the groove is applied. Shown only when
the chosen template takes a strength. (Range: 0-100)

Because the notes don't move, you can change or remove these at any time
and the original timing comes back.

## Defining Groove Templates

For more control, you can build grooves to your own
definition using the Groove Template Editor. At the bottom of the **Apply
Groove** menu, you'll find **Edit groove templates...**. You can also
choose *View > Open Groove template editor* in the main menu.


![](images/26----09.png)

*View > Open Groove template editor*

Select this to open the groove template editor. Click on any of the
presets to see how the logic works.


![](images/26----10.png)

*Groove Template Editor*

In the image above, the legacy **Swing 1/2 60%** template is selected,
which matches the swing used for the examples in this chapter. A groove template consists of a
pattern length, note subdivision, and the timing for each note. For each
step of the pattern, you choose the amount that that note falls 'early'
or 'late' relative to perfect timing.


![](images/26----11.png)

*Swing 1/2 60% Template Example*

The example in the figure shown above is the setup for a basic swing
beat, with each 'and' eighth-note delayed. You can adjust the intensity
of the swing feel by how much delay you put on the eighth notes.

## Complex Groove Templates

Since you can create groove templates with as many steps as you want,
you can dial in exactly the feel you want. For example if you want to
vary the swing within the bar of music, you could create a template with
eight notes with each swing element slightly different.


![](images/26----12.png)

*Groove Template with Variable Swing*

Alternatively, you can create a groove that pushes the timing over two
bars, which will give excitement and tension like the **Fast Slow 2** template.


![](images/26----13.png)

*Fast Slow 2 Groove Template*

> 💡 **Tip:** It can also be useful to create a 'No Groove' template to help
you remove the effect of groove. This is particularly useful when
applying groove templates to Step clips; see [Step Clips](step-clips.md).


![](images/26----14.png)

*Creating a 'No Groove' Template*

## Managing Groove Templates

The **Groove Templates** window has buttons to **Create a New Template...**,
**Rename Template...**, **Import Template...** and **Export Template...**.
Exported templates have the `.trkgroove` file extension, so you can share
them with other Waveform users or installations.


![](images/26----15.png)

*Create, Rename, Import, or Export Groove Templates*

While editing a groove template, you may reset it with **Reset
Template...**. This removes the
late/early timing for the pattern, but doesn't change the length or note
division settings.


![](images/26----16.png)

*Resetting a Groove Template*

Any groove template that you don't need, you can delete using **Delete
Template**.


![](images/26----17.png)

*Deleting a Groove Template*

### Making Templates From a Performance

You can also capture the timing of a real performance as a template.
Select a MIDI clip and click **Extract groove from MIDI clip** in the
Actions panel. Waveform asks for a name, then saves the timing of the
clip's notes as a new groove template that you can apply to other MIDI
clips, Step clips and audio. For audio, Groove Doctor's **Extract groove**
mode does the same from the beat transients; see
[Groove Doctor](groove-doctor.md) (Waveform Pro, or with the Recording
Engineer Expansion).

## Moving On

Next, see [Step Clips](step-clips.md).
