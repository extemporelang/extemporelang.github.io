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
(`0.8.1` or newer). Binary builds are [available on
GitHub](https://github.com/digego/extempore/releases).

Before we start, make sure you've read at least the [quickstart
guide]({{site.baseurl}}{% link _docs/overview/quickstart.md %}) and you can set
up & evaluate Extempore code on your machine.

## Introductrion

Conceptually, the Extempore sharedsystem is a few things:

- an easy-to-set-up signal chain with three configurable analogue synth
  instruments (including the ability to load & store presets)

- a MIDI setup (both in & out) for working with other software instruments &
  hardware controllers

The "sharedsystem" name is inspired by the [**Make Noise** _Shared
System_](http://www.makenoisemusic.com/synthesizers/black-and-gold-shared-system-plus)
series of modular synths. _That_ synth is
[Eurorack](https://en.wikipedia.org/wiki/Eurorack)-based, so _in principle_ it
could have any/all sorts of different components, but Make Noise chose a
standard set of modules so that people can share tips/patches/ideas directly
because they're using the _same_ configurable set of modules. In the same way,
the Extempore sharedsystem is an "curated" take on Extempore's audio/music
making workflow. Obviously if it's not to your taste then you've still got the
full power of Extempore under the hood; but if you just want to fire it up and
get people dancing then the Extempore sharedsystem is a good way forward, and
it's what we'll cover in this guide 😁

### Loading the sharedsystem

First, let's load up the Extempore sharedsystem with:

```extempore
(sys:load "examples/sharedsystem/setup.xtm")
```

Depending on your machine it might take a little while, but hang tight---you'll
get there in the end. When you see something like this then you're ready to go.

<pre style="color: #b2b2b2; background-color: #292b2e;">
<span style="color: #7E8A90; background-color: #444155;">Compiled:  </span><span style="color: #ADCF44; background-color: #444155;">active_notes</span><span style="color: #7E8A90; background-color: #444155;"> &gt;&gt;&gt; </span><span style="color: #BE8A2D; background-color: #444155;">[i32,i8*]*</span><span style="color: #7E8A90; background-color: #444155;">
Compiled:  </span><span style="color: #ADCF44; background-color: #444155;">dsp_load</span><span style="color: #7E8A90; background-color: #444155;"> &gt;&gt;&gt; </span><span style="color: #BE8A2D; background-color: #444155;">[void]*</span><span style="color: #7E8A90; background-color: #444155;">
Compiled:  </span><span style="color: #ADCF44; background-color: #444155;">main_reverb</span><span style="color: #7E8A90; background-color: #444155;"> &gt;&gt;&gt; </span><span style="color: #BE8A2D; background-color: #444155;">[void,i64,float]*</span><span style="color: #7E8A90; background-color: #444155;">
Compiled:  </span><span style="color: #ADCF44; background-color: #444155;">main_gain</span><span style="color: #7E8A90; background-color: #444155;"> &gt;&gt;&gt; </span><span style="color: #BE8A2D; background-color: #444155;">[float,float]*</span><span style="color: #7E8A90; background-color: #444155;">
</span><span style="color: #ADCF44; background-color: #444155;">sharedsystem audio setup complete
</span><span style="color: #7E8A90; background-color: #444155;">Compiled:  </span><span style="color: #ADCF44; background-color: #444155;">get_analogue_synth_cc_name</span><span style="color: #7E8A90; background-color: #444155;"> &gt;&gt;&gt; </span><span style="color: #BE8A2D; background-color: #444155;">[i8*,i32]*</span><span style="color: #7E8A90; background-color: #444155;">
Compiled:  </span><span style="color: #ADCF44; background-color: #444155;">midi_cc</span><span style="color: #7E8A90; background-color: #444155;"> &gt;&gt;&gt; </span><span style="color: #BE8A2D; background-color: #444155;">[void,i32,i32,i32,i32]*</span><span style="color: #7E8A90; background-color: #444155;">
</span><span style="color: #D3D2D1; background-color: #444155;">shared system successfully loaded
</span></pre>

You've just loaded

- three analogue synths (`syn1`, `syn2` and `syn3`)
- a synth drum kit (`kit`)
- a sampler (`samp1`) which is initially loaded with piano samples

Don't worry about how to use them just yet, you'll see how in a minute.

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

The interface for configuring the synths and the samplers is a bit different, so
we'll look a them individually. Like all things in music-making, different folks
want to explore different things, so if you don't care about samplers at all
then you can skip straight to the [synths](#playing-the-synth) part (or vice
versa).

Finally, as mentioned earlier this guide will use the [pattern
language]({{site.baseurl}}{% link _docs/guides/pattern-language.md %}) to play
some loops on your samplers & synths (so that you can actually hear them make
noise). So if you're curious about how that works then check out that guide as
well.

## Configuring & playing the sampler {#playing-the-sampler}

There's actually a separate guide on the sampler, so just [read that
instead]({{site.baseurl}}{% link _docs/guides/sampler.md %}).

## Configuring & playing the synth {#playing-the-synth}

The "analogue" synth is the real workhorse of the sharedsystem audio signal
chain. It's an xtlang implementation of a flexible, modular analogue synth.

, so if you're perhaps start with start sound & stop sound before switching
to the PL stuff?

{:.note-box}

As you've probably figured out, it's not actually an _analogue_ synth, it's
purely software---you can see (and modify) the source code for the whole
thing in the `libs/core/instruments/analogue.xtm` file. But it's conceptually
the same as an a

also, look at analogue_reset in `analogue.xtm` for inspo about which params to
discuss & explore

main params
oscillators
filters
other fx
LFOs
envelopes
polyphony
load/save

other stuff (noise, wavetable)

then, a note about the drum synth, and the wavetable synth

TODO: provide some half-decent-sounding (but not _too_ complicated) loops for
folks to loop through (e.g. a cover) while they tweak the synth params.

## FAQ

### Why aren't there more presets?



