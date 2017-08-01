<template>
  <div>
    <div class="nav">
         <img src="../assets/logo.jpg" alt=""><input class="inp" type="text" value="" placeholder="好宝贝 等你搜"><input type="button" value="搜索" class="inp2"> <span class="fenlei">分类</span> <span class="denglu">登录</span>
    </div>
 
  <swiper :options="swiperOption" ref="mySwiper" style="margin-top: 49px;">
          <!-- slides -->
          <swiper-slide><img src="../assets/lun1.jpg" alt="" class="lun"></swiper-slide>
          <swiper-slide><img src="../assets/lun2.jpg" alt=""  class="lun"></swiper-slide>
          <swiper-slide><img src="../assets/lun3.jpg" alt="" class="lun"></swiper-slide>
          <swiper-slide><img src="../assets/lun4.jpg" alt="" class="lun"></swiper-slide>
          
          <!-- Optional controls -->
         <!--  <div class="swiper-pagination"  slot="pagination"></div> -->
       </swiper>
    <leader></leader>
    <fontlunbo></fontlunbo>
    <dongdongqiang></dongdongqiang>
     <listsshow></listsshow>
 </div>


</template>
<script>

  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import leader from './leader'
  import fontlunbo from './fontlunbo'
  import dongdongqiang from './dongdongqiang'
  import listsshow from './listsshow'

  export default {
  	name :'home',
  	data () {
  	   return {

  	   	swiperOption: {
            autoplay : 2000,
            loop : true,
            // pagination : '.swiper-pagination',
            autoplayDisableOnInteraction:true
        }

  	   }
  	},
    components:{
        leader,
        fontlunbo,
        dongdongqiang,
        listsshow
       
    }

  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  *{
    margin:0;
    padding: 0;
  }
  .nav{
    width:100%;
    height: 49px;
    display: flex;
    align-items: center;
    background-color: rgb(254,74,101);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 9999
  }
  .nav img{
    height: 25px;
  }
  .nav .inp{
    height: 25px;
    width: 170px;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .nav .inp2{
    height: 25px;
    width: 35px;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: rgb(254,74,101);
  }
  .fenlei{
    margin-left: 10px;
    margin-right: 10px; 
  }
  .fenlei,.denglu{
    font-size: 14px;
  }
  .lun{
    width: 100%;
    height: 130px;
  }

</style>
