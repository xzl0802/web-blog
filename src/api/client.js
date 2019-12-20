/*
 * @Author: xzl 
 * @Date: 2019-12-12 14:27:17 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-20 14:18:37
 */


import  request  from '@/utils/request'
export function countIp(data){  //访问IP统计
    return request({
        url:"/count/ip",
        methods:"post",
        data:data
    })
 }


