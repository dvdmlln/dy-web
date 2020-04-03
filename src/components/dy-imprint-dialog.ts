import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class DyImprintDialog extends Vue {
	@Prop({ type: Boolean, required: true })
	value!: boolean

	get showDialog(): boolean {
		return this.value
	}

	set showDialog(value: boolean) {
		this.$emit('input', value)
	}
}
