<template>
  <div class="title_main">
  <div class="title_content">
  <h1><a>{{title}}</a></h1>
  <h2 class="header__desc_title">记录精彩的程序人生</h2>
  <div class="header__desc">
                Open Source, Open Mind, <br>Open Sight, Open Future!
            </div>
  </div>
  </div>
</template>
<script>
export default {
  name: "HeaderTitle",
  data(){
      return{
          title:"南城以北 的个人博客"
      }
  }
};
</script>
<style scoped>
.title_main {
  width: 100%;
  height: 101vh;
 
  -webkit-filter: brightness(1);
  -o-filter: brightness(1);
  -moz-filter: brightness(1);
  filter: brightness(1);

}
.title_content{
    width: 1050px;
    margin: 0 auto;  
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    z-index: 2;

}
.title_content h1{
    letter-spacing: -1px;
    font-weight: 700;
    font-size: 50px;
    text-shadow: 0 3px 6px rgba(0,0,0,0.3);
    -webkit-animation: fade-in-down 1s both;
    animation: fade-in-down 1s both;
    -webkit-animation-delay: .5s;
    animation-delay: .5s;
    line-height: 50px;
    
}
.title_content h1 a{
color: #ffffff;
}
.header__desc_title{
    font-size: 20px;
    font-weight: 400;
  
    color: rgba(255,255,255,0.8);
    line-height: 24px;
    text-shadow: 0 3px 6px rgba(0,0,0,0.3);
    -webkit-animation: fade-in-down .9s both;
    animation: fade-in-down .9s both;
    -webkit-animation-delay: .3s;
    animation-delay: .3s;
}
.header__desc {
  
    color: rgba(255,255,255,0.8);
    line-height: 24px;
    text-shadow: 0 3px 6px rgba(0,0,0,0.3);
    -webkit-animation: fade-in-down .9s both;
    animation: fade-in-down .9s both;
    -webkit-animation-delay: .3s;
    animation-delay: .3s;
}
</style>
