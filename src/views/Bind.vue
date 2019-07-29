<template lang="pug">
  .wrapper
    .flex-1
    .center
      .icons
        img.icon-1
        img.icon-2
        img.icon-3
      .input-area
        .label 绑定TA的社交网络账号
        input.input(
          placeholder="复制链接到此处"
        )
      .btns
        .next 完成
    .flex-1
</template>

<script>
export default {
  name: 'Bind',
}
</script>

<style lang="stylus" scoped>
.wrapper
  height 100vh
  display flex
  flex-flow column nowrap
  justify-content center
  align-items center
  .center
    text-align center
    .icons
      img
        width 60px
        height 60px
        background red
        margin 0 10px
    .input-area
      margin-top 60px
    .label
      color $GREY1
      font-weight 500
      font-size 18px
    .input
      width 264px
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
