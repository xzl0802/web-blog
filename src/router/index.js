//路由管理
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)
import clientLayout from '@/views/client/index'; //首页布局
import adminLayout from '@/views/admin/index'; //管理端布局
export const routerMap = [{
        path: '/404',
        name: "404",
        component: () =>
            import('@/views/404'),
        hidden: true
    },
    {
        path: "/",
        component: clientLayout,
        hidden: true,
        children: [{
            path: "/",
            name: "首页",
            component: () => import("@/views/client/list")
        }]
    }, {
        path: "/admin",
        component: adminLayout,
        redirect: '/admin/index',
        children: [{
            path: "/admin/index",
            name: "dashborad",
            component: () => import("@/views/admin/dashboard/index")
        }]
    },
     {
        path: "/admin/login",
        name: "login",
        component: () => import("@/views/admin/login/login"),
        hidden: true
    }
]

export default new Router({
    // mode: 'history', //后端支持可开

    routes: routerMap
})