<template>
<div class="client_layout">
<header_client/>
    <router-view></router-view>
</div>
</template>

<script>
import header_client from '@/components/client/header-client'
    export default {
        components:{header_client},
        name: "index"
    }
</script>

<style scoped>
.client_layout{
    width: 100%;
    height: 100%;
}
</style>