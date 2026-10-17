# MIDI Setup

We're going to move on to MIDI recording and editing in this and the
next few chapters. The first step is to set up a MIDI keyboard so that
you can play notes into Waveform. If you don't have a MIDI keyboard, you
can enter notes manually into the MIDI editor, or you can use the
computer keyboard as a virtual MIDI device.

The setup is quite simple. We are using a USB external keyboard
controller, but the setup works much the same for other types of
controllers.

## MIDI Drivers

Before you dive in here, you might need drivers for your controller.
Check the manufacturer's website for drivers for the controller model
and your operating system. With Waveform closed, download and install
the drivers. Once you've done that, the rest is easy.

## Set Up the MIDI Inputs

Go to *Settings > MIDI Devices*. You will see a list of all
available MIDI inputs and outputs that are connected to your system. In
this example I have four of them. To enable the MIDI inputs and outputs,
click to toggle between **Enabled** and **Disabled** next to each entry.

![](images/22----01.png)

*Click to Enable/Disable MIDI Inputs and Outputs*

> 💡 **Tip:** If you don't see your devices listed, make sure the controller
is connected and has power. If that checks out, then make sure the
latest drivers are installed. At any time you can click **Scan for new
MIDI devices now** to initiate a scan for connected MIDI devices.

## Naming MIDI Inputs/Outputs

From *Settings > MIDI Devices*, click on a MIDI input or
output in the MIDI devices list, then edit **Device Alias** in the panel
on the right to give it a friendly name. Matching it to the name of the connected controller keeps
things easy to recognise.

> 💡 **Tip:** You can also edit **Device Alias** from the Edit tab, by
selecting the input and changing it in the Actions panel. Each device has
only one alias, so a change made in either place applies everywhere.

## Disabling Unused MIDI Inputs

Your audio interface might also include MIDI in and out hardware
connections. Those allow connecting legacy controllers that don't
support USB. If you don't plan to use the hardware MIDI in and out
connections, you can leave them disabled. In this example we have
disabled.

![](images/22----02.png)

*Disable Unused MIDI I/O*

This hides those from the selection list when setting up a track.

## Configuring the Track

Back in your Edit, choose a blank track or create a new one.

1.  Click on an input and select the MIDI input that matches the
    controller you just configured.

![](images/22----03.png)

*Select the MIDI Input Device*

2.  Play some notes on your keyboard. You will see the meter registering
    the MIDI activity on that track.

![](images/22----04.png)

*Input Meter Activity*

3.  With the input selected, set **Input Monitoring Mode** to On (or
    Auto) in the Actions panel. You can also right-click the input and
    use the **Live Input Monitoring** submenu.

![](images/22----05.png)

*Enable MIDI Input Monitoring*

With this done, MIDI events come into the track from your keyboard and
the pass through to the virtual instrument that we're going to setup
next.

## Insert a Synth Plugin

To hear what you play, you will need to insert a virtual instrument. Use
the Search tab of the Browser to locate a synth plugin. In this example we
are using 4OSC, found under *Waveform > Instruments*.

![](images/22----06.png)

*Search for a Synth Plugin*

1.  Insert your synth plugin ahead of the Volume & Pan plugin. By
    ahead, we mean ahead in the signal path. So in this example, we have
    dropped 4OSC to the left of Volume & Pan.

![](images/22----07.png)

*4OSC installed in the mixer*

2.  Play some notes on your keyboard and at this point you should hear
    synth notes.

> 📝 **Note:** There is no difference between a MIDI track and an audio track
in Waveform. To configure a MIDI track, just set a MIDI input and insert
a virtual instrument plugin as a sound generating source. Then, as you
record your performance, you'll create a MIDI clip instead of an audio
clip like we did in the previous examples.

## Using a Virtual Keyboard

If you don't have a physical MIDI keyboard, you can still play notes. To
play from your computer's keyboard, use the MIDI Typing window described
in the next section. To play with the mouse, use the on-screen
**Virtual Keyboard**.

Select a MIDI input on a track and click **Virtual Keyboard** in its
Actions panel. A small piano keyboard pops out. Click its keys to send
notes into that input, as if they came from the device itself.

> 💡 **Tip:** Click the lock icon at the top of the Actions panel to keep it
> showing the input while you click elsewhere in the Edit, and click it
> again to unlock. The command is **Lock/Unlock Actions panel** (Opt + F11 /
> Alt + F11). The lock is on the dedicated Actions panel, not the Browser's
> **Actions** tab.

![](images/22----11.png)

*Lock the Actions panel while you play*

A virtual MIDI input is something different: it duplicates input from
your other MIDI devices, so one track input can receive from several of
them.

1.  Go to *Settings > MIDI Devices*.
2.  Click **Create New Virtual MIDI Input...**

![](images/22----08.png)

*Create New Virtual MIDI Input*

3.  Enter a name into the **Virtual MIDI device** dialog box and click
    **Create**.

![](images/22----09.png)

*Name the Virtual MIDI Device*

4.  Back in your Edit, choose the new device as a track's input. Use
    **Select MIDI Inputs** in its Actions panel to choose which devices
    it receives from.

![](images/22----10.png)

*Select the Virtual Device as the Input*

## The MIDI Typing Window

The **MIDI Typing** window lets you play notes from your computer
keyboard: a small floating window with on-screen octave and velocity
controls. It's handy when you want to audition or
record an idea and don't have a controller plugged in.

Show it with the command **Show or hide the MIDI Typing window**, or
from the View menu's **Show MIDI Typing** item (which appears only when
the **Use computer keyboard for MIDI input** setting is on; see
[Reference: Settings > MIDI Devices](reference-settings.md#midi-devices)).

![](images/midi-typing_1@2x.png)

*The MIDI Typing window*

Typing is armed by **Caps Lock** (or by giving the window focus). Once
armed, the keys `a w s e d f t g y h u j...` play a piano layout. The
window also has:

- **Octave**: Press **Z** or **X** to shift down or up. (Range 0-9, Default: 5)
- **Velocity**: Press **C** or **V** to lower or raise it in steps of 5. (Range
  0-127, Default: 98)

A gear icon opens a list where you can remap the keys to your liking.

> 📝 **Note:** Notes from the MIDI Typing window always play on MIDI
> channel 1. There's no channel selector.

## Managing Hardware Patch Names

If you play external hardware synths, Waveform can show their patches by
name instead of by raw program number. The **MIDI program names** dialog
manages these named patch lists.

There's no menu command or shortcut. You reach it from a MIDI output
device. Go to *Settings > MIDI Devices*, click a MIDI **output** device,
and in the panel on the right pick a set from **Program Names**. The
rows below it manage the sets: **Add** creates a named set from a
preset, **Edit** opens the dialog to modify the selected set, and
**Delete** removes it. **Edit** and **Delete** only appear for sets you can
change.

![](images/program-manager_1@2x.png)

*The MIDI program names dialog*

Inside the dialog:

- **Bank name**: A combo box for the 16 banks, with a **Rename**
  button.
- **Program name list**: 128 editable rows; press **Tab** to advance to
  the next one.
- **MSB / LSB**: The bank-select bytes for the current bank. (MSB
  0-128, LSB 0-256)
- **Options** menu: Use zero based numbering, Set current bank to
  general MIDI names, Reset current bank, Clear current bank, **Export
  all banks...** (to a `.trkmidi` file), and **Import all banks...** (from `.trkmidi` or
  `.midnam`).

Click **Done** to save. These patch lists are shared across all your
Edits.

## Synchronisation

If you run Waveform alongside external timecode-aware gear - a hardware
recorder, a video deck, or another DAW - you can lock the two together so
they play in step. The **Sync** menu collects the project-wide settings
for this: a timecode offset, MIDI Timecode (MTC) input, and MIDI Machine
Control (MMC). A typical scenario is chasing an external MTC master so
Waveform follows when that device starts, stops, and locates.

You'll find these under the Edit tab's main menu. Click the main menu
button and choose **Sync**.

There's no default keyboard shortcut for the Sync menu or its items -
assign one in *Settings > Keyboard Shortcuts* if you use them often.

![](images/sync_menu_1@2x.png)

*The Sync menu on the Edit tab*

### Setting a Timecode Offset

1.  Open *Sync > Change timecode offset...*.
2.  In the **Change MIDI timecode offset** dialog, type the offset using
    the timecode field.
3.  Click **OK**. Incoming and outgoing timecode is now shifted by that
    amount, which is handy when your external source starts a few frames
    away from where you want Waveform's transport to land.

### Chasing External MTC

1.  Enable the MIDI input that carries timecode (*Settings > MIDI
    Devices*), as described in [Set Up the MIDI Inputs](#set-up-the-midi-inputs).
2.  Open *Sync > MIDI timecode input device* and pick that device. Set
    it to **&lt;None&gt;** to stop chasing.
3.  If the master sends an hour value you don't want to follow, turn on
    **Ignore hours from incoming timecode**.

### Menu Reference

- **Change timecode offset...**: opens the **Change MIDI timecode offset**
  dialog. (Default: 0)
- **Ignore hours from incoming timecode**: a toggle; when on, the hours
  field of incoming MTC is ignored. (Default: off)
- **MIDI timecode input device**: the MIDI input Waveform chases for
  MTC, or **&lt;None&gt;**.
- **Respond to MIDI machine control from device**: the MIDI input
  whose MMC transport commands (play/stop/locate) Waveform obeys, or
  **&lt;None&gt;**.
- **Send MIDI machine control to device**: the MIDI output to which
  Waveform sends MMC transport commands, or **&lt;None&gt;**.

> 📝 **Note:** The MTC input and MMC device lists only show inputs and
> outputs you've already enabled. If a device is missing, enable it on
> the *Settings > MIDI Devices* page first.

> 💡 **Tip:** This menu is for making Waveform *follow* external timecode.
> To make Waveform the *master* instead, turn on **Send MIDI Timecode**
> on the MIDI output that's wired to your gear (see
> [Reference: Settings > MIDI Devices](reference-settings.md#midi-devices)).

## Moving On

In the next chapter, [MIDI Recording](midi-recording.md), you'll learn how to record a MIDI performance onto
the track!
