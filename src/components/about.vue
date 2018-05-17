<template>
<div class="main">
	 <div class="brand-box">
	 		<div class="about-box">about us 	</div> 		
	 </div>
	 
</div> 
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  	},
   	mounted() {
   	
    },  
    methods:{
  	  back:function(url,num){
  			this.$router.push({ path:url })
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
	}
</style>
