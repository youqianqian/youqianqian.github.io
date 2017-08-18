<template>
  <div class="hello">
    <mt-header title="发现" fixed id="header"></mt-header>

    <ol class="breadcrumb" style="background-color:rgb(255,255,255)">
      <i class="glyphicon glyphicon-flash left"></i>
      <li>朋友圈</li>
      <i class="glyphicon glyphicon-chevron-right right"></i>
    </ol>

    <div class="header">
      <ol class="breadcrumb">
        <i class="glyphicon glyphicon-heart-empty left"></i>
        <li>扫一扫</li>
        <i class="glyphicon glyphicon-chevron-right right"></i>
      </ol>
      <ol class="breadcrumb">
        <i class="glyphicon glyphicon-link left"></i>
        <li>摇一摇</li>
        <i class="glyphicon glyphicon-chevron-right right"></i>
      </ol>
    </div>

    <div class="header">
      <ol class="breadcrumb">
        <i class="glyphicon glyphicon-credit-card left"></i>
        <li>附近的人</li>
        <i class="glyphicon glyphicon-chevron-right right"></i>
      </ol>
      <ol class="breadcrumb">
        <i class="glyphicon glyphicon-open-file left"></i>
        <li>漂流瓶</li>
        <i class="glyphicon glyphicon-chevron-right right"></i>
      </ol>
    </div>

    <div class="header">
      <ol class="breadcrumb">
        <i class="glyphicon glyphicon-yen left"></i>
        <li>购物</li>
        <i class="glyphicon glyphicon-chevron-right right"></i>
      </ol>
      <ol class="breadcrumb">
        <i class="glyphicon glyphicon-grain left"></i>
        <li>游戏</li>
        <i class="glyphicon glyphicon-chevron-right right"></i>
      </ol>
    </div>
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
  .header ol{
    margin-bottom: 0px;
    background-color: rgb(255, 255, 255);
    border-bottom: 0.5px solid rgb(227,227,227);
  }
  .header {
    margin-bottom: 20px;
  }
  .right{
    font-size: 15px;
    float: right;
    color: lightgray;
  }
  ol{
    text-align: left;
    padding-left: 20px;
  }
  li{
    margin-left: 10px;
    font-size: 15px;
  }
  .left{
    font-size: 15px;
  }
</style>
