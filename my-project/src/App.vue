<template>
  <div id="app">
    <div class="top">
      <div>
          <img src="./assets/logo.png">
      </div>
      <a href="./static/html/denglu.html">{{ msg }}</a>
    </div>
   
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '登录'
    }
  }
  // methods:{
  //   btn:function(){
  //     alert(1)
  //   }
  // }
}
</script>

<style>
body{
  background: #fff;
}
.top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  line-height: 49px;
  padding: 0 10px;
}
.top>div{
  width:50%;
}
.top img{
  width: 100%;padding: 10px;padding-left: 0;
}
</style>
