<template>
    <div>
        <el-form ref="form" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="pass">
                <el-input type="text" v-model="user_name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
                <el-input type="password" v-model="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="check">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {login} from '@/api/index'
// import {setCookie} from '@/utils/cookie'
export default {
    data() {
        return {           
            user_name: '',
            password: '',
        }
    },
    methods:{
        check(){
            let data= {
                user_name: this.user_name,
                password: this.password
            }
            login(data).then(res=>{
                console.log(res)
                if (res.data.status == 1)
                {
                    // setCookie('SID', this.user_name, 7)
                    this.$router.push('/manage')
                }
            })
        }
    }
}
</script>

<style>
    .demo-ruleForm {
        width: 20%;
        margin: 0 auto;
        margin-top: 200px;
    }
</style>