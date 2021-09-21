<template>
  <div class="Blog-container">
    <Layout>
      <BlogList />
      <template #right>
        <BlogCategory />
      </template>
    </Layout>
  </div>
</template>

<script> 
import BlogList from "./components/BlogList";
import BlogCategory from "./components/BlogCategory";
import Layout from "@/components/Layout";
export default {
  components:{
    BlogList,
    BlogCategory,
    Layout,
  }
}
</script>

<style>
  .Blog-container{
    height: 100%;

  }
</style>