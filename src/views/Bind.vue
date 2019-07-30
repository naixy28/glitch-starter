<template lang="pug">
  .wrapper
    .flex-1
    .center
      .icons
        img.icon-1(
          src="../assets/icon-wb.png"
          :class="{active: wbEnabled}"
        )
        img.icon-2(
          src="../assets/icon-nm.png"
          :class="{active: nmEnabled}"
        )
        img.icon-3(
          src="../assets/icon-db.png"
          :class="{active: dbEnabled}"
        )
      .input-area
        .label 绑定TA的社交网络账号
        input.input(
          :placeholder="placeholder"
          ref="input"
          @input="handleChange"
        )
        fa(v-if="loading" class="sp" icon="spinner" :style="{ color: '#6A7A9E'}")
      .btns
        .next(@click="handleBind") 绑定
        .next(@click="handleNext") 完成
    .flex-1
</template>

<script>
export default {
  name: 'Bind',
  data() {
    return {
      enabled: [], // 'Weibo' | 'Douban' | 'NeteaseMusic'
      value: '',
      placeholder: '复制链接到此处',
      loading: false,
    }
  },
  computed: {
    wbEnabled() {
      return this.enabled.indexOf('Weibo') >= 0
    },
    nmEnabled() {
      return this.enabled.indexOf('NeteaseMusic') >= 0
    },
    dbEnabled() {
      return this.enabled.indexOf('Douban') >= 0
    },
  },
  methods: {
    handleChange(e) {
      const val = e.target.value

      if (val) {
        this.valid = true
        this.value = val
      } else {
        this.valid = false
      }
    },
    handleBind() {
      this.loading = true
      this.$service.bind(this.value)
        .then(res => {
          this.enabled = res.data.updateSources.map(e => e.external)
          this.value = ''
          this.loading = false
          this.$refs.input.value = ''
        })
        .catch(() => {
          // setTimeout(() => {
          //   this.value = ''
          //   this.enabled = ['Weibo', 'Douban', 'NeteaseMusic']
          //   this.loading = false
          //   this.$refs.input.value = ''
          // }, 1000)
        })
    },
    handleNext() {
      this.$router.push('main')
    },
  },
  mounted() {
    // setTimeout(() => {
    //   this.enabled.push('Weibo')
    // }, 2000)
  },
}
</script>

<style lang="stylus" scoped>
.wrapper
  height 100vh
  display flex
  flex-flow column nowrap
  justify-content center
  align-items center
  background url(../assets/common-bg.jpg), $BLUE
  background-size cover
  background-repeat no-repeat
  .center
    text-align center
    .icons
      img
        transition all .3s $TIMING
        filter grayscale(100%)
        opacity .7
        width 60px
        height 60px
        margin 0 10px
      .active
        filter grayscale(0%)
        opacity 1
    .input-area
      margin-top 60px
      position relative
    .label
      color $GREY1
      font-weight 500
      font-size 18px
    .input
      width 264px
    .sp
      position absolute
      bottom 12px
      right 10px
      animation-name rotate
      animation-duration .5s
      animation-timing-function ease-in-out
      animation-iteration-count infinite
      animation-direction normal
    .btns
      margin-top 64px
    .next
      margin 0 auto 10px
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
