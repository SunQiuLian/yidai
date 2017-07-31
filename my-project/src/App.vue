<template>
  <div id="app">
    <div class="top">
      <div>
          <img src="./assets/logo.png">
      </div>
      <h1>{{ msg }}</h1>
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
}
</script>

<style>
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
  width: 100%;padding: 10px;
}
</style>
