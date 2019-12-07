<template>
  <div class="header_content">
    <Progress />
    <menuSide />
    <CanvasBg />
  </div>
</template>
<script>
import menuSide from "./menuSide";
import Progress from "@/components/client/progress"; //进度条组件
import CanvasBg from "@/components/client/header/canvas"; // canvas 组件
export default {
  name: "HeadClient",
  components: { menuSide, Progress, CanvasBg },
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