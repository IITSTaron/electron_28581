'use strict'

import {app, BrowserWindow} from 'electron'
import path from "path";
import {createProtocol} from "vue-cli-plugin-electron-builder/lib";

app.on('ready', async () => {
  createProtocol('app')
  const window: BrowserWindow = new BrowserWindow({})
  window.webContents.openDevTools()
  const url = process.env.WEBPACK_DEV_SERVER_URL
      ? `${process.env.WEBPACK_DEV_SERVER_URL}mainapp`
      : 'app://./mainapp.html'
  window.loadURL(url).then(() => {
    let logo = 'green'
    setInterval(() => {
      if(logo === 'green') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.setIcon(path.join(__static, 'logo_green.ico'))
        logo = 'red'
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.setIcon(path.join(__static, 'logo_red.ico'))
        logo = 'green'
      }
    }, 1000)
  })
})

