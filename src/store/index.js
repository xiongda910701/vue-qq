import vue from 'vue'
import vuex from 'vuex'
import Home from './modules/home'
import SeePoint from './modules/seePoint'
vue.use(vuex);


const store = new vuex.Store({
 modules:{
   Home,SeePoint
 }
});

export default store;
