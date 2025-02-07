## just-insert

Part of a [library](https://anguscroll.com/just) of zero-dependency npm modules that do just do one thing.
Guilt-free utilities for every occasion.

[`🍦 Try it`](https://anguscroll.com/just/just-insert)

```shell
npm install just-insert
```
```shell
yarn add just-insert
```

Inserts a sub-array into an array starting at the given index. Returns a copy

```js
import insert from 'just-insert';

insert([1, 2, 5, 6], ['a', 'c', 'e'], 2); // [1, 2, 'a', 'c', 'e', 5, 6]
insert([1, 2, 5, 6], 'a', 2); // [1, 2, 'a', 5, 6]
insert([1, 2, 5, 6], ['a', 'c', 'e'], 0); // ['a', 'c', 'e', 1, 2, 5, 6]
insert([1, 2, 5, 6], ['a', 'c', 'e']); // ['a', 'c', 'e', 1, 2, 5, 6]
```
