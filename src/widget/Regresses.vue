<template>
  <div class="return" @click="go()">
    <span class="btn_l"><img src="../public/img/fh.png">返回</span>
    <span class="btn_r"></span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cover: this.$route.params.cover,
        favorite: false,
        favoriter: false,
        favorites: false
      }
    },
    methods: {
      go() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .return
    width: 100%
    height: 40px
    line-height: 40px
    text-align: left
    border-bottom: 1px solid #eaeaea
    .btn_l
      font-size: 18px
      line-height: 40px
      img
        width: 25px
        height: 25px
        vertical-align: middle
</style>
