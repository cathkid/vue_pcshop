<template>
<div class="main">
	 <div class="brand-box">
	 	<div class="product-slider">
	 		 <!-- Swiper -->
			  <div class="swiper-container">
			    <div class="swiper-wrapper">
			      <div class="swiper-slide" v-for="item in product.product" ><div class="img-border"><img v-bind:src='item.img'></div></div>
			    </div>
			    <!-- Add Pagination -->
			    <div class="swiper-pagination"></div>
			    <!-- Add Arrows -->
			    <div class="swiper-button-next"></div>
			    <div class="swiper-button-prev"></div>
			  </div>
			  
			  <div class="choice" v-show="isshow">
			  	<ul>
			  		<li v-for="item in product.product">
			  			<img v-bind:src='item.img'>
			  		</li>
			  	</ul>
			  </div>
	 	</div>
	 	<div class="product-info">
	 		<div class="title-box">
	 			<h5>{{product.name}}</h5>
	 			<p>{{product.brand_name}}</p>
	 			<p>{{product.goods_supplier_sn}}</p>
	 		</div>
	 		<div class="money"> 
	 			<h5>HKD $ {{product.price}}</h5>
	 		</div>
	 		<div class="size">
	 			<img src="../assets/size.png" />
	 			<span>SIZE & FIT GUIDE</span>
	 		</div>
	 		
	 		<div class="info-list">
	 			<h5>DESCRIPTION</h5>
	 			<P v-html="product.descs"> </P>
	 		</div>
	 		
	 		<div class="info-list">
	 			<h5>PRODUCT INFORMATION</h5>
	 			<P v-html="intraduction_en">  </P>
	 		</div>
	 		
	 		<div class="info-list">
	 			<h5>SHIPPING & RETURN</h5>
	 			<P v-html="product.shipping_instructions_en"></P>
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
      msg: 'Welcome to Your Vue.js App',
      product:[],
      isshow:true
    }
  },
   mounted() {
   	  this.getinfo();
  },
  updated(){
  	 this.setswiper();  
  },
  methods:{
  	 setswiper:function(){
  	 	var swiper1 = new Swiper('.swiper-container', {
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
  	 },
  	 getinfo:function(){
		var _this = this  
        var params = new URLSearchParams() 
        params.append('status', '1') 
        axios.post('/system/api.php?act=item_detail&item_id='+this.$route.query.code,params)
          .then(function (response) {
          	 _this.product = response.data;
          	 if( response.data.product.length = 1){
          	 	_this.isshow = false;
          	 }
             console.info(response.data );
             
          }) 	
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
	.choice{
		height: 28px;
		width: 400px;
		margin: 40px auto;
		text-align: center;
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
		margin: 3px;
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
       	margin: auto;
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
	.swiper-button-next, .swiper-button-prev {
    	background-size: 44px 44px;
	}
	.swiper-pagination-bullet {
	    width: 15px;
	    height: 15px;
	    display: inline-block;
	    border-radius: 100%;
	    background: #000;
	    opacity: .2;
	}
	.swiper-pagination-bullet-active {
	    opacity: 1;
	    background: #ea5514;
	}
	.img-border{
		margin: 10px 40px 10px 40px;
	    border: 1px dashed #ea5514;
	    height: 356px;
	}
</style>
