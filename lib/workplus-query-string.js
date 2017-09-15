/*!
 * workplus-query-string.js v1.2.0
 * (c) 2017 Hejx
 * Released under the MIT License.
 * https://github.com/WorkPlusFE/workplus-query-string#readme
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.workplusQueryString = global.workplusQueryString || {})));
}(this, (function (exports) { 'use strict';

var parse = function parse(str) {
    str = str || window.location.search;
    // Create an object with no prototype
    var set = Object.create(null);

    if (typeof str !== 'string') {
        return set;
    }
    str = str.trim().replace(/^\?/, '');
    if (!str) {
        return set;
    }

    str.split('&').forEach(function (param) {
        param = param.split('=');

        var key = param.shift();
        var val = param.length > 0 ? param.join('=') : undefined;

        key = decodeURIComponent(key);
        val = val === undefined ? null : decodeURIComponent(val);

        if (key) {
            set[key] = val;
        }
    });
    return set;
};

var stringify = function stringify() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return Object.keys(obj).sort().map(function (key) {
        var val = obj[key];
        if (val === undefined || val === null) {
            val = '';
        }
        return key + '=' + val;
    }).join('&');
};

var getParam = function getParam(key, str) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var search = decodeURIComponent(str || window.location.search);
    var result = search.substr(1).match(reg);
    if (result !== null) return unescape(result[2]);
    return null;
};

exports.parse = parse;
exports.stringify = stringify;
exports.getParam = getParam;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=workplus-query-string.js.map
