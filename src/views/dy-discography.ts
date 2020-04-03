import { Component, Mixins } from 'vue-property-decorator'
import DyDiscographyArtwork from '@/components/dy-discography-artwork.vue'
import DyDiscographyDetails from '@/components/dy-discography-details.vue'
import Util from '@/mixins/util'
import { getLogger } from '@/util/logging/logger'

enum MediumType {
	Vinyl,
	CD,
}

export interface Release {
	id: string
	name: string
	date: string
	label?: string
	spotifyId?: string
	media: Medium[]
	reviews: string[]
	tracklist: Track[]
}

interface Track {
	title: string
	length: number
	lyrics: string
}

interface Medium {
	type: MediumType
	color?: string
	amount: number
	id: string
}

const logger = getLogger('DyDiscography')

@Component({
	components: {
		DyDiscographyArtwork,
		DyDiscographyDetails,
	},
})
export default class DyDiscography extends Mixins(Util) {
	selectedReleaseIndex = 0
	releases: Release[] = require('@/assets/releases.yaml')

	get selectedRelease(): Release {
		const selectedRelease = this.releases[this.selectedReleaseIndex]
		logger.debug('Selected release', selectedRelease)
		return selectedRelease
	}

	get sortedReleases(): Release[] {
		const sortedReleases = this.releases.sort(this.sortByDate)
		logger.debug('Sorted releases', sortedReleases)
		return sortedReleases
	}

	get firstSelected(): boolean {
		return this.selectedReleaseIndex === 0
	}

	get lastSelected(): boolean {
		return this.selectedReleaseIndex === this.releases.length - 1
	}

	isSelectedRelease(index: number): boolean {
		return this.selectedReleaseIndex === index
	}

	selectRelease(releaseId: string): void {
		const index = this.releases.findIndex(
			(release) => release.id === releaseId,
		)
		logger.debug('Select release', releaseId, 'with index', index)
		this.selectedReleaseIndex = index
	}
}
