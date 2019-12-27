<template>
  <div>
   <a-breadcrumb>
    <a-breadcrumb-item href="">
      <a-icon type="home" />
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
     <span v-if="item.redirect==='noredirect'||index==levelList.length - 1" class="no-redirect">{{ item.meta.title }}</span>
      <span v-else>{{ item.meta.title }}</span>
    </a-breadcrumb-item>
 
  </a-breadcrumb>

  </div>
</template>

<script>
export default {
      name: "Breadcrumb",
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.meta.title)

    
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !=false)
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

<style>
</style>