---
title: Reading & writing audio files in Extempore
---

Extempore's `libsndfile` bindings[^1] provide functionality for both reading and
writing audio files. Here's a short example of how to read write audio files.

First, load up the required libraries and create an audio file closure with
`audiofile_c`

~~~~ xtlang
(sys:load "libs/external/sndfile.xtm")

(bind-func dsp:DSP 1000000000  ;; allocate memory to store the audio file
  (let ((audiofile (audiofile_c "/Users/ben/Desktop/xtm-assets/peg.wav" 0 0)))
    (lambda (in time chan dat)
      ;; get the output sample
      (audiofile))))

(dsp:set! dsp)  
~~~~

`audiofile_c` takes three arguments:

-   the name of the wav file to load
-   the offset into the file to start from (`0` for the start of the file)
-   the number of samples to read (`0` for the whole file)

`audiofile_c` returns a closure (which is bound to `audiofile`) which will, when
called, return successive samples from the audio file in such a way that
`audiofile` can be called once per output sample and will play through the audio
file at normal speed. When `dsp` is compiled, the log view also prints some info
about the file[^2]:

~~~~ sourceCode
file name:     /Users/ben/Desktop/xtm-assets/peg.wav
samplerate:    44100
channels:      2
samples read:  21202944
~~~~

It's important to realise that the playhead---the point in the file which playback
is 'up to'---is stored internally to the `audiofile` closure, and if you just call
it back with no arguments it will gradually move through the whole file (as it
is doing in the above code). By default, when the playhead gets to the end of
the file it wraps to the start, so the file playback will loop on forever.

To mess with this audio stream, let's add some valve saturation-style distortion
to both channels:

~~~~ xtlang
(bind-func dsp:DSP 1000000000
  (let ((audiofile (audiofile_c "/Users/ben/Desktop/xtm-assets/peg.wav" 0 0))
        (saturationl (saturation_c))
        (saturationr (saturation_c)))
    (lambda (in time chan dat)
      (* 0.1 ;; to compensate for saturation boost
         (cond ((= chan 0)
                (saturationl (audiofile) 1.0 0.9))
               ((= chan 1)
                (saturationr (audiofile) 1.0 0.9))
               (else (convert 0.0 SAMPLE)))))))
~~~~

Sounds saturated and messy---great.[^3]

[^1]: The `libsndfile` library can be found at `libs/external/sndfile.xtm`.

[^2]:
    If you're interested, the file I'm using is 'Peg' from [Steely Dan's
    Aja](http://www.rollingstone.com/music/lists/500-greatest-albums-of-all-time-20120531/steely-dan-aja-20120524).
    It's a great album.

[^3]:
    We had to wrap the `0.0` value in a `convert` call to get the types right,
    as discussed in another
    [post](2013-11-15-changing-from-doubles-to-floats-in-audio_dsp.org).
