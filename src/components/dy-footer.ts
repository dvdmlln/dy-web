import { Component, Vue } from 'vue-property-decorator'
import { ROUTE_NAME_PRIVACY } from '@/router/index'

const DyImprintDialog = () => import('@/components/dy-imprint-dialog.vue')

export const cookieAllowSpotify = 'allowSpotify'

@Component({
	components: {
		DyImprintDialog,
	},
})
export default class DyFooter extends Vue {
	showImprint = false

	get privacyRoute(): string {
		return ROUTE_NAME_PRIVACY
	}
}
