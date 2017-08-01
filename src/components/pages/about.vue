
<template>
	<div class="about">
		<div class="header">
			<div class="fa fa-arrow-left chevron" @click.stop.prevent="showAsideAbout">
				
			</div>
			<a href="#">
				关于应用
			</a>
		</div>
		<h2>Essential Links</h2>
	    <ul>
	      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
	      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
	      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
	      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
	      <br>
	      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
	    </ul>
	    <h2>Ecosystem</h2>
	    <ul>
	      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
	      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
	      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
	      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
	    </ul>
	</div>
</template>
<script>
	export default{
		methods: {
			showAsideAbout (){
				this.$store.commit('showAsideAbout',false);
			}
		}
	}
</script>

<style scoped="scoped">
	.about{
		width: 100%;
		height: 100%;
		flex: 1;
		z-index: 1500;
		position: absolute;
		top:0;
		left:0;
		background: #fff;
	}
	.about .header{
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