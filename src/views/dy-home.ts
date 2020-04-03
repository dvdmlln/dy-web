import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DyHome extends Vue {
	get bannerSrc(): NodeRequire {
		return require('@/assets/images/home.webp')
	}

	get ffmLink(): string {
		return 'https://ffm.to/how-are-you'
	}
}
