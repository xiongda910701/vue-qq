<template>
  <ul class="footer-table">
    <li
      class="item"
      @click="clickHandle"
      v-for="(item,index) in list"
      :data-url="item.url"
      :class="item.isActive?'active':''"
    >
      <p class="icon-box"><span class="iconfont" :class="item.icon"></span></p>
      <p class="text-box">{{item.text}}</p>
    </li>
  </ul>
</template>

<script>
  import index from "../router";

  export default {
    name: 'FooterTable',
    data() {
      return {
        list: [
          {url:"/",text:"消息",className:"item",icon:"icon-icon--",isActive:false},
          {url:"/phone",text:"联系人",className:"item",icon:"icon-lianxiren",isActive:false},
          {url:"/kandian",text:"看点",className:"item",icon:"icon-xiaoyanjing",isActive:false},
          {url:"/dongtai",text:"动态",className:"item",icon:"icon-xingxing",isActive:false},
        ]
      }
    },
    mounted(){
      this.getCurrentPageUrl();
    },
    methods:{
      //菜单栏点击事件
      clickHandle(e){
        let page=e.currentTarget.getAttribute("data-url");
        //console.log(page);
        this.$router.push({"path":page});
      },
      //获取当前页面路径
      getCurrentPageUrl(){
        let currentPage=this.$router.history.current.fullPath;
        this.list.forEach((item,index)=>{
          item.isActive=false;
          if(item.url===currentPage){
            this.list[index].isActive=true
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .footer-table
    position fixed
    box-sizing border-box
    bottom 0
    left 0
    right 0
    height 0.98rem
    padding 0.1rem 0.2rem
    line-height 0.88rem
    font-size 0.24rem
    background-color white
    color #666
    border-top 1px solid #eee
    .item
      width 25%
      float left
      text-align center
      cursor pointer
      .icon-box
        height 0.5rem
        line-height 0.5rem
        span
          font-size 0.4rem
      .text-box
        height 0.2rem
        line-height 0.2rem
    .active
      color rgb(63,161,253)
</style>
