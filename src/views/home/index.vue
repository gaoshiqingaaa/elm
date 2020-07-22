<template>
  <div>
    
    <el-header style="text-align: right; font-size: 12px">
      <div class="demo-type">
    <div>
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
    </div>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>admin</span>
    <h2>欢迎登录elm信息管理系统</h2>
    </el-header>
       <div id="container" style="height: 100%"></div>
  </div>
  
</template>
