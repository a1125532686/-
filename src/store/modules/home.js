import {reqGetCategoryList , reqGetBanners , reqGetFloors} from '../../api/home'

const state = {
  //首页三级分类列表
  categoryList:[],
  //轮播图列表
  banners:[],
  floors:[]

}

const getters = {}
//发送请求
const actions = {
  async getCategoryList({commit}) {
    try{
      const categoryList = await reqGetCategoryList()
      commit('GET_CATEGORY_LIST', categoryList)
    }catch(e){
      console.log(e);
    }
  },
  async getBanners({commit}) {
    try{
      const banners = await reqGetBanners()
      commit('GET_BANNERS', banners)
    }catch(e){
      console.log(e);
    }
  },
  async getFloors({commit}) {
    try{
      const floors = await reqGetFloors()
      commit('GET_FLOORS', floors)
    }catch(e){
      console.log(e);
    }
  }
}
//更新state数据
const mutations = {
  GET_CATEGORY_LIST(state,categoryList) {
    state.categoryList = categoryList
  },
  GET_BANNERS(state,banners) {
    state.banners = banners
  },
  GET_FLOORS(state,floors) {
    state.floors = floors
  }
}

export default {
  namespaced:true,
  state,
  getters,
  actions,
  mutations,
}