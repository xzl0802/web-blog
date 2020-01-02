<template>
    <div class="leftSide">
    <a-layout-sider :trigger="null" collapsible v-model="isCollapsed" class="leftSideMain">
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="[1]"  :defaultOpenKeys="[1]">
        <template v-for="(item,index) in routes">
        <a-menu-item v-show="!item.hidden"  v-if="!item.children" :key="index+1"  @click="menuClick(item.path)">
           <a-icon :type=" item.meta.icon" />
          <span>{{item.meta.title}}</span>
          <router-link :to="item.path"></router-link>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="index+1" />
      </template>
      </a-menu>
    </a-layout-sider>  
    </div>
</template>
<script>
import SubMenu from './SubMenu';
export default {
     name:"LeftSide",
       components: {
      'sub-menu': SubMenu,
    },
     data(){
         return{
     
         }
     },
      computed:{
       isCollapsed(){
       return this.$store.state.app.collapsed;
     },
      routes(){
       let routes =this.$router.options.routes;  //管理端界面展示路由
       let renderRoutes =[];
       if(routes.length>0){
         routes.forEach(element => {
           if(element.meta.type === 'admin'){  //获取管理端展示路由
             if(element.meta.index){ //默认首页
            renderRoutes.push(element.children[0]); 
             }
            else{
            renderRoutes.push(element); 
            }
         
           
           }
         });
       } 
       console.log(renderRoutes,'1')
        return renderRoutes;
      }
  },
     methods:{
      menuClick(e){ //路由跳转
      this.$router.push(e);
      }
     },
     mounted(){
  
     }
}
</script>
<style scoped>
.leftSide{
    height: 100%;
}
.leftSideMain{
    height: 100%;  
}
 .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>