<template>
  <div class="navigation">
    <router-link to="/" class="nav-link">首页</router-link>
    <a href="#" class="nav-link">石大公益行动</a>
    <a href="#" class="nav-link">互动交流社区</a>
    <router-link to="/gongyizixun" class="nav-link" active-class="active">公益资讯</router-link>
    <router-link to="/zhiyuanbaoming" class="nav-link" active-class="active">志愿报名</router-link>
  </div>

  <div class="volunteer-form-container">
    <div class="volunteer-form-card">
      <h2 class="form-title">志愿者申请表单</h2>
      <form @submit.prevent="handleSubmit" class="form-content">
        <!-- 服务时间段选择 -->
        <div class="form-group">
          <label class="form-label" for="serviceTime">服务时间段：</label>
          <select
              id="serviceTime"
              v-model="formData.serviceTime"
              class="form-select"
          >
            <option value="morning">上午</option>
            <option value="afternoon">下午</option>
            <option value="evening">晚上</option>
          </select>
        </div>

        <!-- 技能专长输入 -->
        <div class="form-group">
          <label class="form-label" for="skills">技能专长：</label>
          <input
              type="text"
              id="skills"
              v-model="formData.skills"
              placeholder="请输入您的技能专长，如：绘画、编程等"
              class="form-input"
          />
        </div>

        <!-- 可服务日期选择 -->
        <div class="form-group">
          <label class="form-label" for="serviceDate">可服务日期：</label>
          <input
              type="date"
              id="serviceDate"
              v-model="formData.serviceDate"
              class="form-input"
          />
        </div>

        <!-- 提交按钮 -->
        <button
            type="submit"
            class="submit-btn"
            :class="{ 'btn-loading': isLoading }"
            :disabled="isLoading"
        >
          <span v-if="!isLoading">提交</span>
          <span v-else class="loading-dot">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

// 表单数据对象
const formData = reactive({
  serviceTime: '', // 服务时间段
  skills: '', // 技能专长
  serviceDate: '' // 可服务日期
});

// 加载状态
const isLoading = ref(false);

// 提交表单的处理函数
const handleSubmit = () => {
  // 简单校验
  if (!formData.serviceTime || !formData.skills || !formData.serviceDate) {
    alert('请填写完整表单内容');
    return;
  }

  isLoading.value = true;
  // 模拟接口请求（实际项目中替换为真实接口）
  setTimeout(() => {
    console.log('表单数据：', formData);
    alert('表单提交成功！');
    // 提交后重置表单数据
    formData.serviceTime = '';
    formData.skills = '';
    formData.serviceDate = '';
    isLoading.value = false;
  }, 1500);
};
</script>

<style scoped>
/* 容器样式 */
.volunteer-form-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 渐变背景 */
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

/* 卡片样式 */
.volunteer-form-card {
  width: 420px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  overflow: hidden;
}

/* 标题样式 */
.form-title {
  text-align: center;
  padding: 24px 0;
  font-size: 22px;
  font-weight: 600;
  color: #333;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

/* 表单内容区域 */
.form-content {
  padding: 24px 32px 32px;
}

/* 表单项组 */
.form-group {
  margin-bottom: 20px;
}

/* 标签样式 */
.form-label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #555;
  font-weight: 500;
}

/* 选择框和输入框通用样式 */
.form-select,
.form-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  color: #666;
  transition: all 0.3s ease;
}

/* 输入框聚焦样式 */
.form-select:focus,
.form-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 8px rgba(102, 126, 234, 0.2);
  outline: none;
}

/* 提交按钮基础样式 */
.submit-btn {
  width: 100%;
  padding: 12px 0;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 按钮 hover 效果 */
.submit-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
}

/* 按钮禁用状态 */
.submit-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
  opacity: 0.8;
}

/* 加载状态动画 */
.loading-dot {
  display: flex;
  align-items: center;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 50%;
  margin: 0 3px;
  animation: bounce 1s infinite;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}
.navigation {
  display: flex;
  justify-content: center;
  background-color: darkturquoise;
  padding: 15px 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  margin: 0 20px;
  padding: 5px 15px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

</style>