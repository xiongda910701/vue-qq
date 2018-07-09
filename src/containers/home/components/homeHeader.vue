<template>
  <div class="header">
    <div class="image-box" @click="changeSideBarState"><img :src="imgUrl" alt="" class="user-head"></div>
    <div class="mid">消息</div>
    <div class="right" @click="changeState"><span class="iconfont icon-jiahao"></span></div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: "homeHeader",
    data: function () {
      return {
        imgUrl:require('@/assets/images/header.png')
      }
    },
    methods:{
      ...mapMutations({
        changeState:'Home/changeWindowState',
        changeSideBarState:'Home/changeSideBarState'
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .header
    position fixed
    left 0
    right 0
    top 0
    z-index 2
    display flex
    height 0.8rem
    line-height 0.8rem
    background-color deepskyblue
    color white
    font-size 0.26rem
    .image-box
      position absolute
      width 1.5rem
      float left
      .user-head
        width 0.6rem
        height 0.6rem
        background-color #ececec
        margin-top 0.1rem
        border-radius 100%
        margin-left 0.2rem
    .mid
      width 4.5rem
      text-align center
      margin-left 1.5rem
    .right
      position absolute
      width 1.5rem
      right 0.2rem
      text-align right
      span
        font-size 0.5rem
</style>
