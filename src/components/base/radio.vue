<template>
  <ul class="checkBox">
    <li class="tac w3-border" :class="{active: key === nowIndex}" @click="choicesItem(key)" v-for="(item, key) in radioList" :key="key" :value="item.id">{{ item.value}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    radioList: {
      type: Array,
      default: () => {}
    }
  },
  data () {
    return {
      nowIndex: 0
    }
  },
  methods: {
    choicesItem (e) {
      this.nowIndex = e
      this.$emit('on-change', this.radioList[e])
    }
  }
}
</script>

<style scoped lang="less">
  .checkBox{
    display: flex;
    justify-content: left;
    li{
      width: 100px;
      height: 24px;
      line-height: 24px;
      border-radius: 5px;
      margin-right: 10px;
    }
  }
</style>
