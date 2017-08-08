<template>
	<div>
		<header>
		<router-link to='/'><p><</p></router-link>
		<p>个人中心</p>
		<img src="../../static/images/main/icon_nav-caidan.png" @click="showToggle()">
	</header>
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
	<div class="hui">
		<center><img src="../../static/images/main/defaultpic.png"></center>
		<div><span></span>普通会员</div>
	</div>
	<ul class="dai">
		<li>
			<a href="../../static/html/ding.html">
				<img src="../../static/images/main/balance_icon.png">
				<p>待支付(0)</p>
			</a>
		</li>
		<li>
			<a href="../../static/html/ding.html">
				<img src="../../static/images/main/balance_icon.png">
				<p>待入住(0)</p>
			</a>	
		</li>
		<li>
			<a href="../../static/html/ding.html">
				<img src="../../static/images/main/balance_icon.png">
				<p>待评价(0)</p>
			</a>
		</li>
	</ul>
	<ul class="all-wrap">
		<a href="../../static/html/ding.html">
			<li><img src="../../static/images/main/icon-rechange.png">全部订单<i>></i></li>
		</a>
		<a href="../../static/html/chongzhi.html">
		<li><img src="../../static/images/main/icon-rechange.png">我要充值<i>></i><span><img src="../../static/images/main/icon-rechange-text.jpg" class="you"></span></li>
		</a>
		<a href="../../static/html/yu.html"">
			<li><img src="../../static/images/main/icon-rechange.png">我的余额<i>></i><span>0.00</span></li>
		</a>
		<li><img src="../../static/images/main/icon-rechange.png">我的优惠券<i>></i><span>7张可用</span></li>
		<li><img src="../../static/images/main/icon-rechange.png">我的呆币<i>></i><span>0个</span></li>
		<li><img src="../../static/images/main/icon-rechange.png">邀请好友<i>></i><span>与好友一起积攒度假基金</span></li>
		<li><img src="../../static/images/main/icon-rechange.png">个人资料<i>></i></li>
		<button>退出登录</button>

	</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		
		name:"main",
		data(){
			return {   
				isShow:true
			}
		},methods:{
			// 顶部显示隐藏
        	showToggle:function(){  
                this.isShow = !this.isShow           
            }
      }
  }
</script>
<style type="text/css">
		header{padding: 0 10px;background: #fff;
			display: flex;justify-content: space-between;height: 49px;border-bottom: 1px solid #f7f7f7;line-height: 49px;
		}
		header img{
			width: 18px;height: 24px;margin-top: 13px;
		}
		.hui{
			width: 100%;background: url('../../static/images/main/user-bg.jpg');height: 160px;
		}
		.hui img{
			width: 72px;height: 72px;margin: 15px 0;
		}
		.hui div{
			border-radius: 20px;border: 1px solid #fff;width: 112px;color: #fff;margin: 0 auto;display: flex;justify-content: space-around;line-height: 24px;font-size: 14px;
		}
		.hui span{
			background: url('../../static/images/main/diamonds.png') no-repeat;width: 21px;height:18px;display: block;margin-top: 4px;
			background-size:300%;
			background-position: 50% 0;
		}
		.dai{
			width: 100%;display: flex;justify-content: space-around;font-size: 12px;color: blue;text-align: center;background: #fff;padding: 15px 0;line-height: 18px;margin-bottom:10px;
		}
		.dai img{
			width: 15px;height: 15px;
		}
		.dai a{
			text-decoration: none;color: #000;
		}
		.all-wrap{
			font-size: 14px;line-height: 50px;background: #fff;padding: 0 10px;
		}
		.all-wrap li{
			border-bottom: 1px solid #f7f7f7;
		}
		.all-wrap li>img{
			width: 20px;height: 20px;vertical-align: middle;margin-right: 20px;
		}
		.all-wrap .you{
			width: 60px;height: 20px;
		}
		.all-wrap span{
			float: right;
		}
		.all-wrap i{
			float: right;margin-left: 15px;
		}
		.all-wrap button{
			width: 100%;line-height: 40px;margin-top:30px; background: #fff;font-size: 14px;
		}
		.all-wrap a{
			text-decoration: none;color: #000;
		}
		.sideBar{
		position: absolute;top: 49px;background: #fff;width:130px;right: 0;padding: 15px;padding-right: 0;text-decoration: none;color: #000;font-size: 14px;line-height: 30px;z-index: 99;
	}
	</style>