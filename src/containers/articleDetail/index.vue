<template>
  <div class="box">
    <div class="header">
      <router-link to="/kandian" tag="div">
        <div class="left"><span class="iconfont icon-return"></span>返回</div>
      </router-link>
      <div class="right"><span class="iconfont icon-msnui-more"></span></div>
    </div>
    <div class="title">泰迪趁主任不在家 头头钻进抱抱怀里睡大觉 同款睡姿萌翻众网友</div>
    <div class="info-box">
      <img src="" alt="">
      <div class="info">
        <p class="name">土豆萌宠</p>
        <p class="text">
          <span class="time">07-01</span>
          <span class="source">土豆萌宠</span>
          <span>阅读10000+</span>
        </p>
      </div>
      <div class="btn-box">
        <button type="button" class="btn">关注</button>
      </div>
    </div>
    <div class="content">
      <div class="p">
        现在有越来越多的人养狗，不同品种的狗有着不同的性格特点，不管是金毛的暖心、哈士奇的蠢萌还是中华田园犬的忠诚护主，狗狗都一直深受人们的喜爱。另外，养一只狗还能给枯燥的生活增添不少乐趣，它们有着仅用一个眼神或者动作就把人逗翻的神奇能力。
      </div>
      <img :src="dog1" alt="">
      <div class="p">
        一位宠主家里养了只泰迪，它非常可爱软萌，呆头呆脑的模样和圆滚滚的身材圈粉无数，是小区里的明星。自从主人生了宝宝之后，泰迪不但不争宠，还化身为保姆，每天最喜欢做的就是盯着小主人看，不管是被扯毛发还是咬耳朵都绝不还手。
      </div>
      <img :src="dog2" alt="">
      <div class="p">这天，主人要出去超市买点东西，泰迪趁着主人不在竟然钻进了宝宝怀里睡大觉。回家后，主人被眼前的这一幕萌坏了，泰迪和宝宝的同款睡姿实在是太有爱了，让主人忍不住拿起相机记录下这美好的一幕。</div>
      <img :src="dog3" alt="">
      <div class="p">主人：“不用说了，我罚你每天都要像今天一样哄宝宝睡觉”</div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "index",
    data() {
      return {
        dog1:require('@/assets/images/dog1.jpg'),
        dog2:require('@/assets/images/dog2.jpg'),
        dog3:require('@/assets/images/dog3.jpg'),
      }
    },
    mounted(){
      console.log(this.$router.history.current.params.id);//获取参数
    }
  }
</script>

<style lang="stylus" scoped>
  .box
    font-size 0.26rem
    .header
      display flex
      position fixed
      top 0
      width 7.5rem
      line-height 0.8rem
      background-color white
      color #666
      .left, .right
        flex 1
        .icon-return
          font-size 0.5rem
          vertical-align middle
      .right
        text-align right
        margin-right 0.2rem
    .title
      margin-top 0.8rem
      padding 0.4rem 0.2rem
      line-height 0.5rem
      background-color white
      font-size 0.4rem
    .info-box
      display flex
      padding 0.1rem 0.2rem 0.2rem 0.2rem
      background-color white
      img
        width 0.6rem
        height 0.6rem
        background-color #f5f3f3
        border-radius 100%
      .info
        width 5rem
        margin-left 0.2rem
        .name
          font-size 0.28rem
          margin 0.1rem 0
        .text
          font-size 0.24rem
          color #666
      .btn-box
        flex 1
        .btn
          width 100%
          height 0.45rem
          margin-top 0.1rem
          background-color deepskyblue
          color white
          border none
          border-radius 3px
    .content
      padding 0.2rem
      background-color white
      .p
        font-size 0.28rem
        color #666
        line-height 0.4rem
        margin-bottom 0.2rem
      img
        width 7rem
        height 8rem
        margin 0.3rem 0
        background-color #f5f3f3
</style>
