/**
 * 深拷贝
 * @param obj 传入一个对象
 * @returns string
 */
export declare const deepCopy: (obj: object) => {};
/**
 * 时间戳格式化工具
 * @param timestamp 时间戳
 * @returns hh:mm'ss"
 */
export declare const formatTimeSplit: (timestamp: number, type?: string) => string;
/**
 * 判断：当前传入的时间是否为今日
 * @param timestamp 时间戳
 * @returns bool
 */
export declare const isToday: (timestamp: number) => boolean;
/**
 * 处理 param 转 url
 * @param data 传入对象 {id: '123', pageNum: 0, pageSize: 20}
 * @returns ?id=123&pageNum=0&pageSize=20
 */
export declare const obj2strUrl: (data: object) => string;
/**
 * 格式化星期，按照周一 到 周日 排序显示
 * @param data
 * @returns
 */
export declare const weeksSort: (data: any[]) => any;
/**
 * 秒数转分钟
 * @param totalSeconds 秒数
 * @returns
 */
export declare const formatSeconds: (totalSeconds: number) => string;
/**
 * 卡路里过万转为万
 * @param number 卡路里数
 * @returns
 */
export declare const convertNumberToUnit: (number: number, unit?: string) => (string | number)[];
/**
 * 去除对象中的假值，空值
 * @param obj {a: '', b: '2'}
 * @returns { b: '2' }
 */
export declare function removeEmptyValues(obj: object): {};
/**
 * 生成随机字符串
 * @param hex 字典
 * @returns
 */
export declare const randomUUID: (length?: number, hex?: string) => any;
/**
 * 检验手机格式
 * @param mobile 需要校验手机号
 * @returns
 */
export declare const verifyPhone: (mobile: string) => boolean;
/**
 * 校验收货地址名称
 * 不能包含特殊字符
 * @param address 地址信息
 * @returns
 */
export declare const verifyAddressName: (address: string) => boolean;
