<template>
  <div style="width: 80%;margin: 0 auto;">
    <span>选择食品种类</span>
    <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);padding: 10px;margin: 10px;margin-bottom: 40px;">
      <el-form ref="form" label-width="100px">
      <el-form-item label="店铺ID">
        <el-input v-model="restaurant_id" placeholder="请输入内容" style="width: 80%;"></el-input>
      </el-form-item>
      </el-form>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="添加食品种类" name="1">
          <el-form ref="form" label-width="100px">
                <el-form-item label="食品种类">
                  <el-select placeholder="请选择" style="width: 80%;" v-model="name1">
                    <el-option label="简餐便当" value="简餐便当"></el-option>
                    <el-option label="小吃炸串" value="小吃炸串"></el-option>
                    <el-option label="地方菜系" value="地方菜系"></el-option>
                    <el-option label="面食粥点" value="面食粥点"></el-option>
                    <el-option label="轻食西餐" value="轻食西餐"></el-option>
                    <el-option label="日韩料理" value="日韩料理"></el-option>
                    <el-option label="汉堡披萨" value="汉堡披萨"></el-option>
                    <el-option label="香锅冒菜" value="香锅冒菜"></el-option>
                    <el-option label="甜品甜点" value="甜品甜点"></el-option>
                    <el-option label="麻辣烫" value="麻辣烫"></el-option>
                    <el-option label="水果" value="水果"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="种类描述">
                  <el-input v-model="description" placeholder="请输入内容" style="width: 80%;"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" @click='check'>提交</el-button>
        </el-collapse-item>
    </el-collapse>
    </div>
    
    <span>添加食品</span>
    <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);padding: 10px;margin: 10px;">
      <el-form ref="form" label-width="100px" style="text-align: left;">
        <el-form-item label="食品名称" prop="name">
            <el-input v-model="name" placeholder="请输入内容" style="width: 90%;"></el-input>
        </el-form-item>
        <el-form-item label="食品活动" prop="activity">
            <el-input v-model="activity" placeholder="请输入内容" style="width: 90%;"></el-input>
        </el-form-item>
        <el-form-item label="食品详情" prop="description">
            <el-input v-model="description" placeholder="请输入内容" style="width: 90%;"></el-input>
        </el-form-item>
        <el-form-item label="上传食品图片" prop="image_path">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item label="食品特点" prop="attributes">
            <el-select placeholder="请选择" style="width: 40%;" v-model="attributes">
              <el-option label="新品" value="新"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="食品分类" prop="attributes">
            <el-select placeholder="请选择" style="width: 40%;" v-model="category_id">
              <el-option label="简餐便当" value="1"></el-option>
              <el-option label="小吃炸串" value="2"></el-option>
              <el-option label="地方菜系" value="3"></el-option>
              <el-option label="面食粥点" value="4"></el-option>
              <el-option label="轻食西餐" value="5"></el-option>
              <el-option label="日韩料理" value="6"></el-option>
              <el-option label="汉堡披萨" value="7"></el-option>
              <el-option label="香锅冒菜" value="8"></el-option>
              <el-option label="甜品甜点" value="9"></el-option>
              <el-option label="麻辣烫" value="10"></el-option>
              <el-option label="水果" value="11"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="食品规格">
          <template>
            <el-radio v-model="specs" label="单规格">单规格</el-radio>
            <el-radio v-model="specs" label="多规格">多规格</el-radio>
          </template>
        </el-form-item>
        <el-form-item label="包装费">
            <template>
              <el-input-number v-model="num" :min="0"></el-input-number>
            </template>
        </el-form-item>
        <el-form-item label="价格">
            <template>
              <el-input-number v-model="num2" :min="0"></el-input-number>
            </template>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click='check2'>确认添加食品</el-button>
    </div>
  </div>
</template>

<style scoped="scoped">
      .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
</style>

<script>
  import {addcategory} from '@/api/index.js'
  import {addfood} from '@/api/index.js'
  export default {
    data () {
      return {
        name1: '',
        description: '',
        restaurant_id: '',
        name: '',
        image_path: '',
        specs: '',
        activity: '',
        attributes: '',
        category_id: '',
        num: 1,
        num2: 1
      }
    },
    methods:{
      check(){
        let data = {
          name1: this.name1,
          description: this.description,
          restaurant_id: this.restaurant_id
        }
        addcategory(data).then(res=>{
          console.log(res)
        })
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
            
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      check2(){
        let data = {
          name: this.name,
          restaurant_id: this.restaurant_id,
          category_id: this.category_id,
          specs: [{specs: this.specs,packing_fee: 0,price: 20,}],
          activity: this.activity,
          description: this.description,
          image_path: this.imageUrl,
          attributes: [{value: '新',label: '新品'}]
        }
        addfood(data).then(res=>{
          console.log(res)
        })
      }     
    }
  }
</script>
