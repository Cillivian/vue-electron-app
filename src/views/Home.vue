<template>
  <div class="home">
 
      <el-container>
        <el-aside width="200px">
          <el-col >
            <el-menu
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              :router="true">
              <el-menu-item index="/index">
                <i class="el-icon-s-home"></i>
                <span slot="title">系统首页</span>
              </el-menu-item>
              <el-menu-item index="/help">
                <i class="el-icon-s-help"></i>
                <span slot="title">使用帮助</span>
              </el-menu-item>
              <el-menu-item index="/support">
                <i class="el-icon-s-opportunity"></i>
                <span slot="title">技术支持</span>
              </el-menu-item>
              <el-menu-item index="/setting">
                <i class="el-icon-setting"></i>
                <span slot="title">系统设置</span>
              </el-menu-item>
              <el-menu-item @click="handleExit">
                <i class="el-icon-switch-button"></i>
                <span slot="title">关闭系统</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-aside>
      <el-container>
<el-header>
  <div class="name">莫费时</div>
</el-header>
<el-main>
          <router-view class="view"></router-view>
        </el-main>
      </el-container>
        
      </el-container>
  </div>
</template>
 <script>
export default {
  name: "admin",
  data() {
    return {
      active: true
    };
  },
  mounted() {
    this.$router.push("/index");
  },
  methods: {
    handleExit() {
       this.$alert('确认退出本系统？', '退出系统', {
          confirmButtonText: '确定',
          callback: () => {
             window.opener = null;
window.open("about:blank", "_top").close()
          }
        });
     
    }
  }
};
</script>
 <style lang="scss" scoped>
.home{
  height: 100%;
  .name{
      font-size:30px;
      text-align:left;
  }
  
}
.el-header{
    background-color: #545c64;
    color: #ffd04b;
    text-align: center;
    line-height: 60px;
  }
  
.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: calc(100%-60px) !important;
  padding: 0px;
  width: 100%;
  overflow: hidden;
}

 .el-container {
   height: 100%;
   width:100%;
}

</style>