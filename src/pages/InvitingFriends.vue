<template>
  <div>
    <section class="content">
      <l-head :title="title" :show="show" :info="info" :url="url"></l-head>
      <div class="banner"></div>
      <div class="rule">
        <div class="rule-cont">
          <div class="rule-cont-title">
            <span class="rule-hr"></span>
            <span class="lm-text-purple">活动规则</span>
            <span class="rule-hr"></span>
          </div>
          <div>
            每邀请一个好友首次关注欢乐劵可获得10积分，每日最多获得邀请积分上限为100积分，邀请者讲获得相应奖励，邀请以为好友最多可获得75积分。邀请的用户越多奖励越多
          </div>
          <h4>1.邀请好友关注欢乐券
            <span class="qsd">赚10积分</span>
          </h4>
          <div class="wechat" @click="goToInvite">
            <img src="../assets/images/friend_09.jpg" alt="">
            <div class="lm-text-grey">点击邀请好友</div>
          </div>
          <h4>2.邀请好友
            <span class="qsd">赚65积分</span>
          </h4>
          <ul class="cz">
            <li><img src="../assets/images/gou1.png" alt=""><span>好友首次绑定手机并打新手任务领取奖励  <span class="lm-text-purple">+10积分</span></span></li>
            <li><img src="../assets/images/gou1.png" alt=""><span>好友首次摇奖 <span class="lm-text-purple">+5积分</span></span></li>
            <li><img src="../assets/images/gou1.png" alt=""><span>好友首次签到 <span class="lm-text-purple">+5积分</span></span></li>
            <li><img src="../assets/images/gou1.png" alt=""><span>好友连续2天签到 <span class="lm-text-purple">+5积分</span></span></li>
            <li><img src="../assets/images/gou1.png" alt=""><span>好友连续3天签到 <span class="lm-text-purple">+5积分</span></span></li>
            <li><img src="../assets/images/gou1.png" alt=""><span>好友连续4天签到 <span class="lm-text-purple">+5积分</span></span></li>
            <li><img src="../assets/images/gou1.png" alt=""><span>好友连续5天签到 <span class="lm-text-purple">+5积分</span></span></li>
            <li><img src="../assets/images/gou1.png" alt=""><span>好友连续6天签到 <span class="lm-text-purple">+5积分</span></span></li>
            <li><img src="../assets/images/gou1.png" alt=""><span>好友连续7天签到 <span class="lm-text-purple">+5积分</span></span></li>
            <li><img src="../assets/images/gou1.png" alt=""><span>好友首次绑定支付宝账号 <span class="lm-text-purple">+5积分</span></span></li>
            <li><img src="../assets/images/gou1.png" alt=""><span>好友首次提现 <span class="lm-text-purple">+5积分</span></span></li>
            <li><img src="../assets/images/gou1.png" alt=""><span>好友首次成功邀请1个好友 <span class="lm-text-purple">+5积分</span></span></li>
          </ul>
          <router-link :to="{path: 'NewbieTask'}">
          <h4>3.分享攻略轻松指导好友
            <span><img src="../assets/images/invifren1.png" alt=""></span>
          </h4>
          </router-link>
          <div class="rule-cont-title"><span class="hr"></span><span>注意事项</span><span class="hr"></span></div>
          <div>
            1.被邀请的好友必须是首次关注欢乐劵，邀请者才可获得相应奖励
          </div>
          <!--<div class="lm-margin-t-sm">
            2.一个好友被邀请成功的5积分奖励是立即发放的，<span class="lm-text-purple">一个好友完成
            任务的160积分会延迟1小时发放。</span>
          </div>-->
          <div class="lm-margin-t-sm">
            2.为了网站的健康发展，发放积分时将核查每个账号获取的积分数据，自我邀请、一人控制多号、多设备操作等行为，等不正当获取积分行为者将被封号处理，请各位粉丝们注意！！
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
        title: '邀请好友活动',
        show: true,
        info: '邀请排行',
        url: url.requestUrl+'/hlq8/#/MyInvitation',
        user:[]
      }
    },
    methods:{
      goToShowOrder(){
        location.href=url.requestUrl+"/hlquan/html/MyOrderShow.aspx";
      },
      goToShopping(){
        location.href=url.requestUrl+"/hlquan/html/MyOrder.aspx";
      },
      goToInvite(){
        location.href=url.requestUrl+"/hlquan/html/Invite.aspx?uid="+this.user.UId;
      },
      getUserInfo(){
        let self = this;
        self.$http.post(url.allUrl+'/api/MyInfo.ashx?_m=GetUseInfo', {}).then((res) => {
          if (res.data.err_code == 0) {
            self.user = res.data.err_msg;
          }
        }).catch((err) => {

        })
      }
    },
    created:function(){
      this.getUserInfo();
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
  .hr{
    display: inline-block;
    width: 6rem;
    height: 0.05rem;
    margin: 0 0.4rem;
    background-color:#878787;
  }
  .qsd{
    margin-left: 0.2rem;
    color: #bf7afc;
    border-radius: 10px;
    padding: 0 0.5rem;
    display: inline-block;
    background-color:#f1e0ff;
  }
  .banner{
    width: 100%;
    height: 8rem;
    background-size: 100% 100%;
    background-image: url("../assets/images/invitationfriends_02.png");
  }
  .rule-cont h4{
    margin-top:0.8rem;
    margin-bottom: 0.5rem;
  }
  h4 >span>img{
    width: 4rem;
    vertical-align: bottom;
  }
  .wechat{
    display: flex;
    align-items: center;
  }
  .wechat img{
    width: 2.4rem;
    margin-right: 0.5rem;
  }
  .cz{
    padding: 0;
    color: #656565;
  }
  .cz li{
    display: flex;
    margin-top: 0.6rem;
    align-items: center;
  }
  .cz li img{
    margin-right: 0.4rem;
    width: 1rem;
  }
</style>
