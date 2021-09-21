<template> 
<div class="test-container">
    <Resume />
</div>

</template>

<script>
import Resume from "./index";
export default {
    components:{
        Resume,
    }
}
</script>

<style scoped lang="less">
    .test-container {
        width: 600px;
        /* height: 600px; */
        /* overflow-y: scroll; */
        padding: 20px 20px;
        margin: 0 auto;
        box-shadow: -1px 1px 5px #000;
    }
</style>