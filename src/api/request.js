import axios from "axios"

// 创建一个axios实例
 const requests = axios.create({
  //配置对象
  baseURL:'/api',
  timeout:5000
});

//请求拦截器
requests.interceptors.request.use((config) =>{
  return config;
})

//响应拦截器
requests.interceptors.response.use((res)=>{
  // 成功的回调函数
  return res.data;
},(error)=>{
  return Promise.reject(new Error('faile'))
})

// //对外暴露
export default requests
