<template>
  <div class="home">
    <van-tabs v-model="active">
      <van-tab title="视屏">视屏</van-tab>
      <van-tab title="推荐">
        <!-- <template #title>选项 </template> -->
        <HelloWorld></HelloWorld>
      </van-tab>
      <van-tab title="热门">热门</van-tab>
      <van-tab title="新人">新人</van-tab>
    </van-tabs>
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
    name:'Home',
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

</style>