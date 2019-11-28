<template>
<div class="client_layout">

<headClient/>


<div class="main_content">
<router-view></router-view>
</div>
</div>
</template>

<script>
import headClient from    '@/components/client/header/index';
    export default {
        components:{headClient}
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