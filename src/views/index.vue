<template>
<div class="index">
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item >首页</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/index' }">系统首页</el-breadcrumb-item>
</el-breadcrumb>
  <el-row>
  <el-button type="primary" plain icon="el-icon-upload" @click="visible=true">上传数据</el-button>
  <el-button type="primary" plain icon="el-icon-scissors"  @click="toCase()">我的病例</el-button>
  <el-button type="primary" plain icon="el-icon-collection">学术咨询</el-button>
</el-row>
<el-dialog title="上传数据" :visible.sync="visible" width="40%">
  <el-form :model="form" label-position="right" label-width="100px">
    <el-form-item label="病人姓名:" >
      <el-input v-model="form.name" autocomplete="off" placeholder="请输入姓名"></el-input>
    </el-form-item>
    <el-form-item label="年龄:" >
      <el-input v-model="form.age" autocomplete="off" placeholder="请输入年龄"></el-input>
    </el-form-item>
    <el-form-item label="上传资料:" >
      <el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传excel文件，且不超过500kb</div>
</el-upload>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="visible = false">取 消</el-button>
    <el-button type="primary" @click="visible = false">确 定</el-button>
  </div>
</el-dialog>
</div>

</template>
<script>
export default {
  name: 'index',
  data() {
    return {
     visible:false,
     form:{
       name:''
     }
    }
  },
  methods:{
    toCase(){
      this.$router.push('/case')
    },
     onSubmit() {
        console.log('submit!');
      }
  }
}
</script>
<style lang="scss" scoped>
.index{
  width:100%;
  height:100%;
  padding: 15px;
  
}
</style>