<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { Router } from 'vue-router';
// 导入 Element Plus 的图标
import { Paperclip, Sunny } from '@element-plus/icons-vue';

const router: Router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <div class="medical-service-detail-page">
    <el-button type="primary" @click="goBack">返回列表</el-button>
    <br />
    <div class="page-header">
      <h2>爱心医疗队为克拉玛依牧民提供免费诊疗服务</h2>
    </div>
    <div class="news-date">信息来源：石河子市人民医院订阅号 发布日期：2024-08-14 新疆</div>
    <div class="news-content">
      <p style="text-indent: 2em">在克拉玛依区小拐乡的加依尔山、大拐等夏牧场，地处偏远，大山深处，
        手机通讯设备无信号，牧民之间传递讯息基本依靠步行、骑马或骑摩托，牧民们看病极为不方便。</p>
      <br />
      <div class="flex-container">
        <el-icon><Paperclip /></el-icon>
      </div>
      <p style="text-indent: 2em">为落实习近平总书记听取自治区和兵团工作汇报时的重要讲话精神及党的二十届三中全会精神，
        推动新疆兵团与地方融合发展，改善克拉玛依区小拐乡大山深处转场牧民求医问药难、看病不便利的情况。</p><br />
      <p style="text-indent: 2em">8月9日，第八师石河子市总医院派出心脑血管专家神经内科李新华主任医师、心血管内科张强副主任医师协同医共体成员单位136团分院、乡医院医护人员共6人，
        同136团及小拐乡政府负责干部一起从136团出发，驱车5个多小时走进大山深处的跨界草场，开展医疗下乡义诊活动。</p>
      <div class="container">
        <img src="@/assets/jianCha.png" class="img-responsive" alt="医护人员为牧民检查身体"/>
      </div>
      <p style="text-align:center;color:#BBBBBB">(医护人员为牧民检查身体)</p>
      <br/><br/>
      <p style="text-indent: 2em">“得知你们要来，我们早早就开会安排工作了，给每一位牧民都交代好了，尤其是那些长期受心血管疾病困扰的牧民，我们都希望能够通过此次义诊，这些牧民可以优先获得心血管内科专家的诊疗服务，以有效缓解他们的病痛与不适。”小拐乡政府负责干部说，“我们这地处偏远，很多牧民健康素养低，
        此前也未曾接触过心血管内科知识，自从去年专家们来之后，有些人一直期盼着你们的再次到来。”</p>
      <div class="container">
        <img src="@/assets/jianCha2.png" class="img-responsive" alt="医护人员为牧民进行心脏听诊、血糖检测"/>
      </div>
      <p style="text-align:center;color:#BBBBBB">(医护人员为牧民进行心脏听诊、血糖检测)</p>
      <br/><br/>
      <p style="text-indent: 2em;display:flex">清晨的第一缕阳光尚未洒满大地，义诊队伍已整装待发。
        他们带着对牧民群众的深情厚谊，踏上了这段意义非凡的旅程。</p><br/>
      <p style="text-indent: 2em;display:flex">抵达后，医护人员立即投入到紧张而有序的工作中，为牧区60余名群众进行了全面的身体健康检查。
        经过细致筛查，共发现高血压患者46人、心脏病患者4人、糖尿病患者1人。</p><br/>
      <p style="text-indent: 2em;display: flex">针对每位患者的具体情况，医护人员不仅现场发放了所需药品，
        还给予了专业的诊疗指导和健康宣教，让牧民们在家门口就享受到了高质量的医疗服务。</p><br/>
      <div class="flex-container">
        <el-icon><Sunny /></el-icon>
      </div>
      <p style="text-indent: 2em;display: flex">小拐乡牧民吾拉孜说：“在牧场也能就医看病，医务人员为我们提供医疗服务，
        普及健康知识，还免费发放药品，真的太好了。感谢对我们牧民的关怀。”</p><br/>
      <div class="container">
        <img src="@/assets/news3.png" class="img-responsive" alt="医护人员为牧民进行心脏听诊、血糖检测"/>
      </div>
      <p style="text-indent: 2em;display:flex">本次兵地融合医疗义诊下乡活动，增进了兵地情谊，为当地牧民解决了转场放牧期间就医不便的问题，让牧民群众在家门口就能享受到优质的医疗服务，
        提升了牧区群众的生活质量和健康水平，增强了地方群众的获得感和幸福感。</p><br/>
      <p style="text-indent: 2em;display:flex">未来，医院将继续秉持“为民服务”的宗旨，不断提升医疗服务水平，
        将更多的关爱和健康送到需要的地方，让爱与健康在广袤的牧场上绽放出更加绚丽的光彩。</p><br/>
    </div>
  </div>
</template>

<style scoped>
.medical-service-detail-page {
  padding: 40px 20px;
  background-color: #f5f7fa;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.flex-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.page-header h2 {
  font-size: 2.5rem;
  color: #ff6a00;
  border-bottom: 2px solid #ff6a00;
  padding-bottom: 10px;
}

.news-content {
  max-width: 750px;
  margin: 0 auto;
  background-color: 	#FFFACD;
  padding: 40px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
}

.news-body p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
}

.news-date {
  font-size: 1rem;
  color: #888;
  margin: 20px 0;
}

.container {
  display: flex;
  justify-content: center;
  padding: 100px;
}

.img-responsive {
  max-width: 100%;
  height: auto;
}
</style>