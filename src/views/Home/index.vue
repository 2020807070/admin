<template>
  <div class="Wrapper">
    <Header></Header>
    <Aside></Aside>
    <div class="container" :class="{'content-collapse':isCollapse}">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from './../../components/Header.vue';
import Aside from './../../components/Aside.vue';
import bus from '../../components/bus';
export default {
  data() {
    return {
      isCollapse: true
    }
  },
  components: {
    Header,
    Aside
  },
  beforeCreate() {
    function getCookie(name) {
      var strcookie = document.cookie;//获取cookie字符串
      var arrcookie = strcookie.split("; ");//分割
      //遍历匹配
      for (var i = 0; i < arrcookie.length; i++) {
        var arr = arrcookie[i].split("=");
        if (arr[0] == name) {
          return arr[1];
        }
      }
      return "";
    }
    // getCookie("token").length < 0 ? null : this.$router.push("/")
  },
  created() {
    bus.$on('collapse', collapse => {
      this.isCollapse = collapse;
    })
  }
}
</script>

<style>
.container {
  overflow-x: hidden;
  background: none repeat scroll 0 0 #f0f0f0;
  position: absolute;
  left: 250px;
  right: 0;
  bottom: 0;
  top: 60px;
  bottom: 0;
  width: auto;
  padding: 40px;
  box-sizing: border-box;
  overflow-y: scroll;
  transition: left .3s ease-in-out;
}

.slide-fade {
  position: absolute;
  left: 0;
  right: 0;
}

.slide-fade-enter-active {
  transition: all 1.2s ease;
}

.slide-fade-leave-active {

  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
  left: 0;
  right: 0;
  transform: translateX(50px);
  opacity: 0;
}

.el-main {
  background: #fff;
  border-radius: 5px;
}

.content-collapse {
  left: 64px;
}
</style>
