<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="食品名称"
      width="450">
    </el-table-column>
    <el-table-column
      prop="description"
      label="食品介绍"
      width="450">
    </el-table-column>
    <el-table-column
      prop="rating"
      label="评分"
      width="200">
    </el-table-column>
     <el-table-column
      fixed="right"
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
    
  </el-table>
</template>

<script>
import {foodList} from '@/api/index'
  export default {
    data() {
      return {
        tableData: [],
        params: {
            limit: 20,
            offset: 0,
            restaurant_id: 2
        }
      };
    },mounted(){
        this.getList();
    },
    methods: {
        getList() {
            foodList(this.params.limit, this.params.offset, this.params.restaurant_id).then(res=>{
                this.tableData = res.data
                console.log(res)
            })
        }
    }
  }
</script>