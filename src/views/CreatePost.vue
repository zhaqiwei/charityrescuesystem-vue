<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'

const router = useRouter()

// 修复：表单数据对象
const postFormData = ref({
  title: '',
  content: '',
  tags: [] as string[] // 添加类型注解
})

// 修复：表单实例引用（使用 ref 保存表单实例）
const postFormRef = ref<FormInstance | null>(null)

const availableTags = ref([
  '志愿者',
  '经验分享',
  '问题求助',
  '公益活动',
  '捐赠信息',
  '支教经历',
  '动物救助',
  '环境保护',
  '社区服务',
  '医疗援助'
])

const rules = ref<FormRules>({
  title: [
    { required: true, message: '请输入帖子标题', trigger: 'blur' },
    { min: 5, max: 50, message: '标题长度在 5 到 50 个字符', trigger: 'blur' }
  ],
  content: [
    { required: true, message: '请输入帖子内容', trigger: 'blur' },
    { min: 20, message: '内容至少需要 20 个字符', trigger: 'blur' }
  ],
  tags: [
    { type: 'array', required: true, message: '请至少选择一个标签', trigger: 'change' }
  ]
})

// 提交表单
// 提交表单
const submitForm = () => {
  postFormRef.value?.validate((valid) => {
    if (valid) {
      // 模拟提交成功
      ElMessage.success('帖子发布成功！')

      // 在实际应用中，这里会调用API提交数据
      setTimeout(() => {
        router.push('/community')
      }, 1000)
    } else {
      ElMessage.warning('请完善表单内容')
      // 不要 return false
    }
  })
}
// 重置表单
const resetForm = () => {
  // 修复：使用正确的表单实例引用
  postFormRef.value?.resetFields()
}

// 返回列表
const goBack = () => {
  router.push('/community')
}
</script>

<template>
  <div class="create-post-container">
    <!-- 返回按钮 -->
    <div class="back-button">
      <el-button type="primary" icon="el-icon-arrow-left" @click="goBack">返回列表</el-button>
    </div>

    <!-- 创建帖子表单 -->
    <el-card class="create-post-card" shadow="never">
      <div class="form-header">
        <h2>发布新帖</h2>
        <p>分享您的公益故事、经验或问题</p>
      </div>

      <!-- 修复：使用正确的 ref 名称 -->
      <el-form
          ref="postFormRef"
          :model="postFormData"
          :rules="rules"
          label-width="80px"
          label-position="top"
      >
        <el-form-item label="帖子标题" prop="title">
          <el-input
              v-model="postFormData.title"
              placeholder="请输入标题（5-50个字符）"
              maxlength="50"
              show-word-limit
          ></el-input>
        </el-form-item>

        <el-form-item label="帖子内容" prop="content">
          <el-input
              type="textarea"
              :rows="8"
              v-model="postFormData.content"
              placeholder="请详细描述您的帖子内容..."
              maxlength="1000"
              show-word-limit
              resize="none"
          ></el-input>
        </el-form-item>

        <el-form-item label="选择标签" prop="tags">
          <el-select
              v-model="postFormData.tags"
              multiple
              filterable
              allow-create
              placeholder="请选择或创建标签"
              style="width: 100%"
          >
            <el-option
                v-for="tag in availableTags"
                :key="tag"
                :label="tag"
                :value="tag"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">发布帖子</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 发帖提示 -->
    <el-card class="tips-card">
      <h3>发帖指南</h3>
      <ul class="tips-list">
        <li>请确保标题简洁明了，能够准确反映帖子内容</li>
        <li>内容应详细描述问题或分享经验，避免过于简短</li>
        <li>选择恰当的标签有助于您的帖子被更多人看到</li>
        <li>请遵守社区规范，禁止发布不当内容</li>
        <li>优质的帖子可能会被推荐到首页</li>
      </ul>
    </el-card>
  </div>
</template>
