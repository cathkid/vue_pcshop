<template>
<div class="main">
	 <div class="brand-box">
	 	<div class="product-slider">
	 		 <!-- Swiper -->
			  <div class="swiper-container">
			    <div class="swiper-wrapper">
			      <div class="swiper-slide"><div class="img-border"><img src="http://image.whistlecms.com/oms/758/goods/20180403/PC_20180403100150_719617.png"></div></div>
			      <div class="swiper-slide"><div class="img-border"><img src="http://image.whistlecms.com/oms/758/goods/20180309/PC_20180309174423_486300.jpg"></div></div>
			    </div>
			    <!-- Add Pagination -->
			    <div class="swiper-pagination"></div>
			    <!-- Add Arrows -->
			    <div class="swiper-button-next"></div>
			    <div class="swiper-button-prev"></div>
			  </div>
			  
			  <div class="choice">
			  	<ul>
			  		<li>
			  			<img src="http://image.whistlecms.com/oms/758/goods/20180403/PC_20180403100150_719617.png">
			  		</li>
			  		<li>
			  			<img src="../assets/icon3.png">
			  		</li>
			  		<li>
			  			<img src="../../build/logo.png">
			  		</li>
			  	</ul>
			  </div>
	 	</div>
	 	<div class="product-info">
	 		<div class="title-box">
	 			<h5>GHIDINI 1961</h5>
	 			<p>RABBIT BRASS Doorstop</p>
	 			<p>tyle 2122121</p>
	 		</div>
	 		<div class="money"> 
	 			<h5>HKD $ 1,000</h5>
	 		</div>
	 		<div class="size">
	 			<img src="../assets/size.png" />
	 			<span>SIZE & FIT GUIDE</span>
	 		</div>
	 		
	 		<div class="info-list">
	 			<h5>DESCRIPTION</h5>
	 			<P>Offering a striking contrast between mass and lightness, this Tondo bowl from RabLabs is crafted by a Tuscan artisan with a multi-generational history of working with marble. Each design is hand-carved and takes months to produce, ensuring every piece is wholly unique. </P>
	 		</div>
	 		
	 		<div class="info-list">
	 			<h5>PRODUCT INFORMATION</h5>
	 			<P>Offering a striking contrast between mass and lightness, this Tondo bowl from RabLabs is crafted by a Tuscan artisan with a multi-generational history of working with marble. Each design is hand-carved and takes months to produce, ensuring every piece is wholly unique. </P>
	 		</div>
	 		
	 		<div class="info-list">
	 			<h5>SHIPPING & RETURN</h5>
	 			<P>Offering a striking contrast between mass and lightness, this Tondo bowl from RabLabs is crafted by a Tuscan artisan with a multi-generational history of working with marble. Each design is hand-carved and takes months to produce, ensuring every piece is wholly unique. </P>
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
   	     var swiper = new Swiper('.swiper-container', {
	      slidesPerView: 1,
	      spaceBetween: 30,
	      loop: true,
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });
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
	.choice{
		height: 28px;
		width: 400px;
		margin: 40px auto;
	}
	.choice ul li {
		height: 25px;
		width: 25px;
		box-sizing: border-box;
		border: 1px solid #000;
		cursor: pointer;
		margin-left: 10px;
	}
	.choice ul li img{
		width: 18px;
		height: 18px;
		margin: 2px;
	}
	.info-list{
		border-top: 1px solid #000;
		margin-top: 30px;
	}
	.info-list h5{
		text-align: center;
		line-height: 50px;
		font-size: 18px;
	}
	.info-list p{
		font-size: 15px;
	}
	.size{
		margin-top: 20px;
	}
	.size img{
		margin: 0px 0 0 140px;
    	float: left;
	}
	.size p{
		line-height: 42px;
    	display: block;
	}
	.brand-box{
		width: 1366px;
		margin: auto;
	}
	.product-slider{
		min-height: 550px;
		width: 550px;
		margin-top: 40px;
		float: left;
		margin-left: 80px;
	}
	.product-info{
	margin-left: 100px;
    min-height: 600px;
    width: 460px;
    float: left;
    margin-top: 40px;
    border-bottom: 2px solid #000;
    padding-bottom: 20px;	
	}
	.product-info .title-box{
		text-align: center;
		border-bottom: 2px solid #000;
		line-height: 25px;
		padding-bottom: 15px;
	}
	.product-info .title-box h5{
		font-size: 24px;
	}
	.money h5{
		font-size: 24px;
		text-align: center;
		line-height: 60px;
	}
	.product-info .title-box p{
		font-size: 17px;
	}
	.product-info .title-box p:nth-child(2){
		margin-top: 10px;
	}
	.swiper-container {
      width: 100%;
      height: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      }
     .swiper-slide img{
       	height: 200px;
       	width: 200px;
       	margin-top: 80px;
    }
       .swiper-slide{
       	height: 400px;
       	width: 400px;
    }
    .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
	    background-image: url(../assets/arrow-right1.png);
	    right: 0px;
	    left: auto;
	}
	.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
		background-image: url(../assets/arrow-left1.png);
	    left: 0px;
	    right: auto;
	}
	
	.img-border{
		margin: 10px 40px 10px 40px;
	    border: 1px dashed #ea5514;
	    height: 356px;
	}
</style>
