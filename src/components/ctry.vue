<template>
	<div class="xuanze-wrap">
		<div class="top">
			<router-link to='/huangshan'><p><</p></router-link><p>城市选择</p><p></p>	
		</div>
		<center>热门目的地</center>
		<ul class="ctry-img">
		
		
			<li v-for='val in obj'>
				<img :src="val.image_src"><p>{{val.city_name}}</p>
			</li>			
		</ul>
		<center>全部目的地</center>
		<dl v-for='val in obj2'>
			<dt><p><span>|</span>{{val.name}}</p></dt>
			<dd><p v-for='vl in val.city_list'>{{vl.name}}</p></dd>
		</dl>
	</div>
</template>
<script type="text/javascript">
import axios from 'axios'
	export default {
		name:"ctry",
		data(){
			return{
				obj:true,
				obj2:true
				
			}
		},
		created(){
			var _this=this;
			axios.get('../../static/data/city.json').then(function(reg){				
			_this.obj=reg.data.data.hot_city_list;
			_this.obj2=reg.data.data.province_list;
				console.log(reg.data)
			})
		}

	}
</script>
<style type="text/css">
	.xuanze-wrap .top{padding: 0 10px;background: #fff;
			display: flex;justify-content: space-between;height: 49px;border-bottom: 1px solid #f7f7f7;line-height: 49px;
		}
	.xuanze-wrap .top img{
		width: 18px;height: 24px;margin-top: 13px;
	}
	.xuanze-wrap center{
		line-height: 50px;
	}
	.ctry-img{
		width: 94%;display: flex;justify-content: space-between;flex-wrap: wrap;margin: 0 auto;
	}
	.ctry-img li{
		width: 48.5%;
	}
	.ctry-img img{
		width: 100%;border-radius: 15px;margin-bottom: 10px;
	}
	.ctry-img li{
		position: relative;
	}
	.ctry-img li p{
		position: absolute;z-index: 9;color: #fff;bottom: 20px;left: 10px;font-size: 14px;
	}
	.xuanze-wrap dl{
		width: 94%;margin: 0 auto;
	}
	.xuanze-wrap dl span{
		color: blue;font-weight: bolder;
	}
	.xuanze-wrap dt{
		line-height: 40px;
	}
	.xuanze-wrap dd p{
		width: 48.5%;border: 1px solid #ccc;border-radius: 5px;text-align: center;margin-bottom: 10px;
	}
	.xuanze-wrap dd{
		display: flex;justify-content: space-between;flex-wrap: wrap;
	}
</style>