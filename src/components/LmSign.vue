<template>
  <div class="qd-cont">
      <div class="qd-btn">
        <div @click="clickBtn" :class="{active : onBtn}">
          <span class="qd-font">{{ isQd }}</span>
          <span v-if="onBtn" class="lm-font-sm">+{{ sendScore }}积分</span>
        </div>
      </div>
      <div class="qd-table">
        <span v-for="(item,index) in newList">
          <span class="noQd" v-if="index=item"></span>
          <span v-else class="isQd"></span>
        </span>
        <div class="hr"></div>
      </div>
    <div class="qd-week">
      <span v-for="item in 7">{{ item }}天</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list:''
    },
    data () {
      return {
        btnText: '签到',
        errMsg: '',
        onBtn: false,
        dialog: true,
        sendScore: '',
        signlist:''
      }
    },
    computed: {
      isQd () {
       return this.onBtn == true ? this.btnText='已签到':this.btnText='签到'
      },
      newList(){        
        return this.signlist;
      }
    },
    methods: {
      getTodayInfo(){
        let self = this;
        self.$http.post(url.allUrl+'/api/USR_SignUpAPI.ashx?_m=GetTodaySignInfo', {}).then((res) => {
          if (res.data.err_code == 0) {
          self.sendScore=res.data.err_msg.SendScore
            this.onBtn = true
          } else {
            self.errMsg=res.data.err_msg,
            self.dialog=true
          }
        }).catch((err) => {
            self.errMsg = "请求错误，请重试"
          self.dialog = true
        })
      }, 
      clickBtn () {
        let self = this;
        self.$http.post(url.allUrl+'/api/USR_SignUpAPI.ashx?_m=SignIn', {}).then((res) => {
          if (res.data.err_code == 0) {
            self.sendScore=res.data.err_msg.SendScore
            self.onBtn = true
            self.getSignsForWeek()
            location.href=url.requestUrl+"/hlquan/html/index.aspx?_f=sign"
          } else {
            self.errMsg=res.data.err_msg
            self.dialog=true
          }
        }).catch((err) => {
          self.errMsg = "请求错误，请重试"
          self.dialog = true
        })

      },
      getSignsForWeek (){
        let self = this;
        self.$http.post(url.allUrl+'/api/USR_SignUpAPI.ashx?_m=GetSignsForWeek', {}).then((res) => {
          if (res.data.err_code == 0) { 
            self.signlist=[1,2,3,4,5,6,7];        
            let data=res.data.err_msg
            for(var i=0;i<data.length;i++){
              self.signlist[data[i].weekDay-1]=0;
            }
          } 
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
      this.getTodayInfo()
      this.getSignsForWeek ()
    }
  }
</script>

<style scoped>
  .qd-cont{
    width: 100%;
  }
  .qd-table{
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0.2rem 0;
    position: relative;
  }
  .qd-table .hr{
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 0.1rem;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    background-color: #fff;
  }
  .qd-table span{
    z-index: 3;
    display: inline-block;
    text-align: center;
    line-height: 1.2rem;
    color: #C27BFF;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
  }
  .qd-table .noQd{
    background-color:#fff;
  }
  .qd-table .isQd{
    background-size:cover ;
    background-image: url("../assets/images/yqd.png") ;
  }
  .qd-btn{
    margin-bottom: 2rem;
  }
  .qd-font{
    font-weight: 600;
    font-size: 1rem;
  }
  .qd-btn >div{
    margin: 0 auto;
    display: flex;
    width: 5rem;
    height: 5rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #FE5A94;
    box-shadow:0 0 2px 4px #8165A8;
    background-color: #fff;
    border-radius: 50%;
  }
  .qd-week{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
</style>
