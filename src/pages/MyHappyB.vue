<template>

    <section class="content">
     <l-head :title="title" :show="show" :info="info"  :url="url"></l-head>
      <mu-dialog :open="dialog" :title="muTitile" @close="close">
      {{errMsg}}
      <mu-flat-button slot="actions" @click="close" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="close" label="确定"/>
    </mu-dialog>
      <div class="alipay">
        <div><img src="../assets/images/alipay.png" alt=""><span class="lm-margin-l">支付宝账号</span></div>
        <div class="lm-text-yellow" @click="goToBindAliPay">去绑定></div>
      </div>
      <div class="banner">
        <div class="canuse">
          <div>可用欢乐币</div>
          <div>{{ happyB }} <span class="lm-font-defult">( {{ happyB/100 }}元 )</span></div>
        </div>
        <router-link :to="{path: 'childrenPages/GetCash'}"><div class="pay">提现</div></router-link>
      </div>
      <div class="list-block">
        <ul>
          <li class="item-content">
            <div class="item-inner">
              <div class="item-title">
                <span class="lm-icon lm-icon-happyB lm-margin-r-sm"></span>
                欢乐币收支明细
              </div>
              <div class=" lm-text-grey">收入和提现记录</div>
            </div>
          </li>
          <mu-divider/>
          <li class="item-content">
            <div class="item-inner lm-jc-center">
              <div class="tabs">
                <span :class="{tabsActive:isActive}" @click="tabl">收入记录</span>
                <span :class="{tabsActive:!isActive}" @click="tabr">提现记录</span>
              </div>
            </div>
          </li>
        </ul>
     </div>
        <mu-list>
          <template v-for="item in cashList">
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">
                  {{item.Marks}}
                  <div class="item-title-date">{{item.CreateTime | changeTime }}</div>
                </div>
                <div class="item-after lm-text-purple"><span>{{changeX}}</span>{{item.PayMoney}}</div>
              </div>
            </div>
            <mu-divider/>
          </template>
        </mu-list>
      <div :class="{fuckdisplay:!test}" class="isload">没有更多内容了</div>
      <mu-infinite-scroll :scroller="scroller" :loading="loading" :class="{fuckdisplay:test}" :loadingText='loadingText' @load="loadMore"/>
        <div class="nothing" v-if="cashList.length == 0">
          <img src="../assets/images/nomoeny.png">
          <span class="lm-text-grey">暂时还没有收入记录</span>
        </div>
     </section>
</template>

<script type="text/javascript">
  import lHead from '../components/header'

  export default {
    components: {
      lHead
    },
    data () {
      return {
        title: '我的欢乐币',
        show: true,
        info: '欢乐币说明',
        url: url.requestUrl+'/hlquan/html/HelpCenters.aspx',// 去往帮助中心的
        isActive: true,
        page:1,
        cType:1,
        happyB:0,
        cashList:[],
        x: '+',
        loading: false,
        loadingText: '正在加载...',
        scroller: null,
        errMsg:'欢乐币系统正在升级中',
        dialog: true,//TODO:当默认的dialog改成fasle时，去掉返回
        muTitile:'',
        test: false
      }
    },
    computed: {
        changeX:function(){
              return this.cType==0?'-':'+';
          },

    },
    methods: {
      loadMore () {
            this.loading = true
            this.page=this.page+1
            this.getHappyB()
      },
      getHappyB () {
        let self = this;
        self.$http.get(url.allUrl+'/api/BUS_CashAPI.ashx?_m=GetCashDetail&page='+self.page+'&cType='+self.cType, {}).then((res) => {
          if (res.data.err_code == 0 ) {
            self.happyB = res.data.err_msg.currentMoney
            let item=res.data.err_msg.cashList;
            if(self.loading){
              //self.cashList=self.cashList.concat(item)
              if(item==null|| item==""){
                self.loading = false
              }else{
                if(item.length==10){
                  for(var i=0;i<item.length;i++){
                    self.cashList.push(item);
                  }
                  self.loading=false;
                }
                else{
                  self.test = true
                  self.loadingText='已经加载到底部啦！'
                }
              }
            }else{
              self.cashList=item
            }
          } else {
            self.errMsg = res.data.err_msg
            self.dialog = true
          }
        }).catch((err) => {
            self.errMsg = "请求错误，请重试"
            self.dialog = true
        })
      },
      tabl () {
        this.isActive = true,
        this.cType=1,
        this.page=1;
        this.getHappyB ()
      },
      tabr () {
        this.isActive = false,
        this.cType=0,
        this.page=1;
        this.getHappyB ()
      },
      goToBindAliPay(){
        location.href=url.requestUrl+"/hlquan/html/user/AppendInfo.aspx";
      },
      open () {
        this.dialog = true
      },
      close () {
        this.dialog = false
        history.back(-1);//TODO:当默认的dialog改成fasle时，去掉返回
      }
    },
    filters:{
      //格局化日期：yyyy-MM-dd
      changeTime:function(value){
        var temp = value + "";
        var dt = new Date(parseInt(temp.replace("/Date(", "").replace(")/", ""), 10));
         let myyear = dt.getFullYear();
          let mymonth = dt.getMonth() + 1;
          let myweekday = dt.getDate();
          let hour = dt.getHours();
          let minute = dt.getMinutes();
          let second = dt.getSeconds();
          if (mymonth < 10) {
            mymonth = "0" + mymonth;
          }
          if (myweekday < 10) {
            myweekday = "0" + myweekday;
          }
          if (hour < 10) {
            hour = "0" + hour;
          }
          if (minute < 10) {
            minute = "0" + minute;
          }
          if (second < 10) {
            second = "0" + second;
          }
          return (myyear + "-" + mymonth + "-" + myweekday + " " + hour + ":" + minute + ":" + second);
      }
    },
    created:function(){
      this.scroller = this.$el
      this.getHappyB()
    }
  }

</script>

<style scoped>
.demo-infinite-container{
  width: 256px;
  height: 300px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #d9d9d9;
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
  .banner{
    width: 100%;
    height: 5.4rem;
    display: flex;
    color: #fff;
    font-size: 0.75rem;
    padding: 0 1rem;
    align-items: center;
    justify-content: space-between;
    background-size: 100% 100%;
    background-image: url("../assets/images/point1.png") ;
  }
  .banner .canuse{
    text-align: center;
  }
  .banner .canuse div:last-child{
    font-size: 1.8rem;
    font-weight: 500;
  }
  .banner .pay{
    color: #fff;
    padding: 0.1rem 0.7rem;
    border-radius: 1rem;
    background-color: #FF911C;
  }
  .tabsActive{
    color: #fff;
    background-color: #A87DFA;
  }
  .list-block{
    margin:0;
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
    border-radius: 0.8rem;
    border: 1px solid #A87DFA;
  }
  .item-inner .tabs span{
    width: 50%;
    padding: 0.1rem 0;
    text-align: center;
    display: inline-block;
  }
  .item-inner .tabs span+span{
    border-left:1px solid #A87DFA;
  }
  .item-inner .tabs span:first-child{
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
  }
  .item-inner .tabs span:last-child{
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
  }
  .mu-list {
    padding: 0;
    background-color: #fff;
  }
  .mu-infinite-scroll{
    padding-bottom: 0;
  }
  .list-block {
    margin: 0;
    background-color: #fff;
  }

  .item-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.4rem 0.8rem;
  }

  .item-after {
    font-size: 0.8rem;
    font-weight: bolder;
  }

  .item-title {
    font-size: 0.8rem;
  }

  .item-title-date {
    font-size: 0.7rem;
    color: #999;
  }
  .nothing{
    width: 100%;
    height: 11.55rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff ;
  }
  .nothing img{
    width: 3rem;
    height: 3rem;
  }
  .isload{
    font-size: 0.75rem;
    padding: 0.3rem 0;
    text-align: center;
  }
  .fuckdisplay {
    display: none!important;
  }
</style>
