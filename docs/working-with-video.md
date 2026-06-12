# Working With Video

Waveform can load a video file alongside your Edit so you can score to
picture — write music, edit dialogue, or design sound effects while
watching the footage play in sync with the timeline. This chapter covers
importing a video, working with the video window, and (on Pro) rendering
your mix back out to a finished video file.

## What You Can Do at Each Edition

Video support comes in two tiers. The basics — importing standard video,
the playback window, and the timecode overlay — are available in
Waveform Free, OEM, and Pro from version 12.5 onward. A second set of
features is Pro-only, or unlocked by the **Pro Video Expansion** add-on.

| Capability | Free / OEM (v12.5+) | Pro / Pro Video Expansion |
|---|---|---|
| Import standard video, playback window, timecode | ✓ | ✓ |
| Import image sequences (.png / .jpg) | ✗ | ✓ |
| Multiple simultaneous videos | ✗ (one at a time) | ✓ |
| Render Video / Replace Audio in Video | ✗ | ✓ |

> 📝 **Note:** On Free and OEM you can only have one video enabled at a
> time. Loading a second video quietly disables the first rather than
> playing both.

## Importing a Video

There are three ways to bring a video into your Edit:

- From the transport bar's **Video** menu, choose **Load video file…**
- From the **File** menu, choose **Load video file…**
- Drag a video file straight onto the Edit.

The file picker is titled *Select a file to import* and lets you select
more than one file at once.

The standard formats Waveform accepts are *.mov*, *.avi*, *.webm*,
*.wmv*, *.mp4*, *.m4v*, *.mpg*, *.mp2*, *.mpeg*, *.mpe*, *.mpv*, and
*.mkv*. Image sequences — folders of *.png*, *.jpg*, or *.jpeg* frames —
require the Pro video features.

When you import, Waveform does a few things automatically:

1.  It transcodes the video to an internal working copy (capped at 1920
    pixels wide and 30 frames per second), showing a *Processing video…*
    progress bar.
2.  It extracts the video's audio to a WAV clip on a new audio track
    (*Processing audio…*). If the video has no audio, you get a silent
    WAV of the same length.
3.  It links the video to that audio clip, so the two stay in sync as
    you work.
4.  It opens the video window so you can see the footage right away.

From here you mix and edit against that extracted audio, with the
picture following the playhead.

> 📝 **Note:** Waveform keeps your original video file as the source it
> uses when rendering later. Don't delete or move the original after
> importing, or rendering won't have a picture to work from.

## The Video Window

The video window is a floating, resizable monitor that shows the single
frame sitting under the playhead. It opens automatically on import, and
you can show or hide it any time:

- From the **Video** menu, choose **Show video window**.
- Use the **Show or hide video window** command (assignable on the
  Keyboard Shortcuts page).
- Right-click a video-linked clip and choose **Show video window**.

The window starts at 720×405 and remembers its size and position between
sessions. It stays on top of the main window so it doesn't get buried,
and it auto-hides when you switch away from Waveform to another
application. Where there's no footage — before the video starts or in a
gap — the window simply shows black.

> 📝 **Note:** The video window is display-only. There are no play,
> offset, aspect-ratio, or volume controls in it — playback is driven
> entirely by Waveform's transport. Think of it as a passive reference
> monitor that mirrors wherever the playhead is.

### Timecode Overlay

From the **Video** menu, toggle **Show video timecode** to overlay the
current timecode on top of the picture. It uses the Edit's own timecode
format, which is handy when you're matching cues to a spotting sheet or
talking timings through with a director.

### Thumbnail Size on the Clip

The **Video** menu also has a **Video Thumbnail Size** submenu with
choices of *100%*, *75%*, *50%*, and *Disabled*. This controls the strip
of thumbnail frames drawn along the video clip in the timeline — not the
video window itself. Turn it down or off if the thumbnails are cluttering
your view or you want to lighten the display.

## Rendering Video (Pro)

If you have the Pro video features, two extra items appear in the
**Video** menu for getting a finished video back out:

- **Export: Render to a file…** — combine the video picture with a fresh
  mix of your audio into a new file.
- **Export: Render and replace audio track in video…** — keep an
  existing video's picture and swap in your new audio mix.

Both always write a **.mov** file.

### Render Video Options

Choosing **Render to a file…** opens the *Render Video* dialog. The
options are:

**Video format** (Choices: H.264, H.265) — the video codec for the
output. (Default: H.264)

**Output resolution** (Choices: Original, 4K, 2K, 1080P, 720P) — the
frame size of the rendered video. (Default: Original)

**Sample rate** (Choices: 44100, 48000) — the audio sample rate. (Default:
matches your Edit)

**Bit depth** (Choices: 16, 24) — the audio bit depth.

**Normalise** — scales the output so its loudest peak hits a target.
Turning it on reveals a **Peak level** field (−30 to 0 dB). (Default:
off)

**Adjust based on RMS** — scales the output to a target average
(perceived) level instead. Turning it on reveals an **RMS level** field
(−30 to 0 dB). Only the Peak or RMS field is shown at a time, depending
on which is active. (Default: off)

**Render marked region only** — renders just the region between the In-
and Out-markers. This option only appears when a marked region longer
than about 50 milliseconds exists, and when it appears it defaults to on.

> 📝 **Note:** Watch the *Render marked region only* option. Because it
> defaults to on whenever you have a marked region, it's easy to render
> only part of your video without realising. Turn it off if you want the
> whole Edit.

### Replace Audio in Video

**Render and replace audio track in video…** opens the same dialog with
the video-format and resolution options hidden — it reuses the existing
video's picture, so only the audio settings apply. Use this when you've
been handed a finished cut and just need to lay your new mix onto it.

## ⚡ Things to Watch Out For

- **Rendering needs an enabled video.** If nothing's enabled you'll see
  *This edit does not have any enabled videos to render*. On Free and OEM,
  remember only one video can be enabled at a time.
- **Output is always .mov.** Even when you pick H.265, the file is wrapped
  in a .mov container. H.265-in-MOV doesn't play everywhere, so test your
  delivery target if you choose it.
- **Don't move the original.** Rendering pulls the picture from your
  original video file, not the internal working copy, so keep it where it
  was when you imported.
- **Rendering requires a full or demo licence**, in addition to the Pro
  video features.

## Moving On

You now know how to bring footage into Waveform, score to it in the video
window, and (on Pro) render a finished video back out. For more on the
audio side — mixing the soundtrack and the render settings shared with
audio exports — see the Mixing Down chapter.
