<template>
	<div class="li-outwrap scrollbar-17">
		<ul>
			<li class="item" v-for="item of articleList">
				<div class="item-content btn" @click.stop.prevent="showArticle(item.id)">
					<img :src="item.author.avatar_url"/>
					<h3>{{item.title}}</h3>
				</div>
				<div class="item-info">
					<span class="left">
						
					</span>
					<span class="right">
						<span class="time fa fa-clock-o">{{item.last_reply_at | timeago}}</span>
						<span class="pv fa fa-eye">{{item.visit_count}}</span>
						<span class="comment fa fa-comments-o">{{item.reply_count}}</span>
					</span>
				</div>
			</li>
			<li class="bottomtip">
				
			</li>
		</ul>		
	</div>
</template>
<script>
import timeago from 'timeago.js'
export default {
	computed: {
	    articleList() {
	      return this.$store.state.articleList;
	    }
    },
    methods:{
   		formatTime(time){
   			return moment().startOf('day').fromNow();
   		},
   		showArticle (id){
			this.$store.commit('showArticle',{isShowArticle:true,articleId:id});
		}
    },
    filters: {
        timeago(val) {
            let time = new Date(val)
            var thistime = timeago()
            return thistime.format(time, 'zh_CN') //将UTC时间转换格式---> 几天前,几小时前...
        }
    }
} 
</script>

<style scoped>
.li-outwrap{
	background: #EEEEEE;
	height: 85vh;
	width: 100%;
	overflow-x: hidden;
	overflow-y: auto;
}
.li-outwrap ul{
	padding: 0;
	margin: 0;
}
.li-outwrap ul li{
	padding: 0 15px;
	display: flex;
	flex-direction: column;
	list-style: none;
	height: auto;
	background: #FFFFFF;
	margin: 8px;	
}
.li-outwrap ul li a{
	text-decoration: none;
}
.item-content{
	display: inline-flex;
	flex-direction: row;
}
.item-content img{
	height: 48px;
	width: 48px;
	margin:25px 5px ;
	border-radius: 50%;
}
.item-content h3{
	margin: 25px 15px;
	color: #1f2d3d;
}
.item-info{
	font-size: 14px;
	width: 100%;
	display: inline-flex;
	flex-direction: row;
}
.left{
	flex: 1;
	margin: 3px 8px;
	color: #ABB1AF;
}
.right span{
	float: right;
	margin: 3px 8px;
	color: #ABB1AF;
	display: inline-block;
}
.bottomtip{
	background: #EEEEEE;
	height: 100px;
}
.scrollbar-17::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 2px #888;
	-moz-box-shadow: inset 0 0 2px #888;
	-o-box-shadow: inset 0 0 2px #888;
	box-shadow: inset 0 0 2px #888;
	background-color: rgba(255,255,255,0);
}

.scrollbar-17::-webkit-scrollbar {
	width: 8px;
	height: 8px;
}

.scrollbar-17::-webkit-scrollbar-thumb {
	background-color: #ABB1AF;
	border: 1px solid #fff;
	border-radius: 6px;
}

</style>