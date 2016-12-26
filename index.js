'use strict';

export const parse = (str) => {
    str = str || window.location.search;
    // Create an object with no prototype
    const set = Object.create(null);

    if (typeof str !== 'string') {
        return set;
    }
    str = str.trim().replace(/^\?/, '');
    if (!str) {
        return set;
    }

    str.split('&').forEach((param) => {
        param = param.split('=');

        let key = param.shift();
        let val = param.length > 0 ? param.join('=') : undefined;

        key = decodeURIComponent(key);
        val = val === undefined ? null :  decodeURIComponent(val);

        if (key) {
            set[key] = val;
        }
    })
    return set;
};

export const stringify = (obj = {}) => {
    return Object.keys(obj).sort().map((key) => {
        let val = obj[key];
        if (val === undefined || val === null) {
            val = '';
        }
        return `${key}=${val}`;
    }).join('&');
};

export const getParam = (key, str) => {
    const reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    let search = decodeURIComponent(str || window.location.search);
    let result = search.substr(1).match(reg);
    if (result !== null) return unescape(result[2]);
    return null;
};