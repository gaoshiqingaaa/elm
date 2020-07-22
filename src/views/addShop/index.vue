<template>
    <div>
        <el-form label-width="100px" class="">
            <el-form-item label="店铺名称" prop="name" required>
                <el-input v-model="name"></el-input>
            </el-form-item>         
            <el-form-item label="详细地址" prop="addr" required>
                <el-input v-model="addr"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" prop="phone" required>
                <el-input v-model="phone"></el-input>
            </el-form-item>
            <el-form-item label="店铺简介" prop="intro">
                <el-input v-model="intro"></el-input>
            </el-form-item>
            <el-form-item label="店铺标语" prop="slogan">
                <el-input v-model="slogan"></el-input>
            </el-form-item>
            <el-form-item label="店铺分类" prop="sort">
                <el-select v-model="sort" placeholder="请选择店铺分类">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="店铺特点" prop="character">
                <el-switch
                    style="padding-right: 20px;"
                    v-model="guarantee"
                    inactive-text="按年付费">
                </el-switch>
                <el-switch
                    style="padding-right: 20px;"
                    v-model="delivery"
                    inactive-text="蜂鸟专送">
                </el-switch>
                <el-switch
                    style="padding-right: 20px;"
                    v-model="news"
                    inactive-text="新开店铺">
                </el-switch>
                <br>
                <el-switch
                    style="padding-right: 20px;"
                    v-model="insurance"
                    inactive-text="外卖保">
                </el-switch>
                <el-switch
                    style="padding-right: 20px;"
                    v-model="ontime"
                    inactive-text="准时达">
                </el-switch>
                <el-switch
                    style="padding-right: 20px;"
                    v-model="invoice"
                    inactive-text="开发票">
                </el-switch>
            </el-form-item>
            <el-form-item label="配送费" prop="deliveryFee">
                <el-input-number v-model="deliveryFee" :min="0" label="描述文字"></el-input-number>
            </el-form-item>
            <el-form-item label="起送价" prop="startingPrice">
                <el-input-number v-model="startingPrice" :min="0" label="描述文字"></el-input-number>
            </el-form-item>
            <el-form-item label="营业时间">
                <el-col :span="11">
                <el-form-item prop="startDate">
                    <el-date-picker type="date" placeholder="起始时间" v-model="startDate" style="width: 100%;"></el-date-picker>
                </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                <el-form-item prop="endDate">
                    <el-time-picker placeholder="结束时间" v-model="endDate" style="width: 100%;"></el-time-picker>
                </el-form-item>
                </el-col>
            </el-form-item>
            
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          name: '',
          addr: '',
          phone: '',
          intro: '',
          slogan: '',
          sort: '',
          guarantee: '',
          delivery: '',
          news: '',
          insurance: '',
          ontime: '',
          invoice: '',
          deliveryFee: '',
          startingPrice: '',
          startDate: '',
          endDate: '',
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>
    .el-form-item {
        width: 40%;
    }
</style>