'use strict';

export const parse = (str = window.location.search) => {
    // Create an object with no prototype
    const set = Object.create(null);

    if (typeof str !== 'string') {
        return set;
    }
    str = str.trim().replace(/^\?/, '');
    if (!str) {
        return set;
    }

    str = decodeURIComponent(str.substring(1));
    str.split('&').forEach((param) => {
        param = param.split('=');
        key = param[0];
        set[key] = param[1] || null;
    })
    return set;
};

export const stringify = (obj = {}) => {
    return Object.keys(obj).sort().map((key) => {
        const val = obj[key];
        if (val === undefined || val === null) {
            val = '';
        }
        return `${key}=${val}`;
    }).join('&');
};

export const getParam = (key) => {
    const reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    let search = decodeURIComponent(window.location.search);
    let result = search.substr(1).match(reg);
    if (result !== null) return unescape(result[2]);
    return null;
};