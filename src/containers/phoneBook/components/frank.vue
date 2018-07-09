<template>
  <router-link to="/404" tag="div">
    <div class="frank-box">
      <img :src="imgUrl" alt=""/>
      <div class="right">
        <div class="item title">坦白说</div>
        <div class="item desc">每一个好友都有闪光点</div>
        <div class="item desc">19604774人正在玩，快快加入吧。</div>
      </div>
    </div>
  </router-link>
</template>

<script>
  import userHeader from '@/assets/images/header.png'

  export default {
    name: 'Frank',
    data() {
      return {
        imgUrl: userHeader
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .frank-box
    display flex
    background-color white
    margin 0.15rem auto 0.3rem auto
    padding 0.4rem 0.15rem
    img
      width 1rem
      height 1rem
      border-radius 100%
    .right
      flex 1
      padding-left 0.2rem
      .item
        margin-bottom 0.15rem
      .tiele
        font-size 0.3rem
        font-weight 500
      .desc
        font-size 0.24rem
        color #666
</style>
