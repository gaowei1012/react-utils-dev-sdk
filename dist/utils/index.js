"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAddressName = exports.verifyPhone = exports.randomUUID = exports.convertNumberToUnit = exports.formatSeconds = exports.weeksSort = exports.obj2strUrl = exports.isToday = exports.formatTimeSplit = exports.deepCopy = void 0;
exports.removeEmptyValues = removeEmptyValues;
/**
 * 深拷贝
 * @param obj 传入一个对象
 * @returns string
 */
var deepCopy = function (obj) {
    var result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                result[key] = (0, exports.deepCopy)(obj[key]);
            }
            else {
                result[key] = obj[key];
            }
        }
    }
    return result;
};
exports.deepCopy = deepCopy;
/**
 * 时间戳格式化工具
 * @param timestamp 时间戳
 * @returns hh:mm'ss"
 */
var formatTimeSplit = function (timestamp, type) {
    var hour = Math.floor(timestamp / 3600) >= 10 ? Math.floor(timestamp / 3600) : '0' + Math.floor(timestamp / 3600);
    timestamp -= 3600 * hour;
    var min = Math.floor(timestamp / 60) >= 10 ? Math.floor(timestamp / 60) : '0' + Math.floor(timestamp / 60);
    timestamp -= 60 * min;
    var sec = timestamp >= 10 ? timestamp : '0' + timestamp;
    if (type && type == 'ms') {
        return min + "'" + sec + '"';
    }
    else {
        return hour + ':' + min + "'" + sec + '"';
    }
};
exports.formatTimeSplit = formatTimeSplit;
/**
 * 判断：当前传入的时间是否为今日
 * @param timestamp 时间戳
 * @returns bool
 */
var isToday = function (timestamp) {
    var today = new Date();
    var targetDate = new Date(Number(timestamp));
    return today.getFullYear() === targetDate.getFullYear() && today.getMonth() === targetDate.getMonth() && today.getDate() === targetDate.getDate();
};
exports.isToday = isToday;
/**
 * 处理 param 转 url
 * @param data 传入对象 {id: '123', pageNum: 0, pageSize: 20}
 * @returns ?id=123&pageNum=0&pageSize=20
 */
var obj2strUrl = function (data) {
    var query = "";
    for (var key in data) {
        if (data[key] !== null && data[key] !== '' && data[key] !== undefined) {
            if (query.length === 0) {
                query += "?".concat(key, "=").concat(data[key]);
            }
            else {
                query += "&".concat(key, "=").concat(data[key]);
            }
        }
    }
    return query;
};
exports.obj2strUrl = obj2strUrl;
/**
 * 格式化星期，按照周一 到 周日 排序显示
 * @param data
 * @returns
 */
var weeksSort = function (data) {
    if (data.length) {
        var arr = [];
        if (data[0] == 1) {
            arr.push.apply(arr, __spreadArray(__spreadArray([], data.splice(1, data.length), false), [1], false));
        }
        else if (data[6] == 7) {
            data.pop();
            arr.push.apply(arr, __spreadArray([7], data, false));
        }
        else if (data[0] == 1 && data[6] == 7) {
            var firstKey = data[0];
            var lastKey = data[6];
            arr.apply(void 0, __spreadArray(__spreadArray([lastKey], data.splice(1, data.length - 2), false), [firstKey], false));
        }
        else {
            arr.push.apply(arr, data);
        }
        return arr;
    }
    else {
        return [];
    }
};
exports.weeksSort = weeksSort;
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
/**
 * 秒数转分钟
 * @param totalSeconds 秒数
 * @returns
 */
var formatSeconds = function (totalSeconds) {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    return "".concat(minutes, ":").concat(padTo2Digits(seconds));
};
exports.formatSeconds = formatSeconds;
/**
 * 卡路里过万转为万
 * @param number 卡路里数
 * @returns
 */
var convertNumberToUnit = function (number, unit) {
    if (number < 100000) {
        return [number, unit ? unit : '千卡'];
    }
    else if (number >= 100000 && number < 1000000) {
        var convertedNumber = (number / 10000).toFixed(2);
        return [convertedNumber, unit ? unit : '万千卡'];
    }
    else {
        var convertedNumber = (number / 10000).toFixed(0);
        return [convertedNumber, unit ? unit : '万千卡'];
    }
};
exports.convertNumberToUnit = convertNumberToUnit;
/**
 * 去除对象中的假值，空值
 * @param obj {a: '', b: '2'}
 * @returns { b: '2' }
 */
function removeEmptyValues(obj) {
    return Object.keys(obj).reduce(function (acc, key) {
        if (obj[key] !== 0 && obj[key] !== null && obj[key] !== undefined && !(typeof obj[key] === 'object' && Object.keys(obj[key]).length === 0)) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}
/**
 * 生成随机字符串
 * @param hex 字典
 * @returns
 */
var randomUUID = function (length, hex) {
    var s = [];
    var _length = 36;
    var hexDigits = '0123456789abcdef';
    if (length) {
        _length = length;
    }
    if (hex) {
        hexDigits = hex;
    }
    for (var i = 0; i < _length; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-';
    var uuid = s.join('');
    return uuid;
};
exports.randomUUID = randomUUID;
/**
 * 检验手机格式
 * @param mobile 需要校验手机号
 * @returns
 */
var verifyPhone = function (mobile) {
    // 校验手机号
    var rage = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    var isMobile = rage.test(mobile);
    if (!isMobile) {
        return true;
    }
    else {
        return false;
    }
};
exports.verifyPhone = verifyPhone;
/**
 * 校验收货地址名称
 * 不能包含特殊字符
 * @param address 地址信息
 * @returns
 */
var verifyAddressName = function (address) {
    var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im, regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
    if (regCn.test(address) || regEn.test(address)) {
        return true;
    }
    else {
        return false;
    }
};
exports.verifyAddressName = verifyAddressName;
