---
title: Pattern language
hidden: true
---

Note: To run these examples you **must** be running an up-to-date version of
Extempore (`0.8.1` or newer). Binary builds are available but not currently
hosted on GitHub releases---if you'd like one then get in touch with
[Ben](mailto:ben.swift@anu.edu.au).

## Table of contents

{:toc}
- TOC

## Introduction

The Extempore pattern language is a
[DSL](https://en.wikipedia.org/wiki/Domain-specific_language) for specifying
repeating patterns and musical transformations (beats & loops).

The pattern language is not actually tied to music-making; it's really just a
convenient scaffold for writing code which will (repeatedly) be executed with
specific timings and arguments. However, making music is a pretty significant
motivator for the whole thing, so there are lots of helper functions geared
towards doing just that.

Before you start making music with the pattern language, there are a couple of
things you need to do.

### Connecting your editor

TODO add links to other relevant docs

This guide assumes that you've got Extempore up and running (either from a
binary or built it yourself) and you've set up and connected your text editor to
an Extempore process. If not, follow those links until you're looking at
something like this---the details will be different, but the third (and final)
_New Client Connection_ is the sign that your text editor is connected and ready
to send code to Extempore.

<style type="text/css">
.custom {
/* (:foreground "#63B4F6") */
color: #63B4F6;
}
.custom-1 {
/* (:foreground "#ADCF44") */
color: #ADCF44;
}
.custom-2 {
/* (:foreground "#F0C649") */
color: #F0C649;
}
.custom-3 {
/* (:foreground "#EC6261") */
color: #EC6261;
}
.custom-4 {
/* (:foreground "#7E8A90") */
color: #7E8A90;
}
.custom-5 {
/* (:foreground "#86D7DB") */
color: #86D7DB;
}

a {
color: inherit;
background-color: inherit;
font: inherit;
text-decoration: inherit;
}
a:hover {
text-decoration: underline;
}
</style>
<pre>
<span class="custom-4">------------- Extempore --------------
</span>Andrew Sorensen (c) 2010-2019
andrew@moso.com.au, @digego

<span class="custom-4">ARCH           : </span><span class="custom-5">x86_64-apple-darwin18.7.0
</span><span class="custom-4">CPU            : </span><span class="custom-5">broadwell
</span><span class="custom-4">ATTRS          : </span>
</span><span class="custom-4">LLVM           : </span><span class="custom-5">3.8.0 MCJIT
</span><span class="custom-4">Output Device  : </span><span class="custom-5">MacBook Pro Speakers
</span><span class="custom-4">Input Device   : </span><span class="custom-5">
</span><span class="custom-4">SampleRate     : </span><span class="custom-5">44100
</span><span class="custom-4">Channels Out   : </span><span class="custom-5">2
</span><span class="custom-4">Channels In    : </span><span class="custom-5">0
</span><span class="custom-4">Frames         : </span><span class="custom-5">1024
</span><span class="custom-4">Latency        : </span><span class="custom-5">0.0316327 sec

Primary on Thread 0
</span><span class="custom-4">---------------------------------------
</span>
Starting <span class="custom-5">utility</span> process
Trying to connect to 'localhost' on port 7098
<span class="custom-2">New Client Connection
</span><span class="custom-1">Successfully</span> connected to remote process

Starting <span class="custom-5">primary</span> process
Trying to connect to 'localhost' on port 7099
<span class="custom-2">New Client Connection
</span><span class="custom-1">Successfully</span> connected to remote process
Loading <span class="custom">xtmbase</span><span class="custom-4"> library... </span><span class="custom-1">done</span><span class="custom-4"> in 1.578728 seconds
</span><span class="custom-2">New Client Connection
</span></pre>

### Setting up an audio signal chain

Extempore's audio signal chain is highly flexible, so you can set up your
noisemaking infrastructure in a way which suits you. However, if you're new to
all this and just want to load up a few synths and samplers, then the best way
to do this is to load the Extmpore sharedsystem. There's a separate guide on
this, but for now you can load it by copy-pasting the following `sys:load`
expression into your editor and evaluating it:

```extempore
(sys:load "examples/sharedsystem/setup.xtm")
```

Depending on your machine it might take a little while, but hang tight---you'll
get there in the end. When you see something like this:

<pre>
<span class="custom-5"><span class="region"><span class="region">SetValue:  </span></span></span><span class="custom-6"><span class="region"><span class="region">syn1</span></span></span><span class="custom-5"><span class="region"><span class="region"> &gt;&gt;&gt; </span></span></span><span class="custom-4"><span class="region"><span class="region">[float,float,i64,i64,float*]*</span></span></span><span class="custom-5"><span class="region"><span class="region">
</span></span></span><span class="region"><span class="region">New instrument bound as </span></span><span class="custom-6"><span class="region"><span class="region">syn1 </span></span></span><span class="region"><span class="region">in both scheme and xtlang
</span></span><span class="custom-5"><span class="region"><span class="region">SetValue:  </span></span></span><span class="custom-6"><span class="region"><span class="region">syn2</span></span></span><span class="custom-5"><span class="region"><span class="region"> &gt;&gt;&gt; </span></span></span><span class="custom-4"><span class="region"><span class="region">[float,float,i64,i64,float*]*</span></span></span><span class="custom-5"><span class="region"><span class="region">
</span></span></span><span class="region"><span class="region">New instrument bound as </span></span><span class="custom-6"><span class="region"><span class="region">syn2 </span></span></span><span class="region"><span class="region">in both scheme and xtlang
</span></span><span class="custom-5"><span class="region"><span class="region">SetValue:  </span></span></span><span class="custom-6"><span class="region"><span class="region">syn3</span></span></span><span class="custom-5"><span class="region"><span class="region"> &gt;&gt;&gt; </span></span></span><span class="custom-4"><span class="region"><span class="region">[float,float,i64,i64,float*]*</span></span></span><span class="custom-5"><span class="region"><span class="region">
</span></span></span><span class="region"><span class="region">New instrument bound as </span></span><span class="custom-6"><span class="region"><span class="region">syn3 </span></span></span><span class="region"><span class="region">in both scheme and xtlang
</span></span><span class="custom-5"><span class="region"><span class="region">SetValue:  </span></span></span><span class="custom-6"><span class="region"><span class="region">kit</span></span></span><span class="custom-5"><span class="region"><span class="region"> &gt;&gt;&gt; </span></span></span><span class="custom-4"><span class="region"><span class="region">[float,float,i64,i64,float*]*</span></span></span><span class="custom-5"><span class="region"><span class="region">
</span></span></span><span class="region"><span class="region">New instrument bound as </span></span><span class="custom-6"><span class="region"><span class="region">kit </span></span></span><span class="region"><span class="region">in both scheme and xtlang
</span></span><span class="custom-5"><span class="region"><span class="region">SetValue:  </span></span></span><span class="custom-6"><span class="region"><span class="region">samp1</span></span></span><span class="custom-5"><span class="region"><span class="region"> &gt;&gt;&gt; </span></span></span><span class="custom-4"><span class="region"><span class="region">[float,float,i64,i64,float*]*</span></span></span><span class="custom-5"><span class="region"><span class="region">
</span></span></span><span class="region"><span class="region">New instrument bound as </span></span><span class="custom-6"><span class="region"><span class="region">samp1 </span></span></span><span class="region"><span class="region">in both scheme and xtlang
</span></span><span class="custom-5"><span class="region"><span class="region">"load samples"
</span></span></span><span class="custom-3"><span class="region"><span class="region">Loaded 29 files into bank#: 0</span></span></span><span class="custom-5"><span class="region"><span class="region">
"loaded samples"
Compiled:  </span></span></span><span class="custom-6"><span class="region"><span class="region">dsp1</span></span></span><span class="custom-5"><span class="region"><span class="region"> &gt;&gt;&gt; </span></span></span><span class="custom-4"><span class="region"><span class="region">[float,float,i64,i64,float*]*</span></span></span><span class="custom-5"><span class="region"><span class="region">
Compiled:  </span></span></span><span class="custom-6"><span class="region"><span class="region">dsp2</span></span></span><span class="custom-5"><span class="region"><span class="region"> &gt;&gt;&gt; </span></span></span><span class="custom-4"><span class="region"><span class="region">[float,float,i64,i64,float*]*</span></span></span><span class="custom-5"><span class="region"><span class="region">
Compiled:  </span></span></span><span class="custom-6"><span class="region"><span class="region">dsp3</span></span></span><span class="custom-5"><span class="region"><span class="region"> &gt;&gt;&gt; </span></span></span><span class="custom-4"><span class="region"><span class="region">[float,float,i64,i64,float*]*</span></span></span><span class="custom-5"><span class="region"><span class="region">
Compiled:  </span></span></span><span class="custom-6"><span class="region"><span class="region">dsp4</span></span></span><span class="custom-5"><span class="region"><span class="region"> &gt;&gt;&gt; </span></span></span><span class="custom-4"><span class="region"><span class="region">[float,float,i64,i64,float*]*</span></span></span><span class="custom-5"><span class="region"><span class="region">
Compiled:  </span></span></span><span class="custom-6"><span class="region"><span class="region">dsp5</span></span></span><span class="custom-5"><span class="region"><span class="region"> &gt;&gt;&gt; </span></span></span><span class="custom-4"><span class="region"><span class="region">[float,float,i64,i64,float*]*</span></span></span><span class="custom-5"><span class="region"><span class="region">
Compiled:  </span></span></span><span class="custom-6"><span class="region"><span class="region">dspmt</span></span></span><span class="custom-5"><span class="region"><span class="region"> &gt;&gt;&gt; </span></span></span><span class="custom-4"><span class="region"><span class="region">[float,float*,i64,i64,float*]*</span></span></span><span class="custom-5"><span class="region"><span class="region">
IR:(3.1 seconds) Partitions(size:4096 num:33)
IR:(3.1 seconds) Partitions(size:4096 num:33)
zerolatency: #f
Starting RT Audio process with SIG CNT: 0
Starting RT Audio process with SIG CNT: 0
Starting RT Audio process with SIG CNT: 0
Starting RT Audio process with SIG CNT: 0
Starting RT Audio process with SIG CNT: 0
Compiled:  </span></span></span><span class="custom-6"><span class="region"><span class="region">active_notes</span></span></span><span class="custom-5"><span class="region"><span class="region"> &gt;&gt;&gt; </span></span></span><span class="custom-4"><span class="region"><span class="region">[i32,i8*]*</span></span></span><span class="custom-5"><span class="region"><span class="region">
Compiled:  </span></span></span><span class="custom-6"><span class="region"><span class="region">dsp_load</span></span></span><span class="custom-5"><span class="region"><span class="region"> &gt;&gt;&gt; </span></span></span><span class="custom-4"><span class="region"><span class="region">[void]*</span></span></span><span class="custom-5"><span class="region"><span class="region">
Compiled:  </span></span></span><span class="custom-6"><span class="region"><span class="region">main_reverb</span></span></span><span class="custom-5"><span class="region"><span class="region"> &gt;&gt;&gt; </span></span></span><span class="custom-4"><span class="region"><span class="region">[void,i64,float]*</span></span></span><span class="custom-5"><span class="region"><span class="region">
Compiled:  </span></span></span><span class="custom-6"><span class="region"><span class="region">main_gain</span></span></span><span class="custom-5"><span class="region"><span class="region"> &gt;&gt;&gt; </span></span></span><span class="custom-4"><span class="region"><span class="region">[float,float]*</span></span></span><span class="custom-5"><span class="region"><span class="region">
</span></span></span><span class="custom-2"><span class="region"><span class="region">pattern </span></span></span><span class="custom-1"><span class="region"><span class="region">starting  </span></span></span><span class="custom-5"><span class="region"><span class="region">DSP_LOAD
</span></span></span><span class="custom-6"><span class="region"><span class="region">sharedsystem audio setup complete
</span></span></span><span class="custom-5"><span class="region"><span class="region">Compiled:  </span></span></span><span class="custom-6"><span class="region"><span class="region">get_analogue_synth_cc_name</span></span></span><span class="custom-5"><span class="region"><span class="region"> &gt;&gt;&gt; </span></span></span><span class="custom-4"><span class="region"><span class="region">[i8*,i32]*</span></span></span><span class="custom-5"><span class="region"><span class="region">
Compiled:  </span></span></span><span class="custom-6"><span class="region"><span class="region">midi_cc</span></span></span><span class="custom-5"><span class="region"><span class="region"> &gt;&gt;&gt; </span></span></span><span class="custom-4"><span class="region"><span class="region">[void,i32,i32,i32,i32]*</span></span></span><span class="custom-5"><span class="region"><span class="region">
</span></span></span><span class="custom"><span class="region"><span class="region">shared system successfully loaded
</span></span></span></pre>

then you're ready to go. You've just loaded

- three analogue synths (`syn1`, `syn2` and `syn3`)
- a synth drum kit (`kit`)
- a piano sampler (`samp1`)

Don't worry about how to use them just yet, you'll see how in a minute.

**Note**: if you _don't_ load the sharedsystem, then make sure you at least
load:

```
(sys:load "libs/core/looper.xtm")
```

because that's the actual file where the important functions and macros
associated with the pattern language live.

## Pattern basics

A pattern looks like this:

```extempore
(:> pat-1 2 0 (play syn1 @1 80 dur) `(60 58 60 63))
```

The parts of this pattern are:

- the `:>` macro, which tells Extempore that the rest of this expression is a
  pattern

- the name of the pattern (in this case `pat-1` but any valid scheme variable
  name is ok)

- the total length (in beats) of the pattern (in this case `2`)

- the offset (again in beats) of the pattern (in this case `0`)

- the "pattern expression" (in this case `(play syn1 @1 80 dur)`) which is the
  expression which is evaluated at each "triggering" of the pattern

- one (or more) "pattern lists" (in this case `\`(60 58 60 63)`); these are
  lists of values which the pattern will loop through

If you eval the above pattern in Extempore, you'll hear a repeated[^repeated]
synth line. You can modify & re-evaluate[^re eval] it and hear it change---try
changing one of the numbers in the pattern list and see what happens.

[^repeated]:
	"Repeated" is an understatement---it's really gonna drive you crazy if you
	leave it running. Sorry about that.

[^re-eval]:
    Remember, any change won't take effect until you re-evaluate the expression.
    But it gets boring if we remind you _every time_, so if they change you're
    trying to make isn't working remember to check that you've evaluated it.

For now you don't have to understand exactly what every part of the pattern
expression `(play syn1 @1 80 dur)` means (in short, the arguments represent
_instrument_, _pitch_, _velocity_ and _duration_; there are [other
guides](#TODO) which explain it in much detail). The main thing to know is that
each time the pattern expression is triggered the `@1` will be replaced by
successive values from the pattern list. First `60`, then `58`, then `60`, then
`63`, then back to the beginning---in fact it will keep cycling through that
list forever.

Soon, you'll wonder how you stop the pattern. The answer is that you change the
`:>` macro into a `:|`. As long as the name is the same as the one you gave it
when you _started_ the pattern (e.g. `pat-1`) you can leave the rest of the
expression the same, so when you evaluate this:

```extempore
(:| pat-1 2 0 (play syn1 @1 80 dur) `(60 58 60 63))
```

you'll hear blessed silence 😉 This small `:>` -> `:|` change means that it's
easy to stop a pattern and re-start it again; just change back to `:>` and
re-eval the code.

### How does timing work?

Try re-starting the loop (note the `:>`) and changing the values in the list at
the end, e.g.

```extempore
(:> pat-1 2 0 (play syn1 @1 80 dur) `(60 58 60 63 60 61))
```

Notice that the duration of the individual notes gets shorter, so that the
overall loop takes the same length of time. Previously, the loop length was 2
beats and there were 4 values in the list, so each note was 2 divided by 4 = 1/2
a beat long (i.e. a quaver). Now there are four numbers in the list, so that's 6
notes over 2 beats. The list goes through a full "loop" in the same amount of
time, so each note must be shorter.

To achieve the opposite---notes are the same length as before, but the total
length of the loop is longer---we need to update the total length argument (the
one after the pattern name) as well:

```extempore
(:> pat-1 3 0 (play syn1 @1 80 dur) `(60 58 60 63 60 61))
```

Here are two different patterns with different loop durations. They're both
still playing their notes on the same instrument (`syn1`) but the list of pitch
values are different.

```extempore
(:> pat-1 2 0 (play syn1 @1 80 dur) `(60 58 60 63 60 61))
(:> pat-2 4 0 (play syn1 @1 80 dur) `(67 67 67 48 63 65))
```

When there are more than one pattern playing simultaneously we can see the
effect of modifying the offset parameter. Compare

```extempore
(:> pat-1 2 0 (play syn1 @1 80 dur) `(60 58 60 63 60 61))
(:> pat-2 4 0 (play syn1 @1 80 dur) `(67 67 67 48 63 65))
```

with (hint: the only change is to `pat-2`)

```extempore
(:> pat-1 2 0 (play syn1 @1 80 dur) `(60 58 60 63 60 61))
(:> pat-2 4 1 (play syn1 @1 80 dur) `(67 67 67 48 63 65))
```

There are a couple of special symbols in the which are helpful in understanding
how the timing works (i.e. when the pattern expression is actually called to
play the note).

If an element of the list is the underscore symbol (`_`) then the pattern will
"skip" that execution (in musical terms, it's a _rest_). Try replacing one (or
more) of the numeric values in the pattern list, e.g.

```extempore
(:> pat-2 4 1 (play syn1 @1 80 dur) `(67 67 67 _ 63 65))
```

If an element of the list is the pipe/vertical bar symbol (`|`) then the pattern
will also "skip" that execution, but the duration of that slot in the pattern
list will be added to the _previous_ value (in musical terms, it's a _tie_). Try
replacing one (or more) of the numeric values in the pattern list, e.g.

```extempore
(:> pat-2 4 1 (play syn1 @1 80 dur) `(67 67 67 | 63 65))
```

these can even "stack", just like musical ties

```extempore
(:> pat-2 4 1 (play syn1 @1 80 dur) `(67 67 67 | | 65))
```

### Multiple pattern lists

Sometimes you want to have more than one value in your pattern expression vary
over time, and the `:>` pattern macro allows _multiple_ pattern lists for this
purpose. Let's go back to the original example:

```extempore
(:| pat-1 2 0 (play syn1 @1 80 dur) `(60 58 60 63))
```

If we want to add accents

### 
### What can I put in

loop length always based on the length of first list
- if other list is shorter, they'll be recycled (but still reset to the
beginning once the first loop completes)
- if other list is longer, the "extra" ones won't be used

### TODOs

provide some presets for the synth to get folks started.

## Gotchas

## Pattern cookbook

There's heaps more you can do, and to go through it all in the level of detail
in the previous section might be a bit boring. Instead, here's a cookbook of
"recipes" for achieving some of the things you might like to do.

## Playing & tweaking the analogue synth

TODO: provide some half-decent-sounding (but not _too_ complicated) loops for
folks to loop through (e.g. a cover) while they tweak the synth params.

## Open questions

{:.info-box}

If you've stumbled across this section on the website, then welcome---but these
are just some notes for me (Ben) as I write these docs. So you probably don't
need to have answers to these questions.

- how do we write it; "shared system", sharedsystem, SharedSystem, something
else? do we want a different name altogether? likewise for the extempore
pattern language

- is there a way to specify not rests, but "ties" (option: use the '| character)

- cb as cowbell vs cb as callback? also, do we actually observe the sample
indices for even the dlogue (cbl?) - flesh out the drum kit & associated example

- have a look at the piano preset (simple wavetable) and the keys preset (more
complex wavetable)

- o2, ableton link (can we implement?) MIDI-sync *is* implemented?

- to get the most out of the filters, you want a cold signal (oscillators under
0.5)
