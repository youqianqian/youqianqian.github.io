<template>
  <div class="hello">
    <mt-header title="微信" fixed id="header">
      </router-link>
      <mt-button class="el-icon-plus" slot="right"></mt-button>
    </mt-header>
    <el-input id="input" placeholder="搜索" icon="search">
    </el-input>
    <ol class="breadcrumb" id="one" v-for="item in data">
      <img :src="item.img" alt="">
      <div class="two">
        <p>{{item.name}}</p>
        <p>{{item.message}}</p>
      </div>
    </ol>
  </div>
</template>

<script>
  import people from '../data/people'
  export default {
    name: 'hello',
    data() {
      return {
        data: people
      }
    },
    created() {
      console.log(this.data)
    },
    methods: {
      // getData(){
      //   console.log(this.people)
      // }
    }
  }

</script>
<style scoped>
  #header {
    background-color: #324157;
  }
   ol {
    text-align: left;
    padding-left: 20px;
  }
  .one {
    display: flex;
  }

  .two {
    display: inline-block;
    margin-left: 10px;
    margin-top: 10px;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    border: 2px solid rgb(227, 227, 227);
    margin-top: -30px;
  }
</style>
