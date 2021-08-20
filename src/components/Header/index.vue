<template>
  <div class="header">
    <div class="header-top">
      <div class="header-user">
        <span>尚品汇欢迎您！</span>
        请
        <span class="header-login">登录</span>
        <span>免费注册</span>
      </div>
      <ul class="header-nav">
        <li>
          <a href="#">我的订单</a>
        </li>
        <li>
          <a href="#">我的购物车</a>
        </li>
        <li>
          <a href="#">我的尚品汇</a>
        </li>
        <li>
          <a href="#">尚品汇会员</a>
        </li>
        <li>
          <a href="#">企业采购</a>
        </li>
        <li>
          <a href="#">关注尚品汇</a>
        </li>
        <li>
          <a href="#">合作招商</a>
        </li>
        <li>
          <a href="#">商家后台</a>
        </li>
      </ul>
    </div>
    <div class="header-btn">
      <router-link to="/"><img src="./logo.png" alt="logo"></router-link>
      <form class="header-from">
        <input type="text" class="header-input">
        <button class="header-button" @click.prevent="goSearch">搜索</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name:'Header',
  methods:{
    goSearch(){
      this.$router.push('/serach')
    }
  }
};
</script>

<style lang="less" scoped>
.header-top {
  width: 100%;
  height: 30px;
  background-color: #eaeaea;
  min-width: 1200px;
  display: flex;
  justify-content: space-between;
  
}
.header-user{
  width: 210px;
  line-height: 30px;
  margin-left: 160px;
  ~span{
    margin-right: 10px;
  }
}
.header-login{
  border-right: 1px solid #000;
  padding-right: 5px;
  margin-right: 5px;
  color: #000;
  ~span{
    color: #000;
  }
}
.header-nav{
  display: flex;
  margin-right: 160px;
}
li{
  line-height: 30px;
}
li a{
    border-right: 1px solid #000;
    padding-right: 10px;
    margin-right: 10px;
}
li:last-of-type a{
  border: 0px;
  margin: 0;
  padding: 0;
}
.header-btn{
  width: 1200px;
  height:106px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between; 
}
.header-btn img{
    margin: 25px;
}
.header-from{
  display: flex;
  align-items: center;
}
.header-input{
  border: 2px solid red;
  outline: none;
  box-sizing: border-box;
  height: 35px;
  width: 450px;
  padding: 0 10px;
  font-size: 16px;
}
.header-button{
  background-color: red;
  color: #fff;
  height: 35px;
  width: 80px;
  outline: none;
  border: none;
}
</style>
