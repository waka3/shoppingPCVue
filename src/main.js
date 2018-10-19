/* eslint-disable no-trailing-spaces,no-unreachable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Feather from 'vue-icon'
import lodash from 'lodash'
import IndexPage from './pages/index'
import DetailPage from './pages/details'
import forecast from './pages/details/forecast'
import publish from './pages/details/publish'
import count from './pages/details/count'
import analysis from './pages/details/analysis'
import OrderPage from './pages/orderList'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
// Vue.prototype.$ajax = axios
Vue.prototype._ = lodash
Vue.use(Feather, {
  name: 'v-icon',
  props: {
    baseClass: {
      type: String,
      default: 'v-icon'
    },
    classPrefix: {
      type: String,
      default: 'v-icon-'
    }
  }
})
let router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }, {
      path: '/detail',
      component: DetailPage,
      children: [
        {
          path: 'publish',
          component: publish
        }, {
          path: 'forecast',
          component: forecast
        }, {
          path: 'count',
          component: count
        }, {
          path: 'analysis',
          component: analysis
        }
      ]
    }, {
      path: '/order',
      component: OrderPage
    }
  ]
})
// 通用方法测试
Vue.prototype.formatDate = (date, type) => {
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  let h = date.getHours()
  let minute = date.getMinutes()
  let s = date.getSeconds()
  minute = minute < 10 ? ('0' + minute) : minute
  /* eslint-disable no-new */
  switch (type) {
    case 'day': return y + '-' + m + '-' + d
      break
    case 'minute': return y + '-' + m + '-' + d + ' ' + h + ':' + minute
      break
    case 'second': return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + s
      break
  }
}
/* eslint-disable no-new */
new Vue({
  el: '#Layout',
  router,
  template: '<Layout/>',
  components: {Layout}
})
