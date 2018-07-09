<template>
  <div class="box">
    <see-point-header></see-point-header>
    <tab-list></tab-list>
    <see-point-list></see-point-list>
    <footer-table></footer-table>
  </div>
</template>

<script>
  import FooterTable from '@/components/FooterTable'
  import SeePointHeader from './components/seePointHeader'
  import TabList from './components/tabList'
  import SeePointList from './components/list'
  export default {
    name: "phoneBook",
    data:function () {
         return{
           msg:'hello'
         }
    },
    components:{
      FooterTable,SeePointHeader,TabList,SeePointList
    }
  }
</script>

<style lang="stylus" scoped>
   .box
    font-size 0.26rem

</style>
