# Reference: Settings > Control Surfaces

The Control Surfaces page is where you enable and configure external hardware controllers — the boxes full of motorised faders, knobs, buttons, and transport controls that let you drive Waveform with your hands instead of the mouse. You can use one of the many built-in presets for popular hardware, or roll your own custom surface over MIDI or OSC.

![](images/settings_control_surfaces.png)
*Settings > Control Surfaces*

## The Device List

The large list in the middle of the page shows every control surface Waveform knows about. Each row has three columns:

- The **device name** on the left (for example, *Mackie Control Universal*, *Ableton Push 2*, *Novation Launchpad*).
- The **input** column in the middle, showing which MIDI input Waveform is listening to for that device.
- The **output** column on the right, showing the MIDI output (back-channel) Waveform sends to for that device — used to drive motorised faders, LEDs, and displays.

If a device has no port assigned yet, the column reads *<No Device Selected>*. A device whose name appears dimmed is not currently enabled.

Click a row to select it. Its settings appear in the panel on the right, and from there you choose ports, set options, and switch the device on.

> 📝 **Note:** The list only shows entries for surfaces Waveform supports out of the box, plus any custom surfaces you create. If your exact hardware isn't listed, look for a generic mode it can emulate (many controllers offer a "Mackie Control" or "HUI" mode), or create a custom surface.

> 💡 **Tip:** If you plug in a controller while this page is open, Waveform refreshes the available MIDI ports automatically when you return to the page, so a newly connected device should show up in the port menus without a restart.

## Setting Up a Device

Select a device in the list, then use the settings panel on the right. The exact controls depend on what the device needs, but the common ones are:

**Input Device** (Choices: your available MIDI inputs) — the MIDI port Waveform listens to for messages from this controller. Pick the port your hardware is connected to.

**Output Device** (Choices: your available MIDI outputs) — the MIDI port Waveform sends back to the controller, used for motorised faders, button LEDs, and on-device displays. Only appears for devices that have a back-channel.

**Enable** — switches the device on or off. (Default: off). This control appears for devices that don't require a MIDI input channel to be chosen; for devices that do, simply selecting a valid **Input Device** brings them to life.

**Extenders** — the number of extender units (extra banks of faders) attached to your main surface. (Default: 0). Only shown for hardware that supports extenders.

**Main** — when you have more than one unit, this picks which one is the "main" surface. Only appears once you've added extenders.

**Colour Track Selection** — when on, Waveform highlights the track or plugin currently under the surface's control using a colour you choose. (Default: off). Handy when you have banks of faders and want to see at a glance which tracks they're driving.

**Colour Clip Slot Selection** — same idea for clip slots, on grid-style controllers that have pads. (Default: off). Only appears for surfaces with trigger pads.

**Colour** — the highlight colour used by the two options above. Click the swatch to pick one.

**Hide MIDI Input Device** — when on, the MIDI input used by this surface is hidden from the rest of Waveform, so its messages don't accidentally get recorded as notes or trigger other things. (Default: off). Only appears for surfaces that can consume all their input.

> 💡 **Tip:** Leave **Hide MIDI Input Device** on for dedicated control surfaces. You almost never want fader and button messages from a control surface bleeding into your MIDI recordings.

## OSC Devices

Some surfaces talk to Waveform over a network using OSC instead of MIDI. For those, the port settings are different:

**Host** — the network address Waveform sends outgoing OSC messages to (your controller or app).

**Port (outgoing)** — the port Waveform sends OSC messages on. (Range: 1025–65535).

**Port (incoming)** — the port Waveform listens on for OSC messages coming back. (Range: 1025–65535).

**Local IP address** — read-only. Shows the IP address(es) of this computer on your network, so you know what to point your OSC controller at.

For OSC devices, the input and output columns in the device list show these addresses and ports rather than MIDI port names. A small activity indicator next to the ports flickers as messages flow, which is useful for confirming the connection is live.

## Scripted Surfaces

Some surfaces are driven by a script rather than built directly into Waveform. When you select one of these, you'll see:

**Reveal script** — opens a file browser showing the script file that powers this surface, so you can inspect or edit it. (Available only for scripted surfaces.)

**Notes** — read-only text describing the surface, shown when the script author included notes.

## Custom Control Surfaces

If your hardware isn't covered by a preset, you can build your own. Click **Create New Custom Control Surface...** at the bottom of the page.

You'll be asked for:

- A **Name** for the surface.
- A **Protocol** (Choices: MIDI, OSC) — how the surface communicates. (Default: MIDI).

Once created, the new surface appears in the device list. Select it to configure it. In addition to the common settings above, a custom surface gives you:

**Channels** — how many channel strips (for example, faders) your hardware has. (Range: 0–32).

**Parameters** — how many plugin parameters the surface can adjust at once. (Range: 0–32).

**Edit Control Mappings...** — opens the mappings editor, where you teach Waveform which physical control does what. You can "learn" a control by moving it on your hardware, then assign it to a Waveform function.

**Import Settings...** — loads a saved custom surface configuration from a file. Useful for sharing setups or moving them between machines.

**Export Settings...** — saves your custom surface configuration to a file for backup or sharing.

**Follows selection** — when on, the surface always controls whichever track is currently selected. (Default: off).

**Pick up mode** — prevents values jumping when you touch a control. With this on, a knob or fader won't take effect until you move it past its current value — useful for controllers without motorised faders, where the physical position may not match the on-screen value. (Default: off).

**Delete** — removes this custom surface. Waveform asks you to confirm first. (Custom surfaces only — built-in presets can't be deleted.)

> 💡 **Tip:** Once you've dialled in a custom surface, use **Export Settings...** straight away. It's the easiest way to back up the mapping work, and it lets you share a ready-made profile with anyone using the same hardware.

## Mappings Editor

The **Edit Control Mappings...** button opens a dedicated window listing every mapping on a custom surface. To learn a control, click a row's "learn" side and wiggle the physical knob or fader — Waveform picks up the incoming message. The other half of each row lets you choose which Waveform function the control drives. Double-click a row to edit it manually, and press Delete to remove a mapping.

## ⚡ Things to Watch Out For

- **A device won't respond until it's switched on.** Choosing an **Input Device** is what activates most MIDI surfaces; for the rest, toggle **Enable**. A device greyed out in the list is not active.
- **Motorised faders and LEDs need the output port too.** If your faders don't move or your buttons don't light up, check that **Output Device** is set, not just **Input Device**.
- **Two devices can't share one input port cleanly.** Assigning the same MIDI input to more than one surface will lead to confusing behaviour. Give each surface its own port.
- **Custom surfaces can be deleted; presets can't.** The **Delete** option only appears for surfaces you created yourself. There's no harm in leaving unused presets in the list — they do nothing until you assign a port.
- **OSC needs matching ports on both ends.** The **Port (incoming)** here must match the port your OSC controller sends to, and your controller must send to the **Local IP address** shown. A mismatch means no messages get through.
