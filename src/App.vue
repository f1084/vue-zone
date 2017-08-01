<template>
	<div>
		<div id="app">
			<Vheader></Vheader>
			<Vmask></Vmask>
			<Vsider></Vsider>
			<Vcontent></Vcontent>
			<transition name="show">
				<Varticle v-if="isShowArticle"></Varticle>
		    </transition>
			<transition name="show">
				<Vabout v-if="isShowAbout"></Vabout>
		    </transition>
		    <transition name="show">
				<Vlogin v-if="isShowLogin"></Vlogin>
		    </transition>
	  </div>
	</div>
</template>

<script>
import Vmask from './components/common/mask'
import Vsider from './components/common/sider'
import Vheader from './components/common/header'
import Vcontent from './components/pages/content'
import Varticle from './components/pages/article'
import Vabout from './components/pages/about'
import Vlogin from './components/pages/login'

export default {
  name: 'app',
  components: {
    Vheader,
    Vmask,
    Vsider,
    Vcontent,
    Varticle,
    Vlogin,
    Vabout
  },
  computed: {
  	isShowAbout() {
      return this.$store.state.isShowAbout;
    },
    isShowMask() {
      return this.$store.state.isShowMask;
    },
    isShowArticle(){
      return this.$store.state.isShowArticle;
    },
    isShowLogin(){
    	return this.$store.state.isShowLogin;
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.show-enter-active {
  transition: all .3s ease;
}
.show-leave-active {
  transition: all .2s ease-in;
}
.show-enter, .show-leave-active {
  transform: translateY(200px);
  opacity: 0;
}
</style>
