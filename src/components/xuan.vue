<template>
<div class="xuan">
	<header>
		<router-link to='/huangshan'><p><</p></router-link>
		<p>筛选</p>
		<p>确定</p>
	</header>
	<div class="p">
		<span>清空选项</span>
	</div>
	<section class="tab">
			
			<div>
				<p>房型</p>
				<p>价格</p>
				<p>公寓</p>
			</div>
			<ul style="display: block">
				<li>不限</li>
				<li class="list">一室大床</li>
				<li class="list">一室双床房</li>
				<li class="list">套房</li>
				<li class="list">别墅</li>
			</ul>
			<ul class="hide">
				<li>不限</li>
				<li class="list">￥200以下</li>
				<li class="list">￥200-￥299</li>
				<li class="list">￥300-￥499</li>
				<li class="list">￥500以上</li>
			</ul>
			<ul class="hide">
				<li class="list">一呆云居.黄山湖景半岛</li>
			</ul>
		</section>
</div>
</template>
<script type="text/javascript">
	export default {
		name:"xuan",
		data(){
			return{

			}
		}

	}
</script>
<style type="text/css">
	header{padding: 0 10px;
			display: flex;justify-content: space-between;height: 49px;border-bottom: 1px solid #ccc;line-height: 49px;
		}
		.tab{
			display: flex;
		}
		.tab div{
			width: 25%;text-align: center;line-height: 40px;background: #f7f7f7;height: 100%;
		}
		.tab div p{
			border-bottom: 1px solid #ccc;
		}
		.tab ul{
			padding:0 10px;line-height: 40px;width: 75%;
		}
		.tab ul li{
			border-bottom: 1px solid #ccc;width: 100%;
		}
		.tab ul{
			display:none;
		}
		.tab div p:hover{
			background: #fff;
		}
		.p span{
			float: right;
		}
		.p{
			width: 100%;height: 30px;line-height: 30px;display: none;
		}
</style>