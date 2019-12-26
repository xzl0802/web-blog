<template functional>
  <a-sub-menu :key="props.menuInfo.key" >
    <span slot="title">
       <a-icon :type="props.menuInfo.meta.icon" /><span>{{ props.menuInfo.meta.title }}</span>
    </span>
    <template v-for="item in props.menuInfo.children">
      <a-menu-item  v-show="!item.hidden"   v-if="!item.children" :key="item.key"   >
        <a-icon :type=" item.meta.icon" />
        <span>{{item.meta.title}}</span>
          <router-link :to="item.path"></router-link>
      </a-menu-item>
      <sub-menu v-else :key="item.key" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  props: ['menuInfo'],
  data(){

  },
  methods:{
 
     },
};
</script>