<script setup lang="ts">

</script>

<template>
  <div class="create-post-page">
    <h2>发布新帖</h2>
    <el-form @submit.prevent="submitPost" label-width="100px" class="post-form">
      <el-form-item label="标题">
        <el-input v-model="form.title" placeholder="请输入帖子标题" />
      </el-form-item>

      <el-form-item label="内容">
        <el-input v-model="form.content" type="textarea" :rows="8" placeholder="分享你的公益故事或提问..." />
      </el-form-item>

      <el-button type="primary" native-type="submit">发布帖子</el-button>
    </el-form>

    <el-dialog v-model="dialogVisible" title="发布成功">
      <p>你的帖子已成功发布！</p>
      <template #footer>
        <el-button @click="dialogVisible = false">继续编辑</el-button>
        <el-button type="primary" @click="goToCommunity">返回社区</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  title: '',
  content: ''
})

const dialogVisible = ref(false)

const submitPost = () => {
  if (!form.value.title || !form.value.content) {
    alert('请填写标题和内容')
    return
  }

  // 模拟提交成功
  console.log('提交的帖子:', form.value)
  dialogVisible.value = true
}

const goToCommunity = () => {
  dialogVisible.value = false
  router.push('/community')
}
</script>

<style scoped>
.create-post-page {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
}

.post-form {
  margin-top: 20px;
}
</style>

<style scoped>

</style>