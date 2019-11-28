<template>
<div class="client_layout">
<Progress/>
<headClient/>


<div class="main_content">
<router-view></router-view>
</div>
</div>
</template>

<script>
import HeadClient from    '@/components/client/header/index';  //头部组件
import Progress from   '@/components/client/progress';  //进度条组件
    export default {
        components:{HeadClient,Progress},
        data(){
            return{
                 percent: 0,
            }
        }
    }
</script>
<style scoped>
.client_layout{
    width: 100%;
    min-height: 100%;
    display: flex;
    display: -webkit-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
}

.main_content{
    min-height: 500px;
}
</style>