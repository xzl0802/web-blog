<template>
  <div class="footer_content">
    <div class="footerImg">
      <img src="@/assets/footer.png" />
    </div>
   <div class="footer_Main"></div> 
  </div>
</template>
<script>
export default {
  name: "ClientFooter"
};
</script>
<style scoped>
.footer_content {
  width: 100%;
  z-index: 2;
}
.footerImg {
  width: 1000px;
  margin: 0 auto;
}
.footer_Main{
  width: 100%;
  height: 100px;
  background-color: #000;
  margin-top: -65px;
}
</style>