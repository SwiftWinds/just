## just-flip-object

Part of a [library](https://anguscroll.com/just) of zero-dependency npm modules that do just do one thing.
Guilt-free utilities for every occasion.

[`🍦 Try it`](https://anguscroll.com/just/just-flip-object)

```shell
npm install just-flip-object
```
```shell
yarn add just-flip-object
```

Flip the keys and values

```js
import flip from 'just-flip-object';

// flip the key and value
flip({a: 'x', b: 'y', c: 'z'}); // {x: 'a', y: 'b', z: 'c'}
flip({a: 1, b: 2, c: 3}); // {'1': 'a', '2': 'b', '3': 'c'}
flip({a: false, b: true}); // {false: 'a', true: 'b'}
```
