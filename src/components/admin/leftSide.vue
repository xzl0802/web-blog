<template>
    <div class="leftSide">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed" class="leftSideMain">
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>  
    </div>
</template>
<script>
export default {
     name:"LeftSide",
     data(){
         return{
         collapsed:false
         }
     },
     methods:{

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