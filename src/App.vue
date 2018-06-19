<template>
  <router-view>
  </router-view>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.$store.dispatch('getInfo', 'hcc')
    this.$store.dispatch('getList', '123')
  }
}
</script>

<style>
@import './../static/css/reset.css';
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
