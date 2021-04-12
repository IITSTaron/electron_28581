module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'electron_28581',
        productName: 'electron_28581',
        extraMetadata: {
          name: 'electron_28581',
        },
      },
      nodeIntegration: true,
    },
  },
  pages: {
    mainapp: {
      entry: 'src/pages/mainapp/main.ts',
      template: 'public/index.html',
      title: 'electron_28581',
    },
  },
}
