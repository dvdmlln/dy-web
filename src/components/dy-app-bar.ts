import { Component, Vue, Watch } from 'vue-property-decorator'
import {
	ROUTE_NAME_DISCOGRAPHY,
	ROUTE_NAME_HOME,
	ROUTE_NAME_SHOWS,
	ROUTE_NAME_VIDEOS,
} from '@/router/index'

const DyAppBarDesktop = () => import('./dy-app-bar-desktop.vue')
const DyAppBarMobile = () => import('./dy-app-bar-mobile.vue')
const DyAppBarMobileMenu = () => import('./dy-app-bar-mobile-menu.vue')

@Component({
	components: {
		DyAppBarDesktop,
		DyAppBarMobile,
		DyAppBarMobileMenu,
	},
})
export default class DyAppBar extends Vue {
	showMenu = false

	get cssVars(): unknown {
		return {
			'--menu-mobile-padding': `${this.$vuetify.application.top}px`,
		}
	}

	get mobile(): boolean {
		return this.$vuetify.breakpoint.smAndDown
	}

	get homeRoute(): string {
		return ROUTE_NAME_HOME
	}

	get logoSrc(): NodeRequire {
		return require('@/assets/images/logo.svg')
	}

	get textLinks(): Array<{ name: string; text: string }> {
		return [
			{
				name: ROUTE_NAME_HOME,
				text: 'Home',
			},
			{
				name: ROUTE_NAME_DISCOGRAPHY,
				text: 'Discography',
			},
			{
				name: ROUTE_NAME_SHOWS,
				text: 'Shows',
			},
			{
				name: ROUTE_NAME_VIDEOS,
				text: 'Videos',
			},
		]
	}

	get iconLinks(): Array<{ href: string; icon: string }> {
		return [
			{
				href: 'https://open.spotify.com/artist/6Z6Qowl0wU3SLRME4aNC2U',
				icon: 'fab fa-spotify',
			},
			{
				href: 'https://www.facebook.com/decemberyouthhc',
				icon: 'fab fa-facebook-f',
			},
			{
				href:
					'https://www.youtube.com/channel/UC_WxSMTSz9xKrSSYhSYYghw',
				icon: 'fab fa-youtube',
			},
			{
				href: 'https://decemberyouth.bandcamp.com/',
				icon: 'fab fa-bandcamp',
			},
			{
				href: 'https://www.instagram.com/december_youth/',
				icon: 'fab fa-instagram',
			},
		]
	}

	created(): void {
		this.$router.afterEach(() => (this.showMenu = false))
	}

	@Watch('mobile')
	onMobileChanged(): void {
		this.showMenu = false
	}
}
