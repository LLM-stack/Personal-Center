<template>
  <div>
    <l-head :title="title"></l-head>
  <mu-dialog :open="dialog" :title="muTitile" @close="close">
    {{errMsg}}
    <mu-flat-button slot="actions" @click="close" primary label="取消"/>
    <mu-flat-button slot="actions" primary @click="close" label="确定"/>
  </mu-dialog>
    <div class="alipay">
      <div><img src="../../assets/images/alipay.png" alt=""><span class="lm-margin-l">到支付宝</span></div>
      <div class="lm-text-yellow" v-if="isBind">{{user.AliPayId}}</div>
      <div class="lm-text-yellow" v-else @click="goToBindAliPay">去绑定</div>
    </div>
    <div class="money-num">
      <div>提现金额</div>
      <strong>￥</strong>
      <mu-text-field :label="tips" type="number" v-model="value" @focus="toggleBtn"  labelFloat/>
      <span class="lm-text-purple" @click="goAll">全部提现</span>
    </div>
    <div class="btn-active" :class="{btn:!btnActive && value !=='' &&isBind}" @click.once="getAliPayCash">确认提现</div>
  </div>
</template>

<script type="text/javascript">
  import lHead from '../../components/header'
  export default {
    components: {
      lHead
    },
    data () {
      return {
        title: '提现',
        tips: '',
        money:0,
        btnActive: true,
        value: '',
        user:'',
        errMsg:'',
        dialog: false,
        isBind: true,
        muTitile:''
      }
    },
    methods: {
      toggleBtn () {
        this.btnActive = false
      },
      getUserInfo (){
        let self = this;
        self.$http.post(url.allUrl+'/api/MyInfo.ashx?_m=GetUseInfo', {}).then((res) => {
          if (res.data.err_code == 0) {
            if(res.data.err_msg.AliPayId=="-"){
              self.isBind=false;
            }
            self.money=res.data.err_msg.CurrMoney/100;
            self.tips='可提现'+self.money+'元'
            self.user = res.data.err_msg;
          } else {
            self.errMsg = res.data.err_msg;
            self.dialog = true;
          }
        }).catch((err) => {
          self.errMsg = "请求错误，请重试";
          self.dialog = true;
        })
      },
      goAll(){
        this.value=this.money;
        this.btnActive=false;
      },
      goToBindAliPay(){
        location.href=url.requestUrl+"/hlquan/html/user/AppendInfo.aspx";
      },
      getAliPayCash(){
        let self = this;
        self.$http.get(url.allUrl+'/api/BUS_CashAPI.ashx?_m=ApplyCash&amount='+self.value, {}).then((res) => {
          if (res.data.err_code == 0) {
            self.errMsg = res.data.err_msg;
            self.dialog = true;
          } else {
            self.errMsg = res.data.err_msg;
            self.dialog = true;
          }
        }).catch((err) => {
          self.errMsg = "请求错误，请重试";
          self.dialog = true;
        })
      },
      open () {
      this.dialog = true
      },
      close () {
        this.dialog = false
      }
    },created:function(){
      this.getUserInfo();
    }
  }
</script>

<style scoped>
  .mu-text-field{
    width: 65%;
  }
  .alipay{
    padding: 0.6rem 0.6rem;
    font-size: 0.75rem;
    border: 1px solid #F6F6F6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
  }
  .alipay>div:first-child{
    display: flex;
    align-items: center;
  }
  .alipay img{
    width: 1rem;
  }
  .money-num{
    padding: 1rem 1rem 0;
    background-color: #fff;
  }
  .money-num strong{
    font-size: 1.4rem;
  }
  .btn-active{
    color: #B0B0B0;
    width: 85%;
    border-radius: 0.2rem;
    padding: 0.4rem 0;
    background-color: #D5D4D4;
    margin:1.6rem auto;
    text-align: center;
  }
  .btn{
    color: #fff;
    background-color: #bf7afc;
  }
</style>
