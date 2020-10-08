<template>
  <div>
    <!-- 详情搜索 -->
    <!-- 头部组件 -->
    <van-sticky>
      <van-nav-bar
        :title="obj.name"
        right-text="切换城市"
        left-arrow
        @click-left="$router.go(-1)"
        @click-right="$router.go(-1)"
      />
    </van-sticky>
    <!-- 搜索 -->
    <van-search
      v-model="keyword"
      placeholder="请输入搜索关键词"
      input-align="center"
    />
    <van-button type="info" block @click="sub">搜索</van-button>
    <!-- 搜索列表 -->
    <ul v-show="list.length != 0">
      <li
        v-for="(item, index) in list"
        :key="index"
        @click="addplaceHistory(item)"
      >
        <h4>{{ item.name }}</h4>
        <p>{{ item.address }}</p>
      </li>
    </ul>
    <!-- 搜索历史 -->
    <div class="placeHistory" v-show="list.length == 0">
      <h3>搜索历史</h3>
      <ul v-show="placeHistory != 0">
        <li v-for="(item, index) in placeHistory" :key="index">
          <h4>{{ item.name }}</h4>
          <p>{{ item.address }}</p>
        </li>
        <p @click="placeHistory = []">清空所有</p>
      </ul>
    </div>
  </div>
</template>

<script>
import { detail, search } from "@/utils/api";
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      obj: {}, //当前城市信息
      keyword: "", // 搜索关键字
      list: [], //搜索列表
      // 搜索历史
      placeHistory: JSON.parse(localStorage.getItem("placeHistory")) || [],
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {
    placeHistory: {
      deep: true,
      handler(newValue, oldValue) {
        localStorage.setItem("placeHistory", JSON.stringify(newValue));
      },
    },
  },
  // 组件方法
  methods: {
    // 搜索事件
    async sub() {
      let { data } = await search(this.$route.query.id, this.keyword);
      this.list = data;
      console.log(data);
    },
    // 添加历史记录
    addplaceHistory(data) {
      let a = this.placeHistory.some((item) => {
        return item.name.includes(data.name);
      });
      // console.log(a);
      // 判断历史记录是否有该数据 并且长度不超过五
      let index = this.placeHistory.findIndex((item) => {
        return item.name.includes(data.name);
      });
      if (index != -1) {
        if (!a) {
          if (this.placeHistory.length >= 5) {
            this.placeHistory.pop();
          }
          this.placeHistory.unshift(data);
        }
        // console.log(this.placeHistory);
        // 写入本地储存
        localStorage.setItem("placeHistory", JSON.stringify(this.placeHistory));
        console.log(data);
        this.$router.push("/homes");
        localStorage.setItem("city", JSON.stringify(data));
      }else {
          this.placeHistory.splice(index,1)
          this.placeHistory.unshift(data)
      }
    },
  },
  async created() {
    this.list = []; // 默认搜索列表为空
    // 获取用户信息
    let res = await detail(this.$route.query.id);
    this.obj = res.data;
  },
};
</script> 
<style scoped lang='scss'>
ul {
  list-style: none;
  box-sizing: border-box;
  padding: 0 20px;
  li {
    border-bottom: 1px solid #ccc;
  }
}
</style>
