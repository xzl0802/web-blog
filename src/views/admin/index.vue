<template>
  <div class="main">
    <a-layout id="components-layout-demo-custom-trigger">
      <LeftSide />
      <a-layout>
        <AdminHeader />
        <a-layout-content class="layoutContent">
          <Breadcrumb />
          <div class="contentMain">
         <router-view></router-view>
          </div>
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
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
}
.contentMain {
  width: 100%;
   margin:   10px 0 0 0;
  flex-grow: 1;
}
</style>
