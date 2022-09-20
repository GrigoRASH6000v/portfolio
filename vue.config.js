module.exports = {
<<<<<<< HEAD
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/portfolio/',
=======
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: ["E:\\prog\\portfolio\\src\\assets\\style\\modules\\colors.scss"],
    },
  },
>>>>>>> adb4bd8024eec869e2e9ca42597e099baacb9c2d
};
