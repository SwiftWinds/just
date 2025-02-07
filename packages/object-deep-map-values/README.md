## just-deep-map-values

Part of a [library](https://anguscroll.com/just) of zero-dependency npm modules that do just do one thing.
Guilt-free utilities for every occasion.

[`🍦 Try it`](https://anguscroll.com/just/just-deep-map-values)

```shell
npm install just-deep-map-values
```
```shell
yarn add just-deep-map-values
```

Returns an object with values at all depths mapped according to the provided function

```js
import deepMapValues from 'just-deep-map-values';

const squareFn = (number) => number * number;
deepMapValues({ a: 1, b: { c: 2, d: { e: 3 } } }, squareFn); // => { a: 1, b: { c: 4, d: { e: 9 } } }
```
