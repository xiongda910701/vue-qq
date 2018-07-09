export default {
  namespaced:true,
  state:{
    tabListState:false,
    icon:'icon-sanjiaoxing-down'
  },
  mutations:{
    changeTabListState(state){
       state.tabListState=!state.tabListState;
       if(state.tabListState){
         state.icon='icon-xiangshang1';
       }else{
         state.icon='icon-sanjiaoxing-down';
       }
    }
  }
}
