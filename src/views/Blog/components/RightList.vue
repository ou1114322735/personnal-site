<template>
  <ul class="RightList-container">
    <li v-for="(item, i) in list" :key="i">
      <span
        @click="handleClick(item)"
        :class="{
          active: item.isSelected,
        }"
        >{{ item.name }}</span>
      <span v-if="item.aside"
      :class="{
          active: item.isSelected,
        }" class="aside">{{item.aside}}</span>
      <!-- 显示当前组件 -->
      <RightList :list="item.children" @selectLi="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelected) {
        this.$emit("selectLi", item); //抛出事件
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
ul {
  padding: 0;
  list-style: none;
  margin-left: 15px;
  li {
    min-height: 30px; //设置最小宽度
    line-height: 30px;
    cursor: pointer;
    padding: 10px 15px;
    span{
      font-weight: 900;
    }
  }
}
&.active {
  font-weight: bold;
  color: @warn;
}
.aside{
  margin-left: 10px;
}
</style>