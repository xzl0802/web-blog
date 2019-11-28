<template>
  <div>
    <div class="side_menu" v-show="!menuShow" @click="showMenuSide">
      <svg viewBox="0 0 32 32" width="100%" height="100%" >
        <path
          d="M30 18h-28c-1.1 0-2-0.9-2-2s0.9-2 2-2h28c1.1 0 2 0.9 2 2s-0.9 2-2 2zM30 6.25h-28c-1.1 0-2-0.9-2-2s0.9-2 2-2h28c1.1 0 2 0.9 2 2s-0.9 2-2 2zM2 25.75h28c1.1 0 2 0.9 2 2s-0.9 2-2 2h-28c-1.1 0-2-0.9-2-2s0.9-2 2-2z"
        />
      </svg>
      <span>menu</span>
    </div>

    <div class="side_main  animated  rotateInDownLeft" v-show="menuShow">
      <div class="side__panel" >
        <svg
          class="side__close ft__a"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"  @click="closeMenuSide" >
          <path
            d="M18.362 19.324c-0.902 0.902-2.363 0.902-3.263 0l-5.098-5.827-5.098 5.825c-0.902 0.902-2.363 0.902-3.263 0-0.902-0.902-0.902-2.363 0-3.263l5.304-6.057-5.306-6.061c-0.902-0.902-0.902-2.361 0-3.263s2.361-0.902 3.263 0l5.1 5.829 5.098-5.829c0.902-0.902 2.361-0.902 3.263 0s0.902 2.363 0 3.263l-5.304 6.061 5.304 6.057c0.902 0.902 0.902 2.363 0 3.265z"
          />
        </svg>

        <div class="side__header">
          <a href="" rel="start">
            <img class="side__logo" src="" />
          </a>

          <!-- <div class="side__meta">
            2 文章
            <br />1 评论
            <br />330 浏览
            <br />4 当前访客
          </div> -->
        </div>
<!-- 
        <div class="side__title">
          <span>ღゝ◡╹)ノ❤️</span>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "menuSide",
  data(){
    return{
     menuShow:false
    }
    
  },methods: {
      closeMenuSide(){ //关闭侧边栏
       this.menuShow = false;
      },
      showMenuSide(){
       this.menuShow = true; 
      }
    }
};
</script>
<style scoped>
.side_menu:hover{
opacity: 0.6;
}
.side_menu {
  position: fixed;
  z-index: 2;
  opacity: 1;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  top: 20px;
  left: 20px;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}
svg {
  fill: currentColor;
  display: inline-block;
  stroke-width: 0;
  stroke: currentColor;
  width: 14px;
  height: 14px;
}
.side_menu span {
  padding-left: 5px;
}
.side_main {
  display: block;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 3;
  top: 0;
  left: 0;
}
.side__panel {
  width: 280px;
  height: 100vh;
  overflow: auto;
  position: fixed;
  left: 0;
  z-index: 4;
  top: 0;
  background-color: #000;
}
.side__close {
  cursor: pointer;
  height: 16px;
  width: 16px;
  position: absolute;
  right: 10px;
  top: 10px;
}
.side__header {
  background:  url("~@/assets/side-bg.gif");
  width: 100%;
  height: 239px;
  padding-top: 40px;
}

.side__logo {
  width: 66px;
  height: 66px;
  border: 4px solid rgba(255, 255, 255, 0.5);
  border-radius: 100%;
  box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.3), 0 2px 3px rgba(0, 0, 0, 0.4);
  margin: 0 auto 20px;
  display: block;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.side__meta {
  color: #fff;
  text-align: center;
}
.side__title {
  position: relative;
}
.side__title span {
  position: absolute;
  top: -11px;
  left: 91px;
  z-index: 1;
  padding: 0 10px;
  background-color: #000;
  color: #b8b8b8;
}
.side__nav {
  -webkit-box-flex: 1;
  flex: 1;
  margin: 30px 0 20px;
  padding: 0;
  counter-reset: item;
}
ul,
ol {
  margin: 0;
  padding: 0;
}
.side__nav li {
  height: 30px;
  display: -webkit-box;
  display: flex;
}
.side__nav li a {
  color: #989898;
  text-decoration: none;
  line-height: 1.4;
  padding: 0 10px 0 20px;
  overflow: hidden;
  white-space: nowrap;
}
.side__nav li:after {
  padding-right: 20px;
  text-align: right;
  vertical-align: bottom;
  color: #b8b8b8;
  content: counter(item, lower-roman);
  counter-increment: item;
}
</style>