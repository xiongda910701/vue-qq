<template>
  <div class="window" @click="changeWindowState" v-if="windowState">
    <ul class="list">
      <li class="item"
          v-for="item in list"
          :id="item.id"
          :key="item.id"
          @click="clickHandle"
      >
        <span class="iconfont icon" :class="item.className"></span>
        <span class="text">{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: "homeWindow",
    data(){
      return {
        list:[
          {id:1,text:'创建群聊',className:'icon-tianjiahaoyou'},
          {id:2,text:'加好友/群',className:'icon-tianjiahaoyou'},
          {id:3,text:'扫一扫',className:'icon-saoyisao'},
          {id:4,text:'面对面快传',className:'icon-chuanshu'},
          {id:5,text:'收付款',className:'icon-930caidan_yishoukuan'},
        ]
      }
    },
    computed:{
      ...mapState("Home",{
        windowState: 'windowState'
      })
    },
    methods:{
      ...mapMutations({
           changeWindowState:'Home/changeWindowState'
      }),
      clickHandle(e){
        e.stopPropagation();
         let type= Number(e.currentTarget.getAttribute('id'));//获取点击类型
         switch(type){
           case 1:
             console.log('点击了创建群聊');
             break;
           case 2:
             console.log('点击了加好友/群');
             break;
           case 3:
             console.log('点击了扫一扫');
             break;
           case 4:
             console.log('点击了面对面快传');
             break;
           case 5:
             console.log('点击了收付款');
             break;
           default:
             console.log('其他');
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .window
    position fixed
    top 0.8rem
    left 0
    bottom 0
    right 0
    z-index 100
    background-color rgba(0, 0, 0, 0.1)
    border-radius 5px
    .list
      margin 0.2rem 0.15rem 0 4.2rem
      padding 0.2rem 0.25rem 0 0.25rem
      background-color white
      border-radius 5px
      z-index 101
      &:before
        content ""
        position absolute
        top -0.2rem
        right 0.3rem
        border 0.2rem solid transparent
        border-bottom 0.2rem solid #fff
      .item
        height 0.7rem
        &:last-child
          margin-bottom 0
        .icon
          vertical-align middle
          font-size 0.35rem
        .text
          font-size 0.26rem
          margin-left 0.2rem
          font-weight 500

</style>
