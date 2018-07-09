<template>
  <ul class="list-box">
    <li class="item" v-for="item in list" :key="item.id" :id="item.id">
      <span class="iconfont icon-left" :class="item.icon" :style="{color:item.color}"></span>
      <span class="text">{{item.text}}</span>
      <span class="iconfont icon-qianjin icon-right"></span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "list",
    props:{
      list:Array
    },
  }
</script>

<style lang="stylus" scoped>
  .list-box
    background-color white
    margin-top 0.2rem
    margin-bottom 0.98rem
    .item
      height 0.75rem
      line-height 0.75rem
      padding 0 0.2rem
      border-bottom 1px solid #f5f3f3
      .icon-left
        font-size 0.4rem
        vertical-align middle
      .text
        font-size 0.28rem
        color #313131
        margin-left 0.2rem
      .icon-right
        float right
</style>
