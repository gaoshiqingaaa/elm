<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="user_name"
      label="姓名"
      width="300">
    </el-table-column>
    <el-table-column
      prop="create_time"
      label="注册日期"
      width="300">
    </el-table-column>
    <el-table-column
      prop="city"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="admin"
      label="权限"
      width="300">
    </el-table-column>
    
  </el-table>
</template>

<script>
import {managerList} from '@/api/index'
  export default {
    data() {
      return {
        tableData: [],
        params: {
            limit: 20,
            offset: 0,
        }
      };
    },mounted(){
        this.getList();
    },
    methods: {
        getList() {
            managerList(this.params).then(res=>{
                this.tableData = res.data.data
                console.log(res)
            })
        }
    }
  }
</script>