import './logger-config'
import Vue from 'vue'
import App from './app.vue'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'
import '@/style/fonts.scss'
import '@/style/common.scss'
import VueCookies from 'vue-cookies-reactive'
import Fragment from 'vue-fragment'

Vue.use(Fragment.Plugin)

Vue.use(VueCookies)

Vue.config.productionTip = false

new Vue({
	vuetify,
	router,
	render: (h) => h(App),
}).$mount('#app')
