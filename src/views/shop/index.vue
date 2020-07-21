<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="店铺名称"
      width="250">
    </el-table-column>
    <el-table-column
      prop="address"
      label="店铺地址"
      width="500">
    </el-table-column>
    <el-table-column
      prop="category"
      label="店铺介绍"
      width="300">
    </el-table-column>
     <el-table-column
      fixed="right"
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">添加食品</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {shopList} from '@/api/index'
  export default {
    data() {
      return {
        tableData: [],
        params: {
            latitude: 31.22967,
            longitude: 121.4762
        }
      };
    },mounted(){
        this.getList();
    },
    methods: {
        getList() {
            shopList(this.params).then(res=>{
                this.tableData = res.data
                console.log(res)
            })
        }
    }
  }
</script>