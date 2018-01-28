---
title: Generics
---

## Introduction

In an earlier chapter we saw how you could overload functions so that they could handle different types appropriately:

~~~~ sourceCode
(bind-func sum:[i64,i64,i64]*
  (lambda (x y)
    (+ x y) ))

(bind-func sum:[double,double,double]*
  (lambda (x y)
    (+ x y) ))
~~~~

While this is useful, it's also a lot of unnecessary work as we're rewriting the same function twice. In this chapter we're going to show you a better way using generics.

NOTE: Currently the generics implementation in xtlang has slow compile times. This is a known problem which is being worked on. They still work just fine though.

## Generic Functions

When writing a generic function you define an abstract type using a `!`. So for example:

~~~~ sourceCode
(bind-func gsum:[!a,!a,!a]*
  (lambda (x y) (+ x y)))
~~~~

This function can take any type, the only restriction is that both parameters and the return type _must share the same type_. For example:

~~~~ sourceCode
($ (gsum 3 4)) ;; OK
($ (gsum 3.4 5.3)) ;; OK

($ (gsum 3 4.3)) ;; You will get a type error
($ (let ((x:double (gsum 3 4))) ;; you will get a type error
      (println x)))
~~~~

We could make this function even more generic by using convert (in real code this particular example is best avoided. It's usually better to explicitly cast in this situations to prevent unexpected errors):

~~~~ sourceCode
(bind-func rgsum:[!b,!a,!a]*
  (lambda (x y) (convert (+ x y))))

($ (let ((x:double (gsum 3 4))) ;; you will get a type error
      (println x))) ;; this now works
~~~~

However, what happens if we pass in a type that is not supported by the function `+`?

~~~~ sourceCode
($ (gsum 'c' 'd')) ;; This won't compile
~~~~

`Compiler Error  bad or unsupported atom type ast: #f`

What a horrible error! As we'll see later in this chapter there are some things that we can do about this, and better tools are coming, but for the moment this is a limitation we have to live with. If you're writing a library, make sure you document the requirements for your generic function.

## Generic Types