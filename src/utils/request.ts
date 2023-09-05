import axios from 'axios'
import { ElMessage } from 'element-plus'
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000
})
// 请求拦截器
request.interceptors.request.use(config => {
  return config
})
// 相应拦截器
request.interceptors.response.use(response => {
  return response.data
},
  error => {
    let msg = '';
    const { status } = error.response;
    switch (status) {
      case 401:
        msg = "token过期";
        break;
      case 403:
        msg = '无权访问';
        break;
      case 404:
        msg = "请求地址错误";
        break;
      case 500:
        msg = "服务器出现问题";
        break;
      default:
        msg = "网络错误";
    }
    ElMessage({
      type: 'error',
      message: msg
    })
    return Promise.reject(error);
  }
)
export default request