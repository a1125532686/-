import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from './components/TypeNav'
import Carousel from './components/Carousel'
import './styles/reset.css'
import './Mock'
Vue.config.productionTip = false
Vue.component('TypeNav' , TypeNav)
Vue.component('Carousel',Carousel)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
