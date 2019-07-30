<template lang="pug">
  .wrapper
    .inner-wrapper
      .top
        .tool
          fa(class="setting" icon="cog" :style="{color: 'white'}")
        .user
          img.avatar
          .nickname
            .name {{'YY.Ryan'}}
            fa.gender(:icon="'mars'" :class="{male: true}")
          .desc {{'asdfhjkasdhfjklhasjkldhf adshflk'}}
          .tags
            tag(k="微博" v="YYYY")
            tag(k="豆瓣" v="YYYY")
            tag(k="云音乐" v="YYYY")
      .mid
        fa(v-show="chats.length <= 0" class="sp" icon="spinner" :style="{ color: 'white'}")
        //- chat.chat
        //- chat.chat
        //- chat.chat
        //- chat.chat
    chat-bar.bottom-bar(
      @message="handleMessage"
    )
</template>

<script>
import Tag from '../components/Tag'
import ChatBar from '../components/ChatBar'
import Chat from '../components/Chat'

export default {
  name: 'Main',
  components: {
    Tag,
    ChatBar,
    Chat,
  },
  data() {
    return {
      timer: undefined,
      fetching: false,
      chats: [],
    }
  },
  methods: {
    handleMessage({ value, res, rej } = {}) {
      setTimeout(() => {
        res()
      }, 1000)
    },
    fetch() {
      console.log('fetch once')
      this.$service.fetchList()
        .then(res => {
          console.log(res.data.data)
        })
        .catch(e => {
          this.$toast(e, 2000, 'none')
        })
    },
    init() {
      this.$service.fetchTarget()
        .then(res => {
          console.log('profile:', res.data)
        })
    },
  },
  mounted() {
    this.init()
    this.fetch()
    this.timer = setInterval(() => {
      if (!this.fetching) {
        this.fetch()
      }
    }, 5000)
    // this.$service.fetchList()
    //   .then(res => {
    //     debugger
    //   })
    //   .catch(e => {
    //     debugger
    //   })
  },
  destroyed() {
    clearInterval(this.timer)
  },
}
</script>

<style lang="stylus" scoped>
.wrapper
  height 100vh
  background url(../assets/main-bg2.jpg), $DARK_BLUE
  background-size 100%
  background-repeat no-repeat
  background-position-y -70px
  display flex
  flex-flow column nowrap
  .inner-wrapper
    display flex
    flex-flow column nowrap
    flex 1
  .top
    flex 0 0 auto
    padding 0 15px
    .tool
      height 50px
      padding-top 44px
      display flex
      flex-flow row nowrap
      justify-content flex-end
      align-items center
      .setting
        width 22px
        height 22px
    .user
      margin-top 30px
      .avatar
        width 100px
        height 100px
        background grey
        border-radius 100px
        margin-bottom 5px
      .nickname
        color #fff
        display flex
        align-items center
        .name
          font-size 22px
          font-weight 500
        .gender
          margin-left 10px
          &.female
            color #F459C4
          &.male
            color #6772FF
      .desc
        color #fff
        font-size 16px
  .mid
    flex 1
    background $GREY2
    border-radius 8px
    margin 15px 0 0
    padding-bottom 75px
    overflow auto
    -webkit-overflow-scrolling touch
    .sp
      display block
      margin 200px auto
      font-size 25px
      animation-name rotate
      animation-duration .5s
      animation-timing-function ease-in-out
      animation-iteration-count infinite
      animation-direction normal
.bar
  position fixed
  bottom 0
  left 0
</style>
