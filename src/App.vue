<template>
	<main class="site is-narrow" id="app">
		<router-view/>
	</main>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="scss">
	@import 'src/sass/application.scss';
</style>