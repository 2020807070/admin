<template>
  <div class="loginWrap">
    <video autoplay loop preload="auto" style="" id="video">
      <source src="http://7vzpd7.com1.z0.glb.clouddn.com/Alan%20Walker%20-%20Hymn%20For%20The%20Weekend%20%5BRemix%5D.mp4">
    </video>
    <div class="loginBox">
      <el-card class="box-card">
        <el-form label-position="top" label-width="80px" :model="formLabelAlign">
          <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.username" placeholder="admin"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="formLabelAlign.password" placeholder="admin"></el-input>
          </el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          {{message}}
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      QQ: 2020807070,
      message: "",
      formLabelAlign: {
        username: '',
        password: ''
      }
    }
  },
  mounted() {

  },
  watch: {
    // '$store.state.Verification'(newval) {
    //   console.log(newval)
    // }
  },
  methods: {
    login() {
      this.$fetch.post('http://localhost:9000/login', this.formLabelAlign)
        .then(res => {
          if (res.code == 2) {
            document.cookie = "token=" + res.token;
            this.$router.push("/home")
          } else {
            this.message = res.msg
          }
        })
    },
    tourist() {
      this.$router.push('/home')
      localStorage.setItem('QQ', this.QQ)
    }
  }
}
</script>

<style>
#video source {
  width: 100%;
  height: 100%;
}

.loginWrap {
  background-color: rgb(50, 65, 87);
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

video {
  opacity: 0;
}

.box-card {
  background-color: rgba(255, 255, 255, 1);
}









/* .el-form-item__label{
  color:#fff;
} */

.loginBox {
  padding: 20px 10px;
  background: rgba(255, 255, 255, 0);
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 500px;
}

.el-button {
  width: 100%;
}
</style>
