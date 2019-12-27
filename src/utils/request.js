/*
 * @Author: xzl 
 * @Date: 2019-12-12 14:13:46 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-27 10:21:31
 */
import axios from 'axios';
import {message,Modal} from 'ant-design-vue';
import store from '@/store';
import { getToken } from '@/utils/auth';

const baseUrl = process.env.NODE_ENV === 'production' ? 'http://106.13.177.99:7001/' : 'http://localhost:7001';// 定义请求接口
const service = axios.create({
    baseURL:baseUrl,
    timeout:10000
  });

  // request拦截器
  service.interceptors.request.use(
    config => {
      if (store.getters.token) {
        config.headers['authorization'] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
      }
      return config
    },
    error => {
      // Do something with request error
      console.log(error) // for debug
      Promise.reject(error)
    }
  )
  
  // response 拦截器
  service.interceptors.response.use(
    response => {
      /**
       * code为非20000是抛错 可结合自己业务进行修改
       */
      const res = response.data;
      if (res.code !== 200) {
          //非法请求  50012:Token登录过期;
        if (res.code === 50014 || res.code ===50012 ) {
        return Modal.confirm({
            title: res.message,
            content: h => <div style="color:red;">登录过期,请重新登录</div>,
            okText: '退出',
            cancelText: '取消',
            onOk() {
              store.dispatch('LoginOut').then(() => {
                location.reload() // 为了重新实例化vue-router对象 避免bug
              })
            },
            onCancel() {
              
            },
          });
        }
        message.warning('提示：'+res.message);
        return Promise.reject('error')
      } else {
        return response.data
      }
    },
    error => {
      message.error('错误：'+error);  //提示请求错误
      console.log('err' + error) // for debug
      return Promise.reject(error)
    }
  )
  
  export default service
  