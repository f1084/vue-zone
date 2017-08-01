
<template>
	<div class="login">
		<div class="header">
			<div class="fa fa-arrow-left chevron" @click.stop.prevent="showLogin">
				
			</div>
			<a href="#">
				关于应用
			</a>
		</div>
		<div >
			
		</div>
	</div>
</template>
<script>
	export default{
		methods: {
			showLogin (){
				this.$store.commit('showLogin',false);
			}
		}
	}
</script>

<style scoped="scoped">
.login{
	width: 100%;
	height: 100%;
	flex: 1;
	z-index: 1500;
	position: absolute;
	top:0;
	left:0;
	background: #fff;
}
.login .header{
	height: 60px;
	width: 100%;
	background: #42B983;	
}
.chevron{
	height: 60px;
	width: 60px;
	display: inline-block;
	cursor: pointer;	
	background: #42B983;
	line-height: 60px;
	text-align: center;
	color: white;
}
.chevron:hover{
	background: #67D6A4;
}
</style>