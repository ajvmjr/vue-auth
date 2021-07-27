<template>
	<div class="login-container">
		<h1 class="login-container__title">Cadastro</h1>
		<form @submit.prevent="signUp" class="login-container__form">
			<input
				placeholder="Email"
				v-model="email"
				class="login-container__form__input"
			/>
			<span class="login-container__form__input-border"></span>
			<input
				type="password"
				placeholder="Password"
				v-model="password"
				class="login-container__form__input"
			/>
			<span class="login-container__form__input-border"></span>
			<button type="submit" class="login-container__form__button">
				Confirmar
			</button>
			<p class="login-container__form__signup">
				Já possui cadastro? <router-link to="/">Login</router-link>
			</p>
		</form>
	</div>
</template>

<script>
import firebase from 'firebase'
import { validEmail } from '@/mixins/index.js'

export default {
	name: 'SignUp',
	data: () => ({
		email: '',
		password: '',
	}),
	methods: {
		async signUp() {
			if (!this.validateEmail(this.email)) return
			if (!this.validPassword(this.password)) return

			try {
				await firebase
					.auth()
					.createUserWithEmailAndPassword(this.email, this.password)

				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Conta criada com sucesso.',
				})

				setTimeout(() => {
					this.$router.push({ name: 'Login' })
				}, 3000)
			} catch (e) {
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Email já existente.',
				})
			}
		},
		validateEmail(email) {
			if (!validEmail(email)) {
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Informe um e-mail válido.',
				})
				return false
			}

			return true
		},
		validPassword(password) {
			if (password.length < 6) {
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Senha deve ter no mínimo 6 caracteres.',
				})
				return false
			}

			return true
		},
	},
}
</script>

<style lang="scss" scoped>
$pink-gradient: #e75590;
$cyan-gradient: #00c2cb;

.login-container {
	align-items: center;
	background: #ffffff;
	box-sizing: border-box;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	min-height: 400px;
	padding: 32px;
	width: 300px;
	&__title {
		color: #383838;
		margin-bottom: 32px;
	}
	&__form {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		&__input {
			box-sizing: border-box;
			border: unset;
			height: 48px;
			padding-left: 8px;
			outline: none;
			width: 100%;
		}
		&__input-border {
			background: #cfcfcf;
			height: 1px;
			margin-bottom: 16px;
			transition: 0.3s ease-in-out;
			width: 100%;

			&::after {
				display: block;
				content: '';
				background: linear-gradient(120deg, $pink-gradient, $cyan-gradient);
				height: 1px;
				margin-bottom: 16px;
				transition: 0.3s ease-in-out;
				width: 0;
			}
		}
		&__button {
			background: linear-gradient(
				120deg,
				$pink-gradient,
				$cyan-gradient,
				$pink-gradient
			);
			background-size: 200%;
			border: unset;
			border-radius: 4px;
			color: #fff;
			cursor: pointer;
			font-size: 16px;
			font-weight: bold;
			height: 48px;
			margin-bottom: 32px;
			outline: none;
			transition: 0.3s ease-in-out;
			width: 100%;

			&:hover {
				background-position: right;
			}
		}
		&__signup {
			color: #929292;
			font-size: 12px;
			text-decoration: none;
		}
	}
}
</style>
