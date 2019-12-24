/*
 * @Author: xzl 
 * @Date: 2019-12-20 15:23:57 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-24 16:21:19
 */
const getters={
  token:state =>state.user.token,
  collapsed:state =>state.app.collapsed
}

export default getters;