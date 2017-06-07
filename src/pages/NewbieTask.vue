<template>
    <div>
      <section class="content">
        <l-head :title="title"></l-head>
        <div class="banner"></div>
        <div class="list-block">
          <ul>
            <li class="item-content item-link">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title"><span class="lm-icon lm-icon-pen lm-margin-r-sm"></span>首次关注</div>
                <div class="item-after lm-text-grey lm-font-sm">已完成</div>
              </div>
              <span class="more" ></span>
            </li>
            <mu-divider/>
            <li class="item-content item-link" @click="goToSafety">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title"><span class="lm-icon lm-icon-redbag lm-margin-r-sm"></span>绑定手机</div>
                <div class="item-after lm-text-grey lm-font-sm">绑定手机领积分</div>
              </div>
              <span class="more" ></span>
            </li>
            <mu-divider/>
            <router-link :to="{path: 'SignIn'}">
            <li class="item-content item-link" >
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner" >
                <div class="item-title"><span class="lm-icon lm-icon-people lm-margin-r-sm"></span>首次签到</div>
                <div class="item-after lm-text-grey lm-font-sm">领5积分</div>
              </div>
              <span class="more" ></span>
            </li>
            <mu-divider/>
            </router-link>
            <li class="item-content item-link" @click="goToInvite">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title"><span class="lm-icon lm-icon-date lm-margin-r-sm"></span>首次邀请</div>
                <div class="item-after lm-text-grey lm-font-sm">狂赚75积分</div>
              </div>
              <span class="more" ></span>
            </li>
            <mu-divider/>
            <li class="item-content item-link" @click="goToShopping">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title"><span class="lm-icon lm-icon-zhuan lm-margin-r-sm"></span>首次购买</div>
                <div class="item-after lm-text-grey lm-font-sm">额外多送50积分</div>
              </div>
              <span class="more" ></span>
            </li>
            <mu-divider/>
            <li class="item-content item-link" @click="goToShowOrder">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title"><span class="lm-icon lm-icon-book lm-margin-r-sm"></span>首次晒单</div>
                <div class="item-after lm-text-grey lm-font-sm">晒了就有</div>
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
            title: '新手任务赚积分',
          }
        },
        methods:{
          goToSignRanking(){
            location.href=url.requestUrl+"/hlquan/html/SignRanking.aspx"
          },
          goToInvite(){
            location.href=url.requestUrl+"/hlquan/html/MyInvite.aspx"
          },
          goToShopping(){
          location.href=url.requestUrl;
          },
          goToShowOrder(){
              location.href=url.requestUrl+"/hlquan/html/MyOrderShow.aspx";
          },
          goToSafety(){
              location.href=url.requestUrl+"/hlquan/html/user/security.aspx"
          }
        }
    }
</script>

<style scoped>
   .banner{
    width: 100%;
    height: 5.6rem;
    background-size: 100% 100%;
    background-image: url("../assets/images/newbietask1.png") ;
  }
  .list-block{
    margin-top: 0.5rem;
  }
</style>
