# Reference: Settings > Chords

The Chords page lets you decide which chord types Waveform offers you when you're working with chords, and lets you build your own. Whatever you set here applies across the chord track, the pattern generator, and the MIDI editor.

![](images/settings_chords.png)
*Settings > Chords*

## Default Chords

This is the full list of chord types that ship with Waveform — major and minor triads, sevenths, suspended chords, ninths, and so on. Each row shows whether the chord is enabled, its name (like **Major Triad** or **Dominant Seventh**), and its symbol (like M, m, or 7).

Every chord is **Enabled** by default. The idea here is to switch off the chords you never reach for, so the chord menus elsewhere in Waveform stay short and focused on the harmony you actually use.

To toggle a chord, click the **Enabled** / **Disabled** indicator at the left of its row. Enabled chords show a green tick and the word "Enabled"; disabled ones show a red cross and the word "Disabled". A disabled chord stays in this list — it's just hidden from the chord track, pattern generator, and MIDI editor until you switch it back on.

> 💡 **Tip:** There's no harm in disabling a long list of chords. Nothing in an existing project breaks, and you can re-enable any of them at any time.

## Custom Chords

Beneath the built-in list is the **Custom Chords** table, where any chords you've created yourself appear. It has three columns: **Name**, **Symbol**, and **Pitches** (the notes that make up the chord). When you first open this page it's usually empty.

Use **Add...** to create a new custom chord. You'll be offered a fresh blank chord, or you can base a new one on an existing chord — either one of the built-in types or another custom chord you've already made — which is handy when you only want to tweak a note or two.

> 📝 **Note:** As the on-screen hint says, you can also create custom chords by selecting notes in the MIDI editor. That's often the easiest route, since you can hear and play the voicing before saving it.

To get rid of a custom chord, select its row and click **Remove...**. The **Remove...** button only becomes available once you've selected a chord in the table.

You can also double-click a custom chord's row to reopen it for editing.

## ⚡ Things to Watch Out For

> ⚠️ **Warning:** Removing a custom chord is permanent — there's no undo for it. Waveform asks you to confirm before deleting, so read the prompt before clicking Delete.

Disabling a built-in chord doesn't remove it; it only hides it from the chord-picking tools. If a chord seems to have vanished from the chord track or MIDI editor, check here first to see whether it's been switched off.
