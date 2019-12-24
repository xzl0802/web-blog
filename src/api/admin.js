/*
 * @Author: xzl 
 * @Date: 2019-12-12 14:27:23 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-24 13:41:47
 */

import  request  from '@/utils/request'

export function adminLogin(data){  //登录接口
    return request({
        url:"/admin/login",
        method:"POST",
        data:data
    })
 }

