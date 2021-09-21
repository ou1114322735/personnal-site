<template>
    <div class="test-container">
        <Empty />
    </div>
</template>

<script>
import Empty from './';

export default {
    components:{
        Empty,
    }
}
</script>

<style>
    .test-container {
        width: 500px;
        height: 500px;
        border: 2px solid black;
        position: relative;
        margin: 0px auto;
    }
</style>