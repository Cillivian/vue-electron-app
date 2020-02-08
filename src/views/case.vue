<template>
  <div class="case">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/index' }">系统首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/case' }">我的病例</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main">
      <div class="operation row">
        <el-form :inline="true" :model="fromData" class="demo-form-inline">
          <el-form-item label="姓名">
            <el-input v-model="fromData.name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item label="门诊日期">
            <el-date-picker
              v-model="fromData.date"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort="{prop: 'number', order: 'descending'}"
        class="table"
      >
        <el-table-column prop="number" label="记录号" sortable></el-table-column>
        <el-table-column prop="name" label="姓名" sortable></el-table-column>
        <el-table-column prop="sex" label="性别" sortable></el-table-column>
        <el-table-column prop="age" label="年龄（岁）" sortable></el-table-column>

        <el-table-column prop="height" label="身高（cm）"></el-table-column>
        <el-table-column prop="weight" label="体重"></el-table-column>
        <el-table-column prop="phone" label="联系电话"></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="onViewCase(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import Data from "../mock/mock";
export default {
  data() {
    return {
      tableData: Data.caseData,
      fromData: {
        name: "",
        date: ""
      }
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    onSubmit() {},
    fetch() {},
    onViewCase(row) {
      console.log(row);
      let { href } = this.$router.resolve({
         path:'/report',
          name:'report'
      });
      
localStorage.setItem('report', JSON.stringify(row));

      window.open(href, "_blank");
      // this.$router.push({
          // path:'/report',
          // name:'report',
          // params:{
          //     report:row
          // }
      // })
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
  flex-flow: row nowrap;
}
.case {
  height: 100% !important;
  padding: 15px;
  .main {
    width: 100%;
    height: 100%;
    .operation {
      margin-top: 15px;
      width: 100%;
      justify-content: start;
    }
  }
}
</style>