import { Component, Prop, Mixins } from 'vue-property-decorator'
import { Show } from '@/views/dy-shows'
import Util from '@/mixins/util'

@Component
export default class DyShowsItemInfoDialog extends Mixins(Util) {
	@Prop({ type: Object, required: true })
	show!: Show

	@Prop({ type: Boolean, required: true })
	value!: boolean

	get showDialog(): boolean {
		return this.value
	}

	set showDialog(value: boolean) {
		this.$emit('input', value)
	}
}
