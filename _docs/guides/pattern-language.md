---
title: The Extempore pattern language
hidden: true
---

{:.warn-box}
To run these examples you **must** be running an up-to-date version of Extempore
(`0.8.1` or newer). Binary builds are available but not currently hosted on
GitHub releases---if you'd like one then get in touch with
[Ben](mailto:ben.swift@anu.edu.au).

The Extempore pattern language is a
[DSL](https://en.wikipedia.org/wiki/Domain-specific_language) for specifying
repeating patterns and musical transformations (beats & loops).

{:.info-box}

The pattern language is not actually tied to music-making; it's really just a
convenient scaffold for writing code which will (repeatedly) be executed with
specific timings and arguments. However, making music is a pretty significant
motivator for the whole thing, so there are lots of helper functions geared
towards doing just that.

## Before you start

### Connecting your exitor

TODO add links to other docs

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

## Making loops with the pattern language


loop length always based on the length of first list
- if other list is shorter, they'll be recycled (but still reset to the
beginning once the first loop completes)
- if other list is longer, the "extra" ones won't be used

### TODOs

provide some presets for the synth to get folks started.

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
