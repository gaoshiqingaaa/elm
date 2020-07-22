<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="name"
      label="店铺名称"
      width="200%">
    </el-table-column>
    <el-table-column
      prop="address"
      label="店铺地址"
      width="200%">
    </el-table-column>
    <el-table-column
      prop="category"
      label="店铺介绍"
      width="180%">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="300%">
      <template slot-scope="scope">
        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button> -->
        <!-- <el-row> -->
        <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
        <el-button @click="handleClick(scope.row)" size="small">添加食品</el-button>
        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="danger" size="small">删除</el-button>
<!-- </el-row> -->
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {shoppingList} from '@/api/index'
  export default {
    data() {
      return {
        tableData: [],
        latitude:31.22967,
        longitude:121.4762
        
      };
    },
     mounted(){
      this.getList();
      
    },
    methods:{
      getList(){
        shoppingList(this.latitude,this.longitude).then(res=>{
          this.tableData = res.data
          console.log(res)
        })
      },
      open() {
        this.$alert('删除后不可恢复，确定吗？', '警告', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
          
        });
      
      },
      deleteRow(index, rows) {
          rows.splice(index, 1);  
          }
    }
  }
</script>
