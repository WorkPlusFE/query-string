# workplus-query-string [![npm](https://img.shields.io/npm/v/workplus-query-string.svg?maxAge=2592000?style=flat-square)]()

> Parse and stringify URL

## Install

```bash
npm install --save workplus-query-string
```

## Usage

```js
import { parse, stringify, getParam } from 'workplus-query-string';

// If location.search = '?a=1&b=2&c=3'

let params = parse();

// params => {a: "1", b: "2", c: "3"}

let obj = {
    x: 1,
    y: 2,
},

let str = stringify(obj)

// str => "x=1&y=2"

let val = getParam('a');

// val => '1'

```

## License

MIT