<template>
  <div class="search-box">
    <div class="input">
      <span class="iconfont icon-sousuo search"></span>
      <span>{{text}}</span>
      <span class="iconfont icon-17 luyin" v-show="state"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "search",
    props:{
      text:String,
      state:String
    },
  }
</script>

<style lang="stylus" scoped>
  .search-box
    margin-top 0.8rem
    padding 0.12rem 0.15rem
    background-color white
    .input
      position relative
      width 100%
      height 0.6rem
      line-height 0.6rem
      background-color #eee
      color #ccc
      text-align center
      .search
        vertical-align middle
      .luyin
        position absolute
        right 0.2rem
        color #666

</style>
