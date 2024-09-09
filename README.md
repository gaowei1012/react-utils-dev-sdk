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
