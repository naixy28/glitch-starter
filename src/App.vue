<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<style lang="stylus">
#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  min-height 100vh
  background-size 100%
  user-select none
  -moz-user-select none
  -webkit-user-select none
*
  -webkit-box-sizing border-box
  -moz-box-sizing border-box
  box-sizing border-box
  -webkit-tap-highlight-color transparent
  touch-callout none
  -webkit-touch-callout none

body
  margin 0
  background $BLUE
  font-size 16px
  font-family -apple-system, SF UI Text, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, "Helvetica Neue", Helvetica, Arial, sans-serif
  color #404040

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
