## just-range

Part of a [library](https://anguscroll.com/just) of zero-dependency npm modules that do just do one thing.
Guilt-free utilities for every occasion.

[`🍦 Try it`](https://anguscroll.com/just/just-range)

```shell
npm install just-range
```
```shell
yarn add just-range
```

Generate a range array for numbers

```js
import range from 'just-range';

range(1, 5); // [1, 2, 3, 4]
range(5); // [0, 1, 2, 3, 4]
range(-5); // [0, -1, -2, -3, -4]
range(0, 20, 5) // [0, 5, 10, 15]
```
