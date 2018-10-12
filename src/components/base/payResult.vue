<template>
    <div>
      <v-my-dialog :isShow="isSucc" @on-close="payResultClose('isShowPaySucc')">购买成功！</v-my-dialog>
      <v-my-dialog :isShow="isFail" @on-close="payResultClose('isShowPayFail')">购买失败！</v-my-dialog>
    </div>
</template>

<script>
import VMyDialog from '../../components/base/dialog'

export default {
  name: 'payResult',
  props: {
    isSucc: {
      type: Boolean,
      default: false
    },
    isFail: {
      type: Boolean,
      default: false
    }
  },
  components: {
    VMyDialog: VMyDialog
  },
  methods: {
    payResultClose (attr) {
      this[attr] = false
      this.$emit('colse')
    }
  }
}
</script>

<style scoped>

</style>
