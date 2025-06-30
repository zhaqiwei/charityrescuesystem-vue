<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance } from 'element-plus' // 关键：引入 Element Plus 表单类型

// 定义表单数据类型
interface PostForm {
  title: string
  content: string
}

const router = useRouter()

// 初始化变量并显式声明类型
const form = ref<PostForm>({
  title: '',
  content: ''
})
const dialogVisible = ref(false)

// 处理表单提交（补充事件参数类型）
const submitPost = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      // 模拟提交成功
      console.log('提交的帖子:', form.value)
      dialogVisible.value = true
    } else {
      alert('请填写完整内容')
    }
  })
}

// 返回社区逻辑
const goToCommunity = () => {
  dialogVisible.value = false
  router.push('/community')
}
</script>

<template>
  <div class="create-post-page">
    <h2>发布新帖</h2>
    <!-- 关键：绑定表单实例 -->
    <el-form
        ref="formRef"
        @submit.prevent="submitPost"
        label-width="100px"
        class="post-form"
    >
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