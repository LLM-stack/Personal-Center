<template>
  <div>
    <section class="content">
      <l-head :title="title"></l-head>
      <mu-dialog :open="dialog" :title="muTitile" @close="close">
      {{errMsg}}
      <mu-flat-button slot="actions" @click="close" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="close" label="确定"/>
    </mu-dialog>
      <div class="banner">
        <div class="div1">
          <div class="mine-head">
            <div class="avatar"><img
              :src=user.HeaderImg
              alt=""></div>
            <div class="avatar-info">
              <div>{{user.Nickname}} <span :class="vip" class="lm-icon lm-icon-vip0 lm-margin-l-xs"></span></div>
              <div class="lm-margin-t-xs">可用积分：{{ user.CurrIntegrate }}</div>
            </div>
          </div>
        </div>
        <div class="div2">
          <div class="exp-body">
            <div class="exp" :class="{load:(user.MemberLevel-1 == 1)}"></div>
            <div class="exp" :class="{load:(user.MemberLevel-1 == 2)}"></div>
          </div>
          <div class="exp-rank"><span>V0</span><span>V1</span><span>V2</span></div>
        </div>
        <div class="div3">
          <span>当前等级：V{{user.MemberLevel-1}}</span>
         <span v-if="user.MemberLevel-1>=2">您是最高级了</span>
          <span v-else>距离V{{user.MemberLevel}}还要购物{{instantBuy}}次+邀请好友{{instantInvit}}次</span>
        </div>
      </div>
      <div class="section1 lm-margin-t">
        <table>
          <tr>
            <th>等级福利</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>等级</td>
            <td>签到积分（1-7天）</td>
            <td>晒单积分</td>
            <td>免费抽奖</td>
          </tr>
          <tr class="font-grey">
            <td>V0</td>
            <td>1、2、3、4、5、6、7</td>
            <td>无额外赠送</td>
            <td>0次</td>
          </tr>
          <tr class="font-grey">
            <td>V1</td>
            <td>2、3、4、5、6、7、8</td>
            <td>额外赠送1%</td>
            <td>1次</td>
          </tr>
          <tr class="font-grey">
            <td>V2</td>
            <td>3、4、5、6、7、8、9</td>
            <td>额外赠送2%</td>
            <td>2次</td>
          </tr>
        </table>
      </div>
      <div class="section1 lm-margin-t">
        <table>
          <tr>
            <th>会员升级</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>会员等级</td>
            <td>升级条件</td>
            <td>有限期及降级规则</td>
          </tr>
          <tr class="font-grey">
            <td>V0</td>
            <td>注册用户</td>
            <td>永久不降级</td>
          </tr>
          <tr class="font-grey">
            <td>V1</td>
            <td>成功购物>1次，成
              功邀请>1位好友</td>
            <td>永久不降级</td>
          </tr>
          <tr class="font-grey">
            <td>V2</td>
            <td>成功购物>5次，成
              功邀请>2位好友</td>
            <td>有效期30天。成为V2会员后
              30天内购物<5次降为V1.</td>
          </tr>
        </table>
      </div>
      <div class="section2 lm-margin-t">
        <table>
          <tr>
            <th>升级时间</th>
          </tr>
          <tr></tr>
          <tr class="font-grey">
            <td>升级时间：每天都会统计每个用户是否满足升级条件，满足
              则立即升级。<br/>（ps：VIP用户升级需在商城下单之后确认收货，并在<span class="lm-text-red"  @click="goToMyOrder">【我的订单】</span>中进行订单找回，方可成功升级vip）</td>
          </tr>
        </table>
      </div>
      <div class="section2 lm-margin-t">
        <table>
          <tr>
            <th>降级时间</th>
          </tr>
          <tr></tr>
          <tr class="font-grey">
            <td>降级时间：最近一次升级的会员有效期（30天）后，即第
              31天。</td>
          </tr>
        </table>
      </div>
      <div class="section2 lm-margin-t lm-margin-b">
        <table>
          <tr>
            <th>降级后想升级怎么办？</th>
          </tr>
          <tr></tr>
          <tr class="font-grey">
            <td>降级之后想再提升等级，只需要完成对应VIP等级购买任务
              即可</td>
          </tr>
        </table>
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
    data () {
      return {
        user: '',
        vip: '',
        errMsg: '',
        dialog: false,
        title: '会员中心',
        instantBuy:'',
        instantInvit:'',
        muTitile:''
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
      getCurrentMonth(){
        let self = this;
        self.$http.post(url.allUrl+'/api/USR_UserAPI.ashx?_m=CountMonthInvitorOrder', {}).then((res) => {
          if (res.data.err_code == 0) {
            var msg=res.data.err_msg;
            switch(msg.memberLevel){
              case 1:
                self.instantBuy=(msg.buyCount>=1?0:1-msg.buyCount);
                self.instantInvit=msg.inviteCount>=1?0:1-msg.inviteCount;

                break;
              case 2:
                self.instantBuy=msg.buyCount>=5?0:5-msg.buyCount;
                self.instantInvit=msg.inviteCount>=2?0:2-msg.inviteCount;
                break;
              default:
                break;
            }
          } else {
            self.errMsg = res.data.err_msg;
            self.dialog = true;
          }
        }).catch((err) => {
          self.errMsg = "请求错误，请重试";;
          self.dialog = true;
        });
      },
      open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    },
      goToMyOrder(){
        location.href=url.requestUrl+"/hlquan/html/MyOrder.aspx";
      }
    },
    created: function () {
      this.getUserInfo();
      this.getCurrentMonth();
    }
  }
</script>

<style scoped>
  .font-grey{
    color: #666666;
  }
  .banner {
    width: 100%;
    height: 10rem;
    padding:0.5rem 1rem;
    display: flex;
    align-content:space-around;
    flex-direction:row;
    flex-wrap:wrap;
    color: #fff;
    background: linear-gradient(to bottom, #8187FF 0%, #C27BFF 100%);
  }
  .mine-head {
    width: 100%;
    color: #fff;
    display: flex;
    align-items: center;
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
  .div2 {
    width: 100%;
    display: flex;
    flex-direction:column;
  }
  .div2 .exp-body{
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
  .div2 .exp{
    width: 50%;
    height: 4px;
    background-color: #fff;
  }
  .div2 .exp-rank{
    display: flex;
    justify-content: space-between;
  }
  .div2 .load{
    background-color: #FFD481;
  }
  .div3{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .section1 table{
    width: 100%;
    text-align: center;
    background-color: #fff;
  }
  .section1 table .font-grey+.font-grey{
    border-top: 1px dashed #666;
  }
  .section1 table tr:first-child th:first-child{
    width: 3.6rem;
  }
  .section1 table tr:nth-child(2){
    background-color: #EDD7FF;
  }
  .section1 table th,
  .section1 table td{
    padding: 0.4rem 0.2rem;
  }
  .section2 table{
    width: 100%;
    text-align: left;
    background-color: #fff;
  }
  .section2 table tr:first-child{
    border-bottom: 1px solid #EEEEEE;
  }
  .section2 table th,
  .section2 table td{
    padding: 0.4rem 0.4rem;
  }
</style>
