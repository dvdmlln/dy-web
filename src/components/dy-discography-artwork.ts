import { Component, Vue, Prop } from 'vue-property-decorator'
import { getLogger } from '@/util/logging/logger'

const logger = getLogger('DyDiscographyArtwork')

@Component
export default class DyDiscographyArtwork extends Vue {
	@Prop({ type: Boolean, required: true })
	selected!: boolean

	@Prop({ type: String, required: true })
	releaseId!: string

	get artwork(): NodeRequire {
		return require(`@/assets/images/releases/${this.releaseId}/artwork.jpg`)
	}

	selectRelease(): void {
		logger.debug('Emit select-release', this.releaseId)
		this.$emit('select-release', this.releaseId)
	}
}
