<template>
  <div>
    <section class="content">
      <l-head :title="title" :show="show" :info="info" :url="url"></l-head>
      <div class="banner">
        <div class="canuse">
          <div>已成功邀请 <span class="lm-text-yellow">{{sign.userCount}}</span> 人，累计获得 <span class="lm-text-yellow">{{sign.inviteScore}}</span> 积分</div>
          <div @click="goToInvite">邀请好友</div>
        </div>
      </div>
      <div class="content-block-title">我的排行 &nbsp;&nbsp;{{myRow}}</div>
      <div class="list-block">
        <ul>
          <li class="item-content">
            <div class="item-inner lm-jc-center">
              <div class="tabs lm-margin-t lm-margin-b">
                <span :class="{tabsActive:isActive}" @click="tabl">邀请积分排行</span>
                <span :class="{tabsActive:!isActive}" @click="tabr">次数排行</span>
              </div>
            </div>
          </li>
          <li class="row no-gutter rank-list">
            <span class="col-20 rank-number">排行</span>
            <span class="col-60 user">用户</span>
            <span class="col-20 user-point">积分</span>
          </li>
          <li class="row no-gutter rank-list" v-for="item in inviteList">
           <span class="col-20 rank-number">{{item.Row}}</span>
            <span class="col-60 user"><img :src=item.HeaderImg alt="">{{item.Nickname}}</span>
            <span class="col-20 user-point">{{item.Count}}分</span>
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
    data () {
      return {
        title: '我的邀请',
        show: true,
        info: '邀请记录',
        url: url.requestUrl+'/hlquan/html/InviteRecord.aspx',
        isActive: true,
        inviteList:[],
        myRow:0,
        sign:[],
      }
    },
    methods: {
      tabl () {
        this.isActive = true,
        this.getInviteList();
      },
      tabr () {
        this.isActive = false,
        this.getWeekInvite();
      },
      getInviteList(){
        let self = this;
        self.$http.post(url.allUrl+'/api/MyInvite.ashx?_m=GetIntegralRanking', {}).then((res) => {
          if (res.data.err_code == 0) {
            self.inviteList = res.data.err_msg;
            for(var i=0; i<self.inviteList.length;i++){
              let item=self.inviteList[i];
              if(item.UId==self.sign.uid){
                self.myRow=item.Row;
              }
            }
          } else {
            self.errMsg =  res.data.err_msg;
            self.dialog = true;
          }
        }).catch((err) => {
          self.errMsg = "请求错误，请重试";
          self.dialog = true;
        })
      },
      getWeekInvite(){
        let self = this;
        self.$http.post(url.allUrl+'/api/MyInvite.ashx?_m=GetNumRanking', {}).then((res) => {
          if (res.data.err_code == 0) {
            self.inviteList = res.data.err_msg;

          } else {
            self.errMsg =  res.data.err_msg;
            self.dialog = true;
          }
        }).catch((err) => {
          self.errMsg = "请求错误，请重试";
          self.dialog = true;
        })
      },
      getSignInfo(){
         let self=this;
         self.$http.get(url.allUrl+'/api/USR_UserAPI.ashx?_m=CountITGDetail', {}).then((res) => {
            if (res.data.err_code == 0) {
                  self.sign = res.data.err_msg;
            } else {
                self.errMsg =  res.data.err_msg;
                self.dialog = true;
            }
          }).catch((err) => {
            self.errMsg = "请求错误，请重试";
            self.dialog = true;
          })
       },
       goToInvite(){
        location.href=url.requestUrl+"/hlquan/html/Invite.aspx?uid="+this.sign.uid;
      },
    },
    created:function(){
      this.getInviteList();
      this.getSignInfo();
    }
  }
</script>

<style scoped>
  .content-block-title{
    margin-top: 0.4rem;
  }
  .banner{
    width: 100%;
    height: 6rem;
    display: flex;
    color: #fff;
    font-size: 0.75rem;
    padding: 0 1rem;
    align-items: center;
    justify-content: space-between;
    background-size: 100% 100%;
    background-image: url("../assets/images/invitation1.png") ;
  }
  .banner .canuse{
    padding-top: 1.8rem;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .banner .canuse div:first-child{
    padding: 0.2rem 0;
    background-size: 100% 100%;
    background-image: url("../assets/images/invitation2.png") ;
  }
  .banner .canuse div:last-child{
    width: 6.6rem;
    margin: 0.3rem auto 0;
    color: #DE26FF;
    padding: 0.1rem 0;
    border-radius: 0.8rem;
    background-color: #ffffff;
    border: 2px solid #DE26FF;
  }
  .list-block{
    margin:0.4rem 0;
  }
  .item-inner{
    padding-left: 0.8rem;
  }
  .item-title{
    font-size: 0.8rem;
  }
  .item-inner .tabs{
    display: flex;
    align-items: center;
    width: 80%;
    color: #DB21FF;
    border-radius: 0.2rem;
    border: 1px solid #EDD7FF;
  }
  .item-inner .tabs span{
    width: 50%;
    padding: 0.1rem 0;
    text-align: center;
    display: inline-block;
  }
  .item-inner .tabs span+span{
    border-left:1px solid #EDD7FF;
  }
  .item-inner .tabs span:first-child{
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
  }
  .item-inner .tabs span:last-child{
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
  }
  .tabsActive{
    background-color: #EDD7FF;
  }
  .rank-list{
    border-bottom: 1px solid #F3F3F3;
    padding: 0.8rem 0;
  }
  .rank-list span{
    text-align: center;
  }
  .rank-list .user{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .rank-list .user img{
    margin-right: 0.4rem;
    width: 1.8rem;
  }
</style>
