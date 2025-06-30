<template>
  <div class="login-container">
    <div class="form-container" :class="{'right-panel-active': showRegister}">
      <!-- 登录表单 -->
      <div class="form sign-in-container">
        <form @submit.prevent="handleLogin">
          <h1>登录账号</h1>
          <input type="text" placeholder="用户名" v-model="loginUsername" required />
          <input type="password" placeholder="密码" v-model="loginPassword" required />
          <button type="submit">登录</button>
        </form>
      </div>

      <!-- 注册表单 -->
      <div class="form sign-up-container">
        <form @submit.prevent="handleRegister">
          <h1>创建账号</h1>
          <input type="text" placeholder="用户名" v-model="registerUsername" required />
          <input type="password" placeholder="密码" v-model="registerPassword" required />
          <input type="password" placeholder="确认密码" v-model="registerConfirmPassword" required />
          <button type="submit">注册</button>
        </form>
      </div>

      <!-- 覆盖面板 -->
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>已有账号?</h1>
            <p>请使用您的账号信息登录</p>
            <button class="ghost" @click="showRegister = false">登录</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>新用户?</h1>
            <p>立即注册，开启您的旅程</p>
            <button class="ghost" @click="showRegister = true">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import request from '@/utils/request'

export default {
  name: 'LoginView',
  data() {
    return {
      showRegister: false,
      loginUsername: '',
      loginPassword: '',
      registerUsername: '',
      registerPassword: '',
      registerConfirmPassword: ''
    }
  },
  methods: {
    async handleLogin() {
      if (!this.loginUsername || !this.loginPassword) {
        ElMessage.error('请输入用户名和密码')
        return
      }

      try {
        const response = await request.post('/user/login', {
          username: this.loginUsername,
          password: this.loginPassword
        })

        if (response.code === 200) {
          // 存储token（简单实现）
          localStorage.setItem('token', response.data.token)

          ElMessage.success('登录成功')
          this.$router.push('/')
        } else {
          ElMessage.error(response.message || '登录失败')
        }
      } catch (error) {
        ElMessage.error('登录请求失败，请检查网络')
      }
    },

    async handleRegister() {
      if (this.registerPassword !== this.registerConfirmPassword) {
        ElMessage.error('两次输入的密码不一致')
        return
      }

      try {
        const response = await request.post('/user/register', {
          username: this.registerUsername,
          password: this.registerPassword
        })

        if (response.code === 200) {
          ElMessage.success('注册成功，请登录')
          this.showRegister = false
        } else {
          ElMessage.error(response.message || '注册失败')
        }
      } catch (error) {
        ElMessage.error('注册请求失败，请检查网络')
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url('../assets/shoubei.png') no-repeat center center fixed;
  background-size: cover;
  padding: 20px;
}

.form-container {
  position: relative;
  width: 850px;
  height: 500px;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(8px);
}

.form-container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.form-container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
}

.form-container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.form-container.right-panel-active .overlay {
  transform: translateX(50%);
}

.form-container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.form-container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.form {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

form {
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  font-weight: bold;
  margin: 0;
  color: #333;
  font-size: 32px;
  margin-bottom: 30px;
}

input {
  background: #f5f7fa;
  border: 1px solid #e0e3e9;
  padding: 14px 18px;
  margin: 10px 0;
  width: 100%;
  border-radius: 10px;
  outline: none;
  transition: all 0.3s;
  font-size: 15px;
}

input:focus {
  border-color: #4a6cf7;
  box-shadow: 0 0 0 3px rgba(74, 108, 247, 0.2);
}

button {
  border-radius: 50px;
  border: none;
  background: #4a6cf7;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  padding: 14px 45px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 20px;
  box-shadow: 0 4px 15px rgba(74, 108, 247, 0.3);
  width: 100%;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(74, 108, 247, 0.4);
  background: #3a5ae8;
}

button:active {
  transform: translateY(1px);
}

button.ghost {
  background: transparent;
  border: 2px solid #fff;
  box-shadow: none;
  width: auto;
  margin-top: 15px;
}

button.ghost:hover {
  background: rgba(255, 255, 255, 0.2);
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.overlay {
  background: url('../assets/b1.png') no-repeat center center;
  background-size: cover;
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;


  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  display: flex;
}

.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.overlay-panel h1 {
  color: white;
  font-size: 36px;
  margin-bottom: 15px;
}

.overlay-panel p {
  font-size: 16px;
  margin: 0 0 25px;
  color: rgba(255, 255, 255, 0.9);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .form-container {
    width: 100%;
    height: auto;
    min-height: 500px;
  }

  .sign-in-container,
  .sign-up-container {
    width: 100%;
    position: relative;
  }

  .overlay-container {
    display: none;
  }

  .form-container.right-panel-active .sign-in-container,
  .form-container.right-panel-active .sign-up-container {
    transform: translateX(0);
  }

  .form-container.right-panel-active .sign-in-container {
    opacity: 0;
  }
}
</style>