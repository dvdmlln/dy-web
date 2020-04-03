import { Component, Vue, Prop } from 'vue-property-decorator'
import DyShowsItemDate from './dy-shows-item-date.vue'
import DyShowsItemLocation from './dy-shows-item-location.vue'
import VLine from './v-line.vue'
import { Show } from '@/views/dy-shows'

@Component({
	components: {
		DyShowsItemDate,
		DyShowsItemLocation,
		VLine,
	},
})
export default class DyShowsItem extends Vue {
	@Prop({ type: Object, required: true })
	show!: Show

	@Prop({ type: Boolean, required: false })
	right!: boolean
}
