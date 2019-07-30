<template lang="pug">
  .wrapper
    .inner-wrapper
      .top
        .tool
          fa(class="setting" icon="cog" :style="{color: 'white'}")
        .user
          img.avatar(:src="profile.avatarUrl")
          .nickname
            .name {{profile.name}}
            fa.gender(:icon="'mars'" :class="{male: true}")
          .desc {{'有0个人和你一样在看他'}}
          .tags(v-if="sources.length")
            tag(v-for="s in sources" :k="s.key" :v="s.value")
      .mid(ref="scrollList")
        fa(v-show="chats.length <= 0" class="sp" icon="spinner" :style="{ color: 'white'}")
        template(v-show="chats.length")
          chat.chat(
            v-for="(chat, i) in chats"
            :key="chat.id"
            :chat="chat"
          )
    chat-bar.bottom-bar(
      @message="handleMessage"
    )
</template>

<script>
import Tag from '../components/Tag'
import ChatBar from '../components/ChatBar'
import Chat from '../components/Chat'
const sourceMap = {
  Weibo: '微博',
  Douban: '豆瓣',
  NeteaseMusic: '云音乐',
}

const animete = ({ duration, draw, easing }) => {
  let start

  const calculateStep = (time) => {
    let percent
    if (!start) {
      start = time
      percent = 0
    } else if (time - start >= duration) {
      percent = 1
    } else {
      percent = Math.max(0, easing((time - start) / duration))
    }

    if (percent >= 1) {
      draw(1)
    } else {
      draw(percent)
      requestAnimationFrame(calculateStep)
    }
  }

  requestAnimationFrame(calculateStep)
}

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
      profile: {},
      sources: [],
    }
  },
  methods: {
    handleMessage({ value, res: resolve, rej } = {}) {
      this.$service.postDiary(value)
        .then(res => {
          console.log(res)
          resolve()

          this.fetch(true)
        })
        .catch(e => {
          rej()
          this.$toast(e, 2000, 'none')
        })
    },
    fetch(shouldScroll = false) {
      console.log('fetch once')
      this.$service.fetchList()
        .then(res => {
          let needScroll = false
          if (res.data.data && res.data.data.length) {
            needScroll = shouldScroll && this.chats.length !== res.data.data.length
            this.chats = res.data.data.reverse()
          }
          if (needScroll) {
            this.$nextTick(() => {
              animete({
                draw: (() => {
                  const el = this.$refs.scrollList
                  const currScrollTop = el.scrollTop
                  const targetScrollTop = el.scrollHeight - el.getBoundingClientRect().height
                  const delta = Math.max(targetScrollTop - currScrollTop, 0)
                  return percent => {
                    el.scrollTo(0, currScrollTop + delta * percent)
                  }
                })(),
                duration: 1000,
                easing: x => x * x,
              })
            })
          }
        })
        .catch(e => {
          this.$toast(e, 2000, 'none')
        })
    },
    init() {
      this.$service.fetchTarget()
        .then(res => {
          console.log('profile:', res.data)
          const { profile, updateSources } = res.data

          this.profile = profile
          if (updateSources.length) {
            this.sources = updateSources.map(s => {
              let key
              let value

              if (s.external in sourceMap) {
                key = sourceMap[s.external]
                value = s.name
              }
              return {
                key,
                value
              }
            })
          }
        })
    },
  },
  mounted() {
    this.init()
    this.fetch(true)
    // FIXME
    this.timer = setInterval(() => {
      if (!this.fetching) {
        this.fetch()
      }
    }, 5000)
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
        font-size 14px
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
