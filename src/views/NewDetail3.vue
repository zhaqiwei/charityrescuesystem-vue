<script setup lang="ts">
import { useRouter } from 'vue-router';
// 引入 vue-router 类型（若需更严格类型，可补充导入）
import type { Router } from 'vue-router';

const router: Router = useRouter();

// 返回新闻列表页，明确函数类型
const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <div class="medical-service-detail-page">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>爱心医疗队为克拉玛依牧民提供免费诊疗服务</h1>
    </div>

    <!-- 新闻详情内容 -->
    <div class="news-content">
      <!-- 新闻配图 -->
      <img src="@/assets/news3.png" alt="医疗服务现场" class="news-image">

      <!-- 新闻正文 -->
      <div class="news-body">
        <p>
          由石大医学院师生组成的爱心医疗队，深入克拉玛依牧区为当地牧民提供免费诊疗服务。
          医疗队携带了便携式医疗设备，为200多名牧民提供了健康检查、常见病治疗和健康咨询服务。
          此次活动特别关注了老人和儿童的健康问题，并为有需要的家庭提供了常用药品。
        </p>
      </div>

      <!-- 发布日期 -->
      <div class="news-date">发布日期：2023-10-05</div>

      <!-- 返回按钮 -->
      <el-button type="primary" @click="goBack">返回列表</el-button>
    </div>
  </div>
</template>

<style scoped>
.medical-service-detail-page {
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