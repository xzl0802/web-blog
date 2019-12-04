<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
    
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
body html{
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
  background-color: #fff;
}
</style>
