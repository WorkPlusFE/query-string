/*!
 * workplus-query-string.js v1.0.6
 * (c) 2016 Hejx
 * Released under the MIT License.
 * https://github.com/WorkPlusFE/workplus-query-string#readme
 */

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

    str = decodeURIComponent(str);
    str.split('&').forEach(function (param) {
        param = param.split('=');
        var key = param[0];
        set[key] = param[1] || null;
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

export { parse, stringify, getParam };
//# sourceMappingURL=workplus-query-string.mjs.map
