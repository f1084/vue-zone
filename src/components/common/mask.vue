<template lang="html">
	<div class="mask" @click.stop.prevent="showAsideMenu" v-show="isShowMask">	
	</div>
</template>

<script>
export default{
  name: 'mask',
	computed: {
    isShowMask () {
      return this.$store.state.isMaskShow
    }
  },
  methods: {
    showAsideMenu () {
      console.log('hidden')
      this.$store.commit('showAsideMenu',false)
			this.$store.commit('showMask',false)
    }
  }
}
</script>

<style scoped>
	.mask{
		width: 100%;
		height: 100%;
		background: #333333;
		opacity: 0.2;
		position: fixed;
		z-index: 700;
		top: 0;
		display: block;
		flex: 1;
	}
</style>
