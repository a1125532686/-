<template>
  <div>
    <Header></Header>
    <router-view />
    <Footer v-if="!$route.meta.isHideFooter"></Footer>
  </div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>
</style>
