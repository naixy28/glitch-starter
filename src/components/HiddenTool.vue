<template lang="pug">
  .tools(@click="click")
</template>

<script>
export default {
  name: 'Hidden',
  methods: {
    click() {
      // alert('clicked')
      if (confirm('back or reload?')) {
        this.$router.back()
      } else {
        window.location.reload(true)
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
.tools
  opacity 0
  width 100px
  height 50px
  border 1px solid red
</style>
