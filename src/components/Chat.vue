<template lang="pug">
  .chat-item
    .left(:class="{hide: chat.isSelf}")
      img.avatar
    .center
      .title 我更新了一条微博
      .subtitle 1小时前 来自微博
      .music
        img.logo
        .song
          .name 女爵
          .singer 杨乃文
      .content(v-if="chat.content") {{chat.content}}
      //- .diary-tag #[fa(icon="pencil-alt")] 日记
      .send-time 2019年7月31日 20:21
    .right(:class="{hide: !chat.isSelf}")
      img.avatar
</template>
<script>
export default {
  name: 'Chat',
  props: {
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
