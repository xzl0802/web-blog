<template>
    <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="isCollapsed ? 'menu-unfold' : 'menu-fold'"
          @click="changeCollapsed"
        />
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
    }
    },
    methods:{
     changeCollapsed(){ //更改侧边栏状态
       this.$store.dispatch('changeCollapsedVal', !this.$store.state.app.collapsed)
     }
    },
    mounted(){
    
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
</style>