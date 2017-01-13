# jacquerie
Similar to jQuery but without the burden of history

**Warning:** This library isn't ready for consumption. Jacquerie is currently being integrated and tested into a big complex jQuery-intensive project. Once it's proven the promesses are fullfilled, I'll removed the warning.

## Why this is needed

jQuery's *"Write Less, Do More"* is wonderful.

But it's old.

Now browsers are expected to have promises, CSS transitions, fetch, querySelectorAll, weak maps, array functions, arrow functions, etc.

Cross browser behavior is also very consistent.

And practices change.

Half of jQuery's API is now useless and half of the implementation of useful functions is useless.

But jQuery's logic is still relevant. And we don't need to learn it.

That's why jQuery simplified alternatives make a lot of sense. This is one. This is mine. It may not suit you.

![Jacquerie](doc/jacquerie-gravure.jpg "Jacquerie: Not a Revolution")

### Why you totally should use Jacquerie instead of jQuery

* it's lighter
* it's faster
* it does all the things like jQuery
* it's educational. You can read and understand the code because it doesn't need to be as smart as jQuery fighting against obsolete browsers. And it certainly doesn't try to be *clever*.

### Why you really should stick with jQuery

* the js file size difference doesn't matter much compared to the rest of your site (and it's cached)
* client-side code speed isn't usually a problem
* I lied: Jacquerie doesn't do all the things done by jQuery. By design. It's very possible you need one function I deemed useless
* why lose time testing a new library and taking risks? Just use jQuery.
* you don't decide what browsers you want to support. Sigh.

## What's not in Jacquerie

1. All Ajax and Defferred related functions make little sense in recent browsers. They're not in Jacquerie.
1. There's no stack in Jacquerie traversing. jQuery's stack is heavy and very rarely used.
1. As I consider the remaining most reasonable use of `data` is to safely attach data to elements, data-attributes aren't read.
1. There's only a limited support for `:visible`. You can only use it when it's the whole selector of `filter` (as is recommended for jQuery).
1. `:gt`, `:lt` : use `$.fn.slice` instead (as is recommended for jQuery)
1. jQuery is lax on attribute selectors and lets you omit the quotes in `[name="value"]`. Jacquerie lets `querySelectorAll` do the query and don't lose time cleaning your selectors.
1. I made choices, and things I found useless weren't implemented
1. I probably forgot some important features. This can change, if you ask for them.
