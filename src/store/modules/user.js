/*
 * @Author: xzl 
 * @Date: 2019-12-20 14:38:24 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-24 16:15:33
 */
import {getToken,setToken,removeToken} from '@/utils/auth';
import {adminLogin } from '@/api/admin';
const user = {
    state: {
        token: getToken()
    },
    mutations: {
    SET_TOKEN:(state,token)=>{
    state.token =token;
    }
    },
    actions:{
    Login({commit},userInfo){
            return new Promise((resolve, reject) => {
                adminLogin(userInfo).then(response => {
                    if(response.code == 200){
                    setToken(response.data.token);
                    commit('SET_TOKEN', response.data.token);
                    resolve()
                  }
                  }).catch(error => {
                    reject(error)
                  }) 
            
            })
        
          },

          
    
    }

}

export default user;