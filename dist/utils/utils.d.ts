/**
 * 字符串转为base64
 * @param str 传入字符串
 * @returns base64
 */
export declare const encode: (str: string) => string;
/**
 * 获取当前时间
 * @returns 时间戳
 */
export declare const getTimeNow: () => {
    startTime: number;
    endTime: number;
};
/**
 * 计算连个日期之间的天数
 * @param date1 开始时间
 * @param date2 结束时间
 * @returns
 */
export declare const getDistanceDays: (endTime: string, startTime: string) => number;
