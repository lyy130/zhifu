<template>
  <div class="homeAction">
    <!-- top -->
    <div class="tabBox">
      <van-tabs v-model="active">
        <van-tab title="关注">关注</van-tab>
        <van-tab title="推荐">
          <!-- <template #title>选项 </template> -->
        </van-tab>
        <van-tab title="限免">限免</van-tab>
        <van-tab title="三星">三星</van-tab>
        <van-tab title="四星">四星</van-tab>
        <van-tab title="五星">五星</van-tab>
      </van-tabs>
      <i class="iconfont icon-shaixuan"></i>
    </div>

    <!-- 底部 -->
    <van-tabbar v-model="active1">
      <van-tabbar-item>
        <span>动态</span>
        <template #icon="props">
          <img :src="props.active ? icons[0].active : icons[0].inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>1对1</span>
        <template #icon="props">
          <img :src="props.active ? icons[1].active : icons[1].inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>流派</span>
        <template #icon="props">
          <img :src="props.active ? icons[2].active : icons[2].inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>消息</span>
        <template #icon="props">
          <img :src="props.active ? icons[3].active : icons[3].inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? icons[4].active : icons[4].inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
  export default{
    name:'HomeAction',
    data(){
      return{
        active: 1,
        active1:1,
        icons:[
          {
              active: require('../../assets/logo.png'),
              inactive: require('../../assets/images/home_select@3x@3x.png'),
          },
          {
              active: require('../../assets/logo.png'),
              inactive: require('../../assets/images/home_un_select@3x@3x.png'),
          },
          {
              active: require('../../assets/logo.png'),
              inactive: require('../../assets/images/discover_un_select@3x@3x.png'),
          },
          {
              active: require('../../assets/logo.png'),
              inactive: require('../../assets/images/message_un_select@3x@3x.png'),
          },
          {
              active: require('../../assets/logo.png'),
              inactive: require('../../assets/images/me_un_select@3x@3x.png'),
          },

      ],
      }
    },
    components:{
      HelloWorld
    }
  }
</script>

<style lang="less" scoped>
  .homeAction{
    .tabBox{
      /deep/.van-tabs{
        width: 90%;
        box-sizing: border-box;
      }
      /deep/.van-tab{
        font-size: 0.3rem;
      }
      /deep/.van-tab--active{
        font-size: 0.4rem;
      }
      .icon-shaixuan{
        width: 0.557rem;
        height: 0.557rem;
        position: absolute;
        font-size: 0.557rem;
        top: 0.29rem;
        right: 0.22rem;
      }
    }
  }

</style>
