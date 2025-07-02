<script setup lang="ts">
// 此处可以添加任何需要的逻辑，后续若有 TS 代码就写这里
import { useRouter } from 'vue-router'
import type { Router } from 'vue-router'

const router: Router = useRouter()

// 返回新闻列表页
const goBack = () => {
  router.go(-1)
}
</script>

<template>
  <div class="teaching-support-detail-page">
    <el-button type="primary" @click="goBack">返回首页</el-button>
    <!-- 页面标题 -->
    <div class="page-header">
      <h2>中石大克拉玛依校区志愿者暑期红色文化宣传活动</h2>
    </div>
    <!-- 发布日期 -->
    <div style="color:#BBBBBB">活动时间：2023暑假</div>
    <br/>
    <!-- 新闻详情内容 -->
    <div class="news-body" >
      <p style="text-indent: 2em">2023年暑假，中石大克拉玛依校区工学院协同谋划、统筹推进，组建了16支社会实践团队，获批11个由国家民委、教育部、共青团中央、中国青年志愿者协会等多个部委司局牵头的国家专项，组织百余名师生赴新疆、青海、山东、河北、河南、湖北、陕西、四川、广东等9个省区，围绕理论普及宣讲、促进乡村振兴、发展成就观察、民族团结实践、石油学子成长成才等五大主题，集中开展“学习党的二十大 永远跟党走 奋进新征程”暑期社会实践活动，教育引导各族青年学生
        在实践中增知识、受教育、长才干、作贡献，努力成长为有理想、敢担当、能吃苦、肯奋斗的新时代好青年。</p>
      <br/>
      <p style="text-align: center ;color:#ff3333;font-weight: bolder"> 文化宣讲 传承红色基因</p>
      <br/>
      <p style="text-indent: 2em">学院以社会实践为契机，组织实践团走进爱国主义教育基地、社区、学校，用“青言青语”讲好红色故事，传承红色基因，赓续红色血脉。</p>
      <p style="text-indent:2em">作为2023年全国大学生“两弹一星”精神志愿宣讲团队，“赓续‘两弹一星’精神
        力行青年担当”社会实践团，实地探访了巴音郭楞蒙古自治州和硕县马兰烈士陵园、马兰红山军博园，祭奠为
        祖国核工业发展做出贡献的英烈，学习马兰精神，弘扬“两弹一星”精神。与四川大学、兰州大学和西安交
        通大学联合组织了“西北24校两弹一星联合宣讲”主题活动，先后在克拉玛依市南苑南泉邻里共享中心、
        和硕县清水河网格党群服务中心为各族群众宣讲，与和硕县“红领巾小课堂”联动。 </p>
      <div class="container">
      <img src="@/assets/keTang.png" class="img-responsive" alt="课堂图片"/>
      </div>
      <p style="text-align:center">文化宣讲</p>
      <br/>
      <p style="text-indent: 2em">作为2023年全国大学生“井冈山精神”志愿宣讲团队，
        “传承井冈山精神 凝聚青春的力量”社会实践团，携手克拉玛依市克拉玛依区乐龄社会工作服务社，在克拉玛依市长征小区、八一小区、南苑社区以及白碱滩区等地，开展“井冈山精神”宣讲活动，
        以理论宣讲和知识竞赛的方式，为群众带来一场场红色精神宣教课，让红色文化生生不息。</p>
      <div class="container">
        <img src="@/assets/news1.png" class="img-responsive" alt="红色宣讲图片"/>
      </div>
      <p style="text-align:center">红色精神宣讲</p>
      <br/>
      <p style="text-indent: 2em">“邅道天山红色迹 赓续赤县军民情”社会实践团实地走访了新疆维吾尔自治区博物馆，深入了解新疆地区的红色历史，深刻认识到国家繁荣和人民幸福的来之不易。“红色寻访团”赴陕西省汉中市红二十五军司令部旧址和张富清旧居参观，
        体悟老一辈共产党人的坚强意志、对革命事业的无比忠诚和对理想信念的执着追求。</p>
      <div class="container">
        <img src="@/assets/wenWuZhan.png" class="img-responsive" alt="红色宣讲图片"/>
      </div>
      <p style="text-align:center">了解红色历史</p>
      <br/>
      <p style="text-align: center;color:#ff3333;font-weight: bolder" >推普支教 点亮童心未来</p>
      <p style="text-indent: 2em">作为2023“推普助力乡村振兴”全国大学生暑期社会实践志愿服务入选团队，“青春油缘”社会实践团赴塔城地区额敏县上杰勒阿尕什村，
        开展推普助力乡村振兴社会实践活动。</p>
      <p style="text-indent: 2em">实践团成员走进村民家中，积极向当地村民推广普通话，并对当地普通话使用情况、产业发展、经济收入等进行走访调研。在村委会活动室，开办公益推普培训班。在上杰勒阿尕什村“红领巾小课堂”中，开展“学习党的二十大 永远跟党走 奋进新征程”主题教育，讲授《“平视一代”更当不负重托》微党课，
        以青春视角讲述中国故事，传递党的声音，引导同学们树立远大理想，厚植家国情怀。</p>
      <div class="container">
        <img src="@/assets/puJiao.png" class="img-responsive" alt="红色宣讲图片"/>
      </div>
      <p style="text-align:center">推普教育活动</p>
      <br/>
      <p style="text-indent: 2em">学院社会实践育人成效显著，有关事迹在中国日报、中国网等媒体平台宣传报道，社会反响较好。社会实践是学生成长成才的大课堂。下一步，学院将继续坚持以习近平新时代中国特色社会主义思想为指导，不断加强思想引领，抓实抓好实践育人这一立德树人关键环节，
        让学生在躬身实践的大思政课中铸牢中华民族共同体意识，用实际行动为强国建设、民族复兴贡献青春力量。</p>
    </div>




  </div>
</template>

<style scoped>
.teaching-support-detail-page {
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
.news-body {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 2px dashed #BBBBBB;
  box-sizing: border-box;
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
