<template>
<div class="main">
	 <div class="brand-box">
	 		<div class="about-box" v-html='content'> </div> 		
	 </div>
</div> 
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      content:'',
      codeid:1,
    }
  	},
   	mounted() {
   		this.codeid = this.$route.query.code;
   		localStorage.aboutid = this.$route.query.code;
   		this.getinfo();
    },  
    methods:{
  	  	back:function(url,num){
  			this.$router.push({ path:url })
  		},
	  	getinfo:function(){
			var _this = this  
	        var params = new URLSearchParams() 
	        params.append('status', '1') 
	        axios.post('/system/api.php?act=article_detail&article_id='+this.codeid,params)
	          .then(function (response) {
	          	 _this.content = response.data.content;
	             console.info(response.data );
	          }) 	
		} 
  },
  watch:{
   '$route'(to, from){
   		window.location.reload();
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
	.about-box{
		margin-top: 40px;
		margin-bottom: 50px;
	}
</style>
