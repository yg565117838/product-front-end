<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    @select="menuSelect"
    unique-opened
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-scrollbar style="height: 100%" wrap-class="scrollbar-wrapper">
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>材料入库</span>
        </template>
        <el-menu-item index="2-1">新增</el-menu-item>
        <el-menu-item index="2-2">入库列表</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>产品外加工</span>
        </template>
        <el-submenu index="3-1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>外出加工</span>
          </template>
          <el-menu-item index="3-1-1">出库</el-menu-item>
          <el-menu-item index="3-1-2">出库列表</el-menu-item>
        </el-submenu>
        <el-menu-item index="3-2">加工中</el-menu-item>
        <el-menu-item index="3-3">入库列表</el-menu-item>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>产品出库</span>
        </template>
        <el-menu-item index="2-1">新增</el-menu-item>
        <el-menu-item index="2-2">出库列表</el-menu-item>
      </el-submenu>

    </el-scrollbar>
  </el-menu>


</template>

<script>
  export default {
    name: "menuBar",
    data() {
      return {}
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      menuSelect(key, keyPath){
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="scss">
  .el-menu {
    border-right: none;
    height: 100vh;
  }
  /*前面加/deep/可以解决，写在style里面（不带scoped）css里也可以解决
  /deep/.scrollbar-wrapper {
    overflow-x: hidden;
  }*/


</style>
