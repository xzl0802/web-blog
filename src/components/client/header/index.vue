<template>
<div class="header_content">
<menuSide/>
</div>

</template>
<script>
import menuSide   from  './menuSide';
export default {
   name: 'HeadClient',
    components:{menuSide},
   data(){
       return{

       }
   },
   methods:{
  
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