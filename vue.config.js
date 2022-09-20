module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: ["E:\\prog\\portfolio\\src\\assets\\style\\modules\\colors.scss"],
    },
  },
};
