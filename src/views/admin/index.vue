<template>
  <div class="main">
    <a-layout id="components-layout-demo-custom-trigger">
      <LeftSide />
      <a-layout>
        <AdminHeader />
        <a-layout-content class="layoutContent">
          <a-card class="layoutContent-card" :bodyStyle="{ marginTop: '5px',padding:'10px' }">
            <Breadcrumb slot="title" />
            <div class="contentMain">
              <router-view></router-view>
            </div>
          </a-card>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import LeftSide from "@/components/admin/leftSide"; //左侧菜单
import AdminHeader from "@/components/admin/header"; //头部
import Breadcrumb from "@/components/admin/breadcrumb"; // 面包屑
export default {
  name: "index",
  components: { LeftSide, AdminHeader, Breadcrumb }
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
}
#components-layout-demo-custom-trigger {
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
.layoutContent {
  margin: 10px;
  padding: 10px;
  background: #fff;
  height: 100vh;
}
.layoutContent-card{
  height: 100%;
  display: flex;
  display: -webkit-flex;
flex-direction: column;
}

</style>
<style>
  @import '~@/assets/css/public.css'; /*引入公共样式*/
</style>