import { Component, Mixins } from 'vue-property-decorator'
import Util from '@/mixins/util'
import { getLogger } from '@/util/logging/logger'

interface Video {
	id: string
	date: string
	title: string
	url: string
}

const logger = getLogger('DyVideos')

@Component
export default class DyVideos extends Mixins(Util) {
	videos: Video[] = require('@/assets/videos.yaml')

	get sortedVideos(): Video[] {
		const sortedVideos = this.videos.sort(this.sortByDate)
		logger.debug('Sorted videos', sortedVideos)
		return sortedVideos
	}

	getPreviewImage(id: string): NodeRequire {
		return require(`@/assets/images/videos/${id}.jpg`)
	}
}
