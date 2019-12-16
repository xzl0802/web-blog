<template>
    <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>  
</template>
<script>
export default {
    name:"AdminHeader",
    data(){
        return{
          collapsed:false  
        }
    }
}
</script>
<style scoped>

</style>