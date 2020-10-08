<template>
    
  <div>
    <!-- 头部 -->
    <Header>
      <div class="left" slot="left">
        <van-icon name="search" size="22"></van-icon>
      </div>
      <div class="title" slot="title">我的</div>
      <div slot="right"><van-icon name="user-o" size="22" /></div>
    </Header>
      
    <!-- 用户 -->
    <div class="header-user">
        <img src="//elm.cangdu.org/img/default.jpg" alt="">
        <div>
            <p class="user_name">yutu</p>
            <p><van-icon name="user-o" size="16" />暂无绑定手机号</p>
        </div>
        <van-icon name="arrow" size="22" />
    </div>
    <!-- 余额 -->
    <van-grid :column-num="3">
        <van-grid-item text="我的余额" >
            <template #icon>
               <p class="font"> <span style="color:orange;">{{res.brand_member_new}}</span>元</p>
            </template>
        </van-grid-item>
        <van-grid-item text="我的优惠" >
            <template #icon>
                <p class="font"><span style="color:red;">{{res.gift_amount}}</span> 个</p>
            </template>
        </van-grid-item>
        <van-grid-item text="我的积分" >
            <template #icon>
                <p class="font"><span style="color:green;">{{res.point}}</span>分</p>
            </template>
        </van-grid-item>
    </van-grid>

<!-- 订单 -->
    <ul class="dingdan">
        <li>
            <van-icon name="point-gift" size="22" />
            我的订单
        </li>
        <li>
            <van-icon name="hot" size="22" color="#ff5500" />
            积分商城
        </li>
        <li>
            <van-icon name="diamond" size="22" color="yellow" />
            饿了么会员
        </li>
    </ul>
    <ul class="dingdan dingdan1">
        <li>
            <van-icon name="cluster" size="22" />
            服务中心
        </li>
        <li>
            <van-icon name="medal" size="22" />
            积分商下载饿了么APP
        </li>
    </ul>


  </div>
</template>


<script>
import Header from "@/components/header";
import {user} from '@/utils/api';
export default {
  name: "",
  data() {
    return {
        id:0,
        res:{},
    };
  },
  components: {
    Header,
  },
  created() {},
  mounted() {
      this.getLocal()
  }, //方法
  methods: {
    async getLocal(){
        this.id=localStorage.getItem('user_id')
        let {data} = await user(this.id)
        console.log(data)
        console.log(this.id);
        this.res =data
    }

  },
};
</script>

<style scoped lang="scss">
.header-user {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    background-color: cornflowerblue;
    color: #fff;
    >img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 20px 0 0 0;
    }
    >div {
        // display: flex;
        // flex-direction: column;
        // line-height: 18px;
        width: 280px;
        .user_name {
            font-weight: 600;
            font-size: 24px;
        }
    }
}
.font {
    font-size: 12px;
    span {
        font-size: 30px;
    }
}
.dingdan {
    border-top: 10px solid #eee;
    padding: 0 10px;
    box-sizing: border-box;
    li {
        line-height: 50px;

    }
}
.dingdan1 {
    i {
        color:skyblue;
    }
}
</style>