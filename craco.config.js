const cracoAlias = require("craco-alias");

module.exports = {
	plugins: [
		{
			plugin: cracoAlias,
			options: {
				baseURL: "./src",
				source: "jsconfig"
			},
		},
	],
	babel: {
		loaderOptions: {
			ignore: ["./node_modules/mapbox-gl/dist/mapbox-gl.js"],
		},
	},
};
