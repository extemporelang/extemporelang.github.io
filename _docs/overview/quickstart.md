---
title: Quickstart
---

{:.note-box}
I get it, you're impatient. Here's the bare minimum required to get from zero
to running Extempore code 😊

## Setup

Here's the stuff you only need to do once.

### Download or build Extempore

The quickest way to get started is to download a [binary
release](https://github.com/digego/extempore/releases), unzip it and run
`extempore.exe` from inside the `extempore` folder.

If you're more of a build-from-source type, then [that's pretty easy as
well]({{site.baseurl}}{% link _docs/guides/install.md %}).

### Set up a text editor {#editor-setup}

To write Extempore code you need a text editor, and there are Extempore
"plugins" for [several text editors]({{site.baseurl}}{% link
_docs/guides/editor-support.md %})---VSCode, Emacs, Sublime Text and Vim. If you
don't have a favourite text editor, then [**VSCode**]({% link
_docs/guides/editor-support.md %}#vscode) **is probably a good choice**---it's
free, available on all platforms and doesn't have as steep a learning curve as
some other editors.

To install VSCode, go to the [Visual Studio Code
homepage](https://code.visualstudio.com/) and hit the big green "Download"
button. Once you've got it up and running, you need to install the [VSCode
Extempore extension](https://github.com/extemporelang/vscode-extempore)---this
tells VSCode how to deal with Extempore code. Install it through the Extensions
view (`View > Extensions`) and search for "Extempore".

For the rest of this quickstart guide we'll occasionally give specific tips
(e.g. keyboard shortcuts) for VSCode users. If you're using one of the [other
editors with Extempore support]({{site.baseurl}}{% link
_docs/guides/editor-support.md %}) the concepts are the same, but e.g. the names
of the commands or the keyboard shortcuts might be different---I'm sure you'll
manage 😉, and you can find the specific details for your editor in the [editor
support guide]({{site.baseurl}}{% link _docs/guides/editor-support.md %}).

## Using Extempore {#using-extempore}

Here's the stuff you need to do every time you want to work with Extempore.

### Step 0: check your audio devices {#step-0}

{:.note-box}

This step is optional---most of the time Extempore will guess the correct audio
device anyway---so unless you're having trouble with your audio you can probably
skip straight to [step 1](#step-1).

Open a terminal (conveniently, VSCode has a built-in terminal which you can
bring up with `ctrl`+`` ` ``) and `cd` into your extempore folder. If you open
the Extmpore folder in VSCode (`File > Open` or `cmd`+`O`/`ctrl`+`O`) then when
you open the terminal it'll already be in the correct directory.

To print the list of audio devices that Extempore can "see", type the command
`extempore --print-devices` (or `extempore.exe --print-devices` if you're on
Windows) and hit `enter`. On my machine right now it says this, but yours will
(almost certainly) be different.

<pre style="color: #b2b2b2; background-color: #292b2e;">
<span style="color: #7E8A90; background-color: #444155;">-----Available Audio Devices-----------------------------
</span><span style="background-color: #444155;">audio device[0]:DisplayPort api[0]:Core Audio inchan[0] outchan[2]
audio device[1]:HD Webcam C615 api[0]:Core Audio inchan[1] outchan[0]
audio device[2]:MacBook Pro Microphone api[0]:Core Audio inchan[1] outchan[0]
audio device[3]:MacBook Pro Speakers api[0]:Core Audio inchan[0] outchan[2]
</span><span style="color: #7E8A90; background-color: #444155;">----------------------------------------------------------

</span><span style="background-color: #444155;">
Process extempore finished
</span></pre>

If you do want Extempore to use a particular audio device, you can pass either
the device index or the device name through an additional option. For example,
if you want Extempore to use the _MacBook Pro Speakers_, either of these would
work (again, remember to use `extempore.exe` if you're on Windows):

```
extempore --device 3
extempore --device-name "MacBook Pro Speakers"
```

### Step 1: start Extempore {#step-1}

If you didn't do it already in the [previous step](#step-0), open a terminal
(conveniently, VSCode has a built-in terminal which you can bring up with
`ctrl`+`` ` ``) and `cd` into your extempore folder. If you open the Extmpore
folder in VSCode (`File > Open` or `cmd`+`O`/`ctrl`+`O`) then when you open the
terminal it'll already be in the correct directory.

To start Extempore, type the command `extempore` (or `extempore.exe` if you're
on Windows) and hit `enter`. If you see something like this, everything's
working---nice one.

<pre style="color: #b2b2b2; background-color: #292b2e;">
<span style="color: #7E8A90; background-color: #444155;">------------- Extempore --------------
</span><span style="background-color: #444155;">Andrew Sorensen (c) 2010-2019
andrew@moso.com.au, @digego

</span><span style="color: #7E8A90; background-color: #444155;">ARCH           : </span><span style="color: #86D7DB; background-color: #444155;">x86_64-apple-darwin18.7.0
</span><span style="color: #7E8A90; background-color: #444155;">CPU            : </span><span style="color: #86D7DB; background-color: #444155;">broadwell
</span><span style="color: #7E8A90; background-color: #444155;">ATTRS          : </span><span style="color: #EC6261; background-color: #444155;">-sse4a</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #EC6261; background-color: #444155;">-avx512bw</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+cx16</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #EC6261; background-color: #444155;">-tbm</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+xsave</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #EC6261; background-color: #444155;">-fma4</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #EC6261; background-color: #444155;">-avx512vl</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+prfchw</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+bmi2</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+adx</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+xsavec</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+fsgsbase</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+avx</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #EC6261; background-color: #444155;">-avx512cd</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #EC6261; background-color: #444155;">-avx512pf</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+rtm</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+popcnt</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+fma</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+bmi</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+aes</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+rdrnd</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+xsaves</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+sse4.1</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+sse4.2</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+avx2</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #EC6261; background-color: #444155;">-avx512er</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+sse</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+lzcnt</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+pclmul</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #EC6261; background-color: #444155;">-avx512f</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+f16c</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+ssse3</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+mmx</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #EC6261; background-color: #444155;">-pku</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+cmov</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #EC6261; background-color: #444155;">-xop</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+rdseed</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+movbe</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+hle</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+xsaveopt</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #EC6261; background-color: #444155;">-sha</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+sse2</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #86D7DB; background-color: #444155;">+sse3</span><span style="color: #7E8A90; background-color: #444155;">,</span><span style="color: #EC6261; background-color: #444155;">-avx512dq
</span><span style="color: #7E8A90; background-color: #444155;">LLVM           : </span><span style="color: #86D7DB; background-color: #444155;">3.8.0 MCJIT
</span><span style="color: #7E8A90; background-color: #444155;">Output Device  : </span><span style="color: #86D7DB; background-color: #444155;">MacBook Pro Speakers
</span><span style="color: #7E8A90; background-color: #444155;">Input Device   : </span><span style="color: #86D7DB; background-color: #444155;">
</span><span style="color: #7E8A90; background-color: #444155;">SampleRate     : </span><span style="color: #86D7DB; background-color: #444155;">44100
</span><span style="color: #7E8A90; background-color: #444155;">Channels Out   : </span><span style="color: #86D7DB; background-color: #444155;">2
</span><span style="color: #7E8A90; background-color: #444155;">Channels In    : </span><span style="color: #86D7DB; background-color: #444155;">0
</span><span style="color: #7E8A90; background-color: #444155;">Frames         : </span><span style="color: #86D7DB; background-color: #444155;">1024
</span><span style="color: #7E8A90; background-color: #444155;">Latency        : </span><span style="color: #86D7DB; background-color: #444155;">0.0316327 sec

Primary on Thread 0
</span><span style="color: #7E8A90; background-color: #444155;">---------------------------------------
</span><span style="background-color: #444155;">
Starting </span><span style="color: #86D7DB; background-color: #444155;">utility</span><span style="background-color: #444155;"> process
Trying to connect to 'localhost' on port 7098
</span><span style="color: #F0C649; background-color: #444155;">New Client Connection
</span><span style="color: #ADCF44; background-color: #444155;">Successfully</span><span style="background-color: #444155;"> connected to remote process

Starting </span><span style="color: #86D7DB; background-color: #444155;">primary</span><span style="background-color: #444155;"> process
Trying to connect to 'localhost' on port 7099
</span><span style="color: #F0C649; background-color: #444155;">New Client Connection
</span><span style="color: #ADCF44; background-color: #444155;">Successfully</span><span style="background-color: #444155;"> connected to remote process
Loading </span><span style="color: #63B4F6; background-color: #444155;">xtmbase</span><span style="color: #7E8A90; background-color: #444155;"> library... </span><span style="color: #ADCF44; background-color: #444155;">done</span><span style="color: #7E8A90; background-color: #444155;"> in 1.505913 seconds
</span></pre>

### Step 2: connect your text editor

Extempore is now just sitting waiting for you to tell it what code to execute.
Before you can do this, you first need to connect your text editor to the
running Extempore session.

In VSCode, you do this with the _Extempore Connect_ command. The main way to do
things in VSCode is through the "command palette", which you can open up with
`ctrl`+`shift`+`P`, or `cmd`+`shift`+`P` if you're on macOS (or through the menu
`View > Command Palette...`). Type in a few characters of "Extempore Connect"
until it shows up, then hit `enter`. You'll be asked to specify a hostname &
port---the defaults are probably ok, so you can just hit `enter` two more times.

<pre style="color: #b2b2b2; background-color: #292b2e;">
<span style="background-color: #444155;">Starting </span><span style="color: #86D7DB; background-color: #444155;">primary</span><span style="background-color: #444155;"> process
Trying to connect to 'localhost' on port 7099
</span><span style="color: #F0C649; background-color: #444155;">New Client Connection
</span><span style="color: #ADCF44; background-color: #444155;">Successfully</span><span style="background-color: #444155;"> connected to remote process
Loading </span><span style="color: #63B4F6; background-color: #444155;">xtmbase</span><span style="color: #7E8A90; background-color: #444155;"> library... </span><span style="color: #ADCF44; background-color: #444155;">done</span><span style="color: #7E8A90; background-color: #444155;"> in 1.505913 seconds
</span><span style="color: #F0C649; background-color: #444155;">New Client Connection
</span></pre>

If everything's gone to plan, you'll see one more "New Client Connection"
message at the very bottom of the terminal (as shown). Congrats, you're connected... and
almost there.

### Step 3: evaluate some code {#step-3}

To evaluate some code, move your cursor into a particular bit of code and hit
`ctrl`+`enter` (again, `cmd`+`enter` on macOS). The code should flash orange,
and you should see/hear the results (assuming that the code actually made some
noise or printed the result somewhere).

As a quick test, try and evaluate something like:

```extempore
(println "Hello, World!")
```

If you can see `"Hello, World!"` at the bottom of the terminal, then you've just
evaluated your first Extempore code! 🙌 🎉 🥳 🙌

<pre style="color: #b2b2b2; background-color: #292b2e;">
<span style="background-color: #444155;">Starting </span><span style="color: #86D7DB; background-color: #444155;">primary</span><span style="background-color: #444155;"> process
Trying to connect to 'localhost' on port 7099
</span><span style="color: #F0C649; background-color: #444155;">New Client Connection
</span><span style="color: #ADCF44; background-color: #444155;">Successfully</span><span style="background-color: #444155;"> connected to remote process
Loading </span><span style="color: #63B4F6; background-color: #444155;">xtmbase</span><span style="color: #7E8A90; background-color: #444155;"> library... </span><span style="color: #ADCF44; background-color: #444155;">done</span><span style="color: #7E8A90; background-color: #444155;"> in 1.505913 seconds
</span><span style="color: #F0C649; background-color: #444155;">New Client Connection
</span><span style="color: #86dc2f; background-color: #444155; font-weight: bold; text-decoration: underline;">"</span><span style="color: #7E8A90; background-color: #444155;">Hello, World!</span><span style="color: #86dc2f; background-color: #444155; font-weight: bold; text-decoration: underline;">"</span><span style="color: #7E8A90; background-color: #444155;">
</span></pre>

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

![Extempore return value as shown in VSCode]({{site.baseurl}}{% link images/vscode-hello-world-echo-area.png %})

</div>

### Step 4: stopping Extempore

If you want to stop the Extempore process, just `ctrl`+`c` in the terminal where
`extempore` is running to kill it. If you want to start it up again, then go
back to [step 1](#step-1) (you'll have to re-connect VSCode to the new Extempore
process again as well).

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
language]({{site.baseurl}}{% link _docs/guides/pattern-language.md %})) of how to

```xtlang
;; need to load this first, but only once
(sys:load "examples/sharedsystem/setup.xtm")

;; then, this will trigger an 8-note "ascending scale" loop starting at middle C
(:> ascending-scale 4 0 (play syn1 @1 80 dur) (scale 4 8))
```

Feel free to play around with (and re-evaluate) some of the parameters in that
`ascending-scale` and try and figure out how it all fits together, and when you
want to go further check out the [pattern language]({{site.baseurl}}{% link
_docs/guides/pattern-language.md %}) guide.

## Beyond "Hello..." {#beyond-hello}

These simple code examples gloss over some subtleties of what's going on. But
hey, if you've managed to get started quickly(ish), then this _Quickstart_ page
has done its job. To understand the subtleties, well, that's what the rest of
the documentation is for 😊
