import { Component, Vue, Prop } from 'vue-property-decorator'
import { ROUTE_NAME_PRIVACY } from '@/router/index'

export const cookieAllowSpotify = 'allowSpotify'

@Component
export default class DyCookieSnackbar extends Vue {
	@Prop({ type: Boolean, required: true })
	value!: boolean

	get privacyRoute(): string {
		return ROUTE_NAME_PRIVACY
	}

	acceptCookies(): void {
		this.$cookies.set(cookieAllowSpotify, true)
		this.$emit('input', false)
	}

	declineCookies(): void {
		this.$cookies.set(cookieAllowSpotify, false)
		this.$emit('input', false)
	}
}
