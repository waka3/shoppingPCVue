<template>
  <div>
    <div class="right-top w3-white p10 w3-row">
      <h1>数据统计</h1>
      <p class="pt30 pb30">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      <div class="right-top-choice">
        <div class="w3-col l12">
          <span class="w3-col l2">产品类型：</span>
          <span class="w3-col l10">
            <VRadio :radioList="productList"></VRadio>
          </span>
        </div>
        <div class="w3-col l12">
          <span class="w3-col l2">适应地区：</span>
          <span class="w3-col l10">
            <VSelection :selectList="areaList"></VSelection>
          </span>
        </div>
        <div class="w3-col l12">
          <span class="w3-col l2">有效时间：</span>
          <span class="w3-col l10">半年</span>
        </div>
        <div class="w3-col l12">
          <span class="w3-col l2">总价：</span>
          <span class="w3-col l10">500 元</span>
        </div>
        <div class="w3-col l12">
          <span class="w3-col l2">&nbsp;</span>
          <span class="w3-col l10">
              <a href="#" class="aBtn p10">立刻购买</a>
          </span>
        </div>
      </div>
    </div>
    <div class="right-bottom w3-white mt20 p10">
      <h1>产品说明</h1>
      <p class="pt30 pb30">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      <table class="product-table w3-border">
        <tbody>
          <tr class="w3-border-bottom">
            <td>安全安保</td>
            <td>办公文教</td>
            <td>彩票</td>
            <td>车辆物流</td>
            <td>成人用品</td>
            <td>出版传媒</td>
            <td>电脑硬件</td>
          </tr>
          <tr class="w3-border-bottom">
            <td>电子电工</td>
            <td>房地产建筑装修</td>
            <td>分类平台</td>
            <td>服装鞋帽</td>
            <td>箱包饰品</td>
            <td>化工原料制品</td>
            <td>机械设备</td>
          </tr>
          <tr class="w3-border-bottom">
            <td>家庭日用品</td>
            <td>家用电器</td>
            <td>教育培训</td>
            <td>节能环保</td>
            <td>金融服务</td>
            <td>礼品</td>
            <td>旅游住宿</td>
          </tr>
          <tr class="w3-border-bottom">
            <td>美容化妆</td>
            <td>母婴护理</td>
            <td>农林牧渔</td>
            <td>软件</td>
            <td>商务服务</td>
            <td>生活服务</td>
            <td>食品保健品</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import VSelection from '../../components/base/select'
import VRadio from '../../components/base/radio'
export default {
  components: {
    VSelection: VSelection,
    VRadio: VRadio
  },
  data () {
    return {
      areaList: [
        {
          id: 'tianjin',
          value: '天津'
        }, {
          id: 'guandong',
          value: '广东'
        }, {
          id: 'fuzhou',
          value: '福州'
        }, {
          id: 'shenzhen',
          value: '深圳'
        }
      ],
      productList: [
        {
          id: 'red',
          value: '红色版'
        }, {
          id: 'green',
          value: '绿色版'
        }, {
          id: 'pink',
          value: '粉色版'
        }
      ]
    }
  }
}
</script>

<style lang="less">
  .product-table{
    width: 100%;
    td {
      width: 14.285714%;
      height: 24px;
      line-height: 24px;
      padding: 5px;
      border-right: 1px solid #ccc;
    }
  }
</style>
