/*
 * @Author: xzl 
 * @Date: 2019-12-20 15:23:57 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-26 16:30:40
 */
const getters={
  token:state =>state.user.token,
  collapsed:state =>state.app.collapsed,
  role:state =>state.user.role,
  name:state =>state.app.name
}

export default getters;