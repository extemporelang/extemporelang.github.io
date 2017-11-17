---
title: quickstart
---

quickstart {#quickstart}
==========

I get it, you're impatient---here's the bare minimum required to get
from zero to running Extempore code.

Note

Some of the tutorial documentation is out of date. If you get stuck, the
best place to ask for help is the mailing list.

Installation {#installation}
------------

Note

There are much more detailed instructions in <span role="doc">install</span>,

:   so if you have any problems (or simply want to know what's going on)
    with the steps below then that's a good place to look.

The quickest way to get started is to download a [binary
release](https://github.com/digego/extempore/releases), unzip it and run
`extempore.exe` from inside the `extempore` folder.

If you're more of a build-from-source type, then <span
role="ref">that's pretty
easy as well &lt;build-from-source-doc&gt;</span>.

Editor setup {#editor-setup}
------------

To write Extempore code you need a text editor, and there are <span
role="doc">Extempore "plugins" for several text editors &lt;editor-support&gt;</span>
---Atom, Emacs, Sublime Text and Vim.

If you don't have a favourite text editor, then [Atom](https://atom.io/)
is probably a good choice---it's free, available on all platforms and
doesn't have as steep a learning curve as some other editors. Head over
to the <span
role="ref">Extempore Atom setup &lt;atom-editor-setup&gt;</span> docs to
find out to download and set it up for Extempore.

If you *do* have a favourite text editor, and it's one of the ones
mentioned above, then see the <span
role="doc">editor support page &lt;editor-support&gt;</span> for
instructions on how to get started hacking Extempore code in your editor
of choice.

"Hello, World!" {#hello-world}
---------------

Hello, World! is pretty straightforward in Extempore

~~~~ sourceCode
(println "Hello, World!")
~~~~

"Hello, Sine!" {#hello-sine}
--------------

Since Extempore has multimedia programming as a core part of its DNA,
here's "Hello, Sine!"

~~~~ sourceCode
(bind-func sine:DSP
  (lambda (in time chan dat)
    (* .1 (cos (* (convert time) .04)))))

;; tell Extempore to use `sine` as the audio output sink
(dsp:set! sine)
~~~~

"Hello, Triangle!" {#hello-triangle}
------------------

"Hello, Triangle!" is a bit more complicated, since setting up the
OpenGL state machine requires a bit of boilerplate. See
`examples/external/shader-tutorials/triangle.xtm` to get started.

Beyond "Hello..." {#beyond-hello...}
-----------------

These simple snippets gloss over some subtleties of what's going on. But
hey, if you've started quickly(ish), then this page has done its job. To
understand the subtleties, read the rest of the documentation :)
