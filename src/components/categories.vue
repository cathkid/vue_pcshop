<template>
<div class="main">
	 <ul class="categories-box">
	 	<li style="background:url(http://image.whistlerp.com/qqbg/2/banner/39/20180125102052_899.jpg) no-repeat center center;background-size: 100% 100%;">
	 		<div class="categories-box-1">  </div> 
	 		<div class="categories-box-2"> LIFESTYLE  </div>	 
	 	</li>
	 	
	 	<li style="background:url(http://image.whistlerp.com/qqbg/2/banner/39/20180125102052_899.jpg) no-repeat center center;background-size: 100% 100%;">
	 		<div class="categories-box-1">  </div> 
	 		<div class="categories-box-2"> LIFESTYLE  </div>	 
	 	</li>
	 	
	 	<li style="background:url(http://image.whistlerp.com/qqbg/2/banner/39/20180125102052_899.jpg) no-repeat center center;background-size: 100% 100%;">
	 		<div class="categories-box-1">  </div> 
	 		<div class="categories-box-2"> LIFESTYLE  </div>	 
	 	</li>
	 	
	 	<li style="background:url(http://image.whistlerp.com/qqbg/2/banner/39/20180125102052_899.jpg) no-repeat center center;background-size: 100% 100%;">
	 		<div class="categories-box-1">  </div> 
	 		<div class="categories-box-2"> LIFESTYLE  </div>	 
	 	</li>
	 </ul>
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
		min-height: 100px;
    	overflow: hidden;
	}
	.categories-box{
		width: 1366px;
		min-height: 230px;
		margin:40px auto;
	}
	.categories-box li {
		width: 600px;
		height: 230px;
		float: left;
		position: relative;
		margin: 40px 40px 0 0;
	}
	.categories-box li:nth-child(odd){
		margin-left: 40px;
	}
	.categories-box-1{
		width: 200px;
	    left: 200px;
	    height: 100px;
	    margin-top: 65px;
	    background-color: #fff;
	    opacity: 0.6;
	    position: absolute;
	    z-index: 1;
	}
	.categories-box-2{
	    width: 200px;
	    left: 200px;
	    height: 100px;
	    top: 65px;
	    position: relative;
	    z-index: 2;
	    display: table-cell;
	    color: #000;
	    text-align: center;
	    vertical-align: middle;
	    font-size: 24px;
	}
</style>
