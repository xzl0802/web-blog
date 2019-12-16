/*
 * @Author: xzl 
 * @Date: 2019-12-10 16:21:54 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-16 16:13:30
 */
//路由跳转权限控制
import router from  '@/router/index';
import {getToken} from '@/utils/auth';
const whiteList= ['/admin/login']; //白名单
  router.beforeEach((to, from, next) => {
     let beforePath =to.path;
     let authToken  =getToken();
     if(beforePath.indexOf("/admin") > -1){ //管理端登录拦截
      if(authToken){ //当登录token 存在时
        if (to.path === '/admin/login') {  //当已登录重定向到admin
          next({ path: '/admin' })
        }  
      }
      else{
        if(whiteList.indexOf(beforePath) >-1){  //当前路由存在于白名单时放行
        next();
        }
        else{
        next(`/admin/login?redirect=${to.path}`) // 否则全部重定向到登录页
        }
      }


     }
     else{
       next();//当为首页时不进行登录拦截
     }
  })
  router.afterEach((to, from) => {
    // to and from are both route objects.
  })