/*
 * @Author: xzl 
 * @Date: 2019-12-10 16:21:54 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-16 14:34:20
 */
//路由跳转权限控制
import router from  '@/router/index'
  router.beforeEach((to, from, next) => {
     let beforePath =to.path;
     if(beforePath.indexOf("/admin") > -1){ //管理端登录拦截
      
     }
     else{
       next();//当为首页时不进行登录拦截
     }
  })