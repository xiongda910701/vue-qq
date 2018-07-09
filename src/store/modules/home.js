import getData from '@/service/getData'

export default {
  namespaced:true,
  state: {
    windowState: false,
    sideBarState:false,
    list:{}
  },
  getters: {},
  actions: {
    getHomeData({commit}){
      getData('post','http://127.0.0.1:7001/list',{name:'xd'},function (data) {
        commit({
          type:'getHomeData',
          data:data
        })
      });
    }
  },
  mutations: {
    changeWindowState(state) {
      state.windowState = !state.windowState;
    },
    changeSideBarState(state) {
      state.sideBarState = !state.sideBarState;
    },
    getHomeData(state,payload){
      state.list=payload.data;
    }
  }
}
