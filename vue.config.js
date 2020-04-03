module.exports = {
	publicPath: '/',
	transpileDependencies: ['vuetify'],
	chainWebpack: (config) => {
		config.module
			.rule('yaml')
			.test(/\.ya?ml$/)
			.type('json')
			.use('yaml-loader')
			.loader('yaml-loader')
			.end()
		config.plugin('VuetifyLoaderPlugin').tap(() => [
			{
				progressiveImages: {
					sharp: true,
				},
			},
		])
	},
}
