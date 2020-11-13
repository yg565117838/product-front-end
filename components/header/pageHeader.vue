<template>
  <div class="page-header flex-align-center flex-justify-between">
    <div>{{$store.state.selectMenuItem}}</div>
    <div class="right flex mr30">
      <el-dropdown trigger="click" @command="handleCommand">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user" command="1">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-switch-button" command="2">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: "pageHeader",
    data() {
      return {

      }
    },
    methods: {
      handleCommand(command) {
        console.log(command)
      },
    },
    created() {

    }
  }
</script>

<style scoped lang="scss">
  .page-header {
    height: 100%;
  }

  .right {

  }
</style>
