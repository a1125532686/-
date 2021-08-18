<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- <div class="swiper-slide"><img src="./images/banner1.jpg" alt="1"></div>
      <div class="swiper-slide"><img src="./images/banner2.jpg" alt="2"></div>
      <div class="swiper-slide"><img src="./images/banner3.jpg" alt="3"></div>
      <div class="swiper-slide"><img src="./images/banner4.jpg" alt="4"></div> -->
      <div class="swiper-slide" v-for="img in imageList" :key="img.id">
        <img :src="img.imgUrl" :alt="img.imgName" />
      </div>
    </div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  props:{
    imageList:Array
  },
  //监视属性更新
  watch:{
    imageList(){
    //等DOM元素更新完成
      this.$nextTick(()=>{
      new Swiper('.swiper-container', {
      //自动轮播
      autoplay:{
        dalay:2000
      },
      //无缝轮播
      loop:true,
      //左右箭头
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      //小圆点
      pagination: {
        el: '.swiper-pagination'
      },
      })
      })
    } 
}
}
</script>

<style></style>
