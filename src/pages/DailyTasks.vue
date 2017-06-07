<template>
  <div>
    <section class="content">
      <l-head :title="title"></l-head>
      <div class="banner"></div>
      <div class="list-block">
        <ul>
          <!--<li class="item-content item-link" @click="goToSafety">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title"><span class="lm-icon lm-icon-redbag lm-margin-r-sm"></span>绑定手机</div>
              <div class="item-after lm-text-grey lm-font-sm">额外送20-50%</div>
            </div>
          </li>-->
          <router-link :to="{path: 'SignIn'}">
          <li class="item-content item-link" >
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner" >
              <div class="item-title"><span class="lm-icon lm-icon-people lm-margin-r-sm"></span>签到</div>
              <div class="item-after lm-text-grey lm-font-sm">每日签到赚积分</div>
            </div>
            <span class="more" ></span>
          </li>
          <mu-divider/>
          </router-link>
          <li class="item-content item-link" @click="goToInvite">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title"><span class="lm-icon lm-icon-date lm-margin-r-sm"></span>邀请好友赚积分</div>
              <div class="item-after lm-text-grey lm-font-sm">邀请就送</div>
            </div>
            <span class="more" ></span>
          </li>
          <mu-divider/>
          <li class="item-content item-link" @click="goToShopping">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title"><span class="lm-icon lm-icon-zhuan lm-margin-r-sm"></span>购物下单狂送积分</div>
              <div class="item-after lm-text-grey lm-font-sm">你购我送</div>
            </div>
            <span class="more" ></span>
          </li>
          <mu-divider/>
          <li class="item-content item-link" @click="goToShowOrder">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title"><span class="lm-icon lm-icon-book lm-margin-r-sm"></span>晒单赚积分</div>
              <div class="item-after lm-text-grey lm-font-sm">晒了就送</div>
            </div>
            <span class="more" ></span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script type="text/javascript">
  import lHead from '../components/header'

  export default {
    components: {
      lHead
    },
    data　() {
      return{
        title: '每日任务赚积分'
      }
    },
    methods:{
      goToSignRanking(){
        location.href="http://www.qmjbuy.com/hlquan/html/SignRanking.aspx"
      },
      goToInvite(){
        location.href="http://www.qmjbuy.com/hlquan/html/MyInvite.aspx"
      },
      goToShopping(){
        location.href="http://www.qmjbuy.com/hlquan/html/MyOrder.aspx";
      },
      goToShowOrder(){
        location.href="http://www.qmjbuy.com/hlquan/html/MyOrderShow.aspx";
      },
      goToSafety(){
        location.href="http://www.qmjbuy.com/hlquan/html/user/security.aspx"
      }
    }
  }
</script>

<style scoped>
  .banner{
    width: 100%;
    height: 5.6rem;
    background-size: 100% 100%;
    background-image: url("../assets/images/dailytask.jpg") ;
  }
  .list-block{
    margin-top: 0.5rem;
  }
</style>
