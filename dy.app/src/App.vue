<template>
  <div id="app">
    <router-view class="lxx"></router-view>
    <div id="app">
      <mt-tabbar fixed>
        <mt-tab-item id="微信">
          <i slot="icon" class="fa fa-comment-o" @click="clickHome"></i> 微信
        </mt-tab-item>
        <mt-tab-item id="通讯录">
          <i slot="icon" class="fa fa-address-book" @click="clickFav"></i> 通讯录
        </mt-tab-item>
        <mt-tab-item id="发现">
          <i slot="icon" class="fa fa-bell-o" @click="clickMenu"></i> 发现
        </mt-tab-item>
        <mt-tab-item id="我">
          <i slot="icon" class="fa fa-user" @click="clickMe"></i> 我
        </mt-tab-item>
      </mt-tabbar>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      clickHome() {
        this.$router.push({ name: 'Home' })
      },
      clickFav() {
        this.$router.push({ name: 'Fav' })
      },
      clickMenu() {
        this.$router.push({ name: 'Menu' })
      },
      clickMe() {
        this.$router.push({ name: 'Me' })
      }
    },
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 45px;
  }
  .fa {
    font-size: 20px;
  }
  .lxx{
    background-color: rgb(239, 239, 245);
  }
</style>
