<template>
<div class="main">
	
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" style="background: url(http://image.whistlerp.com/qqbg/2/banner/39/20180125102052_899.jpg) no-repeat center center;background-size: 100% 100%;"> </div>
	    <div class="swiper-slide" style="background: url(http://image.whistlerp.com/qqbg/2/banner/37/20180125102207_772.jpg) no-repeat center center;background-size: 100% 100%;"> </div>
	    <div class="swiper-slide" style="background: url(http://image.whistlerp.com/qqbg/2/banner/39/20180125102052_899.jpg) no-repeat center center;background-size: 100% 100%;"> </div>
	    <div class="swiper-slide" style="background: url(http://image.whistlerp.com/qqbg/2/banner/37/20180125102207_772.jpg) no-repeat center center;background-size: 100% 100%;"> </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
  
  <div class="home-product">
  	<h5> FEATURED ITEMS </h5>
  	<ul>
  		<li @click="back('/index1/product')" >
  			<img src="http://image.whistlecms.com/oms/goods/2482CCFL0498/2482CCFL0498-01.jpg" />
  			<h4>GHIDINI 1961</h4>
  			<h4>HKD $ 1,000</h4>
  		</li>
  		<li>
  			<img src="http://image.whistlecms.com/oms/goods/2482CCFL0498/2482CCFL0498-01.jpg" />
  			<h4>GHIDINI 1961</h4>
  			<h4>HKD $ 1,000</h4>
  		</li>
  		<li>
  			<img src="http://image.whistlecms.com/oms/goods/2482CCFL0498/2482CCFL0498-01.jpg" />
  			<h4>GHIDINI 1961</h4>
  			<h4>HKD $ 1,000</h4>
  		</li>
  		<li>
  			<img src="http://image.whistlecms.com/oms/goods/2482CCFL0498/2482CCFL0498-01.jpg" />
  			<h4>GHIDINI 1961</h4>
  			<h4>HKD $ 1,000</h4>
  		</li>
  		<li>
  			<img src="http://image.whistlecms.com/oms/goods/2482CCFL0498/2482CCFL0498-01.jpg" />
  			<h4>GHIDINI 1961</h4>
  			<h4>HKD $ 1,000</h4>
  		</li>
  	</ul>
  	<div  @click="back('/index1/brand_list')"  class="home-product-more"> MORE </div>
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
   			    var swiper = new Swiper('.swiper-container',{
						autoplay:3000,
						speed:1000,
						autoplayDisableOnInteraction : false,
						loop:true,
						spaceBetween:2,
						centeredSlides : true,
						slidesPerView:2,
					  pagination: {
					    el: '.swiper-pagination',
					    clickable: true,
					  },
					  navigation: {
					    nextEl: '.swiper-button-next',
					    prevEl: '.swiper-button-prev',
					  },
						onInit:function(swiper){
							swiper.slides[2].className="swiper-slide swiper-slide-active";//第一次打开不要动画
							},
				        breakpoints: { 
				                668: {
				                    slidesPerView: 1,
				                 }
				            }
						});
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

.home-product{
	width: 1366px;
	height: 336px;
	margin-top: 25px;
	background: #eee;
	cursor: pointer;
}
.home-product h5{
	text-align: center;
	line-height: 50px;
	font-size: 15px;
}
.home-product ul li{
	float: left;
	height: 250px;
	width: 200px;
	margin-left: 22px;
}
.home-product ul li img{
	height: 200px;
	width: 200px;
	border: 1px dashed #ea5514;
}
.home-product ul li h4{
	text-align: center;
	line-height: 25px;
}
.home-product ul li h4:nth-child(3){
	font-weight: 100;
}
.home-product ul {
	float: left;
}
.home-product-more{
	float: left;
	height: 200px;
	width: 200px;
	margin-left: 30px;
	background: #ea5514;
	color: #f7b3a2;
	font-size: 28px;
	line-height: 200px;
	text-align: center;
	font-weight: bold;
	cursor: pointer;
}

 .swiper-container {
	width: 100%;
	height: 357px;
	padding-bottom: 30px;
	.swiper-wrapper {
	    width: 100%;
	    height: 100%;
	}
	.swiper-slide {
	background-position: center;
	background-size: cover;
	width: 100%;
	height: 100%;
		img {
		    width: 100%;
		    height: 100%;
		}
	}
}

.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    -webkit-box-shadow: -10px 0px 21px #000;
    box-shadow: -10px 0px 21px #000;
    right: 0px;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    -webkit-box-shadow: 10px 0px 21px #000;
    box-shadow: 10px 0px 21px #000;
    left: 0px;
}
.swiper-button-next, .swiper-button-prev {
    background-color: #000;
    background-repeat: no-repeat;
    opacity: 0.3;
}
.swiper-button-next, .swiper-button-prev {
    position: absolute;
    top: 6%;
    width: 26px;
    height: 356px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    background-size: 44px 44px;
    background-position: center;
    background-repeat: no-repeat;
}
.swiper-pagination-bullet{
	height: 15px;
}
.swiper-pagination-bullet-active{
	background: #ea5514 !important;
}
</style>
