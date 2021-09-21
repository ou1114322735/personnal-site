<template>
  <div class="test-container">
    <ImageLoader
      
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration="3000"
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      @load="loaderOk"
    />
  </div>
</template>
<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods:{
    loaderOk(){
      console.log("图片完全加载");
    }
  },
};
</script>

<style scoped>
.test-container {
    width: 500px;
    height: 400px;
    border:2px solid black ;
    margin: 0 auto;
}
</style>