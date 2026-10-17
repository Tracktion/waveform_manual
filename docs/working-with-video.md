# Working With Video

Waveform can load a video file alongside your Edit so you can score to
picture: write music, edit dialogue, or design sound effects while
watching the footage play in sync with the timeline. This chapter covers
importing a video, working with the video window, and rendering your mix
back out to a finished video file (Waveform Pro or the Pro Video
Expansion).

## What You Can Do at Each Edition

Video support comes in two tiers. The basics (importing standard video,
the playback window, and the timecode overlay) are available in
every edition: Waveform Free, OEM and Pro. The rest needs Waveform Pro
or the Pro Video Expansion.

| Capability | Free / OEM | Pro / Pro Video Expansion |
|---|---|---|
| Import standard video, playback window, timecode | ✓ | ✓ |
| Use image files (.png / .jpg) as clips | ✗ | ✓ |
| Enabled video clips | One at a time | Any number |
| Video rendering (*Video > Export: Render to a file...* and *Video > Export: Render and replace audio track in video...*) | ✗ | ✓ |

> 📝 **Note:** On Free and OEM only one video clip can be enabled at a
> time. Enabling another one disables the rest.

## Importing a Video

There are three ways to bring a video into your Edit:

- Choose *Video > Load video file...*
- Choose *File > Load video file...*
- Drag a video file straight onto the Edit.

The file picker is titled **Select a file to import** and lets you select
more than one file at once.

The standard formats Waveform accepts are .mov, .avi, .webm, .wmv, .mp4,
.m4v, .mpg, .mp2, .mpeg, .mpe, .mpv and .mkv. Image files (.png, .jpg or
.jpeg) can be used as clips only in Waveform Pro or with the Pro Video
Expansion.

When you import, Waveform does a few things automatically:

1.  It transcodes the video to an internal working copy (capped at 1920
    pixels wide and 30 frames per second), showing a **Processing video...**
    progress bar.
2.  It extracts the video's audio to a WAV clip on a new audio track
    (**Processing audio...**). If the video has no audio, you get a silent
    WAV of the same length.
3.  It links the video to that Audio clip, so the two stay in sync as
    you work.
4.  It opens the video window so you can see the footage right away.

From here you mix and edit against that extracted audio, with the
picture following the cursor.

> 📝 **Note:** Waveform keeps your original video file as the source it
> uses when rendering later. Don't delete or move the original after
> importing, or rendering won't have a picture to work from.

## The Video Window

The video window is a floating, resizable monitor that shows the single
frame sitting under the cursor. It opens automatically on import, and
you can show or hide it any time:

- Choose *Video > Show video window*.
- Use the **Show or hide video window** command (assignable in
  *Settings > Keyboard Shortcuts*).
- Right-click a video-linked clip and choose **Show video window**.

The window starts at 720×405 and remembers its size and position between
sessions. It stays on top of the main window so it doesn't get buried,
and it auto-hides when you switch away from Waveform to another
application. Where there's no footage (before the video starts or in a
gap), the window shows black.

> 📝 **Note:** The video window is display-only. There are no play,
> offset, aspect-ratio, or volume controls in it. Playback is driven
> entirely by Waveform's transport. Think of it as a passive reference
> monitor that mirrors wherever the cursor is.

### Timecode Overlay

Toggle *Video > Show video timecode* to overlay the
current timecode on top of the picture. It uses the Edit's own timecode
format, which is handy when you're matching cues to a spotting sheet or
talking timings through with a director.

### Thumbnail Size on the Clip

The Video menu also has a *Video > Video Thumbnail Size* submenu with
choices of **100%**, **75%**, **50%** and **Disabled**. This controls the strip
of thumbnail frames drawn along the video clip in the timeline, not the
video window itself. Turn it down or off if the thumbnails are cluttering
your view or you want to lighten the display.

## Rendering Video <span class="pro">PRO</span> { #rendering-video-pro }

> 📝 **Edition:** Waveform Pro, or with the Pro Video Expansion.

With these video features, two extra items appear in the
Video menu for getting a finished video back out:

- *Video > Export: Render to a file...*: combine the video picture with a fresh
  mix of your audio into a new file.
- *Video > Export: Render and replace audio track in video...*: keep an
  existing video's picture and swap in your new audio mix.

Both always write a .mov file.

### Render Video Options

Choosing *Video > Export: Render to a file...* opens the **Render Video** dialog. The
options are:

**File**: the video file to write. Type a path, or use the button next
to it to browse.

**Format** (Choices: H.264, H.265): the video codec for the output.
(Default: H.264)

**Size** (Choices: Original, 4K, 2K, 1080P, 720P): the frame size of the
rendered video. (Default: Original)

**Sample Rate** (Choices: 44100, 48000): the audio sample rate. (Default:
matches your Edit)

**Sample Size** (Choices: 16, 24): the audio bit depth.

**Normalise**: scales the output so its loudest peak hits a target.
Turning it on reveals a **Peak Level** field (-30 to 0 dB). (Default:
off)

**Adjust Level Based on RMS**: scales the output to a target average
(perceived) level instead. Turning it on reveals an **RMS Level** field
(-30 to 0 dB). Only the Peak or RMS field is shown at a time, depending
on which is active. (Default: off)

**Only Render Marked Region**: renders just the region between the In
and Out markers. This option only appears when a marked region longer
than about 50 milliseconds exists, and when it appears it defaults to on,
so turn it off if you want the whole Edit.

### Replace Audio in Video <span class="pro">PRO</span> { #replace-audio-in-video }

> 📝 **Edition:** Waveform Pro, or with the Pro Video Expansion.

*Video > Export: Render and replace audio track in video...* opens the same dialog,
titled **Replace Audio in Video**, with the **Format** and **Size** options
hidden. Set **File** to the existing video whose audio you want to
replace. It reuses that video's picture, so only the audio settings apply. Use this when you've
been handed a finished cut and just need to lay your new mix onto it.

## ⚡ Things to Watch Out For

- **Rendering needs an enabled video.** If nothing's enabled you'll see
  "This edit does not have any enabled videos to render".
- **H.265 output doesn't play everywhere.** Even when you pick H.265, the
  file is wrapped in a .mov container. H.265-in-MOV doesn't play on every
  player, so test your delivery target if you choose it.

## Moving On

For mixing the soundtrack, see [Mixing Down](mixing-down.md). For
rendering audio files on their own, see
[Rendering and Stems](rendering-and-stems.md).
