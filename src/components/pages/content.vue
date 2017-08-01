<template lang="html">
  <div class="content">
		<div class="tabs">
    	<div class="tab btn" @click="active('all',0)"><router-link to="/">首页</router-link></div>
    	<div class="tab btn" @click="active('good',1)"><router-link to="/">精华</router-link></div>
    	<div class="tab btn" @click="active('share',2)"><router-link to="/">分享</router-link></div>
    	<div class="tab btn" @click="active('ask',3)"><router-link to="/">问答</router-link></div>
    	<div class="tab btn" @click="active('job',4)"><router-link to="/">招聘</router-link></div>
    	<div class="tab_span" id="tab-span"></div>
    </div>
    <div ref="article" class="article">
      <Vloading v-show="isLoading"></Vloading>
      <keep-alive>	
      	<router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Vloading from '../common/listLoading'
export default {
  data() {
    return {
      default_url:'https://www.vue-js.com/api/v1/topics?tab=all'
    }
  },
  created() {
  	this.$store.commit('loadingListData', {isListLoading: true});
    this.getData(this.default_url)
	},
	components:{
		Vloading,
	},
  computed: {
    isLoading() {
      return this.$store.state.isListLoading;
    },
    articleList() {
      return this.$store.state.articleList;
    }
  },

  methods: {
  	active (type,index) {
			document.getElementById('tab-span').style.left=index*20+"%";
			this.$store.commit('loadingListData', {type: type, articleList: [], isListLoading: true});
			let url="https://www.vue-js.com/api/v1/topics?tab="+type;
			this.getData(url);
		},
		getData(url){
			this.axios.get(url).then(
				articleList => this.$store.commit('loadingListData', {type: url||'all', articleList: articleList.data.data, isListLoading: false})
	    ).catch(
		    error => console.log(error)
		  );
		}
	}
}
</script>

<style scoped>
.tabs{
    height: 40px;
    width: 100%;
    background: #14D489;
    display: flex;
    margin-top: 60px;
    box-shadow: 0 0 15px #808080;
    position: relative;
}
.tab{
	flex: 1;
	color: #eee;
	text-align: center;
	line-height: 40px;
	cursor: pointer;
}
.tab a{
	text-decoration: none;
	color: #EEEEEE;
}
.tab_span{
	height: 4px;
	width: 20%;
	background: white;
	position: absolute;
	bottom: 0;
	left: 0;
	transition: all 200ms ease-in-out 0ms;
}

.slide-up-enter-active {
	transition: all .3s ease;
}
.slide-up-leave-active {
	transition: all .2s ease-out;
}
.slide-up-enter, .slide-up-leave-active {
	opacity: 0;
}
</style>
