<template>
  <div>
    <!-- 头部 -->
    <!-- <Header>
    <div class="left" slot="left"><van-icon name="search" size="22"></van-icon></div>
    <div class="title" slot="title">
        {{geohash.name}}
    </div>
    <div slot="right"><van-icon name="user-o" size="22" /></div>
    </Header> -->

    <!-- 底部 -->
<div>
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
        <van-tabbar-item to="/homes/index" icon="smile-o">外卖</van-tabbar-item>
        <van-tabbar-item to="/homes/search" icon="browsing-history-o">搜索</van-tabbar-item>
        <van-tabbar-item to="/homes/older" icon="coupon-o">订单</van-tabbar-item>
        <van-tabbar-item to="/homes/mine" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
    <router-view/>
</div>
  </div>
</template>


<script>
import Header from "@/components/header"
export default {
  name: "",
  components:{
      Header
  },
  data() {
    return {
        active:0,
        geohash:{},
    };
  },
  created() {},
  mounted() {
    // 获取本地存储
    let a = JSON.parse(localStorage.getItem('city'))
    console.log(a)
    this.geohash = a
  }, //方法
  methods: {},
};
</script>

<style scoped lang="scss">
.header[data-v-29e8c3c6] {
    font-size: 20px;
    height: 50px;
    line-height: 50px;
    i {
        display: inline-block;
        margin-top:12px
    }
}
.title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 22px;
    font-weight: 500;
}
</style>