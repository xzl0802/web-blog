<template>
  <div class="canvas_div">
    <canvas
      id="canvas"
   
      style="position: absolute; left: 0px; bottom: 0px;"
    ></canvas>
  </div>
</template>
<script>
import { dropCanvas } from "@/utils/drop.js";
export default {
  name: "canvasBg",
  data() {
    return {
      can: "",
      cxt: "",
      canW: "",
      canH: "",
      drops: []
    };
  },
  methods: {
    initCanvas() {
     dropCanvas("canvas")
    }
  },
  mounted() {
    this.initCanvas();
  }
};
</script>
<style scoped>
.canvas_div {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#canvas{
    opacity: 0.25;
    width: 100%;
  height: 100%;
}
</style>