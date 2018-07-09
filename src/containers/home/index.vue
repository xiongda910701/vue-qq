<template>
  <div class="home-page">
    <home-header></home-header>
    <search text="搜索" state="false"></search>
    <!--<div>{{listData.name}}</div>-->
    <home-list></home-list>
    <home-window></home-window>
    <side-bar></side-bar>
    <footer-table></footer-table>

  </div>
</template>

<script>
  import FooterTable from '@/components/FooterTable'
  import Search from '@/components/search'
  import SideBar from '@/components/sidebar'
  import HomeHeader from './components/homeHeader'
  import HomeList from './components/list'
  import HomeWindow from './components/homeWindow'

  import { mapState, mapMutations, mapActions} from 'vuex'
  export default {
    name: 'Home',
    components: {
      FooterTable,HomeHeader,Search,HomeList,HomeWindow, SideBar
    },
    mounted(){
      this.getListData();
    },
    computed:{
      ...mapState("Home",{
        listData:'list'
      })
    },
    methods:{
      ...mapActions({
        getListData:'Home/getHomeData'
      })
    }
  }
</script>

<style lang="stylus" scoped>
    .home-page
      width 7.5rem
      font-size 0.24rem
</style>
