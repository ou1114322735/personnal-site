<template>
  <div v-loading="isLoading" class="home-container" ref="container" @wheel="handleWheel">
    <ul
      class="carouselitem-container"
      :style="{
        marginTop,
      }"
      @transitionend="handleTransitionend"
    >
      <li v-for="item in data" :key="item.id">
        <carouselitem :carousel="item" />
      </li>
    </ul>
    <div class="icon icon-up" v-show="index > 0" @click="switchBtn(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      v-show="index < data.length - 1"
      @click="switchBtn(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>

    <ul class="btn">
      <li
        v-for="(item, i) in data"
        :class="{
          active: i === index,
        }"
        :key="item.id"
        @click="switchBtn(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex";
import carouselitem from "./carouselitem.vue";
import Icon from "@/components/Icon";

export default {
  components: {
    carouselitem,
    Icon,
  },
  data() {
    return {
      index: 0, //当前索引
      containerHeight: 0, //视窗高度
      scrolling: false, //是否正在滚动
    };
  },
  created(){
    this.$store.dispatch("banner/fetchBanner");
  },
  computed: {
   ...mapState("banner",["isLoading","data"]),
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    switchBtn(i) {
      return (this.index = i);
    },
    handleWheel(e) {
      if (this.scrolling == false) {
        if (e.deltaY < -100 && this.index > 0) {
          this.index--;
          this.scrolling = true;
        } else if (e.deltaY > 100 && this.index < this.data.length - 1) {
          this.index++;
          this.scrolling = true;
        }
      }
    },
    handleTransitionend() {
      this.scrolling = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },

  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  ul {
    margin: 0;
    list-style: none;
  }
}
.icon {
  .self-center();
  font-size: 30px;
  @gap: 25px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);
  &.icon-up {
    top: @gap;
    animation: 2s danceUp infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: 2s danceDown infinite;
  }
}
@dance: 20px;
@keyframes danceUp {
  0% {
    transform: translateY(-@dance);
  }
  50% {
    transform: translateY(@dance);
  }
  100% {
    transform: translateY(-@dance);
  }
}
@keyframes danceDown {
  0% {
    transform: translateY(@dance);
  }
  50% {
    transform: translateY(-@dance);
  }
  100% {
    transform: translateY(@dance);
  }
}
.btn {
  .self-center();
  transform: translate(0, -50%);
  left: auto;
  right: 20px;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    &.active {
      background: #fff;
    }
  }
}
.carouselitem-container {
  width: 100%;
  height: 100%;
  padding: 0;
  transition: 1s;
  li {
    width: 100%;
    height: 100%;
  }
}
</style>