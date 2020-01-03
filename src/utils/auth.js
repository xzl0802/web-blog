/*
 * @Author: xzl 
 * @Date: 2019-12-16 14:45:40 
 * @Last Modified by: xzl
 * @Last Modified time: 2020-01-03 10:23:17
 */

 import jsCookie from 'js-cookie';
  const tokenName ='xzl_blog'
  const inHalfADay = 0.5;  //cookie 过期时间12hours

 export function getToken(){  //获取token;
  return jsCookie.get(tokenName);
 }
 export function setToken(val){  //设置token;
   jsCookie.set(tokenName,val,{
    expires: inHalfADay})
   }
 
 export function removeToken(){  //删除token;
    jsCookie.remove(tokenName);
  }