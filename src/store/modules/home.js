import {reqGetCategoryList , reqGetBanners} from '../../api/home'

const state = {
  //首页三级分类列表
  categoryList:[],
  //轮播图列表
  banners:[]

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
  }
}
//更新state数据
const mutations = {
  GET_CATEGORY_LIST(state,categoryList) {
    state.categoryList = categoryList
  },
  GET_BANNERS(state,banners) {
    state.banners = banners
  }
}

export default {
  namespaced:true,
  state,
  getters,
  actions,
  mutations,
}