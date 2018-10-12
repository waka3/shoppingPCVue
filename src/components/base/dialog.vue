<template>
  <div class="dialog w3-row" v-if="isShow">
    <div class="dialog-cover" @click="closeMySelf"></div>
    <transition name="drop">
      <div class="dialog-content p10 w3-col l5">
        <p class="dialog-close" @click="closeMySelf">X</p>
        <slot>empty</slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeMySelf () {
      this.$emit('on-close')
    }
  }
}
</script>

<style scoped lang="less">
  .drop-enter-active{
    transition: all .5s ease;
  }
  .drop-leave-active{
    transition: all .3s ease;
  }
  .drop-enter{
    transform: translateY(-500px);
  }
  .drop-leave-active{
    transform: translateY(-500px);
  }
  .dialog{
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .dialog{
    &-cover{
      position: fixed;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      background: black;
      opacity: 0.7;
    }
    &-content{
      position: fixed;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      border: 2px solid #000;
    }
    &-close{
      text-align: right;
    }
  }
  /*.drop{*/
    /*&-enter-active{*/
      /*transition: all .3s ease;*/
    /*}*/
    /*&-leave-active{*/
      /*transition: all .3s ease;*/
    /*}*/
    /*&-enter{*/
      /*transform: translateY(-500px);*/
    /*}*/
    /*&-leave-active{*/
      /*transform: translateY(-500px);*/
    /*}*/
  /*}*/
</style>
