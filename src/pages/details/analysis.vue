<template>
  <div>
    <div class="right-top w3-white p10 w3-row">
      <h1>流量分析</h1>
      <p class="pt30 pb30">
        是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
      <div class="right-top-choice">
        <div class="w3-col l12">
          <span class="w3-col l2">购买数量：</span>
          <span class="w3-col l10">
            <v-count :min="min" :max="max" @on-change="onParamChange('count', $event)"></v-count>
          </span>
        </div>
        <div class="w3-col l12">
          <span class="w3-col l2">产品类型：</span>
          <span class="w3-col l10">
              <VSelection :selectList="productList" @on-change="onParamChange('proType', $event)"></VSelection>
          </span>
        </div>
        <div class="w3-col l12">
          <span class="w3-col l2">有效时间：</span>
          <span class="w3-col l10">
              <v-radio :radioList="limitList" @on-change="onParamChange('limitTime', $event)"></v-radio>
          </span>
        </div>
        <div class="w3-col l12">
          <span class="w3-col l2">产品版本：</span>
          <span class="w3-col l10">
              <v-checkbox :checkList="versionList" @on-change="onParamChange('version', $event)"></v-checkbox>
          </span>
        </div>
        <div class="w3-col l12">
          <span class="w3-col l2">总价：</span>
          <span class="w3-col l10">
              {{ price }} 元
          </span>
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
      <p class="pt30 pb30">网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>
      <h2 class="pt10 pb10">用户行为指标</h2>
      <ul>
        <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
        <li>用户在网站的停留时间；</li>
        <li>用户来源网站（也叫“引导网站”）；</li>
        <li>用户所使用的搜索引擎及其关键词；</li>
        <li>在不同时段的用户访问量情况等。</li>
      </ul>

      <h2 class="pt20 pb10">浏览网站方式</h2>
      <ul>
        <li>用户上网设备类型</li>
        <li>用户浏览器的名称和版本</li>
        <li>访问者电脑分辨率显示模式</li>
        <li>用户所使用的操作系统名称和版本</li>
        <li>用户所在地理区域分布状况等</li>
      </ul>
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
      this.isShowPay = false
      this.isShowPayResult = true
      this[val] = true
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

<style scoped lang="less">
  h2 {
    font-size: 22px;
    font-weight: bold;
  }
  .right-bottom ul li {
    line-height: 24px;
  }
</style>
