<template>
  <div class="box">
      <el-container style="height:100%; border: 1px solid #eee">
        <el-aside width="240px" >
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item ><router-link to="/manage"><i class="el-icon-menu"></i>首页</router-link></el-menu-item>
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-document"></i>数据管理</template>
                <el-menu-item index="1-1"><router-link to="/user">用户列表</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/shop">商家列表</router-link></el-menu-item>
                <el-menu-item index="1-3"><router-link to="/food">食品列表</router-link></el-menu-item>
                <el-menu-item index="1-4"><router-link to="/order">订单列表</router-link></el-menu-item>
                <el-menu-item index="1-5"><router-link to="/manager">管理员列表</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-plus"></i>添加数据</template>
              <el-menu-item index="2-1"><router-link to="/addShop">添加商铺</router-link></el-menu-item>
              <el-menu-item index="2-2"><router-link to="/addItem">添加商品</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-s-data"></i>图表</template>
                <el-menu-item index="3-1"><router-link to="/userDistribution">用户分布</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"><i class="el-icon-edit"></i>编辑</template>
                <el-menu-item index="4-1"><router-link to="/edit">文本编辑</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title"><i class="el-icon-setting"></i>设置</template>
                <el-menu-item index="5-1"><router-link to="/setting">管理员设置</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title"><i class="el-icon-warning-outline"></i>说明</template>
                <el-menu-item index="6-1"><router-link to="/info">说明</router-link></el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
       
  <el-container class='aaa'>
    
    
    <el-main>
      <keep-alive>
          <router-view/>
      </keep-alive>
    </el-main>

  </el-container>
</el-container>
  </div>
</template>

<style scoped>
    .box {
      width: 100%;
      height: 100%;
    }
    .el-menu {
      height: 100%;
    }
    router-link {
      color: #fff;
    }
    .el-menu-item a{
      color: #fff;
    }
    li .is-active a{
      color: #ffd04b
    }

</style>

