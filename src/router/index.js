import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Search from '../views/Search'
import Register from '../views/Register'

Vue.use(VueRouter)

// 路由配置项
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // 当当前路由匹配上时，meta参数就会生效（传入$route.meta中）
    // meta: {
    //   isShowFooter: false,
    // },
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    // meta: {
    //   isShowFooter: false,
    // },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      isHideFooter: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      isHideFooter: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
