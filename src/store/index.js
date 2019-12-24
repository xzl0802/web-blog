/*
 * @Author: xzl 
 * @Date: 2019-12-17 13:40:08 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-24 15:19:29
 */
import Vue from 'vue'
import Vuex from 'vuex';
import user from './modules/user';
import  app  from './modules/app';
import getters from './getters';


Vue.use(Vuex);
const store  = new Vuex.Store({
   modules:{
      user,
      app      
 },
 getters
})

export default store;