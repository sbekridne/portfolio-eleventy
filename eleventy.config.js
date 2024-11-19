
module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/image");


  eleventyConfig.addCollection("skills", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/skills/*.md");
  });

  eleventyConfig.addCollection("education", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/education/*.md");
  });

  eleventyConfig.addCollection("hobbies", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/hobbies/*.md");
  });

  eleventyConfig.addCollection("languages", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/languages/*.md");
  });

  eleventyConfig.addCollection("contact", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/contact/*.md");
  });

  eleventyConfig.addCollection("university", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/experience/university/*.md");
  });

  eleventyConfig.addCollection("professional", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/experience/professional/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
