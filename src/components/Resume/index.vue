<template>
  <div class="resume-container" v-if="data" >
    <div class="name">
      <p>{{data.personalInformation.name}}</p>
    </div>
    <div class="personalInformation">
      <span>{{data.personalInformation.sex}}</span>
      |
      <span>{{data.personalInformation.age}}</span>
      |
      <span>{{data.personalInformation.nation}}</span>
      |
      <span>{{data.personalInformation.education}}</span>
      |
      <span>{{data.personalInformation.address}}</span>
      |
      <span>{{data.personalInformation.telephone}}</span>
      |
      <span>{{data.personalInformation.email}}</span>
    </div>

    <div class="educationBackground">
      <div class="container educationBackground-container">
        <p>教育背景</p>
      </div>
      <div class="background">
        <span>{{data.educationBackground.time}}</span>
        <span>{{data.educationBackground.university}}</span>
        <span>{{data.educationBackground.major}}</span>
      </div>
    </div>
    <div class="jobIntention">
      <div class="container jobIntention-container">
        <p>求职意向</p>
      </div>
      <div class="jobIntention-wrapper">
        <span>{{data.jobIntention.position}}</span>
        <span>{{data.jobIntention.city}}</span>
        <span>{{data.jobIntention.salary}}</span>
        <span>{{data.jobIntention.entryTime}}</span>
      </div>
    </div>
    <div class="itSkill">
      <div class="container itSkill-container">
        <p>IT技能</p>
      </div>
      <ul>
        <li v-for="item in data.itSkill" :key="item.id">{{item.description}}</li>
      </ul>
    </div>
    <div class="project">
      <div class="container project-container">
        <p>项目经验</p>
      </div>
      <div class="content">
        <div class="item" v-for="item in data.project" :key="item.id">
            <span class="left">{{item.time}}</span>
            <span class="right">{{item.name}}</span>
          <div class="descript">{{item.background}}</div>
          <ul>
            <li v-for=" i in data.project.problem" :key="i.id">{{i.problem}}</li>
          </ul>
        </div>
      </div>
      <div class="awards">
        <div class="container awards-container">
          <p>个人奖项</p>
        </div>
        <ul>
          <li v-for="item in data.awards" :key="item.time">
            <div class="awards-wrap">
              <span>{{item.title}}</span>
            <span>{{item.time}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="personalEvaluation">
        <div class="container personalEvaluation-container">
          <p>自我评价</p>
        </div>
        <ul>
          <li v-for="(item,i) in data.personalEvaluation" :key="i">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      require: true,
    },
  },
  mounted(){
    console.log("数据",this.data);
  }
};
</script>
<style scoped lang="less">
@import "~@/styles/var.less";
.resume-container {
  width: 100%;
  height: 100%;
}
.container {
  color: darken(@primary, 10%);
  background-color: #eee;
  height: 40px;
  margin-bottom: 20px;
  border-top: 2px solid @primary;
  box-sizing: border-box;
  line-height: 38px;
  p {
    font-weight: bold;
    margin: 0 10px;
  }
}
.name {
  background-color: darken(blue, -20%);
  width: 60%;
  height: 50px;
  font-size: 30px;
  color: #fff;
}
.personalInformation {
  padding: 10px 5px;
  width: 100%;
  color: @lightWords;
  span {
    margin-right: 5px;
  }
  margin-bottom: 50px;
}
.jobIntention {
  width: 100%;
  .jobIntention-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }
  span {
    color: @lightWords;
    font-weight: bolder;
  }
  margin-bottom: 20px;
}
.educationBackground {
  width: 100%;
  .background {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }
  span {
    color: darken(@primary, -10%);
    font-weight: bolder;
  }
  margin-bottom: 20px;
}
li {
    color: @lightWords;
    padding: 5px 2px;
  }
.itSkill {
  width: 100%;
}
.content {
  width: 100%;
  .item {
    padding: 5px 5px;
    span {
      color: @primary;
      font-weight: border;
    }
    .left {
      margin-left: 10px;
    }
    .right {
      margin-left: 170px;
    }
    .descript {
      margin-top: 10px;
    }
  }
}
.awards-wrap{
  display: flex;
    justify-content: space-between;
    padding: 0 5px;
}
</style>