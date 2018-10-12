<template>
  <div>
    <div class="right-top w3-white p10 w3-row">
      <h1>广告发布</h1>
      <p class="pt30 pb30">广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
      <div class="right-top-choice">
        <div class="w3-col l12">
          <span class="w3-col l2">购买数量：</span>
          <span class="w3-col l10">
            <v-count :min="min" :max="max" @on-change="onParamChange('count', $event)"></v-count>
          </span>
        </div>
        <div class="w3-col l12">
          <span class="w3-col l2">行业：</span>
          <span class="w3-col l10">
              <VSelection :selectList="productList" @on-change="onParamChange('proType', $event)"></VSelection>
          </span>
        </div>
        <div class="w3-col l12">
          <span class="w3-col l2">产品版本：</span>
          <span class="w3-col l10">
              <v-checkbox :checkList="versionList" @on-change="onParamChange('version', $event)"></v-checkbox>
          </span>
        </div>
        <div class="w3-col l12">
          <span class="w3-col l2">有效时间：</span>
          <span class="w3-col l10">半年</span>
        </div>
        <div class="w3-col l12">
          <span class="w3-col l2">总价：</span>
          <span class="w3-col l10">500元</span>
        </div>
        <div class="w3-col l12">
          <span class="w3-col l2">&nbsp;</span>
          <span class="w3-col l10">
              <a href="#" class="aBtn p10" @click="showPayDialog">立刻购买</a>
          </span>
        </div>
      </div>
    </div>
    <div class="right-bottom w3-white mt20 p10">
      <h1>产品说明</h1>
      <p class="pt30 pb30">2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒……
        以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。
        大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。
        作为预测分析领域的专家，埃里克·西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。
        关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，《大数据预测》都会告诉你。</p>
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
    <v-my-dialog :isShow="isShow" @on-close="payResultClose('isShow')">
      <VBuyDetail :list-item="listItem" @pay-sure="paySure"></VBuyDetail>
    </v-my-dialog>
    <v-my-dialog :isShow="isShowPay" @on-close="payResultClose('isShowPay')">
      <v-check-order class="w3-col l12" @pay-result="PayResultShow($event)"></v-check-order>
    </v-my-dialog>
    <v-pay-result v-if="isShowPayResult" :isSucc="isShowPaySucc" :isFail="isShowPayFail" @colse="payResultClose('isShowPayResult')"></v-pay-result>
  </div>
</template>

<script>
import VCount from '../../components/base/count'
import VSelection from '../../components/base/select'
import VRadio from '../../components/base/radio'
import VCheckbox from '../../components/base/checkBox'
import VMyDialog from '../../components/base/dialog'
import VBuyDetail from '../../components/base/buyDetail'
import VCheckOrder from '../../components/checkOrder'
import VPayResult from '../../components/base/payResult'

import axios from 'axios'
import _ from 'lodash'

export default {
  components: {
    VCount: VCount,
    VSelection: VSelection,
    VRadio: VRadio,
    VCheckbox: VCheckbox,
    VMyDialog: VMyDialog,
    VBuyDetail: VBuyDetail,
    VCheckOrder: VCheckOrder,
    VPayResult: VPayResult
  },
  data () {
    return {
      isShow: false,
      isShowPay: false,
      isShowPayResult: false,
      isShowPaySucc: false,
      isShowPayFail: false,
      price: 0,
      count: 1,
      proType: {},
      limitTime: {},
      version: [],
      listItem: {
        title: ['购买数量', '产品类型', '有效时间', '产品版本', '总价']
      },
      max: 100,
      min: 1,
      limitList: [
        {
          id: 'half',
          value: '半年'
        }, {
          id: 'one',
          value: '一年'
        }, {
          id: 'three',
          value: '三年'
        }
      ],
      productList: [
        {
          id: 'base',
          value: '入门版'
        }, {
          id: 'middle',
          value: '中级版'
        }, {
          id: 'top',
          value: '终极版'
        }
      ],
      versionList: [
        {
          id: 'custom',
          value: '客户版'
        }, {
          id: 'agent',
          value: '代理商版'
        }, {
          id: 'profress',
          value: '专家版'
        }
      ]
    }
  },
  methods: {
    showPayDialog () {
      this.isShow = true
      let newObjArray = _.map(this.version, (idx) => {
        return idx.value
      })
      this.listItem.ctn = [this.count, this.proType.value, this.limitTime.value, newObjArray.join(','), this.price]
    },
    onParamChange (type, val) {
      this[type] = val
      this.getPrice()
    },
    getPrice () {
      let newObjArray = _.map(this.version, (idx) => {
        return idx.id
      })
      let getParam = {
        buyNum: this.count,
        buyType: this.proType.id,
        buyTime: this.limitTime.id,
        buyVersion: newObjArray.join(',')
      }
      axios.get('/api/getPrice', {params: getParam}).then((res) => {
        if (res) {
          let data = res.data.data
          this.price = data.amount
        }
      })
    },
    paySure () {
      this.payResultClose('isShow')
      this.isShowPay = true
    },
    payResultClose (attr) {
      this[attr] = false
    },
    PayResultShow (val) {
      console.log('按钮函数')
      this.isShowPay = false
      this.isShowPayResult = true
      this[val] = true
      console.log(this.isShowPaySucc)
      console.log(this.isShowPayFail)
    }
  },
  mounted () {
    // 组件渲染完成时执行
    this.count = 1
    this.proType = this.productList[0]
    this.limitTime = this.limitList[0]
    this.version = [this.versionList[0]]
    this.getPrice()
  }
}
</script>

<style scoped>

</style>
