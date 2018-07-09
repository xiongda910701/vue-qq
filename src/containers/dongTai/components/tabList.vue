<template>
  <ul class="box">
    <li class="item">
      <span class="iconfont icon-star"></span>
      <p class="text">好友动态</p>
    </li>
    <li class="item">
      <span class="iconfont icon-weizhi"></span>
      <p class="text">附近</p>
    </li>
    <li class="item">
      <span class="iconfont icon-zhangpeng"></span>
      <p class="text">兴趣部落</p>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "tabList"
  }
</script>

<style lang="stylus" scoped>
  .box
    display flex
    padding 0.15rem 0.2rem
    background-color white
    .item
      flex 1
      text-align center
      .iconfont
        font-size 0.5rem
      .icon-star
        color yellow
      .icon-weizhi
        color red
      .icon-zhangpeng
        color dodgerblue
      .text
        color #313131
        font-size 0.28rem
        margin-top 0.1rem

</style>
