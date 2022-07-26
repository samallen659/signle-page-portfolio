module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./public/assets");
  eleventyConfig.addPassthroughCopy("./public/app.js");
  // eleventyConfig.addPassthroughCopy("./public/style.css");
  return {
    dir: {
      input: "public",
    },
  };
};
