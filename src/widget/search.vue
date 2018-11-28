<template>
  <div class="contents">
    <Regresses></Regresses>
    <div class="content">
      <input type="text" v-model="keyword" placeholder="请输入关键字">
      <button>搜索</button>
    </div>
    <Split></Split>
    <ul >
    <li v-for="(title,index) in filterFriendsList" :key="index">
      <span class="img"><img :src="title.cover"></span>
      <span class="title">
          <div>{{title.title}}</div>
          <div class="title">{{title.intro}}</div>
          <span>作者名：{{title.author}}</span>
      </span>
    </li>
  </ul>
  </div>
</template>

<script>
  import Regresses from '../widget/Regresses.vue'
  import Split from '../widget/Split.vue'
  export default {
    name: 'search',
    data() {
      return {
        friendsList: [],
        keyword: ''
      }
    },
    created() {
      this.axios('/api/hotList')
        .then(res => {
          res = res.data
          if (res.error === 0) {
            this.friendsList = res.data
          }
        })
      this.axios('/api/fireList')
        .then(res => {
          res = res.data
          if (res.error === 0) {
            this.friendsList = res.data
          }
        })
      this.axios('/api/fmaleList')
        .then(res => {
          res = res.data
          if (res.error === 0) {
            this.friendsList = res.data
          }
        })
  },
    computed: {
      filterFriendsList() {
        // 只根据用户名查询
        let result = []
        let str = this.keyword.trim()

        if (!str) { // 内容为空不展示
          return result
        }
        result = this.friendsList.filter(f => {
          let reg = new RegExp(str, 'gim') // g进行全局匹配，i不区分大小写，m可以进行多行匹配
          return reg.test(f.title)
        })
        return result
      }
    },
    components: {
      Split,
      Regresses
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .contents
    position: relative
    .content
      width: 100%
      text-align: center
      margin-top: 10px
      input
        width: 190px
        height: 30px
        outline: 0
      button
        width: 50px
        height: 34px
    ul
      margin-top: -40px
      li
        margin-top: 44px
        .img img
          width: 95px
          height: 140px
          vertical-align: middle
          float: left
        .title
          display: block
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
          line-height: 35px
</style>
