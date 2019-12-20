/*
 * @Author: xzl 
 * @Date: 2019-12-12 14:27:23 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-20 14:20:20
 */

import  request  from '@/utils/request'

export function countIp(data){  //登录接口
    return request({
        url:"/admin/login",
        methods:"post",
        data:data
    })
 }

