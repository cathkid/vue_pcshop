<template>
<div class="main">
	 <div class="brand-box">
	 		<ul class="title"><li v-for="item in brand_key"  @click="showoff($event,item)"  class="brands_key">{{item}}</li></ul>
	 
	 		 <div class="brand-content">
	 		 	
	 		 	<div  v-for="item in brand_list"  class="item"  ref="showoffBox"  data="item.key" >
	 		 		<p class="brands_content">{{item.key}}</p>
	 		 		<ul>
	 		 			<li v-for="itemlist in item.value"   @click="toproduct('/index1/brand_list',itemlist.id)">{{itemlist.name}}</li>
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
	      msg: 'Welcome to Your Vue.js App',
	      brand_list:[],
	      brand_key:['#','&','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
	    }
  	},
   	mounted() {
   		this.getinfo();
    },  
    methods:{
  	  back:function(url,num){
  			this.$router.push({ path:url })
  		},
  		showoff:function(event,item){
  			  for(var i = 0 ; i < this.brand_list.length; i++ ){
  			 	 if(item == this.$refs.showoffBox[i].childNodes[0].innerHTML){
  			 	 	console.info(this.$refs.showoffBox[i].offsetTop);
		 	 		window.scrollTo(0, this.$refs.showoffBox[i].offsetTop -100); 
  			 	 }
  			 } 
		},
  		toproduct:function(url,value){
	  			console.info(value);
	  			this.$router.push({ path:url,query:{code:value}})
	  	},
	  	getinfo:function(){
				var _this = this  
		        var params = new URLSearchParams() 
		        params.append('status', '1') 
		        axios.post('/system/api.php?act=brand_list',params)
		          .then(function (response) {
		          	 _this.brand_list = response.data;
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
		min-height: 100px;
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
	    position: fixed;
	    left: 50%;
	    top: 50px;
	    margin-left: -400px;
	    background-color: #fff;
	}
	.brand-box .title li{
		float: left;
		width: 26px;
		text-align: center;
		cursor: pointer;
	}
</style>
