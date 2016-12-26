import test from 'ava';
import { parse, stringify, getParam } from '../lib/workplus-query-string';

let search = '';
test.beforeEach(t => {
    search = '?a=1&b=2&c=3';
})

test('Parse location search', t => {
    const obj = parse(search);
    t.deepEqual(obj, { a: "1" , b: "2", c: "3" });
    t.pass();
});

test('Parse some special str1', t => {
    const specialStr1 = 'a==&b=&';
    const obj = parse(specialStr1);
    t.deepEqual(obj, { a: "=" , b: ""});
    t.pass();
});

test('Parse some special str2', t => {
    const specialStr2 = 'a=%22&b=%3D';
    const obj = parse(specialStr2);
    t.deepEqual(obj, { a: '"' , b: "="});
    t.pass();
});

test('Stringify obj', t => {
    const obj1 = { a: 1 , b: 2, c: 3 };
    t.is(search, `?${stringify(obj1)}`);
    const obj2 = { a: "1" , b: "", c: null, d: undefined };
    t.is('a=1&b=&c=&d=', `${stringify(obj2)}`);
    t.is('', stringify());
    t.pass();
});

test('Get params from location search', t => {
    const param_a = getParam('a', search);
    t.is(param_a, '1');
    t.pass();
})

test('Get a not exist param from location search', t => {
    const param_a = getParam('a1', search);
    t.is(param_a, null);
    t.pass();
})