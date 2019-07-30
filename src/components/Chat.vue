<template lang="pug">
  .chat-item
    .left(:class="{hide: chat.isSelf}")
      .avatar(:style="{backgroundImage: `url(${avatar})`}")
    .center
      template(v-if="!chat.isSelf")
        .title(v-if="chat.title") {{ chat.title }}
        .subtitle #[span(v-if="chat.actionTime") {{chat.actionTime | formatPassedTime}}] &nbsp; #[span(v-if="chat.subtitle") {{chat.subtitle}}]
        .music(v-if="chat.music")
          img.logo(:src="chat.music.albumPicUrl")
          .song
            .name {{ chat.music.name }}
            .singer {{ chat.music.author }}
      .content(v-if="chat.content") {{chat.content}}
      .imgs(v-if="chat.picUrls && chat.picUrls.length")
        .im(:style="{backgroundImage: `url(${chat.picUrls[0]})`}")
      //- .diary-tag #[fa(icon="pencil-alt")] 日记
      .send-time(v-if="chat.content && chat.isSelf") {{chat.actionTime | formatTime}}
    .right(:class="{hide: !chat.isSelf}")
      .avatar.self
</template>
<script>
export default {
  name: 'Chat',
  props: {
    avatar: String,
    chat: {
      type: Object,
      default() {
        return {
          isSelf: true,
        }
      },
    }
  }
}
</script>

<style lang="stylus" scoped>
.chat-item
  width 100%
  display flex
  flex-flow row nowrap
  padding 10px 7.5px 0
  .left,.right
    width 30px
    flex 0 0 30px
  .hide
    opacity 0
  .avatar
    width 30px
    height 30px
    border-radius 50px
    overflow hidden
    background grey
    background-position center center
    background-size 100%
    background-position-y 0px
  .self
    background-image url(http://japan.people.com.cn/NMediaFile/2018/0921/MAIN201809211240000389013678253.jpg)
    // background-position center center
    // background-size 100%
    // background-position-y 0px
  .center
    flex 1
    min-height 50px
    border-radius 15px
    background-color $GREY3
    margin 0 7.5px
    padding 15px
    color #404040
    .title
      font-size 14px
      font-weight 500
      margin-bottom 5px
    .subtitle,.send-time
      margin-bottom 5px
      font-weight 400
      color #888
      font-size 12px
    .diary-tag
      background white
      height 17px
      border-radius 17px
      padding 7px
      font-size 10px
      font-weight 500
      line-height 17px
      color #888
      display inline-flex
      align-items center
    .send-time
      margin-bottom 0
    .content
      margin-bottom 5px
      font-size 12px
    .imgs
      .im
        width 75px
        height 75px
        background-position center center
        background-size 100%
        background-position-y 0px
    .music
      margin-bottom 5px
      display flex
      background white
      height 40px
      border-radius 8px
      width 100%
      display flex
      align-items center
      padding 5px
      font-size 12px
      .logo
        width 30px
        height 30px
        margin-right 5px
      .singer
        color #888
</style>
