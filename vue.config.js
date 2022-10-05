const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    watch: true
  },
  publicPath: '/portfolio',
  outputDir: './docs',
  css : {
    loaderOptions : {
      scss : {
        additionalData: `
          @import "@/assets/scss/common.scss";
        `
      }
    }
  }
})
