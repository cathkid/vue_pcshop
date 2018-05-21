<template>
<div class="main">
	 <div class="brand-box">
	 		<div class="bbs-box">
	 				<h5>CUSTOMER SERVICES</h5>
	 				<p class="desc">Customer service description text, customer service. Customer service description text, customer service text.</p>
	 				<div class="bbs-list">
	 					<span>CATEGORIES</span>
	 					<select v-model="cate">
	 						    <option selected value="1" data-en="Complaint">Complaint</option>
				                <option value="2" data-en="Compliment">Compliment</option>
				                <option value="3" data-en="Enquiry">Enquiry</option>
				                <option value="4" data-en="Suggestion">Suggestion</option>
				                <option value="5" data-en="Others ">Others</option>
	 					</select>
	 				</div>
	 				<div class="bbs-list">
	 					<span>NAME</span>
	 					<input  v-model="name" type="text" name="NAME">
	 				</div>
	 				<div class="bbs-list">
	 					<span>EMAIL</span>
	 					<input  v-model="email"  type="text" name="EMAIL">
	 				</div>
	 				<div class="bbs-list">
	 					<span>PHONE</span>
	 					<input  v-model="phone"  type="text" name="PHONE">
	 				</div>
	 				<div class="bbs-list">
	 					<span>DESCRIPTION</span>
	 					<textarea v-model="desc" placeholder=""></textarea>
	 				</div>
	 				<div class="bbs-list" style="height: 40px;margin-top: 50px;">
	 					<span>  &nbsp;</span>
	 					<div class="cancel" @click="back('/index1/home',1)" > CANCEL </div>
	 					<div class="submit" @click="getinfo()"> SUBMIT </div>
	 				</div>
	 		</div> 		
	 </div>
	 
</div> 
</template>

<script>
export default {
  name: 'bbs',
  data () {
	    return {
	      cate: 1,
	      name:'',
	      email:'',
	      phone:'',
	      desc:''
	    }
  	},
   	mounted() {
   	
    },  
    methods:{
  	  back:function(url,num){
  			this.$router.push({ path:url })
  		},
	  	getinfo:function(){
			var _this = this  
	        var params = new URLSearchParams() 
	        
	        if(_this.email.length< 1){
	        	 alert('Please fill in the complete mailbox');
	        	 return false;
	        }
	        
	        params.append('type', _this.cate)
	        params.append('name', _this.name) 
	        params.append('email',_this.email) 
            params.append('tel', _this.phone) 
            params.append('info',_this.desc) 
	        axios.post('/system/api.php?act=customer_service',params)
	          .then(function (response) {
	          	 _this.brand_list = response.data.goods_list;
	          	 if(response.data.status == 1){
	          	 	 alert('Submission of success');
	          	 }else{
	          	 	alert('Submission failure');
	          	 }
	             console.info(response.data);
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
	.brand-box{
		width: 1366px;
		margin: auto;
	}
	.bbs-box{
		width: 550px;
		margin: auto;
		margin-top: 40px;
	}
	.bbs-box h5{
		text-align: center;
		line-height: 100px;
		color: #ea5514;
		font-size: 24px;
	}
	
	.bbs-box .desc{
		text-align: center;
		line-height: 25px;
		color: #666;
		font-size: 18px;
		margin: 20px 0;
	}
	.bbs-list{
		margin-top: 40px;
		min-height: 32px;
		overflow: hidden;
		margin-bottom: 50px;
	}
	.bbs-list span{
		display: block;
		height: 30px;
		width: 150px;
		float: left;
	}
	.bbs-list input{
		display: block;
		height: 30px;
		width: 390px;
		float: left;
	}
	.bbs-list select{
		display: block;
		height: 30px;
		width: 390px;
		float: left;
	}
	.bbs-list textarea{
		display: block;
		height: 200px;
		width: 390px;
		float: left;
	}
	.bbs-list .cancel{
		width: 160px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		box-sizing: border-box;
		border: 2px solid #000;	
		float: right;
		font-size: 18px;
	}
	.bbs-list .submit{
		width: 160px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		box-sizing: border-box;
		border: 2px solid #000;	
		float: left;
		font-size: 18px;
	}
	
</style>
