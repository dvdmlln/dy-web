import { Component, Vue, Prop } from 'vue-property-decorator'
import { Fragment } from 'vue-fragment'

@Component({
	components: {
		Fragment,
	},
})
export default class DyAppBarDesktop extends Vue {
	@Prop({ type: Array, required: true })
	textLinks!: Array<{ name: string; text: string }>

	@Prop({ type: Array, required: true })
	iconLinks!: Array<{ href: string; icon: string }>
}
