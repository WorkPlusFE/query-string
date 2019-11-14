# @w6s/query-string

> Parse and stringify URL

## Install

```bash
npm install --save @w6s/query-string
```

## Usage

```js
import { parse, stringify, getParam } from '@w6s/query-string';

// If location.search = '?a=1&b=2&c=3'

let params = parse();
// params => {a: "1", b: "2", c: "3"}

let obj = {
    x: 1,
    y: 2,
},

let str = stringify(obj);
// str => 'x=1&y=2'

let val = getParam('a');
// val => '1'

```

## License

MIT