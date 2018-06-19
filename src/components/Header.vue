<template>
  <div class="header">
    <el-switch v-model="collapse" active-color="rgb(50, 65, 87)" inactive-color="#666" disabled>
    </el-switch>
    <div class="icon" @click="change"><img src="../assets/logo.png"></div>
    <div class="user">
      <img :src="URL" @click="handleFullScreen">
    </div>
  </div>
</template>
<script>
//引入bus
import bus from './bus';
export default {
  data() {
    return {
      fullscreen: false,
      collapse: true,
      URL: "http://q2.qlogo.cn/headimg_dl?bs=qq&dst_uin=" + this.QQ + "&src_uin=2685618862&fid=2685618862&spec=100&url_enc=0&referer=bu_interface&term_type=PC"
    }
  },
  beforeCreate() {//在data创建之前赋值
    this.QQ = localStorage.getItem("QQ")
  },
  methods: {
    change() {
      this.collapse = !this.collapse;
      bus.$emit('collapse', this.collapse);
    },
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    }
  }
}
</script>

<style>
.header {
  width: 100%;
  height: 60px;
  background: #242f42;
  line-height: 60px;
  color: #fff;
}

.header .icon {
  cursor: pointer;
  padding: 0 20px;
  line-height: 60px;
  transition: 1s;
}

.header .icon img {
  vertical-align: middle;
}

.header .icon:hover {
  background: rgb(50, 65, 87);
}

.header .icon {
  float: left;
  font-size: 20px;
}

.header .user {
  float: right;
}

.header .user img {
  margin: 0 20px;
  width: 45px;
  vertical-align: middle;
  border-radius: 50%;
  border: 2px solid #fff;
}
</style>
