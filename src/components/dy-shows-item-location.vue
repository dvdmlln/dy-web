<template lang="pug">
	div(:style="cssVars")
		v-row(no-gutters :justify="right ? 'start' : 'end'").show-location__row
			v-col(cols="auto" align-self="center")
				.px-2.font-weight-medium {{ show.city }}, {{ show.country }}
		v-row(no-gutters)
			v-col
				v-line(
					:height="lineThickness"
					:class="right ? 'rounded-r-0' : 'rounded-l-0'"
				).black-transparent
		v-row(no-gutters :justify="right ? 'start' : 'end'").show-location__row
			v-col(cols="auto" :order="right ? 'last' : 'first'")
				v-btn(icon @click="showInfo = true" small)
					v-icon(small) fa-info-circle
				dy-shows-item-info-dialog(v-model="showInfo" :show="show")
			v-col(cols="auto")
				v-line(
					height="100%"
					:width="lineThickness"
				).black-transparent.rounded-t-0
			v-col(
				cols="auto"
				align-self="center"
				:order="right ? 'first' : 'last'"
			).px-2.font-weight-light {{ show.venue }}
</template>

<script lang="ts" src="./dy-shows-item-location.ts"></script>

<style lang="scss" scoped>
	.show-location__row {
		height: calc((var(--show-item-height) - var(--line-thickness)) / 2);
	}
</style>
