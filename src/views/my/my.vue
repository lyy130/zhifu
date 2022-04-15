<template>
  <div class="my">
    <div class="top">

    </div>
    <div class="num"></div>
    <div class="nav"></div>
    <div class="list"></div>
  </div>
</template>

<script>
  export default{
    name:"my",
    data(){
      return{

      }
    }
  }
</script>

<style lang="less" scoped="scoped">
  .my{
    width: 7.5rem;
    height: 100%;
    .top{
      width: 100%;
      height: 2.2rem;
      border: 1px solid red;
      margin: 0.94rem 0 0.28rem 0;
    }
    .num{
      width: 5.4rem;
      height: 0.84rem;
      margin: 0 1.14rem 0.28rem 1rem;
      border: 1px solid red;
    }
    .nav{
      width: 7.06rem;
      height: 3.04rem;
      border: 1px solid red;
      margin: 0 auto;
    }
    .list{
      width: 7.1rem;
      height: 10rem;
      border: 1px solid red;
      margin: 0 auto;
    }
  }
</style>
