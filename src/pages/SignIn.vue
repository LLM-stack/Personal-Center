<template>
  <div>
    <section class="content">
      <l-head :title="title" ></l-head>
      <div class="banner">
        <Lm-Sign :list="dayArr"></Lm-Sign>
      </div>
      <router-link :to="{path:'InvitingFriends'}">
      <div class="banner1">
      </div>
      </router-link>
      <div class="list-block">
        <ul>
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
    </section>
  </div>
</template>

<script type="text/javascript">
  import lHead from '../components/header'
  import LmSign from '../components/LmSign'

  export default {
    components: {
      lHead,
      LmSign
    },
    data () {
      return {
        title: '积分签到',
        dayArr: '',
        errMsg: '',
        dialog: true,
      }
    },
    computed: {
    },
    methods: {
      getSignsForWeek (){
        let self = this;
        self.$http.post(url.allUrl+'/api/USR_SignUpAPI.ashx?_m=GetSignsForWeek', {}).then((res) => {
          if (res.data.err_code == 0) {
            self.dayArr=[1,2,3,4,5,6,7];
            let data=res.data.err_msg;
            for(var i=0;i<data.length;i++){
              self.dayArr[data[i].weekDay-1]=0;
            }
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
      }

    },
    created:function(){
        //this.getSignsForWeek()
    }
  }
</script>

<style scoped>
  .banner{
    width: 100%;
    height: 14rem;
    display: flex;
    color: #fff;
    font-size: 0.75rem;
    padding: 0 1rem;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to bottom, #8187FF 0%,#C27BFF 100%);
  }
  .banner1{
    width: 100%;
    height: 3rem;
    background-size: 100% 100%;
    background-image: url("../assets/images/sign1.jpg") ;
  }
  .list-block{
    margin: 0;
  }
  .mu-raised-button.mu-raised-button-inverse{
    color: #FE5E96;
    font-size: 1rem;
  }
  .demo-step-container{
    margin: 0 auto;
  }
  .demo-step-content{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mu-raised-button{
    background-color: #fff;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
  .mu-step-button .mu-step-label{
    height: 2rem;
    font-size: 0.7rem;
    padding-left: 0.7rem;
    padding-right: 0;
  }
</style>
