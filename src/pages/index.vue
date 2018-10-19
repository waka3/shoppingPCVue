<template>
  <div class="index">
    <div class="fl sidebar">
      <!--<div class="sidebar-part" :class="[index===productList.length -1? '': 'mb10']" v-for="(item, index) in productList" :key="index">-->
      <div class="sidebar-part mb10" v-for="(item, index) in productList" :key="index">
        <h6 class="sidebar-part-t pl10">{{item.header}}</h6>
        <div class="sidebar-part-ctn pl10" v-for="(product, key) in item.ctn" :key="key">
          <p>{{product.title}}</p>
          <ul>
            <li class="pl05" v-for="(list, temp) in product.list" :key="temp">
              <a :href="list.url" v-if="list.url">
                {{list.name}}
                <span v-if="list.hot" class="ml10" style="color: red">HOT</span>
              </a>
              <router-link v-else :to="{path: list.path}"> {{list.name}}<span v-if="list.hot" class="ml10" style="color: red">HOT</span></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="fl slide">
      <slide-show :slides="slides" :inv="invTime"></slide-show>
      <div class="index-breadList ml10">
        <div v-for="(item, index) in boardList" :key="index" class="mb10 index-breadList-inner">
          <div :class="['index-breadList-' + item.id]">
            <h3>{{item.title}}</h3>
            <p>{{item.description}}</p>
            <router-link :to="{path: item.toKey}" class="aBtn p10">立刻购买</router-link>
          </div>
          <!--<router-link :to=""></router-link>-->
        </div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
import slideShow from '../components/slideShow'

export default {
  components: { slideShow },
  data () {
    return {
      productList: [{
        header: '全部产品',
        ctn: [{
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            }, {
              name: '数据预测',
              url: 'http://starcraft.com',
              hot: true
            }, {
              name: '流量分析',
              url: 'http://starcraft.com'
            }, {
              name: '广告发布',
              url: 'http://starcraft.com'
            }
          ]
        }, {
          title: '应用类',
          list: [
            {
              name: '91助手',
              url: 'http://starcraft.com'
            }, {
              name: '产品助手',
              url: 'http://starcraft.com'
            }, {
              name: '智能地图',
              url: 'http://starcraft.com'
            }, {
              name: '团队语音',
              url: 'http://starcraft.com'
            }
          ]
        }]
      }, {
        header: '最新消息',
        ctn: [{
          title: '',
          list: [
            {
              name: '数据统计',
              path: 'detail/count'
            }, {
              name: '数据预测',
              path: 'detail/forecast'
            }, {
              name: '流量分析',
              path: 'detail/analysis',
              hot: true
            }, {
              name: '广告发布',
              path: 'detail/publish'
            }
          ]
        }]
      }],
      invTime: 3000,
      slides: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        }, {
          src: require('../assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        }, {
          src: require('../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'detail/publish'
        }, {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        }
      ],
      boardList: [
        {
          title: '开放产品',
          description: '开放产品是一款开放产品',
          id: 'car',
          toKey: 'detail/count',
          saleout: false
        }, {
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          id: 'earth',
          toKey: 'detail/forecast',
          saleout: false
        }, {
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          toKey: 'detail/analysis',
          id: 'loud',

          saleout: true
        }, {
          title: '勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          id: 'hill',
          toKey: 'detail/publish',
          saleout: false
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
  .sidebar{
    width: 20%;
  }
  .sidebar-part{
    line-height: 30px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    h6{
      background: #4fc08d;
      color: #fff;
    }
    &-ctn{
      border-bottom: 1px solid #ccc;
    }
    p{
      height: 30px;
      font-weight: bold;
    }
    ul li {
      height: 30px;
    }
  }
  .slide{
    width: 80%;
  }
  .index-breadList{
    width: 100%;
      &-inner {
      display: inline-block;
      width: 49%;
      padding: 1%;
      background: #fff;
      &:nth-of-type(even){
        margin-left: 2%;
      }
      div{
        padding-left: 120px;
      }
    }
    &-car{
      background: url('../assets/images/1.png') no-repeat;
    }
    &-earth{
      background: url('../assets/images/2.png') no-repeat;
    }
    &-loud{
      background: url('../assets/images/3.png') no-repeat;
    }
    &-hill{
      background: url('../assets/images/4.png') no-repeat;
    }
    h3{
      height: 34px;
      line-height: 34px;
      font-weight: bold;
    }
    p{
      height: 24px;
      line-height: 24px;
    }
  }
</style>
