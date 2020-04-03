<template lang="pug">
	v-card(
		flat
		:class="{ transparent: !selected }"
	).black-transparent.rounded-b-0
		v-responsive(aspect-ratio=1).pa-2.pa-sm-3.pa-md-4.pa-lg-5.pa-xl-6.align-center
			v-hover(v-slot:default="{ hover }")
				v-card(
					tile
					:class="{ 'on-hover': hover || selected }"
					@click="selectRelease"
				).artwork__image
					v-img(:src="artwork")
</template>

<script lang="ts" src="./dy-discography-artwork.ts"></script>

<style lang="scss" scoped>
	.artwork__image:not(.on-hover) {
		opacity: 0.6;
	}
</style>
