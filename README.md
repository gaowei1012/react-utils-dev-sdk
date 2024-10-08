## react-utils-dev-sdk

## react 项目中常用的工具方法

```shell
npm install react-utils-dev-sdk
```

> 如果在国内网络阻塞，使用 `yarn` 安装 

```shell
yarn add react-utils-dev-sdk
```

## 常用方法

- deepCopy 深拷贝

``` ts
const newObj = deepCopy({a: 1, b: 2})
// {a: 1, b: 2}
```

- formatTimeSplit 时间戳格式化工具

```ts
const date = formatTimeSplit(1725861630886)
// 14:00:00
```

- isToday 判断是否为今日

```ts
const toady = isToday(1725861630886)
// true
```

- obj2strUrl 处理 param 转 url (入参转换)

```ts
const url = obj2strUrl({id:'123', pageNum: 0, pageSize: 20})
// ?id=123&pageNum=0&pageSize=20
```

- removeEmptyValues 去除对象中的假值

```ts
const obj = removeEmptyValues({a: '', b: '2'})
// { b: '2' }
```

- request 方法

```ts
export const getList = () => {
    return reqeust({
        url: '/list',
        method: 'GET'
    }, 'getList')
}
```

- verifyPhone 校验手机号

```ts
const verify = verifyPhone(13655712211)
// true
```

- verifyAddressName 校验地址（不能包含特殊字符）

```ts
const verify = verifyAddressName('详细地址')
// true
```


## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=react-utils-dev-sdk/react-utils-dev-sdk&type=Date)](https://star-history.com/#react-utils-dev-sdk/react-utils-dev-sdk&Date)
