module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [['import', {
    libraryName: 'kaku-ui',
    libraryDirectory: 'dist',
    style: (name) => {
      return `${name}/style.css`
    },
  }]]
}
