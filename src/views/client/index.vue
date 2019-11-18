<template>
<div class="client_layout">
<headerBg/>
<menuSide/>
    <router-view></router-view>
</div>
</template>

<script>
import headerBg from '@/components/client/headerBg';
import menuSide   from  '@/components/client/menuSide';
    export default {
        components:{headerBg,menuSide}
    }
</script>

<style scoped>
.client_layout{
    width: 100%;
    height: 100%;
}
</style>