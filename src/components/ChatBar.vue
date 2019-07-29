<template lang="pug">
  .bar
    transition(
      name="fade"
    )
      .list(v-show="showMenu")
        .item
          fa(icon="id-badge" :style="{color: 'white'}")
        .item
          fa(icon="search-plus" :style="{color: 'white'}")
        .item
          fa(icon="store" :style="{color: 'white'}")
        .item
          fa(icon="rocket" :style="{color: 'white'}")
    fa.menu(
      icon="bars"
      :style="{color: 'white'}"
      @click="handleToggleMenu"
    )
    input.input(
      v-model="value"
      :placeholder="pl"
    )
    .send(@click="send")
      fa(v-if="sending" class="sp" icon="spinner" :style="{ color: '#6A7A9E'}")
      span(v-else) 发送
</template>
<script>
export default {
  name: 'ChatBar',
  data() {
    return {
      value: '',
      promise: null,
      sending: false,
      pl: '',
      showMenu: false,
      // resolve: null,
      // reject: null,
    }
  },
  methods: {
    handleToggleMenu() {
      this.showMenu = !this.showMenu
    },
    send() {
      if (this.value && !this.sending) {
        let res
        let rej
        this.sending = true
        this.p = new Promise((resolve, reject) => {
          res = resolve
          rej = reject
        })
          .then(() => {
            this.sending = false
            this.value = ''
          })
          .catch(() => {
            this.sending = false
            this.value = ''
          })

        console.log('msg:', this.value)
        this.$emit('message', {
          value: this.value,
          res,
          rej,
        })
      }
    },
  },
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
  position relative
  .menu
    margin-right 10px
  .list
    background rgba(0, 0, 0, .6)
    position absolute
    left 10px
    top -45px
    height 45px
    display flex
    flex-flow row nowrap
    align-items center
    border-radius 7px
    overflow hidden
    .item
      color white
      width 45px
      text-align center
      & > *
        width 22px
        height 22px
  .input
    opacity 1
    margin 0
    background #fff
    height 30px
    border-radius 10px
    flex 1
    font-size 16px
    line-height 30px
  .send
    color #fff
    padding 0 10px
    width 55px
    text-align center
  .sp
    animation-name rotate
    animation-duration .5s
    animation-timing-function ease-in-out
    animation-iteration-count infinite
    animation-direction normal
</style>
