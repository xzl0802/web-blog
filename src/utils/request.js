/*
 * @Author: xzl 
 * @Date: 2019-12-12 14:13:46 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-12 14:26:57
 */
import axios from 'axios';
 
const service = axios.create({
    baseURL:  process.env.baseURL,   // 请求接口地址
    timeout:50000
  });

  // 添加请求拦截器
  service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default service