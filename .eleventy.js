// require("pretty-error").start()
// const { format } = require("@formkit/tempo")
// const seccionesYAreas = require("./src/_data/areas.js")
// const paginas = require("./src/_data/paginas.json")

module.exports = function(eleventyConfig) {
	// eleventyConfig.addPassthroughCopy("src/admin/config.yml");
	eleventyConfig.addPassthroughCopy("src/assets/");

	// eleventyConfig.addFilter("formatDate", (date) => {
	// 	return format(new Date(date), "DD/MM/YYYY", "es")
	// })

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