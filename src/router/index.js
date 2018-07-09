import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/home/index'
import PhoneBook from '@/containers/phoneBook/index'
import SeePoint from '@/containers/seePoint/index'
import DongTai from '@/containers/dongTai/index'
import ArticleDetail from '@/containers/articleDetail/index'
import PersonCenter from '@/containers/person/index'
import NotFound from '@/containers/404/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/phone',
      name:'phoneBook',
      component:PhoneBook
    },
    {
      path:'/kandian',
      name:'SeePoint',
      component:SeePoint
    },
    {
      path:'/dongtai',
      name:'DongTai',
      component:DongTai
    },
    {
      path:'/person',
      name:'PersonCenter',
      component:PersonCenter
    },
    {
      path:'/detail/:id',
      name:'ArticleDetail',
      component:ArticleDetail
    },
    {
      path:'/404',
      name:'404',
      component:NotFound
    }
  ]
})
