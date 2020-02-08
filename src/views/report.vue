<template>
  <div class="report">
    <div class="main col">
      <div class="operation row">
        <el-button type="primary" icon="el-icon-printer">打印WORD报告</el-button>
      </div>
      <div class="title">总有效睡眠时间（TST）=01:24 Hours</div>
      <div class="desc">
        <div class="desc-item large" style="font-size:20px;text-align:center;">患者详细信息</div>
        <div class="desc-item">患者姓名：{{report.name||'N/A'}}</div>
        <div class="desc-item">年龄：{{report.age||'N/A'}}</div>
        <div class="desc-item">地址：{{report.address||'N/A'}}</div>
        <div class="desc-item">身高：{{report.height||'N/A'}}</div>
        <div class="desc-item">E-Mail：{{report.email||'N/A'}}</div>
        <div class="desc-item">体重：{{report.weight||'N/A'}}</div>
        <div class="desc-item">性别：{{report.sex||'N/A'}}</div>
        <div class="desc-item">出生日期：{{report.birth||'N/A'}}</div>
        <div class="desc-item">体质指数：{{report.bmi||'N/A'}}</div>
        <div class="desc-item">电话：{{report.phone||'N/A'}}</div>
        <div class="desc-item large">就诊记录：{{report.record||'N/A'}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      report: {
        name: "zhangsan"
      }
    };
  },
  mounted() {
    this.getParams();
  },
  beforeDestroy(){
localStorage.removeItem("report")
  },
  methods: {
    getParams() {
      // console.log(JSON.parse(this.$route.params.report))

      this.report = JSON.parse(localStorage.getItem("report"));
    },
    goBack() {
      console.log("aa");
      this.$router.push("/case");
    }
  }
};
</script>
<style lang="scss" scoped>
.col {
  display: flex;
  flex-flow: column nowrap;
}
.row {
  display: flex;
  flex-flow: row wrap;
}
.report {
  height: 100% !important;
  padding: 15px;
  .main {
    // position: relative;
    width: 100%;
    height: 100%;
    // justify-content: center;
    align-items: start;
    .operation {
      padding-top: 15px;
      padding-bottom: 15px;
      border-bottom: 3px solid #000;
      width: 100%;
    }
    .title {
      padding: 20px;
      left: 50%;
      position: relative;
      transform: translateX(-50%);
      font-size: 20px;
      height: 30px;
      line-height: 30px;
    }
    .desc {
      margin-top: 30px;
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 50px 50px 50px 50px 50px 50px 50px;
      grid-column-gap: 2px;
      grid-row-gap: 2px;
      width: 60%;
      left: 50%;
      position: relative;
      transform: translateX(-50%);
      &-item {
        background: #ffffff;
        line-height: 50px;
        text-align: left;
        padding: 5px;
        border-radius: 5px;
      }
      .large {
        grid-column: 1/3;
      }
    }
  }
}
</style>   