// const pkg = require('./package.json')
const px2viewport = require('postcss-px-to-viewport')
const path = require('path')

module.exports = {
  pwa: {
    name: 'Rear Window',
    themeColor: '#6A7A9E',
    msTileColor: '#FFFFFF',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    appleTouchStartupImage: '/cover.jpg',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2viewport({
            viewportWidth: 375,
          }),
        ],
      },
      stylus: {
        import: path.resolve(__dirname, './src/global.styl'),
      },
    },
  },
}
