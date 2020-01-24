---
title: The shared system
hidden: true
---

{:.warn-box}
To run these examples you **must** be running an up-to-date version of Extempore
(`0.8.1` or newer). Binary builds are available but not currently hosted on
GitHub releases---if you'd like one then get in touch with
[Ben](mailto:ben.swift@anu.edu.au).

Conceptually, the Extempore shared system is a few things:

- an easy-to-set-up signal chain with three configurable analogue synth
  instruments (including the ability to load & store presets)

- a MIDI setup (both in & out) for working with other software instruments &
  hardware controllers

- a pattern language (a
  pseudo-[DSL](https://en.wikipedia.org/wiki/Domain-specific_language)) for
  specifying repeating patterns and musical transformations (beats & loops)

{:.info-box}

These parts are _mostly_ conceptually independent---you certainly don't have to
understand the analogue synth in depth if you just want to make bangin' loops
with the pattern language or vice versa. However, even if you're mostly
interested in one aspect it's probably worth learning just enough about the
other to help you make noise. This guide will help you do that.

## Relevant example files

- if you want to dive into playing & configuring the analogue synth stuff first,
  then start with `examples/sharedsystem/analogue_synth_basics.xtm`

- if you want to dive into making loops & beats with the pattern language first,
  then start with `examples/sharedsystem/pattern_basics.xtm` (perhaps moving on
  to `examples/sharedsystem/drum_synth_basics.xtm` afterwards)

- if you want to play patterns on MIDI devices outside of Extempore, the start
  with the pattern language stuff example (as in the previous point) but instead
  of using `(play ...)` (as in the example files) you'll need to use `(mplay
  *mout* ... <channel_number>)` with the same pitch/velocity/duration arguments
  and an extra midi channel number argument at the end

{:.info-box}

The "shared system" name is inspired by the [**Make Noise** _Shared
System_](http://www.makenoisemusic.com/synthesizers/black-and-gold-shared-system-plus)
series of modular synths. It's
[Eurorack](https://en.wikipedia.org/wiki/Eurorack)-based, so _in principle_ it
could have any/all sorts of different components, but they've chosen a standard
set of modules so that people can share tips/patches/ideas directly because
they're using the _same_ configurable set of modules. In the same way, the
Extempore shared system is an "curated" take on Extempore's audio/music making
workflow. Obviously if it's not to your taste then you've still got the full
power of Extempore under the hood; but if you just want to fire it up and get
people dancing then this is a good way forward 😁

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
