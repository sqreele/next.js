// =============================================================================================================================
// INDEX
// =============================================================================================================================
const rasterImagesRule = require("./rules/raster-images");
const svgImagesRule = require("./rules/svg-images");

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      // Rejects old Next.js.
      if (!options.defaultLoaders) {
        throw new Error("This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade");
      }

      // Gets webpack options.
      const { isServer } = options;
      const componentImagesOptions = nextConfig.componentImagesOptions || {};

      // Configures webpack for raster images.
      config.module.rules.push(
        rasterImagesRule(componentImagesOptions.inlineSizeLimit, componentImagesOptions.pathPrefix, isServer),
      );

      // Configures webpack for SVG images.
      config.module.rules.push(svgImagesRule(componentImagesOptions.svgoOptions));

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};
