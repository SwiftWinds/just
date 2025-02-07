## just-safe-get

Part of a [library](https://anguscroll.com/just) of zero-dependency npm modules that do just do one thing.
Guilt-free utilities for every occasion.

[`🍦 Try it`](https://anguscroll.com/just/just-safe-get)

```shell
npm install just-safe-get
```
```shell
yarn add just-safe-get
```

Get value at property, don't throw if parent is undefined

```js
import get from 'just-safe-get';

const obj = {a: {aa: {aaa: 2}}, b: 4};

get(obj, 'a.aa.aaa'); // 2
get(obj, ['a', 'aa', 'aaa']); // 2

get(obj, 'b.bb.bbb'); // undefined
get(obj, ['b', 'bb', 'bbb']); // undefined

get(obj.a, 'aa.aaa'); // 2
get(obj.a, ['aa', 'aaa']); // 2

get(obj.b, 'bb.bbb'); // undefined
get(obj.b, ['bb', 'bbb']); // undefined

get(obj.b, 'bb.bbb', 5); // 5
get(obj.b, ['bb', 'bbb'], true); // true

get(null, 'a'); // undefined
get(undefined, ['a']); // undefined

get(null, 'a', 42); // 42
get(undefined, ['a'], 42); // 42

const obj = {a: {}};
const sym = Symbol();
obj.a[sym] = 4;
get(obj.a, sym); // 4
```
