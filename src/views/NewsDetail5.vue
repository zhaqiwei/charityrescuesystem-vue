<script setup lang="ts">

</script>

<template>
  <div class="digital-life-training-detail-page">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>克拉玛依社区老人数字生活培训计划启动</h1>
    </div>

    <!-- 新闻详情内容 -->
    <div class="news-content">
      <!-- 新闻配图 -->
      <img src="@/assets/news5.png" alt="培训活动现场" class="news-image">

      <!-- 新闻正文 -->
      <div class="news-body">
        <p>
          针对老年人使用智能设备困难的问题，石大志愿者团队启动社区老人数字生活培训计划。
          该计划覆盖克拉玛依市10个社区，每周定期开展智能手机使用、电子支付、防诈骗等培训课程。
          截至目前，已有300多位老人参与培训，学习使用智能设备与家人沟通、线上购物等技能。
        </p>
      </div>

      <!-- 发布日期 -->
      <div class="news-date">发布日期：2023-10-20</div>
    </div>

    <!-- 返回按钮 -->
    <el-button type="primary" @click="goBack">返回列表</el-button>
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
.digital-life-training-detail-page {
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  text-align: justify;
  margin-bottom: 20px;
  max-width: 800px;
}

.news-date {
  font-size: 1rem;
  color: #888;
  margin: 20px 0;
}

.el-button {
  margin-top: 20px;
}
</style>

<style scoped>

</style>