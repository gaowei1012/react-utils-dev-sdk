"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistanceDays = exports.getTimeNow = exports.encode = void 0;
/**
 * 字符串转为base64
 * @param str 传入字符串
 * @returns base64
 */
var encode = function (str) {
    var c1, c2, c3;
    var base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var i = 0, len = str.length, string = '';
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            string += base64EncodeChars.charAt(c1 >> 2);
            string += base64EncodeChars.charAt((c1 & 0x3) << 4);
            string += '==';
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            string += base64EncodeChars.charAt(c1 >> 2);
            string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
            string += base64EncodeChars.charAt((c2 & 0xf) << 2);
            string += '=';
            break;
        }
        c3 = str.charCodeAt(i++);
        string += base64EncodeChars.charAt(c1 >> 2);
        string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
        string += base64EncodeChars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6));
        string += base64EncodeChars.charAt(c3 & 0x3f);
    }
    return string;
};
exports.encode = encode;
/**
 * 获取当前时间
 * @returns 时间戳
 */
var getTimeNow = function () {
    // 获取当前日期
    var currentDate = new Date();
    // 设置时间为零点
    currentDate.setHours(0, 0, 0, 0);
    // 获取零点时间的时间戳（以毫秒为单位）
    var _timestamp = currentDate.getTime();
    var startTime = 0, endTime = 0;
    var oneDay = 60 * 60 * 24 * 1000;
    startTime = _timestamp;
    endTime = _timestamp + oneDay;
    return {
        startTime: startTime,
        endTime: endTime
    };
};
exports.getTimeNow = getTimeNow;
// 指定时间转换为时间戳
function toTimeStamp(dateString) {
    // dateString例如:'2022-03-05'
    // 例如返回:1646611200000
    var date = new Date(dateString);
    return date - 0;
}
/**
 * 计算连个日期之间的天数
 * @param date1 开始时间
 * @param date2 结束时间
 * @returns
 */
var getDistanceDays = function (endTime, startTime) {
    // date1例如:'2022-03-05',date2例如:'2022-03-06'
    var date1_timeStamp = toTimeStamp(endTime);
    var date2_timeStamp = toTimeStamp(startTime);
    var max = '', min = '';
    if (date1_timeStamp > date2_timeStamp) {
        max = date1_timeStamp;
        min = date2_timeStamp;
    }
    else {
        max = date2_timeStamp;
        min = date1_timeStamp;
    }
    // 例如返回:'1'
    return (max - min) / (24 * 60 * 60 * 1000) + 1;
};
exports.getDistanceDays = getDistanceDays;
