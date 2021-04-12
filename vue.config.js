module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'electron',
        //asar: false,
        //compression: 'maximum',
        productName: 'electron',
        extraMetadata: {
          name: 'electron',
        },
      },
      nodeIntegration: true,
    },
  },
  pages: {
    mainapp: {
      entry: 'src/pages/mainapp/main.ts',
      template: 'public/index.html',
      title: 'electron',
    },
  },
}
