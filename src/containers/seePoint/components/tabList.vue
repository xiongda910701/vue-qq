<template>
  <div class="box" v-show="tabListState">
    <ul class="list">
      <li class="item"
          v-for="item in tabList"
          :key="item.id"
          :id="item.id"
          @click="changeTabListState"
      >
        <span>{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: "tabList",
    data(){
      return {
        tabList:[
          {id:1,text:'世界杯'},{id:2,text:'全民idol'},{id:3,text:'新闻'},{id:4,text:'新时代'},
          {id:5,text:'娱乐'},{id:6,text:'游戏'},{id:7,text:'动漫'},{id:8,text:'时尚'},
          {id:9,text:'科技'},{id:10,text:'体育'},{id:11,text:'搞笑'},{id:12,text:'美食'},
          {id:13,text:'汽车'},{id:14,text:'财经'},{id:15,text:'育儿'},{id:16,text:'情感'},
          {id:17,text:'星座'},{id:18,text:'教育'},{id:19,text:'萌宠'},{id:20,text:'游戏'},
          {id:21,text:'爱美丽'},{id:22,text:'黑科技'},{id:23,text:'NBA'},{id:24,text:'健康'},
          {id:25,text:'家居'},{id:26,text:'生活'},{id:27,text:'百科'},{id:28,text:'音乐'},
        ]
      }
    },
    computed:{
      ...mapState("SeePoint",{
        tabListState:'tabListState'
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
  .box
    position fixed
    top 0.8rem
    bottom 0.98rem
    left 0
    right 0
    background-color rgba(0,0,0,0.3)
    .list
      overflow hidden
      padding 0.45rem 0.2rem 0.1rem 0.2rem
      background-color white
      .item
        float left
        width 25%
        text-align center
        margin-bottom 0.35rem
        span
          display inline-block
          padding 0.2rem 0.36rem
          background-color #f5f3f3
          color #666
          font-size 0.22rem
          border-radius 0.25rem
</style>
