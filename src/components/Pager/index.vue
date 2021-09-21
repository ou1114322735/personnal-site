<template>
  <!-- 总页数大于1才会显示pager -->
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }">|&lt;&lt;</a>
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }">&lt;&lt;</a>
    <a @click="handleClick(n)" v-for="(n, i) in number" :key="i" :class="{ active: n === current }">{{ n }}</a>
    <a @click="handleClick(current + 1)" :class="{ disabled: current === pageNumber }">&gt;&gt;</a>
    <a @click="handleClick(pageNumber)" :class="{ disabled: current === pageNumber }">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      //当前页
      type: Number,
      default: 1,
    },
    total: {
      //总数据
      type: Number,
      default: 0,
    },
    limit: {
      //单页数据容量
      type: Number,
      default: 10,
    },
    visibleNumber: {
      //可见页码数
      type: Number,
      default: 10,
    },
  },
  computed: {
    pageNumber() {
      //总页数
      return Math.ceil(this.total / this.limit);
    },
    currentMin() {
      //当前页最小数字
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    currentMax() {
      //当前页最大数字
      let max = this.currentMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    number() {
      //单页页码数组
      let arr = [];
      for (let i = this.currentMin; i <= this.currentMax; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {
    //抛出一个事件
    handleClick(newPage) {
      if(newPage < 1){
        newPage=1
      }
      if(newPage > this.pageNumber){
        newPage = this.pageNumber
      }
      if(newPage === this.current ){
        return
      }
      console.log(newPage);
      this.$emit("pageChange",newPage);
      
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less"; //~@返回src目录，在script中直接用@返回src目录
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>