import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from './components/TypeNav'
import './styles/reset.css'
Vue.config.productionTip = false
Vue.component('TypeNav' , TypeNav)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
