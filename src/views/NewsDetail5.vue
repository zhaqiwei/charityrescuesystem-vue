

<template>
  <!-- 返回按钮 -->
  <div style="margin-top:35px;margin-left: 20px">
  <el-button type="primary" @click="goBack">返回列表</el-button>
  </div>
  <div class="digital-life-training-detail-page">
    <!-- 页面标题 -->
    <div class="page-header">
      <h2>学雷锋 | 中国石油大学克拉玛依校区团委组织开展学雷锋志愿服务活动</h2>
    </div>
    <!-- 发布日期 -->
    <div class="news-date">信息来源：青春克拉玛依   发布日期：2025-03-18</div>
    <!-- 新闻详情内容 -->
    <div class="container">
      <img src="@/assets/erShiDa.png" class="img-responsive" alt="学习二十大"/>
    </div>
    <div class="container">
      <img src="@/assets/qingChunKe.png" class="img-responsive" alt="学习二十大"/>
    </div>
    <div class="news-content">

      <div class="news-body">
        <p style="text-indent: 2em;display:flex" class="text">为深入贯彻落实习近平总书记关于学雷锋志愿服务的重要指示精神，推动形成“人人参与、处处可为”的学雷锋热潮，
          传递社会正能量，培育社会新风尚，克拉玛依市各基层团组织积极开展各类学雷锋志愿服务活动。</p>
      </div>
      <br/>
      <div class="adv">

        <p style="color: #FFFFFF;font-size:1.5rem">中国石油大学（北京）</p>
        <p style="color: #FFFFFF;font-size:1.5rem">克拉玛依校区团委</p>
      </div>
      <br/>
      <div class="news-body">
        <p style="text-indent: 2em;display: flex">中国石油大学（北京）克拉玛依校区工学院“力行精研”科普宣讲团的成员前往中国石油大学克拉玛依附属学校——红山湖小学。精心策划了一场别开生面的雷锋精神宣传教育活动。三位主讲以其独特的视角和生动的语言，从雷锋的生平事迹讲起，逐渐深入到雷锋精神的内涵与实质。
          他通过讲述雷锋助人为乐、无私奉献的感人故事，让小朋友们对雷锋有了更加直观而深刻的认识。</p><br/>
        <img src="@/assets/5_1.png" class="img-responsive" alt="5_1"/>
        <img src="@/assets/news5.png" class="img-responsive" alt="5_2"/><br/>
        <p style="text-indent: 2em;display: flex">2025年3月10日中国石油大学（北京）克拉玛依校区青年志愿者团队前往向阳社区为克拉玛依油田建设老兵提供染发服务。除生活关怀外，志愿者通过口述史记录，
          整理出老兵们关于油田创业初期的珍贵回忆。活动尾声，老兵与师生共同观看电影《雷锋》。</p><br/>
        <img src="@/assets/5_3.png" class="img-responsive" alt="5_3"/>
        <img src="@/assets/5_4.png" class="img-responsive" alt="5_4"/>
      </div><br/>
      <div class="news-body">
        <p style="text-indent: 2em;display:flex" class="text">下一步，团市委将持续推进“学雷锋”青年志愿服务活动，聚焦青年群体，激励广大青年踊跃参与，让青春在志愿奉献中绽放光彩，
          推动志愿服务融入日常、化作经常，为克拉玛依经济高质量发展贡献青春力量。</p>
      </div>

    </div>


  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// 返回新闻列表页
const goBack = () => {
  router.go(-1)
}
</script>

<style scoped>
.digital-life-training-detail-page {

  padding: 40px 20px;
  background-color: #f5f7fa;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-header h2 {
  font-size: 1.5rem;
  color: #ff6a00;
  border-bottom: 2px solid #ff6a00;
  padding-bottom: 10px;
}

.adv{
  margin-top: 10px;
  border: 2px solid #ff9933; /* 2px宽的灰色虚线边框 */
  border-radius: 30px;    /* 10px的圆角 */
  padding: 5px;
  background-color: 	#FFEC8B;
}

.news-content {
  max-width: 890px;
  width:50%;
  margin:0 auto;
  background-color: #FFFAF0;
  padding: 40px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;

}

.news-body{
  border: 2px dashed #FF7F00; /* 2px宽的灰色虚线边框 */
  border-radius: 10px;    /* 10px的圆角 */
  padding: 15px;
  background-color: #FFFFFF;
}

.text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  text-align: justify;
  margin-bottom: 20px;
  max-width: 800px;
}

.news-date {
  font-size: 1rem;
  color: #888;
  margin: 20px 0;
}
.container {
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 50%;
  margin: 0 auto; /* 添加这行代码使容器自身水平居中 */
}
.img-responsive {
  max-width: 100%;
  height: auto;
}

</style>

