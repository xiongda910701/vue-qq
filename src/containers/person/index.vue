<template>
  <div class="person-box">
    <person-header></person-header>
    <user-info></user-info>
    <ul class="list">
      <li class="item"><span class="text">我的消息</span><span class="iconfont icon-qianjin"></span></li>
      <li class="item"><span class="text">我的话题</span><span class="iconfont icon-qianjin"></span></li>
      <li class="item"><span class="text">我的收藏</span><span class="iconfont icon-qianjin"></span></li>
      <li class="item"><span class="text">最近浏览</span><span class="iconfont icon-qianjin"></span></li>
      <li class="item"><span class="text">看视频，抢流量</span><span class="iconfont icon-qianjin"></span></li>
    </ul>
    <ul class="list">
      <li class="item"><span class="text">贴纸设置</span><span class="iconfont icon-qianjin"></span></li>
      <li class="item"><span class="text">设置</span><span class="iconfont icon-qianjin"></span></li>
    </ul>
  </div>
</template>

<script>
  import PersonHeader from './components/personHeader'
  import UserInfo from './components/userInfo'

  export default {
    name: "person",
    components: {
      PersonHeader, UserInfo
    }
  }
</script>

<style lang="stylus" scoped>
  .person-box
    .list
      margin-top 0.2rem
      background-color white
      font-size 0.26rem
      .item
        padding 0 0.2rem
        line-height 0.7rem
        border-bottom 1px solid #f5f3f3
        .iconfont
          float right
</style>
