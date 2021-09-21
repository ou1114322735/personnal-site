<template>
  <Layout>
    <div class="main-container" v-loading="isLoading" ref="mainContainer">
      <BlogDetail :blog="data" v-if="!isLoading" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-if="data" v-loading="isLoading">
        <BlogTOC :TOC="data.toc" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import { getSingleBlog } from "@/api/blog";
import BlogComment from "./components/BlogComment"; 
import mainScroll from "@/mixins/mainScroll";
import {titleController} from "@/utils";
export default {
  mixins: [fetchData({}),mainScroll("mainContainer")],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
  methods: {
    async fetchData() {
      const resp =  await getSingleBlog(this.$route.params.id);
      titleController.setRouterTitle(resp.title)
      return resp;
    },
  },
};
</script>

<style lang="less" scoped>
.right-container {
  width: 300px;
  height: 100%;
  position: relative;
}
.main-container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: relative;
  scroll-behavior: smooth;
}
</style>