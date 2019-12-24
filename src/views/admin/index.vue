<template>
    <div class="main">
       <a-layout id="components-layout-demo-custom-trigger">
       <LeftSide/>
       <a-layout>
          <AdminHeader/>
          <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
     <router-view/> 
      </a-layout-content> 
           </a-layout> 
       </a-layout>   
    </div>
</template>

<script>
import  LeftSide from '@/components/admin/leftSide';//左侧菜单
import  AdminHeader  from '@/components/admin/header';//头部
    export default {
        name: "index",
        components:{LeftSide,AdminHeader}
    }
</script>

<style scoped>
.main{
    width: 100%;
    height: 100vh;
}
#components-layout-demo-custom-trigger{
    width: 100%;
    height: 100%;
}
 #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }


</style>