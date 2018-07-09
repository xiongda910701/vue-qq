<template>
   <router-link to="/404" tag="div">
     <div class="item">
       <span class="text">{{text}}</span>
       <span class="iconfont icon-qianjin icon"></span>
     </div>
   </router-link>
</template>

<script>
    export default {
        name: "list",
        props:{
          text:String
        }
    }
</script>

<style lang="stylus" scoped>
  .item
    height 0.75rem
    line-height 0.75rem
    padding 0 0.2rem
    background-color white
    border-bottom 1px solid #f5f3f3
    .text
      font-size 0.3rem
      font-weight 500
    .icon
      float right
</style>
