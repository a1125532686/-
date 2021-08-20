<template>
<div>
  <div class="swiper-container" ref="container">
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
</div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  props: {
    imageList: Array,
  },
  //监视属性更新
  watch: {
    imageList: {
      handler(val){
        if(val.length === 0) return 
        //等DOM元素更新完成
        this.$nextTick(() => {
        const mySwiper = new Swiper(this.$refs.container,{
          //自动轮播
          autoplay: {
            dalay: 2000,
          },
          //无缝轮播
          loop: true,
          //左右箭头
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          //小圆点
          pagination: {
            el: ".swiper-pagination",
          },
        });
        mySwiper.el.onmouseover = function() {
          mySwiper.autoplay.stop();
        };
        mySwiper.el.onmouseout = function() {
          mySwiper.autoplay.start();
        };
        this.mySwiper = mySwiper
      });
      },
      immediate:true
    },
  },
  beforeDestroy(){
    this.mySwiper.onmouseover = null
    this.mySwiper.onmouseout = null
  }
};
</script>

<style scoped>
.swiper-container{
  height: 100%;
}
</style>
