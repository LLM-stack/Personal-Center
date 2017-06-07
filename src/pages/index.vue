<template>
<div>
  <!--<transition name="back">-->
  <!--<keep-alive>-->
    <router-view ></router-view>
  <!--</keep-alive>-->
  <!--</transition>-->
  <nav class="nav-bottom">
    <a class="nav-tab" href="http://www.qmjbuy.com/hlquan/html/index.aspx">
      <span class="nav-icon nav-icon-ticket"></span>
      <span class="tab-label">优惠券</span>
    </a>
    <a class="nav-tab" href="http://www.qmjbuy.com/hlquan/html/nineShow.aspx">
      <span class="nav-icon nav-icon-nine"></span>
      <span class="tab-label">9块9</span>
    </a>
    <a class="nav-tab" href="http://www.qmjbuy.com/hlquan/html/points.aspx">
      <span class="nav-icon nav-icon-shop"></span>
      <span class="tab-label">积分商城</span>
    </a>
   <router-link :to="{path: '/'}">
      <span class="nav-icon nav-icon-mine nav-icon-mine-current" ></span>
      <span class="tab-label nav-active">我的</span>
   </router-link>
  </nav>
</div>
</template>

<script>
  export default {
        data(){
          return {
            isShow:false
          }
        },
        methods:{
          checkCookie(){
           let cookie= this.getcookie("OpenID");
           if(cookie==""){
             location.href=url.requestUrl;
           }
          },
          getcookie (name) {
              var strcookie = document.cookie;
              var arrcookie = strcookie.split("; ");
              for (var i = 0; i < arrcookie.length; i++) {
                  var arr = arrcookie[i].split("=");
                  if (arr[0] == name) return unescape(arr[1]); //增加对特殊字符的解析
              }
              return "";
          },
        },
        created:function(){
          this.checkCookie();
        }
  }
</script>

<style>
  @media only screen and (max-width: 375px) {
    html {
      font-size: 20px !important;
    }
  }
  @media only screen and (min-width: 376px) {
    html {
      font-size: 22px !important;
    }
  }
  @media only screen and (min-width: 720px) {
    html {
      font-size: 26px !important;
    }
  }
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    background-color:#EEEEEE!important;
    font-family: "Microsoft YaHei",Roboto,Lato,sans-serif,"Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","WenQuanYi Micro Hei",sans-serif;
  }
  li{
    list-style: none;
  }
  a{
    color: #000!important;
  }
  .list-block{
    background-color: #fff;
  }
  .list-block ul{
    padding-left: 0;
  }
  .list-block .item-content {
    position: relative;
    box-sizing: border-box;
    padding-left: .75rem;
    min-height: 2rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .list-block .item-media {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    -webkit-box-lines: single;
    -moz-box-lines: single;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    box-sizing: border-box;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding-top: .35rem;
    padding-bottom: .4rem;
  }
  .list-block .icon {
    font-family: iconfont-sm!important;
    font-style: normal;
    display: inline-block;
    vertical-align: middle;
    background-size: 100% auto;
    background-position: center;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: .2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .list-block .item-inner {
    position: relative;
    width: 100%;
    height: 2.2rem;
    overflow: hidden;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .list-block .item-title {
    -webkit-flex-shrink: 1;
    -ms-flex: 0 1 auto;
    -webkit-flex-shrink: 1;
    flex-shrink: 1;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  .list-block .item-after {
    white-space: nowrap;
    color: #5f646e;
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    margin-left: .25rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    max-height: 1.4rem;
  }
  /*工具样式*/
  .lm-text-grey{
    color: #999!important;
  }
  .lm-text-yellow{
    color: #FFA944!important;
  }
  .lm-text-orange{
    color: #FF9B81!important;
  }
  .lm-text-purple{
    color: #bf7afc!important;
  }
  .lm-text-red{
    color: red!important;
  }
  .lm-font-sm{
    font-size: 0.6rem;
  }
  .lm-font-defult{
    font-size: 0.7rem;
  }
  .lm-margin-t{
     margin-top: 0.6rem;
   }
  .lm-margin-t-sm{
    margin-top: 0.4rem;
  }
  .lm-margin-t-xs{
    margin-top: 0.2rem;
  }
  .lm-margin-b{
    margin-bottom: 0.6rem;
  }
  .lm-margin-b-sm{
    margin-bottom: 0.4rem;
  }
  .lm-margin-b-xs{
    margin-bottom: 0.2rem;
  }
  .lm-margin-r{
    margin-right: 0.6rem;
  }
  .lm-margin-r-sm{
    margin-right: 0.4rem;
  }
  .lm-margin-r-xs{
    margin-right: 0.2rem;
  }
  .lm-margin-l{
    margin-left: 0.6rem;
  }
  .lm-margin-l-sm{
    margin-left: 0.4rem;
  }
  .lm-margin-l-xs{
    margin-left: 0.2rem;
  }
  .lm-jc-center{
    display: flex;
    align-items: center;
    justify-content: center!important;
  }
  .lm-icon{
    display: inline-block;
    vertical-align: middle;
    width: 1.1rem;
    height: 1.1rem;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .lm-icon-pen{
    background-image: url("../assets/images/pen.png");
  }
  .lm-icon-redbag{
    background-image: url("../assets/images/redbag.png");
  }
  .lm-icon-zhuan{
    background-image: url("../assets/images/everyday.png");
  }
  .lm-icon-date{
    background-image: url("../assets/images/date.png");
  }
  .lm-icon-book{
    background-image: url("../assets/images/book.png");
  }
  .lm-icon-people{
    background-image: url("../assets/images/people.png");
  }
  .lm-icon-happyB{
    background-image: url("../assets/images/happyB.png");
  }
  .lm-icon-vip0{
    background-image: url("../assets/images/v0.png");
  }
  .lm-icon-vip1{
    background-image: url("../assets/images/v1.png");
  }
  .lm-icon-vip2{
    background-image: url("../assets/images/v2.png");
  }
  .more{
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.2rem;
    background-size: 100% 100%;
    background-image: url("../assets/images/more.png") ;
  }
  /*覆盖样式*/
  a{
    color: #000;
  }
  .bar{
    position: inherit;
    background-color: #fff;
  }
  .content{
    margin-bottom: 2.4rem;
  }
  .list-block{
    font-size: 0.7rem;
  }
  .list-block .item-content{
    padding-left: 0;
  }
  .content-block-title{
    margin: 0 0.75rem;
  }
  .list-block .item-media+.item-inner{
    margin-left: 0;
    padding-left: .75rem;
  }
  .mu-step-label{
    height: 2rem!important;
    font-size: 0.7rem!important;
    padding-left: 0.7rem!important;
    padding-right: 0!important;
  }
  .back-enter-active,.back-leave-active {
    transition: all .5s ;
  }
  .back-enter, .back-leave-active {
    /*transform: translateX(100%);*/
    opacity: 0;
  }
  /*底部导航*/
  .nav-bottom{
    width: 100%;
    height: 2.4rem;
    position:fixed;
    bottom: 0;
    background-color: #fff;
    display: flex;
    border-top: 1px solid #dedede;
  }
  .nav-bottom >a{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 25%;
    height: 100%;
  }
  .nav-bottom >a span{
    font-size: 0.6rem;
    color: #999999;
  }
  .nav-bottom .nav-icon{
    width: 1.2rem;
    height: 1.2rem;
    background-size: 100% 100%;
  }
  .nav-icon-ticket{
    background-image: url("../assets/images/ticket.png");
  }
  .nav-icon-nine{
    background-image: url("../assets/images/nine.png");
  }
  .nav-icon-shop{
    background-image: url("../assets/images/shop.png");
  }
  .nav-icon-mine{
    background-image: url("../assets/images/mine.png");
  }
  /*底部导航切换*/
  .nav-icon-ticket-current{
    background-image: url("../assets/images/ticket_current.png");
  }
  .nav-icon-nine-current{
    background-image: url("../assets/images/nine_current.png");
  }
  .nav-icon-shop-current{
    background-image: url("../assets/images/shop_current.png");
  }
  .nav-icon-mine-current{
    background-image: url("../assets/images/mine_current.png");
  }
  .nav-active{
    color: #ff4c6d !important;
  }
</style>
