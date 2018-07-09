<template>
  <ul class="list">
    <li class="item" v-for="item in list" :key="item.id" :id="item.id">
      <img :src="item.imgPath" alt="" class="user-head">
      <div class="right">
        <div class="p">
          <span class="name">{{item.name}}</span>
          <span class="time">{{item.time}}</span>
        </div>
        <div class="p">
          <span class="desc">{{item.desc}}</span>
          <span class="num">{{item.num}}</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'HomeList',
    data(){
      return{
        list:[
          {id:1,imgPath:'',name:'测试一',time:'10:00',desc:'撒大大大大大所多阿达说的',num:5},
          {id:2,imgPath:'',name:'测试一',time:'10:00',desc:'撒大大大大大所多阿达说的',num:5},
          {id:3,imgPath:'',name:'测试一',time:'10:00',desc:'撒大大大大大所多阿达说的',num:5},
          {id:4,imgPath:'',name:'测试一',time:'10:00',desc:'撒大大大大大所多阿达说的',num:5},
          {id:5,imgPath:'',name:'测试一',time:'10:00',desc:'撒大大大大大所多阿达说的',num:5},
          {id:6,imgPath:'',name:'测试一',time:'10:00',desc:'撒大大大大大所多阿达说的',num:5},
          {id:7,imgPath:'',name:'测试一',time:'10:00',desc:'撒大大大大大所多阿达说的',num:5},
          {id:8,imgPath:'',name:'测试一',time:'10:00',desc:'撒大大大大大所多阿达说的',num:5},
          {id:9,imgPath:'',name:'测试一',time:'10:00',desc:'撒大大大大大所多阿达说的',num:5},
          {id:10,imgPath:'',name:'测试一',time:'10:00',desc:'撒大大大大大所多阿达说的',num:5},
          {id:11,imgPath:'',name:'测试一',time:'10:00',desc:'撒大大大大大所多阿达说的',num:5},
          {id:12,imgPath:'',name:'测试一',time:'10:00',desc:'撒大大大大大所多阿达说的',num:5},
          {id:13,imgPath:'',name:'测试一',time:'10:00',desc:'撒大大大大大所多阿达说的',num:5},
          {id:14,imgPath:'',name:'测试一',time:'10:00',desc:'撒大大大大大所多阿达说的',num:5},
          {id:15,imgPath:'',name:'测试一',time:'10:00',desc:'撒大大大大大所多阿达说的',num:5},
          {id:16,imgPath:'',name:'测试一',time:'10:00',desc:'撒大大大大大所多阿达说的',num:5}
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .list
    width 7.5rem
    margin-bottom 0.98rem
    .item
      display flex
      padding 0.1rem 0.15rem
      background-color white
      border-bottom 1px solid #eee
      .user-head
        width 0.8rem
        height 0.8rem
        background-color #ececec
        border-radius 100%
      .right
        flex 1
        margin-left 0.15rem
        .p
          height 0.4rem
          line-height 0.4rem
          .name
            float left
            font-size 0.28rem
            font-weight 500
            clear both
          .time
            float right
            font-size 0.24rem
            color #666
          .desc
            float left
          .num
            float right
            display inline-block
            width 0.35rem
            height 0.35rem
            line-height 0.35rem
            text-align center
            background-color red
            color white
            font-size 0.24rem
            border-radius 100%
</style>
