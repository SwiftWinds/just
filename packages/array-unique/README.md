## just-unique

Part of a [library](https://anguscroll.com/just) of zero-dependency npm modules that do just do one thing.
Guilt-free utilities for every occasion.

[`🍦 Try it`](https://anguscroll.com/just/just-unique)

```shell
npm install just-unique
```
```shell
yarn add just-unique
```

Dedupes an array

```js
import unique from 'just-unique';

unique([1, 2, 3, 2, 3, 4, 3, 2, 1, 3]); // [1, 2, 3, 4]

var a = {a: 3};
var b = {b: 4};
var c = {c: 5};
unique([a, a, b, c, b]); // [a, b, c]

unique([1, '1', 2, '2', 3, 2]); // [1, '1', 2, '2', 3]

// declaring sorted array for performance
unique([1, 1, '1', 2, 2, 5, '5', '5'], true); // [1, '1', 2, 5, '6']

// declaring strings array for performance
unique(['a', 'c', 'b', 'c', 'a'], false, true); // ['a', 'b', 'c']
```
