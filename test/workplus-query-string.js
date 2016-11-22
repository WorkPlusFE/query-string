'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const parse = (str = window.location.search) => {
    // Create an object with no prototype
    const set = Object.create(null);

    if (typeof str !== 'string') {
        return set;
    }
    str = str.trim().replace(/^\?/, '');
    if (!str) {
        return set;
    }

    str = decodeURIComponent(str);
    str.split('&').forEach((param) => {
        param = param.split('=');
        let key = param[0];
        set[key] = param[1] || null;
    });
    return set;
};

const stringify = (obj = {}) => {
    return Object.keys(obj).sort().map((key) => {
        let val = obj[key];
        if (val === undefined || val === null) {
            val = '';
        }
        return `${key}=${val}`;
    }).join('&');
};

const getParam = (key, str = window.location.search) => {
    const reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    let search = decodeURIComponent(str);
    let result = search.substr(1).match(reg);
    if (result !== null) return unescape(result[2]);
    return null;
};

exports.parse = parse;
exports.stringify = stringify;
exports.getParam = getParam;
