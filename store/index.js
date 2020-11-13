export const state = () =>({
  selectMenuItem:'首页',
})
export const mutations = {
  changeSelectMenuItem(state,name){
    state.selectMenuItem = name
  }
}
