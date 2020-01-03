/*
 * @Author: xzl 
 * @Date: 2019-12-12 14:27:23 
 * @Last Modified by: xzl
 * @Last Modified time: 2020-01-03 16:03:25
 */

import  request  from '@/utils/request'

export function adminLogin(data){  //登录接口
    return request({
        url:"/admin/login",
        method:"POST",
        data:data
    })
 }

 export function getUserInfo(){  //获取用户信息
     return request({
         url:"/admin/user/info",
         method:"GET"
     })
 }

export  function getIpCounts(data){  //获取首页ip 访问统计
   return request({
    url:"/admin/count/ip",
    method:"POST",
    data:data 
   })

}


export  function getAllLabel(data){  //获取所有标签
    return request({
     url:"/admin/label/query",
     method:"POST",
     data:data 
    })
 
 }