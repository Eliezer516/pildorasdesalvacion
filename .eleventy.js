// require("pretty-error").start()
const { format } = require("@formkit/tempo")
const metagen = require('eleventy-plugin-metagen');


module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(metagen);
	eleventyConfig.addPassthroughCopy("src/assets/");

	eleventyConfig.addFilter("formatDate", (date) => {
		return format(new Date(date), "full", "es")
	})

	eleventyConfig.addCollection("posts", (collectionsApi) => {
		return collectionsApi.getFilteredByGlob("src/posts/*.md")
	})


	eleventyConfig.setServerOptions({
		showAllHosts: true
	})

	return {
	  dir: {
	    input: "src",
	    output: "dist"
	  }
	}
};