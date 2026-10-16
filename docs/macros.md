# Macros

Waveform includes not only programmable shortcuts, but also a full macro
programming environment. You can develop keyboard shortcuts that combine
actions in new ways to streamline your workflow. If the standard
keyboard shortcuts don't meet your needs, you can create custom macros
and assign keyboard shortcuts to them.

While you might think of macros as keyboard macros, you don't have to
assign them to keyboard shortcuts. You can always launch them from the
main menu's **Actions** submenu. This approach can be useful
because you don't have to remember the shortcut to macros you only use
occasionally.

## Macro Editor

To open the Macro Editor, go to the Settings tab, and select the
Keyboard Shortcuts page. Click **Show Macro Editor** at the bottom right
of the Keyboard Shortcuts page. The Macro Editor will open.


![](images/37----01.png)

*The Macro Editor*

You can resize the height of the Macro Editor by dragging the line that
separates it from the keyboard shortcuts list. The Macro Editor is a
basic text editor that you use to enter and edit macro scripts.

**Call on key up and down**: Normally a macro runs once, when its key is
pressed. Turn this on to run it on both the key press and the key
release; the script can check `Tracktion.isKeyDown` to tell the two
apart. (Default: off)

> 💡 **Tip:** With the Macro Editor open, try clicking on some of the
existing keyboard shortcuts. The Macro Editor will show you the
underlying code, you can use this to get familiar with the syntax of the
actions triggered by each shortcut.

## Creating a Macro

To create a new macro, click *Add a new macro* on the Macro Editor.
This adds a new macro named "Untitled Macro" to the bottom of the
keyboard shortcuts list under the Macros section.


![](images/37----02.png)

*Adding a New Macro*

As soon as the new macro is created, the name defaults to *Untitled
Macro* and is selected. Start typing to give it a suitable name.

In the body of the macro, you can type in a list of actions to create
the script. The easiest way is to build your macros using the
right-click menu; more on that in a bit! Actions are separated by
semicolons.

To show a macro in the Actions panel whenever you select a particular
type of item, see [The Actions Panel > Adding Macros](actions-panel.md#adding-macros).

## Deleting a Macro

While you can't delete the built-in keyboard shortcuts, you can delete
any custom macros you create. To do so, select the macro to delete in
the keyboard shortcuts list, and click **Delete** in the Macro
Editor.

## Programming a Macro

The simplest macro is made up of a single action. You can pick any
available action by right-clicking the Macro Editor and navigating
through the three collections of actions listed under its **Actions**
heading. When you find an action you
want to use, select it and the appropriate code will be inserted into
the script.


![](images/37----03.png)

*Selecting Actions from the Macro Editor Right-click Menu*

-   *Keyboard shortcuts* includes all the built-in keyboard
    shortcuts shown on the Keyboard Shortcuts page.
-   *Basic actions* includes available actions that are not
    necessarily available as pre-assigned shortcuts.
-   *Advanced actions* includes actions that allow you
    manipulate selected objects and even display messages on the screen.
    Advanced actions are provided as tools for more advanced script
    programming.

Below these, the **User macros** and **Custom** submenus let you insert
your own macros and the items from your Custom Menu.

## Running a Macro

There are several ways to run a macro:

1.  Assign it to a keyboard shortcut. Keyboard shortcuts are assigned to
    macros in the very same way as the built-in shortcuts. Find the
    macro in the list and click the "+" to the far right and enter the
    desired key combination.
2.  Choose **Actions > User macros** from the Edit tab's main menu. All
    your custom macros appear there automatically. Select the
    one you want to run.


![](images/37----09.png)

*Running macros from Actions > User macros*

1.  Add macros to the Custom Menu. At the bottom of the Keyboard
    Shortcuts page, click **Show Custom Menu** to open the Custom Menu
    Editor. Then drag your macros (or any built-in actions) into it.
    Arrange it using drag and drop, add groups, and rename groups.
    Access the Custom Menu from the Edit tab's main menu:
    **Actions > Custom**.


![](images/37----10.png)

*The Custom Menu Editor*

## Javascript Programming

Beyond creating simple step-by-step lists of actions, you can write macros
in Javascript. The Macro
Editor allows you to program loops and conditions using Javascript
syntax. It even provides color coding for the elements of the script.


![](images/37----04.png)

*Javascript Macro Example*

> 📝 **Note:** Waveform actions are exposed as methods using 'dot' notation.
By that, we mean that they start with the word Tracktion, then a dot,
then the method. Following the method you can provide one or more
parameter in parenthesis.


![](images/37----05@2x.png)

*Macro Actions 'dot' Notation Syntax*

### The wf and render Objects

Alongside `Tracktion`, every macro can use the `wf` object, a newer API
that works with handles to tracks, clips and plugins. It is the
preferred API for track, clip and plugin work, and handles from either
object can be passed to the other. This macro renames the selected
tracks:

```js
var tracks = wf.getSelectedTracks();

for (var i = 0; i < tracks.length; ++i)
    wf.setName (tracks[i], 'Drums ' + (i + 1));
```

A `render` object is also available for rendering from a script.

Click **Show API** in the Macro Editor to open the full reference for
all three objects in your web browser.

## Hover Tooltip

If you hover over an action in the Macro Editor for a second or two,
you will see a tooltip bubble explaining what parameters the action
takes. If the action returns values, you will see the syntax of that.
These tooltips give you key information when programming macros.
Waveform's developers use this to give you meaningful clues about how
each of the actions work.


![](images/37----08.png)

*Hover Over an Action for a Tooltip*

In the above example, the tooltip shows that the zoom action takes
two double precision numeric parameters. The first is the x-proportion
(the amount of horizontal zoom), and the second is the y-proportion (the
amount of vertical zoom, the track height).

## RTZ Macro Example

By default Waveform doesn't have a true return-to-zero (RTZ) keyboard
shortcut. The built-in command stops first if it encounters the In-mark
so you need, to hit it twice to really get back to zero. However, you
can create a macro that performs does the action twice, always returning
the cursor to the start of the Edit.


![](images/37----06.png)

*True Return-to-Zero Macro Example*

For example, you couldassign the RTZ macro to the Home key.

## Merge Clips Macro Example

Another feature that you may use often is merging clips. Normally you
use this by selecting a few clips on a track that you want to combine to
a single clip. Then you click **Render Clip** in the Actions panel and
choose *Merge the selected clips*. If you do this frequently, assign a
key to the built-in *Merge selected clips* command on the Keyboard
Shortcuts page, or call `Tracktion.mergeSelectedClips();` as one step of
a longer macro. Pick a free key: Cmd + G / Ctrl + G is already used by
*Group clips*.


![](images/37----07.png)

*Merge Clips Macro Assigned*

## Importing and Exporting Macros

Macros are actually just simple text. You can easily copy and paste the
text directly in and out of the Macro Editor. In addition, Waveform has
dedicated buttons to import and export macro scripts as XML files with a
`.tracktionscript` extension. You can also drag script files straight
onto the Keyboard Shortcuts page to import them.


![](images/37----11.png)

*Script Input and Export Buttons*

## Example Scripts

Waveform's engineers have supplied code samples of several macro scripts
to get you started:


```js
// Rename Clips From Track
var tracks = Tracktion.getSelectedEditElements ('track');

for (var i = 0; i < tracks.length; ++i)
{
   var track = tracks[i];
   var trackName = Tracktion.getName (track);
   var clips = Tracktion.getClipsFromTracks (track);

   for (var c = 0; c < clips.length; ++c)
   {
      var clipName = trackName + " " + (c + 1);
      Tracktion.setName (clips[c], clipName);
   }
}
```



```js
// Reset Tracks Solo/Mute
var tracks = Tracktion.getEditElements ('track');
Tracktion.setSolo (tracks, false);
Tracktion.setSoloIsolate (tracks, false);
Tracktion.setMute (tracks, false);
```


```js
//Next Active Automation Parameter
var track = Tracktion.getTrackFromSelectedObject();
Tracktion.changeActiveAutomationParameter (track, 1);
```



```js
// Insert Plugin with Preset
var track = Tracktion.getTrackFromSelectedObject();
var plugin = Tracktion.insertPlugin (track, "Massive", 0, "AudioUnit");
var preset = Tracktion.getPresetFromLibrary ("Massive All Souls");
Tracktion.setPluginPreset (plugin, preset);
```


```js
// Jump to tab 2
var index = Tracktion.getWindowTabIndex();
var delta = 2 - index;
Tracktion.changeWindowTabIndex (delta);
```


```js
// Rename Selected Tracks
var tracks = Tracktion.getSelectedEditElements ('track');
Tracktion.setName (tracks[0], 'Kick');
Tracktion.setName (tracks[1], 'Snare');
Tracktion.setName (tracks[2], 'Hats');
// etc.
```


```js
// Save Selected Plugins as Preset
var plugins = Tracktion.getSelectedEditElements ('plugin');
Tracktion.saveObjectsAsPreset (plugins);
```

## My Code Samples


```js
/* Park the In-Marker & Out-Markers
Parks the In-marker and Out-marker at Zero then Restores Cursor Position. I wrote this macro to help a KVR forum member find a quick way to hide the In-marker and Out-marker.
*/
var SavePosition = Tracktion.getPosition ('cursor');
Tracktion.moveTransportToStart();
Tracktion.moveTransportToStart();
Tracktion.markIn();
Tracktion.markOut();
Tracktion.setPosition ('cursor', SavePosition);
```


```js
 /* Search Plugins
 Opens the Browser to the Search tab, enables the Plugin searching while disabling searching for Presets and Loops.
 */
 Tracktion.showSidePanel ('search'); // Opens Browser to the Search tab
 Tracktion.enableSearchLibrary ('plugin', true);
 Tracktion.enableSearchLibrary ('preset', false);
 Tracktion.enableSearchLibrary ('loop', false);
 Tracktion.setSearchPanelText ('');  // loads blank text so you can start typing the search term right away
```


```js
// Rename selected clips to 'Drums'
var clips = Tracktion.getSelectedEditElements ('clip');
for (var i = 0; i < clips.length; ++i)
    Tracktion.setName (clips[i], 'Drums');
```


```js
// Rename selected tracks to 'Drums'
var tracks = Tracktion.getSelectedEditElements ('track');
for (var i = 0; i < tracks.length; ++i)
    Tracktion.setName (tracks[i], 'Drums');
```

## Moving On

These are fairly simple examples. Waveform users are only just starting
to explore what macro programming in Waveform can do.






