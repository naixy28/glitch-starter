<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js 4" @click.native="click"/>
    <div class="bottom-input">
      <input type="text">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    click() {
      if (confirm('sure to reload?')) {
        window.location.reload(true)
      }
    }
  },
}
</script>

<style lang="stylus" scoped>
.bottom-input
  position fixed
  bottom 0
  left 0
  width 100%
  height 60px
  background grey
  display flex
  flex-flow row nowrap
  align-items center
  justify-content space-between
  input
    margin 0 10px
    height 50%
    flex 1
</style>
