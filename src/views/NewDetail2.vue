<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Router } from 'vue-router'

const router: Router = useRouter()

// 返回新闻列表页
const goBack = () => {
  router.go(-1)
}
</script>

<template>
  <div class="news-detail-page">
    <!-- 返回按钮 -->
    <el-button type="primary" @click="goBack">返回首页</el-button>
    <!-- 页面标题 -->
    <div class="page-header">
      <h2>克拉玛依启动'绿色家园'环保公益项目</h2>
    </div>
    <!-- 发布日期 -->
    <div class="news-date">发布日期：2025-06-11</div>

    <!-- 新闻详情内容 -->
    <div class="news-content">

      <p style="text-indent: 2em">在“美丽中国我先行”的主题引领下，克拉玛依市组织开展了2025年六五环境日暨环境保护宣传教育月系列活动。本次活动旨在进一步普及生态环境保护知识，增强公众环保意识，
        推动社会各界积极参与生态文明建设，共同营造天蓝地绿水清的美好家园。</p>
      <br/>
      <p style="text-indent: 2em;font-weight: bold">一、精心组织，广泛动员</p>
      <br/>
      <p style="text-indent: 2em">为确保活动的顺利开展，克拉玛依市生态环境局高度重视，精心策划，制定了详细的《克拉玛依市2025年六五环境日宣传工作方案》。
        通过多次召开宣传专题会议，对宣传月活动进行全面部署，确保了各项宣传活动的有序进行。</p>
      <br/>
      <p style="text-indent: 2em;font-weight: bold">二、启动仪式，拉开序幕</p>
      <p style="text-indent: 2em">6月5日上午，以“全面推进美丽中国建设”为主题的克拉玛依市2025年六五环境日暨环境保护宣传教育月系列活动启动仪式在克拉玛依市钟楼隆重举行。市生态环境系统干部职工50余人参加活动，现场向群众宣传生态环保知识，发放低碳环保购物袋、环保扇、环保知识手册等宣传品，
        积极传播低碳环保理念，解答群众关于生态环境保护的相关问题。</p>
      <br/>
      <p style="text-indent: 2em">6月5日上午，以“全面推进美丽中国建设”为主题的克拉玛依市2025年六五环境日暨环境保护宣传教育月系列活动启动仪式在克拉玛依市钟楼隆重举行。市生态环境系统干部职工50余人参加活动，现场向群众宣传生态环保知识，发放低碳环保购物袋、环保扇、环保知识手册等宣传品，
        积极传播低碳环保理念，解答群众关于生态环境保护的相关问题。</p>
      <br/>
      <p style="text-indent: 2em;font-weight: bold">三、媒体助力，扩大宣传</p>
      <br/>
      <p style="text-indent: 2em">克拉玛依市生态环境局充分利用各类媒体资源，邀请克拉玛依融媒记者参与活动报道。活动期间，克拉玛依融媒发布了活动宣传报道，通过“克拉玛依生态环境”微信公众号组织开展了“美丽中国我先行”生态环境保护答题活动，
        吸引了众多干部群众参与，有效普及了生态环境保护知识。</p>
      <br/>
      <p style="text-indent: 2em;font-weight: bold">四、环保设施向公众开放</p>
      <p style="text-indent: 2em">为提高公众环保意识，克拉玛依市多家企事业单位面向全市群众开展了环保设施向公众开放活动。餐厨垃圾处理厂、克拉玛依生态环境监测站等单位组织社区居民参观了环保设施，
        让市民近距离了解环保处理过程，增强了市民对环保工作的理解和支持。</p>
      <br/>
      <p style="text-indent: 2em;font-weight: bold">五、多方协作，全面宣传</p>
      <p style="text-indent: 2em">克拉玛依市环委会成员单位及驻市企业积极参与宣传活动，结合当前生态环境形势和群众关注的环境问题，开展了形式多样、群众喜闻乐见的宣传活动。商务局联合重点企业等行业力量，共同推进环保宣传教育工作，组织了绿色商场、绿色酒店创建宣传活动，引导消费者选择绿色环保产品，形成绿色消费新风尚。农业农村局通过发放宣传手册、签订地膜回收承诺书等方式，加大了对土壤污染防治相关法律法规的宣传力度，推动了农田残膜回收工作，
        强化了农药使用者的回收主体责任感，营造了绿色生态理念普及的良好氛围。</p>
      <br/>
      <p style="text-indent: 2em"></p>
    </div>
    <div class="footer">
      <p style="color:#B3B3B3;text-align: center">来源丨“克拉玛依生态环境”公众号</p>
      <br/>
      <img src="@/assets/taiWei.png" alt="克拉玛依生态厅二维码" class="erWeiMa">
    </div>
  </div>
</template>

<style scoped>
.news-detail-page {
  padding: 40px 20px;
  background-color: #f5f7fa;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-header h2 {
  font-size: 2.5rem;
  color: #ff6a00;
  border-bottom: 2px solid #ff6a00;
  padding-bottom: 10px;
}

.footer{
  margin-top: 20px;
  border-top: 1px solid #A2A2A2;
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
  margin-bottom: 20px;
}

.news-date {
  font-size: 1rem;
  color: #888;
  margin: 20px 0;
}
.erWeiMa{
  display: block;        /* 转为块级元素 */
  margin: 0 auto;        /* 左右 margin 自动，实现居中 */
  text-align: center;    /* 可选：若图片包含文本，文本也居中 */
  width: 500px;
  height: auto;

}

</style>