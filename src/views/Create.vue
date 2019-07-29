<template lang="pug">
  .wrapper
    .flex-1
    .center
      .label 请输入TA的昵称
      input.input
      .btns
        .next(@click="handleNext") 完成
    .flex-1
</template>

<script>
export default {
  name: 'Create',
  methods: {
    handleNext() {
      this.$router.push('bind')
    },
  },
}
</script>

<style lang="stylus" scoped>
.wrapper
  height 100vh
  background-color $BLUE
  display flex
  flex-flow column nowrap
  justify-content center
  align-items center
  .center
    margin-top -50px
    height 80px
    flex 0 0 80px
    color $GREY1
    font-weight 500
    font-size 18px
    text-align center
  .input
    width 215px
  .btns
      margin-top 64px
    .next
      margin 0 auto
      opacity .7
      font-weight 500
      color $BLUE
      width 100px
      height 35px
      text-align center
      background #fff
      border-radius 100px
      font-size 16px
      line-height 35px
</style>
