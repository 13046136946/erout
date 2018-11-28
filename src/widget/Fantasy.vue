<template>
  <div class="contents">
    <Regresses></Regresses>
    <span class="free">玄幻</span>
    <div class="content">
      <ul>
        <li class="cont" v-for="(title,index) in list1" :key="index" @click="to(title)">
          <div class="img">
            <img :src="title.cover">
            <div class="title">
              <div class="tie">{{title.title}}</div>
              <div class="tit">作者：{{title.author}}</div>
              <div>{{title.updateTime}}更新:{{title.lastChapterName}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Regresses from './Regresses.vue'
  export default {
    props: {
      list1: {
        type: Array,
        required: true
      }
    },
    components: {
      Regresses
    },
    methods: {
      to(title) {
        this.$router.push({name: 'details', params: {id: title}})
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .contents
    position: relative
    .free
      font-size: 18px
      position: absolute
      top: 10px
      left: 160px
    .content
      width: 100%
      .cont
        .img
          width: 100%
          height: 120px
          img
            width: 70px
            height: 100px
            margin: 10px 0 0 10px
            float: left
          .title
            line-height: 30px
            padding-top: 12px
</style>
