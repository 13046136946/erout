<template>
  <div class="catalog" v-show="shows">
    <div class="read-content" :class="{active:active}">
      <div class="contents">
        <span class="btn_l" @click="dare"><img src="../public/img/fh.png">返回</span>
        <span class="btn_r">{{id.title}} 目录</span>
      </div>
      <div class="content">
        <ul>
          <li class="cont" v-for="(title,index) in id.maleList" :key="index" @click="read">
              <div class="tie">{{title.title}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shows: false,
        show: false,
        active: false,
        shower: false,
        msg: this.$route.params.id.maleList.msg,
        id: this.$route.params.id,
        maleList: {
          type: Array,
          required: true
        }
      }
    },
    methods: {
      dare() {
        this.shows = !this.shows
      },
      read(msg) {
        this.$emit('titlechange', this.msg)
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .catalog
    background: #fff
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 10
    overflow: auto
    .read-content
      .contents
        width: 100%
        height: 40px
        line-height: 40px
        text-align: center
        border-bottom: 1px solid #eaeaea
        background: white
        position: absolute
        top: 0
        left: 0
        &.act
          background: #363636
          color: #ccc
        .btn_l
          font-size: 18px
          line-height: 40px
          float: left
          img
            width: 25px
            height: 25px
            vertical-align: middle
        .btn_r
          font-size: 18px
          margin-left: -40px
      .content
        margin-top: 45px
        font-size: 18px
        line-height: 30px
        .cont
          border-bottom: 1px solid #e7e7e7
</style>
