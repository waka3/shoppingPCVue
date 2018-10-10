<template>
  <div class="slide ml10" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-ctn">
      <a :href="slides[nowIndex].src">
        <transition class="slide-trans" v-if="isShow" >
          <img :src="slides[nowIndex].src">
        </transition>
        <transition class="slide-trans-old" v-if="!isShow">
          <img :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul class="slide-index pt05 pb05 tar">
      <li @click="prev(nowIndex)">&lt;</li>
      <li v-for="(item, key) in slides" :key="key" @click="goto(key)">
        <a :class="{on: key === nowIndex}" :href="slides[key].herf">{{ key + 1 }}</a>
      </li>
      <li @click="next(nowIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: () => []
    },
    inv: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true,
      invId: ''
    }
  },
  methods: {
    goto (temp) {
      this.isShow = !this.isShow
      this.nowIndex = temp
    },
    prev (temp) {
      if (temp === 0) {
        this.nowIndex = this.slides.length - 1
      } else {
        this.nowIndex--
      }
    },
    next (temp) {
      if (temp === this.slides.length - 1) {
        this.nowIndex = 0
      } else {
        this.nowIndex++
      }
    },
    runInv () {
      this.show = !this.show
      this.invId = setInterval(() => {
        this.next(this.nowIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv()
  }
}
</script>

<style scoped lang="less">
  .slide {
    position: relative;
    width: 100%;
    height: 400px;
    &-ctn img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &-trans--enter-active{
      transition: all .5s ease-out;
      transform: translateX(100%);
    }
    &-trans-enter{
      transition: all .5s ease-out;
      transform: translateX(-100%);
    }
    &-trans--old-level-active{
      transition: all .3s ease-out;
      transform: translateX(100%);
    }
    &-index {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.46);
      li {
        display: inline-block;
        width: 20px;
        .on {
          color: #fff;
        }
      }
    }
  }
</style>
