---
title: Editor support
---

As discussed in the [quickstart]({% link _docs/overview/quickstart.md
%}#editor-setup) there are Extempore plugins for several popular editors. This
page shows how to set things up and lists any editor-specific instructions (e.g.
the specific names of the commands & keybindings).

If you don't have a favourite text editor, or don't really know what a text
editor is, then that's ok! [VSCode](#vscode) is probably the text editor for
you.

## VSCode {#vscode}

[Visual Studio Code](https://code.visualstudio.com/), which is usually referred
to as just **VSCode**, is a cross-platform text editor from Microsoft. For a
general introduction to VSCode, check out the excellent
[docs](https://code.visualstudio.com/docs).

The VSCode setup instructions are actually listed in the [quickstart]({% link
_docs/overview/quickstart.md %}#editor-setup) guide already, so you should head
over there and get started.

## Emacs {#emacs}

[extempore-emacs-mode](https://github.com/extemporelang/extempore-emacs-mode) is
the Emacs mode for working with Extempore code, and it's available from
[MELPA](http://melpa.org/). If you're using `package.el` (i.e. if you're on a
modern-ish Emacs) then just `M-x package-install RET extempore-mode RET` and
you're done.

If you don't want to get it from MELPA, just [download the
file](https://github.com/extemporelang/extempore-emacs-mode/blob/master/extempore-mode.el)
and put it in your load path.

[Ben's](https://benswift.me) a Spacemacs user these days, and has created [an
Extempore
layer](https://github.com/benswift/.dotfiles/blob/master/spacemacs-layers/extempore/packages.el)
(although he hasn't got around to getting it accepted in the main spacemacs
layer repo or however that works, so you'll need to do a bit of downloading &
manual setup stuff to get it working).

| command                                                         | keybinding             |
|-----------------------------------------------------------------|------------------------|
| `switch-to-extempore` (or start Extermpore if it's not running) | `C-c` `C-z`            |
| `extempore-connect-or-disconnect` ()                            | `C-c` `C-j`            |
| `extempore-send-definition` (to evaluate current sexp)          | `C-c` `C-c` or `C-M-x` |
| `extempore-send-region`                                         | `C-c` `C-r`            |
| `extempore-send-buffer`                                         | `C-c` `C-b`            |

To restart the Extempore process, just `C-c` `C-c` in the `*extempore*` buffer
where `extempore` is running to kill it, then start it up again with
`switch-to-extempore`.

## Atom {#atom}

Extempore's [Atom](https://atom.io) package is available from
[GitHub](https://github.com/noiach/extempore-atom).

| command                | keybinding |
|------------------------|------------|
| `Extempore Connect`    | `alt`+`O`  |
| `Extempore Disconnect` | `alt`+`X`  |
| `Extempore Evaluate`   | `alt`+`S`  |

## Sublime Text {#sublime-text}

Extempore's [Sublime Text](https://www.sublimetext.com) plugin is available from
[GitHub](https://github.com/benswift/extempore-sublime).

| command                | keybinding |
|------------------------|------------|
| `extempore_connect`    |            |
| `extempore_disconnect` |            |
| `extempore_evaluate`   |            |

### Known issues {#known-issues}

The syntax highlighting currently doesn't cover a few edge cases---so if you end
up tinkering with `Extempore.JSON-tmLanguage` to fix anything then feel free to
submit a pull request.

## Vim {#vim}

Extempore's [vim plugin](https://github.com/timburgess/extempore.vim) is written
by Tim Burgess.

| command                           | keybinding    |
|-----------------------------------|---------------|
| open connection to Extempore      | `<Leader>``o` |
| close connection to Extempore     | `<Leader>``x` |
| send enclosing block to Extempore | `<Leader>``w` |
| send selection to Extempore       | `<Leader>``s` |
| send entire file to Extempore     | `<Leader>``a` |

The vim mode doesn't yet support multiple connections or user-specified
host/port, but pull requests are welcome.
