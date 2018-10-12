<template>
  <div class="select w3-border"  @click="selectOpen">
    <div class="select-show">
      <span class="pl10" :id="currId">{{ currValue }}</span>
      <div class="arrow"></div>
    </div>
    <div class="select-list w3-border" v-if="isShow">
      <ul>
        <li class="w3-border-bottom" @click="choiceValue($event)" v-for="(item, key) in selectList" :key="key" :id="item.id">{{ item.value }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectList: {
      type: Array,
      default: () => {}
    }
  },
  data () {
    return {
      isShow: false,
      currId: this.selectList[0].id,
      currValue: this.selectList[0].value
    }
  },
  methods: {
    selectOpen () {
      this.isShow = !this.isShow
    },
    choiceValue (e) {
      this.currValue = e.target.innerHTML
      this.currId = e.target.id
      let obj = {
        id: this.currId,
        value: this.currValue
      }
      this.$emit('on-change', obj)
    }
  }
}
</script>

<style scoped lang="less">
  .select {
    position: relative;
    width: 100px;
    height: 24px;
    line-height: 24px;
    cursor: pointer;
    .arrow{
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translateY(-50%);
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #ccc;
    }
    &-list {
      position: absolute;
      top: 23px;
      left: 0;
      transform: translateX(-1%);
      width: 100px;
      border-bottom: none;
      background: white;
      li{
        line-height: 24px;
        padding-left: 10px;
        cursor: pointer;
        &:hover{
          background: aliceblue;
        }
      }
    }
  }
</style>
