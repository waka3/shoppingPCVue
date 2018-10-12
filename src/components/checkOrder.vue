<template>
  <div>
    <span>请检查你的支付状态！</span>
    <a href="#" class="aBtn p10 mr05" @click="payResult('isShowPaySucc')">支付成功</a>
    <a href="#" class="aBtn p10" @click="payResult('isShowPayFail')">支付失败</a>
  </div>
</template>

<script>
export default {
  name: 'checkOrder',
  methods: {
    payResult (attr) {
      this.$emit('pay-result', attr)
    }
  }
}
</script>

<style scoped>

</style>
