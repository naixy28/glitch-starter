<template lang="pug">
  .tag
    span {{`${k}: ${v}`}}
</template>

<script>
export default {
  name: 'Tag',
  props: {
    k: String,
    v: String,
  }
}
</script>

<style lang="stylus" scoped>
.tag
  background $GREY3
  height 17px
  border-radius 17px
  padding 7px
  font-size 10px
  font-weight 500
  line-height 18px
  color #404040
  display inline-flex
  align-items center
  margin-right 10px
</style>
