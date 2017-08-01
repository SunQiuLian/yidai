
<template>
  <div class="hello">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide  v-for='val in msg'><img :src="val" alt="" class="lun"></swiper-slide>        
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
     </swiper 
     <p><center>全部目的地</center></p>
      <div class="all">
        <ul>
          <li v-for='val in dz'>{{val}}</li>
        </ul> 
        <dl>
          <div v-for='val in dzjson'>
            <dt>{{val.title}}</dt>
            <dd>
                <a href="./static/html/huangshan.html">
                <img :src="val.imgsrc"></a>
                <p>{{val.tit}}</p>
            </dd>
          </div>
        </dl>
      </div>
  </div>

</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'hello',
  data () {
    return {
      swiperOption: {
            autoplay : 2000,
            loop : true,
            pagination : '.swiper-pagination',
            autoplayDisableOnInteraction:true
        },
      msg: ['static/images/-606323556.jpg','static/images/-989917335.jpg','static/images/1493993325.jpg','static/images/1845785504.jpg'],
      dz:['安徽','北京','重庆','福建','广西','广东','海南','湖北','黑龙江','宁夏','陕西','山东'],
      dzjson:[  
        {
          title:"安徽",
          imgsrc:"static/images/黄山.jpg",
          tit:"黄山"
        },
        {
          title:"北京",
          imgsrc:"static/images/北京.jpg",
          tit:"北京"
        },
        {
          title:"重庆",
          imgsrc:"static/images/重庆.jpg",
          tit:"重庆"
        },
        {
          title:"福建",
          imgsrc:"static/images/泉州.jpg",
          tit:"泉州"
        },
        {
          title:"广西",
          imgsrc:"static/images/北海.jpg",
          tit:"北海"
        },
        {
          title:"广东",
          imgsrc:"static/images/广州.jpg",
          tit:"广州"
        },
        {
          title:"湖北",
          imgsrc:"static/images/咸宁.jpg",
          tit:"咸宁"
        },
        {
          title:"黑龙江",
          imgsrc:"static/images/佳木斯.jpg",
          tit:"佳木斯"
        },
        {
          title:"宁夏",
          imgsrc:"static/images/银川.jpg",
          tit:"银川"
        },
        {
          title:"陕西",
          imgsrc:"static/images/华山.jpg",
          tit:"华山"
        },
        {
          title:"山东",
          imgsrc:"static/images/青岛.jpg",
          tit:"青岛"
        }
      ]
    }
  }
}

</script>

Add "scoped" attribute to limit CSS to this component only
<style scoped>
.hello{
  width: 100%;overflow: hidden;
}
.hello center{
  color: blue;
}
.swiper-wrapper img{
  width: 100%;
}
.all{
  display: flex;height: 540px;overflow: hidden;
}
.all ul{
  width: 25%;background: #f7f7f7;text-align: center;line-height: 45px;
}
.all ul li:hover{
  background: #fff;
}
.all dl{
  width: 72%;padding-left: 3%;
}
.all dd{
  position: relative;
}
.all p{
  position: absolute;z-index: 9;left: 40%;top: 40%;color: #fff;
}
.all dl img{
  width: 100%;
}
.all dl dt{
  line-height: 40px;
}
</style>

<!-- <template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" style="margin-top: 49px;">
      slides
      <swiper-slide><img src="static/images/-606323556.jpg" alt="" class="lun"></swiper-slide>
      <swiper-slide><img src="static/images/-989917335.jpg" alt=""  class="lun"></swiper-slide>
      <swiper-slide><img src="static/images/-606323556.jpg" alt="" class="lun"></swiper-slide>
      <swiper-slide><img src="static/images/-989917335.jpg" alt="" class="lun"></swiper-slide>
      
      Optional controls
     <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
 </div>
</template>
<script>

  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name :'hello',
    data () {
       return {
        swiperOption: {
            autoplay : 2000,
            loop : true,
            // pagination : '.swiper-pagination',
            autoplayDisableOnInteraction:true
        }

       }
    }  
  }

</script> -->