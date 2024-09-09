"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
var axios_1 = __importDefault(require("axios"));
var request = function (options, __callback) {
    var url = options.url, method = options.method, data = options.data, headers = options.headers;
    return new Promise(function (resolve, reject) {
        (0, axios_1.default)({
            url: url,
            method: method,
            data: data ? data : null,
            headers: headers
                ? headers
                : {
                    'content-type': 'application/json',
                    Authorization: true
                }
        })
            .then(function (result) {
            resolve(result);
        })
            .catch(function (error) {
            reject(error);
        });
    });
};
exports.request = request;
