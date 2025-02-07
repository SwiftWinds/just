## just-squash

Part of a [library](https://anguscroll.com/just) of zero-dependency npm modules that do just do one thing.
Guilt-free utilities for every occasion.

[`🍦 Try it`](https://anguscroll.com/just/just-squash)

```shell
npm install just-squash
```
```shell
yarn add just-squash
```

Remove all spaces from a string, optionally remove escape sequences too

```js
  squash('the cat sat on the mat'); // 'thecatsatonthemat'
  squash(' the cat sat on the mat '); // 'thecatsatonthemat'
  squash('\tthe cat\n sat \fon \vthe \rmat '); // '\tthecat\nsat\fon\vthe\rmat'
  squash('\tthe cat\n sat \fon \vthe \rmat ', true); // 'thecatsatonthemat'
  squash(`the cat
sat on the mat`, true); // thecatsatonthemat
```
