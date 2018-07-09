<template>
  <div class="user-info-box">
    <div class="info">
      <img :src="userHeader" alt="">
      <p class="name">空城</p>
      <p class="text">查看我的内容</p>
      <span class="iconfont icon-qianjin"></span>
    </div>
    <div class="item">
        <div class="div"><span>关注</span><span class="num">1</span></div>
      <div class="div"><span>粉丝</span><span class="num">1</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userInfo",
    data(){
      return {
        userHeader:require('@/assets/images/header.png')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .user-info-box
    font-size 0.26rem
    padding 0.3rem 0.2rem
    background-color white
    .info
      position relative
      font-size 0.26rem
      height 1rem
      img
        width 0.8rem
        height 0.8rem
        border-radius 100%
        float left
        margin-top 0.1rem
      .name,.text
        float left
        width 5.5rem
        margin-left 0.2rem
      .name
        margin 0.15rem 0 0.1rem 0.2rem
      span
        position absolute
        right 0
        top 0.3rem

    .item
      padding 0.1rem 0.2rem
      background-color white
      display flex
      .div
        width 50%
        text-align center
        padding 0.1rem 0
        &:first-child
          border-right 1px solid #f5f3f3
        .num
          font-size 0.28rem
          color #313131
          margin-left 0.15rem
</style>
