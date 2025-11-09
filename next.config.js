// next.config.js
const withImages = require('next-images')
module.exports = withImages({
	distDir: "nextjs",
	env: {
		FIREBASE_PROJECT_ID: "jacob-dayton-portfolio",
	},
	experimental: {
		sprFlushToDisk: false,
	},
  webpack(config, options) {
    return config
  },
})