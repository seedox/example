<template>
    <div id='app'>
      <div id="v-header" style="margin-bottom:10px;">
    
        <el-menu mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">

            <el-menu-item index="1"><router-link class="menuitem" to="/outgoing">
                发文拟稿
            </router-link></el-menu-item>
            <el-menu-item index="2"><router-link class="menuitem" to="/example">
                收文登记
            </router-link></el-menu-item>
            <el-menu-item index="3"><router-link class="menuitem" to="/submission">
                部门呈报
            </router-link></el-menu-item>
            <el-menu-item index="4"><router-link class="menuitem" to="/supply">
                办公用品
            </router-link></el-menu-item>
            <el-menu-item index="5"><router-link class="menuitem" to="/vehicle">
                车辆管理
            </router-link></el-menu-item>
            <el-menu-item index="6"><router-link class="menuitem" to="/asset">
                资产申请
            </router-link></el-menu-item>
            <el-menu-item index="7"><router-link class="menuitem" to="/contract">
                合同登记
            </router-link></el-menu-item>
            <el-menu-item index="8"><router-link class="menuitem" to="/news">
                新闻管理
            </router-link></el-menu-item>
            <el-menu-item index="9"><router-link class="menuitem" to="/activity">
                活动报告
            </router-link></el-menu-item>
               
        </el-menu>
      </div>

      <div class="content">
          <router-view></router-view>
      </div>
        


    </div>
</template>
<script>
export default {
  name: "app"
};
</script>
<style lang="scss" scoped>
#app {
  height: 100%;

  #v-header ul {
    display: flex;
    justify-content: center;
  }
  .content {
    max-width: 1280px;
    margin: 0 auto;
  }
}
</style>