module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,jpg,css,less,txt,yml,json,scss,svg,eot,ttf,woff,woff2,png,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};