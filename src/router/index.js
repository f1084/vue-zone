import Vue from 'vue'
import Router from 'vue-router'
import testHello from '@/components/test/Hello'
import about from '@/components/pages/content'
import articleList from '@/components/pages/articleList'
import article from '@/components/pages/article'
Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/test',
      name: 'test',
      component: about
    },
    {
    	path: '/',
      name: 'articleList',
      component: articleList
    },
    {
    	path: '/article/:id',
      name: 'article',
      component: article
    }
  ]
})
