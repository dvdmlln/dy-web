<template lang="pug">
	v-card.black-transparent.show-date
		v-card-text.fill-height
			v-row(
				no-gutter
				justify="center"
			).fill-height
				v-col(
					align-self="center"
					cols="auto"
				).pa-0
					div.text-body-1.text-sm-h6.font-weight-black {{ date | date }}
</template>

<script lang="ts" src="./dy-shows-item-date.ts"></script>

<style lang="scss" scoped>
	.show-date {
		height: var(--show-item-height);
	}
</style>
