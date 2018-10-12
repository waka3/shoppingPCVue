<template>
  <div class="w3-row">
    <div class="w3-left w3-col l3 m4 s12">
      <div class="left-ctn mr20 w3-white">
        <div class="left-ctn-img">
          <img :src="productIcon">
        </div>
        <router-link class="pl15" :to="{path: item.path}" active-class="active" v-for="(item, index) in products" :key="index">{{ item.name }}</router-link>
      </div>
    </div>
    <div class="w3-left w3-col l9 m8 s12 details-ctn">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          name: '数据统计',
          path: 'count',
          active: false
        },
        {
          name: '数据预测',
          path: 'forecast',
          active: false
        },
        {
          name: '流量分析',
          path: 'analysis',
          active: false
        },
        {
          name: '广告发布',
          path: 'publish',
          active: false
        }
      ],
      imgMap: {
        '/detail/publish': require('../assets/images/4.png'),
        '/detail/analysis': require('../assets/images/3.png'),
        '/detail/forecast': require('../assets/images/2.png'),
        '/detail/count': require('../assets/images/1.png')
      }
    }
  },
  computed: {
    productIcon () {
      return this.imgMap[this.$route.path]
    }
  }
}
</script>

<style lang="less">
  .active{
    color: #fff;
    background: #4fc08d;
  }
  .left-ctn{
    padding-top: 10px;
    &-img{
      width: 60%;
      height: 100px;
      margin: 0px auto 10px;
    }
    a{
      display: block;
      height: 34px;
      line-height: 34px;
    }
  }
  .right-top{
    &-choice{
      height: 24px;
      line-height: 24px;
      div{
        margin-bottom: 10px;
      }
    }
  }
  .details-ctn{
    p{
      line-height: 20px;
    }
    h1{
      font-size: 24px;
    }
  }
</style>
