<template>
  <div class="header">
    <div class="image-box"><img :src="imgUrl" alt="" class="user-head"></div>
    <div class="mid" @click="changeTabListState">看点<span class="iconfont" :class="icon"></span></div>
    <div class="right">
      <router-link to="/person" tag="div"><span class="iconfont icon-gerenzhongxin"></span></router-link>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: "homeHeader",
    data: function (){
      return {
        imgUrl:require('@/assets/images/header.png')
      }
    },
    computed:{
      ...mapState("SeePoint",{
        tabListState:'tabListState',
        icon:'icon'
      })
    },
    methods:{
      ...mapMutations({
        changeTabListState:'SeePoint/changeTabListState'
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
