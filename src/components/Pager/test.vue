<template>
  <div id="app">
    <Pager :total="total" :current="current" @pageChange="handlePageChange($event)"/>
  </div>
</template>

<script>
import Pager from "./";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
      total: 300,
    };
  },
  methods:{
    handlePageChange(newPage) {
      this.current = newPage;
    
    }
  }
};
</script>

<style scoped>

</style>