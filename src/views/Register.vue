<template>
    <div style="height: 100vh;display:flex; align-items:center;justify-content: center;background-color:	#FFFFF0 ">
      <div style="display:flex;background-color:		#FFFAFA;width:50%;border-radius: 20px;border: solid 1px #E0FFFF;overflow: hidden">
        <div style="flex:1">
          <img src="@/assets/shoubei.png" alt="" style="width:100%;height: 100%">
        </div>
        <div style="flex: 1;display:flex;align-items: center;justify-content: center">
          <el-form :model="user" style="width:80%" :rules="rules" ref="registerRef">
            <div style="font-size:20px;font-weight: bold;text-align: center;margin-bottom: 5px">注册账号</div>

            <el-form-item prop="username">
              <el-input  size="medium" placeholder="用户名" v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input  size="medium" show-password placeholder="密码" v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item prop="confirmPass">
              <el-input  size="medium" show-password placeholder="请确认密码" v-model="user.confirmPass"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="success" style="width:100%" @click="register">注册</el-button>

            </el-form-item>
            <div style="display: flex">
              <div style="flex:1"> <span style="color: darkgray">已有账号?请</span><span style="color: #1a73e8;cursor: pointer" @click="$router.push('/login')">登录</span></div>
            </div>
          </el-form>
        </div>

      </div>
    </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import request from '@/utils/request'


export default {
  name: 'Register',

  data() {
    //   校验验证码
    const validatePassword = (rule, confirmPass, callback) => {
      if (confirmPass === '') {
        callback(new Error('请输入密码'))
      } else if(confirmPass !== this.user.password){
        callback(new Error('两次输入的密码不一致'))
      }else{
        callback()
      }
    }

    return {
      user:{
        username: '',
        password: '',
        confirmPass:''
      },
      rules:{
        username:[
          {required:true,message:'请输入账号',trigger:'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'}
        ],
        confirmPass:[
          {validator:validatePassword,trigger:'blur'}
        ]
      }
    }
  },
  created(){

  },
  methods: {
    register(){
      this.$refs['registerRef'].validate((valid) => {
        if(valid){
          //验证通过
          request.post('/user/register',this.user).then(res => {
            if(res.code === '200'){
                this.$router.push('/login')
                this.$message.success('注册成功')

            }else{
              this.$message.error(res.msg)
            }
          })
        }
      })
    }
  }
}
</script>


<style scoped>

</style>