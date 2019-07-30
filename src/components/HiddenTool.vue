<template lang="pug">
  .tools(@click="click")
    //- fa(icon="chevron-left" :style="{color: 'white'}")
</template>

<script>
const shouldShowBack = name => {
  return [].indexOf(name) >= 0
}

export default {
  name: 'Hidden',
  methods: {
    click() {
      if (this.$route.name && !shouldShowBack(this.$route.name)) {
        if (confirm('back or reload?')) {
          this.$router.back()
        } else {
          window.location.reload(true)
        }
      } else {
        this.$router.back()
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
.tools
  opacity 1
  width 100px
  height 50px
  & > svg
    font-size 22px
    margin 35px 15px
</style>
