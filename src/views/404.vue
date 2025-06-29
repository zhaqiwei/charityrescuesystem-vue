<script setup lang="ts">
import router from "@/router/index.js";
</script>

<template>
  <div style="text-align: center">
    <img src="@/assets/404.webp" alt="404图片"><br>
    出错啦!页面丢失!<br>
    <div>
      <el-button type="primary" style="width: 150px; height: 60px; font-size: 20px;" @click="router.push('/')" plain>返回首页</el-button>
    </div>
  </div>
</template>

<style scoped>

</style>