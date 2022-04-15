<template>
  <div class="recharge">
     <div class="dliog">
         <img src="~assets/images/pic_title.png@3x@3x.png" alt="" class="superFirst">
         <p class="selectP">选择充值金额</p>
         <div class="jeType">
           <van-tabs v-model="active" animated swipeable>
              <van-tab title="￥298">
                <ul class="jeTypeContent">
                  <li>
                    <a href="#">
                      <img src="~assets/images/bg@3x.png" alt="">
                      <img src="~assets/images/Vb@3x.png" alt="">
                      <img src="~assets/images/vbsmall@3x.png" alt="">
                      <span>x900</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="~assets/images/bg@3x.png" alt="">
                      <img src="~assets/images/syc@3x.png" alt="">
                      <img src="~assets/images/sycsmall@3x.png" alt="">
                      <span>x900</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="~assets/images/bg@3x.png" alt="">
                      <img src="~assets/images/pic_conversation.png@3x@3x.png" alt="">
                      <img src="~assets/images/pic_conversationsamll@3x.png" alt="">
                      <span>x900</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                     <img src="~assets/images/bg@3x.png" alt="">
                     <img src="~assets/images/vip30day@3x.png" alt="">
                     <img src="~assets/images/vip30daysmall@3x.png" alt="">
                     <span>x900</span>
                    </a>
                  </li>
                </ul>
              </van-tab>
              <van-tab title="￥199">
                <ul class="jeTypeContent">
                  <li>
                    <a href="#">
                      <img src="~assets/images/bg@3x.png" alt="">
                      <img src="~assets/images/Vb@3x.png" alt="">
                      <img src="~assets/images/vbsmall@3x.png" alt="">
                      <span>x900</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="~assets/images/bg@3x.png" alt="">
                      <img src="~assets/images/syc@3x.png" alt="">
                      <img src="~assets/images/sycsmall@3x.png" alt="">
                      <span>x900</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                     <img src="~assets/images/bg@3x.png" alt="">
                     <img src="~assets/images/pic_conversation.png@3x@3x.png" alt="">
                     <img src="~assets/images/pic_conversationsamll@3x.png" alt="">
                     <span>x900</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                     <img src="~assets/images/bg@3x.png" alt="">
                     <img src="~assets/images/vip30day@3x.png" alt="">
                     <img src="~assets/images/vip30daysmall@3x.png" alt="">
                     <span>x900</span>
                    </a>
                  </li>
                </ul>
              </van-tab>
              <van-tab title="￥99">
                <ul class="jeTypeContent">
                  <li>
                    <a href="#">
                      <img src="~assets/images/bg@3x.png" alt="">
                      <img src="~assets/images/Vb@3x.png" alt="">
                      <img src="~assets/images/vbsmall@3x.png" alt="">
                      <span>x900</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="~assets/images/bg@3x.png" alt="">
                      <img src="~assets/images/syc@3x.png" alt="">
                      <img src="~assets/images/sycsmall@3x.png" alt="">
                      <span>x900</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                     <img src="~assets/images/bg@3x.png" alt="">
                     <img src="~assets/images/pic_conversation.png@3x@3x.png" alt="">
                     <img src="~assets/images/pic_conversationsamll@3x.png" alt="">
                     <span>x900</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                     <img src="~assets/images/bg@3x.png" alt="">
                     <img src="~assets/images/vip30day@3x.png" alt="">
                     <img src="~assets/images/vip30daysmall@3x.png" alt="">
                     <span>x900</span>
                    </a>
                  </li>
                </ul>
              </van-tab>
            </van-tabs>
           <div class="jeTypeBottom">
             <img src="~assets/images/dian_left@3x.png" alt=""/>
             <p>首充<span>XXX元</span>可享价值<span>XXXX元</span>超值大礼包</p>
             <img src="~assets/images/dian_right@3x.png" alt=""/>
           </div>
         </div>
         <p class="selectP" style="margin-top: 0.08rem;">选择支付方式</p>
         <ul class="zfType" >
           <li @click.capture="zfTypeClick($event,0)">
             <img src="~assets/images/pic_zfb.png@3x@3x.png" alt="" data-index="0">
             <span>支付宝</span>
             <img src="~assets/images/btn_zf_highlightedl.png@3x@3x.png" alt="" v-show="select==0" >
           </li>
           <li @click.capture="zfTypeClick($event,1)">
             <img src="~assets/images/vb_weixin@3x@3x@3x.png" alt="" data-index="1">
             <span>微信</span>
             <img src="~assets/images/btn_zf_highlightedl.png@3x@3x.png" alt="" v-show="select==1"  >
           </li>
           <li  @click.capture="zfTypeClick($event,2)">
             <img src="~assets/images/pic_pp.png@3x@3x.png" alt="" data-index="2">
             <span>PayPel</span>
             <img src="~assets/images/btn_zf_highlightedl.png@3x@3x.png" alt="" v-show="select==2" >
           </li>
         </ul>
        <div class="rightLq">
          <img src="~assets/images/btn_receive_normal.png@3x@3x.png" alt="">
        </div>
     </div>
  </div>
</template>

<script>
  import {firstRange} from '../../api/index.js'
  export default{
    name:'recharge',
    data(){
      return{
          active:0,
          select:0
      }
    },
    mounted() {
      this.getFirst()
    },
    methods:{
      zfTypeClick(e,i){
        this.select = i;
      },
      getFirst(){
        let data = {
          "packageName":"com.vliao.vchat",
          "userId":100002,
          "userKey":"1"
        }
        firstRange(data).then((res)=>{
          console.log(res)
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .dliog{
    width:7.5rem ;
    height: 11.1933rem;
    position: fixed;
    box-sizing: border-box;
    padding: 0 calc(15/100*2rem);
    top: 0.1rem;
    // left: 50%;
    // margin-left: -3.5rem;
    background: url(~assets/images/toast-recharge-bg.2f81add.png) no-repeat;
    background-size: 100% 100%;
    img{
      width: 4.76rem;
      height: 1.69rem;
      margin-top: 0.86rem;
    }
    /deep/.van-tabs--line .van-tabs__wrap {
        height: 0.88rem;
    }
    /deep/.van-tab {
      line-height: 0.8rem;
    }
    /deep/.van-tabs__line{
      left:0.04rem;
      width: calc(~'104/100*2rem');
      height: calc(~'54/100*2rem');
      background: url(~assets/images/action.png);
      background-size: 100% 100%;
      top: calc(~'-7/100*2rem');
      bottom: 0;
      left: -0.01rem;
      &:nth-of-type(3){
        transform: translateX(2.735rem) translateX(-50%);
        transition-duration: 0.3s;
      }
    }
  }
  .selectP{
    font-size: calc(~'13/100*2rem');
    color: #686868;
    margin: 0;
    margin-left: calc(~'14/100*2rem');
  }
  /deep/.van-tabs__nav--line{
    width: calc(~'311/100*2rem');
    margin: 0 auto;
    background: url(~assets/images/jeLan@3x.png) no-repeat;
    background-size: 100%;
    padding-bottom: calc(~'15/100*2rem');
  }
  .jeType{
       background: url(~assets/images/bg_mid@3x.png) no-repeat;
       background-size: 103.56% 100%;
       background-position: -0.11rem 0;
       width: calc(311/100*2rem);
       height: 3.76rem;
       margin: 0 auto;
       box-sizing: border-box;
       margin-top: 0.12rem;
  }
  /deep/.van-tab{
    color: #FE4329;
  }
  /deep/.van-tab__text--ellipsis{
    z-index: 1000;
    font-size: 0.28rem;
    // color: #FE4329;
  }
  /deep/.van-tab--active {
      color: #fff;
      font-size: 0.3rem;
  }
  /deep/.van-tabs__content--animated{
    width: calc(~'300/100*2rem');
    margin: 0 auto;
    .van-tabs__track{
      width: calc(~'300/100*2rem');
    }
  }
  .jeTypeContent{
    width: calc(~'300/100*2rem');
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px calc(~'10/100*2rem');
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 0.1rem;
    overflow: hidden;
    li{
      position: relative;
      width: calc(~'60/100*2rem');
      height: calc(~'73.17/100*2rem');
      a{
        display: inline-block;
        width: calc(~'60/100*2rem');
        height: calc(~'73.17/100*2rem');
        img{
           position: absolute;
           margin-top: 0;
         &:nth-of-type(1){
          width: calc(~'60/100*2rem');
          height: calc(~'73.17/100*2rem');
         }
         &:nth-of-type(2){
           top: 0.28rem;
           left: 0.32rem;
          width: calc(~'30/100*2rem');
          height: calc(~'30.33/100*2rem');
         }
         &:nth-of-type(3){
           // width: 0.4507rem;
           width: auto;
           height: calc(~'11.54/100*2rem');
            top: 0;
            right: 0;
         }
        }
        span{
          position: absolute;
          left: 50%;
          margin-left: -0.3rem;
           bottom: 0;
           font-size: calc(~'12/100*2rem');
           color: #FD7D00;
        }
      }
    }
  }
  .jeTypeBottom{
    width: calc(~'310.2/100*2rem');
    height: calc(~'57.67/100*2rem');
    background: url(~assets/images/pic_d.png@3x@3x.png);
    background-size: 100%;
    position: relative;
    margin: 0 auto;
    img{
      width: calc(~'18/100*2rem');
      height: calc(~'4/100*2rem');
      position: absolute;
      &:nth-of-type(1){
        top: 50%;
        left: 0.26rem;
        margin-top: -0.12rem;
      }
      &:nth-of-type(2){
        top: 50%;
        right: 0.26rem;
        margin-top: -0.12rem;
      }
    }
    p{
      color: white;
      font-size: calc(~'13.5/100*2rem');
      padding: 0 0.5rem;
      box-sizing: border-box;
      line-height: calc(~'52/100*2rem');
      text-align: center;
      span{
        color: #FF7100;
      }
    }
  }
  .zfType{
    width: calc(~'333/100*2rem');
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.04rem;
    li{
      position: relative;
      margin-top: 0.24rem;
      width: calc(~'124/100*2rem');
      height: calc(~'44/100*2rem');
      line-height: calc(~'35/100*2rem');
      margin-left: 0.45rem;
      box-shadow: 0px 0px 3px 0px #69232314 inset;
      &:nth-of-type(2){
        margin-left: calc(~'38/100*2rem');
      }
      // &:nth-of-type(3){
      //   margin-top: 0.48rem;
      // }
      img{
        width: calc(~'24/100*2rem');
        height: calc(~'24/100*2rem');
        margin-top: 0px;
        &:nth-of-type(1){
          position: absolute;
          left: 0.34rem;
          top: 0.2rem;
        }
        &:nth-of-type(2){
          position: absolute;
          top: 0;
          left: 0;
          width: calc(~'124/100*2rem');
          height: calc(~'44/100*2rem');
          z-index: -1;
        }
      }
      span{
        font-size:0.26rem ;
        color: #FD7D00;
        position: absolute;
        left: 1.02rem;
        top: 0.11rem;
      }
    }
  }
  .rightLq{
    width: calc(~'302/100*2rem');
    height: calc(~'50.66/100*2rem');
    margin: 0 auto;
    margin-top: 0.3rem;
    img{
      width: 100%;
      height: 100%;
      margin-top: 0;
    }
  }

</style>
