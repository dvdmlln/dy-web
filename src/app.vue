<template lang="pug">
	v-app
		v-img(:src="bgSrc" :height="bgHeight" width="100%").v-application__background
		dy-app-bar
		v-main
			keep-alive
				router-view
		dy-footer
		dy-cookie-snackbar(v-model="showCookieSnackbar")
</template>

<script lang="ts" src="./app.ts"></script>

<style lang="scss" scoped>
	.v-application {
		font-family: 'Roboto', sans-serif;
	}

	.v-application__background {
		position: fixed;
	}
</style>
