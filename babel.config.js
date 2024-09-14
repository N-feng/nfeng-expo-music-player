module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      [
				'module-resolver',
				{
					alias: {
						'@/components': './components',
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
  };
};
