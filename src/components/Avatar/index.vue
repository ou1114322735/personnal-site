<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String, //url类型必须是字符串
      require: true, //属性必传
    },
    size: {
      type: Number,
      default:130,  //如果没有传入size，则默认为150
    },
  },
};
</script>

<style scoped>
    /* 带有作用域的样式 */
    .avatar-container {
        border-radius: 50%;
        object-fit: cover;
        display: block;
    }
</style>