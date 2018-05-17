<template>
<div class="main">
	 <div class="brand-box">
	 	<div class="brandlist-title">
	 		<div class="left">
	 			ALESSI
	 		</div>
	 		<div class="right">
	 			<h5>ABOUT THE BRAND</h5>
	 			<p>Michael Aram is an American artist who discovered the rich traditions of metalworking after a life-defining trip to India. With metal at its core, the oponymous brand designs objects ranging from tableware to furniture; employing the unique skills of craftsmen who have melded their own lives upon such work.</p>
	 		</div>
	 	</div>		
	 	
	 	<div class="brandlist-content">
	 		<ul>
	 			<li>
	 				<img src="http://image.whistlecms.com/oms/goods/2482CCFL0496/2482CCFL0496-01.jpg">
	 				<h5>JONATHAN ADLER</h5>
	 				<p>RAINFOREST CANDLEHOLDER SET</p>
	 				<p>HKD $ 5,260</p>
	 			</li>
	 			<li>
	 				<img src="http://image.whistlecms.com/oms/goods/2482CCFL0496/2482CCFL0496-01.jpg">
	 				<h5>JONATHAN ADLER</h5>
	 				<p>RAINFOREST CANDLEHOLDER SET</p>
	 				<p>HKD $ 5,260</p>
	 			</li>
	 			<li>
	 				<img src="http://image.whistlecms.com/oms/goods/2482CCFL0496/2482CCFL0496-01.jpg">
	 				<h5>JONATHAN ADLER</h5>
	 				<p>RAINFOREST CANDLEHOLDER SET</p>
	 				<p>HKD $ 5,260</p>
	 			</li>
	 			<li>
	 				<img src="http://image.whistlecms.com/oms/goods/2482CCFL0496/2482CCFL0496-01.jpg">
	 				<h5>JONATHAN ADLER</h5>
	 				<p>RAINFOREST CANDLEHOLDER SET</p>
	 				<p>HKD $ 5,260</p>
	 			</li>
	 		</ul>
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
	.brand-box{
		width: 1366px;
		margin: auto;
	}
	.brandlist-title{
		width: 1366px;
		height: 160px;
		margin-top: 40px;
	}
	.brandlist-title .left{
		width:600px;
		height: 160px;
		float: left;
		margin-left: 40px;
		font-size: 72px;
		text-align: center;
		line-height: 160px;
	}
	.brandlist-title .right{
		height: 160px;
		width: 600px;	
		float: left;
		overflow: hidden;
	}
	.brandlist-title .right h5{
		font-size: 24px;
		height: 50px;
	}
	
	.brandlist-title .right p{
		font-size: 18px;
		line-height: 20px;
	}
	.brandlist-content{
		width: 1366px;
		min-height: 200px;
		margin-top: 20px;
		overflow: hidden;
	}
	.brandlist-content ul li{
		width: 280px;
		height:360px ;
		float: left;
	    margin-left: 60px;
	    text-align: center;
	}
	.brandlist-content ul li img{
		width: 200px;
		margin: 20px 40px 40px 20px;
	}
</style>
