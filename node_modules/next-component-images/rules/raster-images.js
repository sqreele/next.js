// =============================================================================================================================
// RULES - RASTER IMAGES
// =============================================================================================================================
module.exports = (inlineSizeLimit = 8192, pathPrefix = "", isServer) => ({
  test: /\.(jpe?g|png|gif)$/,
  use: [
    {
      loader: "url-loader",
      options: {
        limit: inlineSizeLimit,
        fallback: "file-loader",
        publicPath: `${pathPrefix}/_next/static/images/`,
        outputPath: `${isServer ? "../" : ""}static/images/`,
        name: "[name]-[hash].[ext]",
      },
    },
  ],
});
