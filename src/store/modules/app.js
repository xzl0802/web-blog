/*
 * @Author: xzl 
 * @Date: 2019-12-24 15:18:12 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-24 16:18:51
 */

 const app={
    state:{
        collapsed:false
    },
    mutations:{
     SET_COLLAPSED:(state,collapsed)=>{
            state.collapsed =collapsed;
     }
    },
    actions:{
     changeCollapsedVal(context,val){ //修改侧边栏是否关闭的值
        context.commit('SET_COLLAPSED', val);
     }
    }

    
 }

 export default app;