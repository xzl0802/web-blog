<template>
  <div class="listContent">
    <a-card class="lsitCard" :hoverable="hoverable">
      <div class="articleContent">
        <div class="articleItem">
          <h2>世界，你好！</h2>
          <a class="articleDesc">开发中</a>
          <div class="fn__clear">
            2019-12-11 &nbsp;·&nbsp;
            <a
              href="http://www.xzl0802.top:8080/authors/1575957329573"
            >xzl0802</a>
            &nbsp;·&nbsp;
            <a
              rel="tag"
              class="item__tag"
              href="http://www.xzl0802.top:8080/tags/%E5%BC%80%E6%BA%90"
            >开源</a> &nbsp;
            <a
              rel="tag"
              class="item__tag"
              href="http://www.xzl0802.top:8080/tags/GitHub"
            >GitHub</a> &nbsp;
            &nbsp;·&nbsp;
            <a
              class="item__tag"
              href="http://www.xzl0802.top:8080/my-github-repos"
            >1 浏览</a>
          </div>
        </div>
      </div>

      <div class="pageContent">
        <a-pagination :defaultCurrent="defaultCurrent" :total="total" class="paginationDiv" />
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
      hoverable: true
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
  min-height: 260px;
  margin-top: 30px;
  margin-bottom: -50px;
}
.pageContent {
  height: 100px;
  text-align: center;
  width: 100%;
}
.paginationDiv {
  margin-top: 40px;
  display: inline-block;
}
.articleContent {
  width: 100%;
      margin-top: -20px;
}
.articleItem {
    margin-top: 30px;
  height: 120px;
  border-bottom: 1px solid #f2f2f2;
}

.articleItem h2 {
  color: #15171a;
  font-size: 24px;
  line-height: 20px;
  font-weight: 900;
}
.articleDesc {
  display: block;
  line-height: 24px;
  color: #15171a;
  font-size: 15px;
  margin: 10px 0;
}
.articleItem .item__tag {
  display: inline-block;
  color: #738a94;
  line-height: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
</style>