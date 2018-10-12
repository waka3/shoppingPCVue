<template>
  <div class="count w3-row">
    <ul class="w3-col l2 w3-border tac">
      <li class="w3-col l3 w3-border-right" @click="cut()">-</li>
      <li class="w3-col l6 w3-border-right">
        <input type="text" v-model="value" class="w3-col l12 tac w3-border-0">
      </li>
      <li class="w3-col l3" @click="plus()">+</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      value: this.min
    }
  },
  methods: {
    plus () {
      if (this.value === this.max) {
        return 0
      }
      this.value++
    },
    cut () {
      if (this.value === this.min) {
        return 0
      }
      this.value--
    }
  },
  watch: {
    // 监听输入的值为数字
    value: function (val) {
      if (typeof val === 'string') {
        this.value = val.replace(/\D/g, '')
      }
      if (this.value <= this.min) {
        this.value = this.min
      }
      if (this.value >= this.max) {
        this.value = this.max
      }
      this.$emit('on-change', this.value)
    }
  }
}
</script>

<style scoped lang="less">
  .count{
    ul{
      height: 24px;
    }
    li, input{
      height: 100%;
      cursor: pointer;
    }
    li:hover{
      color: #fff;
      background: #4fc08d;
    }
  }
</style>
