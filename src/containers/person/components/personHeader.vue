<template>
       <div class="header">
         <div class="back-box">
           <router-link to="/kandian" tag="div">
             <span class="iconfont icon-return"></span>
             <span class="text">返回</span>
           </router-link>
         </div>
         <span class="text">我的</span>
       </div>
</template>

<script>
    export default {
        name: "personHeader"
    }
</script>

<style lang="stylus" scoped>
  .header
    height 0.8rem
    line-height 0.8rem
    background-color deepskyblue
    color white
    font-size 0.28rem
    text-align center
    .back-box
      position absolute
      left 0
      width 1.2rem
      .icon-return
        font-size 0.4rem
        vertical-align middle
</style>
