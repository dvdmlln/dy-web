import { Component, Vue } from 'vue-property-decorator'

interface DatedObject {
	date: string
}

@Component({
	filters: {
		date: (value: string) => {
			return new Intl.DateTimeFormat('en-US', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric',
			}).format(Date.parse(value))
		},
	},
})
export default class Util extends Vue {
	$options!: {
		filters: {
			date: (value: string) => string
		}
	}

	sortByDate(a: DatedObject, b: DatedObject): number {
		return Date.parse(b.date) - Date.parse(a.date)
	}
}
