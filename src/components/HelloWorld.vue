<template>
  <div class="zhanshi">
    <van-swipe
     class="my-swipe"
       :autoplay="3000"
        indicator-color="white"
        @change="indicator"
        >
      <van-swipe-item @click="indicatorClick(event)">
        <img src="../assets/images/action@3x.png" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/action@3x.png" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/action@3x.png" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/action@3x.png" alt="">
      </van-swipe-item>
    </van-swipe>
    <div class="content">

    </div>
    <div class="firstCong">
      <img src="../assets/images/shouchong@3x.png" alt="">
      <span>23:59:59</span>
    </div>
    <div class="xingdong">
      <img src="../assets/images/shouchong@3x.png" alt="">
    </div>
    <div class="fangjianname">
      <img src="../assets/images/12@3x.png" alt="">
      <span>房间名</span>
      <i class="close">
        <img src="../assets/images/cancel_white_icon@3x.png" alt="">
      </i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    indicator(index){
      console.log(index)
    },
    indicatorClick(event){
      console.log(event)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.home .van-tabs__wrap{
    margin-bottom: 0.2rem!important;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 0.02rem;
    line-height: 1.5rem;
    text-align: center;
    background-color: #39a9ed;
    height: 2.2rem;

    img{
      width: 100%;
      height: 2.2rem;
    }
  }
  .content{
    width: 7.5rem;
    height: 7.5rem;
    background: gold;
  }
  .firstCong{
    width: 1.34rem;
    height: 0.5622rem;
    position: fixed;
    top: 7.4rem;
    right: 0.2rem;
    margin-top: -0.5622rem;
    img{
      width: 100%;
      height: 0.844rem;
    }
    span{
      position: absolute;
      left: 0;
      top: 0.9rem;
      display: inline-block;
      width: 100%;
      height: 0.28rem;
      font-size: 0.2rem;
      text-align: center;
      line-height: 0.28rem;
      background: #FF3B3B;
      color: #fff;
    }
  }
  .xingdong{
    width: 1.34rem;
    height: 0.5622rem;
    position: fixed;
    top: 7.8rem;
    right: 0.2rem;
    margin-top: 0.3155rem;
    img{
      width: 100%;
      height: 0.844rem;
    }
  }
  .fangjianname{
    position: fixed;
    bottom: 0.88rem;
    right: 0.2rem;
    width:2.44rem ;
    height:0.76rem ;
    line-height: 0.76rem;
    border-radius: 0.3rem;
    background: rgba(104, 100, 100,.4);
    img{
      width: 0.64rem;
      height: 0.64rem;
      position: absolute;
      top: 0.03rem;
      left: 0.04rem;
      z-index: 1111;
    }
    span{
      position: absolute;
      top: 0;
      left: 0.64rem;
      font-size: 0.24rem;
      margin-left: 0.09rem;
      vertical-align: middle;
    }
    .close{
      width: 0.48rem;
      height: 0.48rem;
      text-align: center;
        position: absolute;
        top:0.01rem;
        right: 0.17rem;
    }
  }

</style>
