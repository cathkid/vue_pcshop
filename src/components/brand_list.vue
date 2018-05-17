<template>
<div class="main">
	 <div class="brand-box">
		<div class="indexlist-titile">
			<h5>FEATURED ITEMS</h5>
			<p>TOTAL ITEMS: 200</p>
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
	.indexlist-titile{
		margin-top: 40px;
	}
	.indexlist-titile h5 {
		text-align: center;
		line-height: 40px;
		font-size: 24px;
	}
	.indexlist-titile p {
		text-align: center;
		line-height: 30px;
		font-size: 17px;
	}
	.brand-box{
		width: 1366px;
		margin: auto;
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
