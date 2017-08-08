
<template>
  <div class="hello">
  <div class="top">
      <div>
          <img src="static/images/logo.png">
      </div>
      <a href="./static/html/denglu.html">{{dl}}</a>
    </div>
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide  v-for='val in msg'><img :src="val" alt="" class="lun"></swiper-slide>        
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
     </swiper> 
     <p><center>全部目的地</center></p>
      <div class="all">
        <ul>
          <li v-for='(val,index) in obj' @click="clickBtn(n,index)">{{val.name}}</li>
        </ul> 
        <dl>
          <div v-for='val in obj'>
            <dt>{{val.name}}</dt>
            <div v-for='(va,index) in val.city_list'>             
              <dd>
                  <img  :src="va.VchCatePic" @click='zou(index)'>
                  <p>{{va.name}}</p>
              </dd>
            </div>
            
          </div>
        </dl>
      </div>
  </div>

</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
export default {
  name: 'hello',

  data () {
    return {
      n:'',
      obj:true,
      num:0,
      listItem:{},   
      swiperOption: {
            autoplay : 2000,
            loop : true,
            pagination : '.swiper-pagination',
            autoplayDisableOnInteraction:true
        },
      dl: '登录',
      arr:[],    
      msg: ['static/images/-606323556.jpg','static/images/-989917335.jpg','static/images/1493993325.jpg','static/images/1845785504.jpg']
    }
  },
    methods:{
      zou(index){
        this.$router.push({path:'/huangshan',query:{id:index}});
      },
      clickBtn:function(list,index){
        console.log(list);
        console.log(index);
        //详细信息
        this.listItem = list;
        //传过来的下标
        this.num = index;
      }
    },    
    urlzy(obj){    
      console.log(obj)
    },
    created(){
      var _this=this;
      axios.get('../../static/data/all.json').then(function(reg){        
      _this.obj=reg.data.data;                       
        // _this.arr.push('http://webpic.estay.com/img/city/'+encodeURIComponent(reg.data.data[0].city_list[0].name)+'.jpg') 
        // 转码                                         
      })
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  display: flex;
}
.all ul{
  overflow-y: auto;height:100%;
  width: 25%;background: #f7f7f7;text-align: center;line-height: 45px;
}
.all ul li:hover{
  background: #fff;
}
.all dl{
  width: 72%; position: absolute;right: 3%;
  right: 0;
}
.all dd{
  position: relative;
}
.all p{
  position: absolute;z-index: 9;left: 40%;top: 40%;color: #fff;
}
.all dl img{
  width: 100%;padding-right: 3%;
}
.all dl dt{
  line-height: 40px;
}
.top {
  width: 100%;display: flex;justify-content: space-between;line-height: 49px;padding: 0 10px;
}
.top>div{
  width:50%;
}
.top img{
  width: 100%;padding: 10px;padding-left: 0;
}
</style>

