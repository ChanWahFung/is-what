# @wahfung/is-what

Tiny javescript type check functions!

## Install

```
npm install @wahfung/is-what
```

## Usage

Type check functions:

```js
import {isString, isUndefined, isArray} from '@wahfung/is-what'

isString('') // true
isNumber(10) // true
isBoolean(false) // true
isUndefined(undefined) // true
isNull(null) // true
isArray([]) // true
isObject({}) // true
```

Number check functions:

```js
import {isNegativeNumber, isNegativeZero} from '@wahfung/is-what'

isPositiveNumber(1) // true
isNegativeNumber(-1) // true
isPostiveZero(0) // true
isNegativeZero(-0) // true
```