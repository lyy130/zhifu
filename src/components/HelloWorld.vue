<template>
  <div class="zhanshi">
    <van-swipe class="my-swipe"  indicator-color="white">
      <van-swipe-item>
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
    font-size: 20px;
    line-height: 150px;
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
    height: 56.22px;
    position: fixed;
    top: 7.4rem;
    right: 20px;
    margin-top: -56.22px;
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
    height: 56.22px;
    position: fixed;
    top: 7.8rem;
    right: 20px;
    margin-top: 31.555px;
    img{
      width: 100%;
      height: 0.844rem;
    }
  }
  .fangjianname{
    position: fixed;
    bottom: 88px;
    right: 20px;
    width:2.44rem ;
    height:0.76rem ;
    line-height: 0.76rem;
    border-radius: 30px;
    background: rgba(104, 100, 100,.4);
    img{
      width: 0.64rem;
      height: 0.64rem;
      position: absolute;
      top: 3px;
      left: 4px;
      z-index: 1111;
    }
    span{
      position: absolute;
      top: 0;
      left: 0.64rem;
      font-size: 0.24rem;
      margin-left: 9px;
      vertical-align: middle;
    }
    .close{
      width: 0.48rem;
      height: 0.48rem;
      text-align: center;
        position: absolute;
        top: 1px;
        right: 17px;
    }
  }

</style>
