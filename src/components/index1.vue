<template>
  <div class="hello">
      <!-- 头部 -->
			<div class="head-box">
				   <div  class="head-box-center">
				   	  <img  @click="back('/index1/home',1)" class="logo" src="../assets/logo.png"  /> 
				   	  <ul>
				   	  	 <li @click="back('/index1/home',1)"  v-bind:class="{ active: isActive1 }"> NEW</li>
				   	  	 <li @click="back('/index1/categories',2)" v-bind:class="{ active: isActive2 }"> CATEGORIES</li>
				   	  	 <li @click="back('/index1/brand',3)"  v-bind:class="{ active: isActive3}"> BRANDS</li>
				   	  </ul>
				   	  <div @click="back('/index1/bbs')" class="service-box">
				   	  		<p>Customer <br/>Services</p>
				   	  </div>
				   </div>
			</div>
			
      <router-view/>
      
      <div class="footer-box">
      	<ul class="footer-box-center">
      		 <li @click="back('/index1/about',1)">ABOUT US</li>
      		 <li>PRIVACY NOTICE</li>
      		 <li>© 2018 CODELAB, inc.</li>
      	</ul>
      </div> 
      
      
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isActive1: true,
      isActive2: false,
      isActive3: false
    }
  },
  methods:{
  	  back:function(url,num){
  			this.$router.push({ path:url })
  			localStorage.num = num;
  			if(localStorage.num == 1){
  				this.isActive1=true;
  				this.isActive2=false;
  				this.isActive3=false;
  			}
  			if(localStorage.num == 2){
  				this.isActive1=false;
  				this.isActive2=true;
  				this.isActive3=false;
  			}
  			if(localStorage.num == 3){
  				this.isActive1=false;
  				this.isActive2=false;
  				this.isActive3=true;
  			}
  		} 
  },
  mounted(){
  	  	if(localStorage.num == 1){
  				this.isActive1=true;
  				this.isActive2=false;
  				this.isActive3=false;
  			}
  			if(localStorage.num == 2){
  				this.isActive1=false;
  				this.isActive2=true;
  				this.isActive3=false;
  			}
  			if(localStorage.num == 3){
  				this.isActive1=false;
  				this.isActive2=false;
  				this.isActive3=true;
  			}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 ;
}
a {
  color: #42b983;
}
p {
    display: block;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
.footer-box{
	width: 100%;
	height: 60px;
	background: #ea5514;
	margin-top: 40px;
	min-width: 1366px;
	position: fixed;
	bottom: 0;
}
.footer-box ul{
	width: 380px;
	margin: auto;
	line-height: 60px;
	color: #fff;
	text-align: center;
}
.footer-box ul li{
	float: left;
	width: 33.333%;
	font-size: 12px;
	cursor: pointer;
}
.head-box{
	width: 100%;
	height: 80px;
	margin-top: 0;
	position: fixed;
	background: #fff;
	top: 0;
}
.head-box-center{
	 width:1366px;
	 height: 80px;
	 margin:auto;
}
.logo{
	height: 40px;
	margin: 20px 40px;
	float: left;
	cursor: pointer;
}
.head-box-center ul li {
	width: 165px;
	height: 60px;
	box-sizing: border-box;
	margin-top: 10px;
	float: left;
	line-height: 60px;
	font-size: 15px;
	text-align: center;
	cursor: pointer;
}
.head-box-center ul .active{
	border-bottom:5px solid #000;
	font-weight: bold;
}
.service-box{
	height: 45px;
	width: 141px;
	box-sizing: border-box;
	border: 2px solid #000000;
	float: right;
	margin-top: 17.5px;
	margin-right:60px;
	cursor: pointer;
	background: url(../assets/icon4.png) no-repeat 15% 50%;
	background-size: 25%;
}
.service-box p {
    display: block;
    width: 90px;
    float: right;
    text-align: center;
    font-size: 13px;
    margin-top: 4px;
}
</style>
