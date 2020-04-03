import { Component, Watch, Mixins, Prop } from 'vue-property-decorator'
import { Release } from '@/views/dy-discography'
import { cookieAllowSpotify } from '@/app'
import Util from '@/mixins/util'
import { getLogger } from '@/util/logging/logger'

const logger = getLogger('DyDiscographyDetails')

@Component({
	filters: {
		duration: (value: number): string => {
			return new Date(value * 1000).toISOString().substr(14, 5)
		},
		source: (value: string): string => {
			return ` (${value})`
		},
	},
})
export default class DyDiscographyDetails extends Mixins(Util) {
	@Prop({ type: Object, required: true })
	release!: Release

	@Prop({ type: Boolean, required: true })
	firstSelected!: boolean

	@Prop({ type: Boolean, required: true })
	lastSelected!: boolean

	expandedLyrics: number[] = []

	get showSpotifyPlayer(): boolean {
		return this.release.spotifyId && this.$cookies.get(cookieAllowSpotify)
	}

	get spotifyAlbumUrl(): string {
		return `https://open.spotify.com/embed/album/${this.release.spotifyId}`
	}

	get subtitle(): string {
		return (
			`${this.release.label ? 'Released' : 'Self-released'} ` +
			this.$options.filters.date(this.release.date) +
			`${this.release.label ? ` by ${this.release.label}` : ''}`
		)
	}

	getMediumImage(id: string): NodeRequire {
		return require(`@/assets/images/releases/${this.release.id}/${id}.png`)
	}

	toggleExpandedLyrics(index: number): void {
		logger.debug('Toggle lyrics for index', index)
		const i = this.expandedLyrics.indexOf(index)
		i < 0
			? this.expandedLyrics.push(index)
			: this.expandedLyrics.splice(i, 1)
		logger.debug('Expanded indices', this.expandedLyrics)
	}

	@Watch('release')
	onReleaseChanged(): void {
		this.expandedLyrics = []
	}
}
