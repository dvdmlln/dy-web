<template lang="pug">
	fragment
		v-container
			v-row(no-gutters justify="center")
				v-col(cols="auto")
					v-avatar(size=160)
						v-img(:src="bannerSrc" contain)
		v-container
			v-row(no-gutters justify="end")
					v-col(cols="auto")
						v-btn(icon @click="$emit('update:show-menu', !showMenu)" small)
							v-icon {{ showMenu ? 'fa-times' : 'fa-bars'}}
</template>

<script lang="ts" src="./dy-app-bar-mobile.ts"></script>
