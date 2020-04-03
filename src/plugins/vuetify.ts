import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
	icons: {
		iconfont: 'fa',
	},
	theme: {
		dark: true,
		themes: {
			dark: {
				primary: '#282624',
				secondary: '#ffbea3',
			},
		},
		options: {
			customProperties: true,
		},
	},
})
