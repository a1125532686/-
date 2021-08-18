import axios from 'axios'
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const request = axios.create({
  //公共地址前缀
  baseURL:"/api"
})
//请求拦截器：发送请求之前触发
request.interceptors.request.use(
  (config)=>{
    NProgress.start()
    return config
  }
)
//响应拦截器：响应回来之后触发
request.interceptors.response.use(
  (response)=>{
    NProgress.done();
    if(response.data.code === 200){
      //功能成功
      return response.data.data
    }
    //功能失败
    return Promise.reject(response.data.message || '未知错误')
  },
  (error)=>{
    // 请求失败
    return Promise.reject(error)
  }
)

export default request