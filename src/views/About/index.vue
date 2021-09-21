<template>
  <nav class="about-container" >
    <div class="navagator">
      <div class="wrap">
        <router-link :to="{name:'Resume'}">个人简历</router-link>
      </div>
      <div class="wrap">
      <router-link :to="{name:'Experience'}">个人经历</router-link>
      </div>
      <div class="wrap">
        <router-link :to="{name:'Life'}">生活碎片</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </nav>
</template>

<script> 
export default {

}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
 .about-container{
   position: fixed;
   width: 100%;
   height: 100%;
 }
 .navagator{
   width: 100%;
   height: 40px;
   background-color: darken(@dark,-10%);
   display: flex;
   flex: 1 1 auto;
   align-items: center;
  overflow: hidden;
 }
 .content {
   width: 100%;
   height: 100%;
 }
 .wrap{
   border-bottom: 3px solid transparent;
   border-radius: 20px;
   color: #ccc;
   
 }
 a {
    &.router-link-active {
      background: darken(@words, 3%);
      border-bottom: 3px solid @success;
      color: @success;

    }
    padding: 5px 50px;
    align-items: center;
    height: 35px;
    line-height: 35px;
    &:hover {
      color: @success;
   border-bottom: 3px solid @success;
    }
  }
</style>