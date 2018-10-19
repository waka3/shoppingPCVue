<template>
  <div class="layout" id="Layout">
    <div class="app-header">
      <div class="app-header-inner">
        <router-link :to="{path: '/'}">
          <img src="../assets/logo.png" alt="">
        </router-link>
        <!--router-link路由跳转比a链接页面跳转渲染快-->
        <ul class="fr app-header-nav">
          <li v-if="isLogin">{{ username }}</li>
          <li v-if="isLogin" class="pl10 pr10">|</li>
          <li v-if="isLogin" @click="Quit">退出</li>
          <li v-if="!isLogin" @click="loginClick">登录</li>
          <li v-if="!isLogin" class="pl10 pr10">|</li>
          <li v-if="!isLogin" @click="regClick">注册</li>
          <li class="pl10 pr10">|</li>
          <li @click="aboutClick">关于</li>
        </ul>
      </div>
    </div>
    <div class="app-content pt20">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer tac mt30">
      <p>© 2016 fishenal MIT</p>
    </div>
    <MyDialog :is-show="isShowLogin" @on-close="closeDialog('isShowLogin')">
      <logForm @isLogin="onSuccess"></logForm>
    </MyDialog>
    <MyDialog :is-show="isShowReg" @on-close="closeDialog('isShowReg')">
      <regForm></regForm>
    </MyDialog>
    <MyDialog :is-show="isShowAbout" @on-close="closeDialog('isShowAbout')">
      <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
    </MyDialog>
  </div>
</template>

<script>
import Dialog from './base/dialog'
import LogForm from './logForm'
import RegForm from './regForm'

export default {
  name: 'Layout',
  components: {
    MyDialog: Dialog,
    LogForm: LogForm,
    RegForm: RegForm
  },
  data () {
    return {
      isShowLogin: false,
      isShowReg: false,
      isShowAbout: false,
      isLogin: false,
      username: ''
    }
  },
  methods: {
    loginClick () {
      this.isShowLogin = true
    },
    regClick () {
      this.isShowReg = true
    },
    aboutClick () {
      this.isShowAbout = true
    },
    closeDialog (param) {
      this[param] = false
    },
    onSuccess (data) {
      this.closeDialog('isShowLogin')
      this.isLogin = true
      this.username = data.username
    },
    Quit () {
      this.isLogin = false
      this.username = ''
    }
  }
}
</script>

<style lang="less">
  @import "~w3-css";
  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td {margin: 0;padding: 0;}
  body, button, input, select, textarea {font:12px"\5B8B\4F53",sans-serif;}
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display: block;}
  body {line-height: 1;}
  ol, ul {list-style: none;}
  li > ul {margin: 0;}
  blockquote, q {quotes: none;}
  blockquote:before, blockquote:after, q:before, q:after {content: '';}
  table {border-collapse: collapse;border-spacing: 0;}
  textarea { resize:none; } /*防止拖动*/
  img {border:0; vertical-align:middle; }  /*  去掉图片低测默认的3像素空白缝隙，或者用display：block也可以*/
  a {color: inherit;text-decoration: none;}
  a:hover { text-decoration:underline; }
  sup { vertical-align:text-top; }
  sub{ vertical-align:text-bottom; }
  .clearfix:before,.clearfix:after {content:""; display:table;}
  .clearfix{ *zoom:1;}/*IE/7/6*/
  s,i,em{font-style:normal;text-decoration:none;}
  /**
  * 公共类
  * author: wyj
  */
  /*定位*/
  .fl{float: left;}
  .fr{float: right;}
  .tal{text-align: left;}
  .tac{text-align: center;}
  .tar{text-align: right;}
  .clear{clear: both;}
  .cl{clear: left;}
  .cr{clear: right;}
  .pr{position: relative;}
  .pa{position: absolute;}
  .hide{display: none;}
  /*字体大小*/
  .f10{font-size: 10px;}
  .f12{font-size: 12px;}
  .f14{font-size: 14px;}
  .f16{font-size: 16px;}
  .f18{font-size: 18px;}
  .f20{font-size: 20px;}
  /*长度高度*/
  .w{width:100%;}
  .w10{width:10px;}
  .w20{width:20px;}
  .w50{width:50px;}
  .w90{width:90px;}
  .w100{width:100px;}
  .w200{width:200px;}
  .w250{width:250px;}
  .w500{width:500px;}
  .w800{width:800px}
  .h{height:100%;}
  .h50{height:50px;}
  .h80{height:80px;}
  .h100{height:100px;}
  .h200{height:200px;}
  .m05{margin: 5px;}
  .m10{margin: 10px;}
  .m15{margin: 15px;}
  .m20{margin: 20px;}
  .m25{margin: 25px;}
  .m30{margin: 30px;}
  /*左外边距*/
  .ml05{margin-left: 5px;}
  .ml10{margin-left: 10px;}
  .ml15{margin-left: 15px;}
  .ml20{margin-left: 20px;}
  .ml25{margin-left: 25px;}
  .ml30{margin-left: 30px;}
  /*右外边距*/
  .mr05{margin-right: 5px;}
  .mr10{margin-right: 10px;}
  .mr15{margin-right: 15px;}
  .mr20{margin-right: 20px;}
  .mr25{margin-right: 25px;}
  .mr30{margin-right: 30px;}
  /*下外边距*/
  .mb05{margin-bottom: 5px;}
  .mb10{margin-bottom: 10px;}
  .mb15{margin-bottom: 15px;}
  .mb20{margin-bottom: 20px;}
  .mb25{margin-bottom: 25px;}
  .mb30{margin-bottom: 30px;}
  /*上外边距*/
  .mt05{margin-top: 5px;}
  .mt10{margin-top: 10px;}
  .mt15{margin-top: 15px;}
  .mt20{margin-top: 20px;}
  .mt25{margin-top: 25px;}
  .mt30{margin-top: 30px;}
  /*内边距*/
  .p05{padding: 5px;}
  .p10{padding: 10px;}
  .p15{padding: 15px;}
  .p20{padding: 20px;}
  .p25{padding: 25px;}
  .p30{padding: 30px;}
  /*左内边距*/
  .pl05{padding-left: 5px;}
  .pl10{padding-left: 10px;}
  .pl15{padding-left: 15px;}
  .pl20{padding-left: 20px;}
  .pl25{padding-left: 25px;}
  .pl30{padding-left: 30px;}
  /*右内边距*/
  .pr05{padding-right: 5px;}
  .pr10{padding-right: 10px;}
  .pr15{padding-right: 15px;}
  .pr20{padding-right: 20px;}
  .pr25{padding-right: 25px;}
  .pr30{padding-right: 30px;}
  /*下内边距*/
  .pb05{padding-bottom: 5px;}
  .pb10{padding-bottom: 10px;}
  .pb15{padding-bottom: 15px;}
  .pb20{padding-bottom: 20px;}
  .pb25{padding-bottom: 25px;}
  .pb30{padding-bottom: 30px;}
  /*上内边距*/
  .pt05{padding-top: 5px;}
  .pt10{padding-top: 10px;}
  .pt15{padding-top: 15px;}
  .pt20{padding-top: 20px;}
  .pt25{padding-top: 25px;}
  .pt30{padding-top: 30px;}
  body{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    background: #ebebeb;
  }
  .app-header, .app-footer{
    height: 50px;
    line-height: 50px;
  }
  .app-header{
    color: aliceblue;
    background: #2c3e50;
    &-inner{
      width: 60%;
      margin: auto;
      img{
        width: 50px;
        height: 50px;
      }
    }
    &-nav li{
      display: inline-block;
    }
  }
  .app-content{
    width: 60%;
    margin: auto;
  }
  .app-footer{
    background:#f3f2f2;
    text-align: center;
    clear: both;
  }
  //按钮样式
  .aBtn{
    width: 150px;
    height: 44px;
    line-height: 44px;
    color: #fff;
    background: #4fc08d;
  }
  .v-icon{
    width: 20px;
    height: 20px;
  }
</style>
