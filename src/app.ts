import { Component, Vue } from 'vue-property-decorator'
import DyAppBar from '@/components/dy-app-bar.vue'
import DyFooter from '@/components/dy-footer.vue'

const DyCookieSnackbar = () => import('@/components/dy-cookie-snackbar.vue')

export const cookieAllowSpotify = 'allowSpotify'

@Component({
	components: {
		DyAppBar,
		DyCookieSnackbar,
		DyFooter,
	},
})
export default class App extends Vue {
	showCookieSnackbar = !this.$cookies.isKey(cookieAllowSpotify)

	get bgSrc(): NodeRequire {
		return require('@/assets/images/background.jpg')
	}

	get bgHeight(): number {
		return this.$vuetify.breakpoint.height
	}
}
