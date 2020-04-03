import { Component, Vue, Prop } from 'vue-property-decorator'
import VLine from './v-line.vue'
import { Show } from '@/views/dy-shows'

const DyShowsItemInfoDialog = () => import('./dy-shows-item-info-dialog.vue')

@Component({
	components: {
		DyShowsItemInfoDialog,
		VLine,
	},
})
export default class DyShowsItemLocation extends Vue {
	@Prop({ type: Object, required: true })
	show!: Show

	@Prop({ type: Boolean, required: false })
	right!: boolean

	showInfo = false

	get lineThickness(): string {
		return '4px'
	}

	get cssVars(): unknown {
		return {
			'--line-thickness': this.lineThickness,
		}
	}
}
