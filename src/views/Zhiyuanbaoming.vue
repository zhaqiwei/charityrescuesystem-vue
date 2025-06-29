<template>
  <div class="page-container" :style="{ backgroundImage: `url(${bgImage})` }">
    <!-- 导航栏 -->
    <div class="navigation">
      <router-link to="/" class="nav-link">首页</router-link>
      <a href="#" class="nav-link">石大公益行动</a>
      <a href="#" class="nav-link">互动交流社区</a>
      <router-link to="/gongyizixun" class="nav-link" active-class="active">公益资讯</router-link>
      <router-link to="/zhiyuanbaoming" class="nav-link" active-class="active">志愿报名</router-link>
    </div>

    <!-- 表单容器（居中显示） -->
    <div class="volunteer-form-container">
      <div class="volunteer-form-card">
        <h2 class="form-title">志愿者申请表单</h2>
        <form @submit.prevent="handleSubmit" class="form-content">
          <!-- 姓名输入 -->
          <div class="form-group">
            <label class="form-label" for="name">姓名：</label>
            <input
                type="text"
                id="name"
                v-model="formData.name"
                placeholder="请输入您的姓名"
                class="form-input"
                required
            />
          </div>

          <!-- 联系方式输入 -->
          <div class="form-group">
            <label class="form-label" for="contact">联系方式：</label>
            <input
                type="text"
                id="contact"
                v-model="formData.contact"
                placeholder="请输入手机号或邮箱"
                class="form-input"
                required
            />
          </div>

          <!-- 服务时间段选择 -->
          <div class="form-group">
            <label class="form-label" for="serviceTime">服务时间段：</label>
            <select
                id="serviceTime"
                v-model="formData.serviceTime"
                class="form-select"
                required
            >
              <option value="">请选择时间段</option>
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
                required
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
                required
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
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

// 表单数据对象
const formData = reactive({
  name: '',         // 姓名
  contact: '',      // 联系方式
  serviceTime: '',  // 服务时间段
  skills: '',       // 技能专长
  serviceDate: ''   // 可服务日期
});

// 加载状态
const isLoading = ref(false);

// 背景图URL（公益志愿主题）
const bgImage = 'src/assets/news1.png'; // 宽屏背景图

// 提交表单的处理函数
const handleSubmit = () => {
  if (!formData.name || !formData.contact || !formData.serviceTime ||
      !formData.skills || !formData.serviceDate) {
    alert('请填写完整表单内容');
    return;
  }

  isLoading.value = true;
  setTimeout(() => {
    console.log('表单数据：', formData);
    alert('表单提交成功！');
    formData.name = '';
    formData.contact = '';
    formData.serviceTime = '';
    formData.skills = '';
    formData.serviceDate = '';
    isLoading.value = false;
  }, 1500);
};
</script>

<style scoped>
/* 页面容器样式（背景图覆盖整个页面） */
.page-container {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
}

/* 半透明遮罩层（增强表单可读性） */
.page-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.88); /* 半透明白色遮罩 */
  z-index: -1;
}

/* 表单容器（居中布局） */
.volunteer-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px); /* 减去导航栏高度 */
  padding: 20px;
  position: relative;
}

/* 卡片样式（与原格式一致） */
.volunteer-form-card {
  width: 420px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  overflow: hidden;
}

/* 标题样式（与原格式一致） */
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

/* 表单内容区域（与原格式一致） */
.form-content {
  padding: 24px 32px 32px;
}

/* 表单项组（与原格式一致） */
.form-group {
  margin-bottom: 20px;
}

/* 标签样式（与原格式一致） */
.form-label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #555;
  font-weight: 500;
}

/* 输入框样式（与原格式一致） */
.form-input,
.form-select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  color: #666;
  transition: all 0.3s ease;
}

/* 输入框聚焦样式（与原格式一致） */
.form-input:focus,
.form-select:focus {
  border-color: #667eea;
  box-shadow: 0 0 8px rgba(102, 126, 234, 0.2);
  outline: none;
}

/* 提交按钮样式（与原格式一致） */
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
}

/* 按钮 hover 效果（与原格式一致） */
.submit-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
}

/* 导航栏样式（与原格式一致） */
.navigation {
  display: flex;
  justify-content: center;
  background-color: darkturquoise;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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

/* 加载状态动画（与原格式一致） */
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
</style>