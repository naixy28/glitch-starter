<template lang="pug">
  .bar
    fa.menu(icon="bars" :style="{color: 'white'}")
    input.input
    .send 发送
</template>
<script>
export default {
  name: 'ChatBar',
}
</script>

<style lang="stylus" scoped>
.bar
  height 60px
  width 100vw
  background $GREY2
  display flex
  flex-flow row nowrap
  align-items center
  justify-content space-between
  padding 0 15px
  .menu
    margin-right 10px
  .input
    opacity 1
    margin 0
    background #fff
    height 30px
    border-radius 10px
    flex 1
  .send
    color #fff
    padding 0 10px
</style>
