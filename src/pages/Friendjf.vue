<template>
  <div>
    <section class="content">
      <l-head :title="title"></l-head>
      <mu-dialog :open="dialog" :title="muTitile" @close="close">
    {{errMsg}}
    <mu-flat-button slot="actions" @click="close" primary label="取消"/>
    <mu-flat-button slot="actions" primary @click="close" label="确定"/>
  </mu-dialog>
      <div class="banner" @click="goToHelper"></div>
      <div class="f-point">
        <div class="f-point-one"><div>已获得积分：<span class="red">{{sign.sumScore}}</span></div></div>
        <div class="f-point-two">
          <div>
            <!--<div>已邀请的好友：<span class="red">10</span>位</div>--><div>已成功邀请好友：<span class="red">{{sign.userCount}}</span></div>
          </div>
          <div class="lm-margin-t-sm">邀请好友获得积分：<span class="red">{{sign.inviteScore}}</span></div>
        </div>
      </div>
      <div class="f-point">
        <div class="f-point-three"><div>邀请方式</div>
        <router-link :to="{path: 'MyInvitation'}">
        <div><img src="../assets/images/friend_05.jpg" alt=""></div>
        </router-link>
        </div>
        <div class="f-point-four">
          <div>
            <div class="lm-text-grey">可通过如下方式邀请好友：</div>
            <div @click="goToInvite">
              <img src="../assets/images/friend_09.jpg" alt="">
              <div class="lm-text-grey">微信好友</div>
            </div>
          </div>
        </div>
        <div class="f-point-five">
          <div>
            <div><span class="b-yellow">邀请规则</span></div>
            <div>
              <div class="lm-margin-t">邀请好友获得积分奖励</div>
              <div class="lm-text-grey">
                成功邀请一位好友，即可获得<span class="red">10</span>积分，被邀请者可获得<span class="red">30</span>积分
              </div>
              <!--<div class="lm-margin-t">2、邀请好友功能有5级下线奖励</div>
              <div class="lm-text-grey">
                例：您→邀请→A→邀请→B→邀请→C→邀请→D→邀请E，其中
                成功邀请A获得30积分，成功邀请B获得8积分，成功邀请C获得4
                积分，成功邀请D获得2积分，成功邀请E获得1积分
              </div>-->
            </div>
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
    data () {
      return {
        title: '邀请好友送积分',
        sign:[],
        muTitile:'',
        errMsg:'',
        dialog:false
      }
    },
    methods:{
          getSignInfo(){
                let self=this;
                self.$http.get(url.allUrl+'/api/USR_UserAPI.ashx?_m=CountITGDetail', {}).then((res) => {
                if (res.data.err_code == 0) {
                  self.sign = res.data.err_msg;
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
          },
          goToInvite(){
            location.href=url.requestUrl+"/hlquan/html/Invite.aspx?uid="+this.sign.uid;
          },
          goToHelper(){
            location.href=url.requestUrl+"/hlquan/html/HelpCenters.aspx"
          }
    },
    created:function(){
      this.getSignInfo();
    }
  }
</script>

<style scoped>
  .red{
    color: #F73638;
  }
  .b-yellow{
    display: inline-block;
    border-radius: 10px;
    padding: 0 0.4rem;
    color: #ffffff;
    background-color: #FFBC01;
  }
  .banner{
    width: 100%;
    height: 5.4rem;
    background-size: 100% 100%;
    background-image: url("../assets/images/friend_02.jpg") ;
  }
  .f-point{
    font-size: 0.75rem;
    margin-bottom: 0.4rem;
    background-color: #fff;
  }
  .f-point .f-point-one{
    padding:0.2rem  0.6rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .f-point .f-point-two{
    padding:0.2rem  0.6rem;
  }
  .f-point .f-point-two >div:first-child{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .f-point .f-point-three{
    padding:0.2rem  0.6rem;
    display: flex;
    border-bottom: 1px solid #eee;
    align-items: center;
    justify-content: space-between;
  }
  .f-point .f-point-three> div:first-child{
    padding-left: 0.5rem;
    border-left: 3px solid #FFBC01;
  }
  .f-point .f-point-three div:last-child{
    width: 5.2rem;
    height: 0.9rem;
  }
  .f-point .f-point-three div:last-child img{
    width: 100%;
  }
  .f-point .f-point-four{
    padding:0.2rem  0.6rem;
    border-bottom: 1px solid #eee;
  }
  .f-point .f-point-four img{
    width: 2.6rem;
  }
  .f-point .f-point-five{
    padding:1rem  0.6rem;
  }
</style>
