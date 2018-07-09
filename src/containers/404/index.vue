<template>
  <div class="box">
    <img :src="notFound" class="notFound" alt=""/>
    <div class="title">404</div>
    <div class="desc">I am sorry!Your page is not found!</div>
    <div style="text-align: center"><button type="button" class="btn-back" @click="goHome">回首页</button></div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        notFound: require('@/assets/images/404.jpg')
      }
    },
    methods:{
      goHome(){
        this.$router.push('/');
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .box
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background-color lightskyblue
    color white
    .notFound
      width 2rem
      height auto
      margin 3rem 2.75rem 0 2.75rem
    .title
      margin-top 0.5rem
      text-align center
      font-size 1rem
    .desc
      font-size 0.3rem
      text-align center
      margin-top 0.2rem
    .btn-back
      padding 0.1rem 0.2rem
      background-color white
      color #666
      border 1px solid white
      border-radius 3px

</style>
