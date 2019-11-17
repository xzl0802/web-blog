
//路由管理
import Vue from 'vue';
import  Router from  'vue-router';

Vue.use(Router)

export const routerMap  =[   {
    path: '/404',
    name: "404",
    component: () =>
        import ('@/views/404'),
    hidden: true
},
    {path:"/",
    name:"index",
    component:()=>import ('@/views/client/index')}
]

export  default  new Router(
    {
        // mode: 'history', //后端支持可开

        routes: routerMap
    }
)