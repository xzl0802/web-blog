import Vue from 'vue'
import Antd from 'ant-design-vue';   //引入 ant -design vue
import App from './App';
import 'ant-design-vue/dist/antd.css';
import animated from 'animate.css'
import router from  './routers/index'
Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(animated);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
