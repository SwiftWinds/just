## just-variance

Part of a [library](https://anguscroll.com/just) of zero-dependency npm modules that do just do one thing.
Guilt-free utilities for every occasion.

[`🍦 Try it`](https://anguscroll.com/just/just-variance)

```shell
npm install just-variance
```
```shell
yarn add just-variance
```

Return the standard deviation of an array or numeric argument list

```js
import variance from 'just-variance';

variance([1, 2, 3, 2, 4, 1]); // 1.3666666667
variance(3, 2, 1); // 1
variance([100, 100, 100.1, 100]); // 0.0025
variance(1, 2, 3, 4, 5, -6); // 15.5
variance([4]); // throws
variance(['3', 2]); // throws
variance(NaN, NaN); // throws
variance(); // throws
```
