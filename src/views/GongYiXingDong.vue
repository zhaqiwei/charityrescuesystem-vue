<script>
export default {
  name: 'GongYiXingDong',
  data() {
    return {
      hovering: false,
      projects: [
        {
          title: '伴我童行',
          image: new URL('@/assets/zhuxue.png', import.meta.url).href,
          description: '中石大克校区专场捐书活动',
          detail: '<p>本次活动意义深远，旨在为留守儿童点亮求学之径，让他们切实感受到社会的深切关爱...</p>',
          link:'https://news.sohu.com/a/905589408_122177222'

        },
        {
          title: '智慧助老',
          image: new URL('@/assets/zhulao.png', import.meta.url).href,
          description: '参与举办智慧助老智能设备应用公益课堂',
          detail: '<p>帮助老年人更好地融入数字化、智能化社会，提升老年人享受智能化社会的幸福感...</p>',
          link:'https://mp.weixin.qq.com/s?__biz=MjM5MTM0MTg0MQ==&mid=2651161291&idx=3&sn=26fe4e043b7b6781dad56fa5f188e8ea&chksm=bc1f66a61c587a0fead6a01990907670bf34c712e0e7c6289b54357d1b71e2370fbbdbfa1a03&scene=27'
        },
        {
          title: '无偿献血',
          image: new URL('@/assets/xianxue.png', import.meta.url).href,
          description: '油城开展爱心无偿献血活动',
          detail: '<p>组织专业学生走进20所中小学，开展科普讲座45场...</p>',
          link:'https://www.kelamayi.com.cn/xw/bd/2024-05/10/content_545201.html'
        }
      ],
      materials: [
        { name: '中小学生课外书籍', standard: '七成新以上', count: '500本' },
        { name: '冬季羽绒服', standard: '适合6-15岁儿童', count: '300件' },
        { name: '学习文具套装', standard: '全新', count: '200套' }
      ],
      currentProject: {},
      dialogVisible: false,

      currentSlide: 0,
      slides: [
        {
          title: "冬衣捐赠活动",
          description: "2018年10月26日至29日文理学院青年志愿者协会协同克拉玛依小火苗公益共同开展为期四天的'件件冬衣雪中炭，颗颗爱心送温暖'冬衣捐赠活动",
          image: new URL('@/assets/juanYi.png', import.meta.url).href
        },
        {
          title: "'守护童真爱洒人间'活动",
          description: "2018年10月5日文理学院青年志愿者协会组织志愿者们来到位于市东郊的克拉玛依市福利院，用自己的努力为福利优良环境的塑造献出自己的一份力量",
          image: new URL('@/assets/huTong.png', import.meta.url).href
        },
        {
          title: "'红色基因传承行动'活动",
          description: "2024年暑假，校区工学院协同谋划，统筹推进，组织20支社会实践团队走进社区、博物馆、学校、青少年科技活动中心，开展专题宣讲活动，用'青春之声'传递革命薪火，弘扬红色精神，继承红色传统，延续红色脉络。",
          image: new URL('@/assets/hongChuan.png', import.meta.url).href
        },
        {
          title: "'老少同画黑油山家园'活动",
          description: "2018年5月20日上午，中国石油大学（北京）克拉玛依校区组织30余名大学生志愿者与克拉玛依市多家爱心团体共同前往黑油山老年公寓，开展'老少同画黑油山家园'的敬老爱老活动",
          image: new URL('@/assets/jinLao.png', import.meta.url).href
        }
      ],
      autoPlayInterval: null,
      // 新增数据
      supplyDialogVisible: false,   // 物资捐赠对话框可见性
      moneyDialogVisible: false,    // 资金捐赠对话框可见性
      supplyForm: {                 // 物资捐赠表单数据
        name: '',
        phone: '',
        item: '',
        time: ''
      },
      moneyForm: {                  // 资金捐赠表单数据
        name: '',
        phone: '',
        amount: '',
        time: ''
      },
      supplyFormRules: {            // 物资捐赠表单验证规则
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        phone: [
          { required: true, message: '请输入联系电话', trigger: 'blur' },
          { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' }
        ],
        item: [{ required: true, message: '请输入捐赠物资', trigger: 'blur' }],
        time: [{ required: true, message: '请选择捐赠时间', trigger: 'change' }]
      },
      moneyFormRules: {             // 资金捐赠表单验证规则
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        phone: [
          { required: true, message: '请输入联系电话', trigger: 'blur' },
          { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' }
        ],
        amount: [
          { required: true, message: '请输入捐赠金额', trigger: 'blur' },
          { pattern: /^\d+(\.\d{1,2})?$/, message: '请输入正确的金额格式', trigger: 'blur' }
        ],
        time: [{ required: true, message: '请选择捐赠时间', trigger: 'change' }]
      }
    }
  },
  methods: {
    scrollTo(id) {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
      })
    },

    openProjectLink(url) {
      window.open(url, '_blank');
    },

    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(this.nextSlide, 5000);
    },
    stopAutoPlay() {
      clearInterval(this.autoPlayInterval);
    },
    // 新增方法
    donateSupplies() {
      this.supplyForm = { name: '', phone: '', item: '', time: '' };
      this.supplyDialogVisible = true;
    },

    donateMoney() {
      this.moneyForm = { name: '', phone: '', amount: '', time: '' };
      this.moneyDialogVisible = true;
    },

    submitSupplyForm() {
      this.$refs.supplyForm.validate((valid) => {
        if (valid) {
          // 这里可以添加表单提交逻辑
          console.log('物资捐赠表单提交:', this.supplyForm);
          this.$message.success('物资捐赠信息提交成功！感谢您的爱心捐助！');
          this.supplyDialogVisible = false;
        } else {
          this.$message.warning('请填写完整的捐赠信息');
          return false;
        }
      });
    },

    submitMoneyForm() {
      this.$refs.moneyForm.validate((valid) => {
        if (valid) {
          // 这里可以添加表单提交逻辑
          console.log('资金捐赠表单提交:', this.moneyForm);
          this.$message.success(`资金捐赠信息提交成功！感谢您捐赠${this.moneyForm.amount}元！`);
          this.moneyDialogVisible = false;
        } else {
          this.$message.warning('请填写完整的捐赠信息');
          return false;
        }
      });
    },

    cancelSupplyForm() {
      this.supplyDialogVisible = false;
    },

    cancelMoneyForm() {
      this.moneyDialogVisible = false;
    }
  },

  mounted() {
    this.startAutoPlay();
  },
  beforeDestroy() {
    this.stopAutoPlay();
  }
}
</script>


<template>
  <div class="header-container">
    <a href="/" class="home-link" @mouseover="hovering = true" @mouseout="hovering = false">
      返回首页
    </a>
  </div>
  <div class="gongyi-container">
    <!-- 顶部横幅 -->
    <div class="hero-banner">
      <img src="@/assets/b1.png" alt="克拉玛依公益行动横幅" />
      <h1>中国石油大学 · 克拉玛依爱心救助平台</h1>
      <p>能源之心温暖边疆，石大行动传递希望</p>
    </div>

    <!-- 快速入口 -->
    <div class="quick-actions">
      <el-button type="danger" round @click="scrollTo('donate')">
        <i class="el-icon-wallet"></i> 立即捐助
      </el-button>
    </div>

    <!-- 主要内容区 -->
    <div class="content-section">
      <!-- 公益项目介绍 -->
      <section id="projects" class="section-card">
        <h2><i class="el-icon-collection"></i> 中石大公益项目介绍</h2>
        <el-divider />
        <div class="project-grid">
          <el-card
              v-for="(project, index) in projects"
              :key="index"
              shadow="hover"
              class="project-card"
          >
            <img :src="project.image" :alt="project.title" class="project-image" />
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <el-button
                type="text"
                @click="openProjectLink(project.link)"
                class="detail-btn"
            >
              查看详情 <i class="el-icon-arrow-right"></i>
            </el-button>
          </el-card>
        </div>
      </section>

      <!-- 图片轮播区 -->
      <section class="carousel-section">
        <h2><i class="el-icon-picture"></i> 公益行动纪实</h2>
        <el-divider />
        <div class="carousel-container">
          <div class="carousel-button prev" @click="prevSlide" >
            <i class="el-icon-arrow-left" ></i>
          </div>
          <div class="carousel-button next" @click="nextSlide">
            <i class="el-icon-arrow-right"></i>
          </div>

          <div class="carousel-slides" :style="{ transform: `translateX(${-currentSlide * 100}%)` }">
            <div
                class="carousel-slide"
                v-for="(slide, index) in slides"
                :key="index"
                :style="{ 'background-image': `url(${slide.image})` }"
            >
              <div class="slide-content">
                <div class="slide-number">{{ index + 1 }}/{{ slides.length }}</div>
                <div class="slide-text">
                  <h3>{{ slide.title }}</h3>
                  <p>{{ slide.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-dots">
            <span
                v-for="(slide, index) in slides"
                :key="index"
                :class="{ active: currentSlide === index }"
                @click="goToSlide(index)"
            ></span>
          </div>
        </div>
      </section>

      <!-- 爱心通道 -->
      <section id="donate" class="section-card">
        <h2><i class="el-icon-present"></i> 爱心通道</h2>
        <p><span style="color: #ff0033">**</span><span style="color: #BBBBBB">捐助后请点下方按钮确认捐助信息</span><span style="color: #ff0033">**</span></p>

        <div class="donate-buttons">
          <div class="donate-button donate-supply" @click="donateSupplies">
            <i class="el-icon-box"></i>
            <span>物资捐赠确认</span>
          </div>

          <div class="donate-button donate-money" @click="donateMoney">
            <i class="el-icon-money"></i>
            <span>资金捐助确认</span>
          </div>
        </div>

        <el-divider />
        <el-tabs type="border-card">
          <el-tab-pane label="物资捐赠">
            <h3>急需物资清单</h3>
            <el-table :data="materials" style="width: 100%">
              <el-table-column prop="name" label="物资名称"></el-table-column>
              <el-table-column prop="standard" label="规格要求"></el-table-column>
              <el-table-column prop="count" label="需求数量"></el-table-column>
            </el-table>
            <p class="donate-tip">捐赠地址：新疆克拉玛依市安定路355号中国石油大学（北京）克拉玛依校区</p>
          </el-tab-pane>
          <el-tab-pane label="资金捐助">
            <h3>捐款账户信息</h3>
            <el-descriptions border>
              <el-descriptions-item label="账户名称">克拉玛依市慈善总会</el-descriptions-item>
              <el-descriptions-item label="银行账号">3003020609026422133</el-descriptions-item>
              <el-descriptions-item label="开户行">中国工商银行克拉玛依分行</el-descriptions-item>
              <el-descriptions-item label="备注">请备注"中石大公益"</el-descriptions-item>
            </el-descriptions>
            <div class="qrcode-area">
              <p>扫码捐赠：</p>
              <img src="@/assets/erweima.png" alt="捐款二维码" width="150">
            </div>
          </el-tab-pane>
        </el-tabs>
      </section>
    </div>

    <!-- 项目详情弹窗 -->
    <el-dialog
        :title="currentProject.title"
        :visible.sync="dialogVisible"
        width="60%"
    >
      <img :src="currentProject.image" alt="项目详情图片" style="width: 100%; margin-bottom: 20px;">
      <div v-html="currentProject.detail"></div>
      <span slot="footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="scrollTo('donate')">支持该项目</el-button>
      </span>
    </el-dialog>
  </div>

  <!-- 物资捐赠确认对话框 -->
  <el-dialog
      title="物资捐赠确认"
      :visible.sync="supplyDialogVisible"
      width="500px"
      center>
    <el-form
        :model="supplyForm"
        :rules="supplyFormRules"
        ref="supplyForm"
        label-width="100px">
      <el-form-item label="姓名" prop="name">
        <el-input
            v-model="supplyForm.name"
            placeholder="请输入您的姓名"
            clearable></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phone">
        <el-input
            v-model="supplyForm.phone"
            placeholder="请输入您的手机号码"
            type="text"
            maxlength="11"
            clearable></el-input>
      </el-form-item>
      <el-form-item label="捐赠物资" prop="item">
        <el-input
            v-model="supplyForm.item"
            placeholder="请输入您捐赠的物资名称及数量"
            type="textarea"
            :rows="2"
            clearable></el-input>
      </el-form-item>
      <el-form-item label="捐赠时间" prop="time">
        <el-date-picker
            v-model="supplyForm.time"
            type="datetime"
            placeholder="选择捐赠时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            style="width: 100%">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelSupplyForm">取 消</el-button>
      <el-button type="primary" @click="submitSupplyForm">提 交</el-button>
    </span>
  </el-dialog>

  <!-- 资金捐赠确认对话框 -->
  <el-dialog
      title="资金捐赠确认"
      :visible.sync="moneyDialogVisible"
      width="500px"
      center>
    <el-form
        :model="moneyForm"
        :rules="moneyFormRules"
        ref="moneyForm"
        label-width="100px">
      <el-form-item label="姓名" prop="name">
        <el-input
            v-model="moneyForm.name"
            placeholder="请输入您的姓名"
            clearable></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phone">
        <el-input
            v-model="moneyForm.phone"
            placeholder="请输入您的手机号码"
            type="text"
            maxlength="11"
            clearable></el-input>
      </el-form-item>
      <el-form-item label="捐赠金额" prop="amount">
        <el-input
            v-model="moneyForm.amount"
            placeholder="请输入捐赠金额"
            clearable>
          <template slot="append">元</template>
        </el-input>
      </el-form-item>
      <el-form-item label="捐赠时间" prop="time">
        <el-date-picker
            v-model="moneyForm.time"
            type="datetime"
            placeholder="选择捐赠时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            style="width: 100%">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelMoneyForm">取 消</el-button>
      <el-button type="primary" @click="submitMoneyForm">提 交</el-button>
    </span>
  </el-dialog>
</template>

<style scoped>
.header-container {
  margin-top: 0;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-image: url('@/assets/b1.png');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.header-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(29, 151, 151, 0.2);
  z-index: 1;
}

.header-container > * {
  z-index: 2;
}
.home-link {
  text-decoration: none;
  color: white;
  margin-right: 24px;
  padding: 10px 20px;
  border-radius: 24px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform: translateY(0);
}

.home-link:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.home-link:active {
  transform: translateY(1px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.home-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.home-link:hover::before {
  opacity: 1;
}

.gongyi-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero-banner {
  position: relative;
  text-align: center;
  margin-bottom: 30px;
}

.hero-banner img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
}

.hero-banner h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  width: 100%;
}

.hero-banner p {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.2em;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}

.quick-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}

.section-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.project-card {
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  margin-bottom: 15px;
}

.detail-btn {
  color: #f56c6c;
}

.donate-tip {
  margin-top: 20px;
  color: #f56c6c;
  font-weight: bold;
}

.qrcode-area {
  margin-top: 20px;
  text-align: center;
}

.carousel-section {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.carousel-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  height: 400px;
}

.carousel-slides {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease;
}

.carousel-slide {
  min-width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}

.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  padding: 20px;
}

.slide-number {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
}

.slide-text h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;
}

.carousel-button:hover {
  background: rgba(255, 255, 255, 0.9);
}

.carousel-button i {
  font-size: 20px;
  color: #333;
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

.carousel-dots {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.carousel-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s;
}

.carousel-dots span.active {
  background: white;
  transform: scale(1.2);
}

/* 新增捐赠按钮样式 */
.donate-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}

.donate-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 120px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: white;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  padding: 15px;
}

.donate-button i {
  font-size: 36px;
  margin-bottom: 10px;
}

.donate-supply {
  background: linear-gradient(135deg, #409EFF, #64b5f6);
}

.donate-money {
  background: linear-gradient(135deg, #67C23A, #81c784);
}

.donate-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .hero-banner h1 {
    font-size: 1.5em;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }

  .carousel-container {
    height: 300px;
  }

  .slide-text h3 {
    font-size: 18px;
  }

  .donate-buttons {
    flex-direction: column;
    align-items: center;
  }

  .donate-button {
    width: 100%;
    max-width: 280px;
    height: 100px;
    margin-bottom: 15px;
  }
}
</style>