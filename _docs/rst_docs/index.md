---
title: index
---

# The Extempore programming environment {#the-extempore-programming-environment}

Welcome to Extempore's documentation site. It's a work in progress---up
till now things have been hosted on [Ben's
blog](http://benswift.me/extempore-docs/) but this is an attempt to do
things right, using [Sphinx](http://sphinx-doc.org/).

~~~~ sourceCode
(bind-func dsp:DSP
  (lambda (in time chan dat)
    (* 0.1 (cos (* .1 (convert time))))))

(dsp:set! dsp)
~~~~

quickstart install editor-support about-this-documentation

philosophy caas time c-xtlang-interop scheme-xtlang-interop concurrency
memory

types type-inference best-practices

audio-signal-processing making-an-instrument note-level-music
common-lisp-music sampler graphics impromptu-users

getting-help contributing testing

# Other useful things {#other-useful-things}

-   <span role="ref">genindex</span>
-   <span role="ref">search</span>
