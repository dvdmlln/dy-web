import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class VLine extends Vue {
	@Prop({ type: [Number, String], required: false })
	height!: number | string

	@Prop({ type: [Number, String], required: false })
	width!: number | string

	@Prop({ type: String, required: false })
	color!: string

	@Prop({ type: Boolean, required: false })
	light!: boolean

	@Prop({ type: Boolean, required: false })
	dark!: boolean
}
