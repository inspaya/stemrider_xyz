module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");

    // Create a collection for comics
    eleventyConfig.addCollection("_comics", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/_comics/*.md")
            .sort((a, b) => b.date - a.date);
    });

    eleventyConfig.addCollection("_projects", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/_projects/*.md")
            .sort((a, b) => b.date - a.date);
    });

    eleventyConfig.addCollection("_manuals", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/_manuals/*.md")
            .sort((a, b) => b.date - a.date);
    });

    eleventyConfig.addCollection("_worksheets", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/_worksheets/*.md")
            .sort((a, b) => b.date - a.date);
    });
   
    eleventyConfig.addCollection("_activities", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/_activities/*.md")
            .sort((a, b) => b.date - a.date);
    });

    eleventyConfig.addCollection("_lessons", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/_lessons/*.md")
            .sort((a, b) => b.date - a.date);
    });

    return {
        dir: {
            input: "src",
            output: "_site",
        }
    }
} 