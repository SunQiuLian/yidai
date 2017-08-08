<template>
<div class="ctry-wrap">
<!-- 点击显示 -->
	<nav class="sideBar" v-show="!isShow">
        <ul>
            <li><router-link to='/'>首页</router-link></li>
            <li>
                <router-link to='/main'>我的一呆<span>(未登录)</span></router-link>
            </li>
            <li><a href="./static/html/money.html">赚钱邀请卡</a></li>
            
            <li><a href="./static/html/btn.html">下载APP</a></li>
        </ul>
    </nav>
    <!-- 顶部 -->
	<div class="top">
		<router-link to='/'><p><</p></router-link><p @click="ctry">黄山</p><img :src="caidian" @click="showToggle">		
	</div>
	<div  class="horse" v-for="val in horse">
		<!-- 轮播图 -->
		<div class="move">			
			<swiper :options="swiperOption" ref="mySwiper">				
		        <swiper-slide v-for="va in val.images"><img :src="va" @click="by"><p class='apart'>{{val.apartment_name}}</p></swiper-slide> 
		    </swiper> 
		</div>
		<div class="bz">
			<div>
				<p>{{val.room_type_name}}<img src="../../static/images/bottom/ap_type_0.jpg"><img src="../../static/images/bottom/is_fran_1.png"></p>
				<p>1室x|约30m|1床</p>
			</div>
			<div class="te">
				<div><small>￥</small>{{val.price}}</div>
				<div>
					<span>特价</span>
					<del>￥{{val.basic_price}}</del>				
				</div>
				
			</div>
		</div>
	</div>
	<center>暂无更多产品哦</center>
	<div class="foot"></div>
	<!-- 底部 -->
	<footer class="filter-footer">
        <div>
        	<router-link to='/'>
	            <img src="../../static/images/bottom/2017_08_01_16_00_03.gif">
	            <p class="pfont"><span class="name">选择日期</span></p>
            </router-link>
        </div>
        <div class="zhi" @click="show">
            <img src="../../static/images/bottom/2017_08_01_16_00_05.gif">        
            <p class="pfont"><span class="name">智能排序</span></p>
        </div>
        <div>
        	<span @click="xuanze">
	            <img src="../../static/images/bottom/2017_08_01_16_00_07.gif">       
	            <p class="pfont"><span class="name">更多筛选</span><i class="icon icon-tick"></i></p>
	        </span>
        </div>
    </footer>
    <section class="dialog" v-show="!Show">
        <ul>           
            <li>智能排序</li>
        
            <li @click='sort1()'>评分由高到低</li>
        
            <li @click='sort2()'>价格由低到高</li>               
        </ul>
    </section>	
</div>
</template>
<script type="text/javascript">

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
	export default {		
		name:"huangshan",
		data(){
			return {
				swiperOption: {    
		            autoplayDisableOnInteraction:true
		        },
				obj:true,
				isShow:true,
				// brr:[],
				Show:true,
				caidian:"../../static/images/main/icon_nav-caidan.png",
				horse: []		       
			}
		},
		// 显示隐藏功能
		methods:{
			// 顶部显示隐藏
        	showToggle:function(){  
                this.isShow = !this.isShow           
            },
            // 排序显示隐藏
            show:function(){  
                this.Show = !this.Show                        
            },
            // 降序
            sort2(){           	
        		function compare(property) {
                    return function (a,b) {
                        var value1=a[property];
                        var value2=b[property];
                        return value1-value2;
                    }
                }
	         this.horse.sort(compare('price'))
            } ,
            // 升序
            sort1(){           	
        		function compare(property) {
                    return function (a,b) {
                        var value1=a[property];
                        var value2=b[property];
                        return value2-value1;
                    }
                }
	         this.horse.sort(compare('price'))
            } ,
            // 进入筛选页面
	      	xuanze(){
	        	 this.$router.push('/xuan');
	      	},
	      	// 进入选择城市页面
	      	ctry(){
	        	 this.$router.push('/ctry');
	      	},
	      	// 进入详情页面
	      	by(){
	        	 this.$router.push('/by');
	      	},// 进入详情页面
	      	main(){
	        	 this.$router.push('/main');
	      	}
      },
      // 调数据
       created(){
			var _this=this;
			axios.get('../../static/data/list.json').then(function(reg){				
			_this.horse=reg.data.data.list;
				console.log(reg.data.data.list)
			})
		}
	}
</script>
<style type="text/css">
	.top{padding: 0 10px;background: #fff;
			display: flex;justify-content: space-between;height: 49px;border-bottom: 1px solid #f7f7f7;line-height: 49px;
		}
	.top img{
		width: 18px;height: 24px;margin-top: 13px;
	}
	.horse .move{
		width: 100%;
	}
	.horse .apart{
		position: absolute;z-index: 999;right: 10px;bottom:10px;color: #fff;font-size: 9px;background: rgba(0,0,0,0.3);border-radius:5px;line-height:25px;
	}
	.move img{
		width: 100%;height: 250px;
	}
	.bz{
		display: flex;width: 100%;justify-content: space-between;padding: 10px 4%;background: #fff;
	}
	.bz p img{
		width: 30px;height: 15px;
	}
	.bz .te span{
		background: url('../../static/images/bottom/sales-bg.png');color: #fff;font-size: 9px;width: 50px;height: 19px;display: block;background-size: 100%;padding-bottom: 4px;text-align: center;
	}		
	.te{
		display: flex;
	}
	.te div:nth-child(1){
		line-height: 36px;color: yellow;font-size: 30px;
	}
	.te small{
		font-size: 9px;
	}
	.filter-footer{
		display: flex;justify-content: space-between;width: 100%;position: fixed;bottom: 0;padding: 10px 0;border-top: 1px solid #f7f7f7;background: #fff;z-index: 999;
	}
	.filter-footer div{
		text-align: center;width: 34%;font-size: 12px;
	}
	.filter-footer a{
		text-decoration: none;color: yellow;
	}
	.foot{
		height: 60px;
	}
	.dialog{
		width: 100%;background: #fff;position: fixed;bottom: 50px;z-index: 99;
	}
	.dialog li{
		line-height: 43px;border-bottom: 1px solid #f7f7f7;text-align: center;
	}
	.sideBar{
		position: absolute;top: 49px;background: #fff;width:130px;right: 0;padding: 15px;padding-right: 0;text-decoration: none;color: #000;font-size: 14px;line-height: 30px;z-index: 99;
	}

</style>
