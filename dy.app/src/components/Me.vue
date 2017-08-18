<template>
  <div class="Me">
    <mt-header title="我" fixed id="header"></mt-header>
    <ol class="breadcrumb" style="background-color:rgb(255,255,255)" id="one">
      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2523342981,456767842&fm=117&gp=0.jpg" alt="">
      <div class="two">
        <p>阳光少年lxx</p>
        <p>微信号: aiguomax</p>
      </div>
      <i class="glyphicon glyphicon-chevron-right" id="three"></i>
    </ol>
    <ol class="breadcrumb">
      <i class=" glyphicon glyphicon-king left"></i>
      <li>钱包</li>
      <i class="glyphicon glyphicon-chevron-right right"></i>
    </ol>
    <div class="header">
      <ol class="breadcrumb">
        <i class="glyphicon glyphicon-erase left"></i>
        <li>收藏</li>
        <i class="glyphicon glyphicon-chevron-right right"></i>
      </ol>
      <ol class="breadcrumb">
        <i class="glyphicon glyphicon-queen left"></i>
        <li>相册</li>
        <i class="glyphicon glyphicon-chevron-right right"></i>
      </ol>
      <ol class="breadcrumb">
        <i class="glyphicon glyphicon-text-size left"></i>
        <li>卡包</li>
        <i class="glyphicon glyphicon-chevron-right right"></i>
      </ol>
      <ol class="breadcrumb">
        <i class="glyphicon glyphicon-object-align-right left"></i>
        <li>表情</li>
        <i class="glyphicon glyphicon-chevron-right right"></i>
      </ol>
    </div>
    <ol class="breadcrumb" style="border-bottom: 0.5px solid rgb(227, 227, 227);">
      <i class="glyphicon glyphicon-scissors left"></i>
      <li>设置</li>
      <i class="glyphicon glyphicon-chevron-right right"></i>
    </ol>
  </div>

</template>

<script>
  export default {
    name: 'me',
    data() {
      return {

      }
    }
  }

</script>
<style scoped>
  #three{
    float: right;
    margin-top: 25px;
    color: lightgray;
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
    width: 50px;
    height: 50px;
    padding: 10px;
    box-sizing: content-box;
    border: 2px solid rgb(227, 227, 227);
    margin-top: -30px;
  }

  #header {
    background-color: #324157;
  }

  .header ol {
    margin-bottom: 0px;
    background-color: rgb(255, 255, 255);
    border-bottom: 0.5px solid rgb(227, 227, 227);
  }

  .header {
    margin-bottom: 20px;
  }

  .right {
    font-size: 15px;
    float: right;
    color: lightgray;
  }

  ol {
    text-align: left;
    padding-left: 20px;
  }

  li {
    margin-left: 10px;
    font-size: 15px;
  }

  .left {
    font-size: 15px;
  }
</style>
