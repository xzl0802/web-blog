<template>
    <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="isCollapsed ? 'menu-unfold' : 'menu-fold'"
          @click="changeCollapsed"
        />
        <div class="userInfo">
          <a-dropdown>
    <a class="ant-dropdown-link" href="#"> {{getName}} <a-icon type="down" /> </a>
    <a-menu slot="overlay">
      <a-menu-item>
        <a href="javascript:;">个人信息</a>
      </a-menu-item>
      <a-menu-item @click="fedLoginOut">
        <a href="javascript:;">退出</a>
      </a-menu-item>
    
    </a-menu>
  </a-dropdown>
        </div>
      </a-layout-header>  
</template>
<script>
export default {
    name:"AdminHeader",
    data(){
        return{
         
        }
    },
    computed:{
    isCollapsed(){
      return this.$store.state.app.collapsed  
    },
    getName(){
      console.log(this.$store.state.user.name)
      return this.$store.state.user.name;
    }
    },
    methods:{
     changeCollapsed(){ //更改侧边栏状态
       this.$store.dispatch('changeCollapsedVal', !this.$store.state.app.collapsed)
     },
     fedLoginOut(){ //退出登录点击事件
           this.$store.dispatch('LoginOut').then(()=>{
          this.$router.push({path: '/admin/login'})
           })
     }
    },
    mounted(){
    this.$store.dispatch('GetUserInfo');
    }
}
</script>
<style scoped>
.trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .userInfo{
  width: 80px;
  display: inline-block;
  float: right;
  }
</style>