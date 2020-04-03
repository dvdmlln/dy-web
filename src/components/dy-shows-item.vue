<template lang="pug">
	v-lazy.show-item
		v-row(no-gutters)
			v-col(
				cols=3
				sm=2
				md=3
				:order="right ? 'last' : 'first'"
			)
				dy-shows-item-date(:date="show.date")
			v-col(
				cols=9
				sm=10
				md=9
			)
				dy-shows-item-location(:show="show" :right="right")
</template>

<script lang="ts" src="./dy-shows-item.ts"></script>

<style lang="scss" scoped>
	.show-item {
		padding-top: var(--show-item-padding);
		padding-bottom: var(--show-item-padding);
		min-height: var(--show-item-height);
	}
</style>
