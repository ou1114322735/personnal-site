<template>
  <div class="messageArea-container">
      <DataForm v-on="$listeners" />
    <h1>{{ title }}</h1>
    <h2>({{ subTitle }})</h2>
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataList from "./DataList";
import DataForm from "./DataForm";
export default {
  components: {
    DataList,
    DataForm,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.loading {
  position: relative;
  height: 100px;
}
</style>