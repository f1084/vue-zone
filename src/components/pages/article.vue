<template>
	<div class="article">
		<div class="header">
			<div class="fa fa-arrow-left arrow" @click.stop.prevent="showArticle(null)">
				
			</div>
			<a href="#">
				关于应用
			</a>
		</div>
		<div class="content .scrollbar-17">
			<vloading v-show="isLoading"></vloading>
			<div class="content-wrap">
				<header>
					<h3>{{articleData.title}}</h3>
					<div class="user-info">
						<img :src="articleData.author.avatar_url"/>
						<p>{{articleData.author.loginname}}</p>
					</div>
				</header>
				<hr />
				<section v-html="articleData.content" class="typo"></section>
			</div>
		</div>
		<div class="bottom"></div>
	</div>
</template>

<script>
	import Vloading from '../common/articleLoading'
	export default{
		components:{
			Vloading
		},
		created() {
			let url="https://www.vue-js.com/api/v1/topic/"+this.$store.state.articleId;
			this.$store.commit('loadingArticleData',{isArticleLoading: true});
			//console.log(url);
	    	this.getData(url);
		},
		computed: {
		    articleId() {
		      return this.$store.state.articleId
		    },
		    isLoading() {
		    	return this.$store.state.isArticleLoading
		   	},
		   	articleData(){
		   		return this.$store.state.article
		   	}
	    },
		methods: {
			showArticle (id){//显示界面
				this.$store.commit('showArticle',{isShowArticle:false,articleId:id});
			},
			getData(url){
				console.log("me url");
				this.axios.get(url).then(
//					function (response) {
//					    console.log(response.data.data.title);
//					}
					article => this.$store.commit('loadingArticleData', {article: article.data.data, isArticleLoading: false})
				).catch(
			    	error => console.log(error+'hhhh')
			  	);
			}
		}
	}
</script>

<style scoped>
@import url("../../../static/style/typo.css");
/*@import url("../../../static/style/markdown.css");*/
@import url("../../../static/style/scroll.css");
.article{
	width: 100%;
	height: 100%;
	flex: 1;
	z-index: 1500;
	position: absolute;
	top:0;
	left:0;
	background: #fff;
}
.article .header{
	height: 60px;
	width: 100%;
	background: #42B983;	
}
.arrow{
	height: 60px;
	width: 60px;
	display: inline-block;
	cursor: pointer;	
	background: #42B983;
	line-height: 60px;
	text-align: center;
	color: white;
}
.arrow:hover{
	background: #67D6A4;
}
.content{
	height:90vh;
	width: 100%;
	overflow-y: auto;
	overflow-x: auto;
}
.content-wrap{
	padding: 15px;
}
header h3{
	padding: 20px 5px;
}
.user-info{
	height: 40px;
	width: 100%;
}
.user-info img{
	width: 36px;
	border: 1px solid #ccc;
	display: inline-block;
	float: left;
	border-radius:50% ;
	margin: 1px 5px;
}
.user-info p{
	height: 40px;
	line-height: 40px;
	display: inline-block;
	float: left;
}
/*@media screen and (max-width: 1080px) and (min-width: 320px) {
    .markdown-text img{
		width: 100%;
	}
}*/
</style>