<template>
  <div class="Message-container" ref="container">
    <MessageArea title="留言板" :subTitle="`(${data.total})`" :list="data.rows" :isListLoading="isLoading" @submit="handleSubmit" />
  </div>
</template>

<script>
import MessageArea from "@/components/messageArea";
import fetchData from "@/mixins/fetchData";
import * as msgApi from "@/api/message";
import mainScroll from "@/mixins/mainScroll";
import ToTop from "@/components/ToTop";
export default {
  mixins:[fetchData({}),mainScroll("container")],
  components:{
    MessageArea,
    ToTop
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
  data(){
    return {
      page:1,
      limit:10,
    }
  },
  methods:{
    async fetchData(){
      return await msgApi.getMessage(this.page,this.limit);
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
      this.data.total = res.total;
      this.data.rows = this.data.rows.concat(res.rows);
      this.isLoading = false;
    },
    async handleSubmit(data, callback) {
      const res = await msgApi.postMessage(data);
      this.data.rows.unshift(res);
      this.data.total++;
      callback("感谢您的留言");
    },
  }
}
</script>

<style scoped>
  .Message-container{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  .messageArea-container{
    width: 80%;
    margin: 40px auto;
  }
</style>