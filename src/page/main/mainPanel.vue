<template lang="html">
  <el-row :gutter="20">
    <el-col :span="6">
      1
    </el-col>
    <el-col :span="12">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-col>
    <el-col :span="6">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </el-col>
  </el-row>
</template>

<script>
export default {

}
</script>

<style lang="css">

</style>
