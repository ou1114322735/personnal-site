<template>
  <div class="BlogList-container">
    <h1>{{ blog.title }}</h1>
    <div class="content">
      <span>发表时间：{{ formatDate(blog.createDate) }}</span>
      <a href="#dataForm">评论数：{{ blog.commentNumber }}</a>
      <RouterLink :to="{
        name:'BlogCategory',
        params:{
          categoryid:blog.category.id
        }
      }" v-if="blog.category">{{ blog.category.name }}</RouterLink>
      <div v-html="blog.htmlContent" class="markdown-body"></div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
import "highlight.js/styles/github.css"; // 代码部分高亮
export default {
  props: {
    blog: {
      // type: Object,
      // required: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/markdown.css";
  .content{
    margin-top: 20px;
    padding: 20px 30px;
      span,a{
        color: gray;
        margin-right: 20px;
      }
      
  }
</style>