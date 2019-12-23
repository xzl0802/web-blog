/*
 * @Author: xzl 
 * @Date: 2019-12-17 13:40:08 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-23 15:02:03
 */

import Vue from  "vue";
import Vuex from 'vuex';
import user from './modules/user'
const store  = new Vuex.Store({
   modules:{
      user      
 },
   getters 
})

export default store;