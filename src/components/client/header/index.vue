<template>
  <div class="header_content">

    <CanvasBg />
    <HeaderTitle/>
  </div>
</template>
<script>

import CanvasBg from "@/components/client/header/canvas"; // canvas 组件
import HeaderTitle  from  "@/components/client/header/title";
export default {
  name: "HeadClient",

  components: { CanvasBg,HeaderTitle },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
.header_content {
  background: url("~@/assets/header-bg.jpg") center no-repeat;
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  z-index: 1;
  -webkit-filter: brightness(1);
  -o-filter: brightness(1);
  -moz-filter: brightness(1);
  filter: brightness(1);
}
</style>