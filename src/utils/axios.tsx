import axios from 'axios'
import Qs from 'qs';

const $axios = axios.create({
  // 设置超时时间
  timeout: 30000,
  // 基础url，会在请求url中自动添加前置链接
  baseURL: ""
})
// 在全局请求和响应拦截器中添加请求状态
let loading = null

// 请求拦截器
$axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
$axios.interceptors.response.use(
  response => {
    const code = response.status
    if ((code >= 200 && code < 300) || code === 304) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    console.log(error)
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回401 清除token信息并跳转到登陆页面
          break
        case 404:
          break
        default:
      }
    } else {
      // 请求超时或者网络有问题
      if (error.message.includes('timeout')) {
        // Message.error('请求超时！请检查网络是否正常')
      } else {
        // Message.error('请求失败，请检查网络是否已连接')
      }
    }
    return Promise.reject(error)
  }
)

// get，post请求方法
export default {
  post(url:string, data:object) {
    return $axios({
      method: 'post',
      url,
      data: Qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },
  get(url:string, params:object) {
    return $axios({
      method: 'get',
      url,
      params
    })
  }
}