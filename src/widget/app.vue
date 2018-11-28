<template>
  <div id="app">
    <div class="tab" :hotList="hotList" :fireList="fireList" :fmaleList="fmaleList"
         :booklist1="booklist1" :booklist2="booklist2" :list1="list1"
         :list2="list2" :list3="list3">
      <div class="personal" @click="toC()">
        <img src="../public/img/191.jpg">
      </div>
      <div class="tab-item">
        <router-link to="/community">社区</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/bookshelf">书架</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/bookcity">书城</router-link>
      </div>
      <div class="img" @click="to()"><img src="../public/img/sousuo.png"></div>
    </div>
    <router-view :hotList="hotList" :fireList="fireList" :fmaleList="fmaleList"
                 :booklist1="booklist1" :booklist2="booklist2" :list1="list1"
                 :list2="list2" :list3="list3"></router-view>
  </div>
</template>

<script>
  import bookshelf from '../components/bookshelf.vue'
  export default {
    name: 'App',
    data() {
      return {
        hotList: [],
        fireList: [],
        fmaleList: [],
        booklist1: [],
        booklist2: [],
        list1: [],
        list2: [],
        list3: []
      }
    },
    created() {
      this.axios('/api/hotList')
        .then(res => {
          res = res.data
          if (res.error === 0) {
            this.hotList = res.data
          }
        })
      this.axios.get('/api/fireList')
        .then(res => {
          res = res.data
          if (res.error === 0) {
            this.fireList = res.data
          }
        })
      this.axios.get('/api/fmaleList')
        .then(res => {
          res = res.data
          if (res.error === 0) {
            this.fmaleList = res.data
          }
        })
      this.axios.get('/api/fmaleList')
        .then(res => {
          res = res.data
          if (res.error === 0) {
            this.fmaleList = res.data
          }
        })
      this.axios('/api/booklist1')
        .then(res => {
          res = res.data
          if (res.error === 0) {
            this.booklist1 = res.data
          }
        })
      this.axios.get('/api/booklist2')
        .then(res => {
          res = res.data
          if (res.error === 0) {
            this.booklist2 = res.data
          }
        })
      this.axios.get('/api/list1')
        .then(res => {
          res = res.data
          if (res.error === 0) {
            this.list1 = res.data
          }
        })
      this.axios.get('/api/list2')
        .then(res => {
          res = res.data
          if (res.error === 0) {
            this.list2 = res.data
          }
        })
      this.axios.get('/api/list3')
        .then(res => {
          res = res.data
          if (res.error === 0) {
            this.list3 = res.data
          }
        })
    },
    components: {
      bookshelf
    },
    methods: {
      toC() {
        this.$router.push('/personal')
      },
      to() {
        this.$router.push('/search')
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../public/sass/_base"
  #app
    overflow: hidden
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      background: #fff
      border-bottom: 1px solid #CCC
      .personal
        width: 22px
        height: 22px
        border: 1px solid #ccc
        border-radius: 50%
        align-self: center
        margin-left: 10px
        overflow: hidden
      .tab-item
        flex: 0 0 90px
        text-align: center
        & > a
          display: block
          font-size: 14px
          color: rgb(77, 85, 93)
          &.active
            color: rgb(240, 20, 20)
      .img img
        width: 25px
        height: 25px
        vertical-align: middle
</style>
