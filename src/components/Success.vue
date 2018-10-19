<template>

	<div class="success module">

		<h1 class="title is-large stack-1_5">Welcome,<br><span class="with--text-bold">{{ user.firstname }}!</span></h1>

		<p class="stack-1_5">You have been registered for this 100% unobnoxious electronic mail delivery service. Please check your email for special offers every quarter hour.</p>
		<p class="with--text-large with--text-bold stack-1_5">{{ user.email }}</p>

		<button class="button is-primary push-right">Sign In</button>

	</div>

</template>

<script>
	export default {
		name: 'Success',
		computed: {
			user(store) {
				return this.$store.state.user;
			}
		},
	}
</script>
