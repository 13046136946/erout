<template>
  <div id="app">
    <router-view :hotList="hotList" :fireList="fireList" :fmaleList="fmaleList"
                 :booklist1="booklist1" :booklist2="booklist2" :list1="list1"
                 :list2="list2" :list3="list3"></router-view>
  </div>
</template>

<script>
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
        list3: [],
        maleList: []
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
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  #app
    width: 100%
</style>
