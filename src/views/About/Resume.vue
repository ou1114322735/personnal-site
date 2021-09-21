<template>
  <div class="resume-wrap">
    <Resume :data="data" v-loading="isLoading" />
  </div>
</template>

<script>
import {mapState} from "vuex";
import Resume from "@/components/Resume";
export default {
  components: {
    Resume,
  },
  computed:mapState("resume",["isLoading","data"]),
  created(){
    this.$store.dispatch("resume/fetchResume");
  },
};
</script>

<style scoped>
li{
  list-style:outside;

}
.resume-wrap {
  width: 600px;
  height: 100%;
  overflow-y: scroll;
  padding: 20px 20px;
  margin: 0 auto;
  box-shadow: -1px 1px 5px #000;
}
</style>