<template>
  <div class="post-detail-page">
    <!-- 帖子标题 -->
    <div class="post-header">
      <h1>{{ post.title }}</h1>
      <div class="post-meta">
        <span>作者：{{ post.author }}</span>
        <span>发布时间：{{ post.createdAt }}</span>
        <span><i class="el-icon-view"></i> {{ post.views }} 次浏览</span>
        <span><i class="el-icon-chat-dot-square"></i> {{ post.comments }} 条评论</span>
      </div>
    </div>

    <!-- 帖子内容 -->
    <div class="post-content">
      <p v-for="(paragraph, index) in post.content.split('\n')" :key="index">{{ paragraph }}</p>
    </div>

    <!-- 评论区域 -->
    <div class="comments-section">
      <h3>评论（{{ post.comments }}）</h3>
      <el-card v-for="(comment, idx) in comments" :key="idx" class="comment-item">
        <div class="comment-author">用户：{{ comment.author }}</div>
        <div class="comment-text">{{ comment.text }}</div>
        <div class="comment-time">{{ comment.time }}</div>
      </el-card>

      <!-- 发表评论表单 -->
      <el-form @submit.prevent="submitComment" label-width="80px" class="comment-form">
        <el-form-item label="发表评论">
          <el-input v-model="newComment" type="textarea" :rows="3" placeholder="写下你的评论..." />
        </el-form-item>
        <el-button type="primary" native-type="submit">提交评论</el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

// 定义数据类型
interface Post {
  id: number
  title: string
  author: string
  createdAt: string
  views: number
  comments: number
  content: string
}

interface Comment {
  author: string
  text: string
  time: string
}

// 获取路由参数（如果后续需要使用）
const route = useRoute()
const postId = route.params.id as string

// 初始化数据
const post = ref<Post>({
  id: 1,
  title: '第一次支教经历分享',
  author: '志愿者小李',
  createdAt: '2025-04-05',
  views: 200,
  comments: 15,
  content: `这是我第一次去山区支教的经历，收获满满。

在为期一个月的支教活动中，我负责教授孩子们英语和数学课程。
虽然条件艰苦，但看到孩子们纯真的笑脸和渴望知识的眼神，一切都值得了。

希望更多人能加入我们，一起为乡村教育贡献力量！`
})

const comments = ref<Comment[]>([
  { author: '用户A', text: '非常感人，我也想参与支教！', time: '2025-04-06' },
  { author: '管理员', text: '感谢分享，期待你下次继续参与公益行动！', time: '2025-04-07' }
])

const newComment = ref('')

// 提交评论
const submitComment = () => {
  if (!newComment.value.trim()) return

  comments.value.push({
    author: '当前用户',
    text: newComment.value,
    time: new Date().toLocaleDateString()
  })

  newComment.value = ''

  // 更新评论计数（可选）
  post.value.comments = comments.value.length
}
</script>

<style scoped>
.post-detail-page {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
}

.post-header h1 {
  font-size: 2rem;
  color: #1a73e8;
  margin-bottom: 10px;
}

.post-meta {
  display: flex;
  gap: 20px;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 20px;
}

.post-content {
  line-height: 1.8;
  font-size: 1rem;
  white-space: pre-line;
  margin-bottom: 40px;
}

.comments-section h3 {
  margin-bottom: 20px;
}

.comment-item {
  margin-bottom: 15px;
}

.comment-author {
  font-weight: bold;
  margin-bottom: 5px;
}

.comment-time {
  font-size: 0.8rem;
  color: #aaa;
  margin-top: 5px;
}

.comment-form {
  margin-top: 20px;
}
</style>