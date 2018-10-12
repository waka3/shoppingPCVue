/* eslint-disable no-trailing-spaces */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout'
import VueRouter from 'vue-router'
import Axios from 'axios'
import Feather from 'vue-icon'
import IndexPage from './pages/index'
import DetailPage from './pages/details'
import forecast from './pages/details/forecast'
import publish from './pages/details/publish'
import count from './pages/details/count'
import analysis from './pages/details/analysis'

Vue.use(VueRouter)
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
  mode: 'history',
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
    }
  ]
})

Vue.prototype.$ajax = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: {Layout}
})
