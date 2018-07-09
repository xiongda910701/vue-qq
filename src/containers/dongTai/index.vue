<template>
  <div class="dongtai-box">
    <dongtai-header></dongtai-header>
    <search text="大家都在搜:网红故宫猫 世界杯" state="true"></search>
    <tab-list></tab-list>
    <list :list="data1"></list>
    <list :list="data2"></list>
    <footer-table></footer-table>
  </div>
</template>

<script>
  import FooterTable from '@/components/FooterTable'
  import Search from '@/components/search'
  import DongtaiHeader from './components/header'
  import TabList from './components/tabList'
  import List from './components/list'

  export default {
    name: "dongtai",
    data:function () {
         return{
           data1:[
             {id:1,text:'游戏',icon:'icon-youxi',color:'dodgerblue'},
             {id:2,text:'小视频',icon:'icon-shipin',color:'goldenrod'},
             {id:3,text:'京东购物',icon:'icon-gouwu',color:'pink'},
             {id:4,text:'企鹅电竞',icon:'icon-034',color:'yellow'},
             {id:5,text:'鹅漫优品',icon:'icon-huangguan',color:'darkmagenta'},
             {id:6,text:'动漫',icon:'icon-qiatongxingxiang',color:'coral'},
             {id:7,text:'阅读',icon:'icon-yuedu',color:'dodgerblue'},
             {id:8,text:'音乐',icon:'icon-yinle',color:'coral'},
             {id:9,text:'直播',icon:'icon-zhibo',color:'red'},
             {id:10,text:'全民投票',icon:'icon-toupiao',color:'goldenrod'},
           ],
           data2:[
             {id:1,text:'运动',icon:'icon-feiji',color:'dodgerblue'},
             {id:2,text:'吃喝玩乐',icon:'icon-mifan',color:'goldenrod'},
             {id:3,text:'同城服务',icon:'icon-013',color:'pink'},
             {id:4,text:'腾讯课堂',icon:'icon-huangguan-',color:'darkmagenta'},
           ],
         }
    },
    components:{
      FooterTable,DongtaiHeader,Search,TabList,List
    }
  }
</script>

<style lang="stylus" scoped>
  .dongtai-box
    font-size 0.26rem
</style>
