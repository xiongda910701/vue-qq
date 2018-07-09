<template>
  <ul class="list">
      <li class="item" v-for="item in list" :key="item.id" :id="item.id" @click="goDetail(item.id)">
        <div class="image-box">
          <img src="" alt="" v-for="imgItem in item.imgList">
        </div>
        <div class="title">{{item.title}}</div>
        <div class="source-box">
          <span class="source">{{item.source}}</span>
          <span class="close">X</span>
        </div>
      </li>
  </ul>
</template>

<script>
  export default {
    name: "seePontList",
    data(){
      return {
        list:[
          {id:1, title:'泰迪趁主任不在家，偷偷钻进抱抱怀里睡大觉，同款睡姿萌翻众人', source:'土豆网', imgList:["","",""]},
          {id:2, title:'小苍外出游素颜道早安，粉丝：这个深V36E我们收下了', source:'小苍mm', imgList:["","",""]},
          {id:3, title:'动物园游客传来一阵呼声，看到熊嘴上的东西，工作人员惊了', source:'萌宠日常', imgList:["","",""]},
          {id:4, title:'网友刚买的小猫无故失踪，找遍家里都不见，最后发现它简直哭笑不得', source:'生活就要品美食', imgList:["","",""]},
          {id:5, title:'娃娃机里惊现活体蓝猫，价值上千万引人围观', source:'狗不理猫', imgList:["","",""]},
        ]
      }
    },
    methods:{
      //页面跳转函数
      goDetail(id){
         this.$router.push({
           path:'/detail',
           name:'ArticleDetail',
           params:{id:id}
         })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .list
    margin-top 0.8rem
    margin-bottom 0.98rem
    .item
      margin-bottom 0.1rem
      padding 0.15rem
      background-color white
      .image-box
        display flex
        flex-direction row
        justify-content space-between
        img
          width 2.3rem
          height 2.0rem
          background-color #f5f3f3
      .title
        padding 0.15rem 0
        font-size 0.28rem
        color #313131
      .source-box
        height 0.4rem
        line-height 0.4rem
        padding-bottom 0.2rem
        padding-left 0.2rem
        color #666
        font-size 0.24rem
        .source
          float left
        .close
          float right
          display inline-block
          width 1.0rem
          text-align right
          margin-right 0.2rem
</style>
