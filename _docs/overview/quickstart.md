---
title: Quickstart
---

{:.note-box}
I get it, you're impatient---here's the bare minimum required to get
from zero to running Extempore code.

## Installation

The quickest way to get started is to download a [binary
release](https://github.com/digego/extempore/releases), unzip it and run
`extempore.exe` from inside the `extempore` folder.

If you're more of a build-from-source type, then [that's pretty easy as
well]({{site.baseurl}}/docs/overview/install/#build-from-source)

## Editor setup {#editor-setup}

{:.note-box}

There's also a [VS Code
plugin](https://github.com/extemporelang/extempore4vscode) in the
works---probably not ready for prime time, but it's a nice editor and it might
be the best option in the future once some of the rough edges are knocked off.

To write Extempore code you need a text editor, and there are Extempore
"plugins" for [several text editors]({{site.baseurl}}{% link
_docs/overview/editor-support.md %})---Atom, Emacs, Sublime Text and Vim.

If you don't have a favourite text editor, then [VSCode]({{site.baseurl}}{% link
_docs/overview/install.md %}#vscode) probably a good choice---it's free,
available on all platforms and doesn't have as steep a learning curve as some
other editors.

If you *do* have a favourite text editor, and it's one of the ones mentioned
above, then see the [editor
support]({{site.baseurl}}/docs/overview/editor-support/) page for instructions
on how to get started hacking Extempore code in your editor of choice.

## "Hello, World!" {#hello-world}

Hello, World! is pretty straightforward in Extempore

~~~~ xtlang
(println "Hello, World!")
~~~~

## "Hello, Sine!" {#hello-sine}

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

## "Hello, Triangle!" {#hello-triangle}

"Hello, Triangle!" is a bit more complicated, since setting up the
OpenGL state machine requires a bit of boilerplate. See
`examples/external/shader-tutorials/triangle.xtm` to get started.

## Beyond "Hello..." {#beyond-hello...}

These simple snippets gloss over some subtleties of what's going on. But
hey, if you've started quickly(ish), then this page has done its job. To
understand the subtleties, read the rest of the documentation :)
