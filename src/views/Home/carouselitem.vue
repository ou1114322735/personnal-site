<template>
  <div class="carouselitem-container" 
  ref="container" 
  @mousemove="handleMouse"
  @mouseleave="handleLeave">
    <div class="carousel-img" :style="getImgPosition" ref="inner">
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        @load="loaderOk"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="description" ref="description">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, //外层容器size
      innerSize: null, //里层容器size
      mouseX: null,
      nouseY: null,
    };
  },
  computed: {
    getImgPosition() {

      if(!this.innerSize || !this.containerSize){
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width;
      const extraHeigh = this.innerSize.height - this.containerSize.height;
      const left = -this.mouseX / this.containerSize.width * extraWidth;
      const top = -this.mouseY / this.containerSize.height * extraHeigh;

      return {
        transform:  `translate(${left}px,${top}px)` ,
      };
    },
    center(){
      return {
        x:this.containerSize.width/2,
        y:this.containerSize.height/2,
      }
    }
  },
  methods: {
    loaderOk() {
      this.showWords();
    },
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.style.transition = "1s";
      //强行reflow
      this.$refs.title.clientWidth;
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.description.style.opacity = 1;
      this.$refs.description.style.width = 0;
      this.$refs.description.style.transition = "2s 1s";
      //强行reflow
      this.$refs.description.clientWidth;
      this.$refs.description.style.width = this.descWidth + "px";
    },
    getSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.inner.clientWidth,
        height: this.$refs.inner.clientHeight,
      };
    },
    handleMouse(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleLeave(){
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    }
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.description.clientWidth;

    this.getSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.getSize);
  },
  destryed() {
    window.removeEventListener("resize", this.getSize);
  },
};
</script>

<style lang="less" scoped>
.carouselitem-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.carousel-img {
  left: 0;
  top: 0;
  width: 110%;
  height: 110%;
  position: absolute;
  transition: .2s;
}
.title,
.description {
  position: absolute;
  top: calc(50% - 20px);
  left: 100px;
  text-shadow: 1px 0 rgba(0, 0, 0, 0.5), -1px 0 rgba(0, 0, 0, 0.5),
    0 1px rgba(0, 0, 0, 0.5), 0 1px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
}
.title {
  font-size: 2em;
  font-weight: bolder;
}
.description {
  font-size: 1.2em;
  top: calc(50% + 30px);
  opacity: 0;
}
</style>