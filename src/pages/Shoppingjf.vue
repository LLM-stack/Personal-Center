<template>
  <div>
    <section class="content ">
      <l-head :title="title"></l-head>
      <div class="banner" @click="goToShopping"></div>
      <div class="rule">
        <div class="rule-cont">
          <div class="rule-cont-title">
            <span class="rule-hr"></span>
            <span class="lm-text-purple">奖励规则</span>
            <span class="rule-hr"></span>
          </div>
          <h4>1.购物后找回订单奖励
            <span class="qsd" @click="goToMyOrder">找回订单></span>
          </h4>
          <div>
            在欢乐券成功购买任意1件商品并找回订单，均可获得相应
            积分奖励。积分奖励根据订单实际支付金额发放0~2000积
            分。
            <!--<div class="lm-margin-t">V1会员：可获得额外<span class="lm-text-purple">10%</span>的积分奖励；</div>-->
            <!--<div>V2会员：可获得额外<span class="lm-text-purple">20%</span>的积分奖励。</div>-->
          </div>
          <ul class="cz">
            <li><img src="../assets/images/order_06.png" alt=""><span>打开手机淘宝的订单详情，复制订单号</span></li>
            <li><img src="../assets/images/order_09.png" alt=""><span>在欢乐券“我的订单”中提交订单找回</span></li>
            <li><img src="../assets/images/order_11.png" alt=""><span>确认收货后，积分将在1个工作日内发放</span></li>
          </ul>
          <h4>2.晒单获取更多奖励
            <span class="qsd" @click="goToShowOrder">去晒单></span>
          </h4>
          <div>
            在晒单广场晒出你的订单，根据实际支付金额发放奖励，
            10元以内奖励10积分，10~20以内奖励20积分，以此类推。
            会员等级越高可获得的积分越多。
            <div class="lm-margin-t">V1会员：可获得额外<span class="lm-text-purple">10%</span>的积分奖励；</div>
            <div>V2会员：可获得额外<span class="lm-text-purple">20%</span>的积分奖励。</div>
          </div>
          <ul class="cz">
            <li><img src="../assets/images/order_06.png" alt=""><span>打开手机淘宝的订单详情，复制订单号</span></li>
            <li><img src="../assets/images/order_09.png" alt=""><span>在欢乐券“晒单广场-晒单奖励”中进行晒单</span></li>
            <li><img src="../assets/images/order_11.png" alt=""><span>提交成功后，积分马上发放到个人账户</span></li>
          </ul>
          <div>注意事项：如有确认收货后又退货的情况，系统将会收回晒单以及找回
            订单赠送的积分。
          </div>
        </div>
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
        title: '购物下单送积分'
      }
    },
    methods:{
      goToShowOrder(){
        location.href=url.requestUrl+"/hlquan/html/MyOrderShow.aspx";
      },
      goToMyOrder(){
        location.href=url.requestUrl+"/hlquan/html/MyOrder.aspx";
      },
      goToShopping(){
        location.href=url.requestUrl;
      }
    }
  }
</script>

<style scoped>
  .rule{
    font-size: 0.75rem;
    margin-top: 0.8rem;
    background-color: #fff;
  }
  .rule .rule-cont{
    padding: 0.6rem;
  }
  .rule-cont h4{
    margin-top:0.8rem;
    margin-bottom: 0.5rem;
  }
  .rule-cont-title .lm-text-purple{
    border-left: 0.05rem solid #D6A9FD;
    border-right: 0.05rem solid #D6A9FD;
    padding: 0 1rem;
  }
  .rule .rule-cont-title{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem 0;
  }
  .rule-cont-title .rule-hr{
    width: 2rem;
    height: 0.05rem;
    background-color: #D6A9FD;
  }
  .qsd{
    margin-left: 0.2rem;
    color: #bf7afc;
    border-radius: 10px;
    padding: 0 0.5rem;
    display: inline-block;
    background-color:#f1e0ff ;
  }
  .banner{
    width: 100%;
    height: 8rem;
    background-size: 100% 100%;
    background-image: url("../assets/images/shopping.png") ;
  }
  .cz{
    padding: 0;
    margin-bottom: 0.4rem;
    color: #999;
  }
  .cz li{
    display: flex;
    margin-top: 0.6rem;
    align-items: center;
  }
  .cz li img{
    margin-right: 0.4rem;
    width: 1.4rem;
  }
</style>
