<template>
    
  <div class="home">
    <!-- 头部 -->
    <van-sticky>
      <app-header v-show="top<550">
        <div slot="left">elm</div>
        <div slot="title"></div>
        <div slot="right" @click="goPage('/login')">登录|注册</div>
      </app-header>
      <div class="xi" @click="topto" v-show="top >= 550">双击回顶部</div>
    </van-sticky>
    <!-- 字母索引栏右侧定位 -->
    <div class="cityPosition">
      <div :id="key" v-for="(value, key) in group" :key="key">
        <a :href="'#'+key">{{ key }}</a>
      </div>
    </div>
    <!-- 定位 -->
    <div class="dingwei">
      当前定位城市
      <span style="float: right; font-size: 12px; color: #666">定位不准时</span>
    </div>
    <!-- 当前城市 -->
    <div class="guess">
      <router-link :to="'/detail?id='+guess.id">{{ guess.name }}</router-link>
    </div>
    <!-- 热门城市 -->
    <div>
      <p>热门城市</p>
      <ul class="hot">
        <li @click="to(item)" v-for="(item, index) in hot" :key="index">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div>
      <div v-for="(value, key) in group" :key="key">
        <p :id="key">{{ key }}</p>
        <ul class="hot">
          <li v-for="(t, i) in value" :key="i" @click="to(t)">
            {{ t.name }}
          </li>
        </ul>
      </div>
    </div>
    <!-- 热门城市结束 -->




  </div>
</template>

<script>
import appHeader from "../components/header"; //头部引入
import { ajaxCity } from "../utils/api";
export default {
  name: "Home",
  data() {
    return {
      guess: {}, // 当前
      hot: [], //热门
      group: {}, //字母排序
      zlist: {}, //字母
      top:0,  //回到顶部
    };
  },
  components: {
    appHeader, //toubu
  },
  // 挂载后
  mounted() {
    this.ajaxGuess();
    window.addEventListener("scroll",this.sstop)
  },
  methods: {
    async ajaxGuess() {
      // 当前城市
      let { data } = await ajaxCity("guess");
      // console.log(data)
      this.guess = data;

      // 请求热门城市
      let { data: res } = await ajaxCity("hot");
      this.hot = res;

      // 请求字母排序
      let { data: resgroup } = await ajaxCity("group");
      Object.keys(resgroup).sort().map((item) => {
          this.$set(this.group,item,resgroup[item]);
          // this.group[item] = resgroup[item];
        });
      // this.group = resgroup
      // this.$set(this.group);
      console.log(this.group);
    },
    to(i){

      this.$router.push({
        path:"/detail",
        query:{
          name:i.name,
          id:i.id
        }
      })

    },

    // 回顶部
    sstop(){
      this.top = document.documentElement.scrollTop;
    },
    topto(){
      document.documentElement.scrollTop = 0
    },
    // 跳转登录页
    goPage(url){
      this.$router.push(url)
    }
  },
};
</script>
<style scoped lang="scss">
.dingwei {
  padding: 0 10px;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
}
.guess {
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  color: deepskyblue;
  font-size: 20px;
}
.hot {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  a {
    color: #111;
  }
}
.hot li {
  width: 25%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #ddd;
  padding: 0 10px;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cityPosition {
  position: fixed;
  right: 0;
  top: 20%;
  z-index: 99;
  background-color: #fff;
  font-size: 14px;
  width: 20px;
  a {
    color: #aaa;
  }
}

.xi {
  height: 50px;
  line-height: 50px;
  color:#fff;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: cornflowerblue;
}
a {
    color: deepskyblue;
}
</style> 