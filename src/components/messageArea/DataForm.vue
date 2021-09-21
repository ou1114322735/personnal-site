<template>
  <form id="dataForm" @submit.prevent="handleSubmit" class="DataForm-container" ref="container">
    <div class="form-item">
      <div class="username-container">
      <input type="text" v-model="formData.nickname" placeholder="用户昵称" maxlength="10">
      <div class="tip">{{formData.nickname.length}}/30</div>
    </div>
    <span class="error">{{error.nickname}}</span>
    </div>
    <div class="form-item">
      <div class="textArea-container">
      <textarea v-model="formData.content" maxlength="300" placeholder="输入内容"></textarea>
      <div class="tip">{{formData.content.length}}/300</div>
    </div>
    <span class="error">{{error.content}}</span>
    <div class="submitBtn">
      <button :disabled="isSubmiting" >{{isSubmiting ? "提交中" :"提交"}}</button>
    </div>
    </div>
  </form>
</template>

<script>
export default {
  data(){
    return{
      formData:{
        nickname:"",
        content:"",
    },
    error:{
      nickname:"",
      content:"",
    },
    isSubmiting:false,
    }
    
  },
  methods:{
    handleSubmit(){
      this.formData.nickname ? this.error.nickname="" : this.error.nickname="请输入昵称";
      this.formData.content ? this.error.content="" : this.error.content="请输入评论";
      if(!this.formData.nickname || !this.formData.content){
        //错误，不提交事件
        return
      }
      this.isSubmiting = true;
      this.$emit("submit",this.formData,(res)=>{
        this.formData.nickname="";
        this.formData.content="";
        this.isSubmiting = false;

        this.$showMessage({
          content:"res",
          type:"success",
          container: this.$refs.container,
          duration:1500
        })
      })

    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
  .DataForm-container {
  margin-bottom: 20px;
  overflow: hidden;
}
.form-item {
  margin-bottom: 8px;
}
.username-container {
  width: 50%;
  position: relative;
  margin-bottom: 30px;
}
.textArea-container {
  position: relative;
}
.tip {
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: #b4b8bc;
  font-size: 12px;
}
input,
textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px dashed @gray;
  outline: none;
  color: @words;
  font-size: 14px;
  border-radius: 4px;
  &:focus {
    border-color: @primary;
  }
}
input {
  padding: 0 15px;
  height: 40px;
}
textarea {
  resize: none;
  padding: 8px 15px;
  height: 120px;
}
.error {
  margin-top: 6px;
  color: @danger;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
button {
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100px;
  height: 34px;
  color: #fff;
  border-radius: 4px;
  background: @primary;
  &:hover {
    background: darken(@primary, 10%);
  }
  &:disabled {
    background: lighten(@primary, 20%);
    cursor: not-allowed;
  }
}
</style>
