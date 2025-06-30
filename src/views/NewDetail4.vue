<script setup lang="ts">
// // 此处可以添加任何需要的逻辑，后续若有 TS 代码就写这里
import { useRouter } from 'vue-router'
import type { Router } from 'vue-router'
//
const router: Router = useRouter()

// 返回新闻列表页
const goBack = () => {
  router.go(-1)
}
</script>
<template>
  <div style="margin-top: 50px;margin-left: 20px"><el-button type="primary" @click="goBack">返回首页</el-button></div>
  <div class="warm-winter-detail-page">
    <!-- 新闻详情内容 -->
    <div class="news-content">
      <!-- 页面标题 -->
      <div class="page-header">
        <h3>克拉玛依市克拉玛依区：高校与社区“童”路行 大学生与青少年共成长</h3>
      </div>


      <!-- 发布日期 -->
      <div class="news-date">来源： 克拉玛依区委宣传部    发布日期： 2024-08-19</div>
      <!-- 新闻正文 -->
      <div class="news-body">
        <p style="text-indent: 2em;display:flex">自实施“搭桥互促”行动以来，克拉玛依团区委与本地各高校团组织的联系愈发密切了，可谓是“兄弟齐心，其利断金”，
          高校大学生与克拉玛依区青年志愿者、西部计划志愿者齐心协力，创造了一个个的青春高光时刻。</p>

        <p style="text-indent: 2em;display:flex">社区，作为社会肌理的细腻纹理，不仅是国家发展的微观缩影，更是时代脉搏的生动体现。深入社区，青年学子得以触摸国家跳动的心脏，聆听时代前行的足音，深刻领悟社会的深切呼唤与迫切需求。为进一步激发当代大学生的家国情怀与社会责任感，中国石油大学（北京）克拉玛依校区文理学院/文化艺术学院携手克拉玛依市润福、泽福、汇福、佳福四大社区，共筑社区实践的红色桥梁，
          不仅丰富了实践的形式与内容，更拓宽了青年服务社会的广阔天地。</p>
        <div class="container">
          <img src="@/assets/news4.png" class="img-responsive" alt="课堂图片"/>
        </div>
        <p style="text-indent: 2em;display:flex">文化，为社区披上璀璨华服，青春，则点亮了童心的璀璨星空。中国石油大学（北京）克拉玛依校区文理学院/文化艺术学院积极响应社区暑期需求，启动了“播撒红色希望，传递青春梦想”爱心支教志愿服务项目，自7月9日起，一支支由青年志愿者组成的“红色种子”队伍，在四个社区同时绽放，为期两周的志愿服务如同一股清泉，滋润着社区儿童的心田。他们围绕社区儿童暑期生活，精心策划了一系列寓教于乐的活动，从中华诗词的韵律之美，到绘画书法的艺术熏陶；从音乐的悠扬旋律，到体育的活力释放；
          从数学的逻辑游戏，到心理的温暖关怀，每一项活动都蕴含着对孩子们成长的深切期望与无私奉献。</p>
        <div class="container">
          <img src="@/assets/xueTang.png" class="img-responsive" alt="课堂图片"/>
        </div>
        <p style="text-indent: 2em;display:flex">志愿者高娉婷说：“孩子们炽热的目光，聆听他们对我课程的喜爱，我深感付出的价值非凡。”龙坤澜亦深有感触：
          “与孩子们相伴，我重拾了纯真与快乐，这次实践更是我从他们身上汲取宝贵经验的源泉。”</p>
        <p style="text-indent: 2em;display:flex">文化之光，点亮社区，青春之力，温暖童心。在志愿者的引领下，孩子们在知识的海洋中遨游，在艺术的殿堂里探索，在运动的舞台上挥洒汗水，更在心灵的田野上播种希望。他们不仅学会了知识与技能，更收获了自信与快乐，体会到了来自大哥哥大姐姐们的关爱与鼓励。
          这不仅是知识的传递，更是红色基因的接力，是社会主义核心价值观在孩子们心中生根发芽的生动实践。</p>
        <p style="text-indent: 2em;display:flex">五载春秋，风雨兼程。“播撒希望 传递梦想”爱心支教志愿服务实践团，自2019年起航，已历经五载春秋，团队致力于开展以社会主义核心价值观培养为主线的文化润疆工作实践活动，连续五年不断线，与润福社区、泽福社区、汇福社区、佳福社区建立实践基地并展开支教服务。
          他们用实际行动诠释了文化润疆工作的深刻内涵，以青春和热血书写了新时代青年的责任与担当。</p>
        <p style="text-indent: 2em;display: flex ">未来，依托实践平台，这一支支红色队伍将继续前行，吸引更多的大学生走进社区、深入基层、融入社会，用青春的力量为社区发展注入不竭动力，为地方文化的繁荣与经济社会的和谐发展贡献青春智慧与力量。在这条与社区“童”行的光辉道路上，青年与社区共成长，青春与红色交相辉映，共同绘制出一幅幅绚丽多彩、充满希望的红色画卷。这不仅是一段青春的旅程，
          更是一场心灵的洗礼，让青春在奉献中绽放光彩，让社区在青春的滋养下更加和谐美好。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.warm-winter-detail-page {
  margin:0 150px;
  padding: 40px 20px;
  background-color: #f5f7fa;
}

.page-header {
  text-align: center;
  margin-bottom: 10px;
}

.page-header h3 {
  font-size: 1.5rem;
  color: #ff6a00;
  border-bottom: 2px solid #ff6a00;
  padding-bottom: 10px;
}

.news-content {
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  padding: 40px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
}

.news-body p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin: 20px;
}

.news-date {
  font-size: 1rem;
  color: #888;
  margin: 20px 0;
  border-bottom: 1px solid #DDDDDD;
}
.container {
  display: flex;
  justify-content: center;
  padding: 10px;
}
.img-responsive {
  max-width: 100%;
  height: auto;
}
</style>
