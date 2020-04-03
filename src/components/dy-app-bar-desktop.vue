<template lang="pug">
	fragment
		v-tabs(color="white" background-color="transparent" centered)
			v-tab(v-for="link in textLinks" :to="{ name: link.name }" exact :key="link.name").font-weight-bold {{ link.text }}
		v-container
			v-row(justify="end")
				v-col(v-for="link in iconLinks" cols="auto" :key="link.href")
					a(:href="link.href" target="_blank")
						v-icon.app-bar-desktop__icon {{ link.icon }}
</template>

<script lang="ts" src="./dy-app-bar-desktop.ts"></script>

<style lang="scss" scoped>
	.app-bar-desktop__icon {
		&:hover {
			color: var(--v-secondary-base);
		}
	}
</style>
