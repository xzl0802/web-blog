<template>
  <div class="listContent">
    <a-card class="lsitCard" :hoverable=hoverable>
      <div class="pageContent">
        <a-pagination :defaultCurrent=defaultCurrent :total=total  class="paginationDiv" />
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultCurrent: 1,
      total: 10,
      hoverable:true
    };
  }
};
</script>
<style scoped>
.listContent {
  width: 1050px;
  z-index: 1;
  margin: 0 auto;
}
.lsitCard {
  min-height:400px;
  margin-top: 30px;
  margin-bottom: -50px;

}
.pageContent {
  border-top:1px solid #f2f2f2;
  position: absolute;
  bottom: 40px;
 text-align: center;
  width: 100%;
}
.paginationDiv{
margin-top: 40px;
display: inline-block;
}
</style>