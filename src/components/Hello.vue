<template>
	
	<div class="hello module">

		<h1 class="title stack-1">Let's<br><span class="with--text-bold">Sign Up</span></h1>

		<p class="stack-1 with--text-muted">Use the form below to sign up for this super awesome service. You totally won't regret it! Definitely no spam email coming your way. 😉</p>

		<form class="form" @submit="checkForm()">
		
			<p class="stack-1_5" v-if="errors.length">
				<span class="with--text-bold">Please correct the following error(s):</span>
				<ul>
					<li class="form--error" v-for="error in errors">{{ error }}</li>
				</ul>
			</p>
		
			<label class="with--visually-hidden" for="firstname">First Name</label>
			<input id="firstname" placeholder="First Name" type="text" v-model="user.firstname">

			<label class="with--visually-hidden" for="email">Email</label>
			<input id="email" placeholder="Email" type="text" v-model="user.email">

			<label class="with--visually-hidden" for="password">Password</label>
			<input id="password" placeholder="Password" type="text" v-model="user.password">

			<input class="button is-primary" type="submit" value="Sign Up">

		</form>

	</div>

</template>

<script>
	export default {
		name: 'Hello',
		data () {
			return {
				errors: []
			}
		},
		computed: {
			user(store) {
				return this.$store.state.user;
			}
		},
		methods: {
			submit() {
				this.$router.push({
					name: 'Success'
				})
			},
			checkForm(store) {
				const user = this.$store.state.user;

				if (user.firstname && user.email && user.password) {
					this.submit()
				}

				this.errors = []

				if (!user.firstname) {
					this.errors.push('Name required.')
				}
				if (!user.email) {
					this.errors.push('Email required.')
				}
				if (!user.password) {
					this.errors.push('Password required.')
				}

				e.preventDefault()
			}
		}
	}
</script>

<style>
</style>
