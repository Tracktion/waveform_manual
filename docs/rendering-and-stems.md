# Rendering and Stems

This chapter covers the Render dialog: the single place you go to write files out
of an Edit, whether that's one stereo mixdown, a folder of stems for someone
else's session, a MIDI file of your arrangement, or a batch of loops cut at your
markers. It also covers the render queue, file name patterns, render presets,
loudness normalising, and rendering from the command line without opening
Waveform at all.

The Mixing Down chapter covers what to do *before* you get here — master
processing, checking your levels — and how to find your files afterwards. This
chapter is about the dialog itself.

![](images/rendering_1@2x.png)

*The Render dialog: Source, File Format and Output zones, with the render queue
underneath*

## Opening the Render Dialog

Open the **Menu** at the top of the Edit tab and choose *Export: Render to a
file*. Opening the dialog stops playback, and any plugin windows you had open
are hidden while it's up.
<!-- code: waveform/common/Source/ui/mainwindow/EditTab.cpp:786-797; RenderDialog.cpp:2158 (stopAllTransports); EditTab.cpp:794 (hideAllActiveWindows) -->

The dialog is laid out in three zones, side by side:

- **Source** — what gets rendered, and how much of the Edit each file covers.
- **File Format** — what kind of file gets written, and how it's processed on
  the way out.
- **Output** — where the files go, what they're called, and what happens once
  they're written.

Underneath those sits the **render queue**, which fills up as you add renders.

Two things are worth knowing before you start. First, everything you set is
remembered with the Edit, so the dialog opens next time exactly as you left it.
Second, some of the choices depend on what you had selected in the arrangement
*when you opened the dialog* — so select your tracks or clips first, then open
it.
<!-- code: RenderDialog.cpp:3186-3234 (selection captured at construction), 3240-3260 (settings persisted with the edit) -->

## Rendering the Whole Mix

The default setup renders the whole Edit to a single file, which is what you
want most of the time.

1. Set **Render** (in the Source zone) to *Whole Mix*.
2. Set **Range** to *Whole Edit*, or to *Marked Region* if you've set an
   In/Out marker range you want to bounce.
3. Pick your **Format**, **Sample Rate** and **Sample Size** in the File Format
   zone.
4. Check the **Folder** and the **Name** in the Output zone. The list underneath
   shows you exactly what's about to be written.
5. Click **Add to Queue and Start**.

The render appears as a row in the queue with a progress percentage and a
waveform that draws itself as the audio is written. When it finishes, the row
shows *Complete* and a folder button that reveals the file on your computer.

> 💡 **Tip:** The list under the Name row is the fastest way to catch a mistake.
> If it says *Nothing to render*, or names three files when you expected
> twenty-two, fix it there rather than after a ten-minute render.
> <!-- code: RenderDialog.cpp:1492-1501 -->

## The Source Zone: Choosing What to Render

**Render** (Choices: Whole Mix, Tracks, Selected Tracks, Submixes, Groups, Tags,
Outputs) — What gets rendered. *Whole Mix* writes one file for the whole Edit.
Every other choice writes one file per item. (Default: Whole Mix)
<!-- code: RenderDialog.cpp:147-156 (scopes) -->

- **Tracks** — every audio track in the Edit, listed for you to tick.
- **Selected Tracks** — the tracks that were selected in the arrangement when
  you opened the dialog. There's no list to tick for this one: selecting a clip
  counts as selecting its track, a submix renders as itself, and a plain folder
  stands for the audio tracks inside it.
- **Submixes** — every submix folder track.
- **Groups** — every Edit Mix Group. See the Edit Mix Groups chapter.
- **Tags** — every tag used on a track, so a tag acts as an ad-hoc stem group.
  Tag three tracks *Drums* and you get one *Drums* stem containing all three.
  Tags live on the tracks themselves and are saved with the Edit.
- **Outputs** — the audio output devices the Edit plays to, with each one
  rendering the tracks routed to it.

<!-- code: RenderDialog.cpp:388-500 (getRenderableItems); 1018-1026 (selected scope); 3180-3217 (findSelectedTrackIDs) -->

Choosing anything other than *Whole Mix* or *Selected Tracks* adds a checklist
of the items in that category. Its header tells you how many are ticked, and the
**All** and **None** buttons tick or untick everything currently shown. Once the
list is long enough to scroll, a filter box appears above it — type into it to
narrow the list, then use **All** to tick just that subset. Items covering a
track you had selected in the arrangement are marked with a coloured tab down
their left edge, so you can find them quickly in a long list.
<!-- code: RenderDialog.cpp:1229-1232, 1281-1285, 1346-1358, 1399-1411 -->

![](images/rendering_2@2x.png)

*The Tracks scope, with all 21 tracks ticked and the file list showing what the
batch will write*

If a category has nothing in it, the list says so and tells you what you'd have
to make first — for example, *No tracks are tagged. Add tags to a track's
properties and each tag renders as its own stem.*
<!-- code: RenderDialog.cpp:1180-1198 -->

**Range** (Choices: Whole Edit, Marked Region, Selected Clips Range, Each
Selected Clip Range, Each Marker Region, Each Arranger Clip Region) — How much of
the Edit each rendered file covers. (Default: Whole Edit)
<!-- code: RenderDialog.cpp:198-227 -->

- **Whole Edit** — start to end.
- **Marked Region** — the range between the In and Out markers.
- **Selected Clips Range** — renders the clips you had selected, and nothing
  else, into one file spanning from the first to the last. Only offered when
  clips were selected.
- **Each Selected Clip Range** — renders each selected clip to its own file,
  named after the clip. This is how you turn a handful of clips into a set of
  samples in one pass. Only offered when clips were selected.
- **Each Marker Region** — one file per marker clip, named after the marker.
- **Each Arranger Clip Region** — one file per arranger clip, named after the
  clip, so an arrangement built on the Arranger track exports section by
  section. Only offered where the Arranger track is available. See the Arranger
  Track chapter.

<!-- code: RenderDialog.cpp:208-222 (which ranges are offered); 901-965 (clip ranges); 1039-1056 (marker and arranger sections) -->

> 📝 **Note:** The two clip ranges render the clips themselves — nothing else on
> those tracks sounds, even if it overlaps — so they ignore the **Render** choice
> entirely. Only arrangement clips on audio tracks count; clips in Launcher slots
> and on the global tracks are left out.
> <!-- code: RenderDialog.cpp:901-916, 3220-3234 -->

**Render Items to a Single File** — Mixes everything you've ticked into one file
instead of writing one file per item. Use it to bounce a handful of chosen
tracks down to a single stem. (Default: off)
<!-- code: RenderDialog.h:96; RenderDialog.cpp:1101-1111 -->

**Include Source Tracks** — Also processes the tracks that feed the chosen items'
sidechains, aux buses and racks, keeping them silent in the output. This is what
makes a stem sound the way it does in the full mix: the kick still ducks the bass
through the sidechain compressor even though the kick isn't in the bass stem. I'd
leave this on. (Default: on)
<!-- code: RenderDialog.h:97; tracktion_RenderSpecification.h:39-53, 114-126 -->

### Rendering Stems

Rendering stems is the reason most of this zone exists. Pick the grouping that
matches how you want the stems to arrive:

- Sending your song to someone mixing in another DAW? Use **Tracks**, so they
  get every track as its own file, all starting at the same point on the
  timeline.
- Delivering to a mastering engineer or a stem-mastering service? Use
  **Submixes** or **Tags**, so you hand over six or eight musical groups rather
  than sixty tracks.
- Making a live backing track set? Use **Groups** or **Tags** for the parts you
  want separate faders for on the night.
- Just need the four tracks you're looking at? Select them in the arrangement
  before you open the dialog and use **Selected Tracks**.

The dialog warns you about the one thing that catches people out. If you include
tracks that live inside a submix, it says *Tracks inside a submix render without
their submix's plugins - tick the submix itself to render its bus output*. A
track inside a submix, rendered on its own, skips whatever compression or EQ is
on the submix bus, so those stems won't add back up to your mix. Render the
submix instead when that matters.
<!-- code: RenderDialog.cpp:2714-2730 -->

Tracks with nothing to play are skipped rather than queued as jobs that fail, so
an Edit full of empty placeholder tracks doesn't produce a queue full of red
rows. For a MIDI render, "nothing to play" means no MIDI clips, so audio tracks
drop out of a MIDI stem batch automatically.
<!-- code: RenderDialog.cpp:363-386 (trackHasRenderableMidi/trackHasContentFor), 975-984, 1116-1120 -->

## The File Format Zone

**Format** (Choices: WAV, AIFF, FLAC, Ogg Vorbis, MP3, MIDI) — The file format
the render is written in. Changing it keeps your sample rate, bit depth and
quality valid for the new format and swaps the file extension for you.
(Default: WAV)
<!-- code: RenderDialog.cpp:33-40 (formats), 2740-2765 (setFormat) -->

### Rendering a MIDI File

Choosing **MIDI** writes the notes rather than audio, so every audio setting
below disappears — sample rate, bit depth, normalising, dithering and the rest
mean nothing to a MIDI file. In their place you get one choice:

**MIDI Source** (Choices: Clips, After MIDI Plugins) — Which MIDI is written.
*Clips* writes the notes as they sit in your MIDI clips. *After MIDI Plugins*
writes the MIDI leaving each track's plugin chain instead, which bakes in
arpeggiators, chord players and other MIDI effects. (Default: Clips)
<!-- code: RenderDialog.cpp:70-84, 2876-2884 -->

> ⚠️ **Warning:** *After MIDI Plugins* is lost if an instrument doesn't pass MIDI
> through — many don't. If your exported MIDI file comes out empty, switch back
> to *Clips*.
> <!-- code: RenderDialog.cpp:2881 (tooltip) -->

![](images/rendering_3@2x.png)

*With MIDI chosen, the audio settings give way to a single MIDI Source choice —
and the 21 ticked tracks resolve to the 7 that actually hold MIDI*

Everything else works the same for MIDI as for audio: scopes, ranges, name
patterns, the queue and presets. The queue draws a small piano roll of the notes
that were written instead of a waveform. *Add to Library* and *Measure Loudness*
are hidden, since neither means anything for a MIDI file.
<!-- code: RenderDialog.cpp:1704-1760 (note preview), 3062-3072 -->

### Audio Settings

**Channel Layout** (Choices: Auto, Mono, Stereo, and 5.1 and 7.1 where surround
is available) — How many channels each file has. *Auto* follows the source, so
leave it there unless you specifically need to force mono or a surround layout.
(Default: Auto)
<!-- code: RenderDialog.cpp:117-143 -->

**Sample Rate** — The rate the files are written at, which doesn't have to match
the Edit's. The list is whatever the chosen format supports. (Default: 44100)
<!-- code: RenderDialog.cpp:2894-2902 -->

**Sample Size** — Bits per sample. 32-bit float can't clip and needs no
dithering, which makes it the safe choice for files that are going on to be
processed further; 16-bit is the CD standard. (Default: 16-bit)
<!-- code: RenderDialog.cpp:2904-2906, 2767-2773 -->

**Quality** — Only shown for compressed formats. Trades file size against
quality. (Default: the format's own default)
<!-- code: RenderDialog.cpp:2908-2911 -->

**Remove Silence at Start/End** — Trims silence from both ends of each file, so
it starts where the audio does. (Default: off)
<!-- code: RenderDialog.cpp:2953-2955 -->

**Dithering Enabled** — Allows the output to be dithered when it's less than 32
bits. If you don't know what dithering is, leaving this on is the right answer.
(Default: off)
<!-- code: RenderDialog.cpp:2957-2958 -->

**Render at 1x Play-Speed** — Renders in real time, taking as long as the song
does. You need this if you're mixing through outboard gear with the Insert
plugin, or if a plugin misbehaves when pushed faster than real time. Otherwise
leave it off. (Default: off)
<!-- code: RenderDialog.cpp:2960-2961 -->

**Add ACID Tempo/Note Info** — WAV only. Writes the tempo and root note into the
file so loop browsers and other DAWs can match it to their project.
(Default: off)
<!-- code: RenderDialog.cpp:2963-2965 -->

**Wrap Remainder Into Loop** — Renders the plugin tail that runs past the end of
the range and mixes it back onto the start of the file, so the file loops
seamlessly. This is the setting that turns a reverb-tailed bar into a usable
loop instead of one that stutters at the loop point. It forces *Remove Silence
at Start/End* off, since trimming would undo the effect. (Default: off)
<!-- code: RenderDialog.cpp:2967-2968; tracktion_RenderSpecification.h:58-62 -->

### Tags

Tags are the track information a music player shows: title, artist, album and so
on. Waveform can write them into your rendered files, so a mixdown arrives
already labelled rather than as *Untitled* by *Unknown Artist*.

**Add Tags** — Writes this Edit's tags into the rendered files. It's ticked
automatically when the Edit already has tags, and unticking it renders without
them. (Default: on when the Edit has tags)
<!-- code: RenderDialog.cpp:2987-2992; tracktion_RenderSpecification.h:55-60 (hasTagMetadata) -->

**Edit Tags** — Opens the tag editor.
<!-- code: RenderDialog.cpp:2996-2998, 3192-3207 -->

Both rows only appear for formats that can actually carry tags: **WAV** (in a
RIFF INFO chunk), **Ogg Vorbis** (Vorbis comments) and **MP3** (ID3). AIFF and
FLAC have no tag support in their writers, and a MIDI file has nowhere to put
them, so the rows are hidden for those.
<!-- code: tracktion_RenderSpecification.h:62-66 (formatSupportsTagMetadata) -->

![](images/rendering_7@2x.png)

*The tag editor, reached from the render dialog or the Edit's properties*

The tag editor holds seven fields:

- **Title** — The track title.
- **Artist** — The artist.
- **Album** — The album the track belongs to.
- **Year** — The year. Leave it at 0 and no year is written. (Default: 0)
- **Track number** — The track's position on the album, 0 to 255. Leave it at 0
  and no track number is written. (Default: 0)
- **Genre** — Chosen from the standard genre list.
- **Comment** — A free-text comment.

<!-- code: EditTagsDialog.cpp:37-59, 74-88 -->

> 📝 **Note:** The tags belong to the **Edit**, not to one render — so they're
> saved with your project and reused by every render you do from it. You can
> also reach the same editor without opening the render dialog: select the Edit
> and choose *Edit Tags...* in its properties.
> <!-- code: EditTagsDialog.h:10-19; EditPropertyPanel.h:22-31 -->

Entering tags for the first time ticks **Add Tags** for you, and clearing them
all again unticks it, so the checkbox follows what you've actually filled in.
<!-- code: RenderDialog.cpp:3192-3206 -->

> ⚠️ **Warning:** The **Genre** here is the tag written into the file. It is not
> the Edit's own *Genre* property, which describes your project to the AI
> assistant — they're separate settings that happen to share a name.
> <!-- code: EditTagsDialog.cpp:16-19, 55 -->

### Normalising and Loudness

**Normalise** (Choices: None, Peak, RMS, LUFS) — Scales the finished file's
level to a target. (Default: None)
<!-- code: RenderDialog.cpp:250-258, 2913-2916 -->

- **Peak** shows a **Peak Level** field (−30 to 0 dB, default 0 dB) and scales
  the file so its loudest peak lands there.
- **RMS** shows an **RMS Level** field (−30 to 0 dB, default −12 dB) and scales
  the file so its average level lands there.
- **LUFS** shows a **Target Loudness** field (−30 to 0 LUFS, default −14 LUFS)
  and scales the file so its *integrated loudness*, measured to the BS.1770-4
  standard, lands there. This is the number streaming platforms care about.

<!-- code: RenderDialog.cpp:2918-2950 -->

The three modes share one level field, so a level you chose yourself carries
across when you switch modes; a level still sitting at the old mode's default is
replaced with the new mode's.
<!-- code: RenderDialog.h:177-180 -->

In LUFS mode you also get:

**Limit True Peak** — Holds the gain back so the true peak stays under the
ceiling, even if that leaves the file quieter than the loudness target. This is
the behaviour you want for anything going to a streaming platform, where an
over-the-ceiling file gets clipped by their encoder. (Default: on)
<!-- code: tracktion_RenderSpecification.h:85-88; RenderDialog.cpp:2939-2943 -->

**Ceiling** — The true peak the file is kept under, from −3 to 0 dBTP.
(Default: −1.0 dBTP)
<!-- code: RenderDialog.cpp:2945-2950 -->

![](images/rendering_4@2x.png)

*LUFS mode, with a −14 LUFS target held under a −1 dBTP ceiling*

> 📝 **Note:** With *Limit True Peak* on, a loud target can land quieter than you
> asked for — that's the ceiling doing its job. When it happens, the queue row
> says *Limited* rather than *Complete*, and its tooltip explains why. The
> measured figures next to it tell you where the file actually ended up.
> <!-- code: RenderDialog.cpp:1896-1899, 1930-1945 -->

## The Output Zone

**Preset** — Applies a saved render preset, or saves, renames and deletes them.
The row always tells you where you stand: it shows the name of the preset your
current settings match, or **Custom** when they match none. See *Render Presets*
below.
<!-- code: RenderDialog.cpp:2438-2445, 3029-3036 -->

**Folder** — The folder the rendered files are written to. Type a path or use the
folder button to browse. Note that this row is the *folder* only — the file name
comes from the row below. By default it's your project's **Exported** folder,
where it turns up on the Projects tab alongside your other exports; an Edit with
no project falls back to the folder the Edit file is in.
<!-- code: RenderDialog.cpp:3037-3041, 3264-3282 -->

**Name** — What the rendered files are called. How this behaves depends on how
many files you're writing:

- Rendering the **whole mix** writes one file, so plain text here is simply that
  file's name.
- Every other scope writes a file per item, so the text is treated as a
  *pattern* and expanded once per file.

Leave it empty and Waveform names the files after the Edit and the items being
rendered.
<!-- code: RenderDialog.h:152-159 -->

The **Insert** button beside the field lists the tokens a pattern understands
and appends the one you pick:

| Token | Expands to |
| --- | --- |
| `$edit` | The Edit's name |
| `$track` | The track being rendered |
| `$group` | The submix, group, tag or output being rendered |
| `$marker` | The marker, arranger clip or clip naming the rendered section |
| `$type` | master, track, stem, submix, group, output, clip or clips |
| `$samplerate` | The sample rate (dropped from a MIDI render's name) |
| `$bitdepth` | The bit depth (dropped from a MIDI render's name) |
| `$date` | Today's date, e.g. 29Jul2026 |
| `$time` | The time of the render, e.g. 140233 |
| `$index` | The file's position in the batch |

<!-- code: RenderDialog.cpp:2517-2529 (token menu), 501-544 (expandRenderNamePattern), 884-898 (MIDI drops rate/depth) -->

So a pattern of `$edit - $track` gives *My Song - Bass.wav*, *My Song -
Drums.wav* and so on. A token with nothing to fill it also swallows the
separator next to it, so the same pattern used for a whole-mix render gives just
*My Song.wav* rather than *My Song - .wav*.
<!-- code: RenderDialog.cpp:529-541 -->

Under the Name row is the list of files the render will write, headed *Will
write one file:* or *Will write 22 files:*. It updates as you change anything
above it.
<!-- code: RenderDialog.cpp:1433-1501 -->

**Add to Library** — Adds each finished file to your loop library so you can
search for it and use it in other projects. Audio formats only. (Default: off)
<!-- code: RenderDialog.cpp:3064-3065 -->

**Measure Loudness of Rendered Files** — Reads each finished file back and shows
its integrated loudness and true peak on its queue row. The measuring happens on
a background thread, one file at a time, so it doesn't compete with the render
itself, and it never affects the audio that was written. Audio formats only.
(Default: on)
<!-- code: RenderDialog.cpp:3067-3071, 1665-1690 -->

## The Render Queue

Renders don't block the dialog. The queue panel at the bottom holds a row per
render job, and you can keep changing settings and adding more while earlier
ones are still running.

The action button changes to match: it reads **Add to Queue and Start** when
nothing is running, and just **Add to Queue** when a batch is already going.
<!-- code: RenderDialog.cpp:2224-2233 -->

Jobs run strictly one at a time, in order, so a 22-stem batch doesn't fight
itself for CPU.
<!-- code: tracktion_RenderQueue.h:36-48 -->

![](images/rendering_5@2x.png)

*A batch part-way through: two done, one at 95%, the rest waiting — and a piano
roll of each finished MIDI file*

Each row shows:

| Column | What it shows |
| --- | --- |
| Name | The track, stem or mix being rendered |
| Status | *Waiting...*, a live percentage, then *Complete*, *Limited*, *Failed* or *Cancelled* <!-- code: RenderDialog.cpp:1892-1904 --> |
| Preview | A waveform that draws in as the file is written — or a piano roll of the notes for a MIDI render — so you can see at a glance that something actually landed. A failed job shows its error here instead <!-- code: RenderDialog.cpp:1704-1760, 1860-1880 --> |
| Loudness | The measured integrated loudness and true peak of the finished file, e.g. *-14.2 LUFS   -1.0 dBTP* <!-- code: RenderDialog.cpp:1908-1914 --> |
| Button | Cancels a job that's waiting or running; reveals the file once it's done <!-- code: RenderDialog.cpp:1799-1806 --> |

The header line above the rows answers "how much is left" without scrolling:
*Rendering 4 of 22* while it runs, then *22 renders complete* — with *, 1 did not
finish* appended if anything failed or was cancelled. A progress bar and a
**Cancel All** button sit beside it while the queue is running.
<!-- code: RenderDialog.cpp:2100-2131 -->

![](images/rendering_6@2x.png)

*A finished render, measured: −16.3 LUFS at −1.1 dBTP*

## Render Presets

Presets are global — they're saved with the application rather than with an
Edit, so a preset you make in one project is there in all of them.
<!-- code: RenderDialog.h:190-213 -->

To save one, set the dialog up how you want it, open the **Preset** dropdown and
choose *Save preset...*, then give it a name. The same dropdown gains *Rename
preset* and *Delete preset* entries once a preset is active.
<!-- code: RenderDialog.cpp:2573-2652 -->

The Preset row keeps itself honest: change any setting and it switches to
**Custom**, and set things back to what a preset holds and its name reappears.
The destination folder takes no part in that comparison, so working in a
different project doesn't stop a preset from matching.
<!-- code: RenderDialog.h:200-210; RenderDialog.cpp:2438-2445 -->

Applying a preset restores everything except the destination folder, which stays
as it is — the folder is specific to the machine and the project you're working
on, and a preset shouldn't drag your files somewhere else. If a preset was saved
from a different Edit and names tracks or submixes that don't exist here,
Waveform drops the ones it can't find rather than failing.
<!-- code: RenderDialog.h:124-131 (sanitiseForEdit) -->

Good candidates for presets: *Streaming master* (WAV, 24-bit, LUFS −14 with a
−1 dBTP ceiling), *Stems for mixing* (Tracks, all ticked, Include Source Tracks
on, 24-bit), *MP3 reference* (MP3 320, whole mix), *MIDI for the arranger* (MIDI,
Tracks, source *Clips*).

## Rendering From the Command Line

Waveform can render without opening its interface at all, which is useful for
batch jobs, overnight renders and build servers. Run the Waveform application
with `render` and an Edit file:

```
Waveform render MySong.tracktionedit --output /tmp/mixes --format wav --bit-depth 24
```

There are four commands:
<!-- code: waveform/common/Source/misc/CommandLineRunner.h:26-33 -->

- **render** — renders the Edit using the settings you give it.
- **list-items** — prints the renderable items (tracks, submixes, groups, tags,
  outputs) and the markers, so you know what you can ask for.
- **validate-config** — checks the settings and renders nothing.
- **run-tests** — runs Waveform's own test suite headlessly.

The options mirror the dialog: `--format` (including `midi`), `--sample-rate`,
`--bit-depth`, `--channels`, `--midi-after-plugins`, `--normalise`,
`--normalise-rms`, `--normalise-lufs`, `--normalise-level`,
`--true-peak-ceiling`, `--no-true-peak-limit`, `--trim-silence`, `--dither`,
`--real-time`, `--wrap-remainder`, `--add-acid`, `--separate-files`,
`--category`, `--items`, `--together`, `--marker-clips`, `--start`, `--end`,
`--name-pattern` and `--force`. Add `--json` for machine-readable output.
<!-- code: CommandLineRunner.cpp:195-246 -->

Settings are layered, with later layers winning per setting: built-in defaults,
then `WAVEFORM_RENDER_*` environment variables, then any `--preset` you name,
then each `--config` JSON file in order, then individual flags. Because config
files use the same format the dialog saves in, a preset you made in the dialog
can be handed straight to the command line.
<!-- code: CommandLineRunner.h:29-33 -->

> 💡 **Tip:** `validate-config` is the cheap way to check a long batch before you
> start it — it resolves everything and reports problems without rendering a
> single sample.

## Rendering From the AI Assistant

The assistant can render for you, and can measure what it rendered. Ask it for
"a 24-bit WAV of the whole mix", "stems for each submix" or "a MIDI file of the
drum track" and it uses the same render engine this dialog does. It can also
analyse a finished file and report its loudness, true peak, loudness range,
clipped samples and frequency balance — useful for a quick "is this loud enough
for Spotify?" check. See The AI Assistant chapter.
<!-- code: AcceleratorFunctions_FlatAPI.cpp:2990-3008 -->

## ⚡ Things to Watch Out For

**Selections are read when the dialog opens.** *Selected Tracks*, *Selected Clips
Range* and *Each Selected Clip Range* all use what was selected at that moment —
changing the selection behind the dialog does nothing. If you picked *Selected
Tracks* with nothing selected, it tells you: *No tracks were selected when this
window opened - select some and reopen it*.
<!-- code: RenderDialog.cpp:2673-2682 -->

**Stems from inside a submix won't add back up to your mix.** A track that lives
in a submix, rendered on its own, doesn't pass through the submix's plugins. If
your submix bus has a compressor on it, render the submix rather than its
children. The dialog tells you when your selection has this problem.
<!-- code: RenderDialog.cpp:2714-2730 -->

**"Each Marker Region" and "Each Arranger Clip Region" need a scope other than
Whole Mix.** Pick one of the item categories first, or the dialog will tell you
it can't do it.
<!-- code: RenderDialog.cpp:2688-2694 -->

**A selected-clips range ignores the Render choice.** It renders just those
clips, so the scope has nothing to do; the dialog says so rather than quietly
disagreeing with you.
<!-- code: RenderDialog.cpp:2695-2699 -->

**Marked Region with no marked region renders everything.** If you choose
*Marked Region* without having set one, the dialog warns you that the whole Edit
will be rendered instead.
<!-- code: RenderDialog.cpp:2700-2702 -->

**Generated names never overwrite; a name you chose might.** Names built from a
pattern are made unique against each other and against what's already on disk,
so a second batch lands beside the first rather than on top of it. A file name
you typed yourself can collide, and when it does you get an *Overwrite Files?*
confirmation listing exactly which files would be replaced.
<!-- code: RenderDialog.cpp:546-556, 2270-2287 -->

![](images/rendering_8@2x.png)

*The confirmation names the files a render would replace*

**Closing the dialog cancels renders that are still going.** If anything is
still queued or running, you're asked to confirm, with *Stop and Close* and
*Keep Rendering* to choose between.
<!-- code: RenderDialog.cpp:2186-2200 -->

**A cancelled or failed render leaves no half-file behind.** Partial files are
cleaned up rather than left on disk to be mistaken for finished ones.
<!-- code: tracktion_RenderQueue.cpp:81-87, 230-232 -->

## Moving On

We've covered rendering the whole mix, rendering stems by track, selection,
submix, group, tag or output, cutting an arrangement up at its markers, arranger
clips or selected clips, exporting MIDI files, naming files with patterns,
normalising to a loudness target, and driving the whole thing from the command
line.

See the Mixing Down chapter for the master-processing side of getting a mix
ready to render, the Edit Mix Groups and Submix Tracks chapters for setting up
the groupings the stem categories use, the Using Markers and Arranger Track
chapters for defining the regions the per-region ranges render, and the Working
With Loops chapter for what *Add to Library* does with your renders.
