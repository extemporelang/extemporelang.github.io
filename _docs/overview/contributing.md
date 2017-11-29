---
title: about-this-documentation
---

# About this documentation {#about-this-documentation}

This documentation is generated using
[Sphinx](http://www.sphinx-doc.org/), using the
[rtd](https://github.com/snide/sphinx_rtd_theme) theme. Eventually we
might even host it at [Read the Docs](http://readthedocs.org), but
currently someone (usually Ben) generates the static HTML, and then we
host it on GH pages. Since it's all just
[reStructured](http://www.sphinx-doc.org/en/stable/rest.html) text files
in the `docs/` subdirectory, it's easy for others to contribute.

## Generating {#generating}

To generate these docs, you'll need a few python packages, something
like:

    pip install sphinx sphinx-autobuild sphinx_rtd_theme pygments

The docs are generated from the reStructured text (`.rst`) files in the
`docs/` subdirectory in the Extempore source distribution.

If you want to work on the docs locally (with a live-reload server so
that you can see the changes) you can use run `sphinx-autobuild` in this
`docs/` directory on your local machine:

    sphinx-autobuild . _build

To actually build the docs to host somewhere, use the makefile:

    make html

then take the generated output from `_build/html` and dump it on a
webserver somewhere---it's a self-contained static site.

Currently, we're hosting it on GitHub pages through the Extempore repo,
in a special `gh-pages` branch.

## Contributing {#contributing}

If you find problems, or can think of improvements, [fork away on
GH](https://github.com/digego/extempore), edit the documentation source
files and submit a pull request---we'd love these docs to become a real
community effort. There will probably be a few broken links and other
little things like that, so no pull request is too small to be
appreciated :)

If you've got questions, or want to bounce around some ideas for
improvements before you go ahead and make big changes then get in touch
on the [mailing list](mailto:extemporelang@googlegroups.com).

# Extempore wishlist {#extempore-wishlist}

Building a new programming language, runtime and ecosystem is a
multifaceted job. Here are a few projects (some small, some not so
small) which would be really nice---if you think you'd like to
contribute, give us a shout out on the [mailing
list](mailto:extemporelang@googlegroups.com).

## Core {#core}

These projects involve hacking on the Extempore binary itself.

1.  upgrade to LLVM 5.0 & ORCJIT
2.  port Extempore to 64-bit ARM (`aarch64`)

## xtlang {#xtlang}

These projects (mostly) involve adding/improving libraries for doing
cool things in xtlang.

1.  add animation to the graphics pipeline
2.  a 2D/3D hardware-accelerated data visualisation library (e.g. a
    vega-lite for Extempore)
3.  add DirectX (or perhaps Vulkan) support

## Ecosystem {#ecosystem}

These projects are "ecosystem/tooling" projects.

1.  add xtlang support to highlight.js (shouldn't be *too* difficult,
    you can basically copy the parsing regexes from the Atom plugin)
2.  a SWIG (or similar) wrapper generator to automatically generate the
    xtlang `bind-lib` definitions
3.  improve the main Extempore website (<http://extempore.moso.com.au>),
    potentially rolling this docs website into the main site
4.  add an xtlang package manager (e.g. CPAN or cargo for Extempore)
5.  set up Jenkins (or CTest, or whatever) build & test servers for
    Windows, macOS and Linux to create nightly builds and run the test
    suite
6.  make the CMake build process aware of the xtlang ahead-of-time
    compilation process, so that `make aot` only re-aot-compiles an
    xtlang library if it has changed
## ReStructured text cheat sheet {#restructured-text-cheat-sheet}

Since these docs use Sphinx, their [ReStructured text
docs](www.sphinx-doc.org/en/stable/rest.html) are the best place to
look, but here are a few quick reminders about the formatting of these
doc files.
