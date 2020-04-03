import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class DyAppBarMobileMenu extends Vue {
	@Prop({ type: Array, required: true })
	textLinks!: Array<{ name: string; text: string }>

	@Prop({ type: Array, required: true })
	iconLinks!: Array<{ href: string; icon: string }>
}
