<template>
<div class="main">
	 <div class="brand-box">
	 		<ul class="title"><li> ALL </li><li>#</li><li>&</li><li>A</li><li>B</li><li>C</li><li>D</li><li>E</li><li>F</li><li>G</li><li>H</li><li>I</li><li>J</li><li>K</li><li>L</li><li>M</li><li>N</li><li>O</li><li>P</li><li>Q</li><li>R</li><li>S</li><li>T</li><li>U</li><li>V</li><li>W</li><li>X</li><li>Y</li><li>Z</li></ul>
	 
	 		 <div class="brand-content">
	 		 	<div class="item">
	 		 		<p>ALL</p>
	 		 		<ul>
	 		 			<li @click="back('/index1/brand_list')">ADSFASDF</li>
	 		 			<li>ADSFASDF</li>
	 		 			<li>ADSFASDF</li>
	 		 		</ul>
	 		 	</div>
	 		 	
	 		 	<div class="item">
	 		 		<p>#</p>
	 		 		<ul>
	 		 			<li>ADSFASDF</li>
	 		 			<li>ADSFASDF</li>
	 		 			<li>ADSFASDF</li>
	 		 		</ul>
	 		 	</div>
	 		 	
	 		 	<div class="item">
	 		 		<p>&</p>
	 		 		<ul>
	 		 			<li>ADSFASDF</li>
	 		 			<li>ADSFASDF</li>
	 		 			<li>ADSFASDF</li>
	 		 		</ul>
	 		 	</div>
	 		 	
	 		 	<div class="item">
	 		 		<p>A</p>
	 		 		<ul>
	 		 			<li>ADSFASDF</li>
	 		 			<li>ADSFASDF</li>
	 		 			<li>ADSFASDF</li>
	 		 			<li>ADSFASDF</li>
	 		 			<li>ADSFASDF</li>
	 		 			<li>ADSFASDF</li>
	 		 			<li>ADSFASDF</li>
	 		 			<li>ADSFASDF</li>
	 		 			<li>ADSFASDF</li>
	 		 		</ul>
	 		 	</div>
	 		 	
	 		 </div>
	 </div>
	 
</div> 
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  	},
   	mounted() {
   	
    },  
    methods:{
  	  back:function(url,num){
  			this.$router.push({ path:url })
  		} 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.main{
		width: 1366px;
		margin: auto;
		min-height: 100px;
		overflow: hidden;
	}
	.brand-content{
		width: 600px;
		margin: 30px auto;
		min-height: 100px;
		
	}
	
	.brand-content .item{
		width: 100%;
		background: #eee;
		border-radius: 10px;
		padding: 15px;
		margin-top: 20px;
	}
	
	.brand-content .item p {
		display: block;
		width:165px;
		color: #fff;
		text-align: center;
		font-size: 70px;
		float: left;
	}
	
	.brand-content .item ul{
		margin-left:165px;
		margin-top: 17px;	
	}
	.brand-content .item ul li{
		width: 100%;
		height: 30px;
		text-align: left;
		font-size: 18px;
		cursor: pointer;
	}
	
	
	.brand-box{
		width: 1366px;
		margin: auto;
	}
	.brand-box .title {
		width: 800px;
		margin: 30px auto;
		height: 20px;
	}
	.brand-box .title li{
		float: left;
		width: 26px;
		text-align: center;
		cursor: pointer;
	}
</style>
