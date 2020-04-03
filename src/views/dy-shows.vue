<template lang="pug">
	v-container.shows
		v-row
			v-col(offset=0 offset-lg=1 offset-xl=3 cols=12 lg=10 xl=6)
				div(v-for="year in sortedYears").py-4
					v-row(no-gutters align="center" justify="center")
						v-col(v-for="yearLine in 2" :order="yearLine === 1 ? 'first' : 'last'" :key="yearLine")
							v-line(light height="2px")
						v-col(cols="auto")
							h1.shows__year.px-2 {{ year }}
					v-row(justify="center")
						v-col(v-if="groupedShows[year].length === 0" cols="auto")
							div There are currently no upcoming shows.
						template(v-else)
							v-col(
								v-for="column in columns"
								cols=12
								md=6
								:class="{ 'shows__column--right': isRightAligned(column) }"
								:key="column"
							).shows__column
								dy-shows-item(
									v-for="(show, index) in dividedShows[year][column]"
									:key="index"
									:show="show"
									:right="isRightAligned(column, index)"
								)
</template>

<script lang="ts" src="./dy-shows.ts"></script>

<style lang="scss" scoped>
	.shows {
		--show-item-height: 60px;
		--show-item-padding: 24px;
		--shows-column-padding: 0px;
	}

	.shows__column {
		padding-top: var(--shows-column-padding);
		padding-bottom: var(--shows-column-padding);
	}

	.shows__column--right {
		padding-top: calc(
			var(--show-item-padding) + var(--shows-column-padding) +
				(var(--show-item-height) / 2)
		);
	}
	.shows__year {
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
	}
</style>
