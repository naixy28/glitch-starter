<template lang="pug">
  .wrapper
    .flex-1
    .center
      .label 输入观察对象的昵称
      input.input(
        @input="handleChange"
      )
      .btns(
        :class="{show: valid}"
      )
        .next(@click="handleNext")
          fa(v-if="sending" class="sp" icon="spinner" :style="{ color: '#6A7A9E'}")
          span(v-else) 完成
    .flex-1
</template>

<script>
export default {
  name: 'Create',
  data() {
    return {
      valid: false,
      value: '',
      sending: false,
    }
  },
  methods: {
    handleNext() {
      if (this.valid && !this.sending) {
        this.sending = true
        this.$service.createTarget(this.value)
          .then(res => {
            this.sending = false
            this.$router.push('bind')
          })
          .catch(e => {
            this.sending = false
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
.sp
  animation-name rotate
  animation-duration .5s
  animation-timing-function ease-in-out
  animation-iteration-count infinite
  animation-direction normal
.wrapper
  height 100vh
  background url(../assets/common-bg.jpg), $BLUE
  background-size cover
  background-repeat no-repeat
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
