module.exports = {
  css: {
    loaderOptions: {
      scss: {
        data: `
          @import "@/assets/scss/main.scss";
        `
      }
    }
  },

  devServer: {
    disableHostCheck: true,
    proxy: {
      "^/api": {
        target: process.env.VUE_APP_API_PROXY_TARGET,
        changeOrigin: true,
        ws: true,
        logLevel: 'debug',
        pathRewrite: {
          "^/api": "/api"
        }
      }
    }
  }
};
