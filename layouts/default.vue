<template>
  <el-container class="total-container">
    <el-aside width="200px">
      <menu-bar></menu-bar>
    </el-aside>
    <el-container>
      <el-header>头</el-header>
      <el-main>
        <Nuxt></Nuxt>
      </el-main>
      <el-footer>脚</el-footer>
    </el-container>
  </el-container>
<!--  <div>-->
<!--    <Nuxt />-->
<!--  </div>-->
</template>
<script>
  import MenuBar from "../components/menu/menuBar";
  export default {
    components: {MenuBar}
  }
</script>
<style scoped lang="scss">
  .total-container{
    min-width: 1280px;
    flex-shrink: 0;
  }
  .el-main{
    background: #eee;
  }
</style>
