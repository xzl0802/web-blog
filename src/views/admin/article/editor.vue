<template>
  <div>
   <mavon-editor v-model="value"/>

  </div>
</template>
<script>
import Vue from "vue";
import mavonEditor from "mavon-editor"; //引入markDowm 编辑器
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);
export default {
  data(){
      return{
          value:""
      }
  }

};
</script>
<style scoped>
</style>