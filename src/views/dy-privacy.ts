import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DyPolicy extends Vue {
	close(): void {
		this.$router.back()
	}
}
