<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <input class="ip" type="text">
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
.home
  padding-bottom 50vh
  border-bottom 100px solid red
.ip
  display block
  border 1px solid black
  height 30px
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
