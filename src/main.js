import Vue from 'vue'
import Antd from 'ant-design-vue';   //引入 ant -design vue
import App from './App';
import 'ant-design-vue/dist/antd.css';
// import animated from 'animate.css'
import router from  '@/router'
import store  from  './store'
import "@/utils/permition"


Vue.use(Antd);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
