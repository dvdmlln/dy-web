import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
	filters: {
		date: (value: string) => {
			return new Intl.DateTimeFormat('en-US', {
				day: '2-digit',
				month: 'short',
			}).format(Date.parse(value))
		},
	},
})
export default class DyShowsItemDate extends Vue {
	@Prop({ type: String, required: true })
	date!: string
}
