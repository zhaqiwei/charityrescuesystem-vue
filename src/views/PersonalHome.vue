<template>
  <div class="personal-home-container">
    <!-- 侧边导航栏 -->
    <aside class="sidebar" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
      <div class="sidebar-header">
        <div class="toggle-btn" @click="toggleSidebar">
          {{ isSidebarCollapsed ? '☰' : '×' }}
        </div>
        <div class="sidebar-title" v-if="!isSidebarCollapsed">个人中心</div>
      </div>
      <nav class="sidebar-nav">
        <ul>
          <li @click="activeMenu = 'personalInfo'" :class="{ active: activeMenu === 'personalInfo' }">
            个人信息菜单
          </li>
          <li @click="activeMenu = 'myDonation'" :class="{ active: activeMenu === 'myDonation' }">
            我的捐赠菜单
          </li>
          <li @click="activeMenu = 'volunteerService'" :class="{ active: activeMenu === 'volunteerService' }">
            志愿者服务菜单
          </li>
          <li @click="activeMenu = 'setting'" :class="{ active: activeMenu === 'setting' }">
            设置菜单
          </li>
        </ul>
      </nav>
    </aside>

    <!-- 主内容区 -->
    <main class="main-content" :class="{ 'main-content-expanded': isSidebarCollapsed }">
      <section v-if="activeMenu === 'personalInfo'">
        <h2>个人信息</h2>
        <!-- 用户头像编辑区 -->
        <div class="avatar-edit-section">
          <div class="avatar-box">
            <img :src="avatarUrl" alt="用户头像" class="avatar" />
            <label for="avatarUpload" class="avatar-upload-label">
              上传头像
              <input type="file" id="avatarUpload" class="avatar-upload-input" @change="handleAvatarUpload" />
            </label>
          </div>
          <div class="nickname-box">
            <label>昵称：</label>
            <input v-model="nickname" placeholder="请输入昵称" />
          </div>
        </div>
        <!-- 基本信息表单 -->
        <form class="basic-info-form">
          <div class="form-item">
            <label>手机号：</label>
            <input v-model="phone" placeholder="手机号显示/编辑" />
          </div>
          <div class="form-item">
            <label>邮箱：</label>
            <input v-model="email" placeholder="邮箱显示/编辑" />
          </div>
          <div class="form-item">
            <label>性别：</label>
            <select v-model="gender">
              <option value="male">男</option>
              <option value="female">女</option>
              <option value="other">其他</option>
            </select>
          </div>
          <div class="form-item">
            <label>地址：</label>
            <input v-model="address" placeholder="地址输入框" />
          </div>
        </form>
        <!-- 账户安全区 -->
        <div class="account-security-section">
          <h3>账户安全</h3>
          <button class="security-btn" @click="openChangePassword">修改密码</button>
          <button class="security-btn" @click="openBindThirdParty">第三方账号绑定</button>
        </div>
      </section>

      <section v-else-if="activeMenu === 'myDonation'">
        <h2>我的捐赠</h2>
        <div class="donation-statistics">
          <p>捐赠总额显示：{{ donationAmount }}</p>
        </div>
      </section>

      <section v-else-if="activeMenu === 'volunteerService'">
        <h2>志愿者服务</h2>
        <div class="service-statistics">
          <p>服务时长统计：{{ serviceHours }} 小时</p>
        </div>
      </section>

      <section v-else-if="activeMenu === 'setting'">
        <h2>设置</h2>
        <p>这里可以进行一些个性化设置...</p>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 侧边栏折叠状态
const isSidebarCollapsed = ref(false);
// 当前激活的菜单
const activeMenu = ref('personalInfo');

// 个人信息相关数据
const avatarUrl = ref('https://i.pravatar.cc/100'); // 默认头像
const nickname = ref('');
const phone = ref('');
const email = ref('');
const gender = ref('male');
const address = ref('');

// 我的捐赠数据
const donationAmount = ref('0.00 元');

// 志愿者服务数据
const serviceHours = ref(0);

// 切换侧边栏状态
const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
};

// 处理头像上传（这里只是简单模拟，实际需结合后端）
const handleAvatarUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      avatarUrl.value = event.target.result;
    };
    reader.readAsDataURL(file);
  }
};

// 模拟打开修改密码弹窗
const openChangePassword = () => {
  alert('进入修改密码页面或弹窗...');
};

// 模拟打开第三方账号绑定弹窗
const openBindThirdParty = () => {
  alert('进入第三方账号绑定页面或弹窗...');
};
</script>

<style scoped>
/* 整体容器样式 */
.personal-home-container {
  display: flex;
  min-height: 100vh;
  background-color: #f9f9f9;
}

/* 侧边导航栏样式 */
.sidebar {
  width: 220px;
  background-color: #2f3237;
  color: #fff;
  transition: width 0.3s ease;
  overflow: hidden;
}

.sidebar-collapsed {
  width: 60px;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: #24262b;
}

.toggle-btn {
  cursor: pointer;
  font-size: 20px;
}

.sidebar-title {
  font-size: 18px;
  font-weight: bold;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav li {
  padding: 12px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.sidebar-nav li:hover {
  background-color: #40444b;
}

.sidebar-nav li.active {
  background-color: #00a1d6;
}

/* 主内容区样式 */
.main-content {
  flex: 1;
  padding: 20px;
  transition: margin-left 0.3s ease;
}

.main-content-expanded {
  margin-left: -160px;
}

/* 各模块通用样式 */
h2 {
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

/* 头像编辑区样式 */
.avatar-edit-section {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.avatar-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.avatar-upload-label {
  cursor: pointer;
  color: #00a1d6;
}

.avatar-upload-input {
  display: none;
}

.nickname-box {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

/* 基本信息表单样式 */
.basic-info-form {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: calc(50% - 10px);
}

.form-item label {
  font-weight: bold;
  color: #666;
}

.form-item input,
.form-item select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* 账户安全区样式 */
.account-security-section {
  margin-bottom: 20px;
}

.security-btn {
  margin-right: 10px;
  padding: 8px 15px;
  background-color: #00a1d6;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.security-btn:hover {
  background-color: #008db3;
}

/* 我的捐赠、志愿者服务统计样式 */
.donation-statistics,
.service-statistics {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>