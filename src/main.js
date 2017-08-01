// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueAxios, axios);

const store = new Vuex.Store({
  state: {
  	tab: 'all',
  	articleId:null,
  	
    isMaskShow:false,
    isShowAsideMenu: false,
    isShowAbout: false,
   	isShowArticle:false,
   	isShowLogin:false,
   	
    articleList: [],
    article:"",
    
    isListLoading:false,
    isArticleLoading:false
  },
  mutations: {
    showAsideMenu (state,flag) {
      state.isShowAsideMenu = flag
    },
    showMask (state,flag){
      state.isMaskShow = flag
    },
    showAsideAbout(state, flag) {
      state.isShowAbout = flag
    },
    showLogin(state,flag){
    	state.isShowLogin=flag
    },
    showArticle(state,payload){
    	state.isShowArticle = payload.hasOwnProperty('isShowArticle') ? payload.isShowArticle : state.isShowArticle;
    	state.articleId=payload.articleId||state.articleId;
    },
    loadingListData(state,payload){
    	state.isListLoading=payload.hasOwnProperty('isListLoading') ? payload.isListLoading : state.isListLoading;
    	state.tab = payload.type || state.tab;
      state.articleList = payload.articleList || state.articleList;
    },
    loadingArticleData(state,payload){
    	state.isArticleLoading=payload.hasOwnProperty('isArticleLoading') ? payload.isArticleLoading : state.isArticleLoading;
      state.article = payload.article || state.article;
    }
  }
})

/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
