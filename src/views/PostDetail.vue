<template>
  <div class="post-detail-container">
    <!-- 返回按钮 -->
    <div class="back-button">
      <el-button type="primary" icon="el-icon-arrow-left" @click="goBack">返回列表</el-button>
    </div>

    <!-- 帖子加载状态 -->
    <div v-if="loading" class="loading-container">
      <el-skeleton :rows="8" animated />
    </div>

    <!-- 帖子详情卡片 -->
    <div v-else>
      <el-card class="post-card" shadow="never">
        <div class="post-header">
          <div class="post-title">{{ post.title }}</div>
          <div class="post-meta">
            <span class="post-author">
              <el-avatar :size="36" :src="post.authorAvatar" class="author-avatar"></el-avatar>
              {{ post.author }}
            </span>
            <span class="post-date">发布时间：{{ post.date }}</span>
            <span class="post-views"><i class="el-icon-view"></i> {{ post.views }}</span>
            <span class="post-comments"><i class="el-icon-chat-dot-square"></i> {{ post.comments }}</span>
          </div>
        </div>

        <el-divider></el-divider>

        <div class="post-content">
          {{ post.content }}
        </div>

        <div class="post-tags">
          <el-tag v-for="tag in post.tags" :key="tag" type="info" size="small">{{ tag }}</el-tag>
        </div>

        <div class="post-actions">
          <el-button type="primary" icon="el-icon-thumb" @click="likePost" :disabled="post.liked">
            {{ post.liked ? '已点赞' : '点赞' }} ({{ post.likes }})
          </el-button>
          <el-button type="info" icon="el-icon-share" @click="shareDialogVisible = true">分享</el-button>
          <el-button type="warning" icon="el-icon-star-off" @click="bookmarkPost" :disabled="post.bookmarked">
            {{ post.bookmarked ? '已收藏' : '收藏' }}
          </el-button>
        </div>
      </el-card>

      <!-- 评论区域 -->
      <div class="comment-section">
        <h3 class="comment-title">评论（{{ comments.length }}）</h3>

        <!-- 添加评论表单 -->
        <el-card class="add-comment-card">
          <div class="user-info">
            <el-avatar :size="48" :src="currentUser.avatar"></el-avatar>
            <div class="user-name">{{ currentUser.name }}</div>
          </div>
          <el-input
              type="textarea"
              :rows="3"
              placeholder="写下您的评论..."
              v-model="newComment"
              resize="none"
              class="comment-input"
          ></el-input>
          <div class="comment-actions">
            <el-button type="primary" size="small" @click="addComment">发表评论</el-button>
          </div>
        </el-card>

        <!-- 评论列表 -->
        <div class="comment-list">
          <div v-for="(comment, index) in comments" :key="index" class="comment-item">
            <div class="comment-header">
              <el-avatar :size="40" :src="comment.avatar" class="comment-avatar"></el-avatar>
              <div class="comment-info">
                <div class="comment-author">{{ comment.author }}</div>
                <div class="comment-time">{{ comment.time }}</div>
              </div>
            </div>
            <div class="comment-content">{{ comment.content }}</div>
            <div class="comment-actions">
              <el-button
                  type="text"
                  icon="el-icon-thumb"
                  @click="likeComment(comment.id)"
                  :class="{ 'liked': comment.hasLiked }"
              >
                {{ comment.likes > 0 ? comment.likes : '' }} 赞
              </el-button>
              <el-button type="text" icon="el-icon-chat-round" @click="replyToComment(comment)">回复</el-button>
            </div>

            <!-- 回复区域 -->
            <div v-if="comment.replies && comment.replies.length > 0" class="reply-list">
              <div v-for="(reply, replyIndex) in comment.replies" :key="replyIndex" class="reply-item">
                <div class="reply-header">
                  <el-avatar :size="32" :src="reply.avatar" class="reply-avatar"></el-avatar>
                  <div class="reply-info">
                    <div class="reply-author">{{ reply.author }}</div>
                    <div class="reply-time">{{ reply.time }}</div>
                  </div>
                </div>
                <div class="reply-content">
                  <span class="reply-to" v-if="reply.replyTo">@{{ reply.replyTo }} </span>
                  {{ reply.content }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 分享对话框 -->
    <el-dialog title="分享帖子" v-model="shareDialogVisible" width="400px">
      <div class="share-options">
        <div class="share-option" @click="shareTo('wechat')">
          <i class="iconfont icon-wechat"></i>
          <span>微信</span>
        </div>
        <div class="share-option" @click="shareTo('weibo')">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
        <div class="share-option" @click="shareTo('qq')">
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
        </div>
        <div class="share-option" @click="shareTo('link')">
          <i class="el-icon-link"></i>
          <span>复制链接</span>
        </div>
      </div>
      <template #footer>
        <el-button @click="shareDialogVisible = false">取消</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

interface Post {
  id: number
  title: string
  author: string
  authorAvatar: string
  date: string
  views: number
  comments: number
  likes: number
  content: string
  tags: string[]
  bookmarked?: boolean
  liked?: boolean
}

interface Comment {
  id: number
  author: string
  avatar: string
  content: string
  time: string
  likes: number
  hasLiked?: boolean
  replies?: Reply[]
}

interface Reply {
  id: number
  author: string
  avatar: string
  content: string
  time: string
  replyTo?: string
}

interface User {
  id: number
  name: string
  avatar: string
}

const route = useRoute()
const router = useRouter()
const postId = computed(() => Number(route.params.id))

// 当前登录用户信息
const currentUser = ref<User>({
  id: 1,
  name: "爱心志愿者",
  avatar: "https://randomuser.me/api/portraits/women/68.jpg"
})

// 帖子数据（含ID4）
const posts = ref<Post[]>([
  {
    id: 1,
    title: "如何加入志愿者团队？",
    author: "用户A",
    authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "2023-10-15 14:30",
    views: 150,
    comments: 23,
    likes: 42,
    content: "我想了解成为志愿者的流程，请问需要哪些条件？志愿者申请需要经过哪些步骤？是否需要有特定的技能或经验？志愿者活动通常安排在什么时间？期待有经验的朋友们分享你们的经历和建议。",
    tags: ["志愿者", "加入流程", "经验分享"],
    liked: false,
    bookmarked: false
  },
  {
    id: 2,
    title: "第一次支教经历分享",
    author: "志愿者小李",
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "2023-10-12 09:15",
    views: 200,
    comments: 15,
    likes: 58,
    content: "这是我第一次去山区支教的经历，收获满满。我们团队在云南山区小学进行了为期两周的支教活动，为孩子们带去了英语、美术和音乐课程。虽然条件艰苦，但看到孩子们渴望知识的眼神，一切都值得了。这次经历让我深刻体会到教育的重要性，也让我更加珍惜现在的生活。",
    tags: ["支教", "山区教育", "志愿者经历"],
    liked: false,
    bookmarked: false
  },
  {
    id: 3,
    title: "流浪动物救助经验交流",
    author: "爱心人士",
    authorAvatar: "https://randomuser.me/api/portraits/women/32.jpg",
    date: "2023-10-08 16:45",
    views: 175,
    comments: 18,
    likes: 36,
    content: "分享一些关于流浪动物护理的小技巧。在救助流浪动物时，最重要的是保持耐心和爱心。对于受伤的动物，首先要确保它们的安全，然后尽快联系专业救助机构。在照顾流浪动物时，需要注意饮食卫生和定期驱虫。同时，我们也需要关注动物的心理健康，给予它们足够的关爱和陪伴。",
    tags: ["动物救助", "流浪动物", "护理技巧"],
    liked: false,
    bookmarked: false
  },
  {
    id: 4,
    title: "公益活动建议征集",
    author: "管理员",
    authorAvatar: "https://randomuser.me/api/portraits/men/67.jpg",
    date: "2023-10-18 10:00",
    views: 98,
    comments: 5,
    likes: 24,
    content: "大家好！我们正在策划下一季度的公益活动，现向广大志愿者和爱心人士征集活动建议。您希望我们组织什么类型的公益活动？在什么时间开展最合适？对活动形式有什么建议？欢迎畅所欲言，您的建议对我们非常重要！",
    tags: ["公益活动", "建议征集", "社区参与"],
    liked: false,
    bookmarked: false
  }
])

// 为每个帖子创建独立的评论存储结构（含ID4的评论）
const allComments = ref<Record<number, Comment[]>>({
  1: [
    {
      id: 1,
      author: "志愿者小李",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "加入志愿者团队非常简单，首先需要填写我们的志愿者申请表，然后参加一个简短的面试。不需要特殊技能，有爱心最重要！",
      time: "2023-10-15 15:45",
      likes: 12,
      replies: [
        {
          id: 101,
          author: "用户A",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          content: "谢谢您的回复！申请表在哪里可以获取呢？",
          time: "2023-10-15 16:20",
          replyTo: "志愿者小李"
        },
        {
          id: 102,
          author: "志愿者小李",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          content: "在我们的官网志愿者专区可以下载，或者直接到我们的办公室领取",
          time: "2023-10-15 16:35",
          replyTo: "用户A"
        }
      ]
    },
    {
      id: 2,
      author: "爱心人士",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "我去年加入的志愿者团队，每周六下午参加活动。团队氛围非常好，帮助他人的同时自己也收获很多快乐！",
      time: "2023-10-16 09:22",
      likes: 8
    },
    {
      id: 3,
      author: "公益达人",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      content: "建议先参加一次体验活动，感受一下是否适合自己。我们团队每月第一个周末都有开放日活动，欢迎来体验！",
      time: "2023-10-16 14:18",
      likes: 15
    }
  ],
  2: [
    {
      id: 1,
      author: "支教老师王",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      content: "感谢分享！我也想去支教，请问需要提前准备什么材料吗？",
      time: "2023-10-12 11:30",
      likes: 6,
      replies: [
        {
          id: 101,
          author: "志愿者小李",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          content: "需要准备身份证、学历证明和无犯罪记录证明，具体要求可以在官网上查看",
          time: "2023-10-12 14:15",
          replyTo: "支教老师王"
        }
      ]
    },
    {
      id: 2,
      author: "教育工作者",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      content: "山区教育确实需要更多支持，感谢你们的付出！",
      time: "2023-10-13 09:45",
      likes: 9
    }
  ],
  3: [
    {
      id: 1,
      author: "动物保护者",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      content: "很实用的经验分享！对于受伤动物，有没有推荐的救助机构？",
      time: "2023-10-09 10:20",
      likes: 7,
      replies: [
        {
          id: 101,
          author: "爱心人士",
          avatar: "https://randomuser.me/api/portraits/women/32.jpg",
          content: "可以联系当地的动物保护协会，或者拨打12345市民热线寻求帮助",
          time: "2023-10-09 11:45",
          replyTo: "动物保护者"
        }
      ]
    },
    {
      id: 2,
      author: "宠物医生",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      content: "补充一点，遇到严重受伤的动物，不要随意移动，最好等待专业人员处理",
      time: "2023-10-10 15:30",
      likes: 12
    }
  ],
  4: [
    {
      id: 1,
      author: "社区志愿者",
      avatar: "https://randomuser.me/api/portraits/women/25.jpg",
      content: "建议组织一次社区环保活动，比如清理公园垃圾，同时可以宣传环保知识",
      time: "2023-10-18 11:30",
      likes: 8,
      replies: [
        {
          id: 101,
          author: "管理员",
          avatar: "https://randomuser.me/api/portraits/men/67.jpg",
          content: "很好的建议！我们会认真考虑，感谢您的贡献",
          time: "2023-10-18 12:15",
          replyTo: "社区志愿者"
        }
      ]
    },
    {
      id: 2,
      author: "退休教师",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      content: "可以组织一次关爱孤寡老人的活动，定期上门探访，提供生活帮助和精神关怀",
      time: "2023-10-18 14:20",
      likes: 12
    },
    {
      id: 3,
      author: "大学生志愿者",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      content: "建议举办一次公益市集，义卖手工艺品，所得款项用于帮助困难家庭",
      time: "2023-10-19 09:45",
      likes: 5
    }
  ]
})

// 当前显示的帖子和评论
const post = ref<Post>(posts.value[0])
const comments = ref<Comment[]>([])
const loading = ref(true)
const newComment = ref('')
const shareDialogVisible = ref(false)

// 根据ID获取帖子和评论
const fetchPost = (id: number) => {
  loading.value = true
  // 模拟API请求延迟
  setTimeout(() => {
    const foundPost = posts.value.find(p => p.id === id)
    if (foundPost) {
      post.value = foundPost
      // 增加浏览次数
      post.value.views += 1

      // 加载该帖子的评论
      comments.value = allComments.value[id] || []
    } else {
      ElMessage.error('找不到该帖子')
      router.push('/community')
    }
    loading.value = false
  }, 800)
}

// 添加评论
const addComment = () => {
  if (newComment.value.trim() === '') {
    ElMessage.warning('评论内容不能为空')
    return
  }

  const comment: Comment = {
    id: comments.value.length + 1,
    author: currentUser.value.name,
    avatar: currentUser.value.avatar,
    content: newComment.value,
    time: "刚刚",
    likes: 0
  }

  // 添加到当前帖子的评论列表
  comments.value.unshift(comment)

  // 更新全局评论存储
  if (!allComments.value[postId.value]) {
    allComments.value[postId.value] = []
  }
  allComments.value[postId.value].unshift(comment)

  // 更新帖子评论计数
  post.value.comments += 1

  newComment.value = ''
  ElMessage.success('评论发表成功')
}

// 点赞帖子
const likePost = () => {
  if (!post.value.liked) {
    post.value.likes += 1
    post.value.liked = true
    ElMessage.success('点赞成功')
  }
}

// 收藏帖子
const bookmarkPost = () => {
  post.value.bookmarked = !post.value.bookmarked
  ElMessage.success(post.value.bookmarked ? '帖子已收藏' : '已取消收藏')
}

// 点赞评论
const likeComment = (commentId: number) => {
  const comment = comments.value.find(c => c.id === commentId)
  if (comment && !comment.hasLiked) {
    comment.likes += 1
    comment.hasLiked = true
  }
}

// 回复评论
const replyToComment = (comment: Comment) => {
  newComment.value = `@${comment.author} `
  // 在实际应用中，这里可以聚焦到评论输入框
}

// 分享功能
const shareTo = (platform: string) => {
  shareDialogVisible.value = false
  let message = ''

  switch(platform) {
    case 'wechat':
      message = '已生成微信分享卡片'
      break
    case 'weibo':
      message = '已分享到微博'
      break
    case 'qq':
      message = '已分享到QQ'
      break
    case 'link':
      message = '帖子链接已复制到剪贴板'
      break
    default:
      message = '分享成功'
  }

  ElMessage.success(message)
}

// 返回列表
const goBack = () => {
  router.push('/community')
}

// 监听路由变化
watch(postId, (newId) => {
  if (newId) {
    fetchPost(newId)
  }
})

// 初始化加载
onMounted(() => {
  fetchPost(postId.value)
})
</script>

<style scoped>
.post-detail-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(to bottom, #f0f7ff, #e6f2ff);
  min-height: 100vh;
}

.back-button {
  margin-bottom: 20px;
}

.loading-container {
  padding: 40px 20px;
  background: white;
  border-radius: 12px;
}

.post-card {
  border-radius: 12px;
  margin-bottom: 30px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.post-header {
  padding-bottom: 15px;
}

.post-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #1a73e8;
  margin-bottom: 15px;
  line-height: 1.4;
}

.post-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  font-size: 0.95rem;
  color: #666;
}

.post-author {
  display: flex;
  align-items: center;
  gap: 8px;
}

.author-avatar {
  background-color: #f5f7fa;
}

.post-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  padding: 20px 0;
  white-space: pre-line;
}

.post-tags {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.post-actions {
  margin-top: 25px;
  display: flex;
  gap: 15px;
}

.comment-section {
  background-color: #fff;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.comment-title {
  color: #1a73e8;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  font-size: 1.3rem;
}

.add-comment-card {
  margin-bottom: 30px;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  background-color: #f9fbfd;
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.user-name {
  margin-left: 12px;
  font-weight: 500;
  color: #333;
}

.comment-input {
  margin-bottom: 10px;
}

.comment-actions {
  text-align: right;
}

.comment-list {
  padding-top: 15px;
}

.comment-item {
  padding: 20px 0;
  border-bottom: 1px solid #f0f2f5;
}

.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.comment-avatar {
  margin-right: 12px;
  background-color: #f5f7fa;
}

.comment-info {
  flex: 1;
}

.comment-author {
  font-weight: bold;
  color: #1a73e8;
}

.comment-time {
  font-size: 0.8rem;
  color: #999;
}

.comment-content {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333;
  padding-left: 52px;
  margin-bottom: 10px;
}

.comment-actions {
  padding-left: 52px;
  margin-top: 10px;
}

.comment-actions .el-button {
  padding: 4px 8px;
}

.liked {
  color: #1a73e8;
  font-weight: 500;
}

.reply-list {
  margin-top: 15px;
  margin-left: 52px;
  padding: 15px;
  background-color: #f9fbfd;
  border-radius: 8px;
  border-left: 3px solid #1a73e8;
}

.reply-item {
  padding: 10px 0;
  border-bottom: 1px dashed #e4e7ed;
}

.reply-item:last-child {
  border-bottom: none;
}

.reply-header {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.reply-avatar {
  margin-right: 10px;
  background-color: #f5f7fa;
}

.reply-info {
  flex: 1;
}

.reply-author {
  font-size: 0.9rem;
  font-weight: 500;
  color: #409eff;
}

.reply-time {
  font-size: 0.75rem;
  color: #999;
}

.reply-content {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #555;
  padding-left: 42px;
}

.reply-to {
  color: #1a73e8;
  font-weight: 500;
}

.share-options {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.share-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  padding: 15px;
  border-radius: 8px;
}

.share-option:hover {
  background-color: #f5f7fa;
  transform: translateY(-3px);
}

.share-option i {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.share-option .icon-wechat {
  color: #09bb07;
}

.share-option .icon-weibo {
  color: #e6162d;
}

.share-option .icon-qq {
  color: #12b7f5;
}

.share-option .el-icon-link {
  color: #1a73e8;
}

@media (max-width: 768px) {
  .post-detail-container {
    padding: 15px;
  }

  .post-title {
    font-size: 1.5rem;
  }

  .post-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .comment-content {
    padding-left: 0;
  }

  .comment-actions {
    padding-left: 0;
  }

  .reply-list {
    margin-left: 0;
  }

  .post-actions {
    flex-wrap: wrap;
  }

  .post-actions .el-button {
    flex: 1;
    min-width: 120px;
    margin-bottom: 10px;
  }
}
</style>

<style>
/* 引入图标字体 */
@font-face {
  font-family: 'iconfont';
  src: url('//at.alicdn.com/t/font_2972420_cw2a3afr2d.woff2?t=1638942783139') format('woff2'),
  url('//at.alicdn.com/t/font_2972420_cw2a3afr2d.woff?t=1638942783139') format('woff'),
  url('//at.alicdn.com/t/font_2972420_cw2a3afr2d.ttf?t=1638942783139') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-wechat:before {
  content: "\e600";
}

.icon-weibo:before {
  content: "\e601";
}

.icon-qq:before {
  content: "\e602";
}
</style>

<style scoped>

</style>