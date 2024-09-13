module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			require.resolve('expo-router/babel'),
			[
				'module-resolver',
				{
					alias: {
						'@/constants': './constants',
						'@/helpers': './helpers',
						'@/hooks': './hooks',
						'@/store': './store',
						'@/styles': './styles',
						'@/assets': './assets',
					},
				},
			],
		],
	}
}
