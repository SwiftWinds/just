## just-once

Part of a [library](https://anguscroll.com/just) of zero-dependency npm modules that do just do one thing.
Guilt-free utilities for every occasion.

[`🍦 Try it`](https://anguscroll.com/just/just-once)

```shell
npm install just-once
```
```shell
yarn add just-once
```

Create a function that can only be invoked once

```js
import once from 'just-once';

const fn = once(() => console.log('hello'));

fn();
// logs 'hello'
fn();
// does nothing
```
