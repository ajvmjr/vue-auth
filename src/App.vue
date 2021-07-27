<template>
	<div id="app">
		<transition name="slide" mode="out-in">
			<router-view />
		</transition>
		<transition name="slide" mode="out-in">
			<Toast v-if="snackbar" :message="snackbarMsg" />
		</transition>
	</div>
</template>

<script>
import Toast from '@/components/Toast'
import { mapGetters } from 'vuex'

export default {
	data: () => ({
		snackbar: false,
	}),
	computed: {
		...mapGetters({
			snackbarStatus: 'getSnackbar',
			snackbarMsg: 'getSnackbarMsg',
		}),
	},
	components: { Toast },
	watch: {
		snackbarStatus() {
			this.snackbar = this.snackbarStatus

			setTimeout(() => {
				this.snackbar = false
			}, 3000)
		},
		snackbar() {
			if (!this.snackbar) {
				this.$store.dispatch('setSnackbar', {
					status: false,
					message: '',
				})
			}
		},
	},
}
</script>

<style lang="scss">
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
}

#app {
	align-items: center;
	background: linear-gradient(120deg, #e75590, #00c2cb);
	display: flex;
	font-family: sans-serif;
	justify-content: center;
	height: 100vh;
	width: 100vw;
}

.slide-enter-active,
.slide-leave-active {
	transition: opacity 1s, transform 1s;
}

.slide-enter,
.slide-lieave-to {
	opacity: 0;
	transform: translateX(-30%);
}
</style>
