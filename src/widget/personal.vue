<template>
  <div class="contents">
    <Regresses></Regresses>
    <span class="free">我的小说</span>
    <div class="header">
      <div class="head">
        <img src="../public/img/191.jpg" >
        <span class="span">
          <span class="span_top">嗯哼</span>
          <div class="span_b">来自QQ</div>
        </span>
      </div>
      <div class="head head_r">个人主页 <img src="../public/img/jt_r.png" style="width: 24px; height: 24px;"></div>
    </div>
    <Split></Split>
    <div class="bean">
      <div class="bea">
        <div class="bean_l">
          <p>1000</p>
          <p>元</p>
        </div>
        <a href="#">充值送书豆</a>
      </div>
      <div class="bea">
        <div class="bean_l">
          <p>35558</p>
          <p>书豆</p>
        </div>
        <a href="#">查看有效期</a>
      </div>
    </div>
    <ul class="ul_1">
      <li>
        <span>收支明细</span>
        <span><img src="../public/img/jt_r.png" style="width: 24px; height: 24px;"></span>
      </li>
      <li>
        <span>我的已购</span>
        <span>5本书<img src="../public/img/jt_r.png" style="width: 24px; height: 24px;"></span>
      </li>
      <li>
        <span>我的VIP</span>
        <span><img src="../public/img/jt_r.png" style="width: 24px; height: 24px;"></span>
      </li>
      <li>
        <span>我的推荐票</span>
        <span>12张<img src="../public/img/jt_r.png" style="width: 24px; height: 24px;"></span>
      </li>
    </ul>
    <Split></Split>
    <ul class="ul_1">
      <li>
        <span>福利中心</span>
        <span>每日抽大奖<img src="../public/img/jt_r.png" style="width: 24px; height: 24px;"></span>
      </li>
      <li>
        <span>勋章墙</span>
        <span><img src="../public/img/jt_r.png" style="width: 24px; height: 24px;"></span>
      </li>
    </ul>
    <Split></Split>
    <ul class="ul_1">
      <li>
        <span>我的阅读记录</span>
        <span><img src="../public/img/jt_r.png" style="width: 24px; height: 24px;"></span>
      </li>
      <li>
        <span>我的推书</span>
        <span><img src="../public/img/jt_r.png" style="width: 24px; height: 24px;"></span>
      </li>
      <li>
        <span>我的书评</span>
        <span><img src="../public/img/jt_r.png" style="width: 24px; height: 24px;"></span>
      </li>
      <li>
        <span>我的阅读喜好</span>
        <span><img src="../public/img/jt_r.png" style="width: 24px; height: 24px;"></span>
      </li>
    </ul>
    <Split></Split>
    <ul class="ul_1">
      <li>
        <span>问题与反馈</span>
        <span>书豆会过期吗?<img src="../public/img/jt_r.png" style="width: 24px; height: 24px;"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  import Regresses from './Regresses.vue'
  import Split from '../widget/Split.vue'
  export default {
    props: {
      booklist1: {
        type: Array,
        required: true
      }
    },
    components: {
      Regresses,
      Split
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
    .header
      width: 100%
      height: 100px
      background: #f4f4f4
      .head
        width: 100px
        height: 100px
        float: left
        margin: 20px 0 10px 0
        img
          width: 50px
          height: 50px
          border-radius: 50%
        .span
          .span_top
            position: relative
            top: -30px
            left: 10px
          .span_b
            position: absolute
            top: 90px
            left: 70px
      .head_r
        width: 100px
        line-height: 70px
        float: right
        img
          vertical-align: text-bottom
    .bean
      display: flex
      margin: 20px 0 0 0
      padding-bottom: 20px
      border-bottom: 1px solid #ccc
      a
        color: #07c9e2
        font-size: 14px
      .bea
        flex: 1
        text-align: center
        color: #939e9f
        .bean_l > :first-child
          font-size: 24px
          color: black
          margin-bottom: 10px
        p
          display: inline-block
    .ul_1
      li
        width: 100%
        height: 45px
        line-height: 45px
        background: #fafafa
      li > :last-child
        float: right
      li img
        vertical-align: text-bottom
</style>
