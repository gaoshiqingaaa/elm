<template>
  <el-table 
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="registe_time"
      label="注册日期"
      width="450">
    </el-table-column>
    <el-table-column
      prop="username"
      label="用户姓名"
      width="450">
    </el-table-column>
    <el-table-column
      prop="city"
      label="注册地址">
    </el-table-column>
  </el-table>
</template>

<script>
import {userList} from '@/api/index'
  export default {
    data() {
      return {
        tableData: [],
        params: {
            limit: 20,
            offset: 0
        }
      };
    },mounted(){
        this.getList();
    },
    methods: {
        getList() {
            userList(this.params).then(res=>{
                this.tableData = res.data
                console.log(res)
            })
        }
    }
  }
</script>