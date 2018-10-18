<template>
  <div class="w3-row orderList">
    <h4 class="p10 mb10">您的产品</h4>
    <div class="order-top w3-col s12 l11">
      <div class="w3-col l3">
        <span class="w3-col l4 tar">选择产品：</span>
        <v-selection :select-list="productType" class="w3-white w3-col l7 order-top-select" @on-change="getProTypeData($event)"></v-selection>
      </div>
      <div class="w3-col l6">
        <span class="w3-col l2 tar">开始时间：</span>
        <VDatapicker v-model="startDate" class="w3-col l4 VDatapicker" @input="getDateTypeData()"></VDatapicker>
        <span class="w3-col l2 tar">结束时间：</span>
        <VDatapicker v-model="endDate" class="w3-col l4 VDatapicker" @input="getDateTypeData()"></VDatapicker>
      </div>
      <div class="w3-col l3">
        <span class="w3-col l6 tar">关键字：</span>
        <input type="text" class="w3-white w3-col l6" v-model.lazy="query" >
      </div>
    </div>
    <table class="product-table w3-col l12 w3-border mb20 mt20" >
      <thead>
      <tr>
        <th class="w3-border-right" v-for="(item, key) in tableHeads" :key="key" @click="checkOrder(item)" :class="{active: item.active}">{{ item.label }}</th>
      </tr>
      </thead>
      <tbody>
      <tr class="tac w3-border-bottom" v-for="item in tableData" :key="item.period">
        <td class="w3-border-right" v-for="(th, key) in tableHeads" :key="key">{{ item[th.key] }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable handle-callback-err */
import VSelection from '../components/base/select'
import VDatapicker from 'vue2-datepicker'

export default {
  components: {
    VSelection,
    VDatapicker
  },
  data () {
    return {
      productType: [
        {
          id: 'publish',
          value: '数据统计'
        }, {
          id: 'forecast',
          value: '数据预测'
        }, {
          id: 'count',
          value: '流量分析'
        }, {
          id: 'analysis',
          value: '广告发布'
        }
      ],
      show: false,
      query: '',
      productId: '',
      startDate: '',
      endDate: '',
      tableHeads: [
        {
          label: '订单号',
          key: 'orderId'
        },
        {
          label: '购买产品',
          key: 'product'
        },
        {
          label: '版本类型',
          key: 'version'
        },
        {
          label: '有效时间',
          key: 'period'
        },
        {
          label: '购买日期',
          key: 'date'
        },
        {
          label: '数量',
          key: 'buyNum'
        },
        {
          label: '总价',
          key: 'amount'
        }
      ],
      currentOrder: 'asc',
      tableData: [],
      oldTableData: []
    }
  },
  mounted () {
    this.getTableData()
  },
  watch: {
    query () {
      this.getTableData()
    }
  },
  methods: {
    getTableData () {
      this.tableData = []
      let reqParams = {
        query: this.query,
        productId: this.productId,
        startDate: this.startDate,
        endDate: this.endDate
      }
      this.axios.get('/api/getOrderList', {params: reqParams}).then((res) => {
        if (res) {
          this.tableData = res.data.data
        }
      }, (err) => {
        console.error('/api/getOrderList接口出错')
        console.error(err)
      })
    },
    // 按条件正序或倒序排列
    checkOrder (headItem) {
      this.tableHeads.map((param) => {
        param.active = false
        return param
      })
      headItem.active = true
      if (this.currentOrder === 'desc') {
        this.currentOrder = 'asc'
      } else if (this.currentOrder === 'asc') {
        this.currentOrder = 'desc'
      }
      this.tableData = this._.orderBy(this.tableData, headItem.key, this.currentOrder)
    },
    // 选择产品获取结果
    getProTypeData (attr) {
      this.productId = attr.value
      this.getTableData()
    },
    // 选择时间获取结果
    getDateTypeData () {
      this.getTableData()
    }
  }
}
</script>

<style scoped lang="less">
  .VDatapicker /deep/ input, input, span {
    height: 24px;
    line-height: 24px;
  }

  .VDatapicker /deep/ .mx-input-append {
    top: -4px;
  }

  table {
    tr {
      height: 34px;
    }
    thead tr {
      background: #4fc08d;
      color: white;
    }
    th.active {
      background: #35495e;
    }
  }

  /*.product-table{*/
  /*width: 100%;*/
  /*td {*/
  /*width: 14.285714%;*/
  /*height: 24px;*/
  /*line-height: 24px;*/
  /*padding: 5px;*/
  /*border-right: 1px solid #ccc;*/
  /*}*/
  /*}*/
</style>
