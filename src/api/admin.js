/*
 * @Author: xzl 
 * @Date: 2019-12-12 14:27:23 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-24 11:13:17
 */

import  request  from '@/utils/request'

export function adminLogin(data){  //登录接口
    return request({
        url:"/admin/login",
        methods:"post",
        data:data
    })
 }

