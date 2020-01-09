//路由管理
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)
import clientLayout from '@/views/client/index'; //首页布局
import adminLayout from '@/views/admin/index'; //管理端布局


export  const baseRoutes=[{
    path: '/404',
    name: "404",
    component: () =>
        import('@/views/404'),
    hidden: true,
    meta: { title: '404', icon: 'home', type: 'common' },
}]


export const  indexRouteMap =[{
        path: "/",
        component: clientLayout,
        hidden: true,
        meta: { title: 'dashboard', icon: 'home', type: 'index' },
        children: [{
            path: "/",
            name: "首页",
            hidden: true, 
            component: () => import("@/views/client/list"),
            meta: { title: 'dashboard', icon: 'home', type: 'index' }
        }]
    }]
export const adminRouterMap =[{
        path: "/admin",
        component: adminLayout,
        redirect: '/admin/index',
        meta: { title: 'admin', icon: 'home',  breadcrumb:false, type: 'admin',index:true },
        children: [{
            path: "/admin/index",
            hidden: false,
            component: () => import("@/views/admin/dashboard/index"),
            meta: { title: 'dashboard', icon: 'home', type: 'admin' }
        }]},
        {
         path:"article",
         component: adminLayout,
         redirect:"/admin/article/list",
         hidden:false,
         meta: { title: '文章管理', icon: 'read', type: 'admin' },
         children:[
             {
                 path:"/admin/article/list",
                 component:( )=> import("@/views/admin/article/list"),
                 hidden: false,
                 meta:{title:"文章管理",icon: 'read', type: 'admin'}
             },
             {
                path:"/admin/article/editor",
                component:( )=> import("@/views/admin/article/editor"),
                hidden:true,
                meta:{title:"文章新增/编辑",icon: 'read', type: 'admin'}  
             },
             {
                path:"/admin/article/label",
                component:( )=> import("@/views/admin/article/label"),
                hidden: false,
                meta:{title:"标签管理",icon: 'tags', type: 'admin'}  
             }
         ]   
        },
        {
         path:"system",
         component: adminLayout,
         redirect:"/admin/system/access",
         hidden:false,
         meta: { title: '系统管理', icon: 'setting', type: 'admin' },
         children:[
             {
                 path:"/admin/system/access",
                 component:( )=> import("@/views/admin/system/log"),
                 hidden: false,
                 meta:{title:"访问统计",icon: 'read', type: 'admin'}
             },
         
             {
                path:"/admin/system/user",
                component:( )=> import("@/views/admin/article/label"),
                hidden: false,
                meta:{title:"用户管理",icon: 'tags', type: 'admin'}  
             }
         ]   
        }
        
    ,
     {
        path: "/admin/login",
        name: "login",
        component: () => import("@/views/admin/login/login"),
        hidden: true,
        meta:{title:"标签管理",icon: 'tags', type: 'admin'}
    }
]
const routesMap = baseRoutes.concat(indexRouteMap, adminRouterMap);

export default new Router({
    // mode: 'history', //后端支持可开

    routes: routesMap
})

// //解决路由跳转问题
// const routerPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }