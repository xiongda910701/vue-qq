<template>
  <div class="sidebar" v-show="sideBarState" @click="changeSideBarState">
    <div class="content">
      <div class="header" :style="note"></div>
      <div class="list"></div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: "sidebar",
    data(){
      return {
        note:{
          backgroundImage: "url(" + require("@/assets/images/bg.jpg") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: '5.5rem 3.5rem',
        },
      }
    },
    computed:{
      ...mapState("Home",{
           sideBarState:'sideBarState'
      })
    },
    methods:{
      ...mapMutations({
        changeSideBarState:'Home/changeSideBarState'
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .sidebar
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background-color rgba(0,0,0,0.5)
    z-index 100
    .content
      position relative
      width 5.5rem
      height 100%
      background-color white
      .header
        position fixed
        top 0
        left 0
        width 100%
        height 3.5rem
</style>
