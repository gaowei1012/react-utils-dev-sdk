/**
 * 深拷贝
 * @param obj 传入一个对象
 * @returns string
 */
export const deepCopy = (obj: object) => {
  var result = Array.isArray(obj) ? [] : {}
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        result[key] = deepCopy(obj[key])
      } else {
        result[key] = obj[key]
      }
    }
  }
  return result
}

/**
 * 时间戳格式化工具
 * @param timestamp 时间戳
 * @returns hh:mm'ss"
 */
export const formatTimeSplit = (timestamp: number, type?: string) => {
  let hour: any = Math.floor(timestamp / 3600) >= 10 ? Math.floor(timestamp / 3600) : '0' + Math.floor(timestamp / 3600)
  timestamp -= 3600 * hour
  let min: any = Math.floor(timestamp / 60) >= 10 ? Math.floor(timestamp / 60) : '0' + Math.floor(timestamp / 60)
  timestamp -= 60 * min
  let sec = timestamp >= 10 ? timestamp : '0' + timestamp
  if (type && type == 'ms') {
    return min + "'" + sec + '"'
  } else {
    return hour + ':' + min + "'" + sec + '"'
  }
}

/**
 * 判断：当前传入的时间是否为今日
 * @param timestamp 时间戳
 * @returns bool
 */
export const isToday = (timestamp: number) => {
  const today = new Date()
  const targetDate = new Date(Number(timestamp))
  return today.getFullYear() === targetDate.getFullYear() && today.getMonth() === targetDate.getMonth() && today.getDate() === targetDate.getDate()
}

/**
 * 处理 param 转 url
 * @param data 传入对象 {id: '123', pageNum: 0, pageSize: 20}
 * @returns ?id=123&pageNum=0&pageSize=20
 */
export const obj2strUrl = (data: object) => {
  let query = ``
  for (const key in data) {
    if (data[key] !== null && data[key] !== '' && data[key] !== undefined) {
      if (query.length === 0) {
        query += `?${key}=${data[key]}`
      } else {
        query += `&${key}=${data[key]}`
      }
    }
  }
  return query
}

/**
 * 格式化星期，按照周一 到 周日 排序显示
 * @param data
 * @returns
 */
export const weeksSort = (data: any[]) => {
  if (data.length) {
    let arr: any = []
    if (data[0] == 1) {
      arr.push(...data.splice(1, data.length), 1)
    } else if (data[6] == 7) {
      data.pop()
      arr.push(7, ...data)
    } else if (data[0] == 1 && data[6] == 7) {
      let firstKey = data[0]
      let lastKey = data[6]
      arr(lastKey, ...data.splice(1, data.length - 2), firstKey)
    } else {
      arr.push(...data)
    }
    return arr
  } else {
    return []
  }
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0')
}

/**
 * 秒数转分钟
 * @param totalSeconds 秒数
 * @returns
 */
export const formatSeconds = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${padTo2Digits(seconds)}`
}

/**
 * 卡路里过万转为万
 * @param number 卡路里数
 * @returns
 */
export const convertNumberToUnit = (number: number, unit?: string) => {
  if (number < 100000) {
    return [number, unit ? unit : '千卡']
  } else if (number >= 100000 && number < 1000000) {
    const convertedNumber = (number / 10000).toFixed(2)
    return [convertedNumber, unit ? unit : '万千卡']
  } else {
    const convertedNumber = (number / 10000).toFixed(0)
    return [convertedNumber, unit ? unit : '万千卡']
  }
}
