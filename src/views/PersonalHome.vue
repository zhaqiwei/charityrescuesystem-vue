<template>
  <div class="personal-home-container">
    <!-- 侧边导航栏 -->
    <aside class="sidebar" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
      <div class="sidebar-header">
        <div class="toggle-btn" @click="toggleSidebar">
          {{ isSidebarCollapsed ? '☰' : '×' }}
        </div>
        <div class="sidebar-title" v-if="!isSidebarCollapsed">志愿者中心</div>
      </div>
      <nav class="sidebar-nav">
        <ul>
          <li @click="changeMenu('personalInfo')" :class="{ active: activeMenu === 'personalInfo' }">
            <i class="material-icons">person</i>
            <span v-if="!isSidebarCollapsed">个人信息</span>
          </li>
          <li @click="changeMenu('myDonation')" :class="{ active: activeMenu === 'myDonation' }">
            <i class="material-icons">account_balance_wallet</i>
            <span v-if="!isSidebarCollapsed">我的捐赠</span>
          </li>
          <li @click="changeMenu('volunteerService')" :class="{ active: activeMenu === 'volunteerService' }">
            <i class="material-icons">group</i>
            <span v-if="!isSidebarCollapsed">志愿者服务</span>
          </li>
          <li @click="changeMenu('myFavorites')" :class="{ active: activeMenu === 'myFavorites' }">
            <i class="material-icons">favorite</i>
            <span v-if="!isSidebarCollapsed">我的收藏</span>
          </li>
          <li @click="changeMenu('notifications')" :class="{ active: activeMenu === 'notifications' }">
            <i class="material-icons">notifications</i>
            <span v-if="!isSidebarCollapsed">消息通知</span>
          </li>

          <!-- 直接改为账户设置菜单 -->
          <li @click="changeMenu('accountSettings')" :class="{ active: activeMenu === 'accountSettings' }">
            <i class="material-icons">settings</i>
            <span v-if="!isSidebarCollapsed">账户设置</span>
          </li>

          <li @click="logout" class="logout-item">
            <i class="material-icons">logout</i>
            <span v-if="!isSidebarCollapsed">退出登录</span>
          </li>
        </ul>
      </nav>
    </aside>
    <!-- 主内容区 -->
    <main class="main-content" :class="{ 'main-content-expanded': isSidebarCollapsed }">
      <!-- 个人信息页面 -->
      <section v-if="activeMenu === 'personalInfo'">
        <h2 class="section-title">
          <i class="material-icons">person</i>
          个人信息
        </h2>

        <!-- 操作按钮区 -->
        <div class="action-buttons" v-if="!isEditing">
          <button class="edit-btn" @click="startEditing">
            <i class="material-icons">edit</i>
            <span>修改个人信息</span>
          </button>
        </div>

        <!-- 个人信息展示/编辑区 -->
        <div class="info-card">
          <div class="info-header">
            <div class="avatar-box">
              <div class="avatar-wrapper">
                <img :src="avatarUrl" alt="用户头像" class="avatar" />
                <label for="avatarUpload" class="avatar-upload-overlay" v-if="isEditing">
                  <i class="material-icons">cloud_upload</i>
                  <input type="file" id="avatarUpload" class="avatar-upload-input" @change="handleAvatarUpload" />
                </label>
              </div>
            </div>

            <div class="info-details">
              <div class="info-item" v-if="!isEditing">
                <span class="info-label">昵称：</span>
                <span class="info-value">{{ nickname || '未设置' }}</span>
              </div>
              <div class="info-item" v-if="!isEditing">
                <span class="info-label">手机号：</span>
                <span class="info-value">{{ phone || '未设置' }}</span>
              </div>
              <div class="info-item" v-if="!isEditing">
                <span class="info-label">邮箱：</span>
                <span class="info-value">{{ email || '未设置' }}</span>
              </div>
              <div class="info-item" v-if="!isEditing">
                <span class="info-label">地址：</span>
                <span class="info-value">{{ address || '未设置' }}</span>
              </div>

              <!-- 编辑模式下的表单 -->
              <div class="info-item" v-if="isEditing">
                <span class="info-label">昵称：</span>
                <input type="text" class="form-input" v-model="editingNickname" />
              </div>
              <div class="info-item" v-if="isEditing">
                <span class="info-label">手机号：</span>
                <input type="text" class="form-input" v-model="editingPhone" />
              </div>
              <div class="info-item" v-if="isEditing">
                <span class="info-label">邮箱：</span>
                <input type="email" class="form-input" v-model="editingEmail" />
              </div>
              <div class="info-item" v-if="isEditing">
                <span class="info-label">地址：</span>
                <input type="text" class="form-input" v-model="editingAddress" />
              </div>
            </div>
          </div>

          <!-- 编辑模式操作按钮 -->
          <div class="edit-actions" v-if="isEditing">
            <button class="save-btn" @click="saveChanges">
              <i class="material-icons">save</i>
              <span>保存修改</span>
            </button>
            <button class="cancel-btn" @click="cancelEditing">
              <i class="material-icons">close</i>
              <span>取消</span>
            </button>
          </div>
        </div>
      </section>

      <!-- 我的捐赠页面 -->
      <section v-if="activeMenu === 'myDonation'">
        <h2 class="section-title">
          <i class="material-icons">account_balance_wallet</i>
          我的捐赠
        </h2>
        <div class="stats-card">
          <div class="donation-amount">
            <p>捐赠总额</p>
            <p class="amount-value">{{ donationAmount }}</p>
          </div>
          <div class="donation-list">
            <h3>最近捐赠记录</h3>
            <ul>
              <li v-for="(item, index) in donationRecords" :key="index" class="donation-item">
                <div class="donation-item-info">
                  <p class="donation-item-name">{{ item.name }}</p>
                  <p class="donation-item-amount">{{ item.amount }}</p>
                </div>
                <p class="donation-item-date">{{ item.date }}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 志愿者服务页面 -->
      <section v-if="activeMenu === 'volunteerService'">
        <h2 class="section-title">
          <i class="material-icons">group</i>
          志愿者服务
        </h2>
        <div class="stats-card">
          <div class="service-amount">
            <p>累计服务时长</p>
            <p class="amount-value">{{ serviceHours }} 小时</p>
          </div>
          <div class="service-list">
            <h3>最近服务记录</h3>
            <ul>
              <li v-for="(item, index) in serviceRecords" :key="index" class="service-item">
                <div class="service-item-info">
                  <p class="service-item-name">{{ item.name }}</p>
                  <p class="service-item-hours">{{ item.hours }} 小时</p>
                </div>
                <p class="service-item-date">{{ item.date }}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 我的收藏页面 -->
      <section v-if="activeMenu === 'myFavorites'">
        <h2 class="section-title">
          <i class="material-icons">favorite</i>
          我的收藏
        </h2>
        <div class="favorites-card">
          <div v-if="favoriteItems.length > 0" class="favorites-list">
            <div v-for="(item, index) in favoriteItems" :key="index" class="favorite-item">
              <img :src="item.image" alt="收藏项目" class="favorite-item-image" />
              <div class="favorite-item-info">
                <h3 class="favorite-item-title">{{ item.title }}</h3>
                <p class="favorite-item-desc">{{ item.description }}</p>
                <button class="unfavorite-btn" @click="removeFavorite(index)">
                  <i class="material-icons">favorite_border</i>
                  <span>取消收藏</span>
                </button>
              </div>
            </div>
          </div>
          <div v-else class="no-favorites">
            <i class="material-icons">favorite_border</i>
            <p>您还没有收藏任何内容</p>
          </div>
        </div>
      </section>

      <!-- 消息通知页面 -->
      <section v-if="activeMenu === 'notifications'">
        <h2 class="section-title">
          <i class="material-icons">notifications</i>
          消息通知
        </h2>
        <div class="notifications-card">
          <div v-if="notificationItems.length > 0" class="notifications-list">
            <div v-for="(item, index) in notificationItems" :key="index" class="notification-item">
              <i :class="['material-icons', 'notification-icon', item.type === 'new' ? 'new' : '']">
                {{ item.icon }}
              </i>
              <div class="notification-item-content">
                <h3 class="notification-item-title">{{ item.title }}</h3>
                <p class="notification-item-desc">{{ item.description }}</p>
                <p class="notification-item-time">{{ item.time }}</p>
              </div>
            </div>
          </div>
          <div v-else class="no-notifications">
            <i class="material-icons">notifications_off</i>
            <p>没有新的消息通知</p>
          </div>
        </div>
      </section>

      <!-- 账户设置页面 -->
      <section v-if="activeMenu === 'accountSettings'">
        <h2 class="section-title">
          <i class="material-icons">account_circle</i>
          账户设置
        </h2>
        <div class="settings-card">
          <div class="setting-item" @click="showChangePasswordDialog = true">
            <i class="material-icons">lock</i>
            <div class="setting-item-info">
              <h3>修改密码</h3>
              <p>更新您的账户密码</p>
            </div>
            <i class="material-icons">keyboard_arrow_right</i>
          </div>
          <div class="setting-item" @click="openDeleteAccount">
            <i class="material-icons">delete</i>
            <div class="setting-item-info">
              <h3>注销账户</h3>
              <p>永久注销您的账户</p>
            </div>
            <i class="material-icons">keyboard_arrow_right</i>
          </div>
        </div>
      </section>

      <!-- 修改密码弹窗 -->
      <div v-if="showChangePasswordDialog" class="dialog-overlay" @click.self="closeChangePasswordDialog">
        <div class="password-dialog">
          <div class="dialog-header">
            <h3>修改密码</h3>
            <i class="material-icons close-icon" @click="closeChangePasswordDialog">close</i>
          </div>

          <div class="dialog-body">
            <div class="form-group">
              <label for="oldPassword">当前密码</label>
              <input
                  type="password"
                  id="oldPassword"
                  v-model="passwordData.oldPassword"
                  placeholder="请输入当前密码"
              >
            </div>

            <div class="form-group">
              <label for="newPassword">新密码</label>
              <input
                  type="password"
                  id="newPassword"
                  v-model="passwordData.newPassword"
                  placeholder="请输入新密码"
              >
            </div>

            <div class="form-group">
              <label for="confirmPassword">确认新密码</label>
              <input
                  type="password"
                  id="confirmPassword"
                  v-model="passwordData.confirmPassword"
                  placeholder="请再次输入新密码"
              >
            </div>

            <div v-if="passwordError" class="error-message">
              <i class="material-icons">error</i>
              <span>{{ passwordError }}</span>
            </div>
          </div>

          <div class="dialog-footer">
            <button class="cancel-btn" @click="closeChangePasswordDialog">取消</button>
            <button class="confirm-btn" @click="submitPasswordChange">确认修改</button>
          </div>
        </div>
      </div>

      <!-- 保存成功提示 -->
      <div class="success-toast" v-if="isSaveSuccess">
        <i class="material-icons">check_circle</i>
        <span>{{ successMessage }}</span>
      </div>
    </main>
    <div><router-link to="/" style="background-color: aquamarine"><el-button>返回主页</el-button></router-link></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// 侧边栏状态
const isSidebarCollapsed = ref(false);
const activeMenu = ref('personalInfo');
const isEditing = ref(false);
const isSaveSuccess = ref(false);
const successMessage = ref('操作成功！');

// 个人信息数据
const avatarUrl = ref('https://picsum.photos/200/200?random=1');
const nickname = ref('志愿者小明');
const phone = ref('138****5678');
const email = ref('volunteer@example.com');
const gender = ref('male');
const address = ref('北京市朝阳区');

// 编辑模式临时数据
const editingNickname = ref(nickname.value);
const editingPhone = ref(phone.value);
const editingEmail = ref(email.value);
const editingGender = ref(gender.value);
const editingAddress = ref(address.value);

// 捐赠记录
const donationAmount = ref('1,280.00 元');
const donationRecords = ref([
  { name: "希望小学图书捐赠", amount: "200.00 元", date: "2023-05-18" },
  { name: "环保公益活动", amount: "100.00 元", date: "2023-04-25" },
  { name: "流浪动物救助", amount: "50.00 元", date: "2023-04-10" }
]);

// 服务记录
const serviceHours = ref(86);
const serviceRecords = ref([
  { name: "社区垃圾分类宣传", hours: "4", date: "2023-05-20" },
  { name: "敬老院志愿服务", hours: "6", date: "2023-05-01" },
  { name: "环保徒步活动", hours: "3", date: "2023-04-15" }
]);

// 收藏内容
const favoriteItems = ref([
  {
    image: "https://picsum.photos/300/200?random=10",
    title: "山区儿童助学计划",
    description: "为山区儿童提供学习用品和教育支持"
  },
  {
    image: "https://picsum.photos/300/200?random=11",
    title: "城市公园环保活动",
    description: "每周日上午9点在城市公园进行垃圾清理"
  }
]);

// 通知消息
const notificationItems = ref([
  { type: 'new', icon: 'event', title: "新的志愿者活动", description: "社区将在6月1日举办儿童节特别活动，欢迎报名参加", time: "2小时前" },
  { type: 'normal', icon: 'account_balance_wallet', title: "捐赠确认", description: "您的200元捐赠已确认，感谢您的支持", time: "昨天" },
  { type: 'normal', icon: 'group', title: "服务记录更新", description: "您的志愿服务时长已更新至86小时", time: "3天前" }
]);

// 切换侧边栏折叠状态
const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
};

// 切换菜单项
const changeMenu = (menuName) => {
  activeMenu.value = menuName;
};

// 开始编辑个人信息
const startEditing = () => {
  editingNickname.value = nickname.value || '';
  editingPhone.value = phone.value || '';
  editingEmail.value = email.value || '';
  editingGender.value = gender.value || '';
  editingAddress.value = address.value || '';

  isEditing.value = true;
  const infoCard = document.querySelector('.info-card');
  infoCard.classList.add('edit-mode-animation');
  setTimeout(() => {
    infoCard.classList.remove('edit-mode-animation');
  }, 300);
};

// 保存修改
const saveChanges = () => {
  setTimeout(() => {
    nickname.value = editingNickname.value;
    phone.value = editingPhone.value;
    email.value = editingEmail.value;
    gender.value = editingGender.value;
    address.value = editingAddress.value;

    isEditing.value = false;
    isSaveSuccess.value = true;
    successMessage.value = '操作成功！';

    const toast = document.querySelector('.success-toast');
    toast.classList.add('show-toast');
    setTimeout(() => {
      toast.classList.remove('show-toast');
      isSaveSuccess.value = false;
    }, 3000);
  }, 800);
};

// 取消编辑
const cancelEditing = () => {
  isEditing.value = false;
};

// 处理头像上传
const handleAvatarUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      avatarUrl.value = event.target.result;
      const avatar = document.querySelector('.avatar');
      avatar.classList.add('scale-up');
      setTimeout(() => {
        avatar.classList.remove('scale-up');
      }, 300);
    };
    reader.readAsDataURL(file);
  }
};

// 取消收藏
const removeFavorite = (index) => {
  favoriteItems.value.splice(index, 1);
  isSaveSuccess.value = true;
  successMessage.value = "已取消收藏";
  const toast = document.querySelector('.success-toast');
  toast.classList.add('show-toast');
  setTimeout(() => {
    toast.classList.remove('show-toast');
    isSaveSuccess.value = false;
  }, 2000);
};

// 模拟操作
const openChangePassword = () => {
  isSaveSuccess.value = true;
  successMessage.value = "进入密码修改页面";
  const toast = document.querySelector('.success-toast');
  toast.classList.add('show-toast');
  setTimeout(() => {
    toast.classList.remove('show-toast');
    isSaveSuccess.value = false;
  }, 2000);
};

const openDeleteAccount = () => {
  if (confirm("确定要注销账户吗？此操作不可恢复")) {
    isSaveSuccess.value = true;
    successMessage.value = "账户已注销";
    const toast = document.querySelector('.success-toast');
    toast.classList.add('show-toast');
    setTimeout(() => {
      toast.classList.remove('show-toast');
      isSaveSuccess.value = false;
    }, 2000);
  }
};

// 退出登录
const logout = () => {
  if (confirm("确定要退出登录吗？")) {
    isSaveSuccess.value = true;
    successMessage.value = "已退出登录";
    const toast = document.querySelector('.success-toast');
    toast.classList.add('show-toast');
    setTimeout(() => {
      toast.classList.remove('show-toast');
      isSaveSuccess.value = false;
      // 这里可以添加实际的退出登录逻辑
    }, 2000);
  }
};

// 新增密码修改相关状态
const showChangePasswordDialog = ref(false);
const passwordData = ref({
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
});
const passwordError = ref('');

// 打开修改密码弹窗

// 关闭修改密码弹窗
const closeChangePasswordDialog = () => {
  showChangePasswordDialog.value = false;
  passwordData.value = { oldPassword: '', newPassword: '', confirmPassword: '' };
  passwordError.value = '';
};

// 提交密码修改
const submitPasswordChange = () => {
  // 简单验证
  if (!passwordData.value.oldPassword) {
    passwordError.value = '请输入当前密码';
    return;
  }

  if (!passwordData.value.newPassword) {
    passwordError.value = '请输入新密码';
    return;
  }

  if (passwordData.value.newPassword.length < 6) {
    passwordError.value = '密码长度至少为6位';
    return;
  }

  if (passwordData.value.newPassword !== passwordData.value.confirmPassword) {
    passwordError.value = '两次输入的新密码不一致';
    return;
  }

  // 模拟密码修改成功
  setTimeout(() => {
    showChangePasswordDialog.value = false;
    isSaveSuccess.value = true;
    successMessage.value = '密码修改成功！';
    const toast = document.querySelector('.success-toast');
    toast.classList.add('show-toast');
    setTimeout(() => {
      toast.classList.remove('show-toast');
      isSaveSuccess.value = false;
    }, 3000);

    // 清空表单
    passwordData.value = { oldPassword: '', newPassword: '', confirmPassword: '' };
    passwordError.value = '';
  }, 1000);
};
</script>

<style scoped>
/* 导入Material Icons图标库 */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

/* 整体容器样式 */
.personal-home-container {
  display: flex;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* 侧边导航栏样式 */
.sidebar {
  width: 240px;
  background-color: #2f3237;
  color: #fff;
  transition: width 0.3s ease;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
}

.sidebar-collapsed {
  width: 64px;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: #24262b;
  border-bottom: 1px solid #333;
}

.toggle-btn {
  cursor: pointer;
  font-size: 24px;
  transition: transform 0.3s ease;
}

.sidebar-collapsed .toggle-btn {
  transform: rotate(180deg);
}

.sidebar-title {
  font-size: 20px;
  font-weight: bold;
  transition: opacity 0.3s ease;
}

.sidebar-collapsed .sidebar-title {
  opacity: 0;
  visibility: hidden;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav li {
  padding: 16px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, padding-left 0.3s ease;
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
}

.sidebar-collapsed .sidebar-nav li {
  padding-left: 20px;
  justify-content: center;
}

.sidebar-nav li:hover, .sidebar-nav li.active {
  background-color: #40444b;
}

.sidebar-nav li.active {
  position: relative;
}

.sidebar-nav li.active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
}

.sidebar-nav li i {
  font-size: 20px;
  transition: transform 0.3s ease;
}

.sidebar-collapsed .sidebar-nav li span {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.logout-item {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #40444b;
}

.logout-item i {
}

/* 主内容区样式 */
.main-content {
  flex: 1;
  padding: 30px;
  transition: margin-left 0.3s ease;
  overflow-y: auto;
}

.main-content-expanded {
  margin-left: -176px;
}

.section-title {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}



/* 新增功能样式 - 捐赠记录 */
.stats-card {
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 20px;
  margin-bottom: 20px;
}

.donation-item, .service-item {
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
}

.donation-item:last-child, .service-item:last-child {
  border-bottom: none;
}

.donation-item-info, .service-item-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.donation-item-name, .service-item-name {
  font-weight: 500;
}

.donation-item-amount, .service-item-hours {
  font-weight: bold;
}

.donation-item-date, .service-item-date {
  font-size: 14px;
  margin-top: 5px;
}

/* 新增功能样式 - 我的收藏 */
.favorite-item {
  display: flex;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
}

.favorite-item:last-child {
  border-bottom: none;
}

.favorite-item-image {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
}

.favorite-item-info {
  flex: 1;
}

.favorite-item-title {
  font-weight: 600;
  margin-bottom: 5px;
}

.favorite-item-desc {
  margin-bottom: 10px;
  font-size: 14px;
}

.unfavorite-btn {
  padding: 6px 12px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s ease;
}

.unfavorite-btn:hover {
  background-color: #e0e0e0;
}

.no-favorites, .no-notifications {
  text-align: center;
  padding: 30px 0;
}

.no-favorites i, .no-notifications i {
  font-size: 48px;
  margin-bottom: 15px;
  color: #e0e0e0;
}

/* 新增功能样式 - 消息通知 */
.notification-item {
  display: flex;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
}

.notification-item:last-child {
  border-bottom: none;
}

.notification-icon {
  min-width: 36px;
  display: flex;
  align-items: flex-start;
  color: #999; /* 默认颜色 */
}

.notification-icon.new {
  position: relative;
}

.notification-icon.new::after {
  content: "";
  position: absolute;
  top: -2px;
  right: -2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.notification-item-content {
  flex: 1;
}

.notification-item-title {
  font-weight: 600;
  margin-bottom: 5px;
}

.notification-item-desc {
  margin-bottom: 5px;
  font-size: 14px;
}

.notification-item-time {
  color: #999;
  font-size: 12px;
}

/* 新增功能样式 - 设置页面 */
.setting-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.setting-item:hover {
  background-color: #f9f9f9;
}

.setting-item-info {
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
}


/* 个人信息编辑样式 */
.action-buttons {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.edit-btn, .save-btn, .cancel-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.edit-btn {
  color: white;
}

.edit-btn:hover {
  background-color: #f5a623;
  transform: translateY(-2px);
}

.save-btn {
  color: white;
}

.save-btn:hover {
  transform: translateY(-2px);
}

.cancel-btn {
  background-color: #e0e0e0;
}

.cancel-btn:hover {
  background-color: #d0d0d0;
  transform: translateY(-2px);
}

.info-card {
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
  margin-bottom: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.edit-mode-animation {
  animation: editMode 0.3s ease;
}

@keyframes editMode {
  0% { transform: scale(0.98); opacity: 0.9; }
  100% { transform: scale(1); opacity: 1; }
}

.info-header {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 30px;
  align-items: flex-start;
}

.avatar-box {
  flex: 0 0 auto;
}

.avatar-wrapper {
  position: relative;
  width: 140px;
  height: 140px;
}

.avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: scale(1.05);
}

.avatar-upload-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 36px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 50% 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.avatar-wrapper:hover .avatar-upload-overlay {
  opacity: 1;
  visibility: visible;
}

.info-details {
  flex: 1;
  min-width: 200px;
}

.info-item, .info-group {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.info-label {
  font-weight: 500;
  min-width: 80px;
}

.info-value {
  font-size: 16px;
}

.form-input, .form-select {
  width: 100%;
  padding: 12px 15px;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-input:focus, .form-select:focus {
  box-shadow: 0 0 0 3px rgba(0, 161, 214, 0.2);
  outline: none;
}

.detail-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .detail-info {
    grid-template-columns: 1fr;
  }
}

.edit-actions {
  display: flex;
  gap: 15px;
  margin-top: 30px;
  justify-content: flex-end;
}

.success-toast {
  position: fixed;
  bottom: 30px;
  right: 30px;
  color: white;
  padding: 15px 25px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
  transform: translateY(20px);
  z-index: 100;
}

.success-toast.show-toast {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.scale-up {
  animation: scaleUp 0.5s ease;
}

@keyframes scaleUp {
  0% { transform: scale(0.9); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

/* 响应式优化 */
@media (max-width: 768px) {
  .sidebar {
    width: 64px;
  }

  .sidebar-collapsed {
    width: 0;
  }

  .main-content {
    padding: 15px;
  }

  .info-header {
    flex-direction: column;
    align-items: center;
  }

  .info-details {
    width: 100%;
  }
}

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.password-dialog {
  background-color: white;
  border-radius: 12px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.dialog-header h3 {
  margin: 0;
  font-size: 20px;
  color: #333;
}

.close-icon {
  cursor: pointer;
  color: #999;
  font-size: 24px;
  transition: color 0.3s;
}

.close-icon:hover {
  color: #333;
}

.dialog-body {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.form-group input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 161, 214, 0.2);
}

.error-message {
  background-color: #ffebee;
  color: #f44336;
  padding: 10px 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
}

.error-message i {
  margin-right: 8px;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  border-top: 1px solid #eee;
  gap: 15px;
}

.dialog-footer button {
  padding: 10px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s;
}

.cancel-btn {
  background-color: #f0f0f0;
  color: #333;
}

.cancel-btn:hover {
  background-color: #e0e0e0;
}

.confirm-btn {
  color: white;
}


</style>