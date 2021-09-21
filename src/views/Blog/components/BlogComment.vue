<template>
  <div class="BlogCommment">
    <messageArea
      title="留言板"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import messageArea from "@/components/messageArea";
import fetchData from "@/mixins/fetchData";
import { getComment, postComment } from "@/api/blog";
export default {
  mixins: [fetchData({})],
  components: {
    messageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  created() {
    this.$eventBus.$on("mainScroll", this.handle);
  },
  beforeDestroyed(){
      this.$eventBus.$off("mainScroll", this.handle);
  },
  computed: {
    hasMore() {
      return this.data.rows.length <= this.data.total;
    },
  },
  methods: {
    async fetchData() {
      return await getComment(this.page, this.limit, this.$route.params.id);
    },
    handle(dom) {
        if(this.isLoading || !dom){
            //目前正在加载
            return;
        }
      const range = 100;
      const dec = Math.abs(dom.scrollHeight - dom.scrollTop - dom.clientHeight);
      if (dec <= range) {
        this.fetchMore();
      }
    },
    async fetchMore() {
      if (!this.hasMore) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const res = await this.fetchData();
      console.log(res)
      this.data.total = res.total;
      this.data.rows = this.data.rows.concat(res.rows);
      this.isLoading = false;
    },
    async handleSubmit(formData, callback) {
      const res = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(res);
      this.data.total++;
      callback("提交成功");
    },
  },
};
</script>

<style scoped>
 .messageArea-container{
   width: 80%;
   margin: 300px auto;
 }
</style>