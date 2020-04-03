import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

const Discography = () => import('@/views/dy-discography.vue')
const Shows = () => import('@/views/dy-shows.vue')
const Videos = () => import('@/views/dy-videos.vue')
const Home = () => import('@/views/dy-home.vue')
const Privacy = () => import('@/views/dy-privacy.vue')

Vue.use(VueRouter)

export const ROUTE_NAME_DISCOGRAPHY = 'Discography'
export const ROUTE_NAME_HOME = 'Home'
export const ROUTE_NAME_PRIVACY = 'Privacy'
export const ROUTE_NAME_SHOWS = 'Shows'
export const ROUTE_NAME_VIDEOS = 'Videos'

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: ROUTE_NAME_HOME,
		component: Home,
	},
	{
		path: '/discography',
		name: ROUTE_NAME_DISCOGRAPHY,
		component: Discography,
	},
	{
		path: '/privacy',
		name: ROUTE_NAME_PRIVACY,
		component: Privacy,
	},
	{
		path: '/shows',
		name: ROUTE_NAME_SHOWS,
		component: Shows,
	},
	{
		path: '/videos',
		name: ROUTE_NAME_VIDEOS,
		component: Videos,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
