
<template lang="html">
	<div id="" class="header">
  		<div id="brand">
  			<p class="fa fa-navicon menu btn" @click.stop.prevent="showAsideMenu"></p>
  			<img src="../../assets/logo.png"/> 
  		</div>
  	</div>
</template>
<script>
export default{
  name: 'vhead',
  methods: {
    showAsideMenu () {
      console.log('show')
      this.$store.commit('showAsideMenu', true)
	  this.$store.commit('showMask',true)
    }
  }
}
</script>

<style scoped>
.header{
	height: 60px;
	width: 100%;
	/*主题默认色*/
	background: #14D489;
	position: fixed;
	z-index: 600;
	top: 0;
}
.menu{
	line-height: 60px;
	color: white;
	display: inline-block;
	cursor: pointer;
	margin:0;
	padding: 0;
	text-align: center;
}
img{
	height: 40px;
	margin: 10px;
	position: absolute;
	left: 50%;
	transform: translate3D(-50%,0,0);
	-webkit-transform: translate3D(-50%,0,0);
}
h2{
	float: left;
	line-height: 60px;
	color: white;
	margin: 0;
}
.btn{
	display: inline-block;
	height: 60px;
	width: 60px;
}
</style>
