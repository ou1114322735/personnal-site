<template>
  <div class="BlogCategory-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @selectLi="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import { getBlogTypes } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return this.$route.params.categoryid || -1;
    },
    limit(){
      return this.$route.query.limit || 10;
    },
    list() {
      const sum = this.data.reduce((a, b) => a + b.articleCount,0);
      const result = [
        { name: "全部类型", id: -1, articleCount: sum },
        ...this.data,
      ];
      return result.map((it) => ({
        ...it,
        isSelected: this.categoryId === it.id,
        aside:`${it.articleCount}`
      }));
    },
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    handleSelect(item) {
      console.log(item.name);
      if (item.id === -1) {
        //当前没有分类
        this.$router.push({
          name: "Blog",
          query: {
            page: 1,
            limit: this.limit,
          },
        });
      } else {
        //当前有分类
        this.$router.push({
          name: "BlogCategory",
          params: {
            categoryid: item.id,
          },
          query: {
            page: 1,
            limit: this.limit,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.BlogCategory-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
}
h2 {
  font-weight: bolder;
  font-size: 1.5em;
  letter-spacing: 5px; //文字间隔
  margin: 0;
}
</style>