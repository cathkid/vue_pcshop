<template>
<div class="main">
	
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div v-for="item in bannerlist"  @click="toback(item.link_url)"  class="swiper-slide" v-bind:style="{ 'background-image': 'url(' + item.img_url + ')','background-repeat':'no-repeat','background-size':'100% 100%' }"> </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
  
  <div class="home-product">
  	<h5> FEATURED ITEMS  </h5>
  	<ul>
  		<li   v-for="item in productlist.slice(0,5)" >
  			<img  @click="toproduct('/index1/product',item.id)"  v-bind:src='item.img' />
  			<h4>{{item.name}}</h4>
  			<h4>HKD $ {{item.price}}</h4>
  		</li>
  	</ul>
  	<div  @click="toproduct('/index1/index_list','topic')"  class="home-product-more"> MORE </div>
  </div>


</div> 
    
</template>

<script>
import Swiper from 'swiper';
export default {
  name: 'index',
  data () {
    return {
      bannerlist:[],
      productlist:[],
      mess:'this is a page'
    }
  },
   mounted() {
		this.getinfo(); 
       },
   updated() {  
        this.setswiper();  
  },  
    	methods:{
	  	  	back:function(url,num){
	  			this.$router.push({ path:url })
	  		},
	  		toproduct:function(url,value){
	  			console.info(value);
	  			this.$router.push({ path:url,query:{code:value} })
	  		},
	  		toback:function(url){
	  			window.location = url;
	  		},
		  	getinfo:function(){
				var _this = this  
		        var params = new URLSearchParams() 
		        params.append('status', '1') 
		        axios.post('/system/api.php?act=main',params)
		          .then(function (response) {
		          	 _this.bannerlist = response.data.banner_list;
		          	 _this.productlist = response.data.topic_result.goods_array;
		             console.info(response.data.banner_list );
		             
		          }) 	
			},
			setswiper:function(){
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
					  } 
					});
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
    width: 40px;
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
.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
	    background-image: url(../assets/arrow-right.png);
	    right: 0px;
	    left: auto;
	}
	.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
		background-image: url(../assets/arrow-left.png);
	    left: 0px;
	    right: auto;
	}
	
.swiper-pagination-bullet{
	height: 15px;
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background-color: #ea5514 !important;
}	
</style>
