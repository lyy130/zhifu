<template>
  <div class="recharge">
     <div class="dliog">
         <img src="../../assets/images/pic_title.png@3x@3x.png" alt="" class="superFirst">
         <p>选择充值金额</p>
         <div class="jeType">
           <van-tabs v-model="active">
              <van-tab title="视屏">
                <ul class="jeTypeContent">
                  <li>
                    <a href="#">
                      <img src="" alt="">
                      <img src="" alt="">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="" alt="">
                      <img src="" alt="">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="" alt="">
                      <img src="" alt="">
                    </a>
                  </li>
                </ul>
              </van-tab>
              <van-tab title="推荐">
                <!-- <template #title>选项 </template> -->
              </van-tab>
              <van-tab title="新人">
                <ul class="jeTypeContent">
                  <li>
                    <a href="#">
                      <img src="" alt="">
                      <img src="" alt="">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="" alt="">
                      <img src="" alt="">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="" alt="">
                      <img src="" alt="">
                    </a>
                  </li>
                </ul>
              </van-tab>
            </van-tabs>
         </div>
     </div>
  </div>
</template>

<script>
  export default{
    name:'recharge',
    data(){
      return{
          active:0
      }
    }
  }
</script>

<style lang="less" scoped>
  .dliog{
    width:7rem ;
    height: 11.2rem;
    position: fixed;
    box-sizing: border-box;
    top: 0.76rem;
    left: 50%;
    margin-left: -3.5rem;
    background: #ccc;
    img{
      width: 4.76rem;
      height: 1.69rem;
    }
  }
  /deep/.van-tabs__nav--line{
    background: url(../../assets/images/jeLan@3x.png) no-repeat;
    background-size: 100%;
  }
  
</style>