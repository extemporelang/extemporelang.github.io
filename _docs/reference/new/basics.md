---
title: The Basics
---

## Introduction

In this chapter we'll start you slowly by showing you some of the basics of programming in XTLang. We'll begin by showing you how to print things to the terminal, before introducing you to the basics of flow control.

## Printing to the terminal

Let's beging with everyone's favourite first program:

~~~~ sourceCode
($ (println "Hello World!"))
~~~~

If everything went according to plan you should see `Hello World!` appear on the console where you started Extempore. This code consists of two parts:

+ ```($ ...)```
+ ```(println "string goes here")```

The $ form is used to tell Extempore that the code you are sending it is XTLang code, rather than scheme. `println` as you might expect is used to tell xtlang to print your string to the terminal, followed by a carriage return.

We can write some more code to bind-val a global variable myPI, which is an xtlang global variable of type double. If you evaluate this with Alt+S or C-M-x (or whatever the command is in your editor) then what happens is