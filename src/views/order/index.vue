<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="id"
      label="订单ID"
      width="500">
    </el-table-column>
    <el-table-column
      prop="total_amount"
      label="总价格"
      width="500">
    </el-table-column>
    <el-table-column
      prop="status_bar.title"
      label="订单状态">
    </el-table-column>
  </el-table>
</template>

<script>
import {orderList} from '@/api/index'
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
            orderList(this.params).then(res=>{
                this.tableData = res.data
                console.log(res)
            })
        }
    }
  }
</script>