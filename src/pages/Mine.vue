<template>
  <div>

    <div class="content">
      <div class="mine-head">
        <div class="avatar"><img :src=user.HeaderImg alt=""></div>
        <div class="avatar-info">
          <div>{{user.Nickname}} <span :class="vip" class="lm-icon lm-icon-vip0 lm-margin-l-xs"></span></div>
          <router-link :to="{path: 'VipCenter'}"><div class="vipup"></div></router-link>
        </div>
        <div class="vip-explain" @click="open">
          <span>VIP说明</span>
        </div>
      </div>
      <div class="points">
        <div>
          <router-link :to="{path: 'MyHappyB'}">
          <img src="../assets/images/hlB.png">
          <div class="lm-font-sm lm-margin-l">
            <span>欢乐币</span><br>
            <span class="lm-text-yellow">{{user.CurrMoney}}</span><span class="lm-text-grey">({{user.CurrMoney / 100}}元)</span>
          </div>
         </router-link>
        </div>
        <div>
          <router-link :to="{path: 'MyPoint'}">
          <img src="../assets/images/jf_03.png">
          <div class="lm-font-sm lm-margin-l">
            <span>积分</span><br>
            <span class="lm-text-yellow">{{user.CurrIntegrate}}</span><span
            class="lm-text-grey">({{user.CurrIntegrate / 100}}元)</span>
          </div>
          </router-link>
        </div>

      </div>
      <router-link :to="{path: 'InvitingFriends'}">
      <div class="banner"></div>
      </router-link>
      <div class="list-block">
        <ul>
          <router-link :to="{path: 'SignIn'}">
            <li class="item-content item-link" >
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title"><span class="lm-icon lm-icon-pen lm-margin-r-sm"></span>签到送积分</div>
                <div class="item-after lm-text-grey lm-font-sm">每日签到赚积分</div>
              </div>
              <span class="more" ></span>
            </li>
            <mu-divider/>
          </router-link>
          <router-link :to="{path: 'Shoppingjf'}">
            <li class="item-content item-link" >
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title"><span class="lm-icon lm-icon-redbag lm-margin-r-sm"></span>购物下单狂送积分
                </div>
                <div class="item-after lm-text-grey lm-font-sm">你购我送</div>
              </div>
              <span class="more" ></span>
            </li>
            <mu-divider/>
          </router-link>
          <router-link :to="{path: 'Friendjf'}">
            <li class="item-content item-link">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title"><span class="lm-icon lm-icon-people lm-margin-r-sm"></span>邀请好友积分
                </div>
                <div class="item-after lm-text-grey lm-font-sm">邀请就送</div>
              </div>
              <span class="more" ></span>
            </li>
            <mu-divider/>
          </router-link>
          <router-link :to="{path: 'NewbieTask'}">
            <li class="item-content item-link">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title"><span class="lm-icon lm-icon-date lm-margin-r-sm"></span>新手任务赚积分
                </div>
                <div class="item-after lm-text-grey lm-font-sm">新手任务积分多</div>
              </div>
              <span class="more" ></span>
            </li>
            <mu-divider/>
          </router-link>
          <router-link :to="{path: 'DailyTasks'}">
            <li class="item-content item-link">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title"><span class="lm-icon lm-icon-zhuan lm-margin-r-sm"></span>每日任务赚积分</div>
                <div class="item-after lm-text-grey lm-font-sm">狂赚积分</div>
              </div>
              <span class="more" ></span>
            </li>
            <mu-divider/>
          </router-link>
          <router-link :to="{path: 'DisplayOrder'}">
            <li class="item-content item-link" >
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title"><span class="lm-icon lm-icon-book lm-margin-r-sm"></span>晒单赚积分</div>
                <div class="item-after lm-text-grey lm-font-sm">晒了就送</div>
              </div>
              <span class="more" ></span>
            </li>
          </router-link>
        </ul>
      </div>
      <div class="content-block-title">排行榜</div>
      <div class="rank-box list-block">
        <div class="rank-box-list" @click="goToSignRanking">
          <div><img src="../assets/images/qdph.png" alt=""></div>
          <span>签到排行</span>
        </div>
        <div class="rank-box-list" @click="goToShowOrder">
          <div><img src="../assets/images/sdgc.png" alt=""></div>
          <span>晒单广场</span>
        </div>
        <div class="rank-box-list">
          <router-link :to="{path: 'MyInvitation'}">
          <div><img src="../assets/images/wdyq.png" alt=""></div>
          <span>我的邀请</span>
          </router-link>
        </div>
      </div>
      <div class="list-block">
        <ul>
          <li class="item-content item-link" @click="goToShopping">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title">我的订单</div>
            </div>
            <span class="more" ></span>
          </li>
          <mu-divider/>
          <li class="item-content item-link" @click="goToMyCollect">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title">我的收藏</div>
            </div>
            <span class="more" ></span>
          </li>
          <mu-divider/>
          <li class="item-content item-link" @click="goToExchange">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title">我的兑换</div>
            </div>
            <span class="more" ></span>
          </li>
        </ul>
      </div>
      <div class="list-block">
        <ul>
          <li class="item-content item-link" @click="goToSafety">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title">账户设置</div>
            </div>
            <span class="more" ></span>
          </li>
          <mu-divider/>
          <li class="item-content item-link" @click="goToHelpConters">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title">帮助与反馈</div>
            </div>
            <span class="more" ></span>
          </li>
        </ul>
      </div>

    </div>
    <mu-dialog :open="dialog" @close="close" >
      <div class="mineDialog">
        <div>
          1、升级VIP容易吗？
          很容易的，大部分用户都会升级获得更多的奖励，升级VIP所需要的2个任务中本身也能获取大量的积分，除了在欢乐劵商城购买产品外，你在淘宝天猫看到的好商品也可以通过欢乐劵商城搜索商品标题查找，如若查找不到可联系客服帮忙，从而获得更多的积分奖励，不见完成任务，还可以轻松获得积分，升级VIP是不是非常简单呢！
          （ps：VIP用户升级需在商城下单之后确认收货，并在<span @click="goToShopping" class="lm-text-red">【我的订单】</span>中进行订单找回，方可成功升级vip）
        </div>
        <div>
          2、VIP用户每天签到能获得多少积分？
        </div>
          <p>
            1.普通用户签到可获得1-5积分，积分抽奖需要扣对应的积分。
          </p>
          <p>2.VIP1用户签到可获得2-7积分，每天免费1次抽奖机会。</p>
          <p>3.VIP2用户签到可获得3-9积分，每天免费2次抽奖机会。</p>
          <p>备注：除了这些以外，欢乐劵还提供了一系列的获得更多积分的活动哦，不同VIP等级积分获得的比例都不一样哦！<span @click="goToMyOrder" class="lm-text-red">~找回订单</span></p>

      </div>
      <mu-raised-button slot="actions" secondary fullWidth @click="close" label="确定"/>
    </mu-dialog>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        user: [],
        vip: '',
        errMsg: '',
        dialog: false,
        title: ''
      }
    },
    methods: {
      getUserInfo (){
        let self = this;
        self.$http.post(url.allUrl+'/api/MyInfo.ashx?_m=GetUseInfo', {}).then((res) => {
          if (res.data.err_code == 0) {
            self.user = res.data.err_msg;
            self.vip = 'lm-icon-vip' + self.user.MemberLevel-1;
          } else {
            self.errMsg = res.data.err_msg;
            self.dialog = true;
          }
        }).catch((err) => {
          self.errMsg = "请求错误，请重试";
          self.dialog = true;
        })
      },
      open()
      {
        this.dialog = true
      },
      close()
      {
        this.dialog = false
      },
      goToShopping(){
          location.href=url.requestUrl+"/hlquan/html/MyOrder.aspx";
      },
      goToShowOrder(){
          location.href=url.requestUrl+"/hlquan/html/MyOrderShow.aspx";
      },
      goToMyCollect(){
          location.href=url.requestUrl+"/hlquan/html/myCollect.aspx";
      },
      goToExchange(){
          location.href=url.requestUrl+"/hlquan/html/pointsRecord.aspx";
      },
      goToHelpConters(){
          location.href=url.requestUrl+"/hlquan/html/HelpCenters.aspx";
      },
      goToSafety(){
          location.href=url.requestUrl+"/hlquan/html/user/security.aspx"
      },
      goToSignRanking(){
        location.href=url.requestUrl+"/hlquan/html/SignRanking.aspx"
      },
      goToInvite(){
        location.href=url.requestUrl+"/hlquan/html/MyInvite.aspx"
      },
      goToMyOrder(){
        location.href=url.requestUrl+"/hlquan/html/MyOrder.aspx";
      }
    },
    created: function () {
      this.getUserInfo()
    }
  }
</script>

<style scoped>

  .mine-head {
    width: 100%;
    height: 7rem;
    color: #fff;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    background-size: 100% 100%;
    background-image: url("../assets/images/index1.png");
  }

  .mine-head .avatar {
    width: 3rem;
    height: 3rem;
    border: 2px solid #F1A2FF;
    -webkit-box-shadow: 0 0 4px #B36FE0;
    -moz-box-shadow: 0 0 4px #B36FE0;
    box-shadow: 0 0 4px #B36FE0;
    border-radius: 50%;
  }

  .mine-head .avatar img {
    width: 100%;
    border-radius: 50%;
  }

  .mine-head .avatar-info {
    padding-left: 0.6rem;
  }

  .mine-head .avatar-info > div > span {
    width: 0.9rem;
    height: 0.9rem;
  }

  .mine-head .avatar-info .vipup {
    margin-top: 0.2rem;
    width: 4rem;
    height: 0.9rem;
    background-size: 100% 100%;
    background-image: url("../assets/images/index2.png");
  }
  .mine-head .vip-explain{
    font-size: 0.6rem;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }
  .mine-head .vip-explain> span{
    display: inline-block;
    width: 3.4rem;
    height: 0.8rem;
    padding-left: 0.8rem;
    line-height: 0.8rem;
    background-size: 0.8rem 0.8rem;
    background-repeat: no-repeat;
    background-position: left;
    background-image: url("../assets/images/feedback.png");
  }

  .points {
    display: flex;
    background-color: #fff;
    justify-content: flex-start;
    border-bottom: 1px solid #ccc;
  }
  .points > div {
    display: flex;
    align-items: center;
    width: 50%;
    height: 2.6rem;
  }
  .points > div >a{
    width: 100%;
    height: 100%;
    padding: 0 0.6rem;
    display: flex;
    align-items: center;
  }
  .points div > a img {
    width: 2rem;
  }

  .points  div:first-child {
    border-right: 1px solid #ccc;
  }

  .banner {
    width: 100%;
    height: 4.3rem;
    margin-top: 0.25rem;
    background-size: 100% 100%;
    background-image: url("../assets/images/index3.png");
  }
  .list-block {
    margin: 0.3rem 0;
  }

  /*.list-block .item-content:not(:first-child){*/
  /**/
  /*}*/
  .item-link a {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .rank-box {
    display: flex;
    height: 6rem;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
  }

  .rank-box .rank-box-list {
    font-size: 0.65rem;
    width: 2.6rem;
  }

  .rank-box .rank-box-list img {
    width: 100%;
  }
  .mineDialog {
    font-size: 0.65rem;
    margin: -0.4rem;
    height: 18rem;
    overflow: auto;
  }
  .mineDialog div:first-child{
    text-indent: 1.2rem;
    margin-bottom: 0.5rem;
  }
  .mineDialog p{
    margin: 0.25rem 0;
  }
  .mu-dialog{
    height: 50%!important;
  }

</style>

