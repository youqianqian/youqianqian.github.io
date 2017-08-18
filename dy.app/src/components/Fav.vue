<template>
  <div class="hello">
    <mt-header title="通讯录" fixed id="header">
      </router-link>
      <mt-button class="el-icon-star-off" slot="right"></mt-button>
    </mt-header>
    <el-input id="input" placeholder="                                         搜索" icon="search">
    </el-input>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {

    }
  }
}
</script>
<style scoped>
#header {
  background-color: #324157;
}
</style>
