<template>
  <div class="login">
    <header>
      <i class="iconfont icon-zuojiantou"></i>
      <span>手机号登录</span>
      <span></span>
    </header>
    <form action="" method="post" autocomplete=“off”>
      <div class="user" @focus="clickUser" @blur="leaveUser">
        <input type="text" placeholder="请输入账号" name="user1" id="user" v-model="user"  autocomplete=“new-password”/>
        <label for="user"></label>
      </div>
      <div class="psd">
        <input type="password" placeholder="请输入密码" name="psd1" id="psd" v-model="psd" autocomplete=“new-password”/>
        <label for="psd"></label>
      </div>
      <div class="yzm">
        <input type="text" placeholder="请输入验证码" name="yzm" id="yzm" v-model="yzm" autocomplete=“new-password”/>
        <label for="yzm"></label>
      </div>
      <span class="wjPsd">忘记密码</span>
      <button type="submit" >
        <span>登录</span>
        <img src="./res/login_btn_off@2x.png" alt="">
      </button>
    </form>
    <p class="footer">注册或登录，即代表你已同意<span>《用户协议》</span></p>
  </div>
</template>

<script>
  export default{
    name:'login',
    data(){
      return{
        user:'',
        psd:'',
        yzm:''
      }
    },
    methods:{
      clickUser(){
        console.log(this.user)
        // this.user = ''
      },
      leaveUser(){
        console.log("失去焦点"+this.user)
      }
    }
  }
</script>
<style lang="less" scoped="scoped">
  body{
    height: 100vh!important;
  }
  html,body,input,p,a,div,span,header,form{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .login{
    width: 7.5rem;
    height: 100%;
    overflow: hidden;
    header{
      width: 100%;
      height: 0.32rem;
      margin-top: 0.5rem;
      display: flex;
      padding: 0 0.3rem 0 0.23rem;
      i{
        width: 0.194rem;
        height: 0.315rem;
        margin: 0 0.45rem;
        margin-top: 0.05rem;
        &.icon-zuojiantou:before {
            height: 100%;
            font-size: 0.32rem;
        }
      }
      span{
        &:nth-of-type(1){
          display: inline-block;
          flex: 1;
          font-size: 0.34rem;
          color: #000;
          text-align: center;
        }
        &:nth-of-type(2){
          display: inline-block;
          width: 1rem;
          height: 0.68rem;
          font-size: 0.34rem;
          color: #FF5E98;
          text-align: center;
          line-height: 0.68rem;
        }
      }
    }
    form{
      width: 5.16rem;
      margin: 1.64rem 1.18rem 0.41rem 1.16rem;
      box-sizing: border-box;
      position: relative;
      div{
        position: relative;
        width: 100%;
        height: 0.8rem;
        line-height: 0.8rem;
        // background-color: #ccc;
        border-bottom: 1px solid #E5E5E5;
        margin-bottom: 0.41rem;
        input{
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 95%;
          outline: none;
          border: none;
          font-size: 0.24rem;
          box-shadow: 0 0 0px 1000px white inset !important;
          -webkit-text-fill-color: #fff;
        }
        label{
          font-size: 0.24rem;
          color: #FF5E98;
          margin-top: -0.18rem;
          display: block;
        }
        input::placeholder{
          font-size: 0.24rem;
          font-family: Arial;
        }
      }
      .wjPsd{
        font-size: 0.24rem;
        color: #B9B9B9;
        position: absolute;
        bottom: 4.59rem;
        right: 0;
      }
      button{
        width: 3.22rem;
        height: 1.22rem;
        margin: 0.74rem 1.09rem 2.76rem 1rem;
        box-sizing: border-box;
        text-align: center;
        position: relative;
        outline: none;
        border: none;
        border-color:white;
        box-shadow: 0 0 0px 1000px white inset !important;
        -webkit-text-fill-color: #fff;
        span{
          position: absolute;
          left: 1.28rem;
          top: 0.4rem;
          font-size: 0.34rem;
          color: #fff;
          z-index: 2;
        }
        img{
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }
      }
    }
    .TypeH{
      width: 5.16rem;
      height: 0.23rem;
      margin: 0 1.17rem 0.62rem 1.17rem;
      position: relative;
      hr{
        margin:0 ;
        width: 5.16rem;
        height: 0.01rem;
        position: absolute;
        top: 0.08rem;
        left: 0;
      }
      p{
        width: 1.7rem;
        background: #fff;
        position: absolute;
        top: -0.08rem;
        left: 50%;
        margin-left: -0.85rem;
        font-size: 0.24rem;
        text-align: center;
      }
    }
    .loginType{
      width: 4.7rem;
      height: 0.95rem;
      display: flex;
      justify-content: space-around;
      margin: 0 auto;
      .type_item{
        width: 0.68rem;
        height: 1.03rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        img{
          width: 0.73rem;
          height: 0.68rem;
        }
        span{
          display: block;
          width: 0.5rem;
          height: 0.23rem;
          font-size: 0.24rem;
          color: #505050;
        }
      }
    }
    .footer{
      width: 4.8rem;
      height: 0.24rem;
      margin: 0.89rem 1.64rem 0.62rem 1.43rem;
      font-size: 0.24rem;
      color: #B2B2B2;
      text-align: center;
    }
  }
</style>
