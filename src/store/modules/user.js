/*
 * @Author: xzl 
 * @Date: 2019-12-20 14:38:24 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-23 15:03:08
 */
import {getToken,setToken,removeToken} from '@/utils/auth';
const user = {
    state: {
        token: getToken()
    },
    mutations: {
    SET_TOKEN:(state,token)=>{
    state.token =token;
    }
    },
    actions: {
    Login:()=>{
        
    }
    
    }

}

export default user;