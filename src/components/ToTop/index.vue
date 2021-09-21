<template>
  <div class="ToTop-container" v-show="isShow" @click="handleClick">toTop</div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  created() {
    this.$eventBus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$eventBus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.isShow = false;
        return;
      }
      if (dom.scrollTop > 500) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    handleClick() {
      this.$eventBus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.ToTop-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  color: @gray;
  position: fixed;
  z-index: 999;
  right: 60px;
  bottom: 30px;
  background-color: @primary;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.2) translate(3px, -3px);
    background-color:darken(#fff, 4%)
    
  }
}
</style>