<template>

    <section class="content">
      <l-head :title="title" :show="show" :info="info" :url="url"></l-head>
      <mu-dialog :open="dialog" :title="muTitile" @close="close">
        {{errMsg}}
      <mu-flat-button slot="actions" @click="close" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="close" label="确定"/>
    </mu-dialog>
      <div class="banner">
        <div class="canuse">
          <div>可用积分</div>
          <div>{{user.CurrIntegrate}}</div>
        </div>
        <div class="pay" @click="goToPoint">积分兑换</div>
      </div>
      <div class="content-block-title">积分明细</div>
        <mu-list>
          <template v-for="item in integraList">
            <li class="item-content" >
              <div class="item-inner">
                <div class="item-title">
                  {{item.Description}}
                  <div class="item-title-date">{{item.CreateTime}}</div>
                </div>
                <div class="item-after lm-text-purple"><span>{{item.Status==1?'+':'-'}}</span>{{item.Score}}</div>
              </div>
            </li>
            <mu-divider/>
          </template>
        </mu-list>
      <div :class="{fuckdisplay:!test}" class="isload">没有更多内容了</div>
        <mu-infinite-scroll :scroller="scroller" :loading="loading" :class="{fuckdisplay:test}" :loadingText='loadingText' @load="loadMore"/>
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
        title: '我的积分',
        show: true,
        info: '积分说明',
        url: url.requestUrl+'/hlquan/html/HelpCenters.aspx',
        user: [],
        integraList:[],
        page:1,
        loading: false,
        loaded: true,
        loadingText: '正在加载...',
        scroller: null,
        muTitile:'',
        errMsg:'',
        dialog:false,
        test: false
      }
    },
    methods:{
      loadMore () {
        this.loading = true
        this.page=this.page+1
        this.getIntegrateDetail()
      },
      getUserInfo (){
        let self = this
        self.$http.post(url.allUrl+'/api/MyInfo.ashx?_m=GetUseInfo', {}).then((res) => {
          if (res.data.err_code == 0) {            
            self.user = res.data.err_msg
          } else {
            self.errMsg = res.data.err_msg
            self.dialog = true
          }
        }).catch((err) => {
          self.errMsg = "请求错误，请重试";
          self.dialog = true;
        })
      },
      getIntegrateDetail(){
        let self = this
       self.$http.get(url.allUrl+'/api/MyIntegral.ashx?_m=GetInteGralDetailForJson&page='+self.page, {}).then((res) => {
          if (res.data.err_code == 0) {
            let item=res.data.err_msg;
            if(item==null || item==""){
                self.test = false;
            }else{
              for(var i=0; i<item.length;i++){
                self.integraList.push(item[i])
              }
                //self.integraList=self.integraList.concat(item)
              if(item.length==10){
                self.loading = false
              }else{
                self.test = true
                self.loadingText='已经加载到底部啦！'

              }
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
      goToPoint(){
        location.href=url.requestUrl+"/hlquan/html/points.aspx"
      },
      open () {
      this.dialog = true
      },
      close () {
        this.dialog = false
      }
    },
    created:function(){
      this.scroller = this.$el
      this.getUserInfo()
      this.getIntegrateDetail(1)
    }
  }
</script>

<style scoped>

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
    padding: 0.1rem 0.7rem;
    border-radius: 1rem;
    border: 2px solid #fff;
  }
  .content-block-title{
    padding: 0.4rem 0;
  }
  .mu-list{
    padding: 0;
    background-color: #fff;
  }
  .list-block{
    margin: 0;
    background-color: #fff;
  }
  .item-inner{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0.4rem 0.8rem;
  }
  .item-after{
    font-size: 0.8rem;
    font-weight: bolder;
  }
  .item-title{
    font-size: 0.8rem;
  }
  .item-title-date{
    font-size: 0.7rem;
    color: #999;
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
