<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="id"
      label="ID"
      width="230">
    </el-table-column>
    <el-table-column
      prop="registe_time"
      label="注册日期"
      width="230">
    </el-table-column>
    <el-table-column
      prop="username"
      label="用户名"
      width="230">
    </el-table-column>
    <el-table-column
      prop="city"
      label="注册地址"
      width="210">
    </el-table-column>
    
  </el-table>
</template>

<script>
import {userList} from '@/api/index'
  export default {
    data() {
      return {
        tableData:[],
        
          limit:20,
          offset:0
      ,
        count:0,
        currentPage:1,  
      };
    },
    mounted(){
      this.getList();
    },
    methods:{
      getList(){
        userList(this.offset,this.limit).then(res=>{
          this.tableData = res.data
          console.log(res)
        })
      }
    }
  }
</script>
