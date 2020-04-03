<template lang="pug">
	v-card.app-bar-mobile-menu(tile)
		v-list(light dense).pa-0
			template(v-for="link in textLinks")
				v-list-item(:to="{ name: link.name }" exact)
					v-list-item-content
						v-list-item-title.app-bar-mobile-menu__item.text-center {{ link.text }}
				v-divider
			template(v-for="link in iconLinks")
				v-list-item(:href="link.href" target="_blank")
					v-spacer
					v-list-item-icon.justify-center
						v-icon.app-bar-mobile-menu__item {{ link.icon }}
					v-spacer
				v-divider
</template>

<script lang="ts" src="./dy-app-bar-mobile-menu.ts"></script>

<style lang="scss" scoped>
	.app-bar-mobile-menu {
		position: absolute;
		width: 100%;
		z-index: 1;
		top: var(--menu-mobile-padding);
	}

	.app-bar-mobile-menu__item {
		color: var(--v-primary-lighten3);
	}
</style>
