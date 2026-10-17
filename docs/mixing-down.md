# Mixing Down

Mixing down is the last step: turning your Edit into a finished audio file. This
chapter covers getting the mix ready to be rendered and finding the file once
it's written. The Render dialog itself (formats, stems, loudness targets, file
naming and the render queue) is covered in [Rendering and Stems](rendering-and-stems.md).

## Master Processing

Before you mix down, you might want to add some Master effects, so that
the entire stereo mix is processed. Master plugins often include a
compressor and a limiter to give the final mix a professional sound.

We won't get into the details about exactly what you'd apply there,
although the Waveform Master Mix plugin (Waveform Pro and OEM) is a nice
choice. It's a multi-band compressor, EQ, and limiter all in one. In Waveform
Free, the [Compressor and Limiter](built-in-effects-plugins.md#dynamics-compressor-gate-and-limiter)
plugins do a similar job.

![](images/36----01.png)

*Waveform Master Mix*

Make sure that the master metering is not going into the
red before you export the mix. Exactly how you process the mix depends
on what you plan to do with the file after it's mixed down.

![](images/36----02.png)

*The Waveform master*

If you're having professional mastering done, then you probably don't
want to put any plugins on there. However, if you are immediately going
to upload to your website or SoundCloud, you will want to put some
mastering effects on to make your mix into a finished product.

> 💡 **Tip:** If you're aiming at a streaming platform, you don't need a loudness
> plugin on the master to hit their target, because the Render dialog can normalise to
> a LUFS target with a true-peak ceiling as it writes the file. See
> [Rendering and Stems](rendering-and-stems.md).

## Setting the Export Region

The Render dialog can write the whole Edit, or just the marked region. If you
want control over exactly where the file starts and ends, set the region before
you open it:

1. Set the In marker exactly at the beginning of the song. Adjust its position
   to skip any extra bars or count-in at the start of the Edit.
2. Set the Out marker right after the end of the song. Leave a second or two
   after the final fade so nothing is clipped short, or rely on **Include
   Tails** in the Render dialog to let the last notes ring out.

Then choose **Marked Region** as the **Range** in the Render dialog. See
[Using Markers](using-markers.md) for more on placing markers.

## Rendering Your Mix

Choose *File > Export: Render to a file...* to open the Render dialog. It starts
in Simple mode, which shows just the settings a straightforward mixdown needs.
For a stereo mixdown, set **Render** to **Whole Mix**, pick your format, check the
folder and name, and click **Render**.

That's the short version. [Rendering and Stems](rendering-and-stems.md) covers the rest: MP3
and the other formats, rendering stems for each track or submix, tagging the
files with title and artist, normalising to a loudness target, naming batches
with patterns, saving presets, and rendering from the command line. Stems by
submix and presets need the dialog's **Advanced mode** <span class="pro">PRO</span>,
which is in Waveform Pro only (see
[Simple and Advanced Modes](rendering-and-stems.md#simple-and-advanced-modes)).

## Locating the Exported File

Unless you change it, the file is written to your project's *Exported* folder.
You can find it either on the Projects tab or from the Browser.

### Locating the Export on the Projects Tab

Click the Projects tab and look at the **Exported Audio/MIDI** list at
the right. Your rendered file will be there, named after the Edit unless you
gave it a name of your own.

![](images/36----06.png)

*The Exported File on the Project Page Files List*

To locate the file in Finder or File Explorer on your computer, select
the exported file and look at properties. In the properties, click the **...**
button to the right of **File** and choose **Open the folder containing
this file**. That opens the folder on your system, giving you direct
access to the file.

### Locating the Export in the Browser

Open the Browser and go to the **Files** tab. Click the folder icon and
select **Project folder**.

![](images/36----07.png)

*Locate the Project folder from the Browser*

Double-click the folder named *Exported* and you will see your file. To
locate it in Finder or File Explorer, right-click and choose **Open the
folder containing this file**.

![](images/36----08.png)

*Exported Folder in the Browser*

> 💡 **Tip:** You don't have to come here at all: each finished render in the
> queue has a button that reveals the file on your computer directly.

## Moving On

For everything the Render dialog can do beyond a simple stereo mixdown, see
[Rendering and Stems](rendering-and-stems.md). Have fun, and make a lot of music.
