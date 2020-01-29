---
title: The sharedsystem
hidden: true
---

{:.note-box}
This particular guide is under active development for an upcoming [Extempore
workshop](https://benswift.me/blog/2020/01/28/extempore-workshop-iclc-20-feb-6-limerick-ie/)
at ICLC '20 (Feb 6). So if there are a couple of bits which are currently
broken/don't make sense then [let me know](mailto:ben.swift@anu.edu.au), but
please be kind until the workshop actually arrives :)

To run these examples you **must** be running an up-to-date version of Extempore
(`0.8.1` or newer). Binary builds are available but not currently hosted on
GitHub releases---if you'd like one then get in touch with
[Ben](mailto:ben.swift@anu.edu.au).

Conceptually, the Extempore sharedsystem is a few things:

- an easy-to-set-up signal chain with three configurable analogue synth
  instruments (including the ability to load & store presets)

- a MIDI setup (both in & out) for working with other software instruments &
  hardware controllers

<div class="note-box" markdown="1">

Loading the `examples/sharedsystem/setup.xtm` library will also load up the
Extempore pattern language stuff, which is covered in more detail in [this
guide]({{site.baseurl}}{% link _docs/guides/pattern-language.md %}). These two
things are conceptually independent---you certainly don't have to understand the
sharedsystem's analogue synths in depth if you just want to make bangin' loops
with the pattern language (or vice versa).

However, even if you're mostly interested in the sharedsystem it's still handy
to understand a bit about the pattern language for making noise with your synths
& samplers. That's the approach we'll take in this guide---we won't necessarily
explain the pattern language stuff, but you can always jump over to the [pattern
language docs]({{site.baseurl}}{% link _docs/guides/pattern-language.md %}) to
go deeper.

</div>

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

The "sharedsystem" name is inspired by the [**Make Noise** _Shared
System_](http://www.makenoisemusic.com/synthesizers/black-and-gold-shared-system-plus)
series of modular synths. It's
[Eurorack](https://en.wikipedia.org/wiki/Eurorack)-based, so _in principle_ it
could have any/all sorts of different components, but they've chosen a standard
set of modules so that people can share tips/patches/ideas directly because
they're using the _same_ configurable set of modules. In the same way, the
Extempore sharedsystem is an "curated" take on Extempore's audio/music making
workflow. Obviously if it's not to your taste then you've still got the full
power of Extempore under the hood; but if you just want to fire it up and get
people dancing then this is a good way forward 😁

provide some presets for the synth to get folks started.

## Playing & tweaking the analogue synth

TODO: provide some half-decent-sounding (but not _too_ complicated) loops for
folks to loop through (e.g. a cover) while they tweak the synth params.

## TODOs

{:.info-box}

If you've stumbled across this section on the website, then welcome---but these
are just some notes for me (Ben) as I write these docs. So you probably don't
need to have answers to these questions.

- have a look at the piano preset (simple wavetable) and the keys preset (more
  complex wavetable)

- to get the most out of the filters, you want a cold signal (oscillators under
  0.5)

- TODO new sample libs
- 
