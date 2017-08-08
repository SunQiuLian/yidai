<template>
	<div>
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
		<div class="top">
			<router-link to='/huangshan'><p><</p></router-link><p>公寓详情</p><img :src="caidian" @click="showToggle">		
		</div>
		<div class="move">			
			<swiper :options="swiperOption" ref="mySwiper">				
		        <swiper-slide v-for="val in horse"><img :src="val"></swiper-slide> 
		    </swiper> 
		</div>
		<div class="bin">
			<p>缤纷家庭房<span><img src=""></span></p>
			<p class="p2">一呆云居.黄山湖景半岛</p>
			<small>2室1卫22-42m</small><br>
			<small>2床（1.8*2.0m 1张）（1.3m*2.0 2张）</small>
			<dl>
				<dt><small>￥</small>341</dt><dd><p>门市价</p><del>￥388</del></dd>
			</dl>
		</div>
		<div class="tejia">
			<div>
				<center>特色描述</center>
				<center><small>带给您极致的入住体验</small></center>
			</div>			
			<p class="qin"><span>亲自度假</span><span>秀丽湖景</span></p>
		</div>
		<div class="cover">
			<img :src="obj.intro.cover_image">
			<p>{{obj.intro.cover_desc}}</p>
			<center>
				<div>查看全部</div>
			</center>
		</div>		
		<div class="show">
			<center>黄山半岛酒店</center>
			<div v-for="val in horse">
				<img :src="val">
				<p>{{obj.intro.cover_desc}}</p>
			</div>
		</div>
		<footer class="tel">
			<div>联系电话</div><div>立即预定</div>
		</footer>
	</div>
</template>
<script type="text/javascript">
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import axios from 'axios'

	export default {
		name:'by',
		data(){
			return{
				swiperOption: {    
		            autoplayDisableOnInteraction:true
		        },
				obj:true,
				isShow:true,
				caidian:"../../static/images/main/icon_nav-caidan.png",
				horse: []		       

			}
		},
		methods:{
			// 顶部显示隐藏
        	showToggle:function(){  
                this.isShow = !this.isShow           
            }
		},
		// 调数据
       created(){
			var _this=this;
			axios.get('../../static/data/get-by.json').then(function(reg){
				_this.obj=reg.data.data;
				_this.horse=reg.data.data.images;
				console.log(reg.data.data.images)
			});
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
	.sideBar{
		position: absolute;top: 49px;background: #fff;width:130px;right: 0;padding: 15px;padding-right: 0;text-decoration: none;color: #000;font-size: 14px;line-height: 30px;z-index: 99;
	}
	.bin{
		background: #fff;padding: 20px 10px;position:relative;margin-bottom: 10px;
	}
	.bin dl{
		position: absolute;right: 20px;bottom: 50px;display: flex;
	}
	.bin dl dt{
		font-size: 30px;color: yellow;margin-right: 10px;
	}
	.bin dl dd{
		font-size: 10px;
	}
	.bin .p2{
		font-size: 14px;
	}
	.bin small{
		font-size: 10px;
	}
	.tejia{
		background:#fff;padding:20px 15px; 
	}
	.tejia center{
		margin-bottom: 15px;
	}
	.tejia .qin{
		display: flex;font-size: 14px;
	}
	.tejia .qin span{
		border: 1px solid #ccc;display: block;border-radius: 15px 0 15px 0;padding: 0 15px;line-height: 25px;font-size: 12px;margin-right: 10px;color: #ccc;
	}
	.cover{
		padding:0 10px; background: #fff;padding-bottom: 20px;
	}
	.cover p{
		margin:10px 0;font-size: 14px;
	}
	.cover img{
		width: 100%;
	}
	.cover center div{
		color: blue;border: 1px solid blue;width: 100px;font-size: 14px;padding:5px 0;border-radius: 5px; margin-top: 20px;
	}
	.show center{
		padding: 15px 0;
	}
	.hui{
		height: 10px;background: #ccc;
	}
	.show{
		margin-top: 10px;padding: 0 10px;
	}
	.show img{
		width: 100%;
	}
	.tel{
		display: flex;line-height: 50px;position: fixed;bottom: 0;width: 100%;
	}
	.tel div:nth-child(1){
		width: 20%;text-align: center;font-size: 14px;border: 1px solid #ccc;background: #fff;
	}
	.tel div:nth-child(2){
		width: 80%;background:blue;text-align: center;color: #fff;
	}
</style>
