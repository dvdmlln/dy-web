import { Component, Vue, Prop } from 'vue-property-decorator'
import { Fragment } from 'vue-fragment'

@Component({
	components: {
		Fragment,
	},
})
export default class DyAppBarMobile extends Vue {
	@Prop({ type: Boolean, required: true })
	showMenu!: boolean

	get bannerSrc(): NodeRequire {
		return require('@/assets/images/banner.png')
	}
}
