<template>
	<div class="toast">
		<span>{{ message }}</span>
	</div>
</template>

<script>
export default {
	props: {
		message: {
			type: String,
			required: true,
			default: '',
		},
	},
}
</script>

<style lang="scss" scoped>
.toast {
	background: #272727;
	box-sizing: border-box;
	border-radius: 3px;
	height: 45px;
	position: absolute;
	padding: 14px 16px;
	width: 336px;
	top: 90%;
	span {
		color: #ffffff;
		font-weight: 600;
	}
}
</style>
