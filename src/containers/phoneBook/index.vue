<template>
  <div class="phone-book">
    <phone-header></phone-header>
    <search text="搜索" state="false"></search>
    <frank></frank>
    <list-item text="新朋友"></list-item>
    <list-item text="创建群聊"></list-item>
    <footer-table></footer-table>
  </div>
</template>

<script>
  import FooterTable from '@/components/FooterTable'
  import Search from '@/components/search'
  import ListItem from '@/components/list'
  import PhoneHeader from './components/phoneHeader'
  import Frank from './components/frank'
  export default {
    name: "phoneBook",
    data:function () {
         return{
           msg:'hello'
         }
    },
    components:{
      FooterTable,PhoneHeader,Search,Frank,ListItem
    }
  }
</script>

<style lang="stylus" scoped>
    .phone-book
      font-size 0.26rem
      position relative
</style>
