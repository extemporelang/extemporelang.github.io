---
title: Introduction to Types
---

# xtlang types {#xtlang-types}

In this chapter we will introduce xtlang's type system. Unlike Scheme and other
dynamically typed languages (e.g. Ruby and Python), XTLang requires you to
define the types of all the variables that you are using. If you do not define
the variables properly then the compiler will reject it and give you a
(hopefully) helpful message about what needs to be fixed.

~~~~ sourceCode
(bind-func will-not-compile
  (lambda (x y)
    (+ x y)))
~~~~

If you try to compile the source code above you will get an error as the
compiler has no way of knowing whether x and y should be integers, floats, or
doubles. Instead we need to define their types using type annotations:

~~~~ sourceCode
(bind-func will-compile
  (lambda (x:i32 y:i32)
    (+ x y)))
~~~~

It would be tedious if you had to provide type annotations for every variable.
Fortunately Extempore will always infer the correct type for a type if it has
enough information:

~~~~ sourceCode
(bind-func will-compile
  (lambda (x:i32 y)
    (+ x y)))
~~~~

So what about those situations where you have two variables of different types
that need to be combined? XTLang provides the ``convert`` function for these
situations:

~~~~ sourceCode
(bind-func will-compile
  (lambda (x:i32 y:float)
    (+ x (convert y))))
~~~~

We will discuss in a later chapter why this works, but for the moment it is
enough to know that ``convert`` will automagically convert types for you.

Extempore has four categories of types:
+ Simple Value Types (e.g. variables that contain integers, or floating point numbers)
+ Memory Pointers (i.e. a variable that contains a memory location)
+ User Defined Types
+ Closure Types (i.e. the type signature of a function)

Subsequent chapters will gradually introduce you to the last three, but in the
rest of this chapter we will look at the Simple Value Types

FOOTNOTE: If you're a C programmer these are essentially the same as the C
types. Each type is low level and represent a particular bit pattern in memory
---there's no boxing or unboxing going on. All types in Extempore are signed.

## Booleans {#booleans}

XTLang doesn't have an explicit boolean type. Instead it stores booleans in an
integer type with a a size of 1 bit: -   `i1` (boolean)

'0' represents 'False' and '1' represents 'True'.

~~~~ sourceCode
(bind-val true i1 1)
(bind-val false i1 0)
~~~~


## Characters {#characters}

XTLang doesn't have an explicit character type. Instead characters are stored
using an integer type that has the size of 1 byte, or 8 bits: -   `i8` (char)

~~~~ sourceCode
(bind-val ch i8 'c')
~~~~

__Note:__ The primitive character type _only_ supports ASCII characters. 
__TODO__ UTF support?

## Integers {#integers}
XTLang only supports signed integers. XTLang supports the following sizes of integers:

-   `i1` (boolean)
-   `i8` (char)
-   `i32`
-   `i64` (default)

By default all integers in XTLang are 64 bit. Which means you can write the
following code without the compiler complaining:

~~~~ sourceCode
(bind-func very-simple-func
  (lambda ()
  34))
~~~~

as the compiler knows that 34 should be treated as a type of ``i64``.

Note that the compiler will only treat 34 as a type of i64 if there is no
conflicting type information. In this code 34 is treated as an i32:

~~~~ sourceCode
(bind-func very-simple-func
  (lambda (x:i32)
    (+ x 34)))
~~~~

## Floating Point Numbers {#floats}

![image](/images/float-examples.png)

There are two sizes of floating point number in XTLang:

-   `float` (32 bit)
-   `double` (64 bit, default)

Float literals in xtlang code (e.g. `4.2`) are interpreted as `double`:

~~~~ sourceCode
(bind-func very-simple-func2
  (lambda ()
  34.3))
~~~~


unless the type signatures suggest otherwise:

~~~~ sourceCode
(bind-func very-simple-func
  (lambda (x:float)
    (+ x 34.3)))
~~~~

## Conclusion In this chapter we've introduced Extempore's type system, showing
the core types. In the next chapter we'll look at memory allocation and
pointers.
