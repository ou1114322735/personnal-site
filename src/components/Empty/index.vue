<template>
  <div class="Empty-container">
      <Icon type="empty" />
      <h1>{{text}}</h1>
  </div>
</template>

<script>
import Icon from "../Icon"
export default {
    components:{
        Icon,
    },
    props:{
        text:{
            type:String,
            default:"无数据"
        }
        
    }
}
</script>

<style lang="less" scoped>
    @import "~@/styles/mixin.less";
    @import "~@/styles/var.less";
    .Empty-container{
       .self-center();
       color:@gray;
       text-align: center;
    }
    .icon-container{
        font-size: 70px;
    }
</style>