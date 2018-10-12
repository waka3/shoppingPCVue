<template>
  <ul class="checkBox">
    <li class="tac w3-border" :class="{active: checkActive(key)}" @click="choicesItem(key)" v-for="(item, key) in checkList" :key="key" :value="item.id">{{ item.value}}</li>
  </ul>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    checkList: {
      type: Array,
      default: () => {}
    }
  },
  data () {
    return {
      nowIndexes: [0]
    }
  },
  methods: {
    choicesItem (e) {
      if (this.nowIndexes.indexOf(e) === -1) {
        this.nowIndexes.push(e)
      } else {
        this.nowIndexes = _.remove(this.nowIndexes, (idx) => {
          return idx !== e
        })
      }
      let nowObjArray = _.map(this.nowIndexes, (idx) => {
        return this.checkList[idx]
      })
      this.$emit('on-change', nowObjArray)
    },
    checkActive (index) {
      return this.nowIndexes.indexOf(index) !== -1
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
