import axios, { Method, AxiosResponse, AxiosHeaders } from 'axios'

type IDoRequestOptins = {
  url: string
  method: Method
  headers: AxiosHeaders
  data?: object
}

export const request = (options: IDoRequestOptins, __callback?: string) => {
  const { url, method, data, headers } = options
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      data: data ? data : null,
      headers: headers
        ? headers
        : {
            'content-type': 'application/json',
            Authorization: true
          }
    })
      .then((result: AxiosResponse<any, any>) => {
        resolve(result)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
