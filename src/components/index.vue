<template>
<div class="main">

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
	methods:{
		  back:function(url){
  			this.$router.push({ path:url })
  		}
	},
   	mounted() {
        // window.location.href = '/index1/home'
   		this.back('/index1/home');
   	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
