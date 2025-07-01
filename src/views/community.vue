<template>
  <div class="community-page">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>互动交流社区</h1>
      <p>在这里分享你的公益故事、提问或参与讨论。</p>
      <div class="header-actions">
      <el-button type="primary" @click="goToCreatePost">发布新帖</el-button>
      <el-button type="info" @click="goToHome" style="margin-left: 10px;">返回首页</el-button>
      </div>
    </div>

    <!-- 社区帖子列表 -->
    <div class="post-list">
      <el-row :gutter="20">
        <el-col
            v-for="(post, index) in posts"
            :key="index"
            :xs="24"
            :sm="12"
            :md="8"
            :lg="6"
        >
          <!-- 这里通过 as Post 明确断言 post 的类型 -->
          <el-card class="post-card" shadow="hover" :post="post as Post">
            <div class="post-title">{{ (post as Post).title }}</div>
            <div class="post-author">作者：{{ (post as Post).author }}</div>
            <div class="post-summary">{{ (post as Post).summary }}</div>
            <div class="post-footer">
              <span><i class="el-icon-view"></i> {{ (post as Post).views }}</span>
              <span><i class="el-icon-chat-dot-square"></i> {{ (post as Post).comments }}</span>
              <el-button type="text" @click="goToDetail((post as Post).id)">查看详情</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { RouteLocationRaw } from 'vue-router'

// 定义帖子类型
interface Post {
  id: number
  title: string
  author: string
  summary: string
  views: number
  comments: number
}
// 返回首页方法
const goToHome = (): void => {
  router.push('/')
}
const router = useRouter()

// 模拟帖子数据（带类型）
const posts = ref<Post[]>([
  {
    id: 1,
    title: "如何加入志愿者团队？",
    author: "用户A",
    summary: "我想了解成为志愿者的流程，请问需要哪些条件？",
    views: 150,
    comments: 23
  },
  {
    id: 2,
    title: "第一次支教经历分享",
    author: "志愿者小李",
    summary: "这是我第一次去山区支教的经历，收获满满。",
    views: 200,
    comments: 15
  },
  {
    id: 3,
    title: "流浪动物救助经验交流",
    author: "爱心人士",
    summary: "分享一些关于流浪动物护理的小技巧。",
    views: 175,
    comments: 18
  },
  {
    id: 4,
    title: "公益活动建议征集",
    author: "管理员",
    summary: "欢迎大家提出对下一期活动的建议。",
    views: 98,
    comments: 5
  }
])

// 点击详情跳转（带类型）
const goToDetail = (id: number): void => {
  const route: RouteLocationRaw = {
    path: `/community/${id}`
  }
  router.push(route)
}

// 点击发帖按钮跳转（带类型）
const goToCreatePost = (): void => {
  router.push('/community/create')
}
</script>

<style scoped>
.header-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 15px;
}

@media (max-width: 768px) {
  .header-actions {
    flex-direction: column;
    align-items: center;
  }

  .header-actions .el-button {
    width: 100%;
  }
}
.community-page {
  padding: 40px 20px;
  background: linear-gradient(to bottom right, #f0f4f8, #e6eff7);
  min-height: 100vh;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #1a73e8;
}

.page-header p {
  font-size: 1.1rem;
  color: #5f6368;
  margin-top: 10px;
}

.post-list {
  max-width: 1200px;
  margin: 0 auto;
}

.post-card {
  margin-bottom: 20px;
  transition: transform 0.2s ease;
  cursor: pointer;
}

.post-card:hover {
  transform: translateY(-5px);
}

.post-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.post-author {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 10px;
}

.post-summary {
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 15px;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #888;
}

@media (max-width: 768px) {
  .post-title {
    font-size: 1rem;
  }

  .post-summary {
    font-size: 0.85rem;
  }
}
</style>