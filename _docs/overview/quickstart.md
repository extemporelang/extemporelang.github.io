---
title: Quickstart
---

I get it, you're impatient---here's the bare minimum required to get from zero
to running Extempore code.

## Setup

Here's the stuff you only need to do once.

### Download or build Extempore

The quickest way to get started is to download a [binary
release](https://github.com/digego/extempore/releases), unzip it and run
`extempore.exe` from inside the `extempore` folder.

If you're more of a build-from-source type, then [that's pretty easy as
well]({{site.baseurl}}/docs/overview/install/#build-from-source).

### Set up your text editor {#editor-setup}

To write Extempore code you need a text editor, and there are Extempore
"plugins" for [several text editors]({{site.baseurl}}{% link
_docs/overview/editor-support.md %})---VSCode, Emacs, Sublime Text and Vim.

If you don't have a favourite text editor, then [VSCode]({{site.baseurl}}{% link
_docs/overview/install.md %}#vscode) probably a good choice---it's free,
available on all platforms and doesn't have as steep a learning curve as some
other editors.

For this reason for the rest of this quickstart guide we'll occasionally give
specific tips (e.g. keyboard shortcuts) for VSCode users. If you're using one of
the [other editors with Extempore support]({{site.baseurl}}{% link
_docs/overview/editor-support.md %}) the concepts are the same, but e.g. the
keyboard shortcuts might be different---I'm sure you'll manage 😉

## Using Extempore

Here's the stuff you need to do every time you want to work with Extempore.

### Step 1: start Extempore

Open a terminal (conveniently, VSCode has a built-in terminal which you can
bring up with `ctrl`+`` ` `` and `cd` into your extempore folder (wherever
you've put it).

If you open the Extmpore folder in VSCode (`File > Open` or
`cmd`+`O`/`ctrl`+`O`) then when you bring up the terminal it'll already be in
the correct directory.

Then, type the command `extempore` (or `extempore.exe` if you're on Windows) and
hit `enter`. If you see something like this, everything's working---nice one.

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

In VSCode, you do this with the _Extempore Connect_ command; open up the command
palette (with `ctrl`+`shift`+`P`, or `cmd`+`shift`+`P` if you're on macOS) and
type in a few characters of "Extempore Connect" until it shows up, then hit
`enter`. You'll be asked to specify a hostname & port, the defaults are probably
ok, so you can just hit `enter` two more times.

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

### Step 3: Evaluate code...

To evaluate some code, move your cursor into a particular bit of code and hit
`ctrl`+`enter` (again, `cmd`+`enter` on macOS). The code should flash orange,
and you should see/hear the results (assuming that the code actually made some
noise or printed the result somewhere).

As a quick test, try and evaluate something like:

```extempore
(println "Hello, World!")
```

If you can see `"Hello, World!"` at the bottom of the terminal, then you've just
evaluated your first Extempore code! 🙌🎉🥳 🙌

<pre style="color: #b2b2b2; background-color: #292b2e;">
<span style="background-color: #444155;">Starting </span><span style="color: #86D7DB; background-color: #444155;">primary</span><span style="background-color: #444155;"> process
Trying to connect to 'localhost' on port 7099
</span><span style="color: #F0C649; background-color: #444155;">New Client Connection
</span><span style="color: #ADCF44; background-color: #444155;">Successfully</span><span style="background-color: #444155;"> connected to remote process
Loading </span><span style="color: #63B4F6; background-color: #444155;">xtmbase</span><span style="color: #7E8A90; background-color: #444155;"> library... </span><span style="color: #ADCF44; background-color: #444155;">done</span><span style="color: #7E8A90; background-color: #444155;"> in 1.505913 seconds
</span><span style="color: #F0C649; background-color: #444155;">New Client Connection
</span><span style="color: #86dc2f; background-color: #444155; font-weight: bold; text-decoration: underline;">"</span><span style="color: #7E8A90; background-color: #444155;">Hello, World!</span><span style="color: #86dc2f; background-color: #444155; font-weight: bold; text-decoration: underline;">"</span><span style="color: #7E8A90; background-color: #444155;">
</span></pre>

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

In the snipped above we've used `0.0`, but any constant value will work (because
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
(:> scale 4 0 (play syn1 @1 80 dur) (scale 4 8))
```

Feel free to play around with (and re-evaluate) some of the parameters in that
`asc-scale` and try and figure out how it all fits together, and when you want
to go further check out the [pattern language]({{site.baseurl}}{% link
_docs/guides/pattern-language.md %}) guide.

## Beyond "Hello..." {#beyond-hello}

These simple snippets gloss over some subtleties of what's going on. But hey, if
you've started quickly(ish), then this page has done its job. To understand the
subtleties, read the rest of the documentation :)
