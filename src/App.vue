<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      
      <template #default>
        <RouterView />
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from "./components/ToTop";
export default {
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>

<style lang="less" scoped>
  @import "~@/styles/mixin.less";
  .app-container{
    .self-full(fixed);
    background: #fff;
  }
  .aside{
    width: 225px;
    height: 100%;
  }
</style>