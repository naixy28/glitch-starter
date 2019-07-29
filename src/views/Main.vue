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
            .gender
          .desc {{'asdfhjkasdhfjklhasjkldhf adshflk'}}
          .tags
            tag(k="微博" v="YYYY")
            tag(k="豆瓣" v="YYYY")
            tag(k="云音乐" v="YYYY")
      .mid
        .test
        .test
        .test
        .test
    chat-bar.bottom-bar()
</template>

<script>
import Tag from '../components/Tag'
import ChatBar from '../components/ChatBar'

export default {
  name: 'Main',
  components: {
    Tag,
    ChatBar,
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
      display flex
      flex-flow row nowrap
      justify-content flex-end
      align-items center
      .setting
        width 30px
        height 30px
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
        .name
          font-size 22px
          font-weight 500
      .desc
        color #fff
        font-size 16px
  .mid
    flex 1
    background $GREY2
    border-radius 8px
    margin 15px
    overflow auto
    -webkit-overflow-scrolling touch
    .test
      background grey
      height 500px
      width 70vw
      margin 10px 0
.bar
  position fixed
  bottom 0
  left 0
</style>
