<template>
  <div class="bookshelf">
    <div class="recommend">
      <img src="../public/img/dazhuzai.jpg">
      <div class="content">
        <div class="contentT">VIP会员免费读</div>
        <div class="contentB">废材崛起踏遍九天：天地至圣</div>
      </div>
      <div class="Right">
        <img src="../public/img/liwu.png">
        <span class="text">领书豆</span>
      </div>
    </div>
    <ul >
      <li class="title" v-for="(total,index) in total" :key="index">
        <img :src="total.cover">
        <span class="tit">
      <div class="span">
        {{total.title}}
      </div>
      {{total.author}}
    </span>
      </li>
    </ul>
    <div class="contents" @click="toC">
      <span class="add">+</span>
      <span>添加小说</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      hotList: {
        type: Array,
        required: true,
        imgArray: {
          type: Array,
          default: []
        }
      }
    },
    data() {
      return {
        total: JSON.parse(window.localStorage.getItem('arr'))
      }
    },
    methods: {
      toC() {
        this.$router.push('/bookCity')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" rel="stylesheet/scss" scoped>
  .bookshelf
    width: 100%
    .recommend
      width: 100%
      height: 60px
      display: flex
      border: none
      padding: 16px
      & > img
        width: 45px
        height: 60px
        line-height: 120px
      .content
        width: 210px
        margin-top: 18px
        font-size: 14px
        line-height: 14px
        color: rgb(7, 17, 27)
        margin-left: 10px
        .contentB
          color: #5f5e5e
          font-size: 12px
          margin-top: 3px
      .Right
        width: 60px
        height: 30px
        border: 1px solid #ff9800
        border-radius: 20px
        background-color: #ffc1077d
        margin-top: 7px
        margin-left: -15px
        padding: 0 2px
        position: relative
        .text
          color: #ff5722
          font-size: 10px
          font-weight: 700
          position: absolute
          top: 10px
          left: 28px
    .title
      display: inline-block
      margin-left: 5px
      &:after
        display: block
        content: ' '
        clear: both
      img
        width: 80px
        height: 120px
        float: left
      .tit
        margin: 15px 84px
        .span
          width: 330px
          margin-bottom: 10px
    ul .cont
      .img
        &:after
          display: block
          content: ' '
          clear: both
      .img img
        width: 80px
        height: 120px
        float: left
      .tit
        margin-top: 5px
        line-height: 30px
    .contents
      width: 100%
      height: 100px
      line-height: 80px
      margin-left: 5px
      .add
        width: 50px
        height: 80px
        font-size: 18px
        display: inline-block
        border: 1px solid #000
        text-align: center
        margin-top: 5px
</style>
