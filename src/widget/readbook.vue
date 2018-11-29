<template>
  <div class="read" v-show="show" :class="{active:active}" :id="id">
    <div class="read-content" :class="{active:active}">
      <div class="contents" :class="{act:act}">
        <span class="btn_l" @click="dare; $emit('close')"><img src="../public/img/fh.png">返回</span>
        <span class="btn_l" style="margin-left: 30px">{{id.title}}</span>
        <span class="btn_r" @click="favoriteFunc">{{imager}}</span>
        <span></span>
      </div>
      <div class="content">
        <div style="text-align: center">{{id.maleList[num].title}}</div>
        {{id.maleList[num].msg}}
      </div>
      <div class="footer">
        <span @click="dec">上一章</span>
        <span @click="next">目 录</span>
        <span @click="add">下一章</span>
      </div>
    </div>
    <catalog v-show="shows" :id="id.maleList.msg" @title="updatetitle" @close="next"></catalog>
  </div>

</template>
<script type="text/babel">
  import catalog from './catalog.vue'
  export default {
    data() {
      return {
        show: false,
        shows: false,
        shower: false,
        active: false,
        act: false,
        num: 0,
        id: this.$route.params.id,
        maleList: {
          type: Array,
          required: true
        }
      }
    },
    methods: {
      updatetitle(title) {
        this.num = title
      },
      dare() {
        this.show = !this.show
        console.log(this.show)
      },
      favoriteFunc() {
        this.shower = !this.shower
        this.active = !this.active
        this.act = !this.act
      },
      next() {
        this.shows = !this.shows
      },
      dec() {
        if (this.num > 0) {
          window.parent.scrollTo(0, 0)
          this.num--
        }
      },
      add() {
        if (this.num < this.id.maleList.length - 1) {
          this.num++
          window.parent.scrollTo(0, 0)
        }
      }
    },
    computed: {
      imager() {
        return this.shower ? '白天模式' : '夜晚模式'
      }
    },
    components: {
      catalog
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .read
    width: 100%
    height: 100%
    background: #fff
    position: absolute
    top: 0
    left: 0
    z-index: 5
    &.active
      background: #363636
      color: #ccc
    .read-content
      position: absolute
      top: 0
      left: 0
      width: 100%
      &.active
        background: #363636
        color: #ccc
    .contents
      width: 100%
      height: 40px
      line-height: 40px
      text-align: left
      border-bottom: 1px solid #eaeaea
      background: white
      position: fixed
      top: 0
      left: 0
      &.act
        background: #363636
        color: #ccc
      .btn_l
        font-size: 18px
        line-height: 40px
        img
          width: 25px
          height: 25px
          vertical-align: middle
      .btn_r
        float: right
        margin-right: 5px
    .content
      margin-top: 40px
    .content p
      padding: 5px
      line-height: 1.5em
    .footer
      display: flex
      span
        flex: 1
        text-align: center

</style>
