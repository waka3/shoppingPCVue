<template>
  <div>
    <table class="w3-col l12 w3-border mb20">
      <thead>
      <tr>
        <th class="w3-border-right" v-for="(item, key) in listItem.title" :key="key">{{ item }}</th>
      </tr>
      </thead>
      <tbody>
      <tr class="tac">
        <td class="w3-border-right" v-for="(item, index) in listItem.ctn" :key="index">{{ item }}</td>
      </tr>
      </tbody>
    </table>
    <VBankChoice :listItem="listItem" class="w3-col l12"></VBankChoice>
    <div class="w3-col l12 mt10">
      <a href="#" class="aBtn p10" @click="paySure">确认购买</a>
    </div>
  </div>
</template>

<script>
import VBankChoice from '../../components/bankChoice'
import VMyDialog from '../../components/base/dialog'

export default {
  name: 'buyDetail',
  props: {
    listItem: {
      type: Object,
      default: () => {
      }
    }
  },
  components: {
    VBankChoice: VBankChoice,
    VMyDialog: VMyDialog
  },
  methods: {
    paySure () {
      this.$emit('pay-sure')
    }
  }
}
</script>

<style scoped lang="less">
  table {
    tr {
      height: 34px;
    }
    thead tr {
      background: #4fc08d;
      color: white;
    }
  }
</style>
