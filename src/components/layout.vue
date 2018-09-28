<template>
  <div class="layout">
    <div class="app-header">
      <div class="app-header-inner">
        <a href="">
          <img src="../assets/logo.png" alt="">
        </a>
        <ul class="fr app-header-nav">
          <li>登录</li>
          <li class="pl10 pr10">|</li>
          <li>注册</li>
          <li class="pl10 pr10">|</li>
          <li>关于</li>
        </ul>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <p>this is change place</p>
    </div>
    <div class="app-footer tac mt30">
      <p>© 2016 fishenal MIT</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout'
}
</script>

<style lang="less">
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
  h1, h2, h3, h4, h5, h6 {text-decoration:none; font-weight:normal; font-size:100%;}  /*设置h标签的大小，设置跟父亲一样大的字体font-size:100%;*/
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
</style>
