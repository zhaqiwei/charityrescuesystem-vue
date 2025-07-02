<template>
    <div style="height: 100vh;display:flex; align-items:center;justify-content: center;background-color:	#FFFFF0  ">
      <div style="display:flex;background-color:		#FFFAFA;width:50%;border-radius: 20px;border: solid 1px #E0FFFF;overflow: hidden">
        <div style="flex:1">
          <img src="@/assets/shoubei.png" alt="" style="width:100%;height: 100%">
        </div>
        <div style="flex: 1;display:flex;align-items: center;justify-content: center">
          <el-form :model="user" style="width:80%" :rules="rules" ref="loginRef">
            <div style="font-size:20px;font-weight: bold;text-align: center;margin-bottom: 5px">登录账号</div>

            <el-form-item prop="username">
              <el-input  size="medium" placeholder="用户名" v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input  size="medium" show-password placeholder="密码" v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <div style="display:flex">
                <el-input style="flex:1 "  size="medium" placeholder="验证码" v-model="user.code"></el-input>
                <div style="flex:1 ;height:40px"><valid-code @update:value="getCode" /></div>
              </div>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" style="width:100%" @click="login">登录</el-button>

            </el-form-item>
            <div style="display: flex">
              <div style="flex:1"> <span style="color: darkgray">还没有账号?请</span><span style="color: #1a73e8;cursor: pointer" @click="$router.push('/register')">注册</span></div>

            </div>
          </el-form>
        </div>

      </div>
    </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import request from '@/utils/request'
import ValidCode from "@/components/ValidCode.vue";

export default {
  name: 'Login',
  components:{
    ValidCode
  },
  data() {
    //   校验验证码
    const validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else if(value.toLowerCase() !== this.code){
        callback(new Error('验证码错误'))
      }else{
        callback()
      }
    }

    return {
      code:'',
      user:{
        code:'',
        username: '',
        password: ''
      },
      rules:{
        username:[
          {required:true,message:'请输入账号',trigger:'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'}
        ],
        code:[
          {validator:validateCode,trigger:'blur'}
        ]
      }
    }
  },
  created(){

  },
  methods: {
    getCode(code){
      this.code=code.toLowerCase()
    },
    login(){
      this.$refs['loginRef'].validate((valid) => {
        if(valid){
          //验证通过
          request.post('/user/login',this.user).then(res => {
            if(res.code === '200'){
                this.$router.push('/')
                this.$message.success('登陆成功')
              //存储用户信息
                localStorage.setItem('honey-user',JSON.stringify(res.data))
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