---
title: Install
---

When we talk about *installing* extempore, we mean:

1.  building the `extempore` executable and putting it somewhere your
    system can find it (e.g. on your `PATH`)
2.  getting a bunch of helpful libraries which provide *extended*
    functionality (e.g. for audiofile I/O, FFTs, graphics)
3.  ahead-of-time (AOT) compiling the Extempore standard library, so
    that things load up much quicker when you start Extempore

In general, it's nice to have all of these things, although technically
you really only need step 1 to start writing xtlang code. Most of these
instructions will do all three steps by default, with comments about
there are ways to tailor your install if you want something different.

## Option 1: download a pre-built binary {#download-a-binary}

Download a [binary
release](https://github.com/digego/extempore/releases), unzip it and run
`extempore.exe` from inside the `extempore` folder.

If you're not planning to make changes to Extempore itself, then downloading a
binary is probably the best option. You can still write your own xtlang code,
run the examples, etc.

## Option 2: build from source {#build-from-source}

The build-from-source workflow will download and build all the dependencies you
need (including LLVM). 

If you've got the requirements:

- a C++ compiler (`clang`, `gcc` >= 4.9, `msvc` >= VS2015)
- Git
- CMake
- [ALSA](http://www.alsa-project.org/main/index.php/Main_Page) (Linux only)

then here are some one-liner build commands:

    # linux/macOS
    git clone https://github.com/digego/extempore && mkdir extempore/cmake-build && cd extempore/cmake-build && cmake .. && make install

    # Windows
    git clone https://github.com/digego/extempore && mkdir extempore/cmake-build && cd extempore/cmake-build && cmake -G"Visual Studio 14 2015 Win64" .. && cmake --build . --target ALL_BUILD --config Release

If you have problems, check out the platform-specific build notes below.

### Build options

If you're using the CMake GUI, then these will appear as checkboxes/drop-down
menus. If you're using CMake from the CLI, then remember that you specify
options using the `-DOPTION_NAME=OPTION_VALUE` syntax.

Here are a few of the more interesting CMake options:

- `BUILD_DEPS` (boolean, default `ON`) controls whether or not the build process
  will also download and build the extended libraries (e.g. glfw, libsndfile).
  If you want to get those things through another package manager (or not use
  them at all) then set this to `OFF`.
  
- `EXTERNAL_SHLIBS_AUDIO`/`EXTERNAL_SHLIBS_GRAPHICS` (boolean, default `ON` for
  both) are useful if you want to build the supporting libs for graphics/audio
  but not both (so you should set the one you *don't* want to `OFF`)

- `PACKAGE` (boolean, default `OFF`) prepares everything (including all extended
  deps and AOT-compilation) to create a zipfile for binary distribution. The
  main effect of this flag is to disable processor-specific optimisations for
  all the build commands, which gives you the best chance of producing a
  portable binary. This option also adds a `package` target to the
  makefile/solution, which can be used to actually generate the zipfile/dmg/deb.

### Build targets {#targets}

The default target will build Extempore, all the dependencies, and AOT-compile
the standard library. However, in other situations the following targets might
come in handy:

- on macOS and Linux, the `install` target will move the extempore executable to
  `/usr/local/bin` (or similar) and the rest of the Extempore share directory to
  `/usr/local/share/extempore` (does nothing on Windows)

- the `aot` target will ahead-of-time compile just the core standard library,
  i.e. the pure-xtlang libraries with no external C library dependencies

- the `clean_aot` target will remove all AOT-compiled files

- the `assets` target won't build anything per. se., but it will download the
  assets e.g. sound files, 3D model files which are referenced in the examples
  (it's pretty big, so make sure you're on an internet connection where you
  don't mind downloading a bunch of data)

### Platform-specific notes {#platform-specific-notes}

#### OSX {#osx}

Extempore should build with clang or gcc, the easiest way to get these is
through Xcode or the command line tools.

#### Linux {#linux}

{:.note-box}

There are lots of distros, with lots of quirks! If you come across any tips,
then either let us know on the [mailing
list](mailto:extemporelang@googlegroups.com) or submit a pull request.

Extempore is most-often used on Ubuntu, but is also known to work with Debian,
Fedora, Arch, and also inside a docker container.

There are a few extra dependencies which you may need to get through
your package manager. For example, on Ubuntu 16.04 I needed:

    sudo apt-get install libasound2-dev xorg-dev libglu1-mesa-dev zlib1g-dev

You'll also need to specify an [ALSA](http://www.alsa-project.org/) backend for
portaudio. To use the asound portaudio backend (the default) you'll need the
libasound package. This might have a slightly different name on different
distros, e.g. on Mint 18 it's called `libasound2-dev`. To use the
[Jack](http://www.jackaudio.org/) portaudio backend, you'll need to have Jack
installed, and then to set the `JACK` CMake option with `-DJACK=ON`.

#### Windows {#windows}

Extempore has been tested on Windows 7 & Windows 10 with [Visual Studio
Community
2015](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx)

If you don't want to use the the command-line described
[above](#build-from-source), note that CMake generates a Visual Studio solution
(`.sln`), so just open that and build the `ALL_BUILD` target.

On Windows, Extempore requires a few components of the **Boost** 1.59 libs for
TCP/UDP handling. These will be automatically downloaded for you if you've got
the [nuget command line tool](choco%20install%20nuget.commandline) installed, or
if you want to build boost yourself (remember to keep the labyrinthine boost
directory structure intact) just tell the build process where it is using the
`BOOST_DIR` CMake variable.

If you want to use the **ASIO** audio backend on Windows (which might give you
lower-latency audio, but is not essential) you need to download the [ASIO
SDK](http://www.steinberg.net/nc/en/company/developer/sdk_download_portal.html)
from Steinberg. You have to create a [third party developer
account](http://www.steinberg.net/nc/en/company/developer/sdk_download_portal/create_3rd_party_developer_account.html),
then you can log in and download the ASIO SDK (make sure you get the right SDK).
You also need to download and install [ASIO4ALL](http://www.asio4all.com/) with
the 'offline setup panel' option enabled. After that, copy the ASIO files into
the `src/portaudio/src/hostapi/asio`, and use the `-DASIO=ON` CMake option.

The (musical) sampler also requires the
[libsndfile](http://www.mega-nerd.com/libsndfile/#Download) `.lib` and `.dll`.
Currently, we host pre-built binaries on `http://extempore.moso.com.au`, which
the CMake build process will download for you and move into
`libs/platform-shlibs`. If anyone can figure out how to build a 64-bit
libsndfile on Windows (preferrably with CMake) in a sane way then let me know.

## Shared library dependencies {#shared-library-dependencies}

The full list of external libraries required for the Extempore standard
library are:

-   assimp 3.2
-   glfw3 3.1.2
-   kiss\_fft 1.3.0
-   nanovg
-   portmidi 217
-   sndfile 1.0.26
-   stb\_image

For those who are interested, there are a few reasons that Extempore builds and
maintains its own "world" of shared lib dependencies:

1.  there's no lib path on **Windows**, so it's up to each program to make sure
    it ships with the dlls it needs (and knows where to find them)
2.  library **versioning** is a bit of a mess at the best of times, so by
    building specific versions of e.g. GLFW or assimp, Extempore can guarantee
    that the bindings will work - otherwise you'll get weird errors.
3.  for **packaging** (as described above in the note on the `PACKAGE` variable)
    it's important to turn off all cpu-specific optimisations, and set various
    compiler flags. Packages installed through a package manager don't do this,
    and so when building e.g. a dmg for distribution on OSX it's necessary to
    make sure any compiled objects (including dependencies and Extempore itself)
    have been compiled with the right flags.

If you're keen to get these libraries some other way (e.g. through your
system-provided package manager) then that's fine - just use `-DBUILD_DEPS=OFF`.

## LLVM 3.7.0 {#llvm-3.7.0}

If you don't have an `EXT_LLVM_DIR` environment variable set on your
system, then Extempore will download, patch and build LLVM 3.7.0 for you
as part of the `make extempore` step. However, if you do want to build
it yourself, then here's how.

Grab the [3.7.0 source tarball](http://llvm.org/releases/download.html#3.7.0),
apply the `extempore-llvm-3.7.0.patch` in `extras/`:

    cd /path/to/llvm-3.7.0.src
    patch -p0 < /path/to/extempore/extras/extempore-llvm-3.7.0.patch

On **Windows**, the `<` redirection will work with `cmd.exe`, but not
PowerShell.

Then build LLVM, moving the libraries into `/path/to/extempore/llvm` as part of
the `install` step:

    mkdir cmake-build && cd cmake-build
    cmake -DCMAKE_BUILD_TYPE=Release -DLLVM_TARGETS_TO_BUILD=X86 -DLLVM_ENABLE_TERMINFO=OFF -DLLVM_ENABLE_ZLIB=OFF -DCMAKE_INSTALL_PREFIX=c:/path/to/extempore/llvm .. && make && make install

On **Windows**, you'll also need to specify a 64-bit generator e.g. `-G"Visual
Studio 14 2015 Win64"`

To build, open the `Extempore.sln` file and build the `ALL_BUILD` target, then
the `INSTALL` target. If the install step doesn't work, you can try directly
calling `cmake -P cmake_install.cmake` which should be in the same directory. On
Windows, the LLVM build output must be installed into an `llvm` subdirectory in
the top-level Extempore directory (since the AOT compilation process will look
in there to find `llc`).

If LLVM complains about not being able to find python, you can specify a path to
your python executable with the `PYTHON_EXECUTABLE` CMake variable:

    cmake -DCMAKE_BUILD_TYPE=Release -DLLVM_TARGETS_TO_BUILD=X86 -DLLVM_ENABLE_TERMINFO=OFF -DLLVM_ENABLE_ZLIB=OFF -DCMAKE_INSTALL_PREFIX=c:/path/to/extempore/llvm -DPYTHON_EXECUTABLE=c:/path/to/python .. && make && make install

If you **do** build your own patched version of LLVM for Extempore, then make
sure you set the `EXT_LLVM_DIR` environment variable to point to that directory
(where you installed LLVM) so that the Extempore build process knows where to
find it.
