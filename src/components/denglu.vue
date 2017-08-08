<template>
	<nav class="sideBar">
        <ul>
            <li><a href="/" class="home">首页</a></li>
            <li id="loginInfoWrap">
                <a href="../../static/html/main.html" class="sider-mine">
                    我的一呆<span>(未登录)</span>
                </a>
            </li>
            <li><a href="../../static/html/money.html">赚钱邀请卡</li>
            
            <li><a href="../../static/html/btn.html" class="down-load">下载APP</a></li>
        </ul>
    </nav>
	<header>
		<p><</p>
		<p>手机验证登录</p>
		<img src="../../static/images/main/icon_nav-caidan.png">
	</header>
	<section>
		<form class="wrap" action="../../index.html" onsubmit="return box()">
			<input type="tel" name="" placeholder="请输入手机号" class="tl">
			<input type="password" name="" placeholder="请输入密码" class="pas">
			<input type="submit" class="btn" value="登录">
			<div class="zczh"><p class="sp"></p><a href="###">注册账号</a></div>
		</form>	
	</section>
	<footer class="sm">
		<p><center>第三方账号登录</center></p>
		<img src="">
		<small>未注册一呆账号的手机，登录时将自动<br>注册一呆账号，且代表您已同意<span>《一呆<br><center>服务条款》</center></span></small>
	</footer>
</template>
<script type="text/javascript">
	export default {
		
		name:"main",
		data(){
			return {       
			}
		}
  }
</script>
<style type="text/css">
		*{
			margin: 0;padding: 0;
		}
		header{padding: 0 10px;
			display: flex;justify-content: space-between;height: 49px;border-bottom: 1px solid #ccc;line-height: 49px;
		}
		header img{
			width: 18px;height: 24px;margin-top: 13px;
		}
		.wrap{
			padding: 0 20px;
		}
		.tl, .pas{
			width: 100%;border: 0;border-bottom: 1px solid #ccc;line-height: 55px;font-size: 16px;outline: none;
		}
		.btn{
			width: 100%;height: 45px;background: blue;color: #fff;font-size: 14px;border-radius: 5px;margin-top: 20px;
		}
		.zczh{
			width: 100%;display: flex;justify-content: space-between;
		}
		.zczh a{
			text-decoration: none;line-height: 40px;
		}
		.sm{
			color: #666;
		}
		.sm small{
			position: fixed;bottom: 10px;left: 40px;
		}
		.sm span{
			color: blue;
		}
		.sm div{
			display: flex;
		}		
	</style>