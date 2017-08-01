<template lang="html">
	<transition name="slide-left">
		<div class="sider" v-show="isShowAsideMenu">
			<div class="user">
				<img src="../../assets/default.png"/>
			</div>
			<div class="info">
				<ul>
					<li class="fa fa-bell-o btn">我的消息</li>
					<li class="fa fa-send-o listTop btn">发布话题</li>
					<li class="fa fa-user-o listTop btn" @click="showLogin">个人中心</li>
					<li class="fa fa-heart-o listTop btn" @click="showAsideAbout">关于应用</li>
				</ul>
			</div>
			<div class="vueZone"></div>
		</div>
	</transition>
</template>

<script>
export default{
  name: 'sider',
  computed: {
    isShowAsideMenu () {
      return this.$store.state.isShowAsideMenu
    }
  },
  methods: {
  	showAsideAbout() {
      this.$store.commit('showAsideAbout', true);
    },
  	showLogin() {
  		//先判断用户是否已登录
  		if(false){
  			
  		}else{
  			//若没有登录
  			this.$store.commit('showLogin', true);	
  		}
      
    }
  }
}
</script>

<style scoped>
	.sider{
		width: 240px;
		background: white;
		position: fixed;
		z-index: 1000;
		box-shadow: 0 0 12px gray;
		top: 0;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		align-items: center;
	}
	.user{
		height: 240px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #42B983;
		justify-content: center;
	}
	.user img{
		border: 1px solid #FFFFFF;
		border-radius: 50%;
	}
	.info{
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
	.info ul{
		width: 100%;
		height: auto;
		margin: 0;
		padding: 0;
		flex: 1;
	}
	.info ul li{
		display: flex;
		flex-direction: row;
		align-items: center;
	    justify-content: center;
		list-style: none;
		height: 50px;
		width: 100%;
		color: #42B983;
	}
	.info ul li:hover{
		cursor: pointer;
		background: #efefef;
	}
	.info ul li::before{
		padding-right: 8px;
	}
	.listTop{
		border-top: 1px solid rgba(0, 0, 0, 0.05);
	}
	.vueZone{
		display: flex;
		flex-direction: row;
		flex: 1;
		width: 50%;
		height: 100px;
		background: url(../../assets/logo.png) no-repeat;
		background-size: contain;
		opacity: .2;
		align-items: center;
	    justify-content: center;
	}
	.slide-left-enter-active {
		transition: all .3s ease;
	}
	.slide-left-leave-active {
		transition: all .2s ease-out;
	}
	.slide-left-enter, .slide-left-leave-active {
		transform: translateX(-150px);
		opacity: 0;
	}
	.btn{
		
	}
</style>
