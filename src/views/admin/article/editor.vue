<template>
  <div>
    <div class="otherType">
   <a-form
    :form="form"
  >
    <a-form-item
      label="标题"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
      />
    </a-form-item>
    <a-form-item
      label="标签"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-select
        v-decorator="[
          'gender',
          {rules: [{ required: true, message: 'Please select your gender!' }]}
        ]"
        placeholder="Select a option and change input text above"
        @change="handleSelectChange"
      >
        <a-select-option value="male">
          male
        </a-select-option>
        <a-select-option value="female">
          female
        </a-select-option>
      </a-select>
    </a-form-item>
      </a-form>
    </div>
    <div  class="mavonEdit">
   <mavon-editor v-model="value"/></div>

  </div>
</template>
<script>
import Vue from "vue";
import mavonEditor from "mavon-editor"; //引入markDowm 编辑器
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);

import  {getAllLabels} from  '@/api/admin';  //引入接口
export default {
  data(){
      return{
          value:""
      }
  },
  methods: {
    getAllLabelsFun(){ //获取所用的标签

    }
  },


};
</script>
<style scoped>

.mavonEdit{
  z-index: 1;
}
</style>