import test from 'ava';
import { parse, stringify, getParam } from '../';

let search = '';
test.beforeEach(t => {
    search = '?a=1&b=2&c=3';
})

test('location search parse', t => {
    const obj = parse(search);
    t.deepEqual(obj, { a: "1" , b: "2", c: "3" });
    t.pass();
});

test('stringify obj', t => {
    const obj = { a: "1" , b: "2", c: "3" };
    t.is(search, `?${stringify(obj)}`);
    t.pass();
});

test('get params from location search', t => {
    const param_a = getParam('a', search);
    t.is(param_a, "1");
    t.pass();
})