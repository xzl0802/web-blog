<template>
<div class="progress_div">
  <a-progress :percent="percent" :showInfo=false />    
</div>
</template>
<script>
export default {
    name:"Progress",
    data(){
        return{
            percent:10,
        }
    }
}
</script>
<style scoped>
.progress_div{
    position: fixed;
    top:-16px; 
    width: 100%;

}
</style>