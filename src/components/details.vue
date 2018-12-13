<template>
  <div class="contents">
    <readBook v-show="show" :id="id" @close="favoriteFunc1"></readBook>
    <Regresses></Regresses>
    <span class="free">书籍详情</span>
    <div class="detail">
      <div class="deta">
        <img :src="id.cover">
        <div>
          <ul>
            <li class="tie">{{id.title}}</li>
            <li class="img"></li>
            <span>4.1分</span>
            <li class="tit">{{id.author}}/{{id.catName}}</li>
            <li class="tit">0.05元/千字</li>
            <li class="aa"><a href="#">续费vip, 享8折优惠</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="btn">
      <div class="btn_a btn_s" :class="{active: favoriter}" @click="favoriteFunc1(false)">{{favoriteText1}}</div>
      <div class="btn_a" @click="favoriteFunc" @close="favoriteFunc" :class="{active: favorite}">{{favoriteText}}</div>
      <div class="btn_a" @click="favoriteFunc2">{{favoriteText2}}</div>
    </div>
    <div class="brief">{{id.intro}}</div>
    <div class="catalog">
      <div class="catalog_l">
        <img src="../public/img/导航.png">
        <span>共876章</span>
      </div>
      <div class="catalog_r">更新时间：{{id.updateDate}}</div>
    </div>
    <Split></Split>
    <div class="content">
      <ul>
        <li class="cont" v-for="(title,index) in hotList" :key="index">
          <div class="imgs">
            <img :src="title.cover">
            <div class="tie">{{title.title}}</div>
            <div class="tit">{{title.author}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Regresses from '../widget/Regresses.vue'
  import Split from '../widget/Split.vue'
  import readBook from '../widget/readbook.vue'
  export default {
    props: {
      hotList: {
        type: Array,
        required: true
      },
      fireList: {
        type: Array,
        required: true
      },
      fmaleList: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        id: this.$route.params.id,
        favorite: false,
        favoriter: false,
        favorites: false,
        show: false,
        data: []
      }
    },
    computed: {
      favoriteText() {
        return this.favorite ? '已添加' : '加书架'
      },
      favoriteText1() {
        return this.favoriter ? '继续阅读' : '免费试读'
      },
      favoriteText2() {
        return this.favorites ? '已缓存' : '缓存'
      }
    },
    methods: {
      favoriteFunc() {
        this.favorite = true
        if (this.favorite) {
          let temp = JSON.parse(localStorage.getItem('arr')) || []
          this.data = JSON.parse(localStorage.getItem('arr'))
            if (temp.indexOf(temp.id) === -1) {
              temp.push(this.id)
            }
          window.localStorage.setItem('arr', JSON.stringify(temp))
//          console.log(JSON.parse(window.localStorage.getItem('arr')))
        }
      },
      favoriteFunc1() {
        this.show = !this.show
        this.favoriter = true
      },
      favoriteFunc2() {
        this.favorites = true
      }
    },
    components: {
      Split,
      Regresses,
      readBook
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .contents
    overflow-y: hidden
    overflow-x: visible
    width: 100%
    .free
      position: absolute
      top: 13px
      left: 150px
    .detail
      width: 320px
      height: 120px
      background: #f4f4f4
      padding: 15px 0 0 55px
      margin-top: 10px
      img
        width: 70px
        height: 100px
        float: left
      ul
        margin-left: 80px
      .tit
        font-size: 12px
        color: #5a5a5a
        margin-top: 10px
      .img
        width: 100px
        height: 10px
        display: inline-block
        overflow: hidden
        margin-top: 5px
        background: url("../public/img/icon_5.png") no-repeat
        background-position: 0 -70px
        background-size: 85px 100px
      span
        color: #666
        font-size: 14px
      .aa
        color: skyblue
        font-size: 14px
        margin-top: 10px
        a
          text-decoration: none
          color: skyblue
      .deta
        margin: 3px 0 0 -15px
    .btn
      margin-top: 10px
      display: flex
      .btn_a
        flex: 0 0 90px
        text-align: center
        height: 25px
        line-height: 25px
        margin-left: 25px
        font-size: 14px
        border: 1px solid #d9d8cf
        &.active
          color: #ccc
      .btn_s
        background: orange
        color: #fff
        &.active
          color: #fff
    .brief
      width: 90%
      height: 200px
      border-bottom: 1px solid #ccc
      margin: 20px auto
      font-size: 12px
      color: #2d2d2d
      line-height: 1.5
    .catalog
      width: 90%
      height: 20px
      font-size: 14px
      margin: 20px auto
      line-height: 20px
      .catalog_l
        float: left
        line-height: 16px
        img
          vertical-align: middle
      .catalog_r
        float: right
    .contents
      .recommend, .change
        color: #cc660e
        text-align: center
        margin-bottom: 10px
      .change
        color: #9d9d9d
        font-size: 14px
        border-top: 1px solid #ccc
        padding: 10px 0 0 0
    .content
      width: 100%
      height: 150px
      text-align: left
      padding-bottom: 10px
    .content ul
      display: flex
      .cont
        display: inline-block
        flex: 0 0 90px
        text-align: center
        font-size: 12px
        .imgs
          display: inline-block
        .imgs img
          width: 70px
          height: 100px
        .tie
          width: 70px
          margin-top: 2px
          text-decoration: none
          font-size: 14px
        .tit
          color: #75715e
          margin-top: 5px
</style>
