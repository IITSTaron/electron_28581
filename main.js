'use strict'

const {app, BrowserWindow} = require('electron')
const path = require('path')

app.on('ready', async () => {
    const window = new BrowserWindow({})
    window.webContents.openDevTools()
    window.loadFile(path.join(__dirname, 'index.html')).then(() => {
        let logo = 'green'
        setInterval(() => {
            if(logo === 'green') {
                window.setIcon(path.join(__dirname, 'logo_green.ico'))
                logo = 'red'
            } else {
                window.setIcon(path.join(__dirname, 'logo_red.ico'))
                logo = 'green'
            }
        }, 1000)
    })
})

