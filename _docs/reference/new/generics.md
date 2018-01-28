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

We could make this function even more generic by using convert [fn::in real code this particular example is best avoided. It's usually better to explicitly cast in this situations to prevent unexpected errors]:

~~~~ sourceCode
(bind-func rgsum:[!b,!a,!a]*
  (lambda (x y) (convert (+ x y))))

($ (let ((x:double (gsum 3 4))) ;; you will get a type error
      (println x))) ;; this now works
~~~~

So here we've specified a second type by simply using `!b`. Whenever you have a different generic type you simply introduce a new character: `my-func:[!c,!a,!b,!b]*`. So this is a function that takes three parameters. The first parameter has type: `!a`, while the other two parameters are of type `!b`. This function then returns a parameter that has type `!c`. So the following calls are all supported:

+ `(let ((x:i64 (my-call 3.2 'a' 'b'))) x)`
+ `(let ((x:i64 (my-call 'c' 'a' 'b'))) x)` - `!b` and `!a` can share the same type.
+ `(let ((x:i64 (my-call 3 2 4))) x)` - `!a` and `!b` and `!c` can all share the same type

but the following will result in compiler errors:

+ `(let ((x:i64 (my-call 3.2 'a' 3))) x)` - the last two parameters must share a type.

Your function types can also mix abstract and conrete types. This is perfectly acceptable:

+ `my-func:[i64,i64,!a]*`


Returning to our `gsum` function - what happens if we pass in a type that is not supported by the function `+`?

~~~~ sourceCode
($ (gsum 'c' 'd')) ;; This won't compile
~~~~

`Compiler Error  bad or unsupported atom type ast: #f`

What a horrible error! As we'll see later in this chapter there are some things that we can do about this, and better tools are coming, but for the moment this is a limitation we have to live with. If you're writing a library, make sure you document the requirements for your generic function.

## Generic Types

Let's suppose we want to create a list, but we don't care what the list contains:

~~~~ sourceCode
(sys:load "libs/base/adt.xtm")

(bind-data MyList{!a}
           (MyNil)
           (MyCons !a MyList{!a}*))
~~~~

Note that this is exactly like an ADT with concrete types, but instead we're specifying our abstract type using `!a`. Now let's do some useful with this list. First of all we need to be able to see what's in a list:

~~~~ sourceCode
(bind-func toString_help:[String*,MyList{!a}*,String*]*
  (lambda (lst s)
    (MyCons$ lst (x xs)
           (MyNil$ xs ()
                 (toString_help xs (cat s (toString x)))
                 (toString_help xs (cat s (toString x) (Str ","))))
           (cat s (Str "]")))))

(bind-func print:[void,MyList{!a}*]*
  (lambda (lst)
    (printout (toString_help lst (Str "[")))
    void))

(bind-func toString:[String*,List{!a}*]*
  (lambda (lst)
    (toString_help lst (Str "["))))

(bind-val a-list MyList{i64}* (MyCons 1 (MyCons 2 (MyCons 3 (MyCons 4 (MyCons 5 (MyNil)))))))

($ (println a-list)) ;; this prints out '[1,2,3,4,5]'
~~~~

Defining functions for an abstract ADT is almost the same as with concrete ADTs, the only difference is that that we add `{!a}` to the end of our type: `List{!a}`.

Now let's do something a little bit more exciting, we're going to write a `fmap` function for our list.

A `fmap` function is a higher order function that allows us to apply a function to every element in our list. So for example:

~~~~ sourceCode
($ (map (lambda (x) (+ x 3)) a-list)) ;; this will add 3 to every member of a-list
~~~~

It doesn't matter what function we pass in, so long as it has the right function signature. By using generics we can make sure that the signature is pretty generic. So how do we define `fmap`. Firstly `fmap` should take two parameters.

The first parameter is a function that takes a single parameter that must share the type of our list: `fn:[!b,!a]*`. Note that the return type is different to the source type. There's no reason why we shouldn't be able to take a list of integers, process them and return a list of strings.

The second parameter of course is the list. So let's put this together and define a type: `fmap:[MyList{!b}*,[!b,!a]*,MyList{!a}*]`

In other words we take a list of type `MyList{!a}`, a function of type `[!b,!a]*` and return a list of type `MyList{!b}*` (remember that we typically pass pointers to complex types).

So let's write this function:
~~~~ sourceCode
(bind-func fmap:[MyList{!b}*,[!b,!a]*,MyList{!a}*]*
  (lambda (f lst)
    (MyCons$ lst (x xs) (MyCons (f x) (fmap f xs)) (MyNil))))

($ (println (fmap (lambda (x) (+ 3 x)) a-list))) ;; '[4,5,6,7,8]'
($ (println (fmap (lambda (x) (toString x)) a-list))) ;; fmap returns a list of strings.
~~~~

This allows us to very succintly write a library of generic data types with useful functions, and this is in fact how the prelude library is written in xtlang.

One more note about generics and complex data types. You can of course mix concrete and generic types in your type definitions:

~~~~ sourceCode
(bind-data EitherT{!a}
           (LeftT String)
           (RightT !a))

(bind-type pointT <!a,!a,i64>) ;; where i64 is a hex color
~~~~

## Constraints
