<template>
<div class="main">
	 <ul class="categories-box">
	 	<li  v-for="item in category_list" @click="toproduct('/index1/index_list',item.id)"  v-bind:style="{ 'background-image': 'url(' + item.img + ')','background-repeat':'no-repeat','background-size':'100% 100%' }">  
	 		<div class="categories-box-1">  </div> 
	 		<div class="categories-box-2"> {{item.name}}  </div>	 
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
      msg: 'Welcome to Your Vue.js App',
      category_list:[]
    }
  },
   mounted() {
   		this.getinfo(); 
   },
		methods:{
  	  	back:function(url,num){
  			this.$router.push({ path:url })
  		},
  		toproduct:function(url,value){
	  			console.info(value);
	  			this.$router.push({ path:url,query:value })
	  	},
	  	getinfo:function(){
			var _this = this  
	        var params = new URLSearchParams() 
	        params.append('status', '1') 
	        axios.post('/system/api.php?act=category_list',params)
	          .then(function (response) {
	          	 _this.category_list = response.data;
	             console.info(response.data );
	          }) 	
		}	
  		
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
