<template>
  <div class="site-aside-container" v-if="data">
    <template >
      <Avatar url="https://img1.baidu.com/it/u=1078487256,824777311&fm=26&fmt=auto&gp=0.jpg" :size="120" />
    <h1 class="title">{{data.siteTitle}}</h1>
    </template>
    <Menu />
    <Contact  />
    <p class="footer" >
      {{data.icp}}
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import {mapState} from "vuex";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed:mapState("setting",["data"])
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 16px;
  color: #fff;
  text-align: center;
}
</style>
