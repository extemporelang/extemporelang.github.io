---
title: Quickstart
---

- TOC
{:toc}

Welcome, Extempore traveller. If you don't have a favourite text editor or don't
usually [build things from
source](https://github.com/digego/extempore/blob/master/BUILDING.md) (or
don't know what those things even _mean_) then these instructions will get you
up & running asap.

{:.non-vscode-box}

This quickstart guide is based on VSCode. If you'd prefer to use another editor
(e.g. Emacs, Atom, ST, Vim) then that's fine as well---these boxes will explain
how your setup process will be different.

{:.note-box}

With everything on this page, if you run in to problems make sure you check the
[Troubleshooting](#troubleshooting) section at the end.

## Setup

Here's the stuff you only need to do once.

### Download & set up VSCode {#editor-setup}

**VSCode** (a.k.a. Visual Studio Code) is freely available on all the operating
systems that Extempore runs on (macOS, Windows & Linux). To install VSCode, go
to the [homepage](https://code.visualstudio.com/) and hit the big "Download"
button (you can't miss it).

Once you've installed VSCode, you need to install the [VSCode Extempore
extension](https://github.com/extemporelang/vscode-extempore)---this tells
VSCode how to deal with Extempore code. The main way to do things in VSCode is
through the "command palette", which you can open up with
<kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>P</kbd> (or through the menu `View >
Command Palette...`). Type in a few characters of the command _Extensions:
Install Extensions_ until it shows up, then hit <kbd>return</kbd>. Then, search
for "Extempore" and install the extension.

### Download Extempore

If you're on Windows or macOS then VSCode has an _Extempore: Download binary_
command which will download & set up Extempore for you (again, access it through
the command palette with <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>P</kbd>). It's
about a 300MB download, so it might take a while, but when it's done you're good
to go.

If you want to download the binary yourself it's also not tricky, just get the
latest version from the [GitHub releases
page](https://github.com/digego/extempore/releases), unzip it and put it
wherever you like (e.g. in your _Documents_ folder). It's also a good idea to
set the _Extempore: Sharedir_ VSCode config setting to point to the place where
you put your Extempore folder---this will allow VSCode to easily start Extempore
for you (as we'll see in the next step).

## Using Extempore {#using-extempore}

Here's the stuff you need to do every time you want to work with Extempore.

### Step 1: start Extempore {#step-1}

You can start Extempore using the _Extempore: Start_ command. It'll open up a
terminal (VSCode has a built-in terminal which you can bring up with <kbd
class="nopretty">CTRL</kbd>+<kbd>`</kbd>), `cd` into your extempore folder, and
start the Extempore running. If you see something like this, everything's
working---nice one.

{% include extempore-output/startup.html %}

If you can't (or don't want to) start Extempore using the _Extempore: Start_
VSCode command, then open a terminal in your Extempore directory and type
`./extempore` (or `.\extempore.exe` if you're on Windows---note the backslash
instead of the forward slash) and hit <kbd>return</kbd>. Extempore supports a
bunch of command line options---try `./extempore --help`/`.\extempore.exe
--help` to see the full list.

### Step 2: connect your text editor

Extempore is now just sitting waiting for you to tell it what code to execute.
Before you can do this, you first need to connect your text editor to the
running Extempore session. In VSCode, you do this with the _Extempore Connect_
command.

<pre style="color: #b2b2b2; background-color: #292b2e;">
<span style="background-color: #444155;">Starting </span><span style="color: #86D7DB; background-color: #444155;">primary</span><span style="background-color: #444155;"> process
Trying to connect to 'localhost' on port 7099
</span><span style="color: #F0C649; background-color: #444155;">New Client Connection
</span><span style="color: #ADCF44; background-color: #444155;">Successfully</span><span style="background-color: #444155;"> connected to remote process
Loading </span><span style="color: #63B4F6; background-color: #444155;">xtmbase</span><span style="color: #7E8A90; background-color: #444155;"> library... </span><span style="color: #ADCF44; background-color: #444155;">done</span><span style="color: #7E8A90; background-color: #444155;"> in 1.505913 seconds
</span><span style="color: #F0C649; background-color: #444155;">New Client Connection
</span></pre>

If everything's gone to plan, you'll see one more message at the very bottom of
the terminal:

<pre style="color: #f8f8f2; background-color: #282a36;">
<span style="color: #86D7DB;">INFO:</span> server: accepted new connection to primary process
</pre>

Congrats, you're connected... and almost there.

{:.non-vscode-box}

Remember, if you're not using VSCode, all the concepts are the same, but the
names of the commands or the keyboard shortcuts might be different---I'm sure
you'll manage 😉, and you can find the specific details for your editor in the
[editor support guide]({% link _docs/guides/editor-support.md
%}).

### Step 3: evaluate some code {#step-3}

To evaluate some code, move your cursor into a particular bit of code and hit
<kbd>ctrl</kbd>+<kbd>return</kbd>. The code should flash orange, and you should
see/hear the results (assuming that the code actually made some noise or printed
the result somewhere).

As a quick test, try and evaluate something like:

```extempore
(println "Hello, World!")
```

If you can see `"Hello, World!"` at the bottom of the terminal, then you've just
evaluated your first Extempore code! 🙌 🎉 🥳 🙌

{% include extempore-output/hello-world.html %}

Try modifying the code and re-evaluating it---the code is live, so you can
change and re-evaluate things without having to re-start Extempore.

<div class="note-box" markdown="1">

One "gotcha" if you're new to this sort of thing is the difference between the
_return value_ of a function and any _side effects_ that it triggers. In the
above example, the "Hello, World!" which you saw in the terminal is a side
effect (making a sound through the speakers would be a side effect as well). The
actual return value of the `println` function is the value "true" (which is
represented as `#t` in Extempore).

This is just a quickstart, so we won't go down the rabbit hole, but the rule of
thumb is that when you call a print function (e.g. `println`)

- the printed output will show up in the terminal
- the _return value_ of the function will be shown (temporarily) at the bottom
  of your VSCode window like so (notice the little white `#t` on the blue
  background---I've added an orange arrow to point it out).

![Extempore return value as shown in VSCode]({% link images/vscode-hello-world-echo-area.png %})

</div>

### Step 4: stopping Extempore

If you want to stop the Extempore process, just <kbd
class="nopretty">ctrl</kbd>+<kbd>c</kbd> in the terminal where `extempore` is
running to kill it. If you want to start it up again, then go back to [step
1](#step-1) (you'll have to re-connect VSCode to the new Extempore process again
as well).

## Simple examples

### "Hello, Sine!" {#hello-sine}

Since Extempore has multimedia programming as a core part of its DNA,
here's "Hello, Sine!"

~~~~ xtlang
(bind-func sine:DSP
  (lambda (in time chan dat)
    (* .1 (cos (* (convert time) .04)))))

;; tell Extempore to use `sine` as the audio output sink
(dsp:set! sine)
~~~~

If you want to turn it off, just re-define the `dsp` function to return
"silence":

~~~~ xtlang
(bind-func sine:DSP
  (lambda (in time chan dat)
    0.0))
~~~~

In the code above we've used `0.0`, but any constant value will work (because
physics).

### Hello scale {#hello-scale}

If you're more interested in playing "notes" than doing lower-level DSP stuff,
then there's an Extempore library which is designed to get you up and running
quickly with a couple of synths & samplers.

Here's a one-liner example (using Extempore's built-in [pattern
language]({% link _docs/guides/pattern-language.md %})) of how to

```xtlang
;; need to load this first, but only once
(sys:load "examples/sharedsystem/setup.xtm")

;; then, this will trigger an 8-note "ascending scale" loop starting at middle C
(:> ascending-scale 4 0 (play syn1 @1 80 dur) (scale 4 8))
```

Feel free to play around with (and re-evaluate) some of the parameters in that
`ascending-scale` and try and figure out how it all fits together, and when you
want to go further check out the [pattern language]({% link
_docs/guides/pattern-language.md %}) guide.

## Beyond "Hello..." {#beyond-hello}

These simple code examples gloss over some subtleties of what's going on. But
hey, if you've managed to get started quickly(ish), then this _Quickstart_ page
has done its job. To understand the subtleties, well, that's what the rest of
the documentation is for 😊

## Troubleshooting

> When you're chewing on life's gristle<br/>
> Don't grumble, give a whistle<br/>
> And this'll help things turn out for the best<br/>

### All platforms

#### No sound? Check your audio device

_Most_ of the time Extempore will guess the correct audio device, but not
always. So if you're not getting any sound, it could be because Extempore is
sending sound output to the wrong audio device.

To print the list of audio devices that Extempore can "see", open a terminal and
type the command `./extempore --print-devices` (or `./extempore.exe
--print-devices` if you're on Windows) and hit <kbd>return</kbd>. On my machine
right now it says this, but yours will (almost certainly) be different.

{% include extempore-output/print-devices.html %}

If you do want Extempore to use a particular audio device, you can pass either
the device index or the device name through an additional option. For example,
if you want Extempore to use the _MacBook Pro Speakers_, either of these would
work (again, remember to use `./extempore.exe` if you're on Windows):

```plaintext
./extempore --device 5
./extempore --device-name "MacBook Pro Speakers"
```

{:.note-box}

The order of your audio devices can change at any time, especially when you're
plugging and unplugging devices. So the device number (i.e. the `5` in the
example above) won't always correspond to the _MacBook Pro Speakers_. In a gig
situation it's always safer to use `--device-name` to be sure that you're using
the correct audio device.

### Windows

#### VCRUNTIME140_1.dll was not found

**Windows users**: if you ever see the error message _VCRUNTIME140_1.dll was not
found_, then you'll need to download the x64 `vc_redist.x64.exe`---make sure you
get it from the official [Windows
website](https://support.microsoft.com/en-au/help/2977003/the-latest-supported-visual-c-downloads),
because there are lots of sketchy places on the web which will try and get you
to download theirs, and who knows what they've done with it?

### macOS

#### File cannot be opened because developer cannot be verified

Since OSX 10.15 Catalina, Apple enforces stricter security rules which may
result in some files in the Extempore download not being allowed to run. When
you start `extempore`, depending on which libraries are being used, you may see
a warning dialog box rather like this:

!["dylib cannot be opened" popup]({% link images/quickstart/dylib-cannot-be-opened-popup.png %})

The named file in this example is
`extempore/libs/platform-shlibs/libportmidi.dylib`. Other files known to have
caused trouble include `libkiss_fft.dylib` and `libsndfile.dylib`.

Software loaded onto the newer versions of macOS which have _not_ come from App
Store and have not been properly "notarized" will [not run without some
user intervention](https://developer.apple.com/news/?id=12232019a).

There are two ways to solve this issue---a safer way and a less safe way. 

The **safer** way is to open the file in a text editor, and on the way you will
get the opportunity to override the security protection. Search for and navigate
to the file in question. When you find it, it's no good just double-clicking the
file because you will just get the same security block and the same options.
<kbd class="nopretty">ctrl</kbd>-click (or right-click) on the file in Finder,
choose "Open With" and choose "Other", as shown in this screenshot:

![Control-click context menu for opening the dylib file]({% link images/quickstart/open-with-context-menu.png %})

It doesn't matter which program you choose (e.g. TextEdit is fine), because you
don't actually want to edit it, just open it. After this, the warning will be
more explicit and you can choose "Open":

![Open dylib "are you sure" confirmation dialog]({% link images/quickstart/open-dylib-are-you-sure-dialog.png %})

Once you have opened it you have bypassed the macOS built-in protection so you
can close the file immediately and go back to using the file in Extempore.

{:.note-box}

There may be another way of doing this "safer" method: after attempting to run
`extempore`, look at the _Security & Privacy_ General section of _System
Preferences_ and you may find a note that the offending file has been blocked,
with an "Open Anyway" button provided.

The **less safe** way is to temporarily disable the System Integrity Protection
(SIP). This seems pretty drastic and there are [plenty of warnings from
Apple](https://developer.apple.com/documentation/security/disabling_and_enabling_system_integrity_protection).
The idea is to restart the computer in recovery mode and run the disabling code
in _Terminal.app_. Then, after running the blocked Extempore code, restart in
recovery and run another command in the terminal. You can check the current status of SIP on your computer by running the
following in Terminal:

```plaintext
csrutil status System Integrity Protection
```
