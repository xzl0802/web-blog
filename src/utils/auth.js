/*
 * @Author: xzl 
 * @Date: 2019-12-16 14:45:40 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-16 15:42:44
 */

 import jsCookie from 'js-cookie';
  const tokenName ='xzl_blog'

 export function getToken(){  //获取token;
   jsCookie.get(tokenName);
 }
 export function setToken(val){  //设置token;
   jsCookie.set(tokenName,val);
 }
 
 export function removeToken(){  //删除token;
    jsCookie.remove(tokenName);
  }