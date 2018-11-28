<template>
  <div class="header">
    <div class="slide">
      <div class="slideshow">
        <ul>
          <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
            <a href=""><img :src="img"></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="menu">
      <div class="Navigation">
        <div class="item" @click="toF()">
          <img src="../public/img/mf.png">
          <div>免费</div>
        </div>
        <div class="item">
          <img src="../public/img/ph.png">
          <div>排行</div>
        </div>
        <div class="item" @click="toV()">
          <img src="../public/img/VIP.png">
          <div>VIP</div>
        </div>
        <div class="item">
          <img src="../public/img/ej.png">
          <div>听书</div>
        </div>
        <div class="item">
          <img src="../public/img/xs.png">
          <div>完本</div>
        </div>
      </div>
      <div class="classification">
        <div class="class" @click="toX()"><span>玄幻</span></div>
        <div class="class" @click="toG()"><span>游戏</span></div>
        <div class="class" @click="toU()"><span>都市</span></div>
        <div class="class png">
          <span>
          <img src="../public/img/dh.png">
          <p>全部分类</p>
          </span>
        </div>
      </div>
      <split></split>
    </div>
    <div class="contents">
      <div class="recommend">-专属推荐-</div>
      <div class="content">
        <ul>
          <li class="cont" v-for="(title,index) in hotList" :key="index" @click="to(title)">
            <div class="img">
              <img :src="title.cover" v-if="title">
              <div class="tie" v-if="title">{{title.title}}</div>
              <div class="tit" v-if="title">{{title.author}}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="change">换一换</div>
      <Split></Split>
    </div>
    <div class="contents">
      <div class="recommend">-主编为您推荐-</div>
      <div class="content">
        <ul>
          <li class="cont" v-for="(title,index) in fireList" :key="index" @click="to(title)">
            <div class="img">
              <img :src="title.cover" v-if="title">
              <div class="tie" v-if="title">{{title.title}}</div>
              <div class="tit" v-if="title">{{title.author}}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="change">查看更多</div>
      <Split></Split>
    </div>
    <div class="more">
      <div class="recommend">-更多精品-</div>
      <div class="content">
        <div class="quality" @click="to(fmaleList[0])">
          <div class="imgs"><img :src="fmaleList[0].cover" v-if="fmaleList[0]"></div>
          <div class="img">
            <div class="tie"  v-if="fmaleList[0]">
              {{fmaleList[0].catName}}
              {{fmaleList[0].title}}
              <span class="author " v-if="fmaleList[0]">{{fmaleList[0].author}}</span>
            </div>
            <span class="intro" v-if="fmaleList[0]">{{fmaleList[0].intro}}</span>
          </div>
        </div>
        <ul>
          <li class="cont" v-for="(title,index) in fmaleList" @click="to(title)" :key="index" v-if="index*1!=0">
            <div class="right">
              <p class="tie" v-if="title">
                [{{title.catName}}]
                {{title.title}}
                <span class="author" v-if="title">{{title.author}}</span>
              </p>
              <p class="intro" v-if="title">{{title.intro}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="change">查看更多</div>
      <Split></Split>
    </div>
  </div>
</template>

<script>
  import Split from '../widget/Split.vue'
  export default {
    props: {
      hotList: {
        type: Array,
        required: true,
        imgArray: {
          type: Array,
          default: []
        }
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
        mark: 0,
        imgArray: [
          require('../public/img/1.jpg'),
          require('../public/img/2.jpg'),
          require('../public/img/3.jpg'),
          require('../public/img/4.jpg')
        ]
      }
    },
    methods: {
      toF() {
        this.$router.push('/Free')
      },
      toX() {
        this.$router.push('/Fantasy')
      },
      toV() {
        this.$router.push('/visitant')
      },
      toG() {
        this.$router.push('/Game')
      },
      toU() {
        this.$router.push('/urban')
      },
      to(title) {
        this.$router.push({name: 'details', params: {id: title}})
      },
      autoPlay () {
        this.mark++
        if (this.mark === 4) {
          this.mark = 0
        }
      },
      play () {
        setInterval(this.autoPlay, 2500)
      },
      change (i) {
        this.mark = i
      }
    },
    components: {
      Split
    },
    created () {
      this.play()
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .header
    overflow-y: hidden
    overflow-x: visible
    width: 100%
    .slide
      width: 100%
      height: 150px
      margin: 0 auto
      overflow: hidden
      position: relative
      .slideshow
        width: 100%
        height: 150px
      .slideshow > ul li
        position: absolute
        img
          width: 100%
          height: 120px
    .menu
      width: 100%
      height: 130px
      .Navigation
        display: flex
        margin-top: 10px
        .item
          flex: 0 0 70px
          text-align: center
      .classification
        display: flex
        margin-top: 10px
        margin-left: -25px
        .class
          flex: 0 0 70px
          text-align: center
          span
            display: inline-block
            width: 100px
            height: 30px
            background: #efeaea
            text-align: center
            line-height: 30px
            font-size: 14px
        .png p
          display: inline-block
          color: #ff5c09
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
        .img
          display: inline-block
        .img img
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
    .more
      width: 100%
      overflow: hidden
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
        overflow-y: hidden
        .cont
          margin: 5px 0
          padding: 2px
          .right
            overflow: hidden
            font-size: 14px
            .tie
              color: #333
              .author
                color: #CCC
                font-size: 14px
            .intro
              color: #CCC
              width: 375px
              white-space: nowrap
              text-overflow: ellipsis
              padding: 5px
        .quality
          width: 100%
          height: 100px
          margin: 5px 0
          padding: 2px
          font-size: 14px
          .imgs
            float: left
            padding: 0 5px 0 5px
            img
              width: 70px
              height: 100px
          .img
            margin-top: 5px
            .tie
              margin-bottom: 10px
            .author
              color: #ccc
            .intro
              color: #ccc
              padding: 5px
      .cont
        .img img
          float: left
          width: 70px
          height: 100px
          .right
            float: left
            font-size: 14px
</style>
