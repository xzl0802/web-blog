/*
 * @Author: xzl 
 * @Date: 2019-12-20 14:38:24 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-26 16:32:50
 */
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth';
import {
  adminLogin,getUserInfo
} from '@/api/admin';
const user = {
  state: {
    token: getToken(),
    role: "",
    name: "",
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_ROLE: (state, role) => {
      state.role = role;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
  },
  actions: {
    Login({
      commit
    }, userInfo) { //登录
      return new Promise((resolve, reject) => {
        adminLogin(userInfo).then(response => {
          if (response.code == 200) {
            setToken(response.data.token);
            commit('SET_TOKEN', response.data.token);
            resolve()
          }
        }).catch(error => {
          reject(error)
        })

      })

    },
    LoginOut({
      commit
    }, userInfo) { //登出
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '');
        removeToken();
        resolve();

      })

    },
    GetUserInfo({commit}){  //获取用户信息
      return  new Promise((resolve,reject)=>{
        getUserInfo().then(response => {
          if (response.code == 200) {    
            commit('SET_ROLE', response.data.role);
            commit('SET_NAME', response.data.name);
            resolve()
          }
        }).catch(error => {
          reject(error)
        }) 
      })
    }



  }

}

export default user;