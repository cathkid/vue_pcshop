<template>
<div class="main">
	 <div class="brand-box">
		<div class="indexlist-titile">
			<h5>FEATURED ITEMS</h5>
			<p>TOTAL ITEMS: {{page_info}}</p>
		</div>	 	
	 	<div class="brandlist-content" >
	 		<ul>
	 			<li v-for="item in index_list"  @click="toproduct('/index1/product',item.id)">
	 				<img  v-bind:src='item.img' >
	 				<!--<h5>JONATHAN ADLER</h5>-->
	 				<p>{{item.name}}</p>
	 				<p>HKD $ {{item.price}}</p>
	 			</li>
	 		</ul>
	 		<div v-show="isShow" style="width: 100%;margin-bottom: 50px;overflow: hidden;">
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
      index_list:[],
      page_info:0,
       pageSet: {
        totalRow: 0,//required option
        language: 'en',//default: 'cn'
        pageSizeMenu: [10,10]//default: [10, 20, 50, 100]
      },
       isShow:true
    }
  },
  methods:{
  	getinfo:function(info){
  				console.info(info);
				var _this = this  
				
				
				if(this.$route.query.code == 'topic'){
					var params = new URLSearchParams() 
			        params.append('status', '1') 
			        axios.post('/system/api.php?act=item_list&topic_id=1',params)
			          .then(function (response) {
			          	_this.index_list = response.data.goods_list;
			          	_this.isShow = false;
			          	_this.page_info = response.data.goods_list.length;
			          }) 
				}else{ 
			        var params = new URLSearchParams() 
			        params.append('status', '1') 
			        axios.post('/system/api.php?act=category_goods_list&category_id='+this.$route.query.code+'&curPage='+ info.pageNumber,params)
			          .then(function (response) {
			          	 _this.index_list = response.data.goods_list;
			          	 _this.page_info =  response.data.total_num; 
			          	 _this.pageSet.totalRow = response.data.total_num; 
			             console.info(response.data );
			              
			          	 if(response.data.page_info.totalPage < 2){
			          	 	_this.isShow = false;
			          	 }
			          }) 
		         }
			},
			toproduct:function(url,value){
	  			console.info(value);
	  			this.$router.push({ path:url,query:{code:value} })
	  		},
  },
   mounted() {
   		 console.info(this.$route.query.code); 
   		 this.getinfo();
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
		margin: 40px 20px 40px 20px;
	}
</style>
