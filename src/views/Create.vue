<template lang="pug">
  .wrapper
    .flex-1
    .center
      .label 请输入TA的昵称
      input.input(
        @input="handleChange"
      )
      .btns(
        :class="{show: valid}"
      )
        .next(@click="handleNext") 完成
    .flex-1
</template>

<script>
export default {
  name: 'Create',
  data() {
    return {
      valid: false,
      value: '',
    }
  },
  methods: {
    handleNext() {
      if (this.valid) {
        this.$service.createTarget(this.value)
          .then(res => {
            this.$router.push('bind')
          })
          .catch(e => {
            this.$router.push('bind')
          })
      }
    },
    handleChange(e) {
      const val = e.target.value

      if (val) {
        this.valid = true
        this.value = val
      } else {
        this.valid = false
      }
      // console.log(val)
    }
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
    opacity 0
    transition opacity .3s $TIMING
    &.show
      opacity 1
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
