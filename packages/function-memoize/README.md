## just-memoize

Part of a [library](https://anguscroll.com/just) of zero-dependency npm modules that do just do one thing.
Guilt-free utilities for every occasion.

[`🍦 Try it`](https://anguscroll.com/just/just-memoize)

```shell
npm install just-memoize
```
```shell
yarn add just-memoize
```

An implementation of the memoize technique

```js
import memoize from 'just-memoize';

const sumByOne = memoize(function(value) {
  return value + 1;
});

sumByOne(10); // Returns value returned by the function
sumByOne(10); // Cache hit!

sumByOne(20); // Returns value returned by the function
sumByOne(20); // Cache hit!

// Custom cache key (key defaults to JSON stringified arguments)
var sum = memoize(function(a, b) {
  return a + b;
}, function(a, b) {
  return `${a}-${b}`;
});

sum(10, 10); // Returns value returned by the function
sum(10, 20); // Returns value returned by the function
sum(10, 20); // Cache hit!
```
