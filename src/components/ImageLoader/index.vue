<template>
  <div class="ImageLoader-container">
    <img v-if="!allOk" class="placeholder" :src="placeholder" />
    <img @load="handleLoader" class="origin" :src="src" :style="{
        opacity:originOpacity,
        transition: `${duration}ms`
      }"/>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      require: true,
    },
    placeholder: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data(){
    return  {
      oringinLoadered:false,  //图片加载完成
      allOk:false,  //所有都完成（图片完全显现）
    }
  },
  computed:{
    originOpacity(){
      return this.oringinLoadered ? 1:0;
    }
  },
  methods:{
    handleLoader(){
      this.oringinLoadered = true;
      setTimeout(()=>{
        this.allOk = true
        this.$emit("load")
      },this.duration)
    }
  }
};
</script>

<style scoped lang="less" scoped>
@import "~@/styles/mixin.less" ;
    .ImageLoader-container {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        img {
            .self-full();
            object-fit: cover;
        }
        .placeholder {
          filter:blur(2vw);
          position: absolute;
        }
    }
</style>