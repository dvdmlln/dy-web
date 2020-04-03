import { Component, Vue } from 'vue-property-decorator'
import DyShowsItem from '@/components/dy-shows-item.vue'
import VLine from '@/components/v-line.vue'
import { getLogger } from '@/util/logging/logger'

export interface Show {
	date: string
	city: string
	venue: string
	bands: string[]
}

enum Column {
	Left,
	Right,
}

const upcoming = 'Upcoming'

const logger = getLogger('DyDiscography')

@Component({
	components: {
		DyShowsItem,
		VLine,
	},
})
export default class DyShows extends Vue {
	shows: Show[] = require('@/assets/shows.yaml')

	get columns(): Column[] {
		const columns = this.$vuetify.breakpoint.smAndDown
			? [Column.Left]
			: [Column.Left, Column.Right]
		logger.debug('Columns', columns)
		return columns
	}

	get sortedShows(): Show[] {
		const sortedShows = this.shows.sort((a, b) => {
			const aDate = new Date(a.date)
			const bDate = new Date(b.date)
			return bDate.getTime() - aDate.getTime()
		})
		logger.debug('Sorted shows', sortedShows)
		return sortedShows
	}

	get groupedShows(): { [year: string]: Show[] } {
		const groupedShows = this.sortedShows.reduce(
			(result, show) => {
				const date = new Date(show.date)
				const year =
					date.getTime() > Date.now()
						? upcoming
						: date.getFullYear().toString()
				if (!result[year]) {
					result[year] = []
				}
				result[year].push(show)
				return result
			},
			{ [upcoming]: [] } as { [year: string]: Show[] },
		)
		logger.debug('Grouped shows', groupedShows)
		return groupedShows
	}

	get sortedYears(): string[] {
		const sortedYears = Object.keys(this.groupedShows).sort((a, b) =>
			a === upcoming
				? -1
				: b === upcoming
				? 1
				: Number.parseInt(b, 10) - Number.parseInt(a, 10),
		)
		logger.debug('Sorted years', sortedYears)
		return sortedYears
	}

	get dividedShows(): { [year: string]: { [column: string]: Show[] } } {
		const dividedShows = Object.keys(this.groupedShows).reduce(
			(result, year) => {
				result[year] =
					this.columns.length < 2
						? { [Column.Left]: this.groupedShows[year] }
						: this.divideShows(this.groupedShows[year])
				return result
			},
			{} as { [year: string]: { [column: string]: Show[] } },
		)
		logger.debug('Divided shows', dividedShows)
		return dividedShows
	}

	divideShows(shows: Show[]): { [column: string]: Show[] } {
		return shows.reduce(
			(result, show, index) => {
				result[index % 2 === 0 ? Column.Left : Column.Right].push(show)
				return result
			},
			{ [Column.Left]: [], [Column.Right]: [] } as {
				[column: string]: Show[]
			},
		)
	}

	isRightAligned(column: Column, index?: number): boolean {
		return !index
			? column === Column.Right
			: column === Column.Right ||
					(index % 2 !== 0 && this.columns.length < 2)
	}
}
