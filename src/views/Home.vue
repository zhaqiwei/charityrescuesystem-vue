<template>
  <div class="home-container">
    <!-- 头部 - 添加背景图片 -->
    <div class="header" :style="headerStyle">
      <div class="logo-container">
        <img src="../assets/logo.png" alt="logo" class="logo" />
      </div>

      <div class="title-container">
        <div class="main-title">油城爱心桥</div>
        <div class="sub-title">中国石油大学助力克拉玛依爱心救助平台</div>
      </div>

      <div class="auth-links">
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
      </div>
    </div>

    <!-- 导航 -->
    <div class="navigation">
      <router-link to="/" class="nav-link">首页</router-link>
      <router-link to="/gongyixingdong" class="nav-link">中石大公益行动</router-link>
      <router-link to="/community" class="nav-link">互动交流社区</router-link>
      <router-link to="/gongyizixun" class="nav-link" active-class="active">公益资讯</router-link>
      <router-link to="/zhiyuanbaoming" class="nav-link" active-class="active">志愿报名</router-link>
    </div>

    <!-- 主要内容区域 -->
    <div class="main-content">


      <!-- 新增区域：左侧轮播 + 右侧信息 -->
      <div class="info-section">
        <!-- 左侧新闻轮播区域 -->
        <div class="news-carousel">
          <h2 class="sub-section-title">公益新闻动态</h2>
          <el-carousel height="400px" indicator-position="outside">
            <el-carousel-item v-for="(news, index) in newsList" :key="index">
              <div class="news-item">
                <img :src="news.image" class="news-image" alt="新闻图片" />
                <div class="news-content">
                  <h3>{{ news.title }}</h3>
                  <p class="news-description">{{ news.description }}</p>
                  <div class="news-meta">
                    <span class="news-date">{{ news.date }}</span>
                    <el-button type="primary" size="small" @click="goToNews(news.link)">查看详情</el-button>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>

        <!-- 右侧信息区域 - 改为卡片形式 -->
        <div class="activities-info">
          <h2 class="sub-section-title">公益事业展示</h2>

          <div class="welfare-cards-container">
            <div class="welfare-card" @mouseenter="hoverCard(0)" @mouseleave="hoverCard(null)"
                 :class="{ 'card-hover': activeCard === 0 }">
              <div class="card-front">
                <div class="activity-header">
                  <div class="activity-icon">
                    <i class="el-icon-location-outline"></i>
                    <el-icon><UserFilled /></el-icon>
                  </div>
                  <h3>克拉玛依公益事业</h3>
                </div>
                <div class="card-image-overlay"></div>
                <img :src="gongyiImg" alt="克拉玛依公益事业" class="card-bg-image" />
              </div>
              <div class="card-back">
                <p>克拉玛依市近年来在公益事业方面取得了显著成就，特别<br/>是在教育援助、医疗服务和环境保护领域。</p>
                <ul>
                  <li><el-icon><StarFilled /></el-icon><i class="el-icon-check"></i>建立10所希望小学，覆盖偏远地区</li>
                  <li><el-icon><StarFilled /></el-icon><i class="el-icon-check"></i>开展定期医疗下乡服务</li>
                  <li><el-icon><StarFilled /></el-icon><i class="el-icon-check"></i>实施"绿色克拉玛依"环保计划</li>
                  <li><el-icon><StarFilled /></el-icon><i class="el-icon-check"></i>社区老人关怀中心全覆盖</li>
                </ul>
              </div>
            </div>

            <div class="welfare-card" @mouseenter="hoverCard(1)" @mouseleave="hoverCard(null)"
                 :class="{ 'card-hover': activeCard === 1 }">
              <div class="card-front">
                <div class="activity-header">
                  <div class="activity-icon">
                    <i class="el-icon-school"></i>
                    <el-icon><UserFilled /></el-icon>
                  </div>
                  <h3>中国石油大学公益活动</h3>
                </div>
                <div class="card-image-overlay"></div>
                <img :src="shidaImg" alt="中国石油大学公益活动" class="card-bg-image" />
              </div>
              <div class="card-back">
                <p>中国石油大学积极参与克拉玛依公益事业，师生志愿者<br>团队定期开展各类公益活动。</p>
                <ul>
                  <li><el-icon><StarFilled /></el-icon><i class="el-icon-check"></i>"阳光支教"计划 - 每周六义务教学</li>
                  <li><el-icon><StarFilled /></el-icon><i class="el-icon-check"></i>环保科研项目 - 荒漠化防治研究</li>
                  <li><el-icon><StarFilled /></el-icon><i class="el-icon-check"></i>社区健康服务 - 学生医疗队下乡</li>
                  <li><el-icon><StarFilled /></el-icon><i class="el-icon-check"></i>老人数字生活培训 - 帮助老人使用智能设备</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 class="section-title">克拉玛依公益项目展示</h1>

      <div class="cards-container">
        <Card
            :data-image="schoolImg">
          <template v-slot:header>
            <h2>希望小学</h2>
          </template>
          <template v-slot:content>
            <p>为克拉玛依地区贫困儿童提供教育支持</p>
          </template>
        </Card>

        <Card
            :data-image="yuanzhuImg">
          <template v-slot:header>
            <h2>医疗援助</h2>
          </template>
          <template v-slot:content>
            <p>为偏远地区提供基础医疗服务</p>
          </template>
        </Card>

        <Card
            :data-image="huanbaoImg">
          <template v-slot:header>
            <h2>环保行动</h2>
          </template>
          <template v-slot:content>
            <p>保护克拉玛依地区的生态环境</p>
          </template>
        </Card>

        <Card
            :data-image="jinglaoImg">
          <template v-slot:header>
            <h2>老人关怀</h2>
          </template>
          <template v-slot:content>
            <p>关爱社区孤寡老人生活</p>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import {ElCarousel, ElCarouselItem, ElButton} from 'element-plus';
// 按需引入需要的图标
import { UserFilled, StarFilled } from '@element-plus/icons-vue';

// 导入头部背景图片
import headerBg from '@/assets/1.jpeg';

// 导入卡片图片
import schoolImg from '@/assets/school.png';
import yuanzhuImg from '@/assets/yuanzhu.png';
import huanbaoImg from '@/assets/huanbao.png';
import jinglaoImg from '@/assets/jinglao.png';
import gongyiImg from '@/assets/gongyi.png';
import shidaImg from '@/assets/shida.png';

// 导入轮播图片
import news1 from '@/assets/news1.png';
import news2 from '@/assets/news2.png';
import news3 from '@/assets/news3.png';
import news4 from '@/assets/news4.png';
import news5 from '@/assets/news5.png';
export default {
  name: 'HomeView',
  components: {
    Card,
    ElCarousel,
    ElCarouselItem,
    ElButton,
    // 注册图标组件
    UserFilled,
    StarFilled
  },
  data() {
    return {
      // 头部背景图片
      headerBg,
      gongyiImg,
      shidaImg,
      // 卡片图片
      schoolImg,
      yuanzhuImg,
      huanbaoImg,
      jinglaoImg,

      // 控制卡片悬停状态
      activeCard: null,

      // 新闻数据
      newsList: [
        {
          title: "中国石油大学志愿者赴克拉玛依开展支教活动",
          description: "近日，中国石油大学30名志愿者前往克拉玛依偏远地区学校，开展为期两周的支教活动。志愿者们为当地学生带来了丰富多彩的课程，包括科学实验、艺术创作和体育活动。此次活动不仅提升了当地学生的综合素质，也为志愿者们提供了宝贵的实践机会。",
          date: "2023-10-15",
          image: news1,
          link: "/news/1"
        },
        {
          title: "克拉玛依启动'绿色家园'环保公益项目",
          description: "克拉玛依市政府联合多家企业，共同启动'绿色家园'环保公益项目，计划在三年内种植10万棵树。中国石油大学环境工程学院的师生积极参与该项目，提供技术支持并组织志愿者团队。项目首期已在市区周边种植了5000棵耐旱树种，有效改善了当地的生态环境。",
          date: "2023-09-28",
          image: news2,
          link: "/news/2"
        },
        {
          title: "爱心医疗队为克拉玛依牧民提供免费诊疗服务",
          description: "由石大医学院师生组成的爱心医疗队，深入克拉玛依牧区为当地牧民提供免费诊疗服务。医疗队携带了便携式医疗设备，为200多名牧民提供了健康检查、常见病治疗和健康咨询服务。此次活动特别关注了老人和儿童的健康问题，并为有需要的家庭提供了常用药品。",
          date: "2023-10-05",
          image: news3,
          link: "/news/3"
        },
        {
          title: "'暖冬行动'为克拉玛依贫困家庭送去温暖",
          description: "中国石油大学志愿者协会发起'暖冬行动'，为克拉玛依200户贫困家庭送去过冬物资。志愿者们筹集了棉衣、棉被、取暖器等物资，并亲自送到受助家庭。此外，志愿者团队还为每户家庭检查了取暖设施的安全状况，确保他们能够安全温暖地度过寒冬。",
          date: "2023-11-12",
          image: news4,
          link: "/news/4"
        },
        {
          title: "克拉玛依社区老人数字生活培训计划启动",
          description: "针对老年人使用智能设备困难的问题，石大志愿者团队启动社区老人数字生活培训计划。该计划覆盖克拉玛依市10个社区，每周定期开展智能手机使用、电子支付、防诈骗等培训课程。截至目前，已有300多位老人参与培训，学习使用智能设备与家人沟通、线上购物等技能。",
          date: "2023-10-20",
          image: news5,
          link: "/news/5"
        }
      ]
    }
  },
  computed: {
    // 头部样式计算属性
    headerStyle() {
      return {
        backgroundImage: `url(${this.headerBg})`,
      };
    }
  },
  methods: {
    goToNews(link) {
      // 实际项目中这里应该是路由跳转
      alert(`跳转到新闻详情: ${link}`);
      // this.$router.push(link);
    },
    hoverCard(index) {
      this.activeCard = index;
    }
  }
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: 'Arial', sans-serif;
}

.header {
  display: flex;
  align-items: center;
  padding: 15px 30px;
  height: 150px; /* 固定高度 */

  /* 背景图片样式 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* 文字阴影增强可读性 */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);

  /* 添加半透明遮罩增强文字对比度 */
  position: relative;
}

/* 添加半透明遮罩 */
.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3); /* 半透明黑色遮罩 */
  z-index: 1;
}

/* 确保头部内容在遮罩上方 */
.header > * {
  position: relative;
  z-index: 2;
}

.logo-container {
  margin-right: 20px;
}

.logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
  /* 添加边框增强可见性 */
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 5px;
}

.title-container {
  flex-grow: 1;
}

.main-title {
  font-size: 28px;
  font-weight: bold;
  color: #ffcc33; /* 修改为白色 */
  margin-bottom: 5px;
}

.sub-title {
  font-size: 18px;
  color: #fff; /* 修改为白色 */
  font-weight: 500;
}

.auth-links {
  display: flex;
  gap: 20px;
}

.auth-links a {
  text-decoration: none;
  color: #fff; /* 修改为白色 */
  font-weight: bold;
  font-size: 18px;
  padding: 8px 15px;
  border-radius: 4px;
  transition: background-color 0.3s;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.auth-links a:hover {
  background-color: rgba(0, 0, 0, 0.7);
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

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.main-content {
  flex-grow: 1;
  padding: 30px 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.section-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-bottom: 40px;
}

/* 新增的信息区域样式 */
.info-section {
  display: flex;
  gap: 30px;
  margin-top: 40px;
}

.sub-section-title {
  text-align: center;
  color: #e67e22;
  margin-bottom: 20px;
  font-size: 24px;
  border-bottom: 2px solid #e67e22;
  padding-bottom: 10px;
}

/* 左侧新闻轮播区域 */
.news-carousel {
  flex: 3;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: 500px; /* 增加高度 */
  display: flex;
  flex-direction: column;
}

/* 新闻项样式 */
.news-item {
  display: flex;
  height: 100%;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.news-image {
  width: 45%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.news-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
}

.news-content h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 22px;
}

.news-description {
  color: #555;
  line-height: 1.8;
  font-size: 16px;
  flex-grow: 1;
  margin-bottom: 15px;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news-date {
  color: #888;
  font-size: 14px;
}

/* 右侧信息区域 - 卡片样式 */
.activities-info {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.welfare-cards-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.welfare-card {
  position: relative;
  height: 250px;
  perspective: 1000px;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s, box-shadow 0.3s;
}

.welfare-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.6s;
  border-radius: 12px;
  overflow: hidden;
}

.card-front {
  transform: rotateY(0deg);
}

.card-back {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #ff9933 0%, #ffff00 100%);
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-hover .card-front {
  transform: rotateY(-180deg);
}

.card-hover .card-back {
  transform: rotateY(0deg);
}

.card-bg-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.welfare-card:hover .card-bg-image {
  transform: scale(1.05);
}

.card-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%);
}

.activity-header {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 25px 20px 0;
}

.activity-icon {
  width: 50px;
  height: 50px;
  background-color: #ffcc33;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.activity-icon i {
  color: white;
  font-size: 24px;
}

.welfare-card h3 {
  color: white;
  font-size: 22px;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.card-back p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.card-back ul {
  padding-left: 20px;
  list-style: none;
}

.card-back li {
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  font-size: 15px;
}

.card-back li i {
  color: #ffcc33;
  margin-right: 10px;
  margin-top: 4px;
  font-size: 18px;
}

/* 响应式调整 */
@media (max-width: 992px) {
  .info-section {
    flex-direction: column;
  }

  .news-carousel {
    height: auto;
  }

  .news-item {
    flex-direction: column;
    height: auto;
  }

  .news-image {
    width: 100%;
    height: 250px;
    margin-right: 0;
    margin-bottom: 15px;
  }

  .welfare-card {
    height: 220px;
  }
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    height: auto;
    padding: 15px;
    text-align: center;
  }

  .logo-container {
    margin-right: 0;
    margin-bottom: 10px;
  }

  .auth-links {
    margin-top: 15px;
  }

  .navigation {
    flex-wrap: wrap;
  }

  .nav-link {
    margin: 5px;
    font-size: 16px;
  }

  .cards-container {
    gap: 15px;
  }

  .welfare-card {
    height: 200px;
  }

  .activity-header {
    padding: 15px 15px 0;
  }

  .activity-icon {
    width: 40px;
    height: 40px;
  }

  .welfare-card h3 {
    font-size: 18px;
  }

  .card-back {
    padding: 15px;
  }

  .card-back p {
    font-size: 14px;
  }

  .card-back li {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 24px;
  }

  .sub-title {
    font-size: 16px;
  }

  .section-title {
    font-size: 26px;
  }

  .auth-links a {
    padding: 6px 12px;
    font-size: 16px;
  }

  .sub-section-title {
    font-size: 20px;
  }

  .news-content h3 {
    font-size: 18px;
  }

  .news-description {
    font-size: 14px;
  }

  .welfare-card {
    height: 180px;
  }

  .activity-icon {
    width: 36px;
    height: 36px;
  }

  .activity-icon i {
    font-size: 18px;
  }

  .welfare-card h3 {
    font-size: 16px;
  }
}
</style>



