module.exports = {
  pwa: {
    name: 'My App1',
    themeColor: '#FFE411',
    msTileColor: '#FF24F1',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    }
  }
}
