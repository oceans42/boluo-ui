<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from "vue";
import { router } from "./router";

export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth; // 页面宽度
    const menuVisible = ref(width <= 500 ? false : true);
    provide("menuVisible", menuVisible); // 标记为所有的后代都可以使用 set
    router.afterEach(() => { // 当路由切换的时候，做一件事情
      if (width <= 500) {
        menuVisible.value = false;
      }
    });
  },
};
</script>
