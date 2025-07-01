<template>
  <div class="gongyizixun-container">
    <!-- 返回按钮 -->
    <router-link to="/" class="back-button">
      <i class="el-icon-back"></i> 返回首页
    </router-link>

    <!-- 页面标题区域 -->
    <div class="gongyizixun-header">
      <h1 class="gongyizixun-title">公益资讯</h1>
      <div class="gongyizixun-subtitle">
        关注最新公益动态，传递爱心与温暖。中国石油大学志愿者团队携手克拉玛依，共同打造爱心救助平台
      </div>
    </div>

    <!-- 动态卡片展示区 -->
    <div class="dynamic-cards-section">
      <h2 class="section-title">热门公益项目</h2>

      <div class="cards-container">
        <!-- 希望小学卡片 -->
        <div class="card">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" fill="white"/>
          </svg>
          <div class="card__content">
            <h2 class="card__title">希望小学</h2>
            <p class="card__description">为克拉玛依地区贫困儿童提供教育支持</p>
          </div>
        </div>

        <!-- 医疗援助卡片 -->
        <div class="card card-type-1">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4.26C8.67 2.15 5 4.9 5 8.5c0 3.03 2.16 5.75 5.17 7.63L12 17l1.83-1.87C16.84 14.25 19 11.53 19 8.5c0-3.6-3.67-6.35-7-4.24zm0 4.24c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4 1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm8 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" fill="white"/>
          </svg>
          <div class="card__content">
            <h2 class="card__title">医疗援助</h2>
            <p class="card__description">为偏远地区提供基础医疗服务</p>
          </div>
        </div>

        <!-- 环保行动卡片 -->
        <div class="card card-type-2">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.48 12.35c-1.57-4.08-7.16-4.3-5.81-10.23.1-.44-.37-.78-.75-.55C9.29 3.71 6.68 8 8.87 13.62c.18.46-.36.89-.75.59-1.81-1.37-2-3.34-1.84-4.75.06-.52-.62-.77-.91-.34C4.69 10.16 4 11.84 4 14.37c.38 5.6 5.11 7.32 6.81 7.54 2.43.31 5.06-.14 6.95-1.87 2.08-1.93 2.84-5.01 1.72-7.69z" fill="white"/>
          </svg>
          <div class="card__content">
            <h2 class="card__title">环保行动</h2>
            <p class="card__description">保护克拉玛依地区的生态环境</p>
          </div>
        </div>

        <!-- 老人关怀卡片 -->
        <div class="card card-type-3">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="white"/>
          </svg>
          <div class="card__content">
            <h2 class="card__title">老人关怀</h2>
            <p class="card__description">关爱社区孤寡老人生活</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 公益资讯列表 -->
    <div class="news-section">
      <h2 class="section-title">最新公益资讯</h2>

      <div class="news-grid">
        <div
            v-for="(news, index) in newsList"
            :key="index"
            class="news-card"
        >
          <img :src="news.image" :alt="news.title" class="news-card-image">
          <div class="news-card-content">
            <span class="news-card-tag">{{ news.category }}</span>
            <h3 class="news-card-title">{{ news.title }}</h3>
            <p class="news-card-excerpt">{{ news.description }}</p>
            <div class="news-card-meta">
              <span>{{ news.date }}</span>
              <span><i class="el-icon-view"></i> {{ news.views }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <footer class="gongyizixun-footer">
      <p>油城爱心桥 - 中国石油大学助力克拉玛依爱心救助平台</p>
      <p>© 2023 版权所有 | 公益热线: 0990-1234567</p>
    </footer>
  </div>
  <!-- 浮动按钮 - 访问大模型 -->
  <div class="floating-chat-button" @click="openDoubaoChat">
    <div class="chat-icon">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-6h2v6zm0-8h-2V7h2v4zm5 6h-2v-2h2v2zm0-3h-2V7h2v8z" fill="white"/>
      </svg>
    </div>
    <div class="chat-label">智能咨询</div>
  </div>
</template>

<script>
export default {
  name: 'GongyizixunView',
  data() {
    return {
      newsList: [
        {
          title: "石大志愿者赴克拉玛依偏远小学开展支教活动",
          description: "近日，中国石油大学30名志愿者前往克拉玛依偏远地区学校，开展为期两周的支教活动。志愿者们为当地学生带来了丰富多彩的课程，包括科学实验、艺术创作和体育活动...",
          category: "支教助学",
          date: "2023-10-15",
          views: "1,245",
          image: "https://images.unsplash.com/photo-1543269865-cbf427effbad"
        },
        {
          title: "克拉玛依启动'绿色家园'环保公益项目",
          description: "克拉玛依市政府联合多家企业，共同启动'绿色家园'环保公益项目，计划在三年内种植10万棵树。中国石油大学环境工程学院的师生积极参与该项目，提供技术支持...",
          category: "环保行动",
          date: "2023-09-28",
          views: "2,187",
          image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7"
        },
        {
          title: "爱心医疗队为克拉玛依牧民提供免费诊疗服务",
          description: "由石大医学院师生组成的爱心医疗队，深入克拉玛依牧区为当地牧民提供免费诊疗服务。医疗队携带了便携式医疗设备，为200多名牧民提供了健康检查、常见病治疗...",
          category: "医疗援助",
          date: "2023-10-05",
          views: "1,876",
          image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
        },
        {
          title: "'暖冬行动'为贫困家庭送去温暖物资",
          description: "中国石油大学志愿者协会发起'暖冬行动'，为克拉玛依200户贫困家庭送去过冬物资。志愿者们筹集了棉衣、棉被、取暖器等物资，并亲自送到受助家庭...",
          category: "爱心捐赠",
          date: "2023-11-12",
          views: "3,542",
          image: "https://images.unsplash.com/photo-1512850183-6d7990f42385"
        },
        {
          title: "社区老人数字生活培训计划启动",
          description: "针对老年人使用智能设备困难的问题，石大志愿者团队启动社区老人数字生活培训计划。该计划覆盖克拉玛依市10个社区，每周定期开展智能手机使用...",
          category: "社区服务",
          date: "2023-10-20",
          views: "2,309",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
        },
        {
          title: "爱心企业捐赠教学设备改善希望小学条件",
          description: "多家爱心企业向克拉玛依市希望小学捐赠了价值50万元的教学设备，包括电脑、投影仪和实验器材，大大改善了学校的教学条件...",
          category: "教育援助",
          date: "2023-09-22",
          views: "1,765",
          image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
        }
      ],
      isChatOpen: false // 聊天窗口状态
    };
  },
  mounted() {
    // 卡片悬停效果增强
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.zIndex = '10';
      });

      card.addEventListener('mouseleave', () => {
        card.style.zIndex = '1';
      });
    });
  },
  methods: {
    openDoubaoChat() {
      // 这里可以选择打开内嵌聊天窗口或跳转到聊天页面
      // 方案1: 跳转到独立的聊天页面
      this.$router.push('/ai');

      // 方案2: 在当前页面打开模态框（需要额外实现模态框组件）
      // this.isChatOpen = true;
    }
  }
};
</script>

<style scoped>

/* 浮动聊天按钮样式 */
.floating-chat-button {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4a90e2, #3a78c2);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(74, 144, 226, 0.4);
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s ease;
  animation: float 3s ease-in-out infinite;
}

.floating-chat-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(74, 144, 226, 0.5);
  background: linear-gradient(135deg, #3a78c2, #2a60a2);
}

.chat-icon {
  width: 36px;
  height: 36px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.chat-icon svg {
  width: 20px;
  height: 20px;
  fill: #4a90e2;
}

.chat-label {
  color: white;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
}

/* 浮动动画 */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .floating-chat-button {
    right: 20px;
    bottom: 20px;
    width: 60px;
    height: 60px;
  }

  .chat-icon {
    width: 28px;
    height: 28px;
  }

  .chat-icon svg {
    width: 16px;
    height: 16px;
  }

  .chat-label {
    font-size: 10px;
  }
}

.gongyizixun-container {
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 20px;
}

/* 返回按钮样式 */
.back-button {
  display: inline-flex;
  align-items: center;
  margin: 0 0 30px;
  padding: 10px 25px;
  background: #0d4a9e;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  transition: all 0.3s;
  font-weight: 500;
  box-shadow: 0 4px 10px rgba(13, 74, 158, 0.3);
  font-size: 16px;
}

.back-button:hover {
  background: #1a6dcc;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(13, 74, 158, 0.4);
}

.back-button i {
  margin-right: 8px;
}

/* 页面标题区域 */
.gongyizixun-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 40px 20px;
  background: linear-gradient(135deg, #0d4a9e 0%, #1a6dcc 100%);
  border-radius: 15px;
  color: white;
  box-shadow: 0 15px 35px rgba(13, 74, 158, 0.25);
  position: relative;
  overflow: hidden;
}

.gongyizixun-header::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  transform: rotate(30deg);
}

.gongyizixun-title {
  font-size: 42px;
  margin-bottom: 15px;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
}

.gongyizixun-subtitle {
  font-size: 20px;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  position: relative;
}

/* 动态卡片区域 */
.dynamic-cards-section {
  margin: 50px 0;
}

.section-title {
  text-align: center;
  font-size: 32px;
  color: #0d4a9e;
  margin-bottom: 40px;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, #ffcc33, #ff9933);
  border-radius: 2px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-bottom: 50px;
}

/* 动态卡片组件样式 */
.card {
  position: relative;
  width: 320px;
  height: 220px;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.card svg {
  width: 60px;
  fill: #fff;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  filter: drop-shadow(0 2px 5px rgba(0,0,0,0.3));
}

.card:hover {
  transform: rotate(-5deg) scale(1.1);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.card__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 100%;
  height: 100%;
  padding: 25px;
  box-sizing: border-box;
  background: linear-gradient(rgba(255, 255, 255, 0.95), rgba(245, 245, 245, 0.95));
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.card:hover .card__content {
  transform: translate(-50%, -50%) rotate(0deg);
  opacity: 1;
}

.card__title {
  margin: 0;
  font-size: 26px;
  color: #0d4a9e;
  font-weight: 700;
  margin-bottom: 10px;
}

.card__description {
  margin: 10px 0 0;
  font-size: 16px;
  color: #555;
  line-height: 1.6;
}

.card:hover svg {
  transform: scale(0) rotate(-45deg);
}

/* 卡片类型变体 */
.card-type-1 {
  background: linear-gradient(-45deg, #3494E6, #EC6EAD);
}

.card-type-2 {
  background: linear-gradient(-45deg, #00c6ff, #0072ff);
}

.card-type-3 {
  background: linear-gradient(-45deg, #1D976C, #93F9B9);
}

/* 资讯列表样式 */
.news-section {
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  margin-bottom: 50px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.news-card {
  background: #f9fbfe;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
  border: 1px solid #eaeef5;
}

.news-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border-color: #d0ddf5;
}

.news-card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 3px solid #ffcc33;
}

.news-card-content {
  padding: 25px;
}

.news-card-tag {
  display: inline-block;
  padding: 6px 15px;
  background: #ffebcc;
  color: #ff9933;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 15px;
}

.news-card-title {
  font-size: 22px;
  margin-bottom: 15px;
  color: #0d4a9e;
  line-height: 1.4;
}

.news-card-excerpt {
  color: #555;
  margin-bottom: 20px;
  line-height: 1.7;
}

.news-card-meta {
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 14px;
  border-top: 1px solid #eee;
  padding-top: 15px;
}

/* 页脚样式 */
.gongyizixun-footer {
  text-align: center;
  padding: 30px;
  color: #666;
  font-size: 15px;
  border-top: 1px solid #eee;
  margin-top: 50px;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .cards-container {
    gap: 30px;
  }

  .card {
    width: 280px;
    height: 200px;
  }
}

@media (max-width: 768px) {
  .gongyizixun-title {
    font-size: 32px;
  }

  .gongyizixun-subtitle {
    font-size: 18px;
  }

  .section-title {
    font-size: 28px;
  }

  .news-grid {
    grid-template-columns: 1fr;
  }

  .card {
    width: 100%;
    max-width: 350px;
  }
}

@media (max-width: 576px) {
  .gongyizixun-title {
    font-size: 28px;
  }

  .section-title {
    font-size: 24px;
  }
}
</style>