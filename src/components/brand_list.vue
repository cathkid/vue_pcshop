<template>
<div class="main">
	 <div class="brand-box">
	 	<div class="brandlist-title">
	 		<div class="left">
	 			{{name}}
	 		</div>
	 		<div class="right">
	 			<h5>ABOUT THE BRAND</h5>
	 			<p>{{descs}}</p>
	 		</div>
	 	</div>		
	 	
	 	<div class="brandlist-content">
	 		<ul>
	 			<li  v-for="item in brand_list" @click="toproduct('/index1/product',item.id)">
	 				<img v-bind:src='item.img' >
	 				<!--<h5>JONATHAN ADLER</h5>-->
	 				<p>{{item.name}}</p>
	 				<p>HKD $ {{item.price}}</p>
	 			</li>
	 		</ul>
	 		<div v-show="isShow" style="width: 100%;margin-bottom: 50px;overflow: hidden;" >
	 			<v-page :setting="pageSet" @page-change="getinfo"></v-page>
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
      pageSet: {
        totalRow: 0,//required option
        language: 'en',//default: 'cn'
        pageSizeMenu: [10,10]//default: [10, 20, 50, 100]
      },
       isShow:true,
       descs:'',
       name:''
    }
  },
   mounted() {
   	  console.info(this.$route.query.code); 
   	  this.getinfo();
  },
  methods:{
  	getinfo:function(info){
				var _this = this  
		        var params = new URLSearchParams() 
		        params.append('status', '1') 
		        axios.post('/system/api.php?act=brand_goods_list&brand_id='+this.$route.query.code+'&curPage='+info.pageNumber,params)
		          .then(function (response) {
		          	 _this.brand_list = response.data.goods_list;
		          	 _this.pageSet.totalRow = response.data.page_info.totalPage * response.data.page_info.pageSize;
		          	 _this.descs = response.data.brand.descs;
		          	 _this.name = response.data.brand.name;
		          	 if(response.data.page_info.totalPage < 2){
		          	 	_this.isShow = false;
		          	 }
		             console.info(response.data );
		          }) 	
			},
			toproduct:function(url,value){
	  			console.info(value);
	  			this.$router.push({ path:url,query:{code:value} })
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
		overflow: hidden;
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
	.brandlist-content ul{
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
		height: 200px;
		margin: 40px  20px 40px 20px;
	}
</style>
