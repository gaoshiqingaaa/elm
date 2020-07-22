<template>
  <div>
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
            <el-button  @click="showUpdateDialog(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="deleteFood(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 弹出对话框 -->
      <el-dialog title="修改食品信息" :visible.sync="dialogFormVisible">
        <el-dialog
            width="30%"
            title="添加规格"
            :visible.sync="innerVisible"
            append-to-body>
            <el-form :model="temp">  
                  <el-form-item label="规格" :label-width="formLabelWidth">
                      <el-input v-model="temp.specs" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="包装费" :label-width="formLabelWidth">
                      <el-input v-model="temp.packing_fee" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="价格" :label-width="formLabelWidth">
                      <el-input v-model="temp.price" autocomplete="off"></el-input>
                  </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="innerVisible = false">取 消</el-button>
              <el-button type="primary" @click="addSpec">确 定</el-button>
            </div>
        </el-dialog>
        <el-form :model="form">
          <el-form-item label="食品名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="食品介绍" :label-width="formLabelWidth">
            <el-input v-model="form.description" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="食品分类" :label-width="formLabelWidth">
            <el-select v-model="form.category_id" placeholder="请选择">
              <el-option label="区域一" value="9443"></el-option>
              <el-option label="区域二" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="食品图片" :label-width="formLabelWidth">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="form.image_path" :src="form.image_path" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <template>
            <el-table
              :data="form.specfoods"
              stripe
              style="width: 100%">
              <el-table-column
                prop="specs"
                label="规格"
                width="180">
              </el-table-column>
              <el-table-column
                prop="packing_fee"
                label="包装费"
                width="180">
              </el-table-column>
              <el-table-column
                prop="price"
                label="价格">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作">
              </el-table-column>
            </el-table>
          </template>
          <el-button style="margin-top:30px;" type="primary" @click="innerVisible = true">添加规格</el-button>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="updateFood">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
var specfoods = [
  {
    specs: '11',
          packing_fee: '11',
          price: '11'
  }
]
import {foodList, deleteItem, updateItem} from '@/api/index'
// import {getCookie} from '@/utils/cookie'
  export default {
    data() {
      return {
        tableData: [],
        params: {
            limit: 20,
            offset: 0,
            restaurant_id: 1
        },
        // dialogTableVisible: false,
        innerVisible: false,
        dialogFormVisible: false,
        temp: {
          specs: '',
          packing_fee: '',
          price: ''
        },
        form: {
          item_id: '',
          name: '',
          description: '',
          image_path: '',
          restaurant_id: '',
          category_id: '',
          specfoods: specfoods
        },
        formLabelWidth: '120px',
        message: '',
        type: ''
      };
    },mounted(){
        this.getList();
    },
    methods: {
        getList() {
            foodList(this.params.limit, this.params.offset, this.params.restaurant_id).then(res=>{
                this.tableData = res.data
                // console.log(res)
            })
        },
        handleAvatarSuccess(res, file) {
            this.form.image_path = URL.createObjectURL(file.raw);
            console.log(this.form.image_path);
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
        deleteFood(row){
          // console.log(row);
          deleteItem(row.specfoods[0].food_id).then(res=>{
              // console.log(getCookie('SID')); 
              console.log(res);
              if (res.data.status == 1) {
                  this.type = 'success'
              } else {
                  this.type = 'error'
              }
              this.$message({
                  message: res.data.message,
                  type: this.type
              });
          })
        },
        showUpdateDialog(row) {
          console.log(row);
            this.form.item_id = row.specfoods[0].food_id
            this.form.restaurant_id = row.restaurant_id
            this.dialogFormVisible = true
        },
        updateFood() {
            this.dialogFormVisible = false
            console.log('更新商品：');
            console.log(this.form);
            updateItem(this.form).then(res=>{
              if (res.data.status == 1) {
                  this.type = 'success'
              } else {
                  this.type = 'error'
              }
              this.$message({
                  message: res.data.message,
                  type: this.type
              });
              console.log(res);
            })
        },
        addSpec(){
            this.innerVisible = false
            specfoods[specfoods.length] = {
                specs: this.temp.specs,
                packing_fee: this.temp.packing_fee,
                price: this.temp.price
            } 
            console.log(this.form.specfoods);
            this.temp.specs = ''
            this.temp.packing_fee = ''
            this.temp.price = ''
        }
    }
  }
</script>

<style>
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
    width: 130px;
    height: 130px;
    line-height: 130px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>