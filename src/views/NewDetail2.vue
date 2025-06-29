<script setup lang="ts">

</script>

<template>
  <div class="news-detail-page">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>公益新闻动态</h1>
    </div>

    <!-- 新闻详情内容 -->
    <div class="news-content">
      <!-- 新闻标题 -->
      <h2 class="news-title">克拉玛依启动'绿色家园'环保公益项目</h2>

      <!-- 新闻配图 -->
      <img src="@/assets/news2.png" alt="新闻配图" class="news-image">

      <!-- 新闻正文 -->
      <div class="news-body">
        <p>
          克拉玛依市政府联合多家企业，共同启动'绿色家园'环保公益项目，计划在三年内种植10万棵树。
          中国石油大学环境工程学院的师生积极参与该项目，提供技术支持并组织志愿者团队。
          项目首期已在市区周边种植了5000棵耐旱树种，有效改善了当地的生态环境。
        </p>
      </div>

      <!-- 发布日期 -->
      <div class="news-date">发布日期：2023-09-28</div>

      <!-- 返回按钮 -->
      <el-button type="primary" @click="goBack">返回列表</el-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// 返回新闻列表页
const goBack = () => {
  router.go(-1)
}
</script>

<style scoped>
.news-detail-page {
  padding: 40px 20px;
  background-color: #f5f7fa;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #ff6a00;
  border-bottom: 2px solid #ff6a00;
  padding-bottom: 10px;
}

.news-content {
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  padding: 40px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
}

.news-title {
  font-size: 2rem;
  color: #1a73e8;
  margin-bottom: 30px;
}

.news-image {
  width: 100%;
  height: auto;
  margin-bottom: 30px;
  object-fit: cover;
}

.news-body p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
}

.news-date {
  font-size: 1rem;
  color: #888;
  margin: 20px 0;
}

.el-button {
  float: right;
}
</style>

<style scoped>

</style>