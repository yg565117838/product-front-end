<template>
  <el-container class="total-container">
    <el-aside width="200px">
      <menu-bar></menu-bar>
    </el-aside>
    <el-container>
      <el-header>
        <page-header></page-header>
      </el-header>
      <el-main>
        <Nuxt></Nuxt>
      </el-main>
    </el-container>
  </el-container>
<!--  <div>-->
<!--    <Nuxt />-->
<!--  </div>-->
</template>
<script>
  import MenuBar from "../components/menu/menuBar";
  import PageHeader from "../components/header/pageHeader";
  export default {
    components: {PageHeader, MenuBar},
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
