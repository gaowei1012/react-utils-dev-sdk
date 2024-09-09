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
exports.convertNumberToUnit = exports.formatSeconds = exports.weeksSort = exports.obj2strUrl = exports.isToday = exports.formatTimeSplit = exports.deepCopy = void 0;
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
