<template>
<div class="header_content">
<menuSide/>
</div>

</template>
<script>
import menuSide   from  './menuSide';
export default {
   name: 'headClient',
    components:{menuSide},
   data(){
       return{

       }
   },
   methods:{
    initCanvas(){//初始化canvas
    
    }
   },
   mounted(){

   }   
}
</script>
<style scoped>
.header_content{
    background: url('~@/assets/header-bg.jpg') center no-repeat;
    width: 100%;
    min-height: 100vh;
    background-size: cover;
    z-index: 1;
}

</style>