## just-compact

Part of a [library](https://anguscroll.com/just) of zero-dependency npm modules that do just do one thing.
Guilt-free utilities for every occasion.

[`🍦 Try it`](https://anguscroll.com/just/just-compact)

```shell
npm install just-compact
```
```shell
yarn add just-compact
```

Returns a copy of an array with falsey values removed

```js
import compact from 'just-compact';

compact([1, null, 2, undefined, null, NaN, 3, 4, false, 5]); // [1, 2, 3, 4, 5]
compact([1, 2, [], 4, {}]); // [1, 2, [], 4, {}]
compact([]); // []
compact({}); // throws
```
