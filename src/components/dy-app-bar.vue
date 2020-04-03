<template lang="pug">
	div(:style="cssVars")
		v-app-bar(app absolute :dense="mobile" clipped-left)
			v-container
				router-link(:to="{ name: homeRoute }")
					v-avatar(:size="mobile ? 32 : 48")
						v-img(:src="logoSrc")
			dy-app-bar-desktop(v-if="!mobile" :text-links="textLinks" :icon-links="iconLinks")
			dy-app-bar-mobile(v-else :show-menu.sync="showMenu")
		v-expand-transition
			dy-app-bar-mobile-menu(v-if="showMenu" :text-links="textLinks" :icon-links="iconLinks")
</template>

<script lang="ts" src="./dy-app-bar.ts"></script>
